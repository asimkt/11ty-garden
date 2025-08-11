## Troubleshooting

### CSS not updating in dev
- Ensure the Tailwind entry `_includes/styles/tailwind.css` is saved; it is a watch target.
- Restart the dev server if adding new template paths that Tailwind needs to scan (update `tailwind.config.js` content globs accordingly).

### Wikilinks don’t resolve
- Confirm the target note has a `title` in front matter matching the wikilink text.
- Avoid typos and ensure file names don’t conflict.

### Images not rendering via shortcode
- Use paths relative to the page or an absolute path from the project root.
- Check that the source image exists and Eleventy has read access.

### Drafts appearing in production
- Production builds exclude drafts by default. If drafts appear, verify that `BUILD_DRAFTS` is not set in the environment.

### CSP violations (inline styles)
- Switch from inline CSS to external bundle in `layouts/base.njk` by replacing `{% getBundle "css" %}` with a `<link>` referencing `{% getBundleFileUrl "css" %}`.

### Build is slow due to images
- Reduce the number of widths generated in the shortcode.
- Remove `avif` if unnecessary, or limit use to large hero images.

### Dev server not reloading on content changes
- Ensure files are within the configured input directory (`content/`).
- Verify watch targets and that the server is running with `npm run start`.