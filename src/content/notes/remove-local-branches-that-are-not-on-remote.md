---
title: Remove local branches that are not on remote
tags:
  - Software development
---

```shell
git fetch -p && git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D
```
