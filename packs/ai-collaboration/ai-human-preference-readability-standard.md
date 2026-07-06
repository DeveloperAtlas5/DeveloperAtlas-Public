# AI Human Preference & Readability Standard

**Standard ID:** `AI-STANDARD-HUMAN-PREFERENCE`  
**Version:** `1.0`  
**Status:** Active standard

## Core philosophy

AI-generated code should be easy for humans to read, understand, review, and maintain.

Developer Atlas prioritizes:

```txt
clarity over cleverness
maintainability over shortcuts
learning value over speed
human control over AI autonomy
```

The goal is not only to produce working code.  
The goal is to produce code that a rookie-to-junior developer can understand, safely change, and learn from.

## Mandatory preferences

### 1. Indentation and formatting

Default preference:

```txt
2-space indentation
```

Exception:

```txt
Respect the project .editorconfig, formatter, or existing style when present.
```

Rules:

- keep spacing consistent
- avoid cramped one-line logic
- avoid unnecessary clever formatting
- keep related code grouped
- prefer readable structure over shortest possible code

### 2. Naming

Use descriptive names.

Prefer:

```txt
todoItems
selectedCategory
saveTodosToStorage
isFormValid
```

Avoid unclear names like:

```txt
x
data
stuff
tmp
doThing
handleIt
```

Small exceptions are allowed for common short-lived values, such as loop counters.

### 3. Comments

Comments should explain **why**, not repeat **what** the code already says.

Prefer:

```js
// Why: Store non-sensitive todo data so the practice app survives refresh.
localStorage.setItem('todos', JSON.stringify(todos.value))
```

Avoid:

```js
// Save todos
localStorage.setItem('todos', JSON.stringify(todos.value))
```

Comment rules:

- put single-line comments on their own line above the code
- add an empty line before a comment unless it is the first line in a block
- do not use comments to hide confusing code
- improve the code first, then comment only where useful

### 4. Code structure

Keep functions, components, and files focused.

Prefer:

- small functions with one clear job
- early returns when they reduce nesting
- simple control flow
- readable condition names
- extracting repeated logic when it improves clarity

Avoid:

- deep nesting
- magic numbers
- large mixed-responsibility functions
- unrelated changes in the same patch
- rewrites when a small patch is enough

### 5. Readability rules

Readable code should be easy to scan.

Prefer:

- line length around 100 characters when reasonable
- self-documenting code first
- clear names before extra comments
- boring, predictable patterns
- explicit data flow

Avoid:

- clever one-liners
- hidden side effects
- unclear abbreviations
- over-engineered abstractions
- premature architecture

## AI behavior rules

When AI assists with code, it should use this action order:

```txt
Explain
Suggest
Patch
Confirm
Park
Refuse
```

### Explain

First explain the problem, the relevant file, and the likely change.

### Suggest

Suggest a small approach.

The suggestion should say:

- which file matters
- what will change
- why the change follows this standard
- what will not be changed

### Patch

Patch only the smallest necessary change.

A patch should:

- show changed files clearly
- avoid unrelated rewrites
- keep code beginner-readable
- preserve existing behavior unless asked otherwise
- include a short explanation of key decisions

### Confirm

After the patch, confirm what changed and how to test it.

### Park

Park useful ideas that are outside the current mission.

Good ideas can still be wrong for the current mission.

### Refuse

Refuse or redirect when a request would harm readability, learning, safety, or scope.

## Output requirements for AI code help

When generating or editing code, AI should provide:

```txt
1. changed file name
2. full relevant code block or clearly bounded patch
3. short explanation of why the change follows this standard
4. simple test steps
5. parked ideas, if any
```

## Project overrides

Projects may extend this standard with local rules.

Project overrides may add detail, but should not weaken the core philosophy.

## Versioning

This standard is versioned.

Changes should document:

- what changed
- why it changed
- whether existing prompts or packs need updates

## Learning note

Readable code protects the learner.

When code is readable, the learner can understand what changed, review AI output, ask better follow-up questions, recover when something breaks, and keep ownership of the project.
