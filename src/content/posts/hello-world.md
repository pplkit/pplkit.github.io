---
author: Pulkit
pubDatetime: 2026-11-10T01:30:00+05:30
title: Hello, world
slug: hello-world
featured: true
draft: false
tags:
  - meta
description: "First post. What this blog is, and how it is built."
---

This is the first post on this blog. It runs on [Astro](https://astro.build) with the
[AstroPaper](https://github.com/satnaing/astro-paper) theme, hosted on GitHub Pages.

## What to expect

- Short "today I learned" notes.
- Debugging stories: the bug, the wrong guesses, the fix.
- Write-ups of side projects and tooling.

## How this site is built

Posts are Markdown files in `src/content/posts/`. Pushing to `main` triggers a GitHub Actions
workflow that builds the site and deploys it.

```bash
docker compose up
```

That command runs the site locally at `http://localhost:4321`.
