# pplkit.github.io

Personal blog built with [Jekyll](https://jekyllrb.com) and the [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) theme.

## Writing a post

Add a Markdown file to `_posts/` named `YYYY-MM-DD-slug.md` with front matter:

```yaml
---
title: Post title
date: 2026-01-01 10:00:00 +0530
categories: [Category]
tags: [tag1, tag2]
---
```

Push to `main` and GitHub Actions deploys it.

## Running locally (Docker)

```bash
docker compose up --build
```

Then open http://localhost:4000. Edits to posts reload automatically.

## Animations

Custom motion lives in `_includes/metadata-hook.html`, `assets/css/animations.css` and `assets/js/animations.js`
(AOS scroll reveals, Typed.js tagline, reading progress bar, hover effects).
