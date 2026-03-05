# CreatorOS — The Ultimate Notion System for Content Creators

> A high-converting, fully responsive digital product sales page built with vanilla HTML, CSS, and JavaScript. Designed and developed as a frontend portfolio project by **Eniola Sulaiman**.

![CreatorOS Preview](https://eniola-sulaiman.github.io/creator-os/preview.png)

🔗 **[View Live Demo](https://eniola-sulaiman.github.io/creator-os/)**

---

## About the Project

CreatorOS is a fictional Notion template product targeting content creators — YouTubers, X (Twitter) writers, Instagram creators, freelancers, and solo founders. This project is a fully hand-coded sales page designed to demonstrate real-world frontend skills: conversion-focused copywriting layout, component design, and interactive UI — all without a single framework or library.

The page uses the **PAS (Problem–Agitate–Solution)** conversion framework, a pattern common in high-performing digital product landing pages.

---

## Features

- **Sticky navigation bar** that slides in on scroll with live pricing and CTA
- **Interactive Notion dashboard mockup** built entirely in HTML & CSS — no images
- **Tabbed demo section** with three switchable views: Analytics, Deals Pipeline, and Weekly Planner
- **Live countdown timer** with real-time seconds tick, driving urgency on the launch offer
- **Scroll-triggered fade-up animations** using the Intersection Observer API
- **FAQ accordion** with smooth open/close toggle
- **Value stacking pricing section** with guarantee badge and feature checklist
- **Fully SVG-based iconography** — zero emoji, zero icon fonts, zero external icon libraries
- **Responsive layout** that adapts cleanly from desktop down to mobile
- **No frameworks. No build tools. No dependencies.** Pure HTML, CSS, and vanilla JS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — custom properties, CSS Grid, Flexbox, clamp(), animations |
| Interactivity | Vanilla JavaScript — Intersection Observer, DOM manipulation |
| Icons | Inline SVG (hand-picked, stroke-based) |
| Typography | Google Fonts — DM Serif Display + DM Sans |
| Hosting | GitHub Pages |

---

## Design Decisions

- **Color system** built on CSS custom properties for consistency and easy theming
- **`clamp()` typography** scales fluidly between mobile and desktop — no media query breakpoints needed for font sizes
- **Overflow controlled per-section** rather than globally on `body`, avoiding sticky element clipping bugs
- **`min-width: 0` on all grid children** to prevent content from escaping grid tracks
- **SVG icons use `stroke="currentColor"`** so they inherit color from their parent and adapt to dark/light contexts automatically
- **Dark sections** (`#problem`, `#demo`, `#final-cta`) use `overflow: hidden` locally to contain radial gradient backgrounds without disrupting the scroll layer
- Light-mode dominant with a soft indigo accent (`#6366F1`) and deep charcoal primary (`#111827`)

---


## Getting Started

No build step required. Clone the repo and open `index.html` directly in your browser.

```bash
git clone https://github.com/eniola-sulaiman/creator-os.git
cd creator-os
open index.html
```

Or view the hosted version: **[eniola-sulaiman.github.io/creator-os](https://eniola-sulaiman.github.io/creator-os/)**

---

## Author

**Eniola Sulaiman**
Frontend Developer & UI Designer

- 🌐 [GitHub](https://github.com/eniola-sulaiman)
- 📘 [Facebook](https://www.facebook.com/share/19uAfN1mr4/)
- 📸 [Instagram](https://instagram.com/ennyboss_dev)
