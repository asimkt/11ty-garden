## Images & Media

This project uses `@11ty/eleventy-img` for responsive, optimized images via a Nunjucks shortcode named `image`.

### Usage
In Markdown (via Nunjucks fences) or Nunjucks templates:
```njk
{% image "/public/img/example.jpg", "Descriptive alt text", [320, 640, 960], "(max-width: 40rem) 90vw, 40rem" %}
```

- The shortcode will generate AVIF, WebP, and a fallback format automatically and output the appropriate `<img>` or `<picture>` markup.
- Widths default to `"auto"` if not specified.
- Output directory is `_site/img/`.

### Source locations
- You can reference images colocated next to content (e.g., `content/note/post-assets/img.png`) using a relative path from the page.
- Or reference assets inside `public/` (which pass through to the output site) using site-rooted paths.

### Performance defaults
- Includes `loading="lazy"` and `decoding="async"` attributes.
- Adds `width`/`height` to avoid layout shift.

### Notes
- AVIF can be resource intensive to generate. Consider limiting widths for large images if build times are high.
- For pure passthrough images that don’t require processing, place them in `public/` and reference by URL.