---
title: this
tags:
  - Javascript
---

The value of this depends on the context it appears

- Function
- Class
- Global

## Function

`obj.f()`: the value of `this` is the object that calls the function

`f()`:

- In strict mode, `this` is `undefined`
- In non-strict mode, if `this` -> `undefined` or `null`, it is substituted with `globalThis`. If `this` -> a primitive value, it is substituted with the primitive value's wrapper object

`this` can be explicitly set by using `call()`, `apply(), and`bind()`

Value of `this` is fixed but still be substitued if in non-strict

### Callback

Value of `this` in callbacks is typically `undefined`

In event handler , `this` -> DOM element on which the lister is placed

### Arrow function

`this` is the enclosing lexical context's `this`

In global scope, `this` is always `globalThis`

When using `call()`, `bind()`, `apply()` , the first param is ignored

### Constructor

`this` -> the new object is being constructed

If the function return a non-primitive value, the value becomes `this`

### super

`this` -> `this` around `super.metod()`

## Class

### Instance

Constructor, field: `this` -> new instance being created

Method: `this` -> `obj.f()`.

To refer to the class instance, `bind` the method in the constructor

### Static

Method, field: `this` -> class/subclass

### Derived class constructors

Derived constructors have no initial `this` binding
Call `super()` in constructor equals to

```javascript
this = new Base()
```

## Global

Top level: `this` -> `globalThis`

In module, `this` -> `undefined`

Object literal: `this` -> `this` from the surrounding scope

---

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
