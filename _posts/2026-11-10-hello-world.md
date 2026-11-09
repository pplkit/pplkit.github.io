---
title: Hello, world
date: 2026-11-10 01:30:00 +0530
categories: [Meta]
tags: [blog, jekyll]
pin: true
---

This is the first post on this blog. It runs on [Jekyll](https://jekyllrb.com) with the
[Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) theme, hosted on GitHub Pages,
with a few animations layered on top.

## What to expect

- Short "today I learned" notes.
- Debugging stories: the bug, the wrong guesses, the fix.
- Write-ups of side projects and tooling.

## How this site is built

Posts are Markdown files in `_posts/`. Pushing to `main` triggers a GitHub Actions
workflow that builds the site and deploys it.

```bash
bundle exec jekyll serve
```

That command runs the site locally at `http://127.0.0.1:4000`.

> Scroll down on a post and watch the progress bar at the top of the page.
{: .prompt-tip }
