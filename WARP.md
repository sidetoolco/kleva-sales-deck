# WARP.md - Kleva Sales Deck Project Guide

This file provides guidance to WARP when working with the Kleva Sales Deck project.

## Project Overview

**Kleva Sales Deck** is a conversion-focused interactive HTML presentation designed to convert leads into 30-day pilot program signups for Kleva's AI collections agent platform. This is a static website built with vanilla HTML, CSS, and JavaScript without any build process or external dependencies.

### Target Audience
- Fintechs
- Banks  
- Services companies
- Debt collection agencies

### Primary Goal
Sign leads up for a 30-day pilot program with zero pricing commitment.

## Architecture & Structure

- **Single-File Application**: Main presentation is `index.html` (~650 lines)
- **Pure Web Technologies**: Vanilla HTML/CSS/JS, no frameworks or build tools
- **Self-Contained**: All CSS and JavaScript embedded within HTML
- **Static Deployment**: Deploy directly to any web server or static hosting (Vercel)
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

### Key Components

1. **CSS Design System**: CSS custom properties for consistent theming
2. **Scroll-Snap Navigation**: Smooth slide transitions using native CSS
3. **JavaScript Navigation**: Event listeners for keyboard and dot navigation
4. **Brand Consistency**: Pink (#D5339C), white, black with Hanken Grotesk and IBM Plex Mono fonts
5. **Conversion Flow**: Hook → Problem → Solution → Proof → Offer → Urgency → CTA

## Presentation Structure (7-Slide Conversion Deck)

**Slide 1: Hook**
- Headline: "AI that recovers 25% more debt at 70% less cost"
- Subtitle: "Transform your debts with AI agents that never give up, never burn out, and speak perfect Spanish"
- Key metrics: 34% contact rate, +25% recovery gain, 65% cost savings
- Purpose: Emotional hook focused on outcome, not process

**Slide 2: Problem**
- Title: "Your Collections Blind Spot"
- Three-column comparison: Human Agents | Chatbots & IVR | Status Quo
- Reality check: "You're calling at 9am. Your customer answers at 6pm."
- Purpose: Establish pain points and create tension

**Slide 3: Solution**
- Title: "Kleva AI Agent - The collections agent that calls smarter, not harder"
- Four capabilities: Smart Timing, Native Language Mastery, Negotiation Logic, Always Available
- Purpose: Present differentiators

**Slide 4: Proof**
- Title: "Proven Results"
- Three customer case studies: VANA (Guatemala), ADT (Argentina), DIRECTV (Argentina)
- Global metric: 400K+ minutes processed monthly
- Purpose: Build credibility with real customer results

**Slide 5: Offer**
- Title: "30-Day Pilot Program"
- What You Get (6 items) | What We Measure (6 metrics)
- Timeline: Week 1 setup, Weeks 2-3 live, Week 4 analysis
- Purpose: Remove commitment barriers, clarify value measurement

**Slide 6: Urgency**
- Title: "Why Start This Month"
- Three drivers: Collections Push, Budget Allocation, Competitive Edge
- Purpose: Create time-sensitive pressure

**Slide 7: CTA**
- Title: "Ready to run the numbers on your portfolio?"
- Video: Short 2-minute product demo embedded between title and contact
- CTA: No primary button (video-focused final slide)
- Contact: ed@kleva.co | +1 (704) 816-9059 | linkedin.com/in/edjescobar
- Purpose: Drive understanding via demo, then direct contact

## Development Commands

### Local Development
```bash
open index.html                  # Open in browser (macOS)
python -m http.server 8000       # Serve locally
npx http-server .                # Or with Node.js
```

### Deployment
```bash
# Connected to Vercel - auto-deploys on push to main
git push origin main

# Or manually to any static host
# Upload: index.html, index-es.html, logos/, Vector 11.png, favicon.svg
```

### Testing
```bash
npx html-validate index.html
npx lighthouse-cli http://localhost:8000
```

## Files & Structure

```
kleva-sales-deck/
├── index.html           # Main conversion deck (7 slides, EN/ES toggle)
├── WARP.md              # Project guide for Warp
├── README.md            # Basic project info
├── favicon.svg          # Brand icon
├── Vector 11.png        # Decorative effect (final slide)
├── dia-app-kleva.mp4    # 2-minute demo video embedded in final slide
└── logos/
    ├── vana-logo.png    # VANA customer
    ├── adt.png          # ADT customer
    └── directv.png      # DIRECTV customer
```

## Brand & Design System

### Colors (CSS Variables)
- `--clr-black`: 0, 0, 0 (background)
- `--clr-white`: 255, 255, 255 (text/accents)
- `--clr-pink`: 213, 51, 156 (primary brand accent)
- `--clr-gray`: 192, 192, 192 (secondary text)

### Typography
- **Primary**: Hanken Grotesk (clean, modern sans-serif)
- **Accent**: IBM Plex Mono (numbers, metrics, technical text)
- Weights: 300 (light), 400 (regular), 600 (bold)

### Component Patterns
- Problem cards: 3-column grid, pink border
- Proof cards: Customer logos, centered metrics
- Capability items: 2-column layout, left-border accent
- CTAs: Solid pink button with hover shadow

## Key Differentiators

1. **Smart Timing**: AI calls when customers are most likely to answer (behavioral analysis)
2. **Language Expertise**: 45+ Spanish dialects, cultural context, native-like fluency
3. **Cost Efficiency**: 65% cheaper than human agents ($0.17/min vs $0.40/min)
4. **Recovery Performance**: 25% better recovery rate, 34% contact rate

## Navigation

Users can navigate with:
- Arrow keys (up/down or left/right)
- Spacebar (next slide)
- Dot indicators on right side (click to jump)
- Smooth scroll-snap behavior

## Customization Guide

### To Update Copy
- Edit slide headings, subtitles, and body text directly in HTML
- Keep accent text in `<span class="accent-text">` for pink coloring
- Search for "Slide X:" to find sections quickly
- For translations, update `data-en` and `data-es` attributes on elements (buttons, headings, paragraphs)

### To Update Metrics
- Hook slide (line ~412): Grid with 3 metric values
- Problem slide (line ~436): Three problem cards
- Solution slide (line ~481): Four capability items
- Proof slide (line ~515): Three customer cards

### To Change Colors
- Edit CSS variables in `:root` section (lines 16-24)
- `--clr-pink` controls primary accent color globally

### To Update Customer Logos
- Replace PNG files in `logos/` folder
- Update `<img src="logos/..."` tags with new filenames
- Ensure filenames have no spaces (use underscores or hyphens)

## Performance & Compatibility

- Single HTTP request minimizes load time
- No external dependencies = fast loading
- CSS animations use GPU acceleration
- Lazy animation on intersection observer
- Modern browsers: Chrome, Firefox, Safari, Edge (latest)
- Fully responsive from 320px and up

## Session Resume / Backlog (Enterprise Focus)

Use this to pick up the conversation quickly:

- Done: EN/ES toggle, full Spanish translations, embedded 2-min video, final slide copy improved, phone added
- Next: Add enterprise buyer content for banks (new slides or callouts):
  - Security & compliance: SOC2/ISO status, encryption, audit logs, data residency, CONDUSEF/CNBV alignment
  - Integration: API overview, typical timelines, supported connectors (CRM/collections/core banking)
  - Scale & reliability: uptime SLA, DR/BCP, multi-region
  - Risk & data: data ownership, exit plan, consent/recording policy
  - ROI model: calculator inputs/assumptions for large portfolios
  - Credibility: team, support model, references; competitor comparison (Genesys/NICE/Nuance, etc.)

When ready, add a slide titled "Enterprise-Grade for Banks" summarizing the above.

## Recent Changes

### October 22, 2025
- **Updated contact rate metric**: Changed from 73% to 34% in both Slide 1 (metrics grid) and Slide 4 (ADT proof card)
- **Removed "zero defaulted agreements" text**: Deleted this phrase from both English and Spanish in the Negotiation Logic section (Slide 3)
- **Removed customer names from proof cards**: Removed VANA, ADT, and DIRECTV text headings; logos now stand alone with industry descriptions only (Slide 4)
- **Comprehensive mobile responsive design**: Added three breakpoints (1024px, 768px, 480px) with:
  - All grids stack to single column on mobile
  - Typography scales down appropriately (h1: 70px → 36px → 28px)
  - Padding reduces progressively (80px → 40px → 30px)
  - Metrics grid stacks vertically on small screens
  - Navigation dots hidden on mobile
  - Language toggle repositioned and resized
  - Full-width CTA buttons on mobile
  - Optimized spacing and card padding for all screen sizes

### Previous Updates
- Added EN/ES language toggle with data-en/data-es attributes
- Translated the entire deck to Spanish (dynamic switch, single index.html)
- Embedded 2-minute demo video on final slide (dia-app-kleva.mp4)
- Removed "Start Your 30-Day Pilot" button from final slide; added improved copy
- Added contact phone number: +1 (704) 816-9059
- Updated messaging and final-slide text per latest copy

## Deployment Status

- **Primary URL**: https://kleva-sales-deck.vercel.app/index.html
- **Language**: EN/ES toggle within the same page (no separate Spanish URL)
- **Host**: Vercel (connected to GitHub repo)
- **Auto-deploy**: Yes (on push to main branch)

## Contact

- Ed Escobar: ed@kleva.co | +1 (704) 816-9059
- LinkedIn: linkedin.com/in/edjescobar
