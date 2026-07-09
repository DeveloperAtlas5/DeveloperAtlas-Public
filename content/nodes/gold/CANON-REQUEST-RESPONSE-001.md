# CANON-REQUEST-RESPONSE-001 — Request and Response

## Hover summary

A request asks for something. A response sends something back.

## One-sentence truth

Request and response describe how browsers and servers communicate.

## Mental model

The browser asks. The server answers.

## Beginner explanation

When you open a page, submit a form, or click a link that goes to the server, the browser sends a request. The server returns a response.

This becomes very important in PHP and Laravel.

## Tiny example

```text
Browser request:
GET /items

Server response:
HTML page with items
```

## Common mistakes

- Thinking PHP changes the page the same way JavaScript does.
- Thinking every button sends a server request.
- Confusing browser-only state with database state.

## AI steering rule

AI should clarify whether a problem is happening in the browser, server, or database layer.

## Human readability rule

Code should make the data flow visible: input, request, action, response.
