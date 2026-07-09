# CANON-PHP-VARIABLE-001 — PHP Variable

## Hover summary

A PHP variable stores a value and starts with `$`.

## One-sentence truth

In PHP, variables are named containers for values, and their names should describe what the value means.

## Mental model

```txt
$pageTitle = 'Groceries';
```

`$pageTitle` is the name. `'Groceries'` is the value.

## Beginner explanation

PHP variables always begin with `$`. The name should tell you why the value exists, not just what type it is.

## Syntax example

```php
$taskName = 'Buy milk';
$itemCount = 3;
$isComplete = false;
```

## Common mistakes

- Naming variables `$data`, `$thing`, or `$x` when a clearer name exists.
- Treating string values like numbers or booleans by accident.
- Forgetting that `$taskName` and `$taskname` are different.

## Suspicious value note

Future inline-learning cards can warn about values like:

```txt
"true" -> string that looks like a boolean
"6"    -> string that looks like an integer
"0.7"  -> string that looks like a float
```

## AI steering rule

AI should preserve meaningful variable names and explain type-like confusion before changing code.

## Human readability rule

A variable name should make the next line easier to understand.

## Related nodes

- CANON-PHP-001
- CANON-JAVASCRIPT-001
