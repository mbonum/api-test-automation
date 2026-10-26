# Disallineamenti promozioni — EAShop-ST vs EA-ST

Esecuzione 2026-10-20 14:47 UTC · perimetro `shop.promotions.id >= 711` · 19 promo shop, 105 righe legacy collegate · **26 disallineamenti su 10 promo** (712, 713, 715, 716, 718, 720, 721, 722, 723, 726)

## Problemi riscontrati

1. **riga legacy non collegata** — 9 casi su 3 promo: 716 test-promo-Elite, 722 test-promo-Passport MIGRATE-es, 723 test-promo-Passport RECE.  
   Fascia tolta dalla promo nel nuovo admin, ma la riga in `dbo.Promotions` resta: non più collegata, non più aggiornata. Se è ancora online il vecchio shop può continuare a proporla, a prezzo e date vecchi.
2. **prodotto legacy** — 6 casi su 6 promo: 712 test-promo-Cart discount, 713 test-promo-Abbonamenti Free, 718 test-promo-Giorno attivazione regalo, 720 test-promo-Passport GEO, 721 test-promo-Passport MIGRATE, 722 test-promo-Passport MIGRATE-es.  
   `Product_ID` inesistente in `dbo.Products` (nessuna FK lo impedisce): il vecchio shop non trova il prodotto della promo.
3. **paese prodotto** — 3 casi su 3 promo: 715 test-promo-Chiamami ora, 716 test-promo-Elite, 723 test-promo-Passport RECE.  
   Il prodotto legacy collegato è di un altro paese rispetto alla promo shop.
4. **Name** — 8 casi su 2 promo: 722 test-promo-Passport MIGRATE-es, 726 test-promo-Stop&go.  
   Nome legacy diverso da quello atteso (nome shop in maiuscolo, spazi → `-`, + `-FASCIA-<n>`): rinomina non propagata o caratteri tolti.

## Promo controllate

| shop id | nome | creata | aggiornata | fasce | ID legacy | gruppo | esito |
|---|---|---|---|---|---|---|---|
| 711 | test-promo-Addon Bundle | 2026-10-19 11:27:56 | 2026-10-19 14:21:18 | 1,2,3,4,5,6 | 2374, 2375, 2376, 2377, 2378, 2379 | 468 | ✅ |
| 712 | test-promo-Cart discount | 2026-10-19 11:33:10 | 2026-10-19 14:18:50 | 1,2,3,4,5,6 | 2380, 2381, 2382, 2383, 2384, 2385 | 469 | ❌ 1 |
| 713 | test-promo-Abbonamenti Free | 2026-10-19 11:58:08 | 2026-10-20 14:54:48 | 1,2,3,4,5,6 | 2386, 2387, 2388, 2389, 2390, 2391 | 470 | ❌ 1 |
| 714 | test-promo-Abbonamenti PRO | 2026-10-19 12:04:37 | 2026-10-20 16:03:31 | 1,2,3,4,5,6 | 2392, 2393, 2394, 2395, 2396, 2397 | 471 | ✅ |
| 715 | test-promo-Chiamami ora | 2026-10-19 12:10:21 | 2026-10-19 12:10:21 | 1,2,3,4,5,6 | 2398, 2399, 2400, 2401, 2402, 2403 | 472 | ❌ 1 |
| 716 | test-promo-Elite | 2026-10-19 12:16:12 | 2026-10-20 14:58:11 | 1,2 | 2404, 2405 | 473 | ❌ 5 |
| 717 | test-promo-Gift Card | 2026-10-19 12:30:29 | 2026-10-19 14:20:15 | 1,2,3,4,5,6 | 2410, 2411, 2412, 2413, 2414, 2415 | 474 | ✅ |
| 718 | test-promo-Giorno attivazione regalo | 2026-10-19 12:36:22 | 2026-10-19 12:36:22 | 1,2,3,4,5,6 | 2416, 2417, 2418, 2419, 2420, 2421 | 475 | ❌ 1 |
| 719 | test-promo-Mutator | 2026-10-19 12:41:28 | 2026-10-19 14:19:53 | 1,2,3,4,5,6 | 2422, 2423, 2424, 2425, 2426, 2427 | 476 | ✅ |
| 720 | test-promo-Passport GEO | 2026-10-19 12:46:21 | 2026-10-19 14:19:32 | 1,2,3,4,5,6 | 2428, 2429, 2430, 2431, 2432, 2433 | 477 | ❌ 1 |
| 721 | test-promo-Passport MIGRATE | 2026-10-19 15:01:41 | 2026-10-19 15:01:41 | 1,2,3,4,5,6 | 2434, 2435, 2436, 2437, 2438, 2439 | 478 | ❌ 1 |
| 722 | test-promo-Passport MIGRATE-es | 2026-10-19 15:38:18 | 2026-10-19 16:01:32 | 1,2 | 2440, 2441 | 479 | ❌ 7 |
| 723 | test-promo-Passport RECE | 2026-10-19 15:43:00 | 2026-10-20 15:44:46 | 1,2,3,5,6 | 2446, 2447, 2448, 2450, 2451 | 480 | ❌ 2 |
| 724 | test-promo-Product cloner | 2026-10-19 15:48:09 | 2026-10-19 15:48:09 | 1,2,3,4,5,6 | 2452, 2453, 2454, 2455, 2456, 2457 | 481 | ✅ |
| 725 | test-promo-Recupero giorni sospensioni | 2026-10-19 16:00:53 | 2026-10-19 16:00:53 | 1,2,3,4,5,6 | 2458, 2459, 2460, 2461, 2462, 2463 | 482 | ✅ |
| 726 | test-promo-Stop&go | 2026-10-19 16:27:03 | 2026-10-19 16:27:03 | 1,2,3,4,5,6 | 2464, 2465, 2466, 2467, 2468, 2469 | 483 | ❌ 6 |
| 727 | test-promo-Sospensioni | 2026-10-19 16:30:10 | 2026-10-19 16:30:10 | 1,2,3,4,5,6 | 2470, 2471, 2472, 2473, 2474, 2475 | 484 | ✅ |
| 728 | test-promo-Tour | 2026-10-19 16:33:26 | 2026-10-19 16:33:27 | 1,2,3,4,5,6 | 2476, 2477, 2478, 2479, 2480, 2481 | 485 | ✅ |
| 729 | test-promo-Tour equalizer | 2026-10-19 16:36:22 | 2026-10-19 16:36:22 | 1,2,3,4,5,6 | 2482, 2483, 2484, 2485, 2486, 2487 | 486 | ✅ |

## Dettaglio disallineamenti

| shop id | nome | fascia | ID legacy | campo | EAShop-ST (atteso) | EA-ST (trovato) |
|---|---|---|---|---|---|---|
| 712 | test-promo-Cart discount |  |  | prodotto legacy | `old_product_id 541 (test-Offer-promo-cart)` | `assente in dbo.Products` |
| 713 | test-promo-Abbonamenti Free |  |  | prodotto legacy | `old_product_id 542 (test-Offer-promo-abbonamenti-free)` | `assente in dbo.Products` |
| 715 | test-promo-Chiamami ora |  |  | paese prodotto | `it · Offer Chiamami` | `de · 201 DE-CLIMBBACK-600-AD-11514` |
| 716 | test-promo-Elite |  |  | paese prodotto | `it · test-Offer-promo-elite` | `de · 200 test-Offer-promo-elite` |
| 716 | test-promo-Elite | 3 | 2406 | riga legacy non collegata | `fascia 3 assente in config.prices` | `TEST-PROMO-ELITE-FASCIA-3 · gruppo 473 · prezzo 0 · dal 2026-09-30T00:00:00 · ANCORA ONLINE` |
| 716 | test-promo-Elite | 4 | 2407 | riga legacy non collegata | `fascia 4 assente in config.prices` | `TEST-PROMO-ELITE-FASCIA-4 · gruppo 473 · prezzo 0 · dal 2026-09-30T00:00:00 · ANCORA ONLINE` |
| 716 | test-promo-Elite | 5 | 2408 | riga legacy non collegata | `fascia 5 assente in config.prices` | `TEST-PROMO-ELITE-FASCIA-5 · gruppo 473 · prezzo 0 · dal 2026-10-01T00:00:00 · ANCORA ONLINE` |
| 716 | test-promo-Elite | 6 | 2409 | riga legacy non collegata | `fascia 6 assente in config.prices` | `TEST-PROMO-ELITE-FASCIA-6 · gruppo 473 · prezzo 0 · dal 2026-09-30T00:00:00 · ANCORA ONLINE` |
| 718 | test-promo-Giorno attivazione regalo |  |  | prodotto legacy | `old_product_id 543 (test-offer)` | `assente in dbo.Products` |
| 720 | test-promo-Passport GEO |  |  | prodotto legacy | `old_product_id 544 (test-Offer-promo-passport-geo)` | `assente in dbo.Products` |
| 721 | test-promo-Passport MIGRATE |  |  | prodotto legacy | `old_product_id 545 (test-offer-promo-Passport MIGRATE)` | `assente in dbo.Products` |
| 722 | test-promo-Passport MIGRATE-es |  |  | prodotto legacy | `old_product_id 545 (test-offer-promo-Passport MIGRATE-es)` | `assente in dbo.Products` |
| 722 | test-promo-Passport MIGRATE-es | 1 | 2440 | Name | `TEST-PROMO-PASSPORT-MIGRATE-ES-FASCIA-1` | `TEST-PROMO-PASSPORT-MIGRATE-FASCIA-1` |
| 722 | test-promo-Passport MIGRATE-es | 2 | 2441 | Name | `TEST-PROMO-PASSPORT-MIGRATE-ES-FASCIA-2` | `TEST-PROMO-PASSPORT-MIGRATE-FASCIA-2` |
| 722 | test-promo-Passport MIGRATE-es | 3 | 2442 | riga legacy non collegata | `fascia 3 assente in config.prices` | `TEST-PROMO-PASSPORT-MIGRATE-FASCIA-3 · gruppo 479 · prezzo 10 · dal 2026-10-19T00:00:00 · ANCORA ONLINE` |
| 722 | test-promo-Passport MIGRATE-es | 4 | 2443 | riga legacy non collegata | `fascia 4 assente in config.prices` | `TEST-PROMO-PASSPORT-MIGRATE-FASCIA-4 · gruppo 479 · prezzo 10 · dal 2026-10-19T00:00:00 · ANCORA ONLINE` |
| 722 | test-promo-Passport MIGRATE-es | 5 | 2444 | riga legacy non collegata | `fascia 5 assente in config.prices` | `TEST-PROMO-PASSPORT-MIGRATE-FASCIA-5 · gruppo 479 · prezzo 10 · dal 2026-10-19T00:00:00 · ANCORA ONLINE` |
| 722 | test-promo-Passport MIGRATE-es | 6 | 2445 | riga legacy non collegata | `fascia 6 assente in config.prices` | `TEST-PROMO-PASSPORT-MIGRATE-FASCIA-6 · gruppo 479 · prezzo 10 · dal 2026-10-19T00:00:00 · ANCORA ONLINE` |
| 723 | test-promo-Passport RECE |  |  | paese prodotto | `it · test-offer-promo-Passport RECE` | `de · 197 test-offer-promo-Passport RECE` |
| 723 | test-promo-Passport RECE | 4 | 2449 | riga legacy non collegata | `fascia 4 assente in config.prices` | `TEST-PROMO-PASSPORT-RECE-FASCIA-4 · gruppo 480 · prezzo 10 · dal 2026-10-19T00:00:00 · ANCORA ONLINE` |
| 726 | test-promo-Stop&go | 1 | 2464 | Name | `TEST-PROMO-STOP&GO-FASCIA-1` | `TEST-PROMO-STOPGO-FASCIA-1` |
| 726 | test-promo-Stop&go | 2 | 2465 | Name | `TEST-PROMO-STOP&GO-FASCIA-2` | `TEST-PROMO-STOPGO-FASCIA-2` |
| 726 | test-promo-Stop&go | 3 | 2466 | Name | `TEST-PROMO-STOP&GO-FASCIA-3` | `TEST-PROMO-STOPGO-FASCIA-3` |
| 726 | test-promo-Stop&go | 4 | 2467 | Name | `TEST-PROMO-STOP&GO-FASCIA-4` | `TEST-PROMO-STOPGO-FASCIA-4` |
| 726 | test-promo-Stop&go | 5 | 2468 | Name | `TEST-PROMO-STOP&GO-FASCIA-5` | `TEST-PROMO-STOPGO-FASCIA-5` |
| 726 | test-promo-Stop&go | 6 | 2469 | Name | `TEST-PROMO-STOP&GO-FASCIA-6` | `TEST-PROMO-STOPGO-FASCIA-6` |

## Come si confronta

Collegamento: `shop.promotions.config.prices[i].old_promotion_id` → `dbo.Promotions.ID`, una riga legacy per fascia. Atteso in legacy: `Name` = nome shop in maiuscolo, spazi → `-`, + `-FASCIA-<n>`; `Product_ID` = `config.product.old_product_id`, esistente in `dbo.Products` e dello stesso paese della promo (o `*`); `Price` = `prices[i].price`; `listing_price` = fascia; `Online_from/to` = shop; `Rules` = `state_zone = fascia` + condizioni di `rules_view`; `Blocking_rules` = `rules_block` (state_zone impostato alla fascia); tutte le righe nello stesso `Promotion_Group` e nessuna riga in più in quel gruppo. Mappatura ricavata dai dati delle promo migrate, non dal codice di sincronizzazione.

## Note

- `rules_tag` legacy non ha un corrispondente in `shop.promotions` (neanche le promo migrate lo riportano), quindi non è confrontato. Valori sulle righe controllate: `{"conditions":{"any":[{"fact":"auth.operator.permissions","operator":"intersect","value":"shop.admin"}]}}`: in legacy le promo nuove sono visibili solo agli operatori `shop.admin`.
