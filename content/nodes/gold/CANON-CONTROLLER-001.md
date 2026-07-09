---
id: CANON-CONTROLLER-001
title: Controller
status: gold_candidate
type: canon_node
node_depth: gold
category: core_code_concept
level: beginner_to_rookie
hover: "A controller is the traffic guide between routes, data, and views."
related_nodes:
  - HUMAN-PREFERENCE-001
  - CANON-FUNCTION-001
  - CANON-ROUTE-001
  - CANON-BLADE-VIEW-001
  - CANON-CRUD-001
---

# Controller

## One-sentence truth

A controller receives a request, coordinates the needed action, and returns a response.

## Hover reminder

A controller is the traffic guide between routes, data, and views.

## Mental model

Think of a controller like the person at a service desk. The request comes in, the controller decides what work is needed, and then sends back the correct response.

## Beginner explanation

In Laravel, a controller keeps route files clean by placing page and form logic inside named methods such as `index`, `store`, `edit`, `update`, and `destroy`.

## Technical explanation

A controller method receives the request context, may validate input, may call models or services, and returns a view, redirect, JSON response, or error.

## When to use it

- A route needs more logic than simply returning a view.
- A form needs validation and saving.
- A page needs database data.
- A CRUD action needs a clear home.

## When not to use it

- Do not put every kind of business logic into one huge controller.
- Do not hide beginner-level code in services too early.
- Do not mix unrelated resources in one controller.

## Tiny example

```php
class ItemController extends Controller
{
    public function index()
    {
        $items = Item::all();

        return view("items.index", compact("items"));
    }
}
```

## Mission example

In the Laravel CRUD mission, `ItemController` owns the basic item actions: show the list, show a form, save an item, edit an item, update it, and delete it.

## Common mistakes

- Putting controller methods in the abstract base `Controller` instead of a real resource controller.
- Mixing validation, unrelated calculations, and responses without spacing.
- Using unclear variable names like `$data` everywhere.
- Returning a view that does not exist.

## Debugging signs

- Class not found.
- Target class does not exist.
- Method does not exist.
- Undefined variable in Blade because the controller did not pass it.

## AI steering rule

AI may add or fix a controller method when the route and mission are clear. AI should keep the method focused and should not introduce service/repository layers unless requested.

## Human readability rule

A readable controller method shows visible blocks: validate input, prepare data, perform action, return response.

## Related nodes

  - HUMAN-PREFERENCE-001
  - CANON-FUNCTION-001
  - CANON-ROUTE-001
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
