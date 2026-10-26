// Checks new EAShop-ST shop.promotions against the legacy EA-ST dbo.Promotions rows created alongside them
// (one per fascia, linked by config.prices[].old_promotion_id) and writes the mismatches to a markdown report (Italian).
// Usage: node compare-promos.js [minShopId] [report.md]   (read-only; default 711 = first id after the 19/10 migration,
//        report promo-data-mismatch.md)
//        node compare-promos.js --selftest              (checks the diff logic, no DB)
// Auth like skill clienti-test-per-stato: Windows account (-E) or SQLCMDUSER/SQLCMDPASSWORD; server SQLCMDSERVER.
const { execFileSync } = require('child_process');
const fs = require('fs');
const assert = require('assert');

const day = d => (d ? d.slice(0, 19) : null);   // shop datetime2 vs legacy datetime: compare to the second
const canon = v => JSON.stringify(v, (k, x) => (x && typeof x === 'object' && !Array.isArray(x)
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, x[k]])) : x));
const json = s => { try { return s == null ? null : JSON.parse(s); } catch { return s; } };
// Legacy rules spell "equal", the new admin "eq": same operator.
const conds = r => (Array.isArray(r?.conditions) ? r.conditions : r?.conditions?.all || [])
  .map(c => canon(c.operator === 'eq' ? { ...c, operator: 'equal' } : c)).sort();
// Blocking rules are copied per fascia with the state_zone value set to that fascia.
const withZone = (v, z) => (Array.isArray(v) ? v.map(x => withZone(x, z))
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) =>
    [k, k === 'value' && v.fact === 'state_zone' ? z : withZone(x, z)])) : v);

// Report sections for "Problemi riscontrati", most severe first. Fields not listed fall under their own name.
const ISSUES = {
  'riga legacy non collegata': 'Fascia tolta dalla promo nel nuovo admin, ma la riga in `dbo.Promotions` resta: non più collegata, non più aggiornata. Se è ancora online il vecchio shop può continuare a proporla, a prezzo e date vecchi.',
  'prodotto legacy': '`Product_ID` inesistente in `dbo.Products` (nessuna FK lo impedisce): il vecchio shop non trova il prodotto della promo.',
  'paese prodotto': 'Il prodotto legacy collegato è di un altro paese rispetto alla promo shop.',
  'riga legacy': 'Riga in `dbo.Promotions` mancante o non collegata.',
  'Price': 'Prezzo legacy diverso da quello della fascia nello shop.',
  'Product_ID': '`Product_ID` legacy diverso da `config.product.old_product_id`.',
  'Online_from': 'Inizio validità diverso.', 'Online_to': 'Fine validità diversa.',
  'Rules': '`Rules` legacy diverse da `state_zone = fascia` + condizioni di `rules_view`.',
  'Blocking_rules': '`Blocking_rules` legacy diverse da `rules_block`.',
  'listing_price': '`listing_price` diverso dalla fascia.',
  'Promotion_Group': 'Righe legacy della stessa promo in gruppi diversi.',
  'Name': 'Nome legacy diverso da quello atteso (nome shop in maiuscolo, spazi → `-`, + `-FASCIA-<n>`): rinomina non propagata o caratteri tolti.',
};

function compare(shop, legacy, minId, products = []) {
  const L = Object.fromEntries(legacy.map(r => [r.ID, r]));
  const P = Object.fromEntries(products.map(r => [r.ID, r]));
  const now = new Date().toISOString().slice(0, 19);   // ponytail: UTC vs DB local time, off by 2h at most
  const linkedBy = {};
  for (const s of shop) for (const p of json(s.config)?.prices || []) (linkedBy[p.old_promotion_id] ||= new Set()).add(s.id);
  const records = [], mismatches = [], tags = new Set();
  for (const s of shop.filter(s => s.id >= minId).sort((a, b) => a.id - b.id)) {
    const c = json(s.config), prices = c?.prices || [], groups = new Set();
    const miss = (fascia, legacyId, field, shopV, legacyV) =>
      mismatches.push({ shopId: s.id, name: s.name, fascia, legacyId, field, shop: shopV, legacy: legacyV });
    if (!prices.length) miss('', '', 'riga legacy', 'config.prices vuoto', 'nessuna riga collegabile');
    const pid = c?.product?.old_product_id, prod = P[pid];
    if (products.length && !prod) miss('', '', 'prodotto legacy', `old_product_id ${pid} (${c?.product?.name})`, 'assente in dbo.Products');
    if (prod && ![s.country, '*'].includes(prod.Country) && s.country !== '*')
      miss('', '', 'paese prodotto', `${s.country} · ${c.product.name}`, `${prod.Country} · ${prod.ID} ${prod.Name}`);
    for (const p of prices) {
      const l = L[p.old_promotion_id], f = p.fascia, id = p.old_promotion_id;
      if (id == null) { miss(f, '', 'riga legacy', 'old_promotion_id null', 'nessuna riga collegata'); continue; }
      if (!l) { miss(f, id, 'riga legacy', 'collegata', 'assente in dbo.Promotions'); continue; }
      if (linkedBy[id].size > 1) miss(f, id, 'riga legacy', `collegata anche da shop ${[...linkedBy[id]].filter(x => x !== s.id)}`, 'una sola promo shop');
      groups.add(l.Promotion_Group);
      if (l.rules_tag) tags.add(l.rules_tag);
      const expName = `${s.name.trim().toUpperCase().replace(/\s+/g, '-')}-FASCIA-${f}`;
      const checks = [
        ['Name', expName, l.Name],
        ['Product_ID', pid, l.Product_ID],
        ['Price', Number(p.price), Number(l.Price)],
        ['listing_price', f, l.listing_price],
        ['Online_from', day(s.online_from), day(l.Online_from)],
        ['Online_to', day(s.online_to), day(l.Online_to)],
        ['Rules', [canon({ fact: 'state_zone', operator: 'equal', value: f }), ...conds(json(s.rules_view))].sort().join(' AND '),
          conds(json(l.Rules)).join(' AND ')],
        ['Blocking_rules', s.rules_block == null ? null : canon(withZone(json(s.rules_block), f)),
          l.Blocking_rules == null ? null : canon(json(l.Blocking_rules))],
      ];
      for (const [field, a, b] of checks) if (a !== b) miss(f, id, field, a, b);
    }
    if (groups.size > 1) miss('', '', 'Promotion_Group', 'un gruppo per promo', [...groups].join(', '));
    // Legacy rows in the same group that the shop promotion does not link (e.g. a fascia dropped in the new admin).
    const linked = new Set(prices.map(p => p.old_promotion_id));
    for (const l of legacy.filter(l => groups.has(l.Promotion_Group) && !linked.has(l.ID))) {
      const live = !l.Online_to || day(l.Online_to) > now;
      miss(l.listing_price, l.ID, 'riga legacy non collegata', `fascia ${l.listing_price} assente in config.prices`,
        `${l.Name} · gruppo ${l.Promotion_Group} · prezzo ${Number(l.Price)} · dal ${day(l.Online_from)} · ${live ? 'ANCORA ONLINE' : `scaduta ${day(l.Online_to)}`}`);
    }
    records.push({ s, prices, groups, bad: mismatches.filter(m => m.shopId === s.id).length });
  }
  return { records, mismatches, tags };
}

function report({ records, mismatches, tags }, minId) {
  const cell = v => (v == null ? '`NULL`' : '`' + String(v).replace(/\|/g, '\\|') + '`');
  const ts = d => d?.slice(0, 19).replace('T', ' ');
  const bad = records.filter(r => r.bad);
  const out = [`# Disallineamenti promozioni — EAShop-ST vs EA-ST`, '',
    `Esecuzione ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC · perimetro \`shop.promotions.id >= ${minId}\` · ` +
    `${records.length} promo shop, ${records.reduce((n, r) => n + r.prices.length, 0)} righe legacy collegate · ` +
    `**${mismatches.length} disallineamenti su ${bad.length} promo** (${bad.map(r => r.s.id).join(', ') || 'nessuna'})`, '',
    '## Problemi riscontrati', ''];
  const byField = {};
  for (const m of mismatches) (byField[m.field] ||= []).push(m);
  const order = Object.keys(ISSUES);
  const fields = Object.keys(byField).sort((a, b) => (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99));
  if (!fields.length) out.push('Nessuno: tutte le promo hanno le righe legacy attese con i campi allineati.');
  fields.forEach((f, i) => {
    const ms = byField[f], promos = [...new Set(ms.map(m => `${m.shopId} ${m.name}`))];
    out.push(`${i + 1}. **${f}** — ${ms.length} casi su ${promos.length} promo: ${promos.join(', ')}.  `, `   ${ISSUES[f] || ''}`);
  });
  out.push('', '## Promo controllate', '', '| shop id | nome | creata | aggiornata | fasce | ID legacy | gruppo | esito |', '|---|---|---|---|---|---|---|---|');
  for (const { s, prices, groups, bad } of records)
    out.push(`| ${s.id} | ${s.name} | ${ts(s.created_at)} | ${ts(s.updated_at)} | ${prices.map(p => p.fascia).join(',')} | ` +
      `${prices.map(p => p.old_promotion_id).join(', ')} | ${[...groups].join(', ')} | ${bad ? `❌ ${bad}` : '✅'} |`);
  out.push('', '## Dettaglio disallineamenti', '');
  if (!mismatches.length) out.push('Nessuno.');
  else {
    out.push('| shop id | nome | fascia | ID legacy | campo | EAShop-ST (atteso) | EA-ST (trovato) |', '|---|---|---|---|---|---|---|');
    for (const m of mismatches) out.push(`| ${m.shopId} | ${m.name} | ${m.fascia} | ${m.legacyId} | ${m.field} | ${cell(m.shop)} | ${cell(m.legacy)} |`);
  }
  out.push('', '## Come si confronta', '',
    'Collegamento: `shop.promotions.config.prices[i].old_promotion_id` → `dbo.Promotions.ID`, una riga legacy per fascia. ' +
    'Atteso in legacy: `Name` = nome shop in maiuscolo, spazi → `-`, + `-FASCIA-<n>`; `Product_ID` = `config.product.old_product_id`, ' +
    'esistente in `dbo.Products` e dello stesso paese della promo (o `*`); `Price` = `prices[i].price`; `listing_price` = fascia; ' +
    '`Online_from/to` = shop; `Rules` = `state_zone = fascia` + condizioni di `rules_view`; `Blocking_rules` = `rules_block` ' +
    '(state_zone impostato alla fascia); tutte le righe nello stesso `Promotion_Group` e nessuna riga in più in quel gruppo. ' +
    'Mappatura ricavata dai dati delle promo migrate, non dal codice di sincronizzazione.');
  if (tags.size) out.push('', '## Note', '',
    `- \`rules_tag\` legacy non ha un corrispondente in \`shop.promotions\` (neanche le promo migrate lo riportano), quindi non è confrontato. ` +
    `Valori sulle righe controllate: ${[...tags].map(cell).join(', ')}: in legacy le promo nuove sono visibili solo agli operatori \`shop.admin\`.`);
  return out.join('\n') + '\n';
}

if (process.argv[2] === '--selftest') {
  const shop = [{ id: 9, name: 'test-promo-X y', country: 'it', rules_view: '{"conditions":{"all":[]}}', rules_block: null,
    online_from: '2026-10-18T00:00:00', online_to: null, config: JSON.stringify({ product: { old_product_id: 5, name: 'p' },
      prices: [{ fascia: 1, price: 10, old_promotion_id: 1 }, { fascia: 2, price: 10, old_promotion_id: 2 }] }) }];
  const row = (ID, f, extra) => ({ ID, Name: `TEST-PROMO-X-Y-FASCIA-${f}`, Price: 10, Product_ID: 5, listing_price: f,
    Online_from: '2026-10-18T00:00:00.000', Online_to: null, Promotion_Group: 7, Blocking_rules: null, rules_tag: null,
    Rules: `{"conditions":{"all":[{"fact":"state_zone","operator":"equal","value":${f}}]}}`, ...extra });
  const ok = compare(shop, [row(1, 1), row(2, 2)], 9, [{ ID: 5, Name: 'p', Country: 'it' }]);
  assert.deepStrictEqual(ok.mismatches, []);
  const bad = compare(shop, [row(1, 1, { Price: 12 }), row(2, 2), row(3, 3)], 9);
  assert.deepStrictEqual(bad.mismatches.map(m => [m.legacyId, m.field]), [[1, 'Price'], [3, 'riga legacy non collegata']]);
  assert.match(bad.mismatches[1].legacy, /ANCORA ONLINE/);
  assert.deepStrictEqual(compare(shop, [row(1, 1), row(2, 2)], 9, [{ ID: 6 }]).mismatches.map(m => m.field), ['prodotto legacy']);
  assert.deepStrictEqual(compare(shop, [row(1, 1), row(2, 2)], 9, [{ ID: 5, Country: 'de' }]).mismatches.map(m => m.field), ['paese prodotto']);
  assert.strictEqual(compare([{ ...shop[0], rules_block: '{"decisions":[{"conditions":{"all":[{"fact":"state_zone","operator":"notEqual","value":1}]}}]}' }],
    [row(1, 1, { Blocking_rules: '{"decisions":[{"conditions":{"all":[{"fact":"state_zone","operator":"notEqual","value":1}]}}]}' }),
      row(2, 2, { Blocking_rules: '{"decisions":[{"conditions":{"all":[{"fact":"state_zone","operator":"notEqual","value":2}]}}]}' })], 9).mismatches.length, 0);
  report(bad, 9);
  console.log('selftest ok');
  process.exit(0);
}

const minId = Number(process.argv[2] || 711);
const FILE = process.argv[3] || 'promo-data-mismatch.md';
if (!Number.isInteger(minId)) { console.error('minShopId must be an integer'); process.exit(1); }
const SERVER = process.env.SQLCMDSERVER || 'eadb-st.services.dontouch.group\\CDB01ST';
const SQLCMD = ['sqlcmd', '/opt/mssql-tools18/bin/sqlcmd', '/mnt/c/Program Files/SqlCmd/sqlcmd.exe']
  .find(p => { try { execFileSync(p, ['-?'], { stdio: 'ignore' }); return true; } catch { return false; } });
if (!SQLCMD) { console.error('sqlcmd not found (Linux: mssql-tools18; WSL: Windows sqlcmd.exe in C:\\Program Files\\SqlCmd)'); process.exit(1); }
const auth = process.env.SQLCMDUSER ? [] : ['-E'];
// FOR JSON comes back split over several lines: join them.
const query = (db, sql) => JSON.parse(execFileSync(SQLCMD, [...auth, '-C', '-b', '-l', '20', '-S', SERVER, '-d', db, '-h', '-1', '-y', '0',
  '-Q', `SET NOCOUNT ON; ${sql} FOR JSON PATH, INCLUDE_NULL_VALUES`], { maxBuffer: 1 << 28 }).toString().replace(/\r?\n/g, '') || '[]');

// All shop rows (to spot a legacy row linked twice), all legacy rows (to spot extra rows in a group).
const shop = query('EAShop-ST', 'SELECT * FROM shop.promotions WHERE deleted_at IS NULL');
const legacy = query('EA-ST', 'SELECT * FROM dbo.Promotions');
const products = query('EA-ST', 'SELECT ID, Name, Country FROM dbo.Products');
const result = compare(shop, legacy, minId, products);
fs.writeFileSync(FILE, report(result, minId));
console.log(`${result.records.length} promotions checked, ${result.mismatches.length} mismatches → ${FILE}`);
process.exit(result.mismatches.length ? 3 : 0);
