# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Kleva Sales Deck** is a single-file interactive HTML presentation for Kleva's AI collections platform. This is a static website built with vanilla HTML, CSS, and JavaScript without any build process or external dependencies.

## Architecture & Structure

- **Single-File Application**: The entire presentation is contained in `index.html` (1,380 lines)
- **Pure Web Technologies**: No frameworks, no build tools, no package.json - just vanilla HTML/CSS/JS
- **Self-Contained**: All CSS and JavaScript are embedded within the HTML file
- **Static Deployment Ready**: Can be served directly from any web server or static hosting

### Key Components

1. **CSS Variables System**: Uses CSS custom properties for theming (colors, fonts, animations)
2. **Scroll-Snap Navigation**: Implements smooth slide transitions using CSS scroll-snap
3. **JavaScript Navigation**: Event listeners for keyboard navigation and scroll tracking
4. **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
5. **Brand System**: Consistent color scheme and typography throughout

## Development Commands

Since this is a static HTML project, there are no build commands. However, here are the most useful development workflows:

### Local Development
```bash
# Open in browser (macOS)
open index.html

# Or serve locally (if you have Python)
python -m http.server 8000
# Then visit http://localhost:8000

# Or with Node.js http-server
npx http-server .
```

### Deployment
```bash
# Deploy to GitHub Pages, Vercel, Netlify, or any static hosting
# No build step required - just upload index.html and README.md
```

### Testing
```bash
# Test on different devices/browsers manually
# Validate HTML
npx html-validate index.html

# Check lighthouse performance
npx lighthouse-cli http://localhost:8000
```

## Code Organization

The streamlined `index.html` is structured as:

1. **Head Section** (lines 1-7): Meta tags, title, Google Fonts
2. **CSS Styles** (lines 8-532): All styling including:
   - CSS variables and reset
   - Typography system
   - Component styles (slides, navigation, metrics)
   - Responsive breakpoints
   - Animations and transitions
3. **HTML Content** (lines 537-920): 6 focused presentation slides with:
   - Bank-focused messaging
   - Cost savings and compliance metrics
   - Simple pricing and call-to-action
4. **JavaScript** (lines 925+): Navigation logic including:
   - Slide scrolling and dot navigation
   - Keyboard event handlers
   - Intersection Observer for animations

## Brand Assets & Design System

### Colors (CSS Variables)
- `--clr-black`: Primary background (0, 0, 0)
- `--clr-white`: Text and accents (255, 255, 255)  
- `--clr-pink`: Brand accent (213, 51, 156)
- `--clr-gray`: Secondary text (192, 192, 192)

### Typography
- **Sans Serif**: Hanken Grotesk (primary)
- **Monospace**: IBM Plex Mono (accents, metrics)

### Layout Patterns
- **Slide Container**: Full viewport height with scroll-snap
- **Metric Cards**: Grid-based components with hover effects
- **Logo System**: Consistent K logo with text treatment

## Navigation & Interaction

- **Keyboard**: Arrow keys, spacebar for slide navigation
- **Mouse**: Dot navigation on right side
- **Touch**: Swipe gestures on mobile
- **Smooth Scrolling**: CSS scroll-behavior with JavaScript fallback

## Mobile Optimization

The presentation is fully responsive with:
- Flexible typography scaling
- Mobile-optimized layouts
- Touch-friendly navigation
- Viewport-aware sizing

## Content Structure

The deck contains 6 focused slides for bank sales:
1. **Title Slide** - AI Collections Agent for Banks with key metrics
2. **Problem** - High costs and poor results of human call centers
3. **Solution** - AI agent with better results, compliance, and instant scale
4. **How It Works** - 4 key capabilities: Natural Voice, Smart Negotiation, Compliance, Scale
5. **Proven Results** - 900K+ minutes monthly, active across 3 countries
6. **Pricing & Next Steps** - Simple $0.17/minute pricing with demo CTA

## Performance Considerations

- **Single HTTP Request**: Everything in one file minimizes network requests
- **Optimized Assets**: Uses web fonts and minimal external resources
- **Efficient CSS**: Uses modern layout techniques (Grid, Flexbox)
- **Smooth Animations**: CSS transitions with cubic-bezier easing
- **Lazy Loading**: Intersection Observer for slide animations

## Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Features**: Scroll-snap, CSS Grid, CSS variables, Flexbox
- **JavaScript**: ES6+ features, Intersection Observer API