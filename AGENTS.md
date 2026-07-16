# Project Context

## Overview

Personal website for Ricardo Vargas - a static HTML/CSS site hosted on GitHub Pages.

## Project Structure

```
├── index.html              # Single page with all content
├── styles/
│   └── styles.css          # Main stylesheet (only file to consider)
├── assets/
│   ├── images/             # SVG icons, profile photo, social preview
│   └── curriculum/         # PDF CV
├── favicon.ico
├── manifest.json
├── robots.txt
└── browserconfig.xml
```

## HTML Structure (index.html)

The page has two main sections:

### Header (`header.header`)
- `.header__title` - Contains h1 (name) and h2 (role)
- `.header__social` - LinkedIn and GitHub links with SVG icons

### Main (`main#content`)
- `.about` - Profile picture (`.profile-pic`), bio paragraphs, CV download button (`.cv-btn`)
- `.soft-skills` - List of 8 soft skills, each with:
  - `.div-img` - SVG icon wrapper
  - `.title` - Skill heading

## CSS Variables

All values are defined in `:root`:

### Colors
- `--color-bg`: `#1a1a1d`
- `--color-text`: `#dddbdb`
- `--color-accent`: `#753a88` (purple)
- `--color-accent-secondary`: `#8d1e41` (dark pink/maroon)
- `--color-accent-pink`: `#cc2b5e`
- `--color-section-bg`: `#26262a`

### Fonts
- `--font-primary`: `'PT Sans', sans-serif`

### Typography
- `--font-size-base`: `1.1em`
- `--font-size-title`: `1.8em`
- `--font-size-subtitle`: `1.2em`

### Spacing
- `--spacing-section-mobile`: `2rem 1rem`
- `--spacing-section-desktop`: `3rem 5rem`
- `--spacing-icon-small`: `40px`
- `--spacing-icon-large`: `80px`

## CSS Organization

1. CSS Reset
2. CSS Variables (`:root`)
3. Global styles (body, p, a)
4. Global classes (`.profile-pic`, `.cv-btn`)
5. Header styles
6. About styles
7. Soft Skills styles
8. Media queries (`@media (min-width: 801px)`)

## Responsive Design

- **Mobile-first** approach
- Two breakpoints: mobile (default) and fullscreen (`min-width: 801px`)
- Mobile: single column layout, centered elements
- Desktop: flexbox row layouts, grid for soft-skills

## BEM Methodology

All CSS classes follow BEM naming convention:
- **Block**: `.block` (e.g., `.header`, `.about`, `.soft-skills`)
- **Element**: `.block__element` (e.g., `.header__title`, `.header__social`)
- **Modifier**: `.block--modifier` or `.block__element--modifier`

## Guidelines

- Only modify `styles/styles.css` for styling
- Follow BEM methodology for all new/modified CSS
- Use CSS variables for colors, fonts, and spacing
- Maintain the dark theme color palette
- Preserve existing transitions and hover effects
- **Responsive approach**: Build mobile-first, then add `@media (min-width: ...)` breakpoints for larger screens. Always start from the smallest screen and scale up.
