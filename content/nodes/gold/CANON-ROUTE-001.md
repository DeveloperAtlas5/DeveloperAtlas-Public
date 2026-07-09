---
id: CANON-ROUTE-001
title: Route
status: gold_candidate
type: canon_node
node_depth: gold
category: core_code_concept
level: beginner_to_rookie
hover: "A route is the map entry that tells Laravel what to do when a user visits a URL or submits a form."
related_nodes:
  - HUMAN-PREFERENCE-001
  - CANON-CONTROLLER-001
  - CANON-BLADE-VIEW-001
  - CANON-CRUD-001
---

# Route

## One-sentence truth

A route connects a URL and HTTP action to the code that should respond.

## Hover reminder

A route is the map entry that tells Laravel what to do when a user visits a URL or submits a form.

## Mental model

Think of a route like a signpost. The browser asks for a path, and the route points that request to the correct response.

## Beginner explanation

In Laravel, a route says: when someone visits this URL, run this function, controller method, or view response.

## Technical explanation

A Laravel route usually combines an HTTP method like GET or POST, a URL path, and a destination such as a controller method. Named routes let you refer to routes by name instead of hard-coding URLs.

## When to use it

- You need a page to load.
- You need a form to submit somewhere.
- You need to connect a browser URL to a controller method.
- You want to use `route()` in Blade instead of hard-coded paths.

## When not to use it

- Do not put too much business logic directly in routes once the project grows.
- Do not create several routes with unclear or conflicting paths.
- Do not use GET routes for destructive actions like deleting data.

## Tiny example

```php
use App\Http\Controllers\ItemController;

Route::get("/items", [ItemController::class, "index"])->name("items.index");
Route::post("/items", [ItemController::class, "store"])->name("items.store");
```

## Mission example

In the Laravel mission pack, the item list page uses a route like `/items` that points to `ItemController@index`.

## Common mistakes

- Forgetting to import the controller class.
- Using the wrong HTTP method for a form.
- Naming the route one thing and calling a different name in Blade.
- Putting delete links on GET routes instead of using a form with DELETE.

## Debugging signs

- 404 Not Found when visiting a URL.
- Route [name] not defined.
- Controller method does not exist.
- Form submits but the wrong method handles it.

## AI steering rule

AI may suggest a route and explain the URL-to-controller connection. AI should not create a full route architecture or middleware stack unless the mission asks for it.

## Human readability rule

A human-readable route file uses grouped, consistently named routes and keeps route definitions easy to scan.

## Related nodes

  - HUMAN-PREFERENCE-001
  - CANON-CONTROLLER-001
  - CANON-BLADE-VIEW-001
  - CANON-CRUD-001

## Gold candidate checklist

- [x] Has a one-sentence truth
- [x] Has a hover summary
- [x] Explains the mental model
- [x] Includes beginner and technical explanations
- [x] Includes examples
- [x] Includes common mistakes
- [x] Includes AI guardrail
- [x] Includes human readability rule
- [ ] Tested with a beginner
- [ ] Translated to Dutch
