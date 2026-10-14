#!/usr/bin/env node
// Data parity check: new v2 (AMF) vs legacy v4 (API), once per client in clients.json, read-only requests only.
// Usage: node compare.js [clients.json] [env.json]  ->  report-compare-<stamp>.md      |  node compare.js --selftest
// rid/cid = profileId, country = client country. Both sides are unwrapped from {status, data} and deep-diffed;
// still-redesigned endpoints use `map` [[v2Path, v4Path]], lists use `lists` (items matched by id/key, not position).
// `{key}` in a path: clients.json field if filled, else IDS fallback; `{pair.path}`: from an earlier pair's v2 data.
const fs = require('fs');
const assert = require('assert');

// clients.json fields (filled by hand as data becomes available) -> fallback from the client's own v2 responses
const IDS = {
  cartItemId: d => get(d, 'cart.items.0.id'),
  walletId: d => get(d, 'payments.0.id'),
  giftId: d => get(d, 'gifts.0.id') ?? get(d, 'gifts.gifts.0.id'),
  stateId: d => get(d, 'info.profile.geo_id') ?? 72,  // clients without geo: any province
};
// [[v2Path, v4Path]] — /info is still redesigned in v2
const INFO_MAP = [
  ['profile.id', 'client.id'], ['customer.id', 'client.id'], ['profile.owner_id', 'client.id'],
  ['profile.owner.id', 'client.id'], ['profile.display_name', 'client.username'],
  ['customer.display_name', 'client.username'], ['profile.owner.display_name', 'client.username'],
  ['profile.phone', 'client.number'], ['customer.phone', 'client.number'], ['profile.owner.phone', 'client.number'],
  ['customer.email', 'client.email'], ['profile.owner.email', 'client.email'],
  ['profile.country_code', 'client.nation'], ['customer.country_code', 'client.nation'],
  ['profile.owner.country_code', 'client.nation'], ['profile.tier', 'client.tier'],
  ['profile.status', 'client.status.id'], ['profile.created_at', 'client.created_at'],
  ['customer.created_at', 'client.created_at'], ['profile.owner.created_at', 'client.created_at'],
  ['customer.has_verified_number', 'client.number_verified'],
  ['profile.owner.has_verified_number', 'client.number_verified'], ['profile.pic', 'client.profile_pic'],
  ['profile.address', 'client.base_city.Indirizzo'], ['profile.geo_id', 'client.base_city.state_id'],
  ['profile.geo.state.id', 'client.base_city.state_id'], ['profile.geo.state.name', 'client.base_city.Provincia'],
  ['profile.geo.state.zone', 'client.base_city.state_zone'], ['profile.city_id', 'client.base_city.Comune_ID'],
  ['profile.geo.city.id', 'client.base_city.Comune_ID'], ['profile.geo.city.name', 'client.base_city.Comune'],
  ['profile.latitude', 'client.base_city.Latitudine'], ['profile.longitude', 'client.base_city.Longitudine'],
  ['profile.expired_at', 'client.subscription_expire_date'], ['needs.length', 'needs.length'],
  ['cart.count', 'cart.count'], ['cart.amount', 'cart.amount'], ['cart.wallet_balance', 'cart.wallet_balance'],
  ['cart.pending_payments', 'cart.pending_payments'], ['passport_geo.method', 'passportGeo.method'],
  ['passport_geo.method', 'client.passportGeo.method'], ['passport_geo.passports', 'passportGeo.passports'],
];
// {name, v2:[method, path, body?], v4:[...] | null (v2 only, status check), map?, lists?: [path], pre?(v2, v4) -> [v2, v4], note?}
const PAIRS = [
  { name: 'info', v2: ['GET', '/info'], v4: ['GET', '/info'], map: INFO_MAP },
  { name: 'cart', v2: ['GET', '/cart'], v4: ['GET', '/cart'] },
  { name: 'cart-by-id', v2: ['GET', '/cart/{cart.id}'], v4: ['GET', '/cart'], note: 'v4 has no cart-by-id: compared with current cart' },
  { name: 'cart-geo', v2: ['GET', '/cart/{cartItemId}/geo'], v4: ['GET', '/cart/{cartItemId}/geo'], lists: [''],
    pre: (a, b) => [Array.isArray(a) ? a.map(({ id, name }) => ({ id, name })) : a, b], note: 'compared as {id, name} (v2 adds geo fields)' },
  { name: 'fidelity-preview', v2: ['GET', '/fidelity/preview/{cartItemId}'], v4: ['GET', '/fidelity/preview/{cartItemId}'] },
  { name: 'fidelity', v2: ['GET', '/fidelity/cart-success'], v4: ['GET', '/fidelity/cart-success'] },
  { name: 'gifts', v2: ['GET', '/gifts'], v4: ['GET', '/gifts'] },
  { name: 'gift-detail', v2: ['GET', '/gifts/{giftId}'], v4: ['GET', '/gifts/{giftId}'] },
  { name: 'activators', v2: ['GET', '/activators/{profileId}'], v4: ['GET', '/activators/{profileId}'] },
  { name: 'payments', v2: ['GET', '/payments'], v4: null, note: 'no v4 list endpoint' },
  { name: 'payment-single', v2: ['GET', '/payments/{walletId}'], v4: ['GET', '/payments/{walletId}'] },
  { name: 'detail', v2: ['GET', '/detail/1/{stateId}'], v4: ['GET', '/detail/1/{stateId}'], lists: ['products', 'products.*.addons:bonus_name'] },
  { name: 'states', v2: ['GET', '/states/1/{stateId}'], v4: ['GET', '/states'], lists: [''] },
  { name: 'addons', v2: ['GET', '/addons'], v4: ['GET', '/addons'], lists: ['', '*.title:locale', '*.description:locale'] },
  ...['0/0', '15/1500'].map(c => ({ name: `charge-${c}`, v2: ['GET', `/charge/${c}`], v4: ['GET', `/charge/${c}`] })),
  { name: 'methods', v2: ['POST', '/methods', { charge: 100 }], v4: ['POST', '/methods', { charge: 100 }] },
  { name: 'reseller-info', v2: ['GET', '/reseller/info'], v4: ['GET', '/reseller/info'] },
];
// [endpoint, reason] — not data-diffed
const SKIPPED = [
  ['ext/info, ext/methods, ext/payments, ext/payment, ext/purchase', 'legacy needs hmac-encrypted payload, v2 plain base64 — no common request'],
  ['purchase, payment, cart/order, PUT cart, POST/DELETE cart/:id, POST cart/:id/geo', 'mutating'],
  ['gifts/:id (DELETE), gifts/:id/redeem, PUT activators/:id', 'mutating'],
  ['POST payments/:id, payments/:id/file (upload/delete)', 'mutating'],
  ['payments/:id/:method (sms/email)', 'sends a message'],
];

// ---- diff ----
const isObj = v => v !== null && typeof v === 'object';
const isEmpty = v => isObj(v) && Object.keys(v).length === 0;
function norm(v) {
  if (v === true) return 1;
  if (v === false) return 0;
  if (v === null || v === undefined) return '';
  if (typeof v === 'string' && v.trim() !== '' && !isNaN(v)) return Number(v);
  return v;
}
// same instant/resource, different spelling: ISO vs 'Y-m-d H:i:s' vs epoch vs 'YmdHis', date vs end-of-day, relative vs absolute url
function dateKey(v) {
  if (typeof v === 'number' && v > 1e9 && v < 1e10) return new Date(v * 1000).toLocaleString('sv-SE', { timeZone: 'Europe/Rome' });
  if (typeof v !== 'string') return null;
  if (/^\d{14}$/.test(v)) return v.replace(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/, '$1-$2-$3 $4:$5:$6');
  return /^\d{4}-\d\d-\d\d/.test(v) ? v.replace('T', ' ').replace(/(\.\d+)?([+-]\d\d:\d\d|Z)$/, '') : null;
}
function sameFormat(a, b) {
  const x = dateKey(a), y = dateKey(b);
  if (x && y) return x === y || x === y.slice(0, 10) || y === x.slice(0, 10);
  return typeof a === 'string' && typeof b === 'string' && a.length !== b.length &&
    (a.endsWith(b) ? b : b.endsWith(a) ? a : '').startsWith('/');
}
function leaf(path, a, b, out) {
  if (a === b || (isEmpty(a) && isEmpty(b))) return;  // PHP: [] vs {}
  if ((isEmpty(a) && b == null) || (a == null && isEmpty(b))) { out.push({ path, v2: a, v4: b, kind: 'type' }); return; }
  if (isObj(a) || isObj(b)) {
    if (JSON.stringify(a) !== JSON.stringify(b)) out.push({ path, v2: a, v4: b, kind: 'value' });
    return;
  }
  const kind = String(norm(a)) === String(norm(b)) ? 'type' : sameFormat(a, b) ? 'format' : 'value';
  out.push({ path, v2: a, v4: b, kind });
}
function deepDiff(a, b, path = '', out = []) {
  if (!isObj(a) || !isObj(b) || Array.isArray(a) !== Array.isArray(b)) { leaf(path || '.', a, b, out); return out; }
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
    const p = path ? `${path}.${k}` : k;
    if (!(k in a)) out.push({ path: p, v2: undefined, v4: b[k], kind: 'missing-in-v2' });
    else if (!(k in b)) out.push({ path: p, v2: a[k], v4: undefined, kind: 'extra-in-v2' });
    else deepDiff(a[k], b[k], p, out);
  }
  return out;
}
const get = (o, path) => path.split('.').reduce((v, k) => (v == null ? undefined : v[k]), o);
function mapDiff(a, b, map) {
  const out = [];
  for (const [p2, p4] of map) {
    const x = get(a, p2), y = get(b, p4), path = p2 === p4 ? p2 : `${p2} ↔ ${p4}`;
    if (x === undefined && y !== undefined) out.push({ path, v2: x, v4: y, kind: 'missing-in-v2' });
    else if (y === undefined && x !== undefined) out.push({ path, v2: x, v4: y, kind: 'extra-in-v2' });
    else if (isObj(x) && isObj(y)) deepDiff(x, y, path, out);
    else leaf(path, x, y, out);
  }
  return out;
}
const soft = d => ['type', 'format', 'extra-in-v2', 'order'].includes(d.kind);  // additive / same value, non-breaking
const unwrap = j => (isObj(j) && !Array.isArray(j) && 'status' in j && 'data' in j ? j.data : j);
// `lists` specs 'path' or 'path:key' ('*' = every element, '' = root): match list items by id (or key) instead of
// position, so a missing/extra item shows once instead of shifting every later one; a different order is a soft 'order' diff
function keyed(o, keys, key, at, orders) {
  if (!isObj(o)) return o;
  if (!keys.length) {
    if (!Array.isArray(o)) return o;
    orders[at] = o.map(x => (isObj(x) ? x[key] : x)).join();
    const r = {};
    o.forEach((x, i) => { const k = isObj(x) && x[key] != null ? x[key] : `#${i}`; r[k in r ? `${k}#${i}` : k] = x; });
    return r;
  }
  const [k, ...rest] = keys, sub = j => (at ? `${at}.${j}` : String(j));
  const r = Array.isArray(o) ? [...o] : { ...o };
  for (const j of k === '*' ? Object.keys(o) : [k]) if (j in o) r[j] = keyed(o[j], rest, key, sub(j), orders);
  return r;
}
function keyLists(a, b, specs, out) {
  for (const spec of specs) {
    const [path, key = 'id'] = spec.split(':'), keys = path ? path.split('.') : [], oa = {}, ob = {};
    a = keyed(a, keys, key, '', oa); b = keyed(b, keys, key, '', ob);
    for (const at of Object.keys(oa)) {
      if (at in ob && oa[at] !== ob[at]) out.push({ path: at || '.', v2: oa[at].slice(0, 80), v4: ob[at].slice(0, 80), kind: 'order' });
    }
  }
  return [a, b];
}
const verdict = diffs => (!diffs.length ? '✅' : diffs.every(soft) ? '⚠️' : '❌');

function selftest() {
  assert.deepStrictEqual(deepDiff({ a: 1, b: { c: '2' } }, { a: 1, b: { c: 2 } }), [{ path: 'b.c', v2: '2', v4: 2, kind: 'type' }]);
  assert.deepStrictEqual(deepDiff({ a: [] }, { a: {} }), []);
  assert.deepStrictEqual(deepDiff({ a: true, n: null }, { a: '1', n: '' }).map(d => d.kind), ['type', 'type']);
  assert.deepStrictEqual(deepDiff({ x: 1 }, { y: 1 }).map(d => d.kind), ['extra-in-v2', 'missing-in-v2']);
  assert.deepStrictEqual(deepDiff({ s: 'Bergamo' }, { s: 'Lodi' })[0].kind, 'value');
  assert.deepStrictEqual(deepDiff({ p: '10.00' }, { p: 10 })[0].kind, 'type');
  const m = mapDiff({ geo: { state: { id: 14 } }, items: [1, 2] }, { base_city: { state_id: '20' }, list: [1, 2] },
    [['geo.state.id', 'base_city.state_id'], ['items.length', 'list.length'], ['nope', 'nope']]);
  assert.deepStrictEqual(m, [{ path: 'geo.state.id ↔ base_city.state_id', v2: 14, v4: '20', kind: 'value' }]);
  const kinds = (a, b) => deepDiff({ k: a }, { k: b }).map(d => d.kind)[0];
  assert.strictEqual(kinds('2026-10-14T16:50:56+02:00', '2026-10-14 16:50:56'), 'format');
  assert.strictEqual(kinds('2026-11-27', '2026-11-27 23:59:59'), 'format');
  assert.strictEqual(kinds('2024-04-16 16:26:33', 1713277593), 'format');
  assert.strictEqual(kinds('2015-05-30 18:38:43', '20150530183843'), 'format');
  assert.strictEqual(kinds('https://cdn/x/a.jpg', '/x/a.jpg'), 'format');
  assert.strictEqual(kinds('2026-11-27', '2026-11-28'), 'value');
  assert.strictEqual(kinds([], null), 'type');
  const out = [];
  const [x, y] = keyLists({ p: [{ id: 2 }, { id: 1 }] }, { p: [{ id: '1' }, { id: '2' }, { id: 3 }] }, ['p'], out);
  assert.deepStrictEqual(out.map(d => d.kind), ['order']);
  assert.deepStrictEqual(deepDiff(x, y).map(d => `${d.path}:${d.kind}`), ['p.1.id:type', 'p.2.id:type', 'p.3:missing-in-v2']);
  const o2 = [];
  const [n2, n4] = keyLists({ l: [{ id: 1, t: [{ k: 'b' }, { k: 'a' }] }] }, { l: [{ id: 1, t: [{ k: 'a' }, { k: 'b' }] }] }, ['l', 'l.*.t:k'], o2);
  assert.deepStrictEqual([o2.map(d => d.path), deepDiff(n2, n4)], [['l.1.t'], []]);
  assert.deepStrictEqual(unwrap({ status: 'ok', data: [1] }), [1]);
  assert.deepStrictEqual(unwrap({ status: 'ok', id: 1 }), { status: 'ok', id: 1 });
  assert.strictEqual(verdict([{ kind: 'order' }]), '⚠️');
  assert.strictEqual(verdict([]), '✅');
  assert.strictEqual(verdict([{ kind: 'format' }, { kind: 'extra-in-v2' }]), '⚠️');
  assert.strictEqual(verdict([{ kind: 'type' }]), '⚠️');
  assert.strictEqual(verdict([{ kind: 'type' }, { kind: 'value' }]), '❌');
  console.log('selftest ok');
}

// ---- run ----
async function call(base, env, client, method, path, body) {
  const url = path.startsWith('/api/') ? env.API + path : base + path;
  if (url.includes('MISSING')) return { url, code: null, json: null };
  const headers = { Authorization: `Bearer ${env.jwt}`, Accept: 'application/json', country: client.country, rid: client.profileId, cid: client.profileId };
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  try {
    const res = await fetch(url, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
    const text = await res.text();
    let json; try { json = JSON.parse(text); } catch { json = text; }
    return { url, code: res.status, json };
  } catch (e) {
    return { url, code: 'ERR', json: e.message };
  }
}

async function runClient(client, env) {
  const V2 = `${env.AMF}/api/amf/v2/ea-shop`, V4 = `${env.API}/api/ea-shop/v4`;
  const data = {};  // pair name -> unwrapped v2 data
  const fill = s => s.replace(/\{([\w.-]+)\}/g, (_, k) => {
    const own = client[k] && client[k] !== 'NULL' ? client[k] : undefined;
    const v = k.includes('.') ? get(data, k) : own ?? (IDS[k] && IDS[k](data));
    return v == null || v === '' ? 'MISSING' : v;
  });
  const ok = c => c >= 200 && c < 300;
  const rows = [];
  for (const p of PAIRS) {
    const [m2, p2, b2] = p.v2, [m4, p4, b4] = p.v4 || [];
    const [r2, r4] = await Promise.all([
      call(V2, env, client, m2, fill(p2), b2),
      p.v4 ? call(V4, env, client, m4, fill(p4), b4) : { url: '—', code: 200, json: null },
    ]);
    const d2 = unwrap(r2.json);
    data[p.name] = d2;
    let diffs = [], v, why = '';
    if (r2.code === null || r4.code === null) { v = '⏭️'; why = 'no id for this client (add it to clients.json)'; }
    else if (r2.code >= 500 || r4.code >= 500 || r2.code === 'ERR' || r4.code === 'ERR') v = '❌';
    else if (!ok(r2.code) && !ok(r4.code)) { v = '⏭️'; why = 'both sides refused — no data for this client'; }
    else if (!ok(r2.code) || !ok(r4.code)) v = '❌';
    else if (!p.v4) v = '✅';
    else {
      let [a, b] = p.pre ? p.pre(d2, unwrap(r4.json)) : [d2, unwrap(r4.json)];
      [a, b] = keyLists(a, b, p.lists || [], diffs);
      diffs.push(...(p.map ? mapDiff(a, b, p.map) : deepDiff(a, b)));
      v = verdict(diffs);
    }
    rows.push({ p, r2, r4, diffs, v, why });
  }
  return rows;
}

async function main(DATA, ENV) {
  const env = Object.fromEntries(JSON.parse(fs.readFileSync(ENV)).values.map(v => [v.key, v.value]));
  const clients = JSON.parse(fs.readFileSync(DATA));
  const results = [];
  for (const [i, client] of clients.entries()) {
    const rows = await runClient(client, env);
    results.push({ i, client, rows });
    console.log(`client ${i} (${client.profileId} ${client.country}): ${rows.map(r => r.v).join(' ')}`);
  }
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '').replace('T', '-');
  const out = `report-compare-${stamp}.md`;
  fs.writeFileSync(out, render(results, env, stamp));
  console.log(`Report: ${out}`);
}

const cell = v => (v === undefined ? '—' : `\`${JSON.stringify(v).replace(/\|/g, '\\|').slice(0, 120)}\``);
const label = c => [c.case || c.state, c.country].filter(Boolean).join(' · ');
function render(results, env, stamp) {
  const md = [`# EA Api Shop — v2 vs v4 data parity — ${stamp}`, ''];
  md.push(`**v2:** \`${env.AMF}\` · **v4:** \`${env.API}\` · **clients:** ${results.length} (rid/cid = profileId)`, '');
  md.push('✅ match · ⚠️ only type (`"0"` vs `0`), format (date/url spelling), order or extra-in-v2 differences · ❌ value/missing differences, 5xx, or only one side 2xx · ⏭️ not testable for this client', '');

  md.push('## Clients', '', '| # | Case | Profile | ✅ | ⚠️ | ❌ | ⏭️ |', '|---|---|---|---|---|---|---|');
  results.forEach(({ i, client, rows }) => {
    const n = s => rows.filter(r => r.v === s).length;
    md.push(`| ${i} | ${label(client)} | ${client.profileId} | ${n('✅')} | ${n('⚠️')} | ${n('❌')} | ${n('⏭️')} |`);
  });
  md.push('', '## Matrix', '', `| Pair | ${results.map(r => r.i).join(' | ')} |`, `|---|${results.map(() => '---').join('|')}|`);
  PAIRS.forEach((p, k) => md.push(`| ${p.name} | ${results.map(r => r.rows[k].v).join(' | ')} |`));

  md.push('', '## Details', '');
  results.forEach(({ i, client, rows }) => {
    md.push(`### Client ${i} — ${label(client)} (profile ${client.profileId})`, '');
    rows.forEach(({ p, r2, r4, diffs, v, why }) => {
      if (v === '✅') return;
      if (v === '⏭️') { md.push(`- ⏭️ **${p.name}** — ${why} (${r2.code ?? '—'}/${r4.code ?? '—'})`); return; }
      md.push('', `#### ${v} ${p.name}`, '', `- v2 \`${p.v2[0]} ${r2.url}\` → **${r2.code}**`,
        p.v4 ? `- v4 \`${p.v4[0]} ${r4.url}\` → **${r4.code}**` : '- v4 —');
      if (p.note) md.push(`- ${p.note}`);
      md.push('');
      [['v2', r2], ['v4', r4]].forEach(([side, r]) => {
        if (typeof r.code === 'number' && r.code < 300) return;
        const { trace, ...body } = isObj(r.json) ? r.json : { body: r.json };  // drop PHP stack traces
        md.push(`${side} body${trace ? ' (stack trace omitted)' : ''}:`, '```json', JSON.stringify(body, null, 2).slice(0, 2000), '```', '');
      });
      if (!diffs.length) return;
      const table = list => ['| Path | v2 | v4 | Kind |', '|---|---|---|---|', ...list.map(d => `| \`${d.path}\` | ${cell(d.v2)} | ${cell(d.v4)} | ${d.kind} |`)];
      const hard = diffs.filter(d => !soft(d)), easy = diffs.filter(soft);
      if (hard.length) md.push(...table(hard), '');
      if (easy.length) md.push(`<details><summary>${easy.length} type/format/order/extra differences</summary>`, '', ...table(easy), '', '</details>', '');
    });
    md.push('');
  });
  md.push('## Not compared', '', '| Endpoint | Reason |', '|---|---|');
  SKIPPED.forEach(([e, r]) => md.push(`| ${e} | ${r} |`));
  return md.join('\n') + '\n';
}

if (process.argv[2] === '--selftest') selftest();
else main(process.argv[2] || 'clients.json', process.argv[3] || 'env-ea-shop.json');
