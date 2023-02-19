/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shacking -> Removing unwanted Codes
 *
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

//  JSX ???     (Babel converts JSX to React.createElement)
/**
 *  Advantages of JSX
 *  1. Developers Experience Better
 *  2. Syntactical Sugar
 *  3. Readability
 *  4. Less Code
 *  5. Maintainability
 *  6. No Repetation
 */
// JSX => React.createElement => Object => HTML(DOM)

const heading = (
  <h1 id="title" key="h1">
    Namaste React
    </h1>
  );



const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(heading);