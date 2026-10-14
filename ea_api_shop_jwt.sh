#!/usr/bin/env bash
# QA run for "EA Api Shop (jwt)" > v2 folder + v2 vs v4 data parity. Generates Markdown reports.
# Prereq: npm i -g newman
set -eu
node report.js 'EA Api Shop (jwt).postman_collection.json' 'clients.json' 'env-ea-shop.json' 'v2'
node compare.js
