# Postman API Testing Automation

1. Keep updated `test-users.json`. Users status are likely to change.
2. Run `sh run.sh` to launch the tests on using the main Postman collecion and generate the test report.
3. Run test for specific collections and test set: `node report.js "<name>.postman_collection.json" <data>.json <env>.json [folder]`
   (pass `""` as folder to run the whole collection). Report: `report-<name>-<stamp>.md`.
