---
id: CANON-BLADE-VIEW-001
title: Blade View
status: gold_candidate
type: canon_node
node_depth: gold
category: core_code_concept
level: beginner_to_rookie
hover: "A Blade view is where Laravel data becomes a page the user can see."
related_nodes:
  - HUMAN-PREFERENCE-001
  - CANON-ROUTE-001
  - CANON-CONTROLLER-001
  - CANON-CRUD-001
---

# Blade View

## One-sentence truth

A Blade view is a Laravel template that turns data into human-visible HTML.

## Hover reminder

A Blade view is where Laravel data becomes a page the user can see.

## Mental model

Think of Blade like a fill-in-the-blanks document. The HTML gives the structure, and Blade places dynamic data into it.

## Beginner explanation

Blade lets you write HTML with Laravel helpers and template syntax such as `@foreach`, `@if`, `{{ }}`, layouts, and sections.

## Technical explanation

A Blade view is compiled by Laravel into PHP. It should focus on displaying data and simple view logic, not heavy business logic.

## When to use it

- You need to show a page.
- You need to loop over data from a controller.
- You need to reuse a layout.
- You need a form that posts to a named route.

## When not to use it

- Do not put database queries directly in Blade.
- Do not put complex business rules in Blade.
- Do not make the template so clever that HTML structure becomes hard to see.

## Tiny example

```blade
@extends("layouts.app")

@section("content")
    <h1>Grocery Items</h1>

    <ul>
        @foreach ($items as $item)
            <li>{{ $item->name }}</li>
        @endforeach
    </ul>
@endsection
```

## Mission example

In the Laravel mission pack, the item index Blade view displays all items passed from `ItemController@index`.

## Common mistakes

- Forgetting to pass a variable from the controller.
- Using `{!! !!}` when escaped `{{ }}` is safer.
- Putting too much PHP logic inside the view.
- Indenting Blade loops so the HTML becomes hard to scan.

## Debugging signs

- Undefined variable.
- View not found.
- Route not defined in form action.
- HTML renders but list is empty because the controller passed no data.

## AI steering rule

AI may improve Blade indentation, route helpers, and simple display logic. AI should not move business logic into Blade or rewrite the layout system without confirmation.

## Human readability rule

A readable Blade view keeps HTML structure visible, indents Blade directives clearly, and uses small comments only when they explain page intent.

## Related nodes

  - HUMAN-PREFERENCE-001
  - CANON-ROUTE-001
  - CANON-CONTROLLER-001
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
