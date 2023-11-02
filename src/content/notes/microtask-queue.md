---
title: Microtask queue
tags:
  - Javascript
---

**Tasks** (event handler, `setTimeout`) are scheduled so the browser can execute sequentially

The browser may render between tasks

**Mircotasks** (promise callbacks, mutation observer callbacks) are executed immediately after the call stack is empty and at the end of tasks

Additional microtasks during executing microtasks are added to the end of the queue and also processed

---

https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
