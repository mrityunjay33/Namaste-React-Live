import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -Logo
 *  - Nav Items(Right Side)
 *  - Cart
 * Body
 *  - Search Bar
 *  - Restaurant List
 *     - Image
 *     - Name
 *     - Cuisines
 *     - Rating
 *  - Footer
 *     - Links
 *     - Copyrights
 *
 */

const Title = () => (
  <h1 id="title" key="h1">
    Food Villa
  </h1>
);
// Polyfills is for older version of browser
// Babel is JSX cpmpiler/transpiler
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
