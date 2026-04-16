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

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top-right corner and select **New repository**
3. Enter a repository name (e.g., `yourusername.github.io` or any name like `profile-blog`)
4. Choose **Public** or **Private** (Public is recommended for portfolios)
5. **Do not** initialize with a README, .gitignore, or license (you already have these)
6. Click **Create repository**

### Step 2: Push Your Code to GitHub

1. **Open Terminal** and navigate to your project folder:
   ```bash
   cd /path/to/profile-blog-site
   ```

2. **Add GitHub as the remote repository** (replace `yourusername` and `repo-name`):
   ```bash
   git remote add origin git@github.com:yourusername/repo-name.git
   ```
   
   If you already have a remote configured, update it:
   ```bash
   git remote set-url origin git@github.com:yourusername/repo-name.git
   ```

3. **Verify the remote** (optional):
   ```bash
   git remote -v
   ```

4. **Stage all files**:
   ```bash
   git add .
   ```

5. **Commit your changes**:
   ```bash
   git commit -m "Initial commit: profile blog site"
   ```

6. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```
   
   If your default branch is `master`:
   ```bash
   git push -u origin master
   ```

### Step 3: Configure GitHub Pages

1. **Navigate to your repository** on GitHub:
   ```
   https://github.com/yourusername/repo-name
   ```

2. **Go to Settings**:
   - Click the **Settings** tab (may require clicking "More" dropdown first)

3. **Find Pages settings**:
   - Scroll down to the **Pages** section in the left sidebar (or click **Pages** under "Code and automation")

4. **Configure source**:
   - Under **Source**, select **Deploy from a branch**
   - Under **Branch**, select:
     - Branch: `main` (or `master`)
     - Folder: `/ (root)`
   - Click **Save**

5. **Wait for deployment**:
   - GitHub will build and deploy your site (takes 1-2 minutes)
   - You can check progress at **Settings → Pages → Site deployment**

### Step 4: Verify Your Site is Live

1. **Visit your site URL**:
   - For user/organization sites: `https://yourusername.github.io/repo-name/`
   - For repository-specific sites: `https://yourusername.github.io/` (if repo is named `yourusername.github.io`)

2. **Check for the custom domain option** (optional):
   - In Settings → Pages, you can add a custom domain if you have one

### Troubleshooting

**"Your site is live" but site looks broken:**
- Ensure `_config.yml` has the correct `url` setting
- Check browser console for 404 errors

**Push fails with authentication error:**
- Use HTTPS URL instead: `https://github.com/yourusername/repo-name.git`
- You'll be prompted for GitHub credentials (use Personal Access Token if 2FA is enabled)

**GitHub Pages not showing:**
- Wait up to 5 minutes for initial deployment
- Check **Settings → Pages → Site deployment** for error messages
- Ensure your HTML files are in the root (not in a subfolder)

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