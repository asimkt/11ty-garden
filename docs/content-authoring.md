## Content Authoring

### Where content lives
- All site content is under `content/`.
- Content can be Markdown (`.md`) or Nunjucks (`.njk`).

### Front matter basics
At minimum, posts typically include:
```yaml
---
title: My Post Title
date: 2024-01-31
# optional
description: Short summary for meta tags
layout: layouts/post.njk
# mark as draft during authoring
# draft: true
---
```

### Collections and tags
- Any file with the `posts` tag is treated as a blog post and will be collected into `collections.posts`.
- This project adds the `posts` tag to all notes via `content/note/note.11tydata.js`.

### Navigation
Top-level navigation is content-driven via the Eleventy Navigation plugin. Add to front matter:
```yaml
---
eleventyNavigation:
  key: Notes
  order: 1
---
```
Used in `layouts/base.njk` to render the menu.

### Wikilinks and embeds
This site enables Obsidian-style wiki linking via `@photogabble/eleventy-plugin-interlinker`:
- Link to another note by title: `[[Documenting Meeting]]`
- Embed the content of another note: `![[Documenting Meeting]]`

Tips:
- Ensure the target note has a `title` in front matter matching the wikilink text.
- Backlinks are surfaced on post pages when available.

### Feeds and sitemap
- Atom feed: `/feed/feed.xml` (`content/feed/feed.njk`)
- JSON feed: `/feed/feed.json` (`content/feed/json.njk`)
- Sitemap: `/sitemap.xml` (`content/sitemap/sitemap.xml.njk`)

### Special pages
- Home: `content/index.njk` (uses `layouts/home.njk` and `postslist.njk`)
- Notes index: `content/notes.njk`
- Tags list: `content/tags-list.njk`
- Individual tag page: `content/tags.njk`
- About page: `content/about/index.md`
- 404: `content/404.md`

### Global metadata
Edit `_data/metadata.js` to update site-wide metadata:
```js
module.exports = {
  title: "Site Title",
  url: "https://example.com/",
  language: "en",
  description: "Site description",
  author: { name: "Your Name", email: "you@example.com", url: "https://example.com/about/" },
};
```