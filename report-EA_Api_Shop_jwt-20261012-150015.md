# EA Api Shop (jwt) / v2 QA Report — 20261012-150015

**Env:** `http://st-bee.test.k8s.dontouch.group` · **Clients:** 1

## Summary

| # | State | 2xx | 4xx | 5xx |
|---|---|---|---|---|
| 1 | operatore 19 | 17 | 15 | 5 |
| | **Total** | **17** | **15** | **5** |

## Failures — non-2xx or failed assertions (21)

### ❌ Get Toolbox da attivare — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/102`

**200 OK**

- Response time is under 5000ms: expected 8784 to be below 5000

```json
{
  "status": "ok",
  "data": {
    "toolboxes": [
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
    ],
    "country": "it"
  }
}
```

### ❌ Activate Toolbox — client 1 (operatore 19)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 1 (operatore 19)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999/redeem`

**418 Unknown**

- Status code is 200: HTTP 418: expected 418 to equal 200

```json
{
  "status": "I'm a teapot",
  "message": {
    "label": "418.X",
    "mode": "gift_already_redeemed",
    "data": null
  },
  "code": "418.0"
}
```

### ❌ update — client 1 (operatore 19)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 1 (operatore 19)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 1 (operatore 19)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get cart by id — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 1 (operatore 19)

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

### ❌ preview — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ send payment detail — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 1 (operatore 19)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', code: +0, …(2) } to not have property 'trace'

```json
{
  "status": "ko",
  "code": 0,
  "message": "Data key[can_guaranteed] is required in DataContainer[EA\\EASlurm\\Data\\Shop\\Bees\\V5\\Payment\\CreatePaymentDetailParams], none provided",
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(53): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(61): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 1 (operatore 19)

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

### ❌ payment detail file (get) — client 1 (operatore 19)

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

### ❌ payment detail file (delete) — client 1 (operatore 19)

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

### ❌ info — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ detail — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/detail/1/72`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', code: +0, …(2) } to not have property 'trace'

```json
{
  "status": "ko",
  "code": 0,
  "message": "Data key[priceBase] is required in DataContainer[EA\\EASlurm\\Data\\Shop\\V5\\Catalog\\SubscriptionItemData], none provided",
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(53): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(224): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true, false)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(143): EA\\EASlurm\\Data\\AbstractDataContainer::make(Array, true)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(327): EA\\EASlurm\\Validation\\DataContainerValidator::build(Array, 'EA\\\\EASlurm\\\\Data...', true)\n#4 [internal function]: EA\\EASlurm\\Validation\\DataContainerValidator::EA\\EASlurm\\Validation\\{closure}(Array)\n#5 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(325): array_map(Object(Closure), Array)\n#6 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(271): EA\\EASlurm\\Validation\\DataContainerValidator::hydrateObjectCollectionField(Array, 'EA\\\\EASlurm\\\\Data...', true)\n#7 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(254): EA\\EASlurm\\Validation\\DataContainerValidator::hydrateField(Array, 'object_collecti...', 'EA\\\\EASlurm\\\\Data...', true)\n#8 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(144): EA\\EASlurm\\Validation\\DataContainerValidator::hydrateWire(Array, 'EA\\\\EASlurm\\\\Data...', true)\n#9 /var/www/html/vendor/ea/ea-slurm/src/Repositories/Remote/Bees/V5/BeesShopRequestTrait.php(223): EA\\EASlurm\\Validation\\DataContainerValidator::build(Array, 'EA\\\\EASlurm\\\\Data...')\n#10 /var/www/html/vendor/ea/ea-slurm/src/Repositories/Remote/Bees/V5/BeesShopRequestTrait.php(114): EA\\EASlurm\\Repositories\\Remote\\Bees\\V5\\AbstractBeesShopRemoteRepository->hydrateContainer('EA\\\\EASlurm\\\\Data...', Array)\n#11 /var/www/html/vendor/ea/ea-slurm/src/Repositories/Remote/Bees/V5/CatalogRemoteRepository.php(30): EA\\EASlurm\\Repositories\\Remote\\Bees\\V5\\AbstractBeesShopRemoteRepository->requestContainer('EA\\\\EASlurm\\\\Data...', 'GET', '/detail/{produc...', Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), NULL, NULL, Array)\n#12 /var/www/html/app/Services/Shop/V2/CatalogService.php(29): EA\\EASlurm\\Repositories\\Remote\\Bees\\V5\\CatalogRemoteRepository->getCatalog(1, 72, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams))\n#13 /var/www/html/app/Http/Controllers/V2/ShopController.php(32): App\\Services\\Shop\\V2\\CatalogService->getCatalog(1, 72, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\ShopController->getDetail('1', '72')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('getDetail', Array)\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\ShopController), 'getDetail')\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#46 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#52 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#53 {main}"
}
```

### ❌ addons — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', code: +0, …(2) } to not have property 'trace'

```json
{
  "status": "ko",
  "code": 0,
  "message": "Data key[priceBase] is required in DataContainer[EA\\EASlurm\\Data\\Shop\\V5\\Catalog\\SubscriptionItemData], none provided",
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(53): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(224): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true, false)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(143): EA\\EASlurm\\Data\\AbstractDataContainer::make(Array, true)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(327): EA\\EASlurm\\Validation\\DataContainerValidator::build(Array, 'EA\\\\EASlurm\\\\Data...', true)\n#4 [internal function]: EA\\EASlurm\\Validation\\DataContainerValidator::EA\\EASlurm\\Validation\\{closure}(Array)\n#5 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(325): array_map(Object(Closure), Array)\n#6 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(271): EA\\EASlurm\\Validation\\DataContainerValidator::hydrateObjectCollectionField(Array, 'EA\\\\EASlurm\\\\Data...', true)\n#7 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(254): EA\\EASlurm\\Validation\\DataContainerValidator::hydrateField(Array, 'object_collecti...', 'EA\\\\EASlurm\\\\Data...', true)\n#8 /var/www/html/vendor/ea/ea-slurm/src/Validation/DataContainerValidator.php(144): EA\\EASlurm\\Validation\\DataContainerValidator::hydrateWire(Array, 'EA\\\\EASlurm\\\\Data...', true)\n#9 /var/www/html/vendor/ea/ea-slurm/src/Repositories/Remote/Bees/V5/BeesShopRequestTrait.php(223): EA\\EASlurm\\Validation\\DataContainerValidator::build(Array, 'EA\\\\EASlurm\\\\Data...')\n#10 /var/www/html/vendor/ea/ea-slurm/src/Repositories/Remote/Bees/V5/BeesShopRequestTrait.php(114): EA\\EASlurm\\Repositories\\Remote\\Bees\\V5\\AbstractBeesShopRemoteRepository->hydrateContainer('EA\\\\EASlurm\\\\Data...', Array)\n#11 /var/www/html/vendor/ea/ea-slurm/src/Repositories/Remote/Bees/V5/CatalogRemoteRepository.php(48): EA\\EASlurm\\Repositories\\Remote\\Bees\\V5\\AbstractBeesShopRemoteRepository->requestContainer('EA\\\\EASlurm\\\\Data...', 'GET', '/addons', Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams))\n#12 /var/www/html/app/Services/Shop/V2/CatalogService.php(36): EA\\EASlurm\\Repositories\\Remote\\Bees\\V5\\CatalogRemoteRepository->getAddons(Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams))\n#13 /var/www/html/app/Http/Controllers/V2/ShopController.php(52): App\\Services\\Shop\\V2\\CatalogService->getAddons(Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\ShopController->getAddons()\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('getAddons', Array)\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\ShopController), 'getAddons')\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#46 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#52 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#53 {main}"
}
```

### ❌ purchase — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ states — client 1 (operatore 19)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/states/1/72`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "Input data wrong, watch validation errors",
  "errors": {
    "city_id": [
      "The city id field is required."
    ],
    "address": [
      "The address field is required."
    ]
  },
  "code": 422
}
```

## Detail by client

### Client 1 — operatore 19

| Request | Method | Status |
|---|---|---|
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 418 Unknown |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ❌ 404 Not Found |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ❌ 404 Not Found |
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
| create payment detail | POST | ❌ 500 Internal Server Error |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ❌ 500 Internal Server Error |
| addons | GET | ❌ 500 Internal Server Error |
| charge | GET | ✅ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ✅ 200 OK |
| states | GET | ❌ 422 Unprocessable Entity |
