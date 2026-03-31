# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal Profile & Blog Platform - a static website for GitHub Pages showcasing professional portfolio and blog content. The site is designed for recruiters, clients, and readers to view experience, projects, and insights.

## Tech Stack

**Static Site Generation Options:**
- Jekyll (Ruby-based, GitHub Pages native)
- Hugo (Go-based, fast)
- Astro (modern, excellent performance)
- Plain HTML/CSS/JavaScript (simplest, no build process)

The choice should be based on:
- Desired syntax simplicity
- Required functionality (e.g., Markdown content management)
- Performance requirements
- Familiarity with the ecosystem

**Key Technologies:**
- CSS3 (optionally SASS/SCSS for complex styling)
- Minimal JavaScript (for dark mode toggle, mobile menu)
- Semantic HTML5
- Responsive design (mobile-first approach)

## Project Structure

```
profile-blog-site/
├── _posts/           # Blog content (Jekyll) or similar
├── _includes/        # Reusable components
├── _layouts/         # Page templates
├── css/              # Stylesheets
├── js/               # JavaScript files
├── assets/           # Images, fonts, icons
├── PRD.md            # Product requirements document
└── CLAUDE.md         # This file
```

## Common Development Tasks

**Creating a new page:**
- Add HTML file to appropriate directory
- Use semantic tags: `<header>`, `<main>`, `<footer>`
- Include responsive CSS classes

**Adding blog posts:**
- Create markdown files with front matter
- Follow consistent naming convention (YYYY-MM-DD-title.md)
- Include title, date, and tags in front matter

**Styling:**
- Use CSS variables for theme colors (light/dark mode support)
- Implement responsive design patterns (media queries)
- Follow mobile-first approach
- Ensure WCAG AA contrast ratios for accessibility

## Key Requirements from PRD

- **Performance:** < 3 seconds load time
- **SEO:** Meta tags, semantic HTML, sitemap/robots.txt
- **Accessibility:** Keyboard navigation, 16px+ font sizes, WCAG AA contrast
- **Dark/Light Mode:** Toggle saved in localStorage
- **Responsive:** Works on mobile, tablet, desktop
- **Smooth Scrolling:** For navigation links
- **No native alerts:** Use UI elements for notifications

## Deployment

**GitHub Pages:**
- Push to `main` branch
- Site auto-deploys (no manual deployment needed)
- Optionally configure custom domain

## Development Notes

- This is a static site - no backend, no database
- Content management is file-based (Markdown for blog posts)
- Minimal JavaScript usage for interactivity only
- All assets served directly from repository