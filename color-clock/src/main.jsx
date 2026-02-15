/**
 * Main Entry Point - React Application Initialization
 * 
 * This file is the entry point for the React application. It:
 * 1. Imports React StrictMode for development warnings and checks
 * 2. Creates a React root using createRoot API (React 18+)
 * 3. Renders the main App component with StrictMode wrapper
 * 4. Mounts the application to the DOM element with id="root"
 * 
 * StrictMode helps identify:
 * - Unsafe lifecycle methods
 * - Legacy string ref API usage
 * - Deprecated findDOMNode usage
 * - Side effects during render phase
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create root and render the application
// StrictMode wrapper provides additional development-time checks
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
