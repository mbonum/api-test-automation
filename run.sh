#!/usr/bin/env bash
# Test run for main Postman collection. Generates a Markdown report.
# Prereq: npm i -g newman
set -eu
node report.js
