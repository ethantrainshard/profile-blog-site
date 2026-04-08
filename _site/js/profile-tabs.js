// LinkedIn-style profile layout tab switching with tag filtering
(function() {
  'use strict';

  const tabs = document.querySelectorAll('.content-tabs .tab');
  const views = document.querySelectorAll('.content-view');
  const clearFilterBtn = document.getElementById('clear-filter-btn');
  const dynamicTagsContainer = document.getElementById('dynamic-tags');
  const blogCards = document.querySelectorAll('.blog-card');

  // Current active filter tag
  let activeFilterTag = null;

  // Capitalize first letter of string
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Collect all unique tags from blog posts
  function collectTags() {
    const tagSet = new Set();
    blogCards.forEach(card => {
      const tags = card.dataset.tags.split(' ');
      tags.forEach(tag => tag && tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }

  // Render tags dynamically
  function renderTags() {
    const tags = collectTags();
    dynamicTagsContainer.innerHTML = tags
      .map(tag => `<span class="skill-tag tag-filter" data-tag="${tag}">${capitalize(tag)}</span>`)
      .join('');

    // Add click listeners to tags
    document.querySelectorAll('.tag-filter').forEach(tagEl => {
      tagEl.addEventListener('click', () => {
        const tag = tagEl.dataset.tag;
        filterByTag(tag);
      });
    });
  }

  // Filter blog posts by tag
  function filterByTag(tag) {
    activeFilterTag = tag;
    const normalizedTag = tag.toLowerCase();

    // Update tag active states
    document.querySelectorAll('.tag-filter').forEach(t => {
      t.classList.toggle('filter-active', t.dataset.tag === normalizedTag);
    });

    // Show/hide clear button
    clearFilterBtn.classList.toggle('hidden', !activeFilterTag);

    // Filter posts
    blogCards.forEach(card => {
      const cardTags = card.dataset.tags;
      if (!activeFilterTag || cardTags.includes(normalizedTag)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Clear active filter
  function clearFilter() {
    activeFilterTag = null;

    // Reset tag states
    document.querySelectorAll('.tag-filter').forEach(t => {
      t.classList.remove('filter-active');
    });

    clearFilterBtn.classList.add('hidden');

    // Show all posts
    blogCards.forEach(card => {
      card.style.display = '';
    });
  }

  function showView(tabName) {
    // Update tab states
    tabs.forEach(tab => {
      const isActive = tab.dataset.tab === tabName;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive);
    });

    // Update view visibility
    views.forEach(view => {
      const isVisible = view.id === `${tabName}-view`;
      view.classList.toggle('hidden', !isVisible);

      // If showing blog view, render tags if not already done
      if (isVisible && tabName === 'blog') {
        if (!dynamicTagsContainer.innerHTML) {
          renderTags();
        }
      }
    });

    // Hide tags section and reset filter when switching to experience
    if (tabName === 'experience') {
      clearFilter();
    }
  }

  // Initialize tab event listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      showView(tab.dataset.tab);
    });

    // Keyboard navigation
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIndex = Array.from(tabs).indexOf(tab);
        const nextIndex = e.key === 'ArrowLeft'
          ? (currentIndex - 1 + tabs.length) % tabs.length
          : (currentIndex + 1) % tabs.length;
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      }
    });
  });

  // Clear filter button click
  if (clearFilterBtn) {
    clearFilterBtn.addEventListener('click', clearFilter);
  }

  // Set initial state
  showView('experience');
})();
