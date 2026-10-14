# EA Api Shop (jwt) / v2 QA Report - 20261013-153012

**Env:** `http://st-bee.test.k8s.dontouch.group` · **Clients:** 14

## Summary

| # | State | 2xx | 4xx | 5xx |
|---|---|---|---|---|
| 1 | 0 - attiva · it | 21 | 11 | 5 |
| 2 | 1 - attiva (reseller) · it | 18 | 14 | 5 |
| 3 | 2 - sospesa · it | 18 | 14 | 5 |
| 4 | 3 - scaduta (reseller) · it | 18 | 14 | 5 |
| 5 | 4 - in recupero · it | 21 | 11 | 5 |
| 6 | 5 - da attivare mai pagante, con geo · it | 18 | 14 | 5 |
| 7 | 6 - da attivare senza geo (just arrived) · it | 16 | 16 | 5 |
| 8 | 7 - attiva · es | 16 | 16 | 5 |
| 9 | 8 - sospesa · es | 16 | 16 | 5 |
| 10 | 9 - scaduta · es | 16 | 16 | 5 |
| 11 | 10 - in recupero · es | 16 | 16 | 5 |
| 12 | 11 - da attivare con geo · es | 19 | 13 | 5 |
| 13 | 12 - da attivare senza geo (just arrived) · es | 16 | 16 | 5 |
| 14 | 13 - da attivare (reseller) · es | 17 | 15 | 5 |
| | **Total** | **246** | **202** | **70** |

## Failures - non-2xx or failed assertions (311)

### ❌ Get Toolbox da attivare - client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/102`

**200 OK**

- Response time is under 5000ms: expected 7857 to be below 5000

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 27790.0, false, 2087121)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 27790.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 2 (1 - attiva (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152455`

**200 OK**

- Response time is under 5000ms: expected 7172 to be below 5000

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 11970.0, false, 2084389)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 11970.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152246`

**200 OK**

- Response time is under 5000ms: expected 6164 to be below 5000

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 11970.0, false, 2078079)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 11970.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 4 (3 - scaduta (reseller) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/148372`

**200 OK**

- Response time is under 5000ms: expected 6343 to be below 5000

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 14820.0, false, 1969753)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 14820.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 5 (4 - in recupero · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/52550`

**200 OK**

- Response time is under 5000ms: expected 6475 to be below 5000

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 11088.0, false, 2042069)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 11088.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152496`

**200 OK**

- Response time is under 5000ms: expected 8119 to be below 5000

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

### ❌ addons — client 6 (5 - da attivare mai pagante, con geo · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- Response time is under 5000ms: expected 6175 to be below 5000

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
    }
  ]
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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 13860.0, false, 2085407)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 13860.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152515`

**200 OK**

- Response time is under 5000ms: expected 5862 to be below 5000

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

### ❌ addons — client 7 (6 - da attivare senza geo (just arrived) · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**200 OK**

- Response time is under 5000ms: expected 6693 to be below 5000

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
    }
  ]
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

- Response time is under 5000ms: expected 6476 to be below 5000

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

- Response time is under 5000ms: expected 5897 to be below 5000

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

- Response time is under 5000ms: expected 6895 to be below 5000

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

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/147432`

**200 OK**

- Response time is under 5000ms: expected 7138 to be below 5000

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

### ❌ get geo — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

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

### ❌ add to cart — client 11 (10 - in recupero · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ preview — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
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

### ❌ single payment — client 11 (10 - in recupero · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
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

### ❌ purchase — client 11 (10 - in recupero · es)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('es', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 10.0, false, 0)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(350): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), NULL, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 12 (11 - da attivare con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152464`

**200 OK**

- Response time is under 5000ms: expected 6352 to be below 5000

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

### ❌ Activate Toolbox — client 12 (11 - da attivare con geo · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 12 (11 - da attivare con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 12 (11 - da attivare con geo · es)

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

### ❌ update — client 12 (11 - da attivare con geo · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 12 (11 - da attivare con geo · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 12 (11 - da attivare con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 12 (11 - da attivare con geo · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 12 (11 - da attivare con geo · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 12 (11 - da attivare con geo · es)

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

### ❌ preview — client 12 (11 - da attivare con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ payment — client 12 (11 - da attivare con geo · es)

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

### ❌ send payment detail — client 12 (11 - da attivare con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 12 (11 - da attivare con geo · es)

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

### ❌ payment detail file (upload) — client 12 (11 - da attivare con geo · es)

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

### ❌ payment detail file (get) — client 12 (11 - da attivare con geo · es)

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

### ❌ payment detail file (delete) — client 12 (11 - da attivare con geo · es)

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

### ❌ info — client 12 (11 - da attivare con geo · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Reseller not found"
}
```

### ❌ charge — client 12 (11 - da attivare con geo · es)

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

### ❌ purchase — client 12 (11 - da attivare con geo · es)

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

### ❌ payment — client 12 (11 - da attivare con geo · es)

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

### ❌ Get Toolbox da attivare — client 13 (12 - da attivare senza geo (just arrived) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/152520`

**200 OK**

- Response time is under 5000ms: expected 6336 to be below 5000

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

### ❌ Get Toolbox da attivare — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/126758`

**200 OK**

- Response time is under 5000ms: expected 6027 to be below 5000

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

### ❌ Activate Toolbox — client 14 (13 - da attivare (reseller) · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.toolbox_not_found"
}
```

### ❌ detail — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/gifts/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.gift_not_found"
}
```

### ❌ redeem — client 14 (13 - da attivare (reseller) · es)

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

### ❌ update — client 14 (13 - da attivare (reseller) · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ delete — client 14 (13 - da attivare (reseller) · es)

`DELETE http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ get geo — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ set geo — client 14 (13 - da attivare (reseller) · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999/geo`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "Cart not found"
}
```

### ❌ add to cart — client 14 (13 - da attivare (reseller) · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "Promotion (it) not valid for profile country (es)."
}
```

### ❌ order — client 14 (13 - da attivare (reseller) · es)

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

### ❌ preview — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/fidelity/preview/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.cart_detail_not_found"
}
```

### ❌ info — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/info?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payments — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/ext/payments?payload=eyJ3YWxsZXRfaWQiOjk5OTk5OTk5OX0=`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ payment — client 14 (13 - da attivare (reseller) · es)

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

### ❌ single payment — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ send payment detail — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "validation.wallet_not_found"
}
```

### ❌ create payment detail — client 14 (13 - da attivare (reseller) · es)

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

### ❌ payment detail file (upload) — client 14 (13 - da attivare (reseller) · es)

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

### ❌ payment detail file (get) — client 14 (13 - da attivare (reseller) · es)

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

### ❌ payment detail file (delete) — client 14 (13 - da attivare (reseller) · es)

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

### ❌ info — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/reseller/info`

**200 OK**

- Response time is under 5000ms: expected 6935 to be below 5000

```json
{
  "status": "ok",
  "data": [
    {
      "id": 70469,
      "avatar": "https://st-i.cdn.group/public/images/uploadedimages/escort/70469/2025_08_07_12_16_19_oSS1a.jpg",
      "number": "680726959",
      "name": "Maxxage Madrid",
      "current_finished_at": null,
      "expiration_date": null,
      "fidelity": {
        "level": 0,
        "action": "start",
        "discount": 0,
        "type": "percentage"
      }
    },
    {
      "id": 70457,
      "avatar": "https://st-i.cdn.group/public/images/uploadedimages/escort/70457/2022_08_02_17_12_54_eUjOx.jpg",
      "number": "626643081",
      "name": "Maxxage VLC",
      "current_finished_at": null,
      "expiration_date": null,
      "fidelity": {
        "level": 0,
        "action": "start",
        "discount": 0,
        "type": "percentage"
      }
    },
    {
      "id": 70472,
      "avatar": "https://st-i.cdn.group/public/images/uploadedimages/escort/70472/2025_05_16_11_57_45_UAPRZ.jpg",
      "number": "602291569",
      "name": "Mansiòn Babylon",
      "current_finished_at": null,
      "expiration_date": null,
      "fidelity": {
        "level": 0,
        "action": "start",
        "discount": 0,
        "type": "percentage"
      }
    },
    {
      "id": 126811,
      "avatar": "https://st-i.cdn.group/public/images/uploadedimages/escort/126811/2023_11_03_11_34_03_MZqOf.jpg",
      "number": "641254791",
      "name": "Sala Kixx",
      "current_finished_at": null,
      "expiration_date": null,
      "fidelity": {
        "level": 0,
        "action": "start",
        "discount": 0,
        "type": "percentage"
      }
    },
    {
      "id": 126851,
      "avatar": "https://st-i.cdn.group/public/images/uploadedimages/escort/126851/2025_05_20_16_18_53_eE1Ct.jpg",
      "number": "673455956",
      "name": "New Sala Maxx",
      "current_finished_at": null,
      "expiration_date": null,
      "fidelity": {
        "level": 0,
        "action": "start",
        "discount": 0,
        "type": "percentage"
      }
    },
    {
      "id": 131926,
      "avatar": "https://st-i.cdn.group/public/images/uploadedimages/escort/131926/2025_09_15_13_01_22_Xja8r.jpg",
      "number": "666314275",
      "name": "Mansion Babylon",
      "current_finished_at": null,
      "expiration_date": null,
      "fidelity": {
        "level": 0,
        "action": "start",
        "discount": 0,
        "type": "percentage"
      }
    },
    {
      "id": 126758,
      "avatar": null,
      "number": "9990000000163",
      "name": "Maxxage madrid Girl",
      "current_finished_at": null,
      "expiration_date": null,
      "fidelity": {
        "level": 0,
        "action": "start",
        "discount": 0,
        "type": "percentage"
      }
    }
  ]
}
```

### ❌ charge — client 14 (13 - da attivare (reseller) · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**200 OK**

- [charge] data is a non-empty array of {amount}: expected undefined to be an array

```json
[
  {
    "id": 1,
    "amount": 50,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 2,
    "amount": 100,
    "bonus": 0,
    "enabled": true
  },
  {
    "id": 3,
    "amount": 200,
    "bonus": 30,
    "enabled": true
  },
  {
    "id": 4,
    "amount": 400,
    "bonus": 60,
    "enabled": true
  },
  {
    "id": 5,
    "amount": 600,
    "bonus": 120,
    "enabled": true
  },
  {
    "id": 6,
    "amount": 800,
    "bonus": 160,
    "enabled": true
  },
  {
    "id": 7,
    "amount": 1000,
    "bonus": 230,
    "enabled": true
  },
  {
    "id": 8,
    "amount": 1200,
    "bonus": 280,
    "enabled": true
  },
  {
    "id": 9,
    "amount": 1600,
    "bonus": 480,
    "enabled": true
  },
  {
    "id": 10,
    "amount": 2000,
    "bonus": 600,
    "enabled": true
  }
]
```

### ❌ purchase — client 14 (13 - da attivare (reseller) · es)

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

### ❌ payment — client 14 (13 - da attivare (reseller) · es)

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

### Client 3 — 2 - sospesa · it

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

### Client 4 — 3 - scaduta (reseller) · it

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

### Client 5 — 4 - in recupero · it

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

### Client 6 — 5 - da attivare mai pagante, con geo · it

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
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 7 — 6 - da attivare senza geo (just arrived) · it

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
| addons | GET | ❌ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 8 — 7 - attiva · es

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

### Client 12 — 11 - da attivare con geo · es

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
| get cart by id | GET | ✅ 200 OK |
| add to cart | PUT | ❌ 400 Bad Request |
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
| purchase | GET | ❌ 200 OK |
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |

### Client 13 — 12 - da attivare senza geo (just arrived) · es

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

### Client 14 — 13 - da attivare (reseller) · es

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
| info | GET | ❌ 200 OK |
| detail | GET | ✅ 200 OK |
| addons | GET | ✅ 200 OK |
| charge | GET | ❌ 200 OK |
| info | GET | ✅ 200 OK |
| methods | POST | ✅ 200 OK |
| purchase | GET | ❌ 200 OK |
| payment | POST | ❌ 500 Internal Server Error |
| states | GET | ✅ 200 OK |
