---
title: setTimeout vs setInterval
tags:
  - Javascript
---

## setTimeout

Run a function once after the interval of time

The first argument is function or string to execute. If function, pass its reference

The second is the delay time in `ms`, default `0`

The rest arguments are arguments passed to the first argument when executed

`setTimeout` return a `timerId`

Call `clearTimeout(timerId)` to cancel the execution

`setTimeout(func, 0)` is scheduled as soon as possible after the current script is complete

## setInterval

Run a function repeatedly after the interval of time

The arguments are similar to the `setTimeout`

The function also returns a `timerId`

Call `clearInterval(timerId)` to cancel

---

https://javascript.info/settimeout-setinterval
