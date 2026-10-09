# EA Sunrise (hmac) / V5 QA Report — 20261009-152249

**Env:** `http://st-snr.test.k8s.dontouch.group` · **Clients:** 7

## Summary

| # | State | 2xx | 4xx | 5xx |
|---|---|---|---|---|
| 1 | active | 23 | 12 | 0 |
| 2 | active | 20 | 14 | 1 |
| 3 | suspended | 23 | 12 | 0 |
| 4 | expired | 21 | 14 | 0 |
| 5 | recovery | 21 | 13 | 1 |
| 6 | to_activate_geo | 18 | 17 | 0 |
| 7 | to_activate_nogeo | 18 | 17 | 0 |
| | **Total** | **144** | **99** | **2** |

## Failures (101)

### ❌ Get subscription full quantity — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/15739/full-quantity`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/15739/full-quantity could not be found."
}
```

### ❌ Get subscriptions by cart detail id — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/147262/subscriptions?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get purchased recovery days for subscription — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/102/purchased-recoveries`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/purchase/profile/102/purchased-recoveries could not be found."
}
```

### ❌ Get All Purchases by Profile filters — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/102/all-filtered-by-type-and-status?start_date=2026-01-01&end_date=2026-12-31&included_types[]=3&excluded_types[]=8&included_statuses[]=3&excluded_statuses[]=5&raw_json_search`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The raw json search must be a string.",
  "errors": {
    "raw_json_search": [
      "The raw json search must be a string."
    ]
  }
}
```

### ❌ Get purchases by cart detail id — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/147262?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get first related purchase by type — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/15739/first-related/by-type/1`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get related purchases (only subscriptions) — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/related-only-subscriptions/15739?exclude_purchase_id&only_purchased`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The exclude purchase id must be an integer. (and 1 more error)",
  "errors": {
    "exclude_purchase_id": [
      "The exclude purchase id must be an integer."
    ],
    "only_purchased": [
      "The only purchased field must be true or false."
    ]
  }
}
```

### ❌ Active tour by profile — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/tours/active/profile/102`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Tour not found."
}
```

### ❌ Subscriptions start today — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/subscriptions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/subscriptions/start-today could not be found."
}
```

### ❌ Suspension Start today — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/start-today could not be found."
}
```

### ❌ Suspension Stop today — client 1 (active)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/stop-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/stop-today could not be found."
}
```

### ❌ Create Toolboox — client 1 (active)

`POST http://st-snr.test.k8s.dontouch.group/v5/escorts/102/purchases/gift`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/escorts/102/purchases/gift could not be found."
}
```

### ❌ Get subscription usage days — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/2281512/subscription/usage-days`

**500 Internal Server Error**

```json
{
  "status": "ko",
  "message": "Call to a member function isFuture() on null",
  "trace": "#0 /var/www/html/app/Services/Shop/V5/Subscription/SubscriptionService.php(1379): App\\Services\\Shop\\V5\\Subscription\\SubscriptionService->getRemainingDays(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Purchase\\PurchaseEntity))\n#1 /var/www/html/app/Http/Controllers/Repository/V5/PurchaseController.php(576): App\\Services\\Shop\\V5\\Subscription\\SubscriptionService->getSubscriptionUsageDays(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Purchase\\PurchaseEntity), false)\n#2 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\V5\\PurchaseController->getSubscriptionUsageDays(Object(Illuminate\\Http\\Request), 2281512)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('getSubscription...', Array)\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\V5\\PurchaseController), 'getSubscription...')\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#8 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#17 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#19 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#43 {main}"
}
```

### ❌ Get subscription full quantity — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/2281512/full-quantity`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/2281512/full-quantity could not be found."
}
```

### ❌ Get last related subscription — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/2281512/subscription/last-related`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get subscriptions by cart detail id — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/2281512/subscriptions?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get purchased recovery days for subscription — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/149552/purchased-recoveries`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/purchase/profile/149552/purchased-recoveries could not be found."
}
```

### ❌ Get current subscription by profile — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/149552/current`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get All Purchases by Profile filters — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/149552/all-filtered-by-type-and-status?start_date=2026-01-01&end_date=2026-12-31&included_types[]=3&excluded_types[]=8&included_statuses[]=3&excluded_statuses[]=5&raw_json_search`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The raw json search must be a string.",
  "errors": {
    "raw_json_search": [
      "The raw json search must be a string."
    ]
  }
}
```

### ❌ Get purchases by cart detail id — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/2281512?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get first related purchase by type — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/2281512/first-related/by-type/1`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get related purchases (only subscriptions) — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/related-only-subscriptions/2281512?exclude_purchase_id&only_purchased`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The exclude purchase id must be an integer. (and 1 more error)",
  "errors": {
    "exclude_purchase_id": [
      "The exclude purchase id must be an integer."
    ],
    "only_purchased": [
      "The only purchased field must be true or false."
    ]
  }
}
```

### ❌ Active tour by profile — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/tours/active/profile/149552`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Tour not found."
}
```

### ❌ Subscriptions start today — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/subscriptions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/subscriptions/start-today could not be found."
}
```

### ❌ Suspension Start today — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/start-today could not be found."
}
```

### ❌ Suspension Stop today — client 2 (active)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/stop-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/stop-today could not be found."
}
```

### ❌ Create Toolboox — client 2 (active)

`POST http://st-snr.test.k8s.dontouch.group/v5/escorts/149552/purchases/gift`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/escorts/149552/purchases/gift could not be found."
}
```

### ❌ Get subscription full quantity — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/2248498/full-quantity`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/2248498/full-quantity could not be found."
}
```

### ❌ Get subscriptions by cart detail id — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/2204743/subscriptions?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get purchased recovery days for subscription — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148718/purchased-recoveries`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/purchase/profile/148718/purchased-recoveries could not be found."
}
```

### ❌ Get All Purchases by Profile filters — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148718/all-filtered-by-type-and-status?start_date=2026-01-01&end_date=2026-12-31&included_types[]=3&excluded_types[]=8&included_statuses[]=3&excluded_statuses[]=5&raw_json_search`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The raw json search must be a string.",
  "errors": {
    "raw_json_search": [
      "The raw json search must be a string."
    ]
  }
}
```

### ❌ Get purchases by cart detail id — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/2204743?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get first related purchase by type — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/2248498/first-related/by-type/1`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get related purchases (only subscriptions) — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/related-only-subscriptions/2248498?exclude_purchase_id&only_purchased`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The exclude purchase id must be an integer. (and 1 more error)",
  "errors": {
    "exclude_purchase_id": [
      "The exclude purchase id must be an integer."
    ],
    "only_purchased": [
      "The only purchased field must be true or false."
    ]
  }
}
```

### ❌ Active tour by profile — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/tours/active/profile/148718`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Tour not found."
}
```

### ❌ Subscriptions start today — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/subscriptions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/subscriptions/start-today could not be found."
}
```

### ❌ Suspension Start today — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/start-today could not be found."
}
```

### ❌ Suspension Stop today — client 3 (suspended)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/stop-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/stop-today could not be found."
}
```

### ❌ Create Toolboox — client 3 (suspended)

`POST http://st-snr.test.k8s.dontouch.group/v5/escorts/148718/purchases/gift`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/escorts/148718/purchases/gift could not be found."
}
```

### ❌ Get subscription full quantity — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/2264891/full-quantity`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/2264891/full-quantity could not be found."
}
```

### ❌ Get last related subscription — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/2264891/subscription/last-related`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get subscriptions by cart detail id — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/2196712/subscriptions?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get purchased recovery days for subscription — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148372/purchased-recoveries`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/purchase/profile/148372/purchased-recoveries could not be found."
}
```

### ❌ Get current subscription by profile — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148372/current`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get All Purchases by Profile filters — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148372/all-filtered-by-type-and-status?start_date=2026-01-01&end_date=2026-12-31&included_types[]=3&excluded_types[]=8&included_statuses[]=3&excluded_statuses[]=5&raw_json_search`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The raw json search must be a string.",
  "errors": {
    "raw_json_search": [
      "The raw json search must be a string."
    ]
  }
}
```

### ❌ Get purchases by cart detail id — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/2196712?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get first related purchase by type — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/2264891/first-related/by-type/1`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get related purchases (only subscriptions) — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/related-only-subscriptions/2264891?exclude_purchase_id&only_purchased`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The exclude purchase id must be an integer. (and 1 more error)",
  "errors": {
    "exclude_purchase_id": [
      "The exclude purchase id must be an integer."
    ],
    "only_purchased": [
      "The only purchased field must be true or false."
    ]
  }
}
```

### ❌ Active tour by profile — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/tours/active/profile/148372`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Tour not found."
}
```

### ❌ Subscriptions start today — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/subscriptions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/subscriptions/start-today could not be found."
}
```

### ❌ Suspension Start today — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/start-today could not be found."
}
```

### ❌ Suspension Stop today — client 4 (expired)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/stop-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/stop-today could not be found."
}
```

### ❌ Create Toolboox — client 4 (expired)

`POST http://st-snr.test.k8s.dontouch.group/v5/escorts/148372/purchases/gift`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/escorts/148372/purchases/gift could not be found."
}
```

### ❌ Get subscription usage days — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/2285159/subscription/usage-days`

**500 Internal Server Error**

```json
{
  "status": "ko",
  "message": "Call to a member function isFuture() on null",
  "trace": "#0 /var/www/html/app/Services/Shop/V5/Subscription/SubscriptionService.php(1379): App\\Services\\Shop\\V5\\Subscription\\SubscriptionService->getRemainingDays(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Purchase\\PurchaseEntity))\n#1 /var/www/html/app/Http/Controllers/Repository/V5/PurchaseController.php(576): App\\Services\\Shop\\V5\\Subscription\\SubscriptionService->getSubscriptionUsageDays(Object(EA\\EASlurm\\Entities\\Shop\\V2\\Purchase\\PurchaseEntity), false)\n#2 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Controller.php(54): App\\Http\\Controllers\\Repository\\V5\\PurchaseController->getSubscriptionUsageDays(Object(Illuminate\\Http\\Request), 2285159)\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/ControllerDispatcher.php(43): Illuminate\\Routing\\Controller->callAction('getSubscription...', Array)\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(259): Illuminate\\Routing\\ControllerDispatcher->dispatch(Object(Illuminate\\Routing\\Route), Object(App\\Http\\Controllers\\Repository\\V5\\PurchaseController), 'getSubscription...')\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Illuminate\\Routing\\Route->runController()\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(798): Illuminate\\Routing\\Route->run()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Routing\\Router->Illuminate\\Routing\\{closure}(Object(Illuminate\\Http\\Request))\n#8 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/MarkSlurmSourceVersion.php(30): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\MarkSlurmSourceVersion->handle(Object(Illuminate\\Http\\Request), Object(Closure), 'v5')\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#11 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(797): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(776): Illuminate\\Routing\\Router->runRouteWithinStack(Object(Illuminate\\Routing\\Route), Object(Illuminate\\Http\\Request))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(740): Illuminate\\Routing\\Router->runRoute(Object(Illuminate\\Http\\Request), Object(Illuminate\\Routing\\Route))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Routing/Router.php(729): Illuminate\\Routing\\Router->dispatchToRoute(Object(Illuminate\\Http\\Request))\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(190): Illuminate\\Routing\\Router->dispatch(Object(Illuminate\\Http\\Request))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(141): Illuminate\\Foundation\\Http\\Kernel->Illuminate\\Foundation\\Http\\{closure}(Object(Illuminate\\Http\\Request))\n#17 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestIpMiddleware.php(45): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestIpMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#19 /var/www/html/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Http/SetRequestMiddleware.php(31): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Sentry\\Laravel\\Http\\SetRequestMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#21 /var/www/html/vendor/ea/arianna/src/Middleware/AriannaMiddleware.php(37): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\Arianna\\Middleware\\AriannaMiddleware->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ConvertEmptyStringsToNull.php(31): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TransformsRequest.php(21): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/TrimStrings.php(40): Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\TrimStrings->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/ValidatePostSize.php(27): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Middleware/PreventRequestsDuringMaintenance.php(86): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Foundation\\Http\\Middleware\\PreventRequestsDuringMaintenance->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/HandleCors.php(49): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\HandleCors->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Http/Middleware/TrustProxies.php(39): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): Illuminate\\Http\\Middleware\\TrustProxies->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#37 /var/www/html/vendor/ea/ea-slurm/src/Http/Middleware/SetSlurmLogContext.php(43): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(180): EA\\EASlurm\\Http\\Middleware\\SetSlurmLogContext->handle(Object(Illuminate\\Http\\Request), Object(Closure))\n#39 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(116): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Http\\Request))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(165): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#41 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(134): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#42 /var/www/html/public/index.php(51): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#43 {main}"
}
```

### ❌ Get subscription full quantity — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/2285159/full-quantity`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/2285159/full-quantity could not be found."
}
```

### ❌ Get last related subscription — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/2285159/subscription/last-related`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get subscriptions by cart detail id — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/NULL/subscriptions?parent_id=`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/purchase/cart-detail/NULL/subscriptions could not be found."
}
```

### ❌ Get purchased recovery days for subscription — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/52550/purchased-recoveries`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/purchase/profile/52550/purchased-recoveries could not be found."
}
```

### ❌ Get All Purchases by Profile filters — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/52550/all-filtered-by-type-and-status?start_date=2026-01-01&end_date=2026-12-31&included_types[]=3&excluded_types[]=8&included_statuses[]=3&excluded_statuses[]=5&raw_json_search`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The raw json search must be a string.",
  "errors": {
    "raw_json_search": [
      "The raw json search must be a string."
    ]
  }
}
```

### ❌ Get purchases by cart detail id — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/NULL?parent_id=`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/purchase/cart-detail/NULL could not be found."
}
```

### ❌ Get first related purchase by type — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/2285159/first-related/by-type/13`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get related purchases (only subscriptions) — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/related-only-subscriptions/2285159?exclude_purchase_id&only_purchased`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The exclude purchase id must be an integer. (and 1 more error)",
  "errors": {
    "exclude_purchase_id": [
      "The exclude purchase id must be an integer."
    ],
    "only_purchased": [
      "The only purchased field must be true or false."
    ]
  }
}
```

### ❌ Active tour by profile — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/tours/active/profile/52550`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Tour not found."
}
```

### ❌ Subscriptions start today — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/subscriptions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/subscriptions/start-today could not be found."
}
```

### ❌ Suspension Start today — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/start-today could not be found."
}
```

### ❌ Suspension Stop today — client 5 (recovery)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/stop-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/stop-today could not be found."
}
```

### ❌ Create Toolboox — client 5 (recovery)

`POST http://st-snr.test.k8s.dontouch.group/v5/escorts/52550/purchases/gift`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/escorts/52550/purchases/gift could not be found."
}
```

### ❌ Get subscription full quantity — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/1/full-quantity`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/1/full-quantity could not be found."
}
```

### ❌ Get last related subscription — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/1/subscription/last-related`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get subscriptions by cart detail id — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/1/subscriptions?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get purchased recovery days for subscription — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148681/purchased-recoveries`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/purchase/profile/148681/purchased-recoveries could not be found."
}
```

### ❌ Get current subscription by profile — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148681/current`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get All Purchases by Profile filters — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148681/all-filtered-by-type-and-status?start_date=2026-01-01&end_date=2026-12-31&included_types[]=3&excluded_types[]=8&included_statuses[]=3&excluded_statuses[]=5&raw_json_search`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The raw json search must be a string.",
  "errors": {
    "raw_json_search": [
      "The raw json search must be a string."
    ]
  }
}
```

### ❌ Get Last Purchase — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148681/last`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get purchases by cart detail id — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/1?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get first related purchase by type — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/1/first-related/by-type/1`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get last valid purchase by profile — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148681/last-valid`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get related purchases (only subscriptions) — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/related-only-subscriptions/1?exclude_purchase_id&only_purchased`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The exclude purchase id must be an integer. (and 1 more error)",
  "errors": {
    "exclude_purchase_id": [
      "The exclude purchase id must be an integer."
    ],
    "only_purchased": [
      "The only purchased field must be true or false."
    ]
  }
}
```

### ❌ Get last valid purchase with fidelity — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/148681/last-valid-with-fidelity`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Active tour by profile — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/tours/active/profile/148681`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Tour not found."
}
```

### ❌ Subscriptions start today — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/subscriptions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/subscriptions/start-today could not be found."
}
```

### ❌ Suspension Start today — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/start-today could not be found."
}
```

### ❌ Suspension Stop today — client 6 (to_activate_geo)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/stop-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/stop-today could not be found."
}
```

### ❌ Create Toolboox — client 6 (to_activate_geo)

`POST http://st-snr.test.k8s.dontouch.group/v5/escorts/148681/purchases/gift`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/escorts/148681/purchases/gift could not be found."
}
```

### ❌ Get subscription full quantity — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/1/full-quantity`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/1/full-quantity could not be found."
}
```

### ❌ Get last related subscription — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/1/subscription/last-related`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get subscriptions by cart detail id — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/1/subscriptions?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get purchased recovery days for subscription — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/149581/purchased-recoveries`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route repository/v5/purchase/profile/149581/purchased-recoveries could not be found."
}
```

### ❌ Get current subscription by profile — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/149581/current`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get All Purchases by Profile filters — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/149581/all-filtered-by-type-and-status?start_date=2026-01-01&end_date=2026-12-31&included_types[]=3&excluded_types[]=8&included_statuses[]=3&excluded_statuses[]=5&raw_json_search`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The raw json search must be a string.",
  "errors": {
    "raw_json_search": [
      "The raw json search must be a string."
    ]
  }
}
```

### ❌ Get Last Purchase — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/149581/last`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get purchases by cart detail id — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/cart-detail/1?parent_id=`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The parent id must be an integer.",
  "errors": {
    "parent_id": [
      "The parent id must be an integer."
    ]
  }
}
```

### ❌ Get first related purchase by type — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/1/first-related/by-type/1`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get last valid purchase by profile — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/149581/last-valid`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Get related purchases (only subscriptions) — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/related-only-subscriptions/1?exclude_purchase_id&only_purchased`

**422 Unprocessable Entity**

```json
{
  "status": "ko",
  "message": "The exclude purchase id must be an integer. (and 1 more error)",
  "errors": {
    "exclude_purchase_id": [
      "The exclude purchase id must be an integer."
    ],
    "only_purchased": [
      "The only purchased field must be true or false."
    ]
  }
}
```

### ❌ Get last valid purchase with fidelity — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/purchase/profile/149581/last-valid-with-fidelity`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Purchase does not exist."
}
```

### ❌ Active tour by profile — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/repository/v5/tours/active/profile/149581`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "Tour not found."
}
```

### ❌ Subscriptions start today — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/subscriptions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/subscriptions/start-today could not be found."
}
```

### ❌ Suspension Start today — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/start-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/start-today could not be found."
}
```

### ❌ Suspension Stop today — client 7 (to_activate_nogeo)

`GET http://st-snr.test.k8s.dontouch.group/v5/commands/v5/suspensions/stop-today`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/commands/v5/suspensions/stop-today could not be found."
}
```

### ❌ Create Toolboox — client 7 (to_activate_nogeo)

`POST http://st-snr.test.k8s.dontouch.group/v5/escorts/149581/purchases/gift`

**404 Not Found**

```json
{
  "status": "ko",
  "message": "The route v5/escorts/149581/purchases/gift could not be found."
}
```

## Detail by client

### Client 1 — active

| Request | Method | Status |
|---|---|---|
| Get subscriptions full detail (single profile) | GET | ✅ 200 OK |
| Get subscriptions full detail (list) | GET | ✅ 200 OK |
| Get subscription usage days | GET | ✅ 200 OK |
| Get subscription full quantity | GET | ❌ 404 Not Found |
| Get last related subscription | GET | ✅ 200 OK |
| Get parent subscription | GET | ✅ 200 OK |
| Get subscriptions by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get purchased (queued) subscriptions by profile | GET | ✅ 200 OK |
| Count activated subscriptions by profile | GET | ✅ 200 OK |
| Get purchased recovery days for subscription | GET | ❌ 404 Not Found |
| Get current subscription by profile | GET | ✅ 200 OK |
| Get Purchase by Id | GET | ✅ 200 OK |
| Get All Purchases by Profile filters | GET | ❌ 422 Unprocessable Entity |
| Get Last Purchase | GET | ✅ 200 OK |
| Get All Purchases by Profile | GET | ✅ 200 OK |
| Get purchases by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get related purchases | GET | ✅ 200 OK |
| Get first related purchase by type | GET | ❌ 404 Not Found |
| Get last valid purchase by profile | GET | ✅ 200 OK |
| Get related purchases (only subscriptions) | GET | ❌ 422 Unprocessable Entity |
| Get last valid purchase with fidelity | GET | ✅ 200 OK |
| Purchases by product and profile | GET | ✅ 200 OK |
| Valid suspensions by purchase | GET | ✅ 200 OK |
| Has current suspension | GET | ✅ 200 OK |
| Queued and current suspensions | GET | ✅ 200 OK |
| Tours by profile | GET | ✅ 200 OK |
| Verify tour | GET | ✅ 200 OK |
| Active tour by profile | GET | ❌ 404 Not Found |
| Get last valid purchase with fidelity Copy | POST | ✅ 200 OK |
| Subscriptions start today | GET | ❌ 404 Not Found |
| Suspension Start today | GET | ❌ 404 Not Found |
| Suspension Stop today | GET | ❌ 404 Not Found |
| Create Subscription | POST | ✅ 200 OK |
| Create Toolboox | POST | ❌ 404 Not Found |
| Create Gift | POST | ✅ 200 OK |

### Client 2 — active

| Request | Method | Status |
|---|---|---|
| Get subscriptions full detail (single profile) | GET | ✅ 200 OK |
| Get subscriptions full detail (list) | GET | ✅ 200 OK |
| Get subscription usage days | GET | ❌ 500 Internal Server Error |
| Get subscription full quantity | GET | ❌ 404 Not Found |
| Get last related subscription | GET | ❌ 404 Not Found |
| Get parent subscription | GET | ✅ 200 OK |
| Get subscriptions by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get purchased (queued) subscriptions by profile | GET | ✅ 200 OK |
| Count activated subscriptions by profile | GET | ✅ 200 OK |
| Get purchased recovery days for subscription | GET | ❌ 404 Not Found |
| Get current subscription by profile | GET | ❌ 404 Not Found |
| Get Purchase by Id | GET | ✅ 200 OK |
| Get All Purchases by Profile filters | GET | ❌ 422 Unprocessable Entity |
| Get Last Purchase | GET | ✅ 200 OK |
| Get All Purchases by Profile | GET | ✅ 200 OK |
| Get purchases by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get related purchases | GET | ✅ 200 OK |
| Get first related purchase by type | GET | ❌ 404 Not Found |
| Get last valid purchase by profile | GET | ✅ 200 OK |
| Get related purchases (only subscriptions) | GET | ❌ 422 Unprocessable Entity |
| Get last valid purchase with fidelity | GET | ✅ 200 OK |
| Purchases by product and profile | GET | ✅ 200 OK |
| Valid suspensions by purchase | GET | ✅ 200 OK |
| Has current suspension | GET | ✅ 200 OK |
| Queued and current suspensions | GET | ✅ 200 OK |
| Tours by profile | GET | ✅ 200 OK |
| Verify tour | GET | ✅ 200 OK |
| Active tour by profile | GET | ❌ 404 Not Found |
| Get last valid purchase with fidelity Copy | POST | ✅ 200 OK |
| Subscriptions start today | GET | ❌ 404 Not Found |
| Suspension Start today | GET | ❌ 404 Not Found |
| Suspension Stop today | GET | ❌ 404 Not Found |
| Create Subscription | POST | ✅ 200 OK |
| Create Toolboox | POST | ❌ 404 Not Found |
| Create Gift | POST | ✅ 200 OK |

### Client 3 — suspended

| Request | Method | Status |
|---|---|---|
| Get subscriptions full detail (single profile) | GET | ✅ 200 OK |
| Get subscriptions full detail (list) | GET | ✅ 200 OK |
| Get subscription usage days | GET | ✅ 200 OK |
| Get subscription full quantity | GET | ❌ 404 Not Found |
| Get last related subscription | GET | ✅ 200 OK |
| Get parent subscription | GET | ✅ 200 OK |
| Get subscriptions by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get purchased (queued) subscriptions by profile | GET | ✅ 200 OK |
| Count activated subscriptions by profile | GET | ✅ 200 OK |
| Get purchased recovery days for subscription | GET | ❌ 404 Not Found |
| Get current subscription by profile | GET | ✅ 200 OK |
| Get Purchase by Id | GET | ✅ 200 OK |
| Get All Purchases by Profile filters | GET | ❌ 422 Unprocessable Entity |
| Get Last Purchase | GET | ✅ 200 OK |
| Get All Purchases by Profile | GET | ✅ 200 OK |
| Get purchases by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get related purchases | GET | ✅ 200 OK |
| Get first related purchase by type | GET | ❌ 404 Not Found |
| Get last valid purchase by profile | GET | ✅ 200 OK |
| Get related purchases (only subscriptions) | GET | ❌ 422 Unprocessable Entity |
| Get last valid purchase with fidelity | GET | ✅ 200 OK |
| Purchases by product and profile | GET | ✅ 200 OK |
| Valid suspensions by purchase | GET | ✅ 200 OK |
| Has current suspension | GET | ✅ 200 OK |
| Queued and current suspensions | GET | ✅ 200 OK |
| Tours by profile | GET | ✅ 200 OK |
| Verify tour | GET | ✅ 200 OK |
| Active tour by profile | GET | ❌ 404 Not Found |
| Get last valid purchase with fidelity Copy | POST | ✅ 200 OK |
| Subscriptions start today | GET | ❌ 404 Not Found |
| Suspension Start today | GET | ❌ 404 Not Found |
| Suspension Stop today | GET | ❌ 404 Not Found |
| Create Subscription | POST | ✅ 200 OK |
| Create Toolboox | POST | ❌ 404 Not Found |
| Create Gift | POST | ✅ 200 OK |

### Client 4 — expired

| Request | Method | Status |
|---|---|---|
| Get subscriptions full detail (single profile) | GET | ✅ 200 OK |
| Get subscriptions full detail (list) | GET | ✅ 200 OK |
| Get subscription usage days | GET | ✅ 200 OK |
| Get subscription full quantity | GET | ❌ 404 Not Found |
| Get last related subscription | GET | ❌ 404 Not Found |
| Get parent subscription | GET | ✅ 200 OK |
| Get subscriptions by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get purchased (queued) subscriptions by profile | GET | ✅ 200 OK |
| Count activated subscriptions by profile | GET | ✅ 200 OK |
| Get purchased recovery days for subscription | GET | ❌ 404 Not Found |
| Get current subscription by profile | GET | ❌ 404 Not Found |
| Get Purchase by Id | GET | ✅ 200 OK |
| Get All Purchases by Profile filters | GET | ❌ 422 Unprocessable Entity |
| Get Last Purchase | GET | ✅ 200 OK |
| Get All Purchases by Profile | GET | ✅ 200 OK |
| Get purchases by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get related purchases | GET | ✅ 200 OK |
| Get first related purchase by type | GET | ❌ 404 Not Found |
| Get last valid purchase by profile | GET | ✅ 200 OK |
| Get related purchases (only subscriptions) | GET | ❌ 422 Unprocessable Entity |
| Get last valid purchase with fidelity | GET | ✅ 200 OK |
| Purchases by product and profile | GET | ✅ 200 OK |
| Valid suspensions by purchase | GET | ✅ 200 OK |
| Has current suspension | GET | ✅ 200 OK |
| Queued and current suspensions | GET | ✅ 200 OK |
| Tours by profile | GET | ✅ 200 OK |
| Verify tour | GET | ✅ 200 OK |
| Active tour by profile | GET | ❌ 404 Not Found |
| Get last valid purchase with fidelity Copy | POST | ✅ 200 OK |
| Subscriptions start today | GET | ❌ 404 Not Found |
| Suspension Start today | GET | ❌ 404 Not Found |
| Suspension Stop today | GET | ❌ 404 Not Found |
| Create Subscription | POST | ✅ 200 OK |
| Create Toolboox | POST | ❌ 404 Not Found |
| Create Gift | POST | ✅ 200 OK |

### Client 5 — recovery

| Request | Method | Status |
|---|---|---|
| Get subscriptions full detail (single profile) | GET | ✅ 200 OK |
| Get subscriptions full detail (list) | GET | ✅ 200 OK |
| Get subscription usage days | GET | ❌ 500 Internal Server Error |
| Get subscription full quantity | GET | ❌ 404 Not Found |
| Get last related subscription | GET | ❌ 404 Not Found |
| Get parent subscription | GET | ✅ 200 OK |
| Get subscriptions by cart detail id | GET | ❌ 404 Not Found |
| Get purchased (queued) subscriptions by profile | GET | ✅ 200 OK |
| Count activated subscriptions by profile | GET | ✅ 200 OK |
| Get purchased recovery days for subscription | GET | ❌ 404 Not Found |
| Get current subscription by profile | GET | ✅ 200 OK |
| Get Purchase by Id | GET | ✅ 200 OK |
| Get All Purchases by Profile filters | GET | ❌ 422 Unprocessable Entity |
| Get Last Purchase | GET | ✅ 200 OK |
| Get All Purchases by Profile | GET | ✅ 200 OK |
| Get purchases by cart detail id | GET | ❌ 404 Not Found |
| Get related purchases | GET | ✅ 200 OK |
| Get first related purchase by type | GET | ❌ 404 Not Found |
| Get last valid purchase by profile | GET | ✅ 200 OK |
| Get related purchases (only subscriptions) | GET | ❌ 422 Unprocessable Entity |
| Get last valid purchase with fidelity | GET | ✅ 200 OK |
| Purchases by product and profile | GET | ✅ 200 OK |
| Valid suspensions by purchase | GET | ✅ 200 OK |
| Has current suspension | GET | ✅ 200 OK |
| Queued and current suspensions | GET | ✅ 200 OK |
| Tours by profile | GET | ✅ 200 OK |
| Verify tour | GET | ✅ 200 OK |
| Active tour by profile | GET | ❌ 404 Not Found |
| Get last valid purchase with fidelity Copy | POST | ✅ 200 OK |
| Subscriptions start today | GET | ❌ 404 Not Found |
| Suspension Start today | GET | ❌ 404 Not Found |
| Suspension Stop today | GET | ❌ 404 Not Found |
| Create Subscription | POST | ✅ 200 OK |
| Create Toolboox | POST | ❌ 404 Not Found |
| Create Gift | POST | ✅ 200 OK |

### Client 6 — to_activate_geo

| Request | Method | Status |
|---|---|---|
| Get subscriptions full detail (single profile) | GET | ✅ 200 OK |
| Get subscriptions full detail (list) | GET | ✅ 200 OK |
| Get subscription usage days | GET | ✅ 200 OK |
| Get subscription full quantity | GET | ❌ 404 Not Found |
| Get last related subscription | GET | ❌ 404 Not Found |
| Get parent subscription | GET | ✅ 200 OK |
| Get subscriptions by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get purchased (queued) subscriptions by profile | GET | ✅ 200 OK |
| Count activated subscriptions by profile | GET | ✅ 200 OK |
| Get purchased recovery days for subscription | GET | ❌ 404 Not Found |
| Get current subscription by profile | GET | ❌ 404 Not Found |
| Get Purchase by Id | GET | ✅ 200 OK |
| Get All Purchases by Profile filters | GET | ❌ 422 Unprocessable Entity |
| Get Last Purchase | GET | ❌ 404 Not Found |
| Get All Purchases by Profile | GET | ✅ 200 OK |
| Get purchases by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get related purchases | GET | ✅ 200 OK |
| Get first related purchase by type | GET | ❌ 404 Not Found |
| Get last valid purchase by profile | GET | ❌ 404 Not Found |
| Get related purchases (only subscriptions) | GET | ❌ 422 Unprocessable Entity |
| Get last valid purchase with fidelity | GET | ❌ 404 Not Found |
| Purchases by product and profile | GET | ✅ 200 OK |
| Valid suspensions by purchase | GET | ✅ 200 OK |
| Has current suspension | GET | ✅ 200 OK |
| Queued and current suspensions | GET | ✅ 200 OK |
| Tours by profile | GET | ✅ 200 OK |
| Verify tour | GET | ✅ 200 OK |
| Active tour by profile | GET | ❌ 404 Not Found |
| Get last valid purchase with fidelity Copy | POST | ✅ 200 OK |
| Subscriptions start today | GET | ❌ 404 Not Found |
| Suspension Start today | GET | ❌ 404 Not Found |
| Suspension Stop today | GET | ❌ 404 Not Found |
| Create Subscription | POST | ✅ 200 OK |
| Create Toolboox | POST | ❌ 404 Not Found |
| Create Gift | POST | ✅ 200 OK |

### Client 7 — to_activate_nogeo

| Request | Method | Status |
|---|---|---|
| Get subscriptions full detail (single profile) | GET | ✅ 200 OK |
| Get subscriptions full detail (list) | GET | ✅ 200 OK |
| Get subscription usage days | GET | ✅ 200 OK |
| Get subscription full quantity | GET | ❌ 404 Not Found |
| Get last related subscription | GET | ❌ 404 Not Found |
| Get parent subscription | GET | ✅ 200 OK |
| Get subscriptions by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get purchased (queued) subscriptions by profile | GET | ✅ 200 OK |
| Count activated subscriptions by profile | GET | ✅ 200 OK |
| Get purchased recovery days for subscription | GET | ❌ 404 Not Found |
| Get current subscription by profile | GET | ❌ 404 Not Found |
| Get Purchase by Id | GET | ✅ 200 OK |
| Get All Purchases by Profile filters | GET | ❌ 422 Unprocessable Entity |
| Get Last Purchase | GET | ❌ 404 Not Found |
| Get All Purchases by Profile | GET | ✅ 200 OK |
| Get purchases by cart detail id | GET | ❌ 422 Unprocessable Entity |
| Get related purchases | GET | ✅ 200 OK |
| Get first related purchase by type | GET | ❌ 404 Not Found |
| Get last valid purchase by profile | GET | ❌ 404 Not Found |
| Get related purchases (only subscriptions) | GET | ❌ 422 Unprocessable Entity |
| Get last valid purchase with fidelity | GET | ❌ 404 Not Found |
| Purchases by product and profile | GET | ✅ 200 OK |
| Valid suspensions by purchase | GET | ✅ 200 OK |
| Has current suspension | GET | ✅ 200 OK |
| Queued and current suspensions | GET | ✅ 200 OK |
| Tours by profile | GET | ✅ 200 OK |
| Verify tour | GET | ✅ 200 OK |
| Active tour by profile | GET | ❌ 404 Not Found |
| Get last valid purchase with fidelity Copy | POST | ✅ 200 OK |
| Subscriptions start today | GET | ❌ 404 Not Found |
| Suspension Start today | GET | ❌ 404 Not Found |
| Suspension Stop today | GET | ❌ 404 Not Found |
| Create Subscription | POST | ✅ 200 OK |
| Create Toolboox | POST | ❌ 404 Not Found |
| Create Gift | POST | ✅ 200 OK |
