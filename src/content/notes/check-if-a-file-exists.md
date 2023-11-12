---
title: Check if a file exists
tags:
  - NodeJS
---

```javascript
import { access } from "node:fs";

fs.access("file.txt", (err) => {
  console.log(err ? "not exist" : "exist");
});
```

https://nodejs.org/api/fs.html#fsaccesspath-mode-callback
