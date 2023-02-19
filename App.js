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

import {createElement} from "react";
import ReactDOM from "react-dom/client";

const heading = createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 1 for parcel"
);

const heading2 = createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },
  "Heading 2"
);

const container = createElement(
  "div",
  {
    id: "container",
    hello: "world",
  },
  [heading, heading2]
);

console.log(heading);
// React.createElement produces Object -> Which is then converted into HTML DOM

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(container);