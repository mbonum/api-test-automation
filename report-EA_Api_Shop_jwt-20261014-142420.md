# EA Api Shop (jwt) / v2 QA Report — 20261014-142420

**Env:** `http://st-bee.test.k8s.dontouch.group` · **Clients:** 20

## Summary

| # | State | 2xx | 4xx | 5xx |
|---|---|---|---|---|
| 1 | 0 - attiva · it | 21 | 11 | 5 |
| 2 | 1 - scaduta · it | 18 | 14 | 5 |
| 3 | 2 - sospesa · it | 22 | 10 | 5 |
| 4 | 3 - iscritta, mai abbonata · it | 18 | 14 | 5 |
| 5 | 4 - in registrazione · it | 15 | 18 | 4 |
| 6 | 5 - oscurata · it | 16 | 16 | 5 |
| 7 | 6 - in blacklist · it | 18 | 14 | 5 |
| 8 | 7 - con numeri collegati · it | 18 | 14 | 5 |
| 9 | 8 - mai iscritta · it | 3 | 27 | 7 |
| 10 | 9 - mai pagante · it | 15 | 18 | 4 |
| 11 | 10 - attiva · es | 16 | 16 | 5 |
| 12 | 11 - scaduta · es | 16 | 16 | 5 |
| 13 | 12 - sospesa · es | 19 | 13 | 5 |
| 14 | 13 - iscritta, mai abbonata · es | 16 | 16 | 5 |
| 15 | 14 - in registrazione · es | 15 | 18 | 4 |
| 16 | 15 - oscurata · es | 19 | 13 | 5 |
| 17 | 16 - in blacklist · es | 16 | 16 | 5 |
| 18 | 17 - con numeri collegati · es | 19 | 13 | 5 |
| 19 | 18 - mai iscritta · es | 3 | 27 | 7 |
| 20 | 19 - mai pagante · es | 15 | 18 | 4 |
| | **Total** | **318** | **322** | **100** |

## Failures — non-2xx or failed assertions (466)

### ❌ Get Toolbox da attivare — client 1 (0 - attiva · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/141619`

**200 OK**

- Response time is under 5000ms: expected 6484 to be below 5000

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 11088.0, false, 2074387)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 11088.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 2 (1 - scaduta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/20634`

**200 OK**

- Response time is under 5000ms: expected 6282 to be below 5000

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

### ❌ payment — client 2 (1 - scaduta · it)

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

### ❌ payment — client 2 (1 - scaduta · it)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 13860.0, false, 2087720)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 13860.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 3 (2 - sospesa · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/101242`

**200 OK**

- Response time is under 5000ms: expected 6653 to be below 5000

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 11856.0, false, 2042058)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 11856.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 4 (3 - iscritta, mai abbonata · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/44688`

**200 OK**

- Response time is under 5000ms: expected 6915 to be below 5000

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

### ❌ payment — client 4 (3 - iscritta, mai abbonata · it)

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

### ❌ payment — client 4 (3 - iscritta, mai abbonata · it)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 14820.0, false, 2087721)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 14820.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 5 (4 - in registrazione · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/149849`

**200 OK**

- Response time is under 5000ms: expected 7267 to be below 5000

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

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "shop.province_required"
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

### ❌ payment — client 5 (4 - in registrazione · it)

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

- Response time is under 5000ms: expected 6534 to be below 5000

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

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "shop.province_required"
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

### ❌ payment — client 6 (5 - oscurata · it)

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

### ❌ payment — client 6 (5 - oscurata · it)

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

### ❌ Get Toolbox da attivare — client 7 (6 - in blacklist · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/35801`

**200 OK**

- Response time is under 5000ms: expected 6467 to be below 5000

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

### ❌ payment — client 7 (6 - in blacklist · it)

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

### ❌ payment — client 7 (6 - in blacklist · it)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 14815.0, false, 2087724)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 14815.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
}
```

### ❌ Get Toolbox da attivare — client 8 (7 - con numeri collegati · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/52143`

**200 OK**

- Response time is under 5000ms: expected 6465 to be below 5000

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

### ❌ payment — client 8 (7 - con numeri collegati · it)

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

### ❌ payment — client 8 (7 - con numeri collegati · it)

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
  "trace": "#0 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(62): EA\\EASlurm\\Entities\\AbstractEntity->extractAttribute(Array, 'es', true)\n#1 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodDomainEntity.php(23): EA\\EASlurm\\Entities\\AbstractEntity->fill(Array)\n#2 /var/www/html/vendor/ea/ea-slurm/src/Entities/AbstractEntity.php(49): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodDomainEntity->fromData(Array)\n#3 /var/www/html/vendor/ea/ea-slurm/src/Entities/EntityFactory.php(177): EA\\EASlurm\\Entities\\AbstractEntity->__construct(Array, 'json_size_defau...')\n#4 /var/www/html/vendor/ea/ea-slurm/src/Entities/Shop/Payment/PaymentMethodEntity.php(125): EA\\EASlurm\\Entities\\EntityFactory::buildWithEntityClass(Array, 'EA\\\\EASlurm\\\\Enti...')\n#5 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(1240): EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity->getDomain()\n#6 /var/www/html/app/Service/Shop/V5/Payment/PaymentHelpers.php(243): App\\Service\\Shop\\V5\\Payment\\PaymentService->getPaymentDomainByCountry('it', Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity))\n#7 /var/www/html/app/Service/Shop/V5/Payment/PaymentService.php(668): App\\Service\\Shop\\V5\\Payment\\PaymentService->finalizeGatewayPayment(Object(EA\\EASlurm\\Entities\\Shop\\Payment\\PaymentMethodEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(App\\Service\\Shop\\V5\\Payment\\Params\\PaymentInitializePayload), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 'PaymentService:...', true, 12600.0, false, 2087725)\n#8 /var/www/html/app/Http/Controllers/Repository/Bees/V5/PaymentController.php(348): App\\Service\\Shop\\V5\\Payment\\PaymentService->payCart(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Cart\\CartEntity), Object(EA\\EASlurm\\Entities\\Identity\\CustomerEntity), Object(EA\\EASlurm\\Data\\Shop\\V5\\Payment\\PayCartParams), 12600.0, true)\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController->payment(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('payment', Array)\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\PaymentController), 'payment')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#17 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#46 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#47 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#48 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#49 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#50 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#51 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#52 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#53 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#54 {main}"
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
  "message": "Profile not found"
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
  "message": "No Rid or Cid were provided."
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
  "message": "No Rid or Cid were provided."
}
```

### ❌ get cart by id — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ add to cart — client 9 (8 - mai iscritta · it)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ order — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
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

### ❌ payment — client 9 (8 - mai iscritta · it)

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

### ❌ payments — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ single payment — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ send payment detail — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ create payment detail — client 9 (8 - mai iscritta · it)

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

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Cannot assign null to property App\\DTO\\Shop\\V5\\Input\\GetCatalog::$profile of type EA\\EASlurm\\Entities\\Identity\\ProfileEntity",
  "code": 0,
  "trace": "#0 /var/www/html/app/Http/Controllers/Repository/Bees/V5/CatalogController.php(58): App\\DTO\\Shop\\V5\\Input\\GetCatalog->fromRequest(Object(Illuminate\\Http\\Request), Object(App\\Support\\V5\\RequestIdentities), 72)\n#1 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController->index(Object(Illuminate\\Http\\Request), 1, Object(App\\Models\\Geo\\Province))\n#2 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('index', Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController), 'index')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#7 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#9 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#22 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#31 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#33 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#45 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#46 {main}"
}
```

### ❌ addons — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Cannot assign null to property App\\DTO\\Shop\\V5\\Input\\GetAddons::$profile of type EA\\EASlurm\\Entities\\Identity\\ProfileEntity",
  "code": 0,
  "trace": "#0 /var/www/html/app/Http/Controllers/Repository/Bees/V5/CatalogController.php(153): App\\DTO\\Shop\\V5\\Input\\GetAddons->fromRequest(Object(Illuminate\\Http\\Request), Object(App\\Support\\V5\\RequestIdentities))\n#1 /var/www/html/app/Http/Controllers/Repository/Bees/V5/CatalogController.php(125): App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController->resolveAddons(Object(Illuminate\\Http\\Request))\n#2 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController->addonsLegacy(Object(Illuminate\\Http\\Request))\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('addonsLegacy', Array)\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController), 'addonsLegacy')\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#8 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#10 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#23 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#25 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#46 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#47 {main}"
}
```

### ❌ charge — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ info — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/info`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ methods — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/methods`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ purchase — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ payment — client 9 (8 - mai iscritta · it)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ states — client 9 (8 - mai iscritta · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/states/1/72`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "App\\Service\\Geo\\V5\\GeoService::getStates(): Argument #1 ($profile) must be of type EA\\EASlurm\\Entities\\Identity\\ProfileEntity, null given, called in /var/www/html/app/Http/Controllers/Repository/Bees/V5/GeoController.php on line 48",
  "code": 0,
  "trace": "#0 /var/www/html/app/Http/Controllers/Repository/Bees/V5/GeoController.php(48): App\\Service\\Geo\\V5\\GeoService->getStates(NULL)\n#1 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\GeoController->getStates()\n#2 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('getStates', Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\GeoController), 'getStates')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#7 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#9 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#22 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#31 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#33 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#45 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#46 {main}"
}
```

### ❌ Get Toolbox da attivare — client 10 (9 - mai pagante · it)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/82701`

**200 OK**

- Response time is under 5000ms: expected 6390 to be below 5000

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

**404 Not Found**

- Status code is 200: HTTP 404: expected 404 to equal 200

```json
{
  "status": "ko",
  "message": "shop.province_required"
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

### ❌ payment — client 10 (9 - mai pagante · it)

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

- Response time is under 5000ms: expected 6581 to be below 5000

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
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ payment — client 11 (10 - attiva · es)

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

### ❌ payment — client 11 (10 - attiva · es)

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

### ❌ Get Toolbox da attivare — client 12 (11 - scaduta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/30941`

**200 OK**

- Response time is under 5000ms: expected 6599 to be below 5000

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
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ payment — client 12 (11 - scaduta · es)

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

### ❌ payment — client 12 (11 - scaduta · es)

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

### ❌ Get Toolbox da attivare — client 13 (12 - sospesa · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/102476`

**200 OK**

- Response time is under 5000ms: expected 6248 to be below 5000

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
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ payment — client 13 (12 - sospesa · es)

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

### ❌ payment — client 13 (12 - sospesa · es)

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

### ❌ Get Toolbox da attivare — client 14 (13 - iscritta, mai abbonata · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/119425`

**200 OK**

- Response time is under 5000ms: expected 6514 to be below 5000

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
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ payment — client 14 (13 - iscritta, mai abbonata · es)

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

### ❌ payment — client 14 (13 - iscritta, mai abbonata · es)

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

### ❌ Get Toolbox da attivare — client 15 (14 - in registrazione · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/26599`

**200 OK**

- Response time is under 5000ms: expected 6519 to be below 5000

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
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ payment — client 15 (14 - in registrazione · es)

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

- Response time is under 5000ms: expected 6440 to be below 5000

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
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ payment — client 16 (15 - oscurata · es)

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

### ❌ payment — client 16 (15 - oscurata · es)

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

### ❌ Get Toolbox da attivare — client 17 (16 - in blacklist · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/100667`

**200 OK**

- Response time is under 5000ms: expected 6320 to be below 5000

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
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ payment — client 17 (16 - in blacklist · es)

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

### ❌ payment — client 17 (16 - in blacklist · es)

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

### ❌ Get Toolbox da attivare — client 18 (17 - con numeri collegati · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/137593`

**200 OK**

- Response time is under 5000ms: expected 6374 to be below 5000

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
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ payment — client 18 (17 - con numeri collegati · es)

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

### ❌ payment — client 18 (17 - con numeri collegati · es)

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
  "message": "Profile not found"
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
  "message": "No Rid or Cid were provided."
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
  "message": "No Rid or Cid were provided."
}
```

### ❌ get cart by id — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ add to cart — client 19 (18 - mai iscritta · es)

`PUT http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ order — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/cart/order`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
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

### ❌ payment — client 19 (18 - mai iscritta · es)

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

### ❌ payments — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ single payment — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ send payment detail — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payments/999999999/sms`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ create payment detail — client 19 (18 - mai iscritta · es)

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

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Cannot assign null to property App\\DTO\\Shop\\V5\\Input\\GetCatalog::$profile of type EA\\EASlurm\\Entities\\Identity\\ProfileEntity",
  "code": 0,
  "trace": "#0 /var/www/html/app/Http/Controllers/Repository/Bees/V5/CatalogController.php(58): App\\DTO\\Shop\\V5\\Input\\GetCatalog->fromRequest(Object(Illuminate\\Http\\Request), Object(App\\Support\\V5\\RequestIdentities), 72)\n#1 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController->index(Object(Illuminate\\Http\\Request), 1, Object(App\\Models\\Geo\\Province))\n#2 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('index', Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController), 'index')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#7 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#9 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#22 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#31 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#33 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#45 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#46 {main}"
}
```

### ❌ addons — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/addons`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "Cannot assign null to property App\\DTO\\Shop\\V5\\Input\\GetAddons::$profile of type EA\\EASlurm\\Entities\\Identity\\ProfileEntity",
  "code": 0,
  "trace": "#0 /var/www/html/app/Http/Controllers/Repository/Bees/V5/CatalogController.php(153): App\\DTO\\Shop\\V5\\Input\\GetAddons->fromRequest(Object(Illuminate\\Http\\Request), Object(App\\Support\\V5\\RequestIdentities))\n#1 /var/www/html/app/Http/Controllers/Repository/Bees/V5/CatalogController.php(125): App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController->resolveAddons(Object(Illuminate\\Http\\Request))\n#2 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController->addonsLegacy(Object(Illuminate\\Http\\Request))\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('addonsLegacy', Array)\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\CatalogController), 'addonsLegacy')\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#8 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#10 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#23 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#25 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#32 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#34 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#46 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#47 {main}"
}
```

### ❌ charge — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/charge/0/0`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ info — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/info`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ methods — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/methods`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ purchase — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/purchase`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ payment — client 19 (18 - mai iscritta · es)

`POST http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/payment`

**400 Bad Request**

- Status code is 200: HTTP 400: expected 400 to equal 200

```json
{
  "status": "ko",
  "message": "No Rid or Cid were provided."
}
```

### ❌ states — client 19 (18 - mai iscritta · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/states/1/72`

**500 Internal Server Error**

- No server error (5xx): expected 500 to be below 500
- Status code is 200: HTTP 500: expected 500 to equal 200
- Error body does not leak stack trace: expected { status: 'ko', …(3) } to not have property 'trace'

```json
{
  "status": "ko",
  "message": "App\\Service\\Geo\\V5\\GeoService::getStates(): Argument #1 ($profile) must be of type EA\\EASlurm\\Entities\\Identity\\ProfileEntity, null given, called in /var/www/html/app/Http/Controllers/Repository/Bees/V5/GeoController.php on line 48",
  "code": 0,
  "trace": "#0 /var/www/html/app/Http/Controllers/Repository/Bees/V5/GeoController.php(48): App\\Service\\Geo\\V5\\GeoService->getStates(NULL)\n#1 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\Bees\\V5\\GeoController->getStates()\n#2 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('getStates', Array)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(260): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\Bees\\V5\\GeoController), 'getStates')\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#7 /var/www/html/app/Http/Middleware/V5/AuthRepository.php(77): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): App\\Http\\Middleware\\V5\\AuthRepository->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#9 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Middleware/SubstituteBindings.php(50): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Routing\\Middleware\\SubstituteBindings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(799): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#22 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#24 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#31 /var/www/html/vendor/fruitcake/laravel-cors/src/HandleCors.php(38): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fruitcake\\Cors\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#33 /var/www/html/vendor/fideloper/proxy/src/TrustProxies.php(57): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Fideloper\\Proxy\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#38 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#42 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#43 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#45 /var/www/html/public/index.php(52): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#46 {main}"
}
```

### ❌ Get Toolbox da attivare — client 20 (19 - mai pagante · es)

`GET http://st-bee.test.k8s.dontouch.group/api/amf/v2/ea-shop/activators/114139`

**200 OK**

- Response time is under 5000ms: expected 6522 to be below 5000

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
  "message": "Promotion (it) not valid for profile country (es)."
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

### ❌ payment — client 20 (19 - mai pagante · es)

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

### Client 2 — 1 - scaduta · it

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
| detail | GET | ✅ 200 OK |
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

### Client 4 — 3 - iscritta, mai abbonata · it

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

### Client 5 — 4 - in registrazione · it

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
| addons | GET | ✅ 200 OK |
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

### Client 7 — 6 - in blacklist · it

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

### Client 8 — 7 - con numeri collegati · it

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
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ❌ 400 Bad Request |
| single payment | GET | ❌ 400 Bad Request |
| send payment detail | GET | ❌ 400 Bad Request |
| create payment detail | POST | ❌ 500 Internal Server Error |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ❌ 500 Internal Server Error |
| addons | GET | ❌ 500 Internal Server Error |
| charge | GET | ❌ 400 Bad Request |
| info | GET | ❌ 400 Bad Request |
| methods | POST | ❌ 400 Bad Request |
| purchase | GET | ❌ 400 Bad Request |
| payment | POST | ❌ 400 Bad Request |
| states | GET | ❌ 500 Internal Server Error |

### Client 10 — 9 - mai pagante · it

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
| addons | GET | ✅ 200 OK |
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

### Client 12 — 11 - scaduta · es

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

### Client 13 — 12 - sospesa · es

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

### Client 14 — 13 - iscritta, mai abbonata · es

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

### Client 15 — 14 - in registrazione · es

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

### Client 17 — 16 - in blacklist · es

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

### Client 18 — 17 - con numeri collegati · es

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
| payment | POST | ❌ 500 Internal Server Error |
| purchase | POST | ✅ 200 OK |
| payments | GET | ❌ 400 Bad Request |
| single payment | GET | ❌ 400 Bad Request |
| send payment detail | GET | ❌ 400 Bad Request |
| create payment detail | POST | ❌ 500 Internal Server Error |
| payment detail file (upload) | POST | ❌ 422 Unprocessable Entity |
| payment detail file (get) | GET | ❌ 501 Not Implemented |
| payment detail file (delete) | DELETE | ❌ 501 Not Implemented |
| info | GET | ❌ 404 Not Found |
| detail | GET | ❌ 500 Internal Server Error |
| addons | GET | ❌ 500 Internal Server Error |
| charge | GET | ❌ 400 Bad Request |
| info | GET | ❌ 400 Bad Request |
| methods | POST | ❌ 400 Bad Request |
| purchase | GET | ❌ 400 Bad Request |
| payment | POST | ❌ 400 Bad Request |
| states | GET | ❌ 500 Internal Server Error |

### Client 20 — 19 - mai pagante · es

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
| purchase | GET | ❌ 422 Unprocessable Entity |
| payment | POST | ❌ 422 Unprocessable Entity |
| states | GET | ✅ 200 OK |
