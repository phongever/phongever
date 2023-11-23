---
title: Shell scripting with Node.js
tags:
  - NodeJS
  - Book
---

## Available APIs in a Node.js app consist of:

- ECMAScript standard library
- Node.js APIs
  - Global variables
  - Built-in modules

## Node's functions have 3 styles:

- Synchronous
- Asynchronous
  - Callback-based
  - Promise-based

## Event loop

Node executes JS in a main thread

The main thread continuously runs the **event loop**

The loop executes chunks of JS

Each chunk is a scheduled task

The first task contains the code of the initial task

The loop takes the tasks out of the task queue and executes them in the main thread

Each task runs after the previous finished

## Phases

- **Timers**: run timed tasks (`setTimeout()`, `setInterval()`)
- **Poll**: run I/O-related tasks (`setImmediate()`)
- **Check**: run `setImmediate` callback

Each phase will waits until its next turn before processing tasks

Except **poll**,

- If the **poll** queue is not empty, the phase will go through it and execute tasks
- If the queue is empty
  - If there are `setImmediate` tasks, skip to **check** phase
  - If there are timer tasks, skip to **timers** phase
  - Else, wait until new tasks are added

## Sub-phases

- Next-tick tasks (`process.nextTick()`)
- Microtasks (`queueMicrotask()`, Promise reaction)

Run until both queues are empty

Tasks are added and processed immediately

## Path methods

`path.resolve()`: resolve path

`path.join()`: concatenate path

`path.normalize()`: ensure paths are normalized

---

https://exploringjs.com/nodejs-shell-scripting
