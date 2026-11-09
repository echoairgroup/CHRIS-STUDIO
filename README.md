# CHRIS.STUDIO

A personal portfolio and project hub for Chris, built as a lightweight multi-page static website.

## Pages

- Home — introduction and selected work
- About — background, interests and approach
- Websites — live website directory
- Projects — filterable project collection
- Journey — the thinking and process behind the work
- Contact — ways to connect

## Stack

Semantic HTML, custom responsive CSS, vanilla JavaScript and GitHub Pages. There is no build step or framework dependency.

## Deploy

The workflow in .github/workflows/pages.yml deploys the site when changes are pushed to main.

In repository settings, open Pages and set the build source to GitHub Actions. The site will then publish at:

https://echoairgroup.github.io/CHRIS-STUDIO/

## Updating content

Each page is a standalone HTML file. Shared styling lives in styles.css and shared interactions live in script.js. Project entries and links are written into projects.html and websites.html.

This is a static site. It does not include a pretend contact form, fake visitor counter or insecure client-side admin panel. A real dashboard or private contact form would need a secure backend and authentication.
