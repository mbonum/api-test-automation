# EA Api Shop (jwt) / v2 QA Report — 20261013-143051

**Env:** `http://st-bee.test.k8s.dontouch.group` · **Clients:** 13

## Summary

| # | State | 2xx | 4xx | 5xx |
|---|---|---|---|---|
| 1 | 0 - attiva · it | 25 | 11 | 5 |
| 2 | 1 - attiva (reseller) · it | 20 | 16 | 5 |
| 3 | 2 - sospesa · it | 20 | 16 | 5 |
| 4 | 3 - scaduta (reseller) · it | 20 | 16 | 5 |
| 5 | 4 - in recupero · it | 23 | 13 | 5 |
| 6 | 5 - da attivare mai pagante, con geo · it | 20 | 16 | 5 |
| 7 | 6 - da attivare senza geo (just arrived) · it | 20 | 16 | 5 |
| 8 | 7 - attiva · es | 20 | 16 | 5 |
| 9 | 8 - sospesa · es | 20 | 16 | 5 |
| 10 | 9 - scaduta · es | 20 | 16 | 5 |
| 11 | 10 - in recupero · es | 25 | 11 | 5 |
| 12 | 11 - da attivare mai pagante, con geo · es | 22 | 14 | 5 |
| 13 | 12 - da attivare senza geo (just arrived) · es | 20 | 16 | 5 |
| | **Total** | **275** | **193** | **65** |

## Failures — non-2xx or failed assertions (290)

### ❌ Get Toolbox da attivare — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/102`

**200 OK**

- Response time is under 5000ms: expected 6725 to be below 5000

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

### ❌ payment — client 1 (0 - attiva · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
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

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', code: +0, …(2) } to not have property 'trace'

```json
{
  "status": "ko",
  "code": 0,
  "message": "Data key[can_guaranteed] is required in DataContainer[EA\\EASlurm\\Data\\Shop\\Bees\\V5\\Payment\\CreatePaymentDetailParams], none provided",
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
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

### ❌ payment — client 1 (0 - attiva · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 22232.0, false, 2087121)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 22232.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152455`

**200 OK**

- Response time is under 5000ms: expected 6680 to be below 5000

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

### ❌ Activate Toolbox — client 2 (1 - attiva (reseller) · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 2 (1 - attiva (reseller) · it)

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

### ❌ update — client 2 (1 - attiva (reseller) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 2 (1 - attiva (reseller) · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 2 (1 - attiva (reseller) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 2 (1 - attiva (reseller) · it)

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

### ❌ preview — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 2 (1 - attiva (reseller) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 2 (1 - attiva (reseller) · it)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 2 (1 - attiva (reseller) · it)

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

### ❌ payment detail file (get) — client 2 (1 - attiva (reseller) · it)

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

### ❌ payment detail file (delete) — client 2 (1 - attiva (reseller) · it)

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

### ❌ info — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 2 (1 - attiva (reseller) · it)

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

### ❌ purchase — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ payment — client 2 (1 - attiva (reseller) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 5985.0, false, 2084389)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 5985.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152246`

**200 OK**

- Response time is under 5000ms: expected 6287 to be below 5000

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

### ❌ info — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 3 (2 - sospesa · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
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

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', code: +0, …(2) } to not have property 'trace'

```json
{
  "status": "ko",
  "code": 0,
  "message": "Data key[can_guaranteed] is required in DataContainer[EA\\EASlurm\\Data\\Shop\\Bees\\V5\\Payment\\CreatePaymentDetailParams], none provided",
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
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

### ❌ payment — client 3 (2 - sospesa · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 5985.0, false, 2078079)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 5985.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/148372`

**200 OK**

- Response time is under 5000ms: expected 6165 to be below 5000

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

### ❌ Activate Toolbox — client 4 (3 - scaduta (reseller) · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 4 (3 - scaduta (reseller) · it)

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

### ❌ update — client 4 (3 - scaduta (reseller) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 4 (3 - scaduta (reseller) · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 4 (3 - scaduta (reseller) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 4 (3 - scaduta (reseller) · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**200 OK**

- Response time is under 5000ms: expected 22674 to be below 5000

```json
{
  "status": "ok"
}
```

### ❌ order — client 4 (3 - scaduta (reseller) · it)

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

### ❌ preview — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 4 (3 - scaduta (reseller) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 4 (3 - scaduta (reseller) · it)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 4 (3 - scaduta (reseller) · it)

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

### ❌ payment detail file (get) — client 4 (3 - scaduta (reseller) · it)

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

### ❌ payment detail file (delete) — client 4 (3 - scaduta (reseller) · it)

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

### ❌ info — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 4 (3 - scaduta (reseller) · it)

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

### ❌ purchase — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ payment — client 4 (3 - scaduta (reseller) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 7410.0, false, 1969753)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 7410.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 5 (4 - in recupero · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/52550`

**200 OK**

- Response time is under 5000ms: expected 6359 to be below 5000

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

### ❌ Activate Toolbox — client 5 (4 - in recupero · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 5 (4 - in recupero · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 5 (4 - in recupero · it)

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

### ❌ update — client 5 (4 - in recupero · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 5 (4 - in recupero · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 5 (4 - in recupero · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 5 (4 - in recupero · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 5 (4 - in recupero · it)

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

### ❌ preview — client 5 (4 - in recupero · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ payment — client 5 (4 - in recupero · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ send payment detail — client 5 (4 - in recupero · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 5 (4 - in recupero · it)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 5 (4 - in recupero · it)

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

### ❌ payment detail file (get) — client 5 (4 - in recupero · it)

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

### ❌ payment detail file (delete) — client 5 (4 - in recupero · it)

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

### ❌ info — client 5 (4 - in recupero · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 5 (4 - in recupero · it)

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

### ❌ purchase — client 5 (4 - in recupero · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ payment — client 5 (4 - in recupero · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 3696.0, false, 2042069)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 3696.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152496`

**200 OK**

- Response time is under 5000ms: expected 6435 to be below 5000

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

### ❌ Activate Toolbox — client 6 (5 - da attivare mai pagante, con geo · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 6 (5 - da attivare mai pagante, con geo · it)

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

### ❌ update — client 6 (5 - da attivare mai pagante, con geo · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 6 (5 - da attivare mai pagante, con geo · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 6 (5 - da attivare mai pagante, con geo · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 6 (5 - da attivare mai pagante, con geo · it)

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

### ❌ preview — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 6 (5 - da attivare mai pagante, con geo · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 6 (5 - da attivare mai pagante, con geo · it)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 6 (5 - da attivare mai pagante, con geo · it)

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

### ❌ payment detail file (get) — client 6 (5 - da attivare mai pagante, con geo · it)

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

### ❌ payment detail file (delete) — client 6 (5 - da attivare mai pagante, con geo · it)

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

### ❌ info — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 6 (5 - da attivare mai pagante, con geo · it)

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

### ❌ purchase — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ payment — client 6 (5 - da attivare mai pagante, con geo · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 4620.0, false, 2085407)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 4620.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152515`

**200 OK**

- Response time is under 5000ms: expected 6560 to be below 5000

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

### ❌ Activate Toolbox — client 7 (6 - da attivare senza geo (just arrived) · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 7 (6 - da attivare senza geo (just arrived) · it)

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

### ❌ update — client 7 (6 - da attivare senza geo (just arrived) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 7 (6 - da attivare senza geo (just arrived) · it)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 7 (6 - da attivare senza geo (just arrived) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 7 (6 - da attivare senza geo (just arrived) · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "shop.province_required"
}
```

### ❌ order — client 7 (6 - da attivare senza geo (just arrived) · it)

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

### ❌ preview — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 7 (6 - da attivare senza geo (just arrived) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 7 (6 - da attivare senza geo (just arrived) · it)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 7 (6 - da attivare senza geo (just arrived) · it)

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

### ❌ payment detail file (get) — client 7 (6 - da attivare senza geo (just arrived) · it)

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

### ❌ payment detail file (delete) — client 7 (6 - da attivare senza geo (just arrived) · it)

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

### ❌ info — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 7 (6 - da attivare senza geo (just arrived) · it)

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

### ❌ purchase — client 7 (6 - da attivare senza geo (just arrived) · it)

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

### ❌ payment — client 7 (6 - da attivare senza geo (just arrived) · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(350): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 8 (7 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/150118`

**200 OK**

- Response time is under 5000ms: expected 6107 to be below 5000

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

### ❌ Activate Toolbox — client 8 (7 - attiva · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 8 (7 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 8 (7 - attiva · es)

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

### ❌ update — client 8 (7 - attiva · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 8 (7 - attiva · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 8 (7 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 8 (7 - attiva · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 8 (7 - attiva · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 8 (7 - attiva · es)

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

### ❌ preview — client 8 (7 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 8 (7 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 8 (7 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 8 (7 - attiva · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 8 (7 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 8 (7 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 8 (7 - attiva · es)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 8 (7 - attiva · es)

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

### ❌ payment detail file (get) — client 8 (7 - attiva · es)

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

### ❌ payment detail file (delete) — client 8 (7 - attiva · es)

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

### ❌ info — client 8 (7 - attiva · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 8 (7 - attiva · es)

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

### ❌ purchase — client 8 (7 - attiva · es)

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

### ❌ payment — client 8 (7 - attiva · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('es', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(350): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 9 (8 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/115670`

**200 OK**

- Response time is under 5000ms: expected 7132 to be below 5000

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

### ❌ Activate Toolbox — client 9 (8 - sospesa · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 9 (8 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 9 (8 - sospesa · es)

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

### ❌ update — client 9 (8 - sospesa · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 9 (8 - sospesa · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 9 (8 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 9 (8 - sospesa · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 9 (8 - sospesa · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 9 (8 - sospesa · es)

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

### ❌ preview — client 9 (8 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 9 (8 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 9 (8 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 9 (8 - sospesa · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 9 (8 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 9 (8 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 9 (8 - sospesa · es)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 9 (8 - sospesa · es)

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

### ❌ payment detail file (get) — client 9 (8 - sospesa · es)

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

### ❌ payment detail file (delete) — client 9 (8 - sospesa · es)

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

### ❌ info — client 9 (8 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 9 (8 - sospesa · es)

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

### ❌ purchase — client 9 (8 - sospesa · es)

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

### ❌ payment — client 9 (8 - sospesa · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('es', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(350): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 10 (9 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152392`

**200 OK**

- Response time is under 5000ms: expected 6829 to be below 5000

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

### ❌ Activate Toolbox — client 10 (9 - scaduta · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 10 (9 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 10 (9 - scaduta · es)

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

### ❌ update — client 10 (9 - scaduta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 10 (9 - scaduta · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 10 (9 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 10 (9 - scaduta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 10 (9 - scaduta · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 10 (9 - scaduta · es)

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

### ❌ preview — client 10 (9 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 10 (9 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 10 (9 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 10 (9 - scaduta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 10 (9 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 10 (9 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 10 (9 - scaduta · es)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 10 (9 - scaduta · es)

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

### ❌ payment detail file (get) — client 10 (9 - scaduta · es)

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

### ❌ payment detail file (delete) — client 10 (9 - scaduta · es)

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

### ❌ info — client 10 (9 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 10 (9 - scaduta · es)

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

### ❌ purchase — client 10 (9 - scaduta · es)

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

### ❌ payment — client 10 (9 - scaduta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('es', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(350): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/52550`

**200 OK**

- Response time is under 5000ms: expected 6930 to be below 5000

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

### ❌ Activate Toolbox — client 11 (10 - in recupero · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 11 (10 - in recupero · es)

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

### ❌ update — client 11 (10 - in recupero · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 11 (10 - in recupero · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 11 (10 - in recupero · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 11 (10 - in recupero · es)

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

### ❌ payment — client 11 (10 - in recupero · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ send payment detail — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 11 (10 - in recupero · es)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 11 (10 - in recupero · es)

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

### ❌ payment detail file (get) — client 11 (10 - in recupero · es)

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

### ❌ payment detail file (delete) — client 11 (10 - in recupero · es)

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

### ❌ info — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 11 (10 - in recupero · es)

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

### ❌ purchase — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ payment — client 11 (10 - in recupero · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 7392.0, false, 2042069)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 7392.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 12 (11 - da attivare mai pagante, con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152496`

**200 OK**

- Response time is under 5000ms: expected 6712 to be below 5000

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

### ❌ Activate Toolbox — client 12 (11 - da attivare mai pagante, con geo · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 12 (11 - da attivare mai pagante, con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 12 (11 - da attivare mai pagante, con geo · es)

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

### ❌ update — client 12 (11 - da attivare mai pagante, con geo · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 12 (11 - da attivare mai pagante, con geo · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 12 (11 - da attivare mai pagante, con geo · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ order — client 12 (11 - da attivare mai pagante, con geo · es)

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

### ❌ info — client 12 (11 - da attivare mai pagante, con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 12 (11 - da attivare mai pagante, con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 12 (11 - da attivare mai pagante, con geo · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 12 (11 - da attivare mai pagante, con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 12 (11 - da attivare mai pagante, con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 12 (11 - da attivare mai pagante, con geo · es)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 12 (11 - da attivare mai pagante, con geo · es)

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

### ❌ payment detail file (get) — client 12 (11 - da attivare mai pagante, con geo · es)

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

### ❌ payment detail file (delete) — client 12 (11 - da attivare mai pagante, con geo · es)

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

### ❌ info — client 12 (11 - da attivare mai pagante, con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 12 (11 - da attivare mai pagante, con geo · es)

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

### ❌ purchase — client 12 (11 - da attivare mai pagante, con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**422 Unprocessable Entity**

- Status code is 200: HTTP 422: expected 422 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_credit_low"
}
```

### ❌ payment — client 12 (11 - da attivare mai pagante, con geo · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 9240.0, false, 2085407)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 9240.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152520`

**200 OK**

- Response time is under 5000ms: expected 6331 to be below 5000

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

### ❌ Activate Toolbox — client 13 (12 - da attivare senza geo (just arrived) · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 13 (12 - da attivare senza geo (just arrived) · es)

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

### ❌ update — client 13 (12 - da attivare senza geo (just arrived) · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 13 (12 - da attivare senza geo (just arrived) · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 13 (12 - da attivare senza geo (just arrived) · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 13 (12 - da attivare senza geo (just arrived) · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 13 (12 - da attivare senza geo (just arrived) · es)

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

### ❌ preview — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 13 (12 - da attivare senza geo (just arrived) · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(773): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->createPaymentPublic(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('createPaymentPu...', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'createPaymentPu...')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ single payment — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 13 (12 - da attivare senza geo (just arrived) · es)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Data/AbstractDataContainer.php(55): EA\\EASlurm\\Data\\AbstractDataContainer->checkData(Array, true, false)\n#1 /var/www/html/app/Services/Shop/V2/PaymentService.php(102): EA\\EASlurm\\Data\\AbstractDataContainer->__construct(Array, true)\n#2 /var/www/html/app/Http/Controllers/V2/PaymentController.php(63): App\\Services\\Shop\\V2\\PaymentService->createPaymentDetail(999999999, Object(EA\\EASlurm\\Data\\Shop\\Bees\\V5\\BeesActorParams), Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\V2\\PaymentController->postPaymentDetail(Object(Illuminate\\Http\\Request), '999999999')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('postPaymentDeta...', Array)\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\V2\\PaymentController), 'postPaymentDeta...')\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/app/Http/Middleware/LogShopV2Flow.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\LogShopV2Flow->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/app/Http/Middleware/Authenticate.php(121): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\Authenticate->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'operator')\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(62): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#42 {main}"
}
```

### ❌ payment detail file (upload) — client 13 (12 - da attivare senza geo (just arrived) · es)

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

### ❌ payment detail file (get) — client 13 (12 - da attivare senza geo (just arrived) · es)

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

### ❌ payment detail file (delete) — client 13 (12 - da attivare senza geo (just arrived) · es)

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

### ❌ info — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 13 (12 - da attivare senza geo (just arrived) · es)

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

### ❌ purchase — client 13 (12 - da attivare senza geo (just arrived) · es)

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

### ❌ payment — client 13 (12 - da attivare senza geo (just arrived) · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Missing attribute[es] for entity class[EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity]",
  "code": 0,
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('es', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(350): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

## Detail by client

### Client 1 — 0 - attiva · it

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 418 Unknown |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ✅ 200 OK |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ✅ 200 OK |
| info | GET | ✅ 200 OK |
| methods | GET | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ✅ 200 OK |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 2 — 1 - attiva (reseller) · it

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 3 — 2 - sospesa · it

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 4 — 3 - scaduta (reseller) · it

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 5 — 4 - in recupero · it

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ✅ 200 OK |
| methods | GET | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ✅ 200 OK |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 6 — 5 - da attivare mai pagante, con geo · it

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 7 — 6 - da attivare senza geo (just arrived) · it

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 404 Not Found |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 8 — 7 - attiva · es

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 9 — 8 - sospesa · es

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 10 — 9 - scaduta · es

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 11 — 10 - in recupero · es

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 418 Unknown |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ✅ 200 OK |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ✅ 200 OK |
| info | GET | ✅ 200 OK |
| methods | GET | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ✅ 200 OK |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 12 — 11 - da attivare mai pagante, con geo · es

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| Get Toolbox da attivare | GET | ❌ 200 OK |
| Activate Toolbox | PUT | ❌ 404 Not Found |
| list | GET | ✅ 200 OK |
| detail | GET | ❌ 404 Not Found |
| delete | DELETE | ✅ 200 OK |
| redeem | PUT | ❌ 418 Unknown |
| update | POST | ❌ 404 Not Found |
| delete | DELETE | ❌ 404 Not Found |
| get geo | GET | ✅ 200 OK |
| set geo | POST | ❌ 404 Not Found |
| get current cart | GET | ✅ 200 OK |
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ✅ 200 OK |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ✅ 200 OK |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 13 — 12 - da attivare senza geo (just arrived) · es

| Request | Method | Status |
|---|---|---|
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
| undefined | GET | ✅ 200 OK |
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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
| order | POST | ❌ 422 Unprocessable Entity |
| route | GET | ✅ 200 OK |
| preview | GET | ❌ 404 Not Found |
| info | GET | ❌ 404 Not Found |
| methods | GET | ✅ 200 OK |
| payments | GET | ❌ 404 Not Found |
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ✅ 200 OK |
| single payment | GET | ❌ 404 Not Found |
| send payment detail | GET | ❌ 404 Not Found |
| create payment detail | POST | ❌ 500 Internal Server Error |
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
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |
