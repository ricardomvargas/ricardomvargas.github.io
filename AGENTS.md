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
- `.header__title` - Contains `.header__name` (h1) and `.header__role` (h2)
- `.header__social` - `.header__social-link` anchors with `.header__social-icon` SVGs

### Main (`main#content`)
- `.about` > `.about__inner` - Intro: profile picture (`.profile-pic.about__photo`) and `.about__bio` with a single `.about__intro` paragraph
- `.expertise` - "What I do": `.expertise__list` of 3 `.expertise__item` cards, laid out at every size with the icon and title on one row and the text below (`.expertise__icon`, `.expertise__title`, `.expertise__text`; the AI card is `.expertise__item--featured` (full row on large screens) and has a `.expertise__tags` list of `.expertise__tag` pills), followed by `.expertise__cta` with the `.cv-btn` download button
- `.soft-skills` - `.soft-skills__header`/`.soft-skills__heading`, then `.soft-skills__list` of 8 `.soft-skills__item` cards, each with:
  - `.soft-skills__icon` / `.soft-skills__icon-img` - SVG icon wrapper
  - `.soft-skills__body` - `.soft-skills__title` (h2) and `.soft-skills__text`

## CSS Variables

All values are defined in `:root`:

### Colors
- `--color-bg`: `#1a1a1d`
- `--color-text`: `#dddbdb`
- `--color-accent`: `#753a88` (purple)
- `--color-accent-secondary`: `#8d1e41` (dark pink/maroon)
- `--color-accent-pink`: `#cc2b5e`
- `--color-section-bg`: `#26262a`

### Fonts (Google Fonts, loaded in index.html)
- `--font-primary`: `'Inter'` (body text)
- `--font-heading`: `'Space Grotesk'` (name, headings)

### Typography (fluid, using `clamp()`)
- `--font-size-base`, `--font-size-small`, `--font-size-subtitle`, `--font-size-title`, `--font-size-hero`

### Spacing
- `--container-width`: `1160px` (max content width)
- `--gutter`, `--section-padding-block` (fluid)
- `--spacing-section-mobile` / `--spacing-section-desktop` (desktop centers content within `--container-width`)
- `--spacing-icon-small` (social icons), `--spacing-icon-large` (soft-skill icons)

### Shape & motion
- `--radius-card`, `--radius-pill`, `--shadow-card`, `--transition-fast`, `--gradient-accent`

## CSS Organization

1. CSS Reset
2. CSS Variables (`:root`)
3. Global styles (body, p, a)
4. Global classes (`.profile-pic`, `.cv-btn`)
5. Header styles
6. About styles
7. Expertise styles
8. Soft Skills styles
9. Media queries (601px, 801px, 1101px, prefers-reduced-motion)

## Responsive Design

- **Mobile-first** approach
- Mobile (default): single column, centered header and photo, full-width CV button
- Tablet (`min-width: 601px`): soft-skills grid with 2 columns
- Desktop (`min-width: 801px`): header and about switch to rows, sticky profile photo
- Large desktop (`min-width: 1101px`): soft-skills grid with 4 columns; expertise grid with 2 columns, featured AI card spanning the full row

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
