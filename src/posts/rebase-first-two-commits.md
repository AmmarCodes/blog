---
layout: post
title: Rebase first two commits
excerpt: How to rebase first two commits
date: 2020-05-30
tags:
  - post
  - tips
  - til
  - git
---

I ran into a situation where I had multiple commits, but I wanted to squash the second commit with the first one.

If you're trying to do the regular `git rebase -i master`, it will list all commits except the first one.

To list all commits including the first one, this could be used:

```bash
git rebase -i --root master
```

[reference](https://stackoverflow.com/a/598788)
