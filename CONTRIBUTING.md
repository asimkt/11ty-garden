# Contributing

Thanks for your interest in contributing! This guide explains how to get set up and propose changes.

## Prerequisites
- Node.js 16.x (see `.nvmrc`) or Node >= 14
- npm 8+

## Setup
```bash
npm install
npm run start
```

## Making changes
1. Create a feature branch from `main`.
2. Make your changes with clear, descriptive commit messages.
3. Prefer small, focused pull requests.
4. Update or add documentation under `docs/` when relevant.

## Testing locally
- Run `npm run build` to ensure a clean production build.
- Optionally serve `_site/` locally to verify output.

## Coding style
- HTML/Nunjucks and Markdown should be readable and consistent with existing files.
- Tailwind utilities are preferred for styling. Keep custom CSS minimal and colocated in `_includes/styles/tailwind.css` or `public/css/` as appropriate.

## Submitting a Pull Request
- Open a PR with a clear description of the change, motivation, and screenshots if UI changes are involved.
- Link any related issues.

## License
By contributing, you agree that your contributions will be licensed under the repository’s MIT License.