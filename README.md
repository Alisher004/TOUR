<div align="center">

# TOUR

### Discover destinations. Find your stay. Plan your next trip.

A travel discovery and booking interface for browsing tours, destinations, and hotels — built with React and Vite.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20website-0A7F6A?style=for-the-badge&logo=vercel&logoColor=white)](https://tour-three-phi.vercel.app)
[![React](https://img.shields.io/badge/React-18-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Live Demo](https://tour-three-phi.vercel.app) · [Report a Bug](https://github.com/Alisher004/TOUR/issues) · [Request a Feature](https://github.com/Alisher004/TOUR/issues)

</div>

---

## Overview

**TOUR** is a travel website that brings trip discovery and booking entry points together in one place. Visitors can browse tours, explore countries and hotels, view tour details, and continue to a booking page.

> **Project status:** The website is deployed and the repository contains the client application. Booking and listing behavior may depend on the data and integrations configured for the project.

## Highlights

- Browse tour listings and open individual tour pages
- Explore destination and hotel pages
- Start a booking flow for a selected tour or hotel
- Use a dedicated tour-selection page
- Navigate About and Contacts pages
- Client-side routing with React Router
- Tour, country, and hotel data organized separately from UI components

## Preview

Open the [live website](https://tour-three-phi.vercel.app) to see the current interface. The repository currently does not include a dedicated application screenshot; add one under `docs/` and update this section when one is available.

## Tech stack

| Area | Technologies |
| --- | --- |
| UI | React 18, JavaScript |
| Build tooling | Vite 5 |
| Routing | React Router 6 |
| UI styling | Bootstrap 5, React Bootstrap, CSS |
| HTTP and utilities | Axios, date-fns |
| Quality checks | ESLint |

## Getting started

### Requirements

- Node.js (LTS recommended)
- npm

### Install

```bash
git clone https://github.com/Alisher004/TOUR.git
cd TOUR
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local URL in the terminal after the server starts.

### Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Application routes

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/tours` | Tour listings |
| `/tours/:id` | Tour details |
| `/countries` | Destination/country listings |
| `/hotels` | Hotel listings |
| `/hotels/:id` | Hotel details route |
| `/tour-selection` | Tour selection |
| `/booking/tour/:id` | Booking entry for a tour |
| `/booking/hotels/:id` | Booking entry for a hotel |
| `/about` | About page |
| `/contacts` | Contacts page |

## Project structure

```text
TOUR/
├── public/                 # Static files served as-is
├── src/
│   ├── assets/             # Images and icons
│   ├── components/         # Shared interface components
│   ├── data/               # Tour, country, and hotel data
│   ├── pages/              # Page-level views
│   ├── App.jsx              # Application root
│   ├── main.jsx             # React entry point
│   └── router.jsx           # Route configuration
├── index.html
├── package.json
└── vite.config.js
```

## Deployment

The production site is hosted on Vercel: **[tour-three-phi.vercel.app](https://tour-three-phi.vercel.app)**.

Create a production build with `npm run build`; the deployable output is generated in `dist/`. Configure the hosting provider to serve the Vite build and rewrite application routes to `index.html` for client-side routing.

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a focused branch: `git checkout -b feat/your-change`.
3. Install dependencies and make your changes.
4. Run `npm run lint` and `npm run build`.
5. Open a pull request with a clear summary and screenshots for UI changes.

For bugs or feature ideas, [open an issue](https://github.com/Alisher004/TOUR/issues).

## License

No license file is currently included in this repository. Unless a license is added, all rights remain with the copyright holder and reuse is not automatically permitted.

---

<div align="center">

Made with React · [Explore the live project](https://tour-three-phi.vercel.app)

</div>
