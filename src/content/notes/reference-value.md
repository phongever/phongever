---
title: Reference value
tags:
  - Javascript
---

Javascript has 2 kinds of variable types: primitive and refence

When declaring a variable, Javascript engine allocates the memory for them on **stack** and **heap**

Static data includes **primitive types** and **reference values** to objects. Its size is **fixed** at compile time. Javascript stores memory space of the static data on the **stack**

Javascript stores **array**, **object** and **function** on the **heap**. These objects don't have fixed amount of memory

Javascript creates a new object on the **heap** and link the object to the variable on the **stack**

You can add, change, and delete properties of a reference value

When assigning a primitive value from a variable to another, Javascript creates a copy of that value and assigns it to the new variable. If you change the value of one variable, it won't affect the other

When assigning a reference value from a variable to another, Javascript create a reference. This means two variables refer to the same object on the heap. If you change one variable, it will affects the other

---

https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
