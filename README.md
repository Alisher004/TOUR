# TOUR — Travel & Booking Web App

A travel website for discovering tours, exploring destinations and hotels, and starting a booking. Built with React and Vite, with a responsive interface and client-side routing.

**Live demo:** [tour-three-phi.vercel.app](https://tour-three-phi.vercel.app)

## Features

- Browse available tours and view individual tour details
- Explore countries and hotel listings
- Open booking pages for tours and hotels
- Use the tour-selection page to find a suitable trip
- Navigate dedicated Home, About, and Contacts pages
- Client-side navigation with React Router

## Tech stack

- **React 18** — UI components
- **Vite 5** — development server and production builds
- **React Router 6** — application routing
- **Bootstrap 5 / React Bootstrap** — UI styling and components
- **Axios** — HTTP requests
- **ESLint** — code linting

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/Alisher004/TOUR.git
cd TOUR
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── components/   # Shared UI and page components
├── data/         # Tour, country, and hotel data
├── pages/        # Home, tours, hotels, booking, and other pages
├── assets/       # Application assets
├── router.jsx    # Route definitions
├── App.jsx       # Application entry component
└── main.jsx      # React bootstrap
public/           # Static public assets
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/tours` | Tour listings |
| `/tours/:id` | Tour details |
| `/countries` | Countries |
| `/hotels` | Hotel listings |
| `/hotels/:id` | Hotel details |
| `/tour-selection` | Tour selection |
| `/booking/tour/:id` | Tour booking |
| `/booking/hotels/:id` | Hotel booking |
| `/about` | About |
| `/contacts` | Contacts |

## Deployment

The project is deployed on Vercel: [tour-three-phi.vercel.app](https://tour-three-phi.vercel.app).

To create a production build, run:

```bash
npm run build
```

The generated files are placed in `dist/`.

## License

No license has been specified for this repository yet.
