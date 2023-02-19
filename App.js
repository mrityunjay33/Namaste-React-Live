import React from "react";
import ReactDOM from "react-dom/client";

const heading = (     //This is React element => It is object at EOD (heading is normal js variable)
  <h1 id="title" key="h1">  
    Namaste React
  </h1>
);
/**React Components
 *  - Functional => NEW way of writing code   -> Will do mostly this
 *  - Class Based Component => OLD way
 * 
 *  Name of component starts with Capital letter - It's not mandatory
 */

const HeaderComponent = () => {   //This is React Functional Component  => It is Funtion at EOD (HeaderComponent is normal js function)
  return (
    <div>
      <h1> Namaste React Functional Component </h1>
      <h2> This is h2 tag </h2>
    </div>
  )
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);  //for rendering react element 'root.render(heading);'