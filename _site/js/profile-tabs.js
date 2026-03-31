// LinkedIn-style profile layout tab switching
(function() {
  'use strict';

  const tabs = document.querySelectorAll('.content-tabs .tab');
  const views = document.querySelectorAll('.content-view');

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
    });
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

  // Set initial state
  showView('experience');
})();
