---
title: Type coercion for primitive types
tags:
  - Javascript
---

Type coercion is a process converting value from one type to another

There are 2 types of coercion: **explicit** and **implicit**

**Explicit**: `Number(value)`

**Implicit**: `1 == null` or by surrounding context like `if (value) {}`

Strict equality operator (`===`) doesn't trigger implicit coercion

## String conversion

**Explicit**: Use `String(value)`

**Implicit**: Use `+` operator.

```javascript
value + "";
```

Symbol an only be explicitly converted. If implicitly converting it, `TypeError` is thrown

## Boolean conversion

**Explicit**: `Boolean(value)`

**Implicit**: in logical context or logical operators (`||`, `&&`, `!`)

`||` and `&&` convert values internally but return the original value instead boolean value

**Falsy value**

- `''`
- `0`
- `-0`
- `NaN`
- `null`
- `undefined`
- `false`

## Number conversion

**Explicit**: `Number(value)`

**Implicit**:

- `>`, `<`, `<=`, `>=`
- `|`, `&`, `^`, `~`
- `+`, `-`, `*`, `/`, `%` (`+` doesn't trigger number conversion if any operand is **string**)
- unary `+`
- `==`, `!=` (`==` doesn't trigger conversion if both operands are strings)

When converting a string to number, Javascript will trim whitespaces. The result will be `NaN` if the string is an invalid number, `0` if empty.

`null` -> `0`

`undefined` -> `NaN`

Symbol **can't be** converted explicitly or implicitly. `TypeError` will be thrown

## Special cases

- `null` and `undefined` **can only** be `==` to **themself**, not anything else
- `NaN` doesn't equal to anything event itself

## Type coersion for objects

Objects -> primitives by `[[ToPrimitive]]` method

Boolean conversion always returns `true` for non-primitive value

Numeric and string conversion use 2 methods of the input object: `valueOf()` and `toString()`

Steps:

- If the object is a primitive, do nothing and return it
- Call `toString()`. If the result is a primitive, return it
- Call `valueOf()`. If the result is a primitive, return it
- After calling `toString()` and `valueOf()`, if the result is not a primitive, throw `TypeError`

String conversion call `toString()` first, then fallback to `valueOf()`

Number conversion call `valueOf()`, and fallback to `toString()`
`==` and binary `+` trigger number conversion by default

---

https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839
