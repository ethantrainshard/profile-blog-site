# LinkedIn-Style Profile Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the home page into a LinkedIn-style three-column layout with profile sidebar and tabbed content area.

**Architecture:** Use CSS Grid for the three-column layout, JavaScript for tab switching between Experience and Blog views, and reuse existing card/button styles.

**Tech Stack:** HTML5, CSS3 (Grid, Variables), Vanilla JavaScript

---

### Task 1: Create layout structure in index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace existing hero/content sections with new layout**

Remove the hero section and replace with three-column grid structure:

```html
<section class="profile-layout">
  <!-- Left Sidebar -->
  <aside class="left-sidebar">
    <!-- Profile card, contact info, skills will go here -->
  </aside>

  <!-- Center Column -->
  <main class="center-column">
    <!-- Tab navigation -->
    <nav class="content-tabs">
      <button class="tab active" data-tab="experience">Experience</button>
      <button class="tab" data-tab="blog">Blog</button>
    </nav>

    <!-- Experience view -->
    <div id="experience-view" class="content-view">
      <!-- Experience cards -->
    </div>

    <!-- Blog view -->
    <div id="blog-view" class="content-view hidden">
      <!-- Blog cards -->
    </div>
  </main>

  <!-- Right Sidebar (optional) -->
  <aside class="right-sidebar">
    <!-- Reserved for future use -->
  </aside>
</section>
```

- [ ] **Step 2: Commit changes**

```bash
git add index.html
git commit -m "chore: add LinkedIn-style layout structure"
```

---

### Task 2: Implement left sidebar - profile card

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add profile card HTML**

Insert into `.left-sidebar`:

```html
<div class="profile-card">
  <div class="profile-header">
    <img src="/assets/images/profile.svg" alt="Ethan Goh" class="profile-photo">
    <h2 class="profile-name">Ethan Goh</h2>
    <p class="profile-headline">Software Engineer & Developer</p>
  </div>

  <div class="profile-actions">
    <a href="/contact" class="btn btn-primary">Contact</a>
    <button class="btn btn-outline" aria-label="Save profile">Save</button>
  </div>
</div>
```

- [ ] **Step 2: Commit changes**

```bash
git add index.html
git commit -m "feat: add profile card to left sidebar"
```

---

### Task 3: Add contact info and skills sections

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add contact info section**

After profile card:

```html
<div class="contact-info">
  <h3 class="section-label">Contact Info</h3>
  <div class="info-item">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
    <span>Singapore, SG</span>
  </div>
  <div class="info-item">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
    <span>500+ connections</span>
  </div>
  <div class="social-links-mini">
    <a href="https://github.com/ethangoh" target="_blank" aria-label="GitHub">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>
    <a href="https://linkedin.com/in/ethangoh" target="_blank" aria-label="LinkedIn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
    <a href="mailto:ethan@example.com" aria-label="Email">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </a>
  </div>
</div>
```

- [ ] **Step 2: Add skills section**

After contact info:

```html
<div class="skills-section">
  <h3 class="section-label">Skills</h3>
  <span class="skill-tag">JavaScript (12)</span>
  <span class="skill-tag">Python (8)</span>
  <span class="skill-tag">React (6)</span>
  <span class="skill-tag">Node.js (5)</span>
  <span class="skill-tag">PostgreSQL (4)</span>
</div>
```

- [ ] **Step 3: Commit changes**

```bash
git add index.html
git commit -m "feat: add contact info and skills to sidebar"
```

---

### Task 4: Add experience content

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add experience cards to experience-view**

```html
<div id="experience-view" class="content-view">
  <article class="experience-card">
    <div class="experience-header">
      <h3 class="job-title">Senior Software Engineer</h3>
      <p class="company">Tech Company Inc. | <span class="dates">Jan 2023 - Present</span></p>
      <p class="location">Singapore, SG</p>
    </div>
    <p class="experience-description">
      Leading development of scalable web applications, mentoring junior developers,
      and driving technical architecture decisions for high-traffic platforms.
    </p>
  </article>

  <article class="experience-card">
    <div class="experience-header">
      <h3 class="job-title">Software Engineer</h3>
      <p class="company">Startup Studio | <span class="dates">Jun 2020 - Dec 2022</span></p>
      <p class="location">Singapore, SG</p>
    </div>
    <p class="experience-description">
      Built and maintained multiple client projects using modern web technologies.
      Collaborated with design and product teams to deliver user-centric solutions.
    </p>
  </article>
</div>
```

- [ ] **Step 2: Commit changes**

```bash
git add index.html
git commit -m "feat: add experience section with job cards"
```

---

### Task 5: Add blog content to blog view

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add blog cards to blog-view**

```html
<div id="blog-view" class="content-view hidden">
  {% for post in site.posts limit: 5 %}
  <article class="blog-card">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <time class="post-date">{{ post.date | date: '%B %d, %Y' }}</time>
    <p class="blog-excerpt">{{ post.excerpt }}</p>
    <a href="{{ post.url }}" class="read-more">Read more →</a>
  </article>
  {% endfor %}
</div>
```

- [ ] **Step 2: Commit changes**

```bash
git add index.html
git commit -m "feat: add blog posts to blog tab view"
```

---

### Task 6: Add CSS for layout and components

**Files:**
- Modify: `css/main.css`

- [ ] **Step 1: Add grid layout styles**

Append to end of `css/main.css`:

```css
/* ============================================
   LINKEDIN-STYLE PROFILE LAYOUT
   ============================================ */

.profile-layout {
  display: grid;
  grid-template-columns: 25% 60% 15%;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 8rem 2rem 2rem;
}

/* Left Sidebar */
.left-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
}

.profile-header {
  margin-bottom: 1.5rem;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-primary);
  box-shadow: 0 0 40px rgba(255, 107, 53, 0.4);
}

.profile-name {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--color-text);
  margin: 1rem 0 0.5rem;
}

.profile-headline {
  color: var(--color-text-muted);
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.profile-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.profile-actions .btn {
  flex: 1;
  min-width: 120px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
}

.contact-info,
.skills-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1.5rem;
}

.section-label {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.info-item .icon {
  width: 16px;
  height: 16px;
  stroke: var(--color-primary);
}

.social-links-mini {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}

.social-links-mini a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text-muted);
  transition: var(--transition);
}

.social-links-mini a:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  box-shadow: var(--glow-primary);
}

.social-links-mini a svg {
  width: 20px;
  height: 20px;
}

.skills-section .skill-tag {
  display: inline-block;
  background: var(--color-surface-2);
  color: var(--color-text-muted);
  padding: 0.375rem 1rem;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0.25rem;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: var(--transition);
}

.skills-section .skill-tag:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* Center Column */
.center-column {
  min-height: 500px;
}

.content-tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2rem;
}

.content-tabs .tab {
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  cursor: pointer;
  position: relative;
  transition: var(--transition);
}

.content-tabs .tab:hover {
  color: var(--color-text);
}

.content-tabs .tab.active {
  color: var(--color-primary);
}

.content-tabs .tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  box-shadow: var(--glow-primary);
}

.content-view {
  display: block;
}

.content-view.hidden {
  display: none;
}

/* Experience Cards */
.experience-card {
  background: linear-gradient(145deg, var(--color-surface) 0%, var(--color-surface-2) 100%);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: var(--transition);
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 40px rgba(139, 92, 246, 0.2);
  border-color: var(--color-primary);
}

.experience-header {
  margin-bottom: 1rem;
}

.job-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.company {
  color: var(--color-text-muted);
  font-style: italic;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.dates {
  color: var(--color-secondary);
  font-size: 0.9rem;
}

.location {
  color: var(--color-text-dim);
  font-size: 0.85rem;
}

.experience-description {
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* Right Sidebar */
.right-sidebar {
  /* Reserved for future use */
}

/* Responsive */
@media (max-width: 1024px) {
  .profile-layout {
    grid-template-columns: 30% 70%;
  }

  .right-sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .profile-layout {
    display: flex;
    flex-direction: column;
    padding: 7rem 1.5rem 1.5rem;
  }

  .left-sidebar,
  .center-column {
    width: 100%;
  }

  .profile-photo {
    width: 150px;
    height: 150px;
  }

  .profile-name {
    font-size: 1.5rem;
  }

  .content-tabs .tab {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }

  .experience-card {
    padding: 1.5rem;
  }
}
```

- [ ] **Step 2: Commit changes**

```bash
git add css/main.css
git commit -m "style: add LinkedIn-style layout CSS"
```

---

### Task 7: Add JavaScript for tab switching

**Files:**
- Create: `js/profile-tabs.js`

- [ ] **Step 1: Create tab switching script**

```javascript
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

  // Focus trap for accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusableElements = document.querySelectorAll(
        '.content-tabs button, .profile-actions button, .profile-actions a, .experience-card a, .blog-card a'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });

  // Set initial state
  showView('experience');
})();
```

- [ ] **Step 2: Update default.html to include new script**

Modify `_layouts/default.html` to add the script before the closing body tag:

```html
  <script src="/js/profile-tabs.js"></script>
  <script src="/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Commit changes**

```bash
git add js/profile-tabs.js _layouts/default.html
git commit -m "feat: add tab switching functionality"
```

---

### Task 8: Verify and test

**Files:**
- None (manual testing)

- [ ] **Step 1: Start local Jekyll server**

```bash
bundle exec jekyll serve
```

- [ ] **Step 2: Test in browser**
- Navigate to localhost:4000
- Verify three-column layout on desktop
- Test tab switching between Experience and Blog
- Verify responsive design on tablet and mobile
- Test keyboard navigation between tabs
- Check accessibility with screen reader

- [ ] **Step 3: Commit any fixes**

```bash
git add .
git commit -m "fix: address any issues found during testing"
```

---

### Task 9: Final commit and push

- [ ] **Step 1: Ensure all changes are committed**

```bash
git status
```

- [ ] **Step 2: Push to main branch**

```bash
git push origin main
```

- [ ] **Step 3: Verify deployment on GitHub Pages**

Navigate to your GitHub Pages URL and verify the site deployed correctly.
