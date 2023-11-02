---
title: Prototypal inheritance
tags:
  - Javascript
---

Objects have a hidden property `[[Prototype]]`, which is either `null` or references to another object (a prototype)

Access `[[Prototype]]`: `obj.__proto__`

Set `[[Prototype]]` value:

```javascript
obj.__proto__ = value;
```

`value` can be either an object or `null`

When accessing a missing property from object, Javascript will find it from the prototype

Prototype is only used for reading properties

Writing/deleting works directly with the object except accessor properties

The value of `this` in a method call is **always** the object before the dot

`for..in` loops over both own and inherited keys of the object

`obj.hasOwnProperty(key)`: return `true` if `obj` has own (not inherited) property `key`

---

https://javascript.info/prototype-inheritance
