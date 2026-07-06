# Prompt Template — Human Preference & Readability

Use this when you want AI help without losing control.

```txt
Follow the AI Human Preference & Readability Standard.

My current goal is:

[write one small goal]

Before changing code:

1. Explain the problem in plain language.
2. Tell me which file probably matters.
3. Suggest the smallest readable change.
4. Do not rewrite unrelated code.
5. Do not add extra features.
6. Park useful ideas that are outside the current goal.

If you patch code:

- show the changed filename first
- use readable names
- keep functions small
- explain why the change follows the standard
- give simple test steps
```

## Short version

```txt
Follow AI-STANDARD-HUMAN-PREFERENCE.
Explain first, suggest small, patch only what is needed, confirm how to test, and park scope creep.
```
