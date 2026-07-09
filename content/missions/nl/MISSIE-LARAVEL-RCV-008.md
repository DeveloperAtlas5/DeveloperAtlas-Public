---
id: MISSIE-LARAVEL-RCV-008
title: Laravel Route, Controller, View
status: draft
track: php_laravel_bridge
level: beginner
estimated_time: 45-90 minuten
related_nodes:
  - CANON-ROUTE-001
  - CANON-CONTROLLER-001
  - CANON-BLADE-VIEW-001
---

# Missie 8 — Laravel Route, Controller, View

## Doel

Begrijp de belangrijkste Laravel-ketting:

```txt
URL -> Route -> Controller -> View -> HTML response
```

## Route

```php
Route::get('/groceries', [GroceryController::class, 'index'])
    ->name('groceries.index');
```

## Controller

```php
public function index()
{
    $groceries = ['Bread', 'Milk', 'Apples'];

    return view('groceries.index', [
        'groceries' => $groceries,
    ]);
}
```

## View

```blade
@foreach ($groceries as $grocery)
    <li>{{ $grocery }}</li>
@endforeach
```

## Controle

Kun je de route naar de controller en daarna naar de view volgen?
