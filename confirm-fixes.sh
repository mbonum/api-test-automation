#!/usr/bin/env bash
# Confirmation tests for the pushed fixes (QA-report-v5-sunrise-shop-2907.md + dev response).
# Repository V5 GETs are open on staging (no HMAC needed).
set -u
BASE="http://st-snr.test.k8s.dontouch.group"
T=20

# profileId:purchaseId pairs from clients.json (state)
CLIENTS=(
  "102:15739:active"
  "148372:2248569:active-reseller"
  "148075:2248072:suspended"
  "147871:2238508:expired"
  "116432:1365902:recovery"
  "148681:1:to_activate_geo"
  "0:1:to_activate_nogeo"
)

hit() { # method url  -> prints "HTTP <code> | status=<..> msg=<..>"
  local m="$1" u="$2"
  local body code
  body="$(curl -s -X "$m" -w $'\n%{http_code}' --max-time "$T" "$u")"
  code="${body##*$'\n'}"
  body="${body%$'\n'*}"
  local status msg
  status="$(printf '%s' "$body" | python3 -c 'import sys,json;
try: print(json.load(sys.stdin).get("status",""))
except: print("<non-json>")' 2>/dev/null)"
  msg="$(printf '%s' "$body" | python3 -c 'import sys,json;
try:
 d=json.load(sys.stdin); print((d.get("message") or "")[:90])
except: print("")' 2>/dev/null)"
  printf 'HTTP %-3s status=%-6s %s\n' "$code" "$status" "$msg"
}

sec() { printf '\n\033[1m==== %s ====\033[0m\n' "$1"; }

sec "1.1  getId() on null  ->  GET /repository/v5/purchase/subscription/profile/{profileId}/detail"
for c in "${CLIENTS[@]}"; do IFS=: read -r pid _ st <<<"$c"
  printf '  profile %-7s %-18s ' "$pid" "$st"
  hit GET "$BASE/repository/v5/purchase/subscription/profile/$pid/detail"
done
printf '  %-26s ' "nonexistent profile 999999999"
hit GET "$BASE/repository/v5/purchase/subscription/profile/999999999/detail"

sec "1.1b batch variant  ->  GET /repository/v5/purchase/subscription/profile/detail?profile_ids[]=..."
printf '  %-26s ' "ids 102,148372,999999999"
hit GET "$BASE/repository/v5/purchase/subscription/profile/detail?profile_ids[]=102&profile_ids[]=148372&profile_ids[]=999999999"

sec "1.2  Missing attribute[country]  ->  GET /repository/v5/tours/active/profile/{profileId}"
for c in "${CLIENTS[@]}"; do IFS=: read -r pid _ st <<<"$c"
  printf '  profile %-7s %-18s ' "$pid" "$st"
  hit GET "$BASE/repository/v5/tours/active/profile/$pid"
done
sec "1.2b  variant  ->  GET /repository/v5/tours/profile/{profileId}"
for c in "${CLIENTS[@]}"; do IFS=: read -r pid _ st <<<"$c"
  printf '  profile %-7s %-18s ' "$pid" "$st"
  hit GET "$BASE/repository/v5/tours/profile/$pid"
done

sec "3.  Empty/invalid params  ->  expect 422 (was 500)"
printf '  %-40s ' "parent_id= (empty)"
hit GET "$BASE/repository/v5/purchase/cart-detail/147262/subscriptions?parent_id="
printf '  %-40s ' "exclude_purchase_id (empty flag)"
hit GET "$BASE/repository/v5/purchase/related-only-subscriptions/15739?exclude_purchase_id&only_purchased"
printf '  %-40s ' "raw_json_search (empty flag)"
hit GET "$BASE/repository/v5/purchase/profile/102/all-filtered-by-type-and-status?start_date=2026-01-01&end_date=2026-12-31&included_types[]=3&raw_json_search"

sec "3b.  Route/method errors  ->  expect 404 / 405 (was 500)"
printf '  %-40s ' "nonexistent route"
hit GET "$BASE/repository/v5/purchase/this-route-does-not-exist"
printf '  %-40s ' "wrong method (POST on GET route)"
hit POST "$BASE/repository/v5/purchase/subscription/profile/102/detail"

sec "2.  Route paths clarified by dev (expect NOT 'route could not be found')"
printf '  %-40s ' "full-quantity purchase/{id}"
hit GET "$BASE/repository/v5/purchase/15739/full-quantity"
printf '  %-40s ' "full-quantity OLD path (no purchase/)"
hit GET "$BASE/repository/v5/15739/full-quantity"
printf '  %-40s ' "purchased-recoveries purchase/{id}"
hit GET "$BASE/repository/v5/purchase/15739/purchased-recoveries"
printf '  %-40s ' "purchased-recoveries OLD path (profile/)"
hit GET "$BASE/repository/v5/purchase/profile/148372/purchased-recoveries"
printf '  %-40s ' "commands/v5 (corrected, no leading v5)"
hit POST "$BASE/commands/v5/subscriptions/start-today"
printf '  %-40s ' "commands OLD path (v5/commands/v5/..)"
hit POST "$BASE/v5/commands/v5/subscriptions/start-today"
printf '  %-40s ' "gift profiles/{id} (corrected)"
hit POST "$BASE/v5/profiles/148372/purchases/gift"
printf '  %-40s ' "gift escorts/{id} OLD path"
hit POST "$BASE/v5/escorts/148372/purchases/gift"
echo
