# CANON-PHP-001 — PHP

## Hover summary

PHP runs on the server and sends HTML or data back to the browser.

## One-sentence truth

PHP is server-side code that runs before the browser receives the response.

## Mental model

```txt
Browser request -> PHP runs on server -> HTML response -> Browser displays page
```

## Beginner explanation

PHP is not the same as HTML. HTML is what the browser receives. PHP is code the server runs to decide what HTML or data to send.

## Syntax example

```php
<?php
$message = 'Hello from PHP';
?>

<p><?= $message ?></p>
```

## Common mistakes

- Opening a PHP file directly in the browser instead of using a PHP server.
- Mixing PHP and HTML so tightly that the file becomes hard to read.
- Using unclear variable names.

## AI steering rule

AI should explain whether code runs on the server or in the browser before suggesting a PHP fix.

## Human readability rule

Keep PHP values named clearly and keep output points easy to see.

## Related nodes

- CANON-PHP-VARIABLE-001
- SUPPORT-PHP-TAG-001
- SUPPORT-ECHO-001
