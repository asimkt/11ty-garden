## Deployment

### Production build
```bash
npm run build
```
Outputs to `_site/`.

### Netlify
A `netlify.toml` is included:
- Publish directory: `_site`
- Build command: `npm run build`
- Optional Lighthouse plugin to generate a report at `reports/lighthouse/index.html`.

To deploy:
- Connect the repository on Netlify and use the defaults from `netlify.toml`.
- Or drag-and-drop the `_site` folder to Netlify Drop.

### GitHub Pages / Other hosts
- Build locally or in CI and publish the `_site/` folder to your static host.
- For GitHub Pages on a project site with a subpath, you can use the `build-ghpages` script and configure `pathPrefix` if needed.

### Environment variables
- `BUILD_DRAFTS=true` — include drafts in a full build (not recommended for production).

### Base URL / Subdirectory deploys
If deploying to a subdirectory, update `pathPrefix` in `eleventy.config.js` and consider using the `EleventyHtmlBasePlugin` (already included) to rewrite absolute links.