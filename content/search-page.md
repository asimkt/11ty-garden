---
layout: layouts/base.njk
title: Search
eleventyNavigation:
  key: Search
  order: 3
---

<h1>Search</h1>

<input type="text" id="search-input" placeholder="Search for posts...">
<ul id="search-results"></ul>

<script>
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  let posts = [];

  window.addEventListener('load', async () => {
    const response = await fetch('/search.json');
    posts = await response.json();
  });

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (searchTerm.length === 0) {
      return;
    }

    const matchingPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm);
    });

    matchingPosts.forEach(post => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = post.url;
      a.textContent = post.title;
      li.appendChild(a);
      searchResults.appendChild(li);
    });
  });
</script>