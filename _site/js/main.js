// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const backButton = document.querySelector('.back-button');

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });
  }

  // Handle back button click
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = '/';
    });
  }
}

// Click Outside Menu to Close
function initClickOutsideMenu() {
  document.addEventListener('click', (event) => {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

    if (navLinks && mobileMenuToggle) {
      if (!navLinks.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    }
  });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}


// Project Filter Functionality
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');

          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'block';
            // Add fade-in animation for filtered cards
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
}

// Tag Filter Functionality
function initTagFilter() {
  const techTags = document.querySelectorAll('.tech-tag');
  const projectCards = document.querySelectorAll('.project-card');
  const projectsGrid = document.querySelector('.projects-grid');
  const projectsFilter = document.querySelector('.projects-filter');

  if (techTags.length === 0 || projectCards.length === 0) return;

  // Create clear button - place it in projects-filter, not inside grid
  const clearBtn = document.createElement('button');
  clearBtn.id = 'clear-tag-filter';
  clearBtn.className = 'clear-tag-btn';
  clearBtn.textContent = 'Clear Filter';
  clearBtn.style.display = 'none';

  if (projectsFilter) {
    projectsFilter.appendChild(clearBtn);
  }

  // Track active tags
  const activeTags = new Set();

  // Add click handlers to tags
  techTags.forEach(tag => {
    tag.style.cursor = 'pointer';
    tag.addEventListener('click', () => {
      const tagText = tag.textContent.toLowerCase();

      // Toggle active state
      if (activeTags.has(tagText)) {
        activeTags.delete(tagText);
        tag.classList.remove('active');
      } else {
        activeTags.add(tagText);
        tag.classList.add('active');
      }

      // Filter projects
      projectCards.forEach(card => {
        const cardTags = card.querySelectorAll('.tech-tag');
        const hasTag = Array.from(cardTags).some(t =>
          activeTags.has(t.textContent.toLowerCase())
        );

        if (activeTags.size === 0 || hasTag) {
          card.style.display = 'block';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.addEventListener('transitionend', () => {
            card.style.display = 'none';
          }, { once: true });
        }
      });

      // Show/hide clear button
      clearBtn.style.display = activeTags.size > 0 ? 'block' : 'none';
    });
  });

  // Clear button handler
  clearBtn.addEventListener('click', () => {
    activeTags.clear();
    techTags.forEach(tag => tag.classList.remove('active'));
    projectCards.forEach(card => {
      card.style.display = 'block';
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
    clearBtn.style.display = 'none';
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
  initClickOutsideMenu();
  initProjectFilter();
  initTagFilter();

  // Add loading state to images for better UX
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeObserver.observe(el);
  });
});