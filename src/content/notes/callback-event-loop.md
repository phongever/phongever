---
title: Call stack + Event loop
tags:
  - Javascript
---

Javascript is a **single thread** language

It has a single call stack

**Call stack [^call_stack]**: records function calls

**Heap**: allocates memory to variables and objects

**Message queue [^message_queue]**: the messages in queue are response to async external events. When the call stack is empty, a message is taken out and processed. Its associated callback function will be called. When the stack is empty, the message processing ends. If an external event occurrs and no callback function is provided, the message won't be enqueued

**Event loop**: check if the call stack is empty. If it is, event loop pushes the first message in the message queue to the call stack

`setTimeout` has **4ms** minimum delay [^minimum_delay]

[^call_stack]: https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
[^message_queue]: https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec
[^minimum_delay]: https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0
