---
id: MISSION-PHP-006
title: Your First Human-Readable PHP Page
status: draft
track: php_laravel_bridge
level: beginner
estimated_time: 30-60 minutes
related_nodes:
  - CANON-PHP-001
  - CANON-PHP-VARIABLE-001
  - SUPPORT-PHP-TAG-001
  - SUPPORT-ECHO-001
---

# Mission 6 — Your First Human-Readable PHP Page

## Mission goal

Build one tiny PHP page and understand what PHP does before Laravel adds structure around it.

## The mental model

HTML is sent to the browser.

PHP runs on the server before the browser receives the page.

```txt
Browser asks for page
Server runs PHP
Server sends HTML back
Browser shows HTML
```

## What you will build

A small PHP page that shows:

- a title
- a variable
- a list of learning notes
- a calm output message

## Before you start

Create a folder:

```txt
atlas-php-mission-6/
```

Inside it, create:

```txt
index.php
```

## Build step 1 — Add a readable PHP skeleton

```php
<?php
$pageTitle = 'My first PHP page';
$learningGoal = 'Understand what PHP sends to the browser';
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title><?= $pageTitle ?></title>
</head>
<body>
    <h1><?= $pageTitle ?></h1>
    <p><?= $learningGoal ?></p>
</body>
</html>
```

## Build step 2 — Run it

From the folder containing `index.php`:

```powershell
php -S localhost:8000
```

Then open:

```txt
http://localhost:8000
```

## What to notice

This PHP:

```php
$pageTitle = 'My first PHP page';
```

creates a server-side value.

This PHP:

```php
<?= $pageTitle ?>
```

prints the value into the HTML sent to the browser.

## Human readability checkpoint

Ask:

```txt
Can I tell which values are page content?
Can I see where PHP starts and stops?
Are variable names clear enough tomorrow?
```

## Recovery

If the browser shows raw PHP code, the file was probably opened directly instead of through the PHP server.

Use:

```powershell
php -S localhost:8000
```

and open the localhost URL.

## AI instruction

Ask AI:

```txt
Explain this PHP page before changing it. Keep the explanation beginner-friendly and do not add a framework yet.
```
