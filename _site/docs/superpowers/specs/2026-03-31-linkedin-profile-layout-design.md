# LinkedIn-Style Profile Layout Design

**Date:** 2026-03-31
**Status:** Approved
**Project:** Profile & Blog Site

---

## Overview

Redesign the home page layout to follow LinkedIn's three-column information architecture while preserving the existing surreal vibrant color theme.

---

## Layout Structure

### Three-Column Grid (Desktop)

```
┌─────────────┬──────────────────┬─────────────┐
│             │                  │             │
│  Left       │    Center        │   Right     │
│  Sidebar    │    Column        │   Sidebar   │
│   (25%)     │     (60%)        │    (15%)    │
│             │                  │             │
└─────────────┴──────────────────┴─────────────┘
```

### Responsive Breakpoints

| Breakpoint | Left | Center | Right |
|------------|------|--------|-------|
| Desktop (> 1024px) | 25% | 60% | 15% |
| Tablet (768-1024px) | 30% | 70% | Hidden |
| Mobile (< 768px) | Stack (100%) | Stack (100%) | Hidden |

---

## Left Sidebar Components

### 1. Profile Card

**Elements:**
- Circular profile photo (200px diameter)
  - Border: 3px solid `var(--color-primary)` with glow effect
  - Existing `portraitGlow` animation preserved
- Name: Large serif font (Playfair Display, 2rem)
- Headline: Text-muted color, 1.125rem
- Action buttons: "Contact" (primary), "Save" (outline)

**CSS Class:** `.profile-card`

### 2. Contact Info Section

**Elements:**
- Location icon + "City, Country"
- Connection count: "500+ connections"
- Social links row: GitHub, LinkedIn, Email icons

**CSS Class:** `.contact-info`

### 3. Skills Section

**Elements:**
- Section header: "Skills"
- Skills listed as inline tags
- Endorsement count in parentheses
- Example: `JavaScript (12)`

**CSS Class:** `.skills-section`

---

## Center Column Components

### Tab Navigation

**Structure:**
- Two tabs: "Experience" | "Blog"
- Active tab: Bottom border in `var(--color-primary)`
- Inactive tab: Subtle gray border
- Smooth transition on hover

**CSS Class:** `.content-tabs`

### Experience View

**Job Card Structure:**
- Company name + logo placeholder
- Job title (bold, primary color)
- Company info (italic, muted)
- Employment dates + location
- Description paragraph
- Same card styling as blog cards (gradient background, border, hover effects)

**CSS Class:** `.experience-card`

### Blog View

**Blog Card Structure:**
- Title (gradient text effect)
- Excerpt
- Post date (green color)
- "Read more" link

**CSS Class:** `.blog-card` (existing styles reused)

---

## Color Scheme

All existing colors preserved from `css/main.css`:

```css
--color-bg: #1a0524;
--color-surface: #2d1438;
--color-surface-2: #3d1f4d;
--color-primary: #ff6b35;
--color-secondary: #ffbe0b;
--color-text: #fafafa;
--color-text-muted: #a78bba;
```

---

## Technical Implementation

### HTML Structure

```html
<section class="profile-layout">
  <!-- Left Sidebar -->
  <aside class="left-sidebar">
    <div class="profile-card">
      <img src="/assets/images/profile.svg" alt="Profile" class="profile-photo">
      <h2 class="profile-name">Ethan Goh</h2>
      <p class="profile-headline">Software Engineer & Developer</p>
      <div class="profile-actions">
        <button class="btn btn-primary">Contact</button>
        <button class="btn btn-outline">Save</button>
      </div>
    </div>

    <div class="contact-info">
      <p><svg>📍</svg> Singapore, SG</p>
      <p><svg>👥</svg> 500+ connections</p>
      <div class="social-links">
        <!-- GitHub, LinkedIn, Email icons -->
      </div>
    </div>

    <div class="skills-section">
      <h3>Skills</h3>
      <span class="skill-tag">JavaScript (12)</span>
      <span class="skill-tag">Python (8)</span>
      <span class="skill-tag">React (6)</span>
    </div>
  </aside>

  <!-- Center Column -->
  <main class="center-column">
    <nav class="content-tabs">
      <button class="tab active" data-tab="experience">Experience</button>
      <button class="tab" data-tab="blog">Blog</button>
    </nav>

    <div id="experience-view" class="content-view">
      <!-- Experience cards -->
    </div>

    <div id="blog-view" class="content-view hidden">
      <!-- Blog cards -->
    </div>
  </main>

  <!-- Right Sidebar (optional, reserved for future) -->
  <aside class="right-sidebar">
    <!-- Future: "People you may know" -->
  </aside>
</section>
```

### CSS Grid Layout

```css
.profile-layout {
  display: grid;
  grid-template-columns: 25% 60% 15%;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 8rem 2rem 2rem;
}

@media (max-width: 1024px) {
  .profile-layout {
    grid-template-columns: 30% 70%;
  }
}

@media (max-width: 768px) {
  .profile-layout {
    display: flex;
    flex-direction: column;
  }
}
```

### JavaScript Tab Switching

```javascript
const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.content-view');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active class to clicked tab
    tab.classList.add('active');

    // Hide all views
    views.forEach(v => v.classList.add('hidden'));
    // Show selected view
    const target = tab.dataset.tab;
    document.getElementById(`${target}-view`).classList.remove('hidden');
  });
});
```

---

## Component Reuse

**Existing styles to reuse:**
- `.project-card`, `.blog-card` - Same styling for experience cards
- `.tech-tag` - Same styling for skill tags
- `.btn`, `.btn-primary`, `.btn-outline` - Action buttons
- `.profile-image` - Profile photo styling
- All color variables from `:root`

**Minimal new CSS needed:**
- Grid layout for three-column structure
- Tab navigation styling
- Section-specific layouts (contact info, skills)

---

## Accessibility

- Tab buttons use proper ARIA attributes (`role="tab"`, `aria-selected`)
- Screen reader announces tab changes
- Keyboard navigation between tabs (Arrow Left/Right)
- Focus indicators on all interactive elements
- Maintains WCAG AA contrast ratios

---

## Success Criteria

1. Layout matches LinkedIn's information architecture
2. All existing color schemes preserved
3. Tab switching works smoothly without page reload
4. Responsive design works on mobile, tablet, desktop
5. No new external dependencies added
6. Performance remains < 3 seconds load time

---

## Future Enhancements (Out of Scope)

- Right sidebar "People you may know" section
- Skill endorsement interactions
- "Open to work" banner
- Experience card expand/collapse
- Blog post pagination in tab view
