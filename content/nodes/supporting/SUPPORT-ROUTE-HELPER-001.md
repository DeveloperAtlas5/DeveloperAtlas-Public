---
id: SUPPORT-ROUTE-HELPER-001
title: route() helper
status: candidate
type: canon_node
node_depth: supporting
category: quick_reminder
level: beginner
related_gold_node: CANON-ROUTE-001
---

# route() helper

## Short meaning

The `route()` helper creates a URL from a named Laravel route.

## Where you see it

Use it instead of hard-coding paths so URLs can change without breaking views.

## Tiny example

```blade
<a href="{{ route('items.index') }}">Items</a>
```

## Common mistake

Calling a route name that does not exist.

## Related gold node

- CANON-ROUTE-001
