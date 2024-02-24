---
layout: post
title: "Angular 2: Display HTML without sanitizing/filtering"
excerpt: "Angular 2: Display HTML without sanitizing/filtering"
image: /images/angular-2.png
date: 2016-11-02
tags:
  - angular
  - javascript
redirect_from:
  - /posts/angular-2-display-html-without-sanitizing/
---

![](/images/angular-2.png)

You might have a situation where you need to display/bind HTML code into some DOM elements.

Usually, there's no problem in that binding, except that Angular 2 will remove all the attributes from your HTML tags.

One solution to this is to create a Pipe and use it whenever you need the HTML to be as is (not filtered, not sanitized).

Create new file to hold the pipe `pipes/keep-html.pipe.ts`:

```typescript
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: "keepHtml", pure: false })
export class EscapeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
```

Add an import statement in your `app.module.ts`:

```typescript
import { EscapeHtmlPipe } from "./pipes/keep-html.pipe";

@NgModule({
  declarations: [EscapeHtmlPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Finally use that pipe in your template:

```typescript
<div [innerHTML]="post.body | keepHtml"></div>
```

That's it!

The solution is inspired by [this answer](https://stackoverflow.com/questions/37076867/in-rc-1-some-styles-cant-be-added-using-binding-syntax/37076868#37076868) on Stackoverflow.
