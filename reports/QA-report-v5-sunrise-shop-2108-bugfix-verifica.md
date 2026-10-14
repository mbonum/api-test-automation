# QA Report — Verifica Bugfix Sunrise V5 (repository API)

**Data:** 2026-08-21
**Ambiente:** `http://st-snr.test.k8s.dontouch.group` (API_VERSION `v5`)
**Test:** `confirm-fixes.sh` + ispezione dei body di risposta, eseguito su 7 client IT (ID sincronizzati da `clients.json`: active, active reseller, suspended, expired, recovery, to_activate_geo, to_activate_nogeo).
**Riferimento:** risposta dev alle segnalazioni di [QA-report-devs.md](QA-report-devs.md).

---

## Sintesi

| # | Bug | Endpoint | Esito |
|---|-----|----------|-------|
| 1.1 | `getId() on null` | `subscription/profile/{id}/detail` | ✅ RISOLTO |
| 1.1b | variante batch | `subscription/profile/detail?profile_ids[]=` | ✅ RISOLTO |
| 1.2 | `Missing attribute[country]` | `tours/active/profile/{id}` | ✅ crash risolto · ⚠️ normalizzazione geo legacy non verificabile |
| 3 | parametri vuoti/invalidi → 500 | varie | ✅ RISOLTO (ora 422) |
| 3b | route/metodo errati → 500 | varie | ✅ RISOLTO (ora 404/405) |
| 2 | chiarimenti sui path | varie | ✅ tutti confermati |

Tutti i 500 segnalati sono stati eliminati. Un solo punto resta da validare con dati adeguati (vedi 1.2).

---

## 1. Bug lato server

### 1.1 — `Call to a member function getId() on null` → ✅ RISOLTO

- **Endpoint:** `GET /repository/v5/purchase/subscription/profile/{profileId}/detail`
- **Prima:** `500 { "status":"ko", "message":"Call to a member function getId() on null" }`
- **Ora:** tutti i 7 profili + profilo inesistente `999999999` rispondono **200 `ok`**, nessun crash.
- **Verifica shape:** profilo senza subscription (`149581`) e inesistente (`999999999`) → `data.current: null`, come indicato dal dev.
  ```json
  { "status": "ok", "data": { "profile_id": 999999999, "current": null, "parent": null, "consumed": [], "queued": [], "migration_chain": [] } }
  ```

### 1.1b — Variante batch → ✅ RISOLTO

- **Endpoint:** `GET /repository/v5/purchase/subscription/profile/detail?profile_ids[]=...`
- **Ora:** `200 ok` con `data` come array per-profilo. In precedenza non aveva mai funzionato (crash + altri due difetti secondo il dev); ora restituisce risultati corretti anche mescolando ID validi e inesistenti.

### 1.2 — `Missing attribute[country] for entity class GeoEntity` → ✅ crash risolto · ⚠️ da completare

- **Endpoint:** `GET /repository/v5/tours/active/profile/{profileId}` (e variante `tours/profile/{id}`)
- **Prima:** `GET .../tours/active/profile/102` → `500 "Missing attribute[country] ... GeoEntity"`
- **Ora:**
  - `tours/active/profile/{id}` → **404 "Tour not found"** su tutti i client (nessun tour attivo al momento) — **nessun 500**.
  - `tours/profile/{id}` → **200** con JSON valido.
- **⚠️ Nota:** nessuno dei client di test ha attualmente un tour con `previous_geo` in formato legacy (tutti `null`, la maggior parte 0 tour). La normalizzazione descritta dal dev (`country: IT` di default, `nearby` non mappabili → `null`) **non è quindi stata attivata**. Il crash è confermato risolto; per validare del tutto la normalizzazione serve un profilo con un tour che porti dati geo legacy.

---

## 2. Chiarimenti sui path (route "non trovate") → ✅ CONFERMATI

I path indicati come errati erano presi da una collection vecchia. Verifica dei path corretti vs quelli obsoleti:

| Path | Esito |
|------|-------|
| `GET purchase/{id}/full-quantity` | 404 con messaggio *di dominio* (route esiste, id di tipo errato) ✅ |
| `GET {id}/full-quantity` (vecchio) | 404 route-not-found ✅ |
| `GET purchase/{id}/purchased-recoveries` | **200** ✅ |
| `GET purchase/profile/{id}/purchased-recoveries` (vecchio) | 404 route-not-found ✅ |
| `POST commands/v5/subscriptions/start-today` | 405 (route esiste, metodo diverso) ✅ |
| `POST v5/commands/v5/...` (vecchio, v5 duplicato) | 404 route-not-found ✅ |
| `POST v5/profiles/{id}/purchases/gift` | 422 "product id field is required" (route esiste) ✅ |
| `POST v5/escorts/{id}/purchases/gift` (vecchio) | 404 route-not-found ✅ |

---

## 3. Gestione parametri vuoti/invalidi → ✅ RISOLTO

Le validation error ora escono **422** con dettaglio per campo (`{"status":"ko","message":"...","errors":{"campo":["..."]}}`) invece di 500.

| Parametro (vuoto) | Endpoint esempio | Esito |
|---|---|---|
| `parent_id=` | `/repository/v5/purchase/cart-detail/147262/subscriptions?parent_id=` | **422** *The parent id must be an integer.* |
| `exclude_purchase_id` | `/repository/v5/purchase/related-only-subscriptions/15739?exclude_purchase_id&only_purchased` | **422** (più 1 altro errore) |
| `raw_json_search` | `/repository/v5/purchase/profile/102/all-filtered-by-type-and-status?...&raw_json_search` | **422** *The raw json search must be a string.* |

### 3b — Route inesistenti / metodo errato → ✅ RISOLTO

| Caso | Esito |
|---|---|
| route inesistente | **404** *The route ... could not be found.* |
| metodo sbagliato (POST su route GET) | **405** *The POST method is not supported for route ...* |

---

## Come riprodurre

```bash
bash confirm-fixes.sh
```

Gli ID dei client sono in `clients.json`; l'array `CLIENTS` di `confirm-fixes.sh` è stato risincronizzato con tali ID in data 2026-08-21.

---

## Azioni residue

- **1.2 tours/country:** fornire un `profileId` con un tour che abbia `previous_geo` in formato legacy (o seedarlo su staging) per verificare in positivo la normalizzazione `country: IT` / `nearby → null`.
