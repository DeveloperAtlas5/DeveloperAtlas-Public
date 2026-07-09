---
id: MISSION-FORMS-REQUEST-007
title: Forms and Request/Response Thinking
status: draft
track: php_laravel_bridge
level: beginner
estimated_time: 45-75 minutes
related_nodes:
  - CANON-PHP-FORM-REQUEST-001
  - CANON-LARAVEL-REQUEST-LIFECYCLE-001
  - SUPPORT-VALIDATE-001
  - SUPPORT-PREVENTDEFAULT-001
---

# Mission 7 — Forms and Request/Response Thinking

## Mission goal

Understand what happens when a browser form sends data to the server.

## The mental model

```txt
User fills form
Browser sends request
Server reads input
Server validates input
Server returns response
```

## What you will build

A tiny plain-PHP form with one input.

## Files

```txt
form-mission/
  index.php
  process.php
```

## index.php

```php
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Form Mission</title>
</head>
<body>
    <h1>Form Mission</h1>

    <form method="post" action="process.php">
        <label for="taskName">Task name</label>
        <input id="taskName" name="task_name" type="text">

        <button type="submit">Save task</button>
    </form>
</body>
</html>
```

## process.php

```php
<?php
$taskName = trim($_POST['task_name'] ?? '');
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Saved Task</title>
</head>
<body>
    <h1>Saved Task</h1>

    <?php if ($taskName === ''): ?>
        <p>No task name was given.</p>
    <?php else: ?>
        <p>You submitted: <?= htmlspecialchars($taskName) ?></p>
    <?php endif; ?>

    <a href="index.php">Go back</a>
</body>
</html>
```

## Important safety note

User input should not be trusted automatically.

This line protects HTML output:

```php
htmlspecialchars($taskName)
```

## Human readability checkpoint

Ask:

```txt
Can I see where the form sends data?
Can I see which input name the server reads?
Is the response easy to follow?
```

## Bridge to Laravel

Laravel gives you a cleaner version of the same idea:

```php
$request->validate([
    'task_name' => ['required', 'string', 'max:255'],
]);
```

Same idea. Better structure.

## AI instruction

Ask AI:

```txt
Explain this request/response flow. Do not convert it to Laravel yet. Show me what the browser sends and what the server returns.
```
