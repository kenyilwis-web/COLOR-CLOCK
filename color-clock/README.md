# Color Clock - React + Vite Application

A dynamic, animated clock application built with React and Vite that displays the current date and time with vibrant CSS animations and color effects.

## 📋 Project Overview

**Color Clock** is a React application that showcases:
- Real-time date and time display in multiple formats
- CSS animations (marquee scrolling and bounce effects)
- Color-based UI with dynamic hover effects
- Modern React hooks (useState) for state management
- Date formatting using the `date-fns` library

### Key Features
- **Marquee Animation**: Scrolling text banner that moves across the screen
- **Multiple Time Formats**: Displays current time as full date string, hour-only, and month
- **Hover Effects**: Interactive drop-shadow animations with purple and cyan glows
- **Responsive Design**: Centered layout that works across different screen sizes
- **Modern Stack**: Vite for fast development, React 19.2.0, ESLint for code quality

## 🏗️ Project Structure

```
color-clock/
├── index.html              # HTML entry point with root div for React mounting
├── package.json            # Project dependencies and build scripts
├── vite.config.js          # Vite configuration for React plugin and HMR
├── eslint.config.js        # ESLint rules for code quality
├── src/
│   ├── main.jsx            # React application initialization (createRoot)
│   ├── App.jsx             # Main Clock component with date/time logic
│   ├── App.css             # Component-specific styles and animations
│   ├── index.css           # Global styles, typography, and theme
│   └── assets/             # Static assets (images, icons, etc.)
└── public/                 # Public static files served as-is
```

### File Descriptions

- **index.html**: Entry point for the web application. Contains the root div where React mounts the entire component tree.

- **src/main.jsx**: Application initialization file that:
  - Uses React 18's `createRoot` API for mounting
  - Wraps the App component with `StrictMode` for development checks
  - Imports global styles from index.css

- **src/App.jsx**: Main component that:
  - Formats current date/time using date-fns library
  - Uses React `useState` hook to manage time state
  - Renders multiple clock displays with different formats
  - Applies CSS classes for styling and animations

- **src/App.css**: Component-specific styling:
  - `.border`: Main container with chartreuse background (900px max-width)
  - `.marquee`: Scrolling text banner animation
  - `.hour`: Hour display with hover glow effect
  - `.month`: Month display with aqua text color
  - Keyframes for `scrollText` (50% to 80% translateX) and `bounceText` animations

- **src/index.css**: Global styles:
  - CSS custom properties (root) for consistent theming
  - Light and dark color scheme support
  - System font stack for performance
  - Base styling for elements (h1, button, a, body)
  - Text rendering optimizations (antialiased, optimizeLegibility)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository (if applicable):
```bash
git clone <repository-url>
cd color-clock
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## 📦 Available Scripts

### Development
```bash
npm run dev      # Start Vite development server with HMR (Hot Module Replacement)
```

### Production
```bash
npm run build    # Build optimized production bundle to dist/ directory
npm run preview  # Preview production build locally
```

### Code Quality
```bash
npm run lint     # Run ESLint to check code quality and style consistency
```

## 🎨 Component Documentation

### App Component (src/App.jsx)

**Purpose**: Main component that manages and displays the clock functionality.

**State Management**:
- `time`: Stores the current formatted date/time string in format "MMMM,dd,yyyy,HH:mm:ss"

**Time Formatting** (using date-fns):
- Full format: `format(new Date(), "MMMM,dd,yyyy,HH:mm:ss")` → "February,16,2026,14:30:45"
- Hour only: `format(new Date(), "HH")` → "14"
- Month only: `format(new Date(), "MMMM")` → "February"

**JSX Structure**:
1. Marquee container with animated scrolling text
2. Border div displaying full date/time (chartreuse background)
3. Hour display with hover glow effect
4. Month display with aqua text color
5. Paragraph with current time string

### CSS Animations

**Marquee Animation** (scrollText):
- Duration: 2s, Linear, Infinite
- Movement: Translates from 50% to 80% horizontally
- Creates scrolling text effect from right to left

**Bounce Animation** (bounceText):
- Duration: 3s, Ease-in-out, Infinite
- Movement: Translates 0 → 300px → 0
- Creates bouncing text effect (alternative animation style)

**Hover Effects**:
- `.hour:hover`: Purple drop-shadow glow `hsla(281, 91%, 47%, 0.667)`
- `.marquee span` and `:hover`: Drop-shadow effects with 2em radius

## 🔄 Version Control

This project uses Git for version control. Key concepts:

**Meaningful Commits**: Each commit includes:
- Clear title describing the changes
- Bullet-point list of specific modifications
- Why certain decisions were made (e.g., using date-fns, CSS variables)

**Commit History**:
1. Initial project configuration and build setup
2. HTML markup and application entry point
3. React application initialization with StrictMode
4. Main App component with color clock functionality
5. App component styling with animations
6. Global application styles and typography
7. Git ignore rules for build artifacts

**Best Practices Applied**:
- Atomic commits (one feature/component per commit)
- Descriptive commit messages for future maintainability
- Regular commits to track incremental changes
- Comments in code explaining design decisions

## 💡 Code Documentation

### JSDoc Comments

All major components and functions include JSDoc-style comments explaining:
- **Purpose**: What the component/function does
- **Features**: Key capabilities and behaviors
- **Parameters**: Input arguments (if applicable)
- **Returns**: What the component renders or returns

### Inline Comments

Code includes inline comments explaining:
- Complex logic or state management
- CSS animation timing and effects
- Configuration choices (fonts, colors, dimensions)
- Rendering decisions and component structure

### Why Documentation Matters

New developers can quickly understand:
1. **Structure**: How files are organized and their purposes
2. **Flow**: How data flows through components
3. **Styling**: Why certain CSS choices were made
4. **Dependencies**: What external libraries are used and why

## 📚 Dependencies

### Production Dependencies
- **react** (^19.2.0): UI library for building components
- **react-dom** (^19.2.0): React binding for the DOM
- **date-fns** (^2.30.0): Utility library for date formatting and manipulation

### Development Dependencies
- **vite** (^7.3.1): Fast build tool and dev server
- **@vitejs/plugin-react** (^5.1.1): Vite plugin for React with Fast Refresh
- **eslint** (^9.39.1): JavaScript linter for code quality
- **@eslint/js**: ESLint JavaScript rules
- **eslint-plugin-react-hooks**: Rules for React hooks best practices
- **eslint-plugin-react-refresh**: Rules for React Refresh plugin

## 🔧 Configuration Files

### vite.config.js
- Enables React plugin for JSX and Fast Refresh
- Configures dev server and build options

### eslint.config.js
- Defines ESLint rules for JavaScript and React
- Enforces code consistency and best practices

## 🎯 Development Workflow

1. **Make changes** to component files in `src/`
2. **HMR updates** are applied automatically to the browser
3. **Run linting** to check code quality: `npm run lint`
4. **Commit changes** with meaningful messages describing modifications
5. **Build for production** when ready: `npm run build`

## 📝 Tips for Contributors

When contributing to this project:

1. **Add JSDoc comments** to new components explaining purpose and features
2. **Include inline comments** for complex logic or styling decisions
3. **Write atomic commits** with clear, descriptive messages
4. **Test locally** with `npm run dev` before committing
5. **Lint your code** with `npm run lint` to maintain consistency

## 🔮 Future Improvements

Potential enhancements for the Color Clock application:
- Add time zone support with timezone selector
- Implement 12/24 hour format toggle
- Add more animation styles and themes
- Create settings panel for customization
- Add analog clock display alongside digital
- Implement clock sound/notification features

## 📄 License

This project was created as a learning exercise for React, Vite, and version control practices.

---

**Last Updated**: February 2026
**Version**: 1.0.0
