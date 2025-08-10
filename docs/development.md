## Development

### Prerequisites
- Node.js 16.x (see `.nvmrc`) or Node >= 14 (per `package.json` engines)
- npm 8+

### Setup
```bash
npm install
```

### Scripts
- `npm run start` — Start Eleventy dev server with live reload
- `npm run build` — Production build into `_site/`
- `npm run debug` — Build with Eleventy debug logs
- `npm run debugstart` — Serve with Eleventy debug logs
- `npm run benchmark` — Benchmark Eleventy timings

### Directory configuration
Configured in `eleventy.config.js`:
- Input: `content/`
- Includes: `_includes/`
- Data: `_data/`
- Output: `_site/`

### Drafts workflow
Draft content is included automatically when running the dev server (`--serve`/`--watch`) and excluded in production builds.
- Mark any Markdown file with `draft: true` in front matter to treat as a draft.
- To include drafts in a full build, set `BUILD_DRAFTS=true` in the environment.

### Linting/formatting
This starter does not prescribe a linter. You can add ESLint/Prettier if desired.

### Running a local production preview
To emulate a production build locally:
```bash
npm run build
npx npx serve _site  # or any static file server
```

### Debugging
Enable detailed logs:
```bash
npm run debug
```
Use `DEBUG=Eleventy*` env var for granular control.