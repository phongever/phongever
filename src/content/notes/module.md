---
title: Module
tags:
  - Javascript
---

When working with modules, you are building up a graph of dependencies

The connection comes from `import` statements

Browser depends on the `import` to find dependency files

Browser parses all of files into **Module Records**

The module record is turned into a module instance

An instance includes: **code** and **state**

- **code**: a set of instructions
- **state**: the actual values of variables (variables are section of memories that hold values)

ES module happens in three steps:

- Construction
- Instantiation
- Evaluation

## Construnction

### Find the file and fetch it

The loader find the entry point file, fetch it

The loader use the **module specifiers** ("...") in the import statements to find the dependencies and fetch them

The process happends through the tree file-by-file

If you want to use variables for module specifiers, you can use **dynamic import** (`import()`).

It will create a new graph separately

If a module is in both graphs, it is going to share a module instance

The loader caches the instace in a **module map**

When the loader fetches a module's URL, it puts the URL in the map and marks it **fetching**. It sends the request and starts fetchign the next file

If other modules depend on the same file. the loader will look up the URL in the module map. If it is being fetched, the loader will move on

### Parsing

The browser parses the file into a module record and put in the moduel map

## Instantiation

JS engine creates a **module environment record** to manage variables for the module record

The engine finds the area in memory for all of exports

The module environment record keeps track of which section is associated with each export

Exported function declarations are initialized during this phase

The engine goes down to the dependencies at the bottom that don't depend on anything else, and set up their exports in the memory

The engine comes up to the modules that depend on the exports and wire up the export with the import to the same section in memory

When the export changes a value, it will show up in the import

Importing moduels can't change the values of their imports but can change the property of imported objects

## Evaluation

Execute top-level code outside of functions and fill the sections in memory with values of the exports

---

https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
