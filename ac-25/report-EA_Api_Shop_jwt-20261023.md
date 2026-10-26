# EA Api Shop (jwt) / v2 QA Report - 20261023-141007

**Env:** `http://st-bee.test.k8s.dontouch.group` · **Clients:** 20

## Summary

| # | State | 2xx | 4xx | 5xx |
|---|---|---|---|---|
| 1 | 0 - attiva · it | 21 | 14 | 2 |
| 2 | 1 - scaduta · it | 18 | 17 | 2 |
| 3 | 2 - sospesa · it | 21 | 14 | 2 |
| 4 | 3 - iscritta, mai abbonata · it | 18 | 17 | 2 |
| 5 | 4 - in registrazione · it | 16 | 19 | 2 |
| 6 | 5 - oscurata · it | 18 | 17 | 2 |
| 7 | 6 - in blacklist · it | 18 | 17 | 2 |
| 8 | 7 - con numeri collegati · it | 18 | 17 | 2 |
| 9 | 8 - mai iscritta · it | 4 | 31 | 2 |
| 10 | 9 - mai pagante · it | 16 | 19 | 2 |
| 11 | 10 - attiva · es | 18 | 17 | 2 |
| 12 | 11 - scaduta · es | 18 | 17 | 2 |
| 13 | 12 - sospesa · es | 21 | 14 | 2 |
| 14 | 13 - iscritta, mai abbonata · es | 18 | 17 | 2 |
| 15 | 14 - in registrazione · es | 16 | 19 | 2 |
| 16 | 15 - oscurata · es | 21 | 14 | 2 |
| 17 | 16 - in blacklist · es | 18 | 17 | 2 |
| 18 | 17 - con numeri collegati · es | 21 | 14 | 2 |
| 19 | 18 - mai iscritta · es | 4 | 31 | 2 |
| 20 | 19 - mai pagante · es | 16 | 19 | 2 |
| | **Total** | **339** | **361** | **40** |

## Failures — non-2xx or failed assertions (458)

### ❌ Get Toolbox da attivare — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/141619`

**200 OK**

- Response time is under 5000ms: expected 6318 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 71,
    "escort_has_gift_id": 0,
    "product_type": 22,
    "base_price": 0,
    "expiry": "2024-01-14 23:59:59",
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 104,
    "escort_has_gift_id": 0,
    "product_type": 28,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 92,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 91,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 90,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 93,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 94,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 95,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 101,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 89,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 88,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 87,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 100,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 1 (0 - attiva · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 1 (0 - attiva · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 1 (0 - attiva · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 1 (0 - attiva · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 1 (0 - attiva · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 1 (0 - attiva · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ send payment detail — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 1 (0 - attiva · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 1 (0 - attiva · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 1 (0 - attiva · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 40,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 500,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 700,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1000,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ Get Toolbox da attivare — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/20634`

**200 OK**

- Response time is under 5000ms: expected 6497 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 71,
    "escort_has_gift_id": 0,
    "product_type": 22,
    "base_price": 0,
    "expiry": "2024-01-14 23:59:59",
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 104,
    "escort_has_gift_id": 0,
    "product_type": 28,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 92,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 91,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 90,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 93,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 94,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 95,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 101,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 89,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 88,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 87,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 100,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 2 (1 - scaduta · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 2 (1 - scaduta · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 2 (1 - scaduta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 2 (1 - scaduta · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 2 (1 - scaduta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 2 (1 - scaduta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 2 (1 - scaduta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 2 (1 - scaduta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 2 (1 - scaduta · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- Response time is under 5000ms: expected 7260 to be below 5000

```json
{
  "status": "ok",
  "data": [
    {
      "id": 144,
      "title": [
        {
          "locale": "it",
          "text": "300 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "300 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 300 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 300 min."
        },
        {
          "locale": "de",
          "text": "täglich 300 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 300 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2187,
      "tags": [],
      "price": 99,
      "price_low": 79,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 145,
      "title": [
        {
          "locale": "it",
          "text": "600 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "600 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 600 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 600 min."
        },
        {
          "locale": "de",
          "text": "täglich 600 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 600 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2186,
      "tags": [],
      "price": 199,
      "price_low": 149,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 146,
      "title": [
        {
          "locale": "it",
          "text": "1200 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "1200 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 1200 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 1200 min."
        },
        {
          "locale": "de",
          "text": "täglich 1200 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 1200 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2185,
      "tags": [],
      "price": 396,
      "price_low": 269,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 211,
      "title": [
        {
          "locale": "it",
          "text": "Chiamami ora"
        },
        {
          "locale": "en",
          "text": "Call me now"
        },
        {
          "locale": "es",
          "text": "Llàmame ahora"
        },
        {
          "locale": "de",
          "text": "Ruf mich an"
        },
        {
          "locale": "ru",
          "text": "Позвонить сейчас"
        },
        {
          "locale": "zh",
          "text": "马上给我打电话"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Metti in evidenza il tuo profilo, segnala la tua disponibilità"
        },
        {
          "locale": "en",
          "text": "Highlight your profile, advertise your availability"
        },
        {
          "locale": "es",
          "text": "Resalta tu perfil y haz notar tu disponibilidad"
        },
        {
          "locale": "de",
          "text": "Hebst du dein Profil hervor und machst du deine Verfügbarkeit bekannt"
        },
        {
          "locale": "ru",
          "text": "Сделай свой профиль более заметный, дай знать что ты на связи"
        },
        {
          "locale": "zh",
          "text": "突出你的广告，表明你的可用性"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2401,
      "tags": [],
      "price": 10,
      "price_low": 0,
      "configurable": true,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 61,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "zh",
          "text": "精英简介"
        },
        {
          "locale": "ru",
          "text": "Profile Élite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "15 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "15 élite banners (one per day for 15 days)"
        },
        {
          "locale": "es",
          "text": "15 banners de élite (uno por día durante 15 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 15 Tage)"
        },
        {
          "locale": "zh",
          "text": "条精英旗帜 (每天一条，持续 15 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1691,
      "tags": [],
      "price": 585,
      "price_low": 389,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 83,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "5 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "5 élite banners (one per day for 5 days)"
        },
        {
          "locale": "es",
          "text": "5 banners de élite (uno por día durante 5 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 5 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 5 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1690,
      "tags": [],
      "price": 195,
      "price_low": 159,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 84,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "10 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "10 élite banners (one per day for 10 days)"
        },
        {
          "locale": "es",
          "text": "10 banners de élite (uno por día durante 10 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 10 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 10 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1692,
      "tags": [],
      "price": 390,
      "price_low": 299,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 107,
      "title": [
        {
          "locale": "it",
          "text": "Elite"
        },
        {
          "locale": "en",
          "text": "Elite"
        },
        {
          "locale": "es",
          "text": "Elite"
        },
        {
          "locale": "de",
          "text": "Elite"
        },
        {
          "locale": "zh",
          "text": "Elite"
        },
        {
          "locale": "ru",
          "text": "Elite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Per essere sempre al top"
        },
        {
          "locale": "en",
          "text": ""
        },
        {
          "locale": "es",
          "text": ""
        },
        {
          "locale": "de",
          "text": ""
        },
        {
          "locale": "zh",
          "text": ""
        },
        {
          "locale": "ru",
          "text": ""
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1693,
      "tags": [],
      "price": 39,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 59,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "zh",
          "text": "工作灵活"
        },
        {
          "locale": "ru",
          "text": "WORK FLEXIBLE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 30 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "30 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 30 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "zh",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1697,
      "tags": [],
      "price": 270,
      "price_low": 139,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 77,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 5 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "5 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 5 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1699,
      "tags": [],
      "price": 45,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 82,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 10 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "10 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 10 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1698,
      "tags": [],
      "price": 90,
      "price_low": 69,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 26,
      "title": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 6,
      "promo_id": 2166,
      "tags": [],
      "price": 500,
      "price_low": 500,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 214,
      "title": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 5,
      "promo_id": 2431,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 75,
      "title": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 19,
      "promo_id": 912,
      "tags": [],
      "price": 550,
      "price_low": 300,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 70,
      "title": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 18,
      "promo_id": 2425,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 133,
      "title": [
        {
          "locale": "it",
          "text": "Stop&Go"
        },
        {
          "locale": "en",
          "text": "Stop&Go"
        },
        {
          "locale": "es",
          "text": "Stop&Go"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Spegni ora il tuo abbonamento e riattiva 3gg quando vuoi"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 24,
      "promo_id": 2467,
      "tags": [],
      "price": 109,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 102,
      "title": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 23,
      "promo_id": 1701,
      "tags": [],
      "price_base": 23,
      "price": 0.8,
      "price_low": 0.8,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 161,
      "title": null,
      "description": null,
      "configuration": null,
      "status": true,
      "product_type": 27,
      "promo_id": 2365,
      "tags": [],
      "price": 10,
      "price_low": 40,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    }
  ]
}
```

### ❌ charge — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 40,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 500,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 700,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1000,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ Get Toolbox da attivare — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/101242`

**200 OK**

- Response time is under 5000ms: expected 6571 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 71,
    "escort_has_gift_id": 0,
    "product_type": 22,
    "base_price": 0,
    "expiry": "2024-01-14 23:59:59",
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 104,
    "escort_has_gift_id": 0,
    "product_type": 28,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 92,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 91,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 90,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 93,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 94,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 95,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 101,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 89,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 88,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 87,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 100,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 3 (2 - sospesa · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 3 (2 - sospesa · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 3 (2 - sospesa · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 3 (2 - sospesa · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 3 (2 - sospesa · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 3 (2 - sospesa · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ send payment detail — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 3 (2 - sospesa · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 3 (2 - sospesa · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 3 (2 - sospesa · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- Response time is under 5000ms: expected 8198 to be below 5000

```json
{
  "status": "ok",
  "data": [
    {
      "id": 144,
      "title": [
        {
          "locale": "it",
          "text": "300 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "300 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 300 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 300 min."
        },
        {
          "locale": "de",
          "text": "täglich 300 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 300 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2187,
      "tags": [],
      "price": 99,
      "price_low": 79,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 145,
      "title": [
        {
          "locale": "it",
          "text": "600 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "600 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 600 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 600 min."
        },
        {
          "locale": "de",
          "text": "täglich 600 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 600 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2186,
      "tags": [],
      "price": 199,
      "price_low": 149,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 146,
      "title": [
        {
          "locale": "it",
          "text": "1200 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "1200 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 1200 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 1200 min."
        },
        {
          "locale": "de",
          "text": "täglich 1200 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 1200 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2185,
      "tags": [],
      "price": 396,
      "price_low": 269,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 211,
      "title": [
        {
          "locale": "it",
          "text": "Chiamami ora"
        },
        {
          "locale": "en",
          "text": "Call me now"
        },
        {
          "locale": "es",
          "text": "Llàmame ahora"
        },
        {
          "locale": "de",
          "text": "Ruf mich an"
        },
        {
          "locale": "ru",
          "text": "Позвонить сейчас"
        },
        {
          "locale": "zh",
          "text": "马上给我打电话"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Metti in evidenza il tuo profilo, segnala la tua disponibilità"
        },
        {
          "locale": "en",
          "text": "Highlight your profile, advertise your availability"
        },
        {
          "locale": "es",
          "text": "Resalta tu perfil y haz notar tu disponibilidad"
        },
        {
          "locale": "de",
          "text": "Hebst du dein Profil hervor und machst du deine Verfügbarkeit bekannt"
        },
        {
          "locale": "ru",
          "text": "Сделай свой профиль более заметный, дай знать что ты на связи"
        },
        {
          "locale": "zh",
          "text": "突出你的广告，表明你的可用性"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2399,
      "tags": [],
      "price": 10,
      "price_low": 0,
      "configurable": true,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 61,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "zh",
          "text": "精英简介"
        },
        {
          "locale": "ru",
          "text": "Profile Élite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "15 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "15 élite banners (one per day for 15 days)"
        },
        {
          "locale": "es",
          "text": "15 banners de élite (uno por día durante 15 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 15 Tage)"
        },
        {
          "locale": "zh",
          "text": "条精英旗帜 (每天一条，持续 15 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1691,
      "tags": [],
      "price": 585,
      "price_low": 389,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 83,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "5 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "5 élite banners (one per day for 5 days)"
        },
        {
          "locale": "es",
          "text": "5 banners de élite (uno por día durante 5 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 5 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 5 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1690,
      "tags": [],
      "price": 195,
      "price_low": 159,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 84,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "10 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "10 élite banners (one per day for 10 days)"
        },
        {
          "locale": "es",
          "text": "10 banners de élite (uno por día durante 10 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 10 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 10 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1692,
      "tags": [],
      "price": 390,
      "price_low": 299,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 107,
      "title": [
        {
          "locale": "it",
          "text": "Elite"
        },
        {
          "locale": "en",
          "text": "Elite"
        },
        {
          "locale": "es",
          "text": "Elite"
        },
        {
          "locale": "de",
          "text": "Elite"
        },
        {
          "locale": "zh",
          "text": "Elite"
        },
        {
          "locale": "ru",
          "text": "Elite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Per essere sempre al top"
        },
        {
          "locale": "en",
          "text": ""
        },
        {
          "locale": "es",
          "text": ""
        },
        {
          "locale": "de",
          "text": ""
        },
        {
          "locale": "zh",
          "text": ""
        },
        {
          "locale": "ru",
          "text": ""
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1693,
      "tags": [],
      "price": 39,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 59,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "zh",
          "text": "工作灵活"
        },
        {
          "locale": "ru",
          "text": "WORK FLEXIBLE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 30 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "30 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 30 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "zh",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1697,
      "tags": [],
      "price": 270,
      "price_low": 139,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 77,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 5 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "5 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 5 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1699,
      "tags": [],
      "price": 45,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 82,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 10 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "10 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 10 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1698,
      "tags": [],
      "price": 90,
      "price_low": 69,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 26,
      "title": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 6,
      "promo_id": 2166,
      "tags": [],
      "price": 500,
      "price_low": 500,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 214,
      "title": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 5,
      "promo_id": 2429,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 75,
      "title": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 19,
      "promo_id": 912,
      "tags": [],
      "price": 550,
      "price_low": 300,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 70,
      "title": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 18,
      "promo_id": 2423,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 133,
      "title": [
        {
          "locale": "it",
          "text": "Stop&Go"
        },
        {
          "locale": "en",
          "text": "Stop&Go"
        },
        {
          "locale": "es",
          "text": "Stop&Go"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Spegni ora il tuo abbonamento e riattiva 3gg quando vuoi"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 24,
      "promo_id": 2465,
      "tags": [],
      "price": 109,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 102,
      "title": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 23,
      "promo_id": 1701,
      "tags": [],
      "price_base": 23,
      "price": 0.8,
      "price_low": 0.8,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 161,
      "title": null,
      "description": null,
      "configuration": null,
      "status": true,
      "product_type": 27,
      "promo_id": 2363,
      "tags": [],
      "price": 10,
      "price_low": 40,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    }
  ]
}
```

### ❌ charge — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 40,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 500,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 700,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1000,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ Get Toolbox da attivare — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/44688`

**200 OK**

- Response time is under 5000ms: expected 6139 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 71,
    "escort_has_gift_id": 0,
    "product_type": 22,
    "base_price": 0,
    "expiry": "2024-01-14 23:59:59",
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 104,
    "escort_has_gift_id": 0,
    "product_type": 28,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 92,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 91,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 90,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 93,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 94,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 95,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 101,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 89,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 88,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 87,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 100,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 4 (3 - iscritta, mai abbonata · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 4 (3 - iscritta, mai abbonata · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 4 (3 - iscritta, mai abbonata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 4 (3 - iscritta, mai abbonata · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 4 (3 - iscritta, mai abbonata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 4 (3 - iscritta, mai abbonata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 4 (3 - iscritta, mai abbonata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 4 (3 - iscritta, mai abbonata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 4 (3 - iscritta, mai abbonata · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- Response time is under 5000ms: expected 7320 to be below 5000

```json
{
  "status": "ok",
  "data": [
    {
      "id": 144,
      "title": [
        {
          "locale": "it",
          "text": "300 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "300 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 300 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 300 min."
        },
        {
          "locale": "de",
          "text": "täglich 300 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 300 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2187,
      "tags": [],
      "price": 99,
      "price_low": 79,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 145,
      "title": [
        {
          "locale": "it",
          "text": "600 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "600 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 600 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 600 min."
        },
        {
          "locale": "de",
          "text": "täglich 600 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 600 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2186,
      "tags": [],
      "price": 199,
      "price_low": 149,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 146,
      "title": [
        {
          "locale": "it",
          "text": "1200 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "1200 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 1200 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 1200 min."
        },
        {
          "locale": "de",
          "text": "täglich 1200 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 1200 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2185,
      "tags": [],
      "price": 396,
      "price_low": 269,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 211,
      "title": [
        {
          "locale": "it",
          "text": "Chiamami ora"
        },
        {
          "locale": "en",
          "text": "Call me now"
        },
        {
          "locale": "es",
          "text": "Llàmame ahora"
        },
        {
          "locale": "de",
          "text": "Ruf mich an"
        },
        {
          "locale": "ru",
          "text": "Позвонить сейчас"
        },
        {
          "locale": "zh",
          "text": "马上给我打电话"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Metti in evidenza il tuo profilo, segnala la tua disponibilità"
        },
        {
          "locale": "en",
          "text": "Highlight your profile, advertise your availability"
        },
        {
          "locale": "es",
          "text": "Resalta tu perfil y haz notar tu disponibilidad"
        },
        {
          "locale": "de",
          "text": "Hebst du dein Profil hervor und machst du deine Verfügbarkeit bekannt"
        },
        {
          "locale": "ru",
          "text": "Сделай свой профиль более заметный, дай знать что ты на связи"
        },
        {
          "locale": "zh",
          "text": "突出你的广告，表明你的可用性"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2398,
      "tags": [],
      "price": 10,
      "price_low": 0,
      "configurable": true,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 61,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "zh",
          "text": "精英简介"
        },
        {
          "locale": "ru",
          "text": "Profile Élite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "15 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "15 élite banners (one per day for 15 days)"
        },
        {
          "locale": "es",
          "text": "15 banners de élite (uno por día durante 15 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 15 Tage)"
        },
        {
          "locale": "zh",
          "text": "条精英旗帜 (每天一条，持续 15 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1691,
      "tags": [],
      "price": 585,
      "price_low": 389,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 83,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "5 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "5 élite banners (one per day for 5 days)"
        },
        {
          "locale": "es",
          "text": "5 banners de élite (uno por día durante 5 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 5 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 5 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1690,
      "tags": [],
      "price": 195,
      "price_low": 159,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 84,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "10 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "10 élite banners (one per day for 10 days)"
        },
        {
          "locale": "es",
          "text": "10 banners de élite (uno por día durante 10 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 10 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 10 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1692,
      "tags": [],
      "price": 390,
      "price_low": 299,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 107,
      "title": [
        {
          "locale": "it",
          "text": "Elite"
        },
        {
          "locale": "en",
          "text": "Elite"
        },
        {
          "locale": "es",
          "text": "Elite"
        },
        {
          "locale": "de",
          "text": "Elite"
        },
        {
          "locale": "zh",
          "text": "Elite"
        },
        {
          "locale": "ru",
          "text": "Elite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Per essere sempre al top"
        },
        {
          "locale": "en",
          "text": ""
        },
        {
          "locale": "es",
          "text": ""
        },
        {
          "locale": "de",
          "text": ""
        },
        {
          "locale": "zh",
          "text": ""
        },
        {
          "locale": "ru",
          "text": ""
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1693,
      "tags": [],
      "price": 39,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 59,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "zh",
          "text": "工作灵活"
        },
        {
          "locale": "ru",
          "text": "WORK FLEXIBLE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 30 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "30 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 30 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "zh",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1697,
      "tags": [],
      "price": 270,
      "price_low": 139,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 77,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 5 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "5 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 5 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1699,
      "tags": [],
      "price": 45,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 82,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 10 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "10 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 10 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1698,
      "tags": [],
      "price": 90,
      "price_low": 69,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 26,
      "title": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 6,
      "promo_id": 2166,
      "tags": [],
      "price": 500,
      "price_low": 500,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 214,
      "title": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 5,
      "promo_id": 2428,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 75,
      "title": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 19,
      "promo_id": 912,
      "tags": [],
      "price": 550,
      "price_low": 300,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 70,
      "title": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 18,
      "promo_id": 2422,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 133,
      "title": [
        {
          "locale": "it",
          "text": "Stop&Go"
        },
        {
          "locale": "en",
          "text": "Stop&Go"
        },
        {
          "locale": "es",
          "text": "Stop&Go"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Spegni ora il tuo abbonamento e riattiva 3gg quando vuoi"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 24,
      "promo_id": 2464,
      "tags": [],
      "price": 109,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 102,
      "title": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 23,
      "promo_id": 1701,
      "tags": [],
      "price_base": 23,
      "price": 0.8,
      "price_low": 0.8,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 161,
      "title": null,
      "description": null,
      "configuration": null,
      "status": true,
      "product_type": 27,
      "promo_id": 2362,
      "tags": [],
      "price": 10,
      "price_low": 40,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    }
  ]
}
```

### ❌ charge — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 40,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 500,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 700,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1000,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ Get Toolbox da attivare — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/149849`

**200 OK**

- Response time is under 5000ms: expected 5949 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 71,
    "escort_has_gift_id": 0,
    "product_type": 22,
    "base_price": 0,
    "expiry": "2024-01-14 23:59:59",
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 104,
    "escort_has_gift_id": 0,
    "product_type": 28,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 92,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 91,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 90,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 93,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 94,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 95,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 101,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 89,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 88,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 87,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 100,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 5 (4 - in registrazione · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 5 (4 - in registrazione · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 5 (4 - in registrazione · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 5 (4 - in registrazione · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 5 (4 - in registrazione · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 5 (4 - in registrazione · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.province_required"
}
```

### ❌ order — client 5 (4 - in registrazione · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 5 (4 - in registrazione · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 5 (4 - in registrazione · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 5 (4 - in registrazione · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- [GET /addons] data is a non-empty array of {id}: expected undefined to be an array

```json
{
  "status": "ok"
}
```

### ❌ charge — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 40,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 500,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 700,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1000,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "escort.number_not_verified"
}
```

### ❌ payment — client 5 (4 - in registrazione · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "escort.number_not_verified"
}
```

### ❌ Get Toolbox da attivare — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/50692`

**200 OK**

- Response time is under 5000ms: expected 6147 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 71,
    "escort_has_gift_id": 0,
    "product_type": 22,
    "base_price": 0,
    "expiry": "2024-01-14 23:59:59",
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 104,
    "escort_has_gift_id": 0,
    "product_type": 28,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 92,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 91,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 90,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 93,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 94,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 95,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 101,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 89,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 88,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 87,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 100,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 6 (5 - oscurata · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 6 (5 - oscurata · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 6 (5 - oscurata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 6 (5 - oscurata · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 6 (5 - oscurata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 6 (5 - oscurata · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.province_required"
}
```

### ❌ order — client 6 (5 - oscurata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 6 (5 - oscurata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 6 (5 - oscurata · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 6 (5 - oscurata · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- [GET /addons] data is a non-empty array of {id}: expected undefined to be an array

```json
{
  "status": "ok"
}
```

### ❌ charge — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 40,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 500,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 700,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1000,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 6 (5 - oscurata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**200 OK**

- [purchase] data.labels has label (string) and error: expected null to be an object

```json
{
  "status": "ok",
  "data": {
    "labels": null
  }
}
```

### ❌ Get Toolbox da attivare — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/35801`

**200 OK**

- Response time is under 5000ms: expected 5908 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 71,
    "escort_has_gift_id": 0,
    "product_type": 22,
    "base_price": 0,
    "expiry": "2024-01-14 23:59:59",
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 104,
    "escort_has_gift_id": 0,
    "product_type": 28,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 92,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 91,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 90,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 93,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 94,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 95,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 101,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 89,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 88,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 87,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 100,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 7 (6 - in blacklist · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 7 (6 - in blacklist · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 7 (6 - in blacklist · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 7 (6 - in blacklist · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 7 (6 - in blacklist · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 7 (6 - in blacklist · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 7 (6 - in blacklist · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 7 (6 - in blacklist · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 7 (6 - in blacklist · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- Response time is under 5000ms: expected 7158 to be below 5000

```json
{
  "status": "ok",
  "data": [
    {
      "id": 144,
      "title": [
        {
          "locale": "it",
          "text": "300 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "300 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 300 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 300 min."
        },
        {
          "locale": "de",
          "text": "täglich 300 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 300 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2187,
      "tags": [],
      "price": 99,
      "price_low": 79,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 145,
      "title": [
        {
          "locale": "it",
          "text": "600 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "600 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 600 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 600 min."
        },
        {
          "locale": "de",
          "text": "täglich 600 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 600 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2186,
      "tags": [],
      "price": 199,
      "price_low": 149,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 146,
      "title": [
        {
          "locale": "it",
          "text": "1200 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "1200 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 1200 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 1200 min."
        },
        {
          "locale": "de",
          "text": "täglich 1200 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 1200 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2185,
      "tags": [],
      "price": 396,
      "price_low": 269,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 211,
      "title": [
        {
          "locale": "it",
          "text": "Chiamami ora"
        },
        {
          "locale": "en",
          "text": "Call me now"
        },
        {
          "locale": "es",
          "text": "Llàmame ahora"
        },
        {
          "locale": "de",
          "text": "Ruf mich an"
        },
        {
          "locale": "ru",
          "text": "Позвонить сейчас"
        },
        {
          "locale": "zh",
          "text": "马上给我打电话"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Metti in evidenza il tuo profilo, segnala la tua disponibilità"
        },
        {
          "locale": "en",
          "text": "Highlight your profile, advertise your availability"
        },
        {
          "locale": "es",
          "text": "Resalta tu perfil y haz notar tu disponibilidad"
        },
        {
          "locale": "de",
          "text": "Hebst du dein Profil hervor und machst du deine Verfügbarkeit bekannt"
        },
        {
          "locale": "ru",
          "text": "Сделай свой профиль более заметный, дай знать что ты на связи"
        },
        {
          "locale": "zh",
          "text": "突出你的广告，表明你的可用性"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2398,
      "tags": [],
      "price": 10,
      "price_low": 0,
      "configurable": true,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 61,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "zh",
          "text": "精英简介"
        },
        {
          "locale": "ru",
          "text": "Profile Élite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "15 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "15 élite banners (one per day for 15 days)"
        },
        {
          "locale": "es",
          "text": "15 banners de élite (uno por día durante 15 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 15 Tage)"
        },
        {
          "locale": "zh",
          "text": "条精英旗帜 (每天一条，持续 15 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1691,
      "tags": [],
      "price": 585,
      "price_low": 389,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 83,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "5 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "5 élite banners (one per day for 5 days)"
        },
        {
          "locale": "es",
          "text": "5 banners de élite (uno por día durante 5 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 5 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 5 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1690,
      "tags": [],
      "price": 195,
      "price_low": 159,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 84,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "10 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "10 élite banners (one per day for 10 days)"
        },
        {
          "locale": "es",
          "text": "10 banners de élite (uno por día durante 10 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 10 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 10 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1692,
      "tags": [],
      "price": 390,
      "price_low": 299,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 107,
      "title": [
        {
          "locale": "it",
          "text": "Elite"
        },
        {
          "locale": "en",
          "text": "Elite"
        },
        {
          "locale": "es",
          "text": "Elite"
        },
        {
          "locale": "de",
          "text": "Elite"
        },
        {
          "locale": "zh",
          "text": "Elite"
        },
        {
          "locale": "ru",
          "text": "Elite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Per essere sempre al top"
        },
        {
          "locale": "en",
          "text": ""
        },
        {
          "locale": "es",
          "text": ""
        },
        {
          "locale": "de",
          "text": ""
        },
        {
          "locale": "zh",
          "text": ""
        },
        {
          "locale": "ru",
          "text": ""
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1693,
      "tags": [],
      "price": 39,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 59,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "zh",
          "text": "工作灵活"
        },
        {
          "locale": "ru",
          "text": "WORK FLEXIBLE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 30 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "30 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 30 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "zh",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1697,
      "tags": [],
      "price": 270,
      "price_low": 139,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 77,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 5 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "5 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 5 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1699,
      "tags": [],
      "price": 45,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 82,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 10 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "10 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 10 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1698,
      "tags": [],
      "price": 90,
      "price_low": 69,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 26,
      "title": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 6,
      "promo_id": 2166,
      "tags": [],
      "price": 500,
      "price_low": 500,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 214,
      "title": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 5,
      "promo_id": 2428,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 75,
      "title": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 19,
      "promo_id": 912,
      "tags": [],
      "price": 550,
      "price_low": 300,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 70,
      "title": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 18,
      "promo_id": 2422,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 133,
      "title": [
        {
          "locale": "it",
          "text": "Stop&Go"
        },
        {
          "locale": "en",
          "text": "Stop&Go"
        },
        {
          "locale": "es",
          "text": "Stop&Go"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Spegni ora il tuo abbonamento e riattiva 3gg quando vuoi"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 24,
      "promo_id": 2464,
      "tags": [],
      "price": 109,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 102,
      "title": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 23,
      "promo_id": 1701,
      "tags": [],
      "price_base": 23,
      "price": 0.8,
      "price_low": 0.8,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 161,
      "title": null,
      "description": null,
      "configuration": null,
      "status": true,
      "product_type": 27,
      "promo_id": 2362,
      "tags": [],
      "price": 10,
      "price_low": 40,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    }
  ]
}
```

### ❌ charge — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 40,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 500,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 700,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1000,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ Get Toolbox da attivare — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/52143`

**200 OK**

- Response time is under 5000ms: expected 6268 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 71,
    "escort_has_gift_id": 0,
    "product_type": 22,
    "base_price": 0,
    "expiry": "2024-01-14 23:59:59",
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 104,
    "escort_has_gift_id": 0,
    "product_type": 28,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 92,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 91,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 90,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 93,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 94,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 95,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 101,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 89,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 88,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 87,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 100,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 8 (7 - con numeri collegati · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 8 (7 - con numeri collegati · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 8 (7 - con numeri collegati · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 8 (7 - con numeri collegati · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 8 (7 - con numeri collegati · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 8 (7 - con numeri collegati · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 8 (7 - con numeri collegati · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 8 (7 - con numeri collegati · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 8 (7 - con numeri collegati · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- Response time is under 5000ms: expected 7651 to be below 5000

```json
{
  "status": "ok",
  "data": [
    {
      "id": 144,
      "title": [
        {
          "locale": "it",
          "text": "300 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "300 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 300 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 300 min."
        },
        {
          "locale": "de",
          "text": "täglich 300 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 300 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2187,
      "tags": [],
      "price": 99,
      "price_low": 79,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 145,
      "title": [
        {
          "locale": "it",
          "text": "600 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "600 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 600 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 600 min."
        },
        {
          "locale": "de",
          "text": "täglich 600 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 600 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2186,
      "tags": [],
      "price": 199,
      "price_low": 149,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 146,
      "title": [
        {
          "locale": "it",
          "text": "1200 Min. CHIAMAMI ORA"
        },
        {
          "locale": "en",
          "text": "CALL ME NOW"
        },
        {
          "locale": "es",
          "text": "LLÁMAME AHORA"
        },
        {
          "locale": "de",
          "text": "RUF MICH AN"
        },
        {
          "locale": "zh",
          "text": "现在打电话给我"
        },
        {
          "locale": "ru",
          "text": "CALL ME NOW"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "1200 minuti da usare quando vuoi"
        },
        {
          "locale": "en",
          "text": "Climb back 1200 min. "
        },
        {
          "locale": "es",
          "text": "Subidas 1200 min."
        },
        {
          "locale": "de",
          "text": "täglich 1200 MINUTEN"
        },
        {
          "locale": "zh",
          "text": "每天坚持 1200 分钟"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2185,
      "tags": [],
      "price": 396,
      "price_low": 269,
      "configurable": false,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 211,
      "title": [
        {
          "locale": "it",
          "text": "Chiamami ora"
        },
        {
          "locale": "en",
          "text": "Call me now"
        },
        {
          "locale": "es",
          "text": "Llàmame ahora"
        },
        {
          "locale": "de",
          "text": "Ruf mich an"
        },
        {
          "locale": "ru",
          "text": "Позвонить сейчас"
        },
        {
          "locale": "zh",
          "text": "马上给我打电话"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Metti in evidenza il tuo profilo, segnala la tua disponibilità"
        },
        {
          "locale": "en",
          "text": "Highlight your profile, advertise your availability"
        },
        {
          "locale": "es",
          "text": "Resalta tu perfil y haz notar tu disponibilidad"
        },
        {
          "locale": "de",
          "text": "Hebst du dein Profil hervor und machst du deine Verfügbarkeit bekannt"
        },
        {
          "locale": "ru",
          "text": "Сделай свой профиль более заметный, дай знать что ты на связи"
        },
        {
          "locale": "zh",
          "text": "突出你的广告，表明你的可用性"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 3,
      "promo_id": 2400,
      "tags": [],
      "price": 10,
      "price_low": 0,
      "configurable": true,
      "um": "minutes",
      "limits": {
        "default": "15",
        "min": "15",
        "max": "720",
        "step": "15"
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 61,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "zh",
          "text": "精英简介"
        },
        {
          "locale": "ru",
          "text": "Profile Élite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "15 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "15 élite banners (one per day for 15 days)"
        },
        {
          "locale": "es",
          "text": "15 banners de élite (uno por día durante 15 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 15 Tage)"
        },
        {
          "locale": "zh",
          "text": "条精英旗帜 (每天一条，持续 15 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1691,
      "tags": [],
      "price": 585,
      "price_low": 389,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 83,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "5 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "5 élite banners (one per day for 5 days)"
        },
        {
          "locale": "es",
          "text": "5 banners de élite (uno por día durante 5 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 5 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 5 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1690,
      "tags": [],
      "price": 195,
      "price_low": 159,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 84,
      "title": [
        {
          "locale": "it",
          "text": "Profilo Élite"
        },
        {
          "locale": "en",
          "text": "Profile Élite"
        },
        {
          "locale": "es",
          "text": "Perfil Élite"
        },
        {
          "locale": "de",
          "text": "Élite-Profil"
        },
        {
          "locale": "cn",
          "text": "精英简介"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "10 banner élite validi in tutte le città"
        },
        {
          "locale": "en",
          "text": "10 élite banners (one per day for 10 days)"
        },
        {
          "locale": "es",
          "text": "10 banners de élite (uno por día durante 10 días)"
        },
        {
          "locale": "de",
          "text": "Élite-Banner (eins pro Tag für 10 Tage)"
        },
        {
          "locale": "cn",
          "text": "条精英旗帜 (每天一条，持续 10 天)"
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1692,
      "tags": [],
      "price": 390,
      "price_low": 299,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 107,
      "title": [
        {
          "locale": "it",
          "text": "Elite"
        },
        {
          "locale": "en",
          "text": "Elite"
        },
        {
          "locale": "es",
          "text": "Elite"
        },
        {
          "locale": "de",
          "text": "Elite"
        },
        {
          "locale": "zh",
          "text": "Elite"
        },
        {
          "locale": "ru",
          "text": "Elite"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Per essere sempre al top"
        },
        {
          "locale": "en",
          "text": ""
        },
        {
          "locale": "es",
          "text": ""
        },
        {
          "locale": "de",
          "text": ""
        },
        {
          "locale": "zh",
          "text": ""
        },
        {
          "locale": "ru",
          "text": ""
        }
      ],
      "configuration": {
        "pricedStates": []
      },
      "status": true,
      "product_type": 2,
      "promo_id": 1693,
      "tags": [],
      "price": 39,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "validation": {
        "is_valid": true,
        "message": null
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 59,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "zh",
          "text": "工作灵活"
        },
        {
          "locale": "ru",
          "text": "WORK FLEXIBLE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 30 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "30 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 30 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "zh",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1697,
      "tags": [],
      "price": 270,
      "price_low": 139,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 77,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 5 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "5 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 5 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1699,
      "tags": [],
      "price": 45,
      "price_low": 39,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 82,
      "title": [
        {
          "locale": "it",
          "text": "LAVORA FLESSIBILE"
        },
        {
          "locale": "en",
          "text": "WORK FLEXIBLE"
        },
        {
          "locale": "es",
          "text": "TRABAJO FLEXIBLE"
        },
        {
          "locale": "de",
          "text": "ARBEITEN SIE FLEXIBEL"
        },
        {
          "locale": "cn",
          "text": "工作灵活"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "numero 10 sospensioni da programmare quando vuoi"
        },
        {
          "locale": "en",
          "text": "10 suspensions to be programmed when you need them"
        },
        {
          "locale": "es",
          "text": "número 10 suspensiones para programar cuando quieras"
        },
        {
          "locale": "de",
          "text": "programmierbare Aufhängungen, wenn Sie sie brauchen"
        },
        {
          "locale": "cn",
          "text": "个悬架在您需要时进行编程"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 4,
      "promo_id": 1698,
      "tags": [],
      "price": 90,
      "price_low": 69,
      "configurable": false,
      "limits": {
        "min": 1,
        "max": 10,
        "step": 1
      },
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 26,
      "title": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Sposta Recensioni"
        },
        {
          "locale": "en",
          "text": "Passport Migrate Reviews"
        },
        {
          "locale": "es",
          "text": "Passport Mover Reseñas"
        },
        {
          "locale": "de",
          "text": "Passport Bewertungen Verschieben"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 6,
      "promo_id": 2166,
      "tags": [],
      "price": 500,
      "price_low": 500,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 214,
      "title": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Cambio Provincia"
        },
        {
          "locale": "en",
          "text": "Passport Update State"
        },
        {
          "locale": "es",
          "text": "Passport Cambiar de Provincia"
        },
        {
          "locale": "de",
          "text": "Passport Provinz Wechseln"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 5,
      "promo_id": 2430,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 75,
      "title": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Passport Tour"
        },
        {
          "locale": "en",
          "text": "Passport Tour"
        },
        {
          "locale": "es",
          "text": "Passport Tour"
        },
        {
          "locale": "de",
          "text": "Passport Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 19,
      "promo_id": 912,
      "tags": [],
      "price": 550,
      "price_low": 300,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 70,
      "title": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Mutator Tour"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 18,
      "promo_id": 2424,
      "tags": [],
      "price": 10,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 133,
      "title": [
        {
          "locale": "it",
          "text": "Stop&Go"
        },
        {
          "locale": "en",
          "text": "Stop&Go"
        },
        {
          "locale": "es",
          "text": "Stop&Go"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "Spegni ora il tuo abbonamento e riattiva 3gg quando vuoi"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 24,
      "promo_id": 2466,
      "tags": [],
      "price": 109,
      "price_low": 10,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 102,
      "title": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "description": [
        {
          "locale": "it",
          "text": "ASSISTANCE"
        }
      ],
      "configuration": null,
      "status": true,
      "product_type": 23,
      "promo_id": 1701,
      "tags": [],
      "price_base": 23,
      "price": 0.8,
      "price_low": 0.8,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    },
    {
      "id": 161,
      "title": null,
      "description": null,
      "configuration": null,
      "status": true,
      "product_type": 27,
      "promo_id": 2364,
      "tags": [],
      "price": 10,
      "price_low": 40,
      "configurable": false,
      "cartLock": null,
      "upsells": [
        {
          "id": 6,
          "name": "GALLERY-AD-11365",
          "bundle_id": 176,
          "display_priority": 101,
          "details": {
            "quantity": 1,
            "units": "unit"
          },
          "price": 0
        }
      ]
    }
  ]
}
```

### ❌ charge — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 40,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 500,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 700,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1000,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ Activate Toolbox — client 9 (8 - mai iscritta · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ list — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ detail — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ delete — client 9 (8 - mai iscritta · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ redeem — client 9 (8 - mai iscritta · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 9 (8 - mai iscritta · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ get geo — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get current cart — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ get cart by id — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ add to cart — client 9 (8 - mai iscritta · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ order — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ route — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/:route`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ preview — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ info — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ single payment — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ send payment detail — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ create payment detail — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 9 (8 - mai iscritta · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ detail — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/detail/1/72`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ addons — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ charge — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ info — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/info`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ methods — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/methods`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ purchase — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ payment — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ states — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/states/1/72`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ Get Toolbox da attivare — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/82701`

**200 OK**

- Response time is under 5000ms: expected 5989 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 71,
    "escort_has_gift_id": 0,
    "product_type": 22,
    "base_price": 0,
    "expiry": "2024-01-14 23:59:59",
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 104,
    "escort_has_gift_id": 0,
    "product_type": 28,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 92,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 91,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 90,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 93,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 94,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 95,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 101,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 89,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 88,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 87,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 100,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 10 (9 - mai pagante · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 10 (9 - mai pagante · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 10 (9 - mai pagante · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 10 (9 - mai pagante · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 10 (9 - mai pagante · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 10 (9 - mai pagante · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.province_required"
}
```

### ❌ order — client 10 (9 - mai pagante · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 10 (9 - mai pagante · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 10 (9 - mai pagante · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 10 (9 - mai pagante · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- [GET /addons] data is a non-empty array of {id}: expected undefined to be an array

```json
{
  "status": "ok"
}
```

### ❌ charge — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 40,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 500,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 700,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1000,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "escort.number_not_verified"
}
```

### ❌ payment — client 10 (9 - mai pagante · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "escort.number_not_verified"
}
```

### ❌ Get Toolbox da attivare — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/150146`

**200 OK**

- Response time is under 5000ms: expected 6149 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 80,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 81,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 82,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 73,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 102,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 103,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 11 (10 - attiva · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 11 (10 - attiva · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 11 (10 - attiva · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 11 (10 - attiva · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 11 (10 - attiva · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 11 (10 - attiva · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.promotion_not_valid_for_country Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 11 (10 - attiva · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 11 (10 - attiva · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 11 (10 - attiva · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 11 (10 - attiva · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 25,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 75,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 150,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 500,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 11 (10 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**200 OK**

- [purchase] data.labels has label (string) and error: expected null to be an object

```json
{
  "status": "ok",
  "data": {
    "labels": null
  }
}
```

### ❌ Get Toolbox da attivare — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/30941`

**200 OK**

- Response time is under 5000ms: expected 6253 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 102,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 103,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 12 (11 - scaduta · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 12 (11 - scaduta · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 12 (11 - scaduta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 12 (11 - scaduta · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 12 (11 - scaduta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 12 (11 - scaduta · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.promotion_not_valid_for_country Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 12 (11 - scaduta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 12 (11 - scaduta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 12 (11 - scaduta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 12 (11 - scaduta · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 25,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 75,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 150,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 500,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**200 OK**

- [purchase] data.labels has label (string) and error: expected null to be an object

```json
{
  "status": "ok",
  "data": {
    "labels": null
  }
}
```

### ❌ Get Toolbox da attivare — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/102476`

**200 OK**

- Response time is under 5000ms: expected 6327 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 80,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 81,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 82,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 73,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 102,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 103,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 13 (12 - sospesa · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 13 (12 - sospesa · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 13 (12 - sospesa · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 13 (12 - sospesa · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 13 (12 - sospesa · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 13 (12 - sospesa · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.promotion_not_valid_for_country Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 13 (12 - sospesa · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ send payment detail — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 13 (12 - sospesa · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 13 (12 - sospesa · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 13 (12 - sospesa · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 25,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 75,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 150,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 500,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**200 OK**

- [purchase] data.labels has label (string) and error: expected null to be an object

```json
{
  "status": "ok",
  "data": {
    "labels": null
  }
}
```

### ❌ Get Toolbox da attivare — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/119425`

**200 OK**

- Response time is under 5000ms: expected 5999 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 102,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 103,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 14 (13 - iscritta, mai abbonata · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 14 (13 - iscritta, mai abbonata · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 14 (13 - iscritta, mai abbonata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 14 (13 - iscritta, mai abbonata · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 14 (13 - iscritta, mai abbonata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 14 (13 - iscritta, mai abbonata · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.promotion_not_valid_for_country Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 14 (13 - iscritta, mai abbonata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 14 (13 - iscritta, mai abbonata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 14 (13 - iscritta, mai abbonata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 14 (13 - iscritta, mai abbonata · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- [GET /addons] data is a non-empty array of {id}: expected undefined to be an array

```json
{
  "status": "ok"
}
```

### ❌ charge — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 25,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 75,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 150,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 500,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**200 OK**

- [purchase] data.labels has label (string) and error: expected null to be an object

```json
{
  "status": "ok",
  "data": {
    "labels": null
  }
}
```

### ❌ Get Toolbox da attivare — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/26599`

**200 OK**

- Response time is under 5000ms: expected 6335 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 102,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 103,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 15 (14 - in registrazione · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 15 (14 - in registrazione · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 15 (14 - in registrazione · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 15 (14 - in registrazione · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 15 (14 - in registrazione · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 15 (14 - in registrazione · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.promotion_not_valid_for_country Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 15 (14 - in registrazione · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 15 (14 - in registrazione · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 15 (14 - in registrazione · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 15 (14 - in registrazione · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- [GET /addons] data is a non-empty array of {id}: expected undefined to be an array

```json
{
  "status": "ok"
}
```

### ❌ charge — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 25,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 75,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 150,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 500,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "escort.number_not_verified"
}
```

### ❌ payment — client 15 (14 - in registrazione · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "escort.number_not_verified"
}
```

### ❌ Get Toolbox da attivare — client 16 (15 - oscurata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/136961`

**200 OK**

- Response time is under 5000ms: expected 6061 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 102,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 103,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 16 (15 - oscurata · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 16 (15 - oscurata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 16 (15 - oscurata · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 16 (15 - oscurata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 16 (15 - oscurata · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 16 (15 - oscurata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 16 (15 - oscurata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 16 (15 - oscurata · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.promotion_not_valid_for_country Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 16 (15 - oscurata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 16 (15 - oscurata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ send payment detail — client 16 (15 - oscurata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 16 (15 - oscurata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 16 (15 - oscurata · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 16 (15 - oscurata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 16 (15 - oscurata · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 16 (15 - oscurata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 16 (15 - oscurata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 25,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 75,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 150,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 500,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 16 (15 - oscurata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**200 OK**

- [purchase] data.labels has label (string) and error: expected null to be an object

```json
{
  "status": "ok",
  "data": {
    "labels": null
  }
}
```

### ❌ Get Toolbox da attivare — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/100667`

**200 OK**

- Response time is under 5000ms: expected 6341 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 102,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 103,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 17 (16 - in blacklist · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 17 (16 - in blacklist · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 17 (16 - in blacklist · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 17 (16 - in blacklist · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 17 (16 - in blacklist · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 17 (16 - in blacklist · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.promotion_not_valid_for_country Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 17 (16 - in blacklist · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 17 (16 - in blacklist · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 17 (16 - in blacklist · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 17 (16 - in blacklist · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- [GET /addons] data is a non-empty array of {id}: expected undefined to be an array

```json
{
  "status": "ok"
}
```

### ❌ charge — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 25,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 75,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 150,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 500,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**200 OK**

- [purchase] data.labels has label (string) and error: expected null to be an object

```json
{
  "status": "ok",
  "data": {
    "labels": null
  }
}
```

### ❌ Get Toolbox da attivare — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/137593`

**200 OK**

- Response time is under 5000ms: expected 6129 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 102,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 103,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 18 (17 - con numeri collegati · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 18 (17 - con numeri collegati · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 18 (17 - con numeri collegati · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 18 (17 - con numeri collegati · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 18 (17 - con numeri collegati · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 18 (17 - con numeri collegati · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.promotion_not_valid_for_country Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 18 (17 - con numeri collegati · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ send payment detail — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 18 (17 - con numeri collegati · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 18 (17 - con numeri collegati · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 18 (17 - con numeri collegati · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- [GET /addons] data is a non-empty array of {id}: expected undefined to be an array

```json
{
  "status": "ok"
}
```

### ❌ charge — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 25,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 75,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 150,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 500,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**200 OK**

- [purchase] data.labels has label (string) and error: expected null to be an object

```json
{
  "status": "ok",
  "data": {
    "labels": null
  }
}
```

### ❌ Activate Toolbox — client 19 (18 - mai iscritta · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ list — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ detail — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ delete — client 19 (18 - mai iscritta · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ redeem — client 19 (18 - mai iscritta · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 19 (18 - mai iscritta · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ get geo — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get current cart — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ get cart by id — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ add to cart — client 19 (18 - mai iscritta · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ order — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ route — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/:route`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ preview — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ info — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ single payment — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ send payment detail — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ create payment detail — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 19 (18 - mai iscritta · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ detail — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/detail/1/72`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ addons — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ charge — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ info — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/info`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ methods — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/methods`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ purchase — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ payment — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.missing_rid_cid"
}
```

### ❌ states — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/states/1/72`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Profile not found"
}
```

### ❌ Get Toolbox da attivare — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/114139`

**200 OK**

- Response time is under 5000ms: expected 5978 to be below 5000

```json
[
  {
    "id": 1,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 63,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 99,
    "escort_has_gift_id": 0,
    "product_type": 7,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 28,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 5,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 12,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 64,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 2,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 62,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 6,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 7,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 51,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 17,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 15,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 18,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 14,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 45,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 27,
    "escort_has_gift_id": 0,
    "product_type": 8,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 9,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 40,
    "escort_has_gift_id": 0,
    "product_type": 2,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 54,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 55,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 56,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 57,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 53,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 58,
    "escort_has_gift_id": 0,
    "product_type": 18,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 8,
    "escort_has_gift_id": 0,
    "product_type": 5,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 96,
    "escort_has_gift_id": 0,
    "product_type": 6,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 59,
    "escort_has_gift_id": 0,
    "product_type": 19,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 102,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 103,
    "escort_has_gift_id": 0,
    "product_type": 1,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 16,
    "escort_has_gift_id": 0,
    "product_type": 4,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  },
  {
    "id": 105,
    "escort_has_gift_id": 0,
    "product_type": 3,
    "base_price": 0,
    "expiry": null,
    "reason": null,
    "name_number": null,
    "canDelete": true,
    "canRedeem": true,
    "reason_not_available": null
  }
]
```

### ❌ Activate Toolbox — client 20 (19 - mai pagante · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 20 (19 - mai pagante · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ update — client 20 (19 - mai pagante · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 20 (19 - mai pagante · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 20 (19 - mai pagante · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 20 (19 - mai pagante · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "validation.promotion_not_valid_for_country Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 20 (19 - mai pagante · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "items": [
      "The items field must be present."
    ]
  },
  "code": 422
}
```

### ❌ preview — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ single payment — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 20 (19 - mai pagante · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "can_guaranteed": [
      "The can guaranteed field is required."
    ],
    "can_integrate": [
      "The can integrate field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (upload) — client 20 (19 - mai pagante · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "files": [
      "The files field is required."
    ]
  },
  "code": 422
}
```

### ❌ payment detail file (get) — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ payment detail file (delete) — client 20 (19 - mai pagante · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/file/1`

**501 Not Implemented**

- No server error (5xx): expected 501 to be below 500
- Status code is 200: HTTP 501: expected 501 to equal 200

```json
{
  "status": "ko",
  "message": "not implemented"
}
```

### ❌ info — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ addons — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- [GET /addons] data is a non-empty array of {id}: expected undefined to be an array

```json
{
  "status": "ok"
}
```

### ❌ charge — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 25,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 75,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 150,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 200,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 300,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 400,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 500,
    "bonus": 50,
    "enabled": true
  }
]
```

### ❌ purchase — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "escort.number_not_verified"
}
```

### ❌ payment — client 20 (19 - mai pagante · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "escort.number_not_verified"
}
```

## Detail by client

### Client 1 — 0 - attiva · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ✅ 200 OK |
| methods | GET | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ✅ 200 OK |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ✅ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 2 — 1 - scaduta · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 3 — 2 - sospesa · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ✅ 200 OK |
| methods | GET | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ✅ 200 OK |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 4 — 3 - iscritta, mai abbonata · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 5 — 4 - in registrazione · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 422 Unprocessable Entity |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ❌ 422 Unprocessable Entity |
| states | GET | ✅ 200 OK |

### Client 6 — 5 - oscurata · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 422 Unprocessable Entity |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 7 — 6 - in blacklist · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 8 — 7 - con numeri collegati · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 9 — 8 - mai iscritta · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ✅ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ❌ 404 Not Found |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 400 Bad Request |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ❌ 400 Bad Request |
| get cart by id | GET | ❌ 400 Bad Request |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 400 Bad Request |
| route | GET | ❌ 404 Not Found |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ❌ 400 Bad Request |
| single payment | GET | ❌ 400 Bad Request |
| send payment detail | GET | ❌ 400 Bad Request |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ❌ 404 Not Found |
| addons | GET | ❌ 404 Not Found |
| charge | GET | ❌ 400 Bad Request |
| info | GET | ❌ 400 Bad Request |
| methods | POST | ❌ 400 Bad Request |
| purchase | GET | ❌ 400 Bad Request |
| payment | POST | ❌ 400 Bad Request |
| states | GET | ❌ 404 Not Found |

### Client 10 — 9 - mai pagante · it

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 422 Unprocessable Entity |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ❌ 422 Unprocessable Entity |
| states | GET | ✅ 200 OK |

### Client 11 — 10 - attiva · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ✅ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 12 — 11 - scaduta · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ✅ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 13 — 12 - sospesa · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ✅ 200 OK |
| methods | GET | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ✅ 200 OK |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ✅ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 14 — 13 - iscritta, mai abbonata · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 15 — 14 - in registrazione · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ❌ 422 Unprocessable Entity |
| states | GET | ✅ 200 OK |

### Client 16 — 15 - oscurata · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ✅ 200 OK |
| methods | GET | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ✅ 200 OK |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ✅ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 17 — 16 - in blacklist · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 18 — 17 - con numeri collegati · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ✅ 200 OK |
| methods | GET | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ✅ 200 OK |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ✅ 200 OK |
| states | GET | ✅ 200 OK |

### Client 19 — 18 - mai iscritta · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ✅ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ❌ 404 Not Found |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 400 Bad Request |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ❌ 400 Bad Request |
| get cart by id | GET | ❌ 400 Bad Request |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 400 Bad Request |
| route | GET | ❌ 404 Not Found |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ❌ 400 Bad Request |
| single payment | GET | ❌ 400 Bad Request |
| send payment detail | GET | ❌ 400 Bad Request |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ❌ 404 Not Found |
| addons | GET | ❌ 404 Not Found |
| charge | GET | ❌ 400 Bad Request |
| info | GET | ❌ 400 Bad Request |
| methods | POST | ❌ 400 Bad Request |
| purchase | GET | ❌ 400 Bad Request |
| payment | POST | ❌ 400 Bad Request |
| states | GET | ❌ 404 Not Found |

### Client 20 — 19 - mai pagante · es

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 404 Not Found |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ✅ 200 OK |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 422 Unprocessable Entity |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ✅ 200 OK |
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ❌ 422 Unprocessable Entity |
| states | GET | ✅ 200 OK |
