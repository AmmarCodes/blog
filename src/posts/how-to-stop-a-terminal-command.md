---
layout: post
title: How To "Stop" a Terminal Command!
excerpt: When you find yourself running a terminal command that you don't know how to exit from. Don't just close the whole terminal, you can close the that command!
image: /images/stop.webp
date: 2016-07-17
tags:
  - post
  - vim
  - command line
  - tips
---

![Stop](/images/stop.webp)

When you find yourself running a terminal command that you don't know how to exit from. Don't just close the whole terminal, you can close the that command!

> If you want to force quit "kill" a running command, you can use "Ctrl + C". most of the applications running from the terminal will be forced to quit.

There's commands/apps that are designed to keep running until the user asks it to end. and there's other commands/apps that are designed to show the output and exit automatically.

Here's how to stop 3 of the most common commands.

### Nano Editor

Nano is a simple text editor, you could have faced it when dealing with "git commit".

If you're inside **nano** editor. Press `Ctrl + X` to exit. it will prompt you whether you want to save before quitting or not.

### Vim Editor

Vim is another text editor, unlike nano, this one is sophisticated and powerful one.

If you were running Vim editor and you want to quit, you can press `Esc` then type a colon `:` followed by `q!` to force quit without saving.

If you want to save do the same process but replace `q!` with `wq` (which means **w**rite then **q**uit).

### Less

Less is a command that let you view the content of an input (either the output of another command or a content of a file).

**Less** is different from the editors above, if you're inside commands that don't need input, like "less" or top, you can press `q`.

### Others

Sometimes nothing from the above will work to quit the command gracefully. In these situations, you can use the "kill" command which is `Ctrl + C`.

---

Please, try to quit the application gracefully so it can do what it's designed to do when quitting. If it didn't work just force quit (kill) it.
