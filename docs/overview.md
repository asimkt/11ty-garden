## Overview

This repository is an Eleventy (11ty) static site configured as a lightweight blog/notes system with zero client-side JavaScript by default. It uses Nunjucks templates, Tailwind CSS (via PostCSS), and a content model optimized for Markdown notes with wikilinks and backlinks.

### Tech stack
- Eleventy v2
- Nunjucks templates
- Tailwind CSS (via PostCSS: autoprefixer + cssnano)
- Eleventy plugins: RSS, Syntax Highlight, Navigation, Bundle (per-page CSS), HTML Base, Drafts, Images, Interlinker (wikilinks/backlinks)
- Netlify configuration (optional) for easy deploys

### Key features
- Zero-JS static output, fast-by-default
- Markdown authoring in `content/` with the Eleventy Data Cascade
- Wikilinks `[[Title]]` and embeds `![[Title]]` via Interlinker; automatic backlinks listing
- Per-page CSS bundles and inlined critical CSS by default
- Drafts support (included in `--serve`/`--watch`, excluded in production builds)
- Feeds (Atom + JSON), `sitemap.xml`, tag pages, 404 page

### Repository layout
- `content/` — site content (Markdown/Nunjucks). Input directory.
- `_includes/` — layouts, includes, and styles; Tailwind entry at `_includes/styles/tailwind.css`.
- `_data/metadata.js` — global site metadata (title, url, author, etc.).
- `public/` — static passthrough assets (copied as-is to the build output).
- `eleventy.config.js` — Eleventy configuration, plugins, filters, and directory settings.
- `eleventy.config.images.js` — Image shortcode and output formats.
- `eleventy.config.drafts.js` — Drafts workflow.
- `tailwind.config.js` — Tailwind content globs and typography plugin.
- `netlify.toml` — Netlify build configuration and Lighthouse report.

### Build output
- `_site/` — generated site (production-ready static assets).