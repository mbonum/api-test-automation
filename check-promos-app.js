// Logs into the customer app, opens /shop and every "Vedi tutti" list, and reports which promos with shop_promotion_id >= minShopId (the test promos) the
// shop API returns (shop_promotion_id, legacy promoId, price) and which are actually rendered. Screenshots in reports/.
// Usage: APP_USER=<phone> APP_PASS=<password> node check-promos-app.js [minShopId] [baseUrl]   (default 711, as compare-promos.js; read-only: never adds to cart)
// Needs playwright: taken from ../monorail/node_modules if not installed here.
const path = require('path');
let pw; try { pw = require('playwright'); } catch { pw = require(path.join(__dirname, '../monorail/node_modules/playwright')); }
const MIN_ID = Number(process.argv[2] || 711);
const BASE = process.argv[3] || 'http://core.test.k8s.dontouch.group';
if (!process.env.APP_USER || !process.env.APP_PASS) { console.error('Set APP_USER and APP_PASS'); process.exit(1); }

(async () => {
  const b = await pw.chromium.launch();
  // st-auth / st-api use an internal CA: test environment only.
  const p = await b.newPage({ ignoreHTTPSErrors: true, viewport: { width: 1280, height: 900 } });
  const api = new Map(), meta = {};
  p.on('response', async r => {
    const u = r.url();
    if (/ea-shop\/cart$/.test(u)) { const d = (await r.json().catch(() => ({})))?.items?.[0]?.detail?.details; if (d) Object.assign(meta, { geo: d.geo_name, zone: d.geo_zone }); }
    if (!/ea-shop\/.*stream/.test(u)) return;
    for (const l of (await r.text().catch(() => '')).split('\n')) {
      if (!l.startsWith('data: ')) continue;
      const e = JSON.parse(l.slice(6)), x = e.payload;
      if (e.event === 'item' && x.shop_promotion_id >= MIN_ID) api.set(x.shop_promotion_id,
        { name: x.name, legacy: x.promoId, zone_price: x.prices.zone_price, final: x.prices.final, stream: u.split('ea-shop/')[1].split('?')[0] });
    }
  });
  await p.goto(`${BASE}/login`, { waitUntil: 'networkidle' });
  // Ionic inputs ignore fill(): type like a user.
  await p.locator('input[type=text]').click(); await p.keyboard.type(process.env.APP_USER, { delay: 30 });
  await p.locator('input[type=password]').click(); await p.keyboard.type(process.env.APP_PASS, { delay: 30 });
  await p.getByText('Sign in', { exact: true }).click({ force: true });
  await p.waitForURL(u => !u.pathname.startsWith('/login'), { timeout: 30000 });

  // The new UI shows the promo name only on subscriptions: match cards by name or by the API final price.
  // ponytail: price match can collide with a regular product at the same price; the stream/legacy id in the API is the proof.
  const shown = new Map();   // shop id -> { card, where }
  // App format: 7.499 25 / 74.998,50 (Intl it-IT drops the separator on 4 digits, so format by hand).
  const priceRe = n => { const [i, d] = n.toFixed(2).split('.');
    return new RegExp(`(^|\\s)${i.replace(/\B(?=(\d{3})+(?!\d))/g, '\\.')}[ ,]${d}(\\s|€|$)`); };
  const scan = async label => {
    for (let i = 0; i < 8; i++) { await p.mouse.wheel(0, 1500); await p.waitForTimeout(500); }
    const btns = p.getByText(/^\s*(Aggiungi al carrello|Acquista)\s*$/i);
    for (let i = 0, n = await btns.count(); i < n; i++) {
      const card = btns.nth(i).locator('xpath=ancestor::*[count(.//text()[normalize-space()])>=4][1]');
      const text = (await card.innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
      const byName = [...api].filter(([, x]) => text.includes(x.name));
      const hits = byName.length ? byName : [...api].filter(([, x]) => priceRe(x.final).test(text));
      for (const [id] of hits) {
        const where = hits.length > 1 ? `${label} (ambiguo: stesso prezzo di ${hits.map(h => h[0]).filter(h => h !== id).join(', ')})` : label;
        if (!shown.has(id)) shown.set(id, { card: text.replace(/ ?(Aggiungi al carrello|Acquista)$/i, ''), where: new Set() });
        if (shown.get(id).where.has(where)) continue;
        shown.get(id).where.add(where);
        await card.scrollIntoViewIfNeeded().catch(() => {});
        await card.screenshot({ path: path.join(__dirname, 'reports', `app-promo-${id}-${label.replace(/\W+/g, '_')}.png`) }).catch(() => {});
      }
    }
  };
  await p.goto(`${BASE}/shop`, { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
  await scan('/shop');
  const more = /^\s*vedi tutti\s*$/i;   // uppercase only via CSS
  for (let k = 0, n = await p.getByText(more).count(); k < n; k++) {
    await p.goto(`${BASE}/shop`, { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
    const btn = p.getByText(more).nth(k); await btn.scrollIntoViewIfNeeded(); await btn.click();
    await p.waitForLoadState('networkidle'); await p.waitForTimeout(3000);
    await scan(new URL(p.url()).pathname);
  }
  await b.close();

  console.log(`Province ${meta.geo ?? '?'} · zone ${meta.zone ?? '?'}`);
  console.log('shop id | name | legacy promoId | zone_price | final | API stream | rendered');
  for (const [id, x] of [...api].sort((a, c) => a[0] - c[0])) {
    const r = shown.get(id);
    console.log(`${id} | ${x.name} | ${x.legacy} | ${x.zone_price} | ${x.final} | ${x.stream} | ${r ? `"${r.card}" in ${[...r.where].join(', ')}` : 'no'}`);
  }
})();
