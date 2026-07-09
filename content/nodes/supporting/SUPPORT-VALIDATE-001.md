---
id: SUPPORT-VALIDATE-001
title: validate()
status: candidate
type: canon_node
node_depth: supporting
category: quick_reminder
level: beginner
related_gold_node: CANON-CONTROLLER-001
---

# validate()

## Short meaning

`validate()` checks user input before the app uses or stores it.

## Where you see it

Use validation before creating or updating records from form input.

## Tiny example

```php
$validatedData = $request->validate([
    'name' => 'required',
]);
```

## Common mistake

Saving `$request->all()` directly without checking required fields.

## Related gold node

- CANON-CONTROLLER-001
