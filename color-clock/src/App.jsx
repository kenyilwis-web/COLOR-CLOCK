/**
 * App Component - Main application component for the Color Clock
 * 
 * This component displays the current date and time in multiple formats with styled animations.
 * It leverages the date-fns library for formatting dates and times.
 * 
 * Features:
 * - Displays current date and time in various formats (full date, hour, month)
 * - Includes animated marquee text banner
 * - Styled with CSS animations and color effects
 * 
 * @returns {JSX.Element} The main app component with clock displays and animations
 */

import { format } from "date-fns";
import "./App.css";
import React from "react";

/**
 * App - Functional component that renders the color clock application
 * 
 * The component uses React hooks (useState) to manage time state and updates
 * the display with current date/time information formatted using date-fns.
 */
function App() {
  // Format the current date and time in a readable format: Month, Date, Year, Hour:Minute:Second
  const currentTime = format(new Date(),"MMMM,dd,yyyy,HH:mm:ss");
  
  // State hook to store and manage the current time display
  const [time, setTime] = React.useState(currentTime);

  return (
    <div>
      {/* Animated marquee banner with scrolling text effect */}
      <h1 className="marquee">
        <span>🚀 This text moves across the screen</span>
      </h1>
      
      {/* Main clock display with border styling and current date/time */}
      <h1 className="border">{time}</h1>
      
      {/* Hour display with hover effect and shadow animation */}
      <h1 className="hour">{format(new Date(), "HH")}</h1>
      
      {/* Month display with styling and hover effect */}
      <h1 className="month">Month: {format(new Date(), "MMMM")}</h1>
      
      {/* Paragraph showing the full current time string */}
      <p>Current Time: {currentTime}</p>
    </div>
  );
}

export default App;
