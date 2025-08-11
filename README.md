# eleventy-base-blog v8

A starter repository showing how to build a blog/notes site with the [Eleventy](https://www.11ty.dev/) site generator (using the [v2.0 release](https://www.11ty.dev/blog/eleventy-v2/)).

> Full project documentation is in `docs/`:
>
> - Overview: `docs/overview.md`
> - Development: `docs/development.md`
> - Content Authoring: `docs/content-authoring.md`
> - Styling & Assets: `docs/styling-and-assets.md`
> - Images & Media: `docs/images-and-media.md`
> - Deployment: `docs/deployment.md`
> - Architecture: `docs/architecture.md`
> - Troubleshooting: `docs/troubleshooting.md`
> - Contributing: `CONTRIBUTING.md`

## Obsidian + Eleventy workflow (second brain → publish)

This starter plays nicely with [Obsidian](https://obsidian.md/) or similar note-taking tools. Use Obsidian for daily notes, linking ideas, and drafting; use Eleventy to render and publish selected notes.

- Write Markdown notes in `content/` using Obsidian.
- Wikilinks `[[Note Title]]` and embeds `![[Note Title]]` work via the Interlinker plugin.
- Classify notes with front matter and graduate them through stages:
  - `private: true` — never published, excluded from all builds.
  - `draft: true` — visible in dev (`npm run start`) but excluded from production builds.
  - `unlisted: true` — published but hidden from listings/feeds/sitemap; accessible via direct link and marked `noindex` for robots.
  - `publishOn: 2025-01-01` — scheduled; excluded from production until that date (included during `--serve`).

Common flows:
- Daily scratchpad → `private: true`
- In-progress note → `draft: true`
- Share-with-friends-only → `unlisted: true`
- Scheduled announcement → `publishOn: YYYY-MM-DD`
- Ready to publish → remove the flag(s) and add `tags: ["posts"]` if not already present

Helpful scripts:
- `npm run start` — dev server; includes drafts and scheduled content
- `npm run build` — production build (excludes `draft`, `private`, scheduled)
- `npm run build:with-drafts` — production-style build that still includes drafts/scheduled (useful for review)

`.obsidian/` is ignored in `.gitignore`, so you can open the repo as an Obsidian vault safely.

## Getting Started

1) Make a directory and navigate to it:

```
mkdir my-blog-name
cd my-blog-name
```

2) Clone this repository

```
git clone https://github.com/11ty/eleventy-base-blog.git .
```

3) Configure site metadata (optional)
- Edit `_data/metadata.js` (title, url, author, description)
- Review `eleventy.config.js` and `tailwind.config.js` if needed

4) Install dependencies

```
npm install
```

5) Run Eleventy
- Build and host on a local development server:

```
npm run start
```

- Generate a production-ready build to `_site`:

```
npm run build
```

## Features

- Using [Eleventy v2.0](https://www.11ty.dev/blog/eleventy-v2/) with zero-JavaScript output
  - Static, pre-rendered HTML
  - Decoupled URLs from content file paths
  - Configure templates via the [Eleventy Data Cascade](https://www.11ty.dev/docs/data-cascade/)
- Obsidian-friendly authoring
  - Wikilinks `[[Note]]` and embeds `![[Note]]`
  - Backlinks list on posts
  - `.obsidian/` ignored
- Content lifecycle controls
  - `private: true` — never publish
  - `draft: true` — dev-only
  - `unlisted: true` — publish but hide from listings/feeds/sitemap; `noindex` for robots
  - `publishOn: YYYY-MM-DD` — schedule posts
- Performance focused
  - Inlined critical CSS via `@11ty/eleventy-plugin-bundle`
  - Responsive images with AVIF/WebP via `@11ty/eleventy-img`
  - Low CLS and TBT targets
- Built-ins
  - Content-driven [navigation](https://www.11ty.dev/docs/plugins/navigation/)
  - Syntax highlighting (Prism Okaidia) on posts only
  - Atom and JSON feeds, `sitemap.xml`, 404 page, tag pages

## Deploy

- Netlify: uses `netlify.toml` (`_site` publish dir; optional Lighthouse report)
- Any static host: upload `_site/`
- GitHub Pages (project site): optionally use `npm run build-ghpages` and adjust `pathPrefix`

## Missing niceties (ideas you can add)

- Search index generation (e.g., build-time JSON index consumed by client search)
- Social sharing images (OG image generation at build time)
- RSS category filtering (per tag feeds)
- Content linting pre-commit (Markdown/links) via Husky
- Git-based CMS integration (e.g., Netlify CMS)

## Implementation Notes

- `content/about/index.md` is an example of a content page.
- Notes live in `content/note/` and are tagged as posts via `content/note/note.11tydata.js`.
- Use `eleventyNavigation` in front matter to add templates to top-level navigation. Used in `content/index.njk` and `content/about/index.md`.
- Content can be Markdown, Nunjucks, HTML, Liquid (`templateFormats` in `eleventy.config.js`).
- `public/` is copied through to `_site/`.
- Feeds live in `content/feed/`. Tags pages in `content/tags*.njk`. Sitemap in `content/sitemap/`.

#### Content Security Policy
If your site enforces a [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP):
1) In `base.njk`, replace inline bundle `{% getBundle "css" %}` with a link to `{% getBundleFileUrl "css" %}`; or
2) Configure server `style-src 'unsafe-inline'` (less secure).
