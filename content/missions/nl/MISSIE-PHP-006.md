---
id: MISSIE-PHP-006
title: Je eerste mens-leesbare PHP-pagina
status: draft
track: php_laravel_bridge
level: beginner
estimated_time: 30-60 minuten
related_nodes:
  - CANON-PHP-001
  - CANON-PHP-VARIABLE-001
  - SUPPORT-PHP-TAG-001
  - SUPPORT-ECHO-001
---

# Missie 6 — Je eerste mens-leesbare PHP-pagina

## Doel

Begrijp wat PHP doet voordat Laravel daar structuur omheen bouwt.

## Denkmodel

```txt
Browser vraagt pagina op
Server voert PHP uit
Server stuurt HTML terug
Browser toont HTML
```

## Maak een bestand

```txt
index.php
```

## Voorbeeld

```php
<?php
$pageTitle = 'Mijn eerste PHP-pagina';
?>

<h1><?= $pageTitle ?></h1>
```

## Start lokaal

```powershell
php -S localhost:8000
```

Open daarna:

```txt
http://localhost:8000
```

## Controle

Kun je zien:

- waar PHP begint?
- welke variabele tekst bevat?
- waar die tekst in HTML terechtkomt?

## AI-regel

Vraag AI eerst om uitleg. Laat AI nog geen framework toevoegen.
