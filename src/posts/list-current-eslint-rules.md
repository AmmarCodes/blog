---
layout: post
title: List current eslint rules
excerpt: How to list current/enabled eslint rules
image: /images/eslint.png
date: 2020-05-15
tags:
  - post
  - productivity
  - til
  - tools
---

Do you have some eslint plugins in place and want to list all the applied rules in your setup?

You can run this command

```bash
eslint --print-config [path to eslintrc file]
```

It will output the compiled config of eslintrc including all the rules.
