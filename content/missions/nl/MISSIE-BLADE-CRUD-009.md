---
id: MISSIE-BLADE-CRUD-009
title: Blade CRUD-brug
status: draft
track: php_laravel_bridge
level: beginner
estimated_time: 60-120 minuten
related_nodes:
  - CANON-CRUD-001
  - CANON-BLADE-VIEW-001
  - CANON-PHP-FORM-REQUEST-001
---

# Missie 9 — Blade CRUD-brug

## Doel

Begrijp CRUD als leesbare gebruikersacties voordat je database-complexiteit toevoegt.

## CRUD

```txt
Create -> toevoegen
Read   -> tonen
Update -> aanpassen
Delete -> verwijderen
```

## Formulier

```blade
<form method="post" action="{{ route('groceries.store') }}">
    @csrf

    <label for="name">Name</label>
    <input id="name" name="name" type="text">

    <button type="submit">Save</button>
</form>
```

## Belangrijke gedachte

Een formulier slaat niet zelf op.

Het formulier stuurt een request naar een route. De route roept een controller aan. De controller valideert en kiest de volgende response.
