# SUPPORT-BLADE-FOREACH-001 — Blade @foreach

        ## Hover summary

        `@foreach` repeats Blade HTML for each item in a collection.

        ## Beginner explanation

        Use it when a view needs to show a list. Keep list markup readable.

        ## Syntax example

        ```blade
@foreach ($items as $item)
    <li>{{ $item }}</li>
@endforeach
```

        ## Common mistake

        Using this feature without understanding which folder, file, or response it affects.

        ## AI steering rule

        AI should explain the smallest relevant use before suggesting a larger framework pattern.

        ## Human readability rule

        The code should make the intent visible without needing hidden context.
