---
title: Scope
tag: Javascript
---

When executing JS code, the interpreter goes through code twice

- First run: look for variable and function declarations, and move them to the top of the current scope. The assignments are left as-is
- Second run: execute code

All function params are implicitly declared in the **function scope** [^function_scope]

## Lexical scope

**Compile-time scope**: the decision for the scope is made after the first run

In the scond run, the interpreter assigns values to the variables and execute the functions
The interpreter finds the declartion of the variables in the current scope before executing them. If they are not in the current scope, the interpreter goes up to the **parent** scope. The highest level scope is **global scope**. If the interpreter can't find the variable's declaration in the global scope, it throws `ReferenceError`
If there are 2 same name variables, one in the current scope and one in the parent scope, the one in the current scope will hide the one in the parent scope

## Function scope

A variable declared in the function has the **function scope**. The variable is available to the function itself and its children functions. The variable can't be accessed from the outside

## Block scope

`let` and `const` declare the variable in the **block scope** (`if` block, `for` block, a function)

## IIFE (Immediately invoked function expression)

Allow a function to create a new block scope

[^function_scope]: https://www.telerik.com/blogs/understanding-scope-in-javascript
