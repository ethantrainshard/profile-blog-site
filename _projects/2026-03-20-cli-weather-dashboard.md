<!-- ---
layout: project
title: "WeatherCLI - Terminal Weather Dashboard"
date: 2026-03-20 16:45:00
category: web
tags: [python, cli, weather]
excerpt: "Beautiful weather information displayed directly in your terminal with ASCII art visualizations"
demo_url: "https://github.com/ethangoh/weather-cli"
github_url: "https://github.com/ethangoh/weather-cli"
stars: 428
forks: 73
last_updated: "5 days ago"
---

## Overview

Never check the weather on your phone again. WeatherCLI brings beautiful, at-a-glance weather information directly to your terminal with ASCII art visualizations.

## Features

- **ASCII Weather Icons**: See sun, clouds, rain, and snow directly in your terminal
- **7-Day Forecast**: Complete weekly forecast with temperature graphs
- **Multiple Locations**: Save and switch between favorite locations
- **Customizable Themes**: Choose from 8 pre-built color schemes
- **Widget Mode**: Display current conditions as your terminal prompt

## Demo

```
$ weather current --location="San Francisco"

  🌤️ San Francisco, CA
  ━━━━━━━━━━━━━━━━━━━━━━
  Temperature:  68°F (20°C)
  Condition:    Partly Cloudy
  Humidity:     65%
  Wind:         12 mph NW
  ━━━━━━━━━━━━━━━━━━━━━━

  7-Day Forecast:
  Mon  Tue   Wed   Thu   Fri   Sat   Sun
   68°   72°   65°   62°   70°   75°   69°
  ⛅    ☀️    🌧️   🌧️   ☀️    ☀️    ⛅
```

## Installation

```bash
pip install weather-cli
# Or via Homebrew on macOS
brew install ethangoh/formulas/weather-cli
```

## Configuration

Edit `~/.weathercli/config.yaml` to customize your experience:

```yaml
location: "New York"
units: "imperial"  # or "metric"
theme: "dracula"
auto_update: true
update_interval: 30  # minutes
```

## Built For Developers

Perfect for devs who live in the terminal and want quick weather checks without context switching. -->
