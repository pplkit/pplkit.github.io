# pplkit.github.io

Personal blog built with [Astro](https://astro.build) and the [AstroPaper](https://github.com/satnaing/astro-paper) theme.

## Writing a post

Add a Markdown file to `src/content/posts/` with front matter:

```yaml
---
author: Pulkit
pubDatetime: 2026-01-01T10:00:00+05:30
title: Post title
slug: post-title
featured: false
draft: false
tags:
  - tag1
description: "One-line summary shown in lists and previews."
---
```

Push to `main` and GitHub Actions builds and deploys it.

## Running locally (Docker)

```bash
docker compose up
```

Then open http://localhost:4321. Edits reload automatically.

## Animations

- Page and heading transitions come from Astro view transitions (built into the theme).
- Scroll reveals for post cards and headings live in `src/scripts/reveal.ts` and the `.reveal` rules in `src/styles/global.css`.
