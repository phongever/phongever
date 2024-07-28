---
title: Arrow function vs normal function
tags:
  - Javascript
---

# Arrow function

- Can omit parentheses for single-parameter functions
- Curly braces and `return` can be omitted if the body contians a single expression
- Inherit `this` from the enclosing scope
- Does not have `arguments` object. Use rest parameters
- Cannot be used as constructor functions
- Cannot be hoisted

# Normal function

- `this` referes to the object that owns the function
- Has `arguments` object containing function arguments
- Can be used as constructor functions with the `new` keyword
- Can be hoisted
