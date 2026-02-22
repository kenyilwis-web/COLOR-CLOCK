# Color Clock (React + Vite)

This project is a simple React application that displays the current date and time using `date-fns`.

## Lab goals covered

- Set up a React project using Vite
- Use JSX to define UI components
- Add an npm package (`date-fns`) to format date/time values
- Explore React project structure and simple best practices

## Run locally

### 1) Install dependencies

```bash
npm install
```

### 2) Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal (for example `http://localhost:5176/`).

### 3) Stop the server

Press `Ctrl + C` in the terminal running Vite.

## Build for production

```bash
npm run build
```

## Preview production build locally

```bash
npm run preview
```

## Project structure

```text
src/
  App.jsx          # Clock UI + date-fns formatting
  Clock.css        # Clock styles
  index.css        # Global styles
  main.jsx         # React entry point
```

## Clock widget details

- Uses `date-fns` `format()` to render date and time in JSX
- Displays both date and time in a readable localized format
- Uses a colorful card UI to satisfy styling requirements
