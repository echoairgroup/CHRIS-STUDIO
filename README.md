# CHRIS.STUDIO

A multi-page personal portfolio and project directory for Chris, built as a lightweight static website.

## Experience

- Bold editorial visual identity with a dark, high-contrast palette, lime and aqua accents, custom CSS illustrations and responsive layouts.
- Studio homepage introducing the work and highlighting selected projects.
- Website directory separating published destinations from repository-first and full-stack projects.
- Searchable, filterable project collection with categories and direct source links.
- About, Journey, Contact and custom 404 pages using the same navigation and design system.
- Accessible mobile navigation, keyboard support, reduced-motion handling and responsive layouts.

## Project collection

The portfolio covers Echo Air Group, HUMANITY, SKYLINE, WebControl, FlyTech / Flightdeck EFB, Flightdeck Academy, Airport Tycoon, AeroDeck, TowerATC, My Life Dashboard, Personal Startpage and early aviation prototypes.

The website descriptions distinguish public site destinations from local-first tools, desktop software, projects requiring a backend, and repositories that are still being developed. A repository link does not imply that every backend or integration is online.

## Stack

Semantic HTML, custom responsive CSS and vanilla JavaScript. No framework or build step is required. Google Fonts are loaded from the Google Fonts CDN with local system fallbacks.

## Pages

- index.html — studio homepage and selected work
- websites.html — website and browser-project directory
- projects.html — searchable project collection
- about.html — the person and interests behind the studio
- journey.html — the approach and build process
- contact.html — public project and GitHub links
- 404.html — branded not-found page

## Deploy

The workflow in .github/workflows/pages.yml publishes the site when changes are pushed to main.

In repository settings, open Pages and set the build source to GitHub Actions.

Expected website:
https://echoairgroup.github.io/CHRIS-STUDIO/

## Updating content

Project descriptions and destinations are maintained in projects.html and websites.html. Shared visual styling lives in styles.css; navigation, filtering and small interactions live in script.js.

No pretend visitor counter, fake live-status monitor, or insecure client-side admin panel is included.
