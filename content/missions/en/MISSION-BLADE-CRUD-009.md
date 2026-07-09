---
id: MISSION-BLADE-CRUD-009
title: Blade CRUD Bridge
status: draft
track: php_laravel_bridge
level: beginner
estimated_time: 60-120 minutes
related_nodes:
  - CANON-CRUD-001
  - CANON-BLADE-VIEW-001
  - CANON-PHP-FORM-REQUEST-001
  - SUPPORT-REDIRECT-001
  - SUPPORT-COMPACT-001
---

# Mission 9 — Blade CRUD Bridge

## Mission goal

Understand CRUD as a set of readable user actions before adding full database complexity.

## CRUD mental model

```txt
Create -> add something
Read   -> show something
Update -> change something
Delete -> remove something
```

## Laravel beginner bridge

A simple CRUD path usually has:

```txt
GET  /items          -> index
GET  /items/create   -> create form
POST /items          -> store submitted data
GET  /items/{id}     -> show one item
```

## Step 1 — Routes

```php
Route::get('/groceries', [GroceryController::class, 'index'])
    ->name('groceries.index');

Route::get('/groceries/create', [GroceryController::class, 'create'])
    ->name('groceries.create');

Route::post('/groceries', [GroceryController::class, 'store'])
    ->name('groceries.store');
```

## Step 2 — Controller methods

```php
public function create()
{
    return view('groceries.create');
}

public function store(Request $request)
{
    $validated = $request->validate([
        'name' => ['required', 'string', 'max:255'],
    ]);

    // Later this will save to the database.
    // For now, understand the flow first.

    return redirect()->route('groceries.index');
}
```

## Step 3 — Create view

```blade
<h1>Add grocery</h1>

<form method="post" action="{{ route('groceries.store') }}">
    @csrf

    <label for="name">Name</label>
    <input id="name" name="name" type="text">

    <button type="submit">Save</button>
</form>
```

## What to notice

The form does not save by itself.

It sends a request to a route.

The route calls the controller.

The controller validates input and chooses the next response.

## Human readability checkpoint

Ask:

```txt
Can I follow the form action to the route?
Can I see what validation allows?
Can I see where the browser goes after submit?
```

## AI instruction

Ask AI:

```txt
Help me trace this CRUD flow from form to route to controller to redirect. Do not add database code yet unless I ask.
```
