# CANON-LARAVEL-REQUEST-LIFECYCLE-001 — Laravel Request Lifecycle

## Hover summary

Laravel connects a URL to route code, then to a controller, then to a response.

## One-sentence truth

A Laravel request travels through a route into application code and returns a response to the browser.

## Mental model

```txt
URL -> Route -> Controller -> View/Redirect/JSON -> Browser
```

## Beginner explanation

When a browser opens a Laravel URL, Laravel looks for a matching route. That route chooses what code runs. Often the route calls a controller method. The controller returns a view, redirect, or data response.

## Syntax example

```php
Route::get('/groceries', [GroceryController::class, 'index'])
    ->name('groceries.index');
```

```php
public function index()
{
    return view('groceries.index');
}
```

## Common mistakes

- Editing the controller but forgetting the route.
- Returning a view name that does not match the Blade file path.
- Putting too much business logic in the route file.

## AI steering rule

AI should trace the request lifecycle before patching route/controller/view bugs.

## Human readability rule

The route, controller method, and view name should form a chain a human can follow.

## Related nodes

- CANON-ROUTE-001
- CANON-CONTROLLER-001
- CANON-BLADE-VIEW-001
