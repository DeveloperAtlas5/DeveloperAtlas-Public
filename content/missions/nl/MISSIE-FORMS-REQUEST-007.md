---
id: MISSIE-FORMS-REQUEST-007
title: Formulieren en request/response-denken
status: draft
track: php_laravel_bridge
level: beginner
estimated_time: 45-75 minuten
related_nodes:
  - CANON-PHP-FORM-REQUEST-001
  - CANON-LARAVEL-REQUEST-LIFECYCLE-001
---

# Missie 7 — Formulieren en request/response-denken

## Doel

Begrijp wat er gebeurt wanneer een formulier gegevens naar de server stuurt.

## Denkmodel

```txt
Gebruiker vult formulier in
Browser stuurt request
Server leest input
Server controleert input
Server stuurt response terug
```

## Belangrijke regel

Input van gebruikers vertrouw je niet automatisch.

Gebruik bij output bijvoorbeeld:

```php
htmlspecialchars($taskName)
```

## Laravel-brug

Laravel maakt dit netter met:

```php
$request->validate([
    'task_name' => ['required', 'string', 'max:255'],
]);
```

Zelfde idee, betere structuur.
