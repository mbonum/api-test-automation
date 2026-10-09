#!/usr/bin/env bash
# QA run for "EA Sunrise (hmac)" > V5 folder. Generates a Markdown report.
# Prereq: npm i -g newman
set -eu
node report.js 'EA Api Shop (jwt).postman_collection.json' 'ea-shop-data.json' 'env-ea-shop.json' 'v2'
