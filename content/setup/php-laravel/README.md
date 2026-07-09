# PHP / Laravel Setup Guide

This guide is not a mission.

It is the calm setup reference for PHP and Laravel work.

## Goal

Before writing code, you should know:

- what PHP is
- what Composer is
- what Laravel is
- what Artisan is
- how to check if the tools are installed
- what command to run from which folder

## Required tools

| Tool | What it does | Check command |
|---|---|---|
| PHP | Runs PHP code | `php -v` |
| Composer | Installs PHP packages | `composer -V` |
| Laravel project | The app folder | look for `artisan` |
| Artisan | Laravel command file | `php artisan` |
| Browser | Opens app output | `http://127.0.0.1:8000` |

## Check PHP

```powershell
php -v
```

If this fails, PHP is not installed or not on PATH.

## Check Composer

```powershell
composer -V
```

If this fails, Composer is not installed or not on PATH.

## Find the Laravel project root

A Laravel project root usually contains:

```txt
artisan
composer.json
app/
routes/
resources/
database/
```

Run Laravel commands from this folder.

## Start a Laravel app

From the Laravel project root:

```powershell
php artisan serve
```

Then open:

```txt
http://127.0.0.1:8000
```

## Human-readable setup rule

Do not run random commands from random folders.

First ask:

```txt
Which folder am I in?
Does this folder contain artisan?
What will this command change?
```

## AI steering rule

AI should explain setup commands before suggesting them.

AI should not ask beginners to run destructive commands like database resets, cache clears, or package reinstallations without explaining risk and asking for confirmation.
