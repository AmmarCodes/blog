---
layout: post
title: Apply Git Patch from clipboard
exerpt: How to apply git patch from clipboard
image: /images/git.webp
date: 2020-05-21
tags:
  - post
  - tips
  - til
  - git
---

I often get code suggestion as a git patch/diff, if it's a file I could download it then run:

```bash
git apply file-name
```

But sometimes I could get it as an inline diff, in that case I might copy the diff, create a file then repeat the step above or manually apply the diff.

Today I found out how I might be able to apply directly from the clipboard using `pbpaste` command line utility on macOS.

So I can copy the diff then run:

```bash
pbpaste | git apply -
```

[Reference](https://gist.github.com/jaymcgavren/5834920)
