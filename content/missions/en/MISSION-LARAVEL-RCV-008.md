---
id: MISSION-LARAVEL-RCV-008
title: Laravel Route, Controller, View
status: draft
track: php_laravel_bridge
level: beginner
estimated_time: 45-90 minutes
related_nodes:
  - CANON-ROUTE-001
  - CANON-CONTROLLER-001
  - CANON-BLADE-VIEW-001
  - CANON-LARAVEL-REQUEST-LIFECYCLE-001
---

# Mission 8 — Laravel Route, Controller, View

## Mission goal

Understand the most important beginner Laravel chain:

```txt
URL -> Route -> Controller -> View -> HTML response
```

## What you will build

A page that lists a few grocery items using a route, a controller, and a Blade view.

## File map

```txt
routes/web.php
app/Http/Controllers/GroceryController.php
resources/views/groceries/index.blade.php
```

## Step 1 — Route

In `routes/web.php`:

```php
use App\Http\Controllers\GroceryController;
use Illuminate\Support\Facades\Route;

Route::get('/groceries', [GroceryController::class, 'index'])
    ->name('groceries.index');
```

## Step 2 — Controller

In `app/Http/Controllers/GroceryController.php`:

```php
<?php

namespace App\Http\Controllers;

class GroceryController extends Controller
{
    public function index()
    {
        $groceries = [
            'Bread',
            'Milk',
            'Apples',
        ];

        return view('groceries.index', [
            'groceries' => $groceries,
        ]);
    }
}
```

## Step 3 — View

In `resources/views/groceries/index.blade.php`:

```blade
<h1>Groceries</h1>

<ul>
    @foreach ($groceries as $grocery)
        <li>{{ $grocery }}</li>
    @endforeach
</ul>
```

## What to hover later in Flow Navigator

```txt
Route::get      -> route card
GroceryController -> controller card
view(...)       -> Blade view card
@foreach        -> Blade loop card
```

## Human readability checkpoint

Ask:

```txt
Can I follow URL -> Route -> Controller -> View?
Does the controller only coordinate?
Is the view only showing HTML?
```

## AI instruction

Ask AI:

```txt
Explain the Laravel route-controller-view chain. Do not add a database yet. Keep the example array-based and beginner-readable.
```
