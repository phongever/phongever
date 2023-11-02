---
title: Promise
tags:
  - Javascript
---

Promise for a value that will be available later

```javascript
Promise.then(resolved).catch(rejected);
```

`.then` can also handle rejection as its second argument

```javascript
Promise.then(resolved, rejected);
```

`.then(null, rejected)` === `.catch(rejected)`

`.then` and `.catch` return a new promise

If there is an error in `.then`, it will be caught in `catch`

## Create promise

```javascript
new Promise((resolve) => resolve()) / Promise.resolve();
new Promise((resolve, reject) => reject()) / Promise.reject();
```

## Promise exists in \*_three_/ states:

- Pending
- Settled:
  - Fullfilled
  - Rejection

After a promise is settled, all reactions are evaluated

## Promise.all

Run promises concurrently

If a promise is rejected, `Promise.all` will be rejected

## Promise.race

The **first settled promise** win

---

https://ponyfoo.com/articles/es6-promises-in-depth
