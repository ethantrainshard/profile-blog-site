---
layout: post
title: "SnippetHub - Code Snippet Manager"
date: 2026-03-10 08:30:00
category: web
tags: [javascript, search, productivity]
excerpt: "Organize, search, and share code snippets with powerful tagging and full-text search"
demo_url: "https://github.com/ethangoh/snipphetub"
github_url: "https://github.com/ethangoh/snippethub"
stars: 203
forks: 35
last_updated: "1 week ago"
---

## Overview

SnippetHub is a powerful code snippet manager that helps developers organize their growing collection of code snippets. Features intelligent search, tagging, and seamless integration with popular IDEs.

## Features

- **Smart Search**: Full-text search with fuzzy matching and syntax highlighting
- **Organized Collections**: Group snippets by project, language, or custom folders
- **Tag System**: Flexible tagging with auto-suggestions and tag clouds
- **Multi-Language Support**: 50+ programming languages with syntax highlighting
- **IDE Integration**: VS Code, JetBrains, and Vim plugins available
- **Export Options**: Export to Gist, PDF, or printable format
- **Version History**: Track changes and revert to previous versions

## Demo

```javascript
// Search for "async await pattern"
// Results:
// - JavaScript async/await best practices
// - Python async/await patterns
// - C# async task handling
```

## Installation

```bash
# npm
npm install -g snippethub

# Docker
docker run -d -p 3000:3000 ethangoh/snippethub

# Self-hosted
git clone https://github.com/ethangoh/snippethub
cd snippethub && make build
```

## IDE Extensions

- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ethangoh.snippethub)
- [IntelliJ Plugin](https://plugins.jetbrains.com/plugin/18234-snippethub)
- [Vim Plugin](https://github.com/ethangoh/vim-snippethub)

## Privacy First

Self-hosted option available. All your code stays on your machine or your server.

## Built With

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Search**: Elasticsearch for powerful full-text search
- **Database**: PostgreSQL with full-text search capabilities
