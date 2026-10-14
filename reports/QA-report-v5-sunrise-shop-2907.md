# QA Report Sunrise V5 (repository API)

**Data:** 2026-07-29
**Ambiente:** `http://st-snr.test.k8s.dontouch.group` (API_VERSION `v5`)
**Test:** run script della cartella `V5` della collection Postman *EA Sunrise (hmac)*, eseguito su 7 clienti IT, 6 ES, (TODO: 5 DE, 5 UK).
Ogni cliente testato ha uno dei seguenti stati: active, active (reseller), suspended, expired, recovery, to_activate_geo, to_activate_nogeo).

---

## Sintesi

Sono stati registrati numerosi errori **HTTP 500**. Dall'analisi dei body di risposta gli errori si dividono in tre categorie:

1. **Bug lato server** richieste con ID validi che restituiscono comunque 500. **Da verificare.**
2. **Route non trovate con ID validi** endpoint che rispondono 500 "route could not be found" anche con parametri corretti. Da verificare se non implementati o con path errato.
3. **500 su parametro mancante/vuoto** comportamento errato: il server dovrebbe rispondere 400/404, non 500.

---

## 1. Bug lato server

Richieste effettuate con ID **validi ed esistenti**, che restituiscono comunque HTTP 500 con eccezione applicativa.

### 1.1 `Call to a member function getId() on null`

- **Endpoint:** `GET /repository/v5/purchase/subscription/profile/{profileId}/detail`
- **Esempio:** `GET /repository/v5/purchase/subscription/profile/148372/detail`
- **Risposta:**
  ```json
  { "status": "ko", "message": "Call to a member function getId() on null" }
  ```
- **Descrizione:** dereferenziazione di un oggetto `null`. L'endpoint dovrebbe gestire il caso (profilo/subscription non presente) restituendo una risposta valida o un 404, non un 500 (internal server error).

### 1.2 Active tour by profile `Missing attribute[country] for entity class GeoEntity`

- **Endpoint:** `GET /repository/v5/tours/active/profile/{profileId}`
- **Esempio:** `GET /repository/v5/tours/active/profile/102`
- **Risposta:**
  ```json
  { "status": "ko", "message": "Missing attribute[country] for entity class[EA\\EASlurm\\Entities\\Geo\\GeoEntity]" }
  ```
- **Descrizione:** costruzione di `GeoEntity` senza l'attributo obbligatorio `country`. Con `profileId` valido l'endpoint non dovrebbe fallire.

---

## 2. Route non trovate con ID validi

Endpoint che rispondono `500 "route could not be found"` anche con parametri corretti. Da verificare lato dev/collection.

### 2.1 Path base duplicato COMMANDS > `v5/commands/v5/...`

- **Endpoint interessati:**
  - `POST /v5/commands/v5/subscriptions/start-today`
  - `POST /v5/commands/v5/suspensions/start-today`
  - `POST /v5/commands/v5/suspensions/stop-today`
- **Risposta:** `The route v5/commands/v5/subscriptions/start-today could not be found.`
- **Descrizione:** il segmento `v5` risulta **duplicato** nel path. Probabile errore di path nella collection Postman (base URL che già include il segmento). Da correggere lato nostro / confermare il path corretto con i dev.

### 2.2 `full-quantity` senza segmento `purchase`

- **Endpoint:** `GET /repository/v5/{id}/full-quantity`
- **Esempio:** `GET /repository/v5/15739/full-quantity` (ID valido) → route not found
- **Descrizione:** a differenza degli altri endpoint (`/repository/v5/purchase/...`), questo non contiene il segmento `purchase`. Verificare se il path corretto sia `/repository/v5/purchase/{id}/full-quantity` o se la route non sia implementata.

### 2.3 `purchased-recoveries` con profileId valido

- **Endpoint:** `GET /repository/v5/purchase/profile/{profileId}/purchased-recoveries`
- **Esempio:** `GET /repository/v5/purchase/profile/148372/purchased-recoveries` → route not found
- **Descrizione:** con `profileId` valido la route non viene trovata. Verificare se l'endpoint è implementato.

### 2.4 `escorts/{id}/purchases/gift` con escortId valido

- **Endpoint:** `POST /v5/escorts/{escortId}/purchases/gift`
- **Esempio:** `POST /v5/escorts/148372/purchases/gift` → route not found
- **Descrizione:** con `escortId` valido la route non viene trovata. Verificare se l'endpoint è implementato o se il path è corretto.

---

## 3. Gestione errata di parametri vuoti

Con parametro di query **vuoto**, il server risponde 500 anziché 400/404. Comportamento da irrobustire (validazione input).

| Parametro (vuoto) | Endpoint esempio | Messaggio |
|---|---|---|
| `parent_id=` | `/repository/v5/purchase/cart-detail/{id}/subscriptions?parent_id=` | *The parent id must be an integer.* |
| `exclude_purchase_id` | `/repository/v5/purchase/related-only-subscriptions/{id}?exclude_purchase_id&only_purchased` | *The exclude purchase id must be an integer.* |
| `raw_json_search` | `/repository/v5/purchase/profile/{id}/all-filtered-by-type-and-status?...&raw_json_search` | *The raw json search must be a string.* |

**Suggerimento:** trattare i parametri vuoti come assenti (null) oppure restituire `400 Bad Request` con messaggio esplicativo, invece di `500`.
