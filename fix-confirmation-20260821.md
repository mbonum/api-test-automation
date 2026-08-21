# Fix Confirmation — 2026-08-21

Env: `http://st-snr.test.k8s.dontouch.group` · IDs synced from `clients.json`.
Ran `confirm-fixes.sh` + targeted body inspection.

| # | Bug | Verdict |
|---|-----|---------|
| 1 | `getId() on null` — `subscription/profile/{id}/detail` | ✅ FIXED |
| 1b | batch `subscription/profile/detail?profile_ids[]=` | ✅ FIXED |
| 2 | `Missing attribute[country]` — `tours/active/profile/{id}` | ✅ crash gone ⚠️ legacy-geo path not exercisable |
| 3 | empty/invalid params → 422 | ✅ FIXED |
| 3b | bad route/method → 404/405 | ✅ FIXED |
| 2* | route-path clarifications | ✅ all confirmed |

## 1 — subscription detail
All 7 profiles + nonexistent `999999999` → **200 ok**. No crash.
- No-sub profile `149581` and `999999999` → `data.current: null` (as dev described).
- Batch → **200**, `data` is a per-profile array. Previously non-functional; now works.

## 2 — tours country
Original: `tours/active/profile/102` → **500** `Missing attribute[country] ... GeoEntity`.
Now: `tours/active/profile/{id}` → **404 "Tour not found"** for all clients (no active tours right now) — **no 500**.
`tours/profile/{id}` → **200** valid JSON.
⚠️ **Caveat:** no current test client has a tour with a legacy `previous_geo` (all `null`, most have 0 tours), so the `country: IT` default / `nearby → null` normalization could not be positively triggered. The crash is confirmed gone; the normalization itself needs a client with legacy geo data to fully validate.

## 3 — validation & routing
- `parent_id=` empty → **422** "The parent id must be an integer."
- `exclude_purchase_id` empty flag → **422** (per-field errors).
- `raw_json_search` empty flag → **422** "must be a string."
- nonexistent route → **404**; wrong method → **405**. No more 500s.

## Route-path clarifications (all confirmed)
| Path | Result |
|------|--------|
| `purchase/{id}/full-quantity` | 404 *domain* msg (route exists, wrong id type) |
| `{id}/full-quantity` (old) | 404 route-not-found ✅ |
| `purchase/{id}/purchased-recoveries` | **200** ✅ |
| `purchase/profile/{id}/purchased-recoveries` (old) | 404 route-not-found ✅ |
| `commands/v5/...` | 405 (route exists, needs correct method) ✅ |
| `v5/commands/v5/...` (old) | 404 route-not-found ✅ |
| `v5/profiles/{id}/purchases/gift` | 422 field required (route exists) ✅ |
| `v5/escorts/{id}/purchases/gift` (old) | 404 route-not-found ✅ |
