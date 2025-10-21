# Kleva - AI Debt Collection Platform

## Project Overview

**Kleva** is an AI-powered debt collection platform that helps companies recover debt more efficiently using artificial intelligence agents. The platform specializes in Latin American markets, with AI agents that speak perfect Spanish and Portuguese.

### Key Value Proposition

- **25% more debt recovery** compared to traditional methods
- **70% less cost** than conventional collection approaches
- **900,000+ minutes monthly** of proven performance in Latin America
- AI agents that never quit, never burn out, and maintain consistent performance

## Technologies Used

### Core Framework & Build Tools

- **Astro 5.13.2** - Static site generator and web framework
- **TypeScript** - Type-safe JavaScript development
- **Sass/SCSS** - CSS preprocessing for styling
- **Vite** (via Astro) - Fast build tool and development server

### Frontend Technologies

- **React 19.1.1** - Component library for interactive elements
- **Astro Components** - Server-side rendered components
- **CSS Grid & Flexbox** - Modern layout systems
- **Responsive Design** - Mobile-first approach

### Content Management

- **Sanity CMS** - Headless content management system
  - Project ID: `f8pskp0q`
  - Dataset: `kleva`
  - API Version: `2025-01-28`
  - Studio accessible at `/sanity` route
- **Portable Text** - Rich text content format from Sanity
- **Image optimization** via Sanity's image URL service

### Deployment & Infrastructure

- **Vercel** - Hosting and deployment platform
- **Domain**: `https://www.kleva.co`
- **CDN**: Vercel's global edge network

### Development Tools

- **ESLint & TypeScript** - Code quality and type checking
- **Path aliases** - `@/*` mapped to `./src/*` for clean imports
- **Git** - Version control

## Project Structure

```
kleva/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── home/            # Homepage-specific components
│   │   │   ├── home-hero.astro
│   │   │   ├── home-capabilities.astro
│   │   │   ├── home-how-it-works.astro
│   │   │   ├── home-live-now.astro
│   │   │   ├── home-results.astro
│   │   │   ├── home-system.astro
│   │   │   └── home-qa.astro
│   │   ├── about/           # About page components
│   │   ├── blog/            # Blog-related components
│   │   ├── contact/         # Contact page components
│   │   └── buttons/         # Reusable button components
│   ├── pages/               # Route definitions (file-based routing)
│   │   ├── index.astro      # Homepage (/)
│   │   ├── about.astro      # About page (/about)
│   │   ├── contact.astro    # Contact page (/contact)
│   │   ├── blog/            # Blog pagination
│   │   └── post/            # Individual blog posts
│   ├── layouts/             # Page layout templates
│   ├── styles/              # SCSS stylesheets
│   │   ├── global.scss      # Global styles
│   │   ├── vars.scss        # CSS variables
│   │   ├── reset.scss       # CSS reset
│   │   └── mixins/          # SCSS mixins and utilities
│   ├── sanity/              # Sanity CMS configuration
│   │   ├── schemaTypes/     # Content type definitions
│   │   └── lib/             # Sanity utilities
│   ├── assets/              # Static assets (images, etc.)
│   ├── icons/               # SVG icons
│   └── js/                  # Client-side JavaScript
├── public/                  # Static files served directly
├── dist/                    # Built files (generated)
└── node_modules/           # Dependencies
```

## Key Features & Components

### Homepage Sections

1. **Hero Section** (`home-hero.astro`)
   - Video background with gradient overlay
   - Main value proposition: "AI that recovers 25% more debt at 70% less cost"
   - Call-to-action buttons for booking calls and learning more

2. **Live Demo** (`home-live-now.astro`)
   - Showcases AI in action with real collection calls

3. **Capabilities** (`home-capabilities.astro`)
   - Highlights AI agent capabilities and features

4. **How It Works** (`home-how-it-works.astro`)
   - Explains the process and methodology

5. **Results** (`home-results.astro`)
   - Performance metrics and success stories

6. **System Overview** (`home-system.astro`)
   - Technical details about the AI system

7. **Q&A Section** (`home-qa.astro`)
   - Frequently asked questions

### Content Management

- **Blog System**: Dynamic blog with pagination, categories, and authors
- **Post Schema**: Includes title, slug, author, category, reading time, brief, and rich content body
- **Author Management**: Author profiles with images and information
- **Category System**: Content categorization for blog posts

### Styling Architecture

- **CSS Custom Properties**: Consistent design tokens
- **SCSS Mixins**: Responsive breakpoints and reusable styles
- **Component-Scoped Styles**: Each Astro component has its own styles
- **Global Styles**: Typography, reset, and utility classes
- **Dark Theme**: Black background with white text and pink accents

### Navigation & Routing

- **File-based Routing**: Pages automatically created from file structure
- **Dynamic Routes**: Blog pagination and individual post pages
- **Mobile Navigation**: Responsive menu system
- **Scroll-to Functionality**: Smooth scrolling between sections

## Development Workflow

### Local Development

```bash
npm run dev          # Start development server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Content Management

- Sanity Studio accessible at `/sanity` route in development
- Content types: Posts, Authors, Categories, Block Content
- Real-time content updates via Sanity's live API

### Deployment

- Automatic deployment to Vercel on git push
- Static site generation for optimal performance
- Global CDN distribution

## Target Audience & Market

### Primary Market

- **Latin American companies** with debt collection needs
- **Financial institutions** looking to modernize collection processes
- **Collection agencies** seeking AI-powered efficiency improvements

### Languages Supported

- **Spanish** - Primary market language
- **Portuguese** - Secondary market (Brazil)
- **English** - Website and documentation

## Performance Characteristics

### Technical Performance

- **Static Site Generation**: Fast loading times
- **Image Optimization**: Automatic image processing via Sanity
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, structured data, semantic HTML

### Business Performance

- **Proven Results**: 900,000+ minutes of AI collection calls monthly
- **Cost Efficiency**: 70% reduction in collection costs
- **Recovery Rate**: 25% improvement in debt recovery
- **Scalability**: AI agents can handle unlimited concurrent calls

## Integration Points

### External Services

- **Sanity CMS**: Content management and media hosting
- **Vercel**: Hosting, deployment, and CDN
- **Video Hosting**: External video service for hero background

### API Endpoints

- Sanity API for content retrieval
- Image transformation API via Sanity
- Contact form handling (likely via Vercel functions)

This documentation provides a comprehensive overview of the Kleva project, its technical architecture, business purpose, and development workflow. The platform represents a modern, AI-powered approach to debt collection specifically designed for the Latin American market.
