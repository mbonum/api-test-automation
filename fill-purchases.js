// Fills empty purchaseId / cartDetailId / productId / type in clients.json from EA-ST dbo.purchases.
// Usage: node fill-purchases.js [clients.json]   (read-only on the DB; only empty fields are written)
// Auth like skill clienti-test-per-stato: Windows account (-E) or SQLCMDUSER/SQLCMDPASSWORD; server SQLCMDSERVER.
const { execFileSync } = require('child_process');
const fs = require('fs');

const FILE = process.argv[2] || 'clients.json';
const SERVER = process.env.SQLCMDSERVER || 'eadb-st.services.dontouch.group\\CDB01ST';
const SQLCMD = ['sqlcmd', '/opt/mssql-tools18/bin/sqlcmd', '/mnt/c/Program Files/SqlCmd/sqlcmd.exe']
  .find(p => { try { execFileSync(p, ['-?'], { stdio: 'ignore' }); return true; } catch { return false; } });
if (!SQLCMD) { console.error('sqlcmd not found (Linux: mssql-tools18; WSL: Windows sqlcmd.exe in C:\\Program Files\\SqlCmd)'); process.exit(1); }

const clients = JSON.parse(fs.readFileSync(FILE));
const ids = [...new Set(clients.map(c => c.profileId).filter(id => /^[1-9]\d*$/.test(id)))];   // 0 = mai iscritta
if (!ids.length) { console.error('No profileId in ' + FILE); process.exit(2); }

// One purchase per escort: parent purchases first (related_id NULL, what the subscription/related endpoints want),
// then the ones with a cart_detail_id, then the newest.
const sql = `SET NOCOUNT ON;
SELECT escort_id, id, ISNULL(CAST(cart_detail_id AS varchar), ''),
       ISNULL(CASE WHEN ISJSON(content) = 1 THEN JSON_VALUE(content, '$.product_id') END, ''), type
FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY escort_id ORDER BY
        CASE WHEN related_id IS NULL THEN 0 ELSE 1 END, CASE WHEN cart_detail_id IS NULL THEN 1 ELSE 0 END, id DESC) rn
      FROM dbo.purchases WHERE deleted_at IS NULL AND escort_id IN (${ids.join(',')})) p
WHERE rn = 1`;
const auth = process.env.SQLCMDUSER ? [] : ['-E'];
const out = execFileSync(SQLCMD, [...auth, '-C', '-b', '-l', '20', '-S', SERVER, '-d', 'EA-ST', '-h', '-1', '-W', '-s', '|', '-Q', sql]).toString();

const byEscort = {};
for (const line of out.split(/\r?\n/).filter(l => l.includes('|'))) {
  const [escort, purchaseId, cartDetailId, productId, type] = line.split('|');
  byEscort[escort] = { purchaseId, cartDetailId, productId, type };
}

for (const c of clients) {
  const p = byEscort[c.profileId];
  if (p) for (const k of Object.keys(p)) if (!c[k]) c[k] = p[k];
  console.log(`${c.case.padEnd(28)} ${String(c.profileId).padEnd(7)} ` +
    (p ? `purchase ${c.purchaseId} · cartDetail ${c.cartDetailId || '-'} · product ${c.productId || '-'} · type ${c.type}` : 'no purchases'));
}
fs.writeFileSync(FILE, JSON.stringify(clients, null, 2) + '\n');
console.log(`Updated ${FILE}`);
