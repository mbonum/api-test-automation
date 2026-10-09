# Postman API Testing Automation

1. Update `clients.json` 
2. run `sh run.sh` to launch the tests and generate the report.

Run script for specific collections: `node report.js "<name>.postman_collection.json" <data>.json <env>.json [folder]`
(pass `""` as folder to run the whole collection). Report: `report-<name>-<stamp>.md`.
EA Api Shop v2: `node report.js "EA Api Shop (jwt).postman_collection.json"` (defaults in `PRESETS` in report.js)

TODO: Script to query the DB and update `clients.json`.
