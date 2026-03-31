# Profile Blog Site

A personal portfolio and blog built with Jekyll, hosted on GitHub Pages.

## Features

- 🎨 Modern, responsive design with dark/light mode
- 📝 Markdown-based blog posts
- 🌙 Theme toggle with localStorage persistence
- 📱 Mobile-friendly navigation
- ⚡ Fast static site generation
- ♿ WCAG AA accessible design

## Getting Started

### Prerequisites

- [Ruby](https://www.ruby-lang.org/) version 3.0 or higher
- [Homebrew](https://brew.sh/) (recommended for Ruby version management)

### Installation

1. **Install Ruby 3.x (if not already installed):**
   ```bash
   brew install rbenv ruby-build
   rbenv install 3.2.0
   rbenv global 3.2.0
   ```

2. **Install Jekyll and dependencies:**
   ```bash
   cd profile-blog-site
   bundle install
   ```

3. **Start the local server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser:**
   Navigate to [http://localhost:4000](http://localhost:4000)

## Project Structure

```
profile-blog-site/
├── _config.yml              # Site configuration
├── _posts/                  # Blog posts (Markdown files)
├── _layouts/                # Page templates
├── _includes/               # Reusable components
├── css/                     # Stylesheets
├── js/                      # JavaScript files
├── assets/                  # Images, fonts, icons
├── index.html               # Home page
├── about.md                 # About page
├── projects.html            # Projects page
├── blog.html                # Blog index
├── contact.html             # Contact page
├── PRD.md                   # Product requirements
├── CLAUDE.md                # Project documentation
└── README.md                # This file
```

## Creating a New Blog Post

1. Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`
2. Add front matter at the top:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2024-06-15 14:00:00
   category: category-name
   tags: [tag1, tag2]
   excerpt: "Short description of your post"
   demo_url: ""
   github_url: ""
   ---
   ```
3. Write your content in Markdown below the front matter
4. Restart the Jekyll server or wait for auto-reload

## Configuring the Site

Edit `_config.yml` to personalize your site:

```yaml
name: "Your Name"
description: "Your professional description"
url: "https://yourusername.github.io"
github: "yourusername"
linkedin: "yourusername"
twitter: "yourusername"
email: "your@email.com"
```

## Customization

### Theme Colors

Edit CSS variables in `css/main.css` to customize colors:

```css
:root {
  --color-primary: #2563eb;
  --color-bg: #ffffff;
  /* ... */
}
```

### Dark Mode

The site automatically detects your system's dark mode preference. Users can toggle themes using the sun/moon icon in the navigation.

## Building for Production

```bash
bundle exec jekyll build
```

The output will be in the `_site` directory.

## Deploying to GitHub Pages

1. **Create a GitHub repository** and push your code
2. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select branch `main`
   - Click Save
3. **That's it!** Your site will be live at `https://yourusername.github.io`

## Custom Domain

1. Add a `CNAME` file to the root with your domain:
   ```
   www.yourdomain.com
   ```
2. Go to your domain's DNS settings
3. Add an A record pointing to GitHub's IP addresses
4. Or add a CNAME record pointing to `yourusername.github.io`

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## License

This project is open source and available under the MIT License.