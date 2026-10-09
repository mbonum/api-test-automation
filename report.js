#!/usr/bin/env node
// Runs a collection (folder) once per data row and writes a Markdown report.
// Usage: node report.js [collection] [data.json] [env.json] [folder]  ->  report-<collection>-<stamp>.md
// No args = Sunrise V5. Pass "" as folder to run the whole collection.
const { execSync } = require('child_process');
const GLOBAL = execSync('npm root -g').toString().trim();
const newman = require(`${GLOBAL}/newman`);
const fs = require('fs');

const [COLLECTION = 'EA Sunrise (hmac).postman_collection.json',
       DATA = 'clients.json', ENV = 'env.json', FOLDER = 'V5'] = process.argv.slice(2);
const clients = JSON.parse(fs.readFileSync(DATA));
const baseUrl = (JSON.parse(fs.readFileSync(ENV)).values.find(v => /^https?:/.test(v.value)) || {}).value || '?';
const title = COLLECTION.replace(/\.postman_collection\.json$/, '');
const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '').replace('T', '-');
const out = `report-${title.replace(/\W+/g, '_').replace(/^_|_$/g, '')}-${stamp}.md`;

const perClient = [];   // [{state, rows:[{name,method,url,code,status,body,ok}]}]
let cur = null;

newman.run({
  collection: COLLECTION,
  folder: FOLDER || undefined,
  environment: ENV,
  iterationData: DATA,
  reporters: [],
}, (err) => {
  if (err) { console.error(err); process.exit(1); }
  fs.writeFileSync(out, render());
  console.log(`Report: ${out}`);
}).on('request', (err, args) => {
  const iter = args.cursor.iteration;
  if (!cur || cur.iter !== iter) {
    const c = clients[iter] || {};
    cur = { iter, state: c.state || c.case || '?', rows: [] };
    perClient.push(cur);
  }
  const method = args.request.method;
  const url = args.request.url.toString();
  if (err) {
    cur.rows.push({ name: args.item.name, method, url, code: 'ERR', status: err.message, body: '', ok: false });
  } else {
    const code = args.response ? args.response.code : 0;
    const status = args.response ? args.response.status : '';
    const body = args.response ? args.response.stream.toString() : '';
    cur.rows.push({ name: args.item.name, method, url, code, status, body, ok: code >= 200 && code < 300 });
  }
});

function bucket(code) {
  const n = typeof code === 'number' ? code : 0;
  if (n >= 200 && n < 300) return '2xx';
  if (n >= 400 && n < 500) return '4xx';
  if (n >= 500 || code === 'ERR') return '5xx';
  return 'other';
}
function pretty(body) {
  try { return JSON.stringify(JSON.parse(body), null, 2); } catch { return body; }
}

function render() {
  const md = [];
  const total = { '2xx': 0, '4xx': 0, '5xx': 0, other: 0 };
  md.push(`# ${title}${FOLDER ? ` / ${FOLDER}` : ''} QA Report — ${stamp}`, '');
  md.push(`**Env:** \`${baseUrl}\` · **Clients:** ${perClient.length}`, '');

  // Summary table
  md.push('## Summary', '');
  md.push('| # | State | 2xx | 4xx | 5xx |', '|---|---|---|---|---|');
  perClient.forEach((c, i) => {
    const b = { '2xx': 0, '4xx': 0, '5xx': 0, other: 0 };
    c.rows.forEach(r => { const k = bucket(r.code); b[k]++; total[k]++; });
    md.push(`| ${i + 1} | ${c.state} | ${b['2xx']} | ${b['4xx']} | ${b['5xx']} |`);
  });
  md.push(`| | **Total** | **${total['2xx']}** | **${total['4xx']}** | **${total['5xx']}** |`, '');

  // Failures (non-2xx) with bodies
  const fails = [];
  perClient.forEach((c, i) => c.rows.forEach(r => { if (!r.ok) fails.push({ i, state: c.state, r }); }));
  md.push(`## Failures (${fails.length})`, '');
  if (!fails.length) md.push('_None — all requests 2xx._', '');
  fails.forEach(({ i, state, r }) => {
    md.push(`### ❌ ${r.name} — client ${i + 1} (${state})`, '');
    md.push(`\`${r.method} ${r.url}\``, '', `**${r.code} ${r.status}**`, '');
    if (r.body) md.push('```json', pretty(r.body), '```', '');
  });

  // Per-client status list (compact, no bodies)
  md.push('## Detail by client', '');
  perClient.forEach((c, i) => {
    md.push(`### Client ${i + 1} — ${c.state}`, '');
    md.push('| Request | Method | Status |', '|---|---|---|');
    c.rows.forEach(r => {
      const mark = r.ok ? '✅' : '❌';
      md.push(`| ${r.name} | ${r.method} | ${mark} ${r.code} ${r.status} |`);
    });
    md.push('');
  });
  return md.join('\n');
}
