# CANON-PHP-FORM-REQUEST-001 — Form Request

## Hover summary

A form request is data sent from the browser to the server.

## One-sentence truth

Forms do not save data by themselves; they send a request that server-side code must handle safely.

## Mental model

```txt
Form input -> Browser request -> Server reads input -> Server validates -> Response
```

## Beginner explanation

A form has `method`, `action`, and named inputs. The server reads those names from the incoming request.

## Syntax example

```html
<form method="post" action="process.php">
    <input name="task_name" type="text">
    <button type="submit">Save</button>
</form>
```

```php
$taskName = $_POST['task_name'] ?? '';
```

## Laravel example

```php
$validated = $request->validate([
    'task_name' => ['required', 'string', 'max:255'],
]);
```

## Common mistakes

- Not matching input `name` with server-side field name.
- Trusting raw input.
- Forgetting CSRF protection in Laravel forms.

## AI steering rule

AI should explain the form action, method, field names, and validation before adding storage logic.

## Human readability rule

A form should make it obvious where data goes and what each field is called.

## Related nodes

- CANON-LARAVEL-REQUEST-LIFECYCLE-001
- SUPPORT-CSRF-001
- SUPPORT-VALIDATE-001
