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

import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";

//  JSX ???

const heading = (
  <h1 id="title" key="h1">
    Namaste React
    </h1>
  );



const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(heading);