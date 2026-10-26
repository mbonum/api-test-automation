# Postman API Testing Automation

1. Update `clients.json` 
2. run `sh run.sh` to launch the tests and generate the report.

Run script for specific collections: `node report.js "<name>.postman_collection.json" <data>.json <env>.json [folder]`
(pass `""` as folder to run the whole collection). Report: `report-<name>-<stamp>.md`.
EA Api Shop v2: `node report.js "EA Api Shop (jwt).postman_collection.json"` (defaults in `PRESETS` in report.js)
EA Api Shop AMF v2 (BEES, V5) vs API v5 (default) or legacy v4 data parity, per client: `node compare.js [clients.json] [env.json] [--ref=v5|v4]` → `report-compare-<ref>-<stamp>.md` (read-only; fill `cartItemId`/`walletId`/`giftId` in `clients.json` as you get them, empty = first one from the API; `node compare.js --selftest` checks the diff logic)

Fill empty `purchaseId`/`cartDetailId`/`productId`/`type` in `clients.json` from EA-ST `dbo.purchases` (used by the Sunrise hmac collection): `node fill-purchases.js [clients.json]` (needs `sqlcmd`, same auth as skill `clienti-test-per-stato`). Clients come from that skill (`estrai.sh -c`).
