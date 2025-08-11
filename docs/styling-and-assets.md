## Styling & Assets

### Tailwind CSS via PostCSS
- Tailwind entry: `_includes/styles/tailwind.css`
- Tailwind config: `tailwind.config.js`
- PostCSS pipeline (Tailwind + Autoprefixer + cssnano) is wired via the custom `postcss` Nunjucks filter in `eleventy.config.js`.
- The compiled CSS is inlined into pages by default for performance.

Edit the Tailwind file and classes in your templates to style the site.

### CSS Bundling
- Uses `@11ty/eleventy-plugin-bundle` to create per-page CSS bundles.
- In `layouts/base.njk`:
  - Add CSS to the bundle with `{% css %}...{% endcss %}` or include files with `{% include %}`.
  - Render inline with `{% getBundle "css" %}` (default) or use a separate file with `{% getBundleFileUrl "css" %}`.
- For sites enforcing a Content Security Policy, prefer the external stylesheet option.

### Static assets
- `public/` is passed through to `_site/` (e.g., `public/css/*` becomes `/css/*`).
- Add images to `public/img` or colocate content images under `content/` to use with the image shortcode.

### Syntax highlighting
- `@11ty/eleventy-plugin-syntaxhighlight` is enabled.
- The Prism Okaidia theme is included on post pages only via `layouts/post.njk`.