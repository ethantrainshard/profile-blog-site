---
layout: post
title: "Redis API Rate Limiter"
date: 2026-03-28 14:30:00
category: api
tags: [redis, nodejs, api]
excerpt: "A high-performance rate limiting service built with Redis for protecting APIs from abuse"
demo_url: "https://github.com/ethangoh/redis-rate-limiter"
github_url: "https://github.com/ethangoh/redis-rate-limiter"
stars: 189
forks: 31
last_updated: "2 weeks ago"
---

## Overview

Protect your APIs from abuse with this lightweight, high-performance rate limiting service. Built on Redis, it handles thousands of requests per second with sub-millisecond latency.

## Features

- **Multiple Algorithms**: Sliding window, token bucket, and fixed window support
- **Distributed**: Works seamlessly across multiple server instances
- **Real-time Dashboard**: Monitor rate limit usage in real-time
- **Flexible Configuration**: Per-user, per-IP, or per-endpoint limits
- **Redis Cluster Support**: Scale horizontally with Redis Cluster

## Usage Example

```javascript
const rateLimiter = require('redis-rate-limiter');

app.use(rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  keyGenerator: (req) => req.ip
}));
```

## Performance

- Handles 50,000+ requests/second
- Sub-millisecond response time
- Less than 1MB memory per 10,000 keys

## Use Cases

- Protect authentication endpoints
- Prevent API abuse
- Enforce tiered pricing limits
- DDoS mitigation layer
