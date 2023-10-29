---
title: Primitive type
tags:
  - Javascript
---

## Javascript has 6 primitives:

- Number
- String
- Boolean
- Null
- Undefined
- Symbol

All primitive types, except `null`, can be tested with `typeof`. If using `typeof null`, it returns `object`

All primitive type, except `null` and `undefined` have their corresponding object wrapper types

When accessing a property on a primitive type, Javascript wraps the value into the corresponding wrapper object and accesses the property on the object instead

Acessing a property on `null` and `undefined` throw `TypeError` exception

`undefined` means the absence of a value (`return` with no value, accessing a nonexistent object property, declaring a variable without initialization, method's return when no element is found)

`null` means the absence of an object (used in prototype chain)

## Number

`Number.MIN_VALUE`: 2^-1074

`Number.MAX_VALUE`: 2^1024

`Number.MIN_SAFE_INTEGER`: -(2^53 - 1)

`Number.MAX_SAFE_INTEGER`: 2^53 - 1)

`Number.MAX_VALUE` < `number` -> `+Infinity`

`number` < `Number.MIN_VALUE` -> `+0`

`-number` < `-Number.MAX_VALUE` -> `-Infinity`

`-Number.MIN_VALUE` < `-number` -> `-0`

## BigInt

created by appending `n` to the end of an integer or calling `BigInt()`

## String

Immutable

## Symbol

**unique** and **immutable**, can be used as the key of an object

---

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values
