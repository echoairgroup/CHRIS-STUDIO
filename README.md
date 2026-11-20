# CHRIS.STUDIO

A personal portfolio and directory of Chris's websites, aviation projects, games and tools.

## Design and experience

- Editorial layout with a warm paper background, restrained red accent and straightforward typography.
- Responsive navigation and clear hierarchy without decorative dashboard graphics or generic card grids.
- A website directory whose links open published project websites.
- A searchable and filterable project index.
- Dedicated explanations for projects that are desktop software or do not have a public website.
- About, Process, Contact and custom 404 pages.
- Keyboard-accessible navigation, semantic HTML and reduced-motion support.

## Collection

The portfolio covers Echo Air Group, HUMANITY, SKYLINE, WebControl, FlyTech / Flightdeck EFB, Flightdeck Academy, Airport Tycoon, AeroDeck, TowerATC, My Life Dashboard, Personal Startpage and early aviation prototypes.

Public website links are used wherever a web destination is available. Desktop software and local projects link to an explanation within this portfolio instead of a source repository.

## Stack

Semantic HTML, custom responsive CSS and vanilla JavaScript. No framework or build step is required.

## Pages

- index.html — homepage and selected work
- websites.html — published website directory
- projects.html — searchable project index
- project-details.html — notes for desktop and early-stage projects
- about.html — background and interests
- journey.html — working process
- contact.html — navigation to websites and project descriptions
- 404.html — not-found page

## Deploy

The .github/workflows/pages.yml workflow publishes the site when changes are pushed to main.

In repository settings, open Pages and set the build source to GitHub Actions.

Website:
https://echoairgroup.github.io/CHRIS-STUDIO/

## Updating content

Project descriptions and destination links are maintained in projects.html and websites.html. Shared design rules are in styles.css; navigation and project filtering live in script.js.
