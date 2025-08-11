## Architecture

### Eleventy configuration
Configured in `eleventy.config.js`:
- Passthrough copy for `public/` and Prism CSS
- Watch targets for content images and Tailwind CSS
- PostCSS filter to process Tailwind and minify CSS
- Plugins:
  - Drafts (`./eleventy.config.drafts.js`)
  - Images (`./eleventy.config.images.js`)
  - RSS
  - Syntax Highlight
  - Navigation
  - HTML Base
  - Bundle
  - Interlinker (wikilinks/backlinks)

### Template engines
- Markdown is preprocessed with Nunjucks (`markdownTemplateEngine: "njk"`).
- HTML is preprocessed with Nunjucks (`htmlTemplateEngine: "njk"`).
- Supported template formats: `md`, `njk`, `html`, `liquid`.

### Layouts and includes
- Base HTML shell: `_includes/layouts/base.njk`
- Home layout: `_includes/layouts/home.njk`
- Post layout: `_includes/layouts/post.njk`
- Reusable posts list: `_includes/postslist.njk`

### Collections and data cascade
- Tags drive collections (notably `posts`).
- Global data under `_data/` (e.g., `metadata.js`).

### Feeds and sitemaps
- Atom and JSON feeds under `content/feed/`.
- Sitemap under `content/sitemap/`.

### Security considerations
- Inline CSS by default improves performance but requires relaxed CSP (`style-src 'unsafe-inline'`). Switch to external bundle rendering if enforcing a strict CSP.

### Performance features
- Zero-JS output by default
- Inlined critical CSS
- Responsive images with modern formats
- Minimal layout shift and excellent Lighthouse scores (per Netlify plugin config)

### Template helpers

Filters available in templates:
- `readableDate(dateObj, format?, zone?)` — format dates using Luxon; default format `dd LLLL yyyy`.
- `htmlDateString(dateObj)` — format for HTML date attributes `yyyy-LL-dd`.
- `head(array, n)` — first `n` items (or last `|n|` items if `n` is negative).
- `min(...numbers)` — minimum of the provided numbers.
- `getAllTags(collection)` — unique tags across a collection.
- `filterTagList(tags)` — removes reserved tags: `all`, `nav`, `post`, `posts`.

Asynchronous Nunjucks filter:
- `postcss(css)` — runs Tailwind, Autoprefixer, and cssnano.

Shortcodes:
- `image(src, alt, widths?, sizes?)` — responsive image markup via `@11ty/eleventy-img`.