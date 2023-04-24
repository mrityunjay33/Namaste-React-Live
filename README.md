# Namaste-React-Live

-------------------------------------------------------------------------------------------------
Q1. What is crossorigin attribute in script tag of CDN link of react ?

<script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    
Ans.  The "crossorigin" attribute in the provided script tag is set to "crossorigin", which is shorthand for "anonymous".
Setting the "crossorigin" attribute to "anonymous" indicates that the React library can be loaded from a different domain and that it should not attempt to send any authentication information (such as cookies or authorization headers) along with the request.
So, in this case, the script tag is indicating that the React library should be loaded from a different domain using the "anonymous" mode, which is the default value for the "crossorigin" attribute.

------------------------------------------------------------------------------------
Q2. Why type="module" has been used here ?

<script type="module" src="src/App.js"></script>

Ans. The "type" attribute in a script tag is used to specify the MIME type of the script being loaded. In addition to "type="module", there are several other values that can be used with the "type" attribute:

"text/javascript": This is the default value of the "type" attribute and is used to indicate that the script is written in JavaScript. This value was used before ES modules were introduced, and it is still commonly used today.

"application/javascript": This value is also used to indicate that the script is written in JavaScript. It is similar to "text/javascript" but is preferred by some developers because it more accurately reflects the nature of the file being loaded.

"text/ecmascript": This value is used to indicate that the script is written in ECMAScript, which is the standardized name for the scripting language that JavaScript is based on.

"text/jsx": This value is used to indicate that the script contains JSX, which is a syntax extension used by React to describe the structure of UI components.

"text/x-template": This value is used to indicate that the script contains a template that will be rendered by JavaScript code.

In general, the "type" attribute is used to specify the format of the script being loaded so that the browser can handle it correctly. However, in many cases, the default value of "text/javascript" is sufficient, and the "type" attribute can be omitted.

When a script tag has the "type" attribute set to "module", it tells the browser to treat the script as a module and to load it using the ES module system. This allows the script to import and export functions and variables from other modules, which can help keep the code organized and maintainable.

-----------------------------------------------------------------------------------------
Q3. Does the order of file -> scrpt tag -> matters in index.html ?

Ans. Yes, the order of the script tags in an HTML file can matter, particularly when those scripts are dependent on one another.

If a script depends on another script that is loaded earlier in the HTML file, then it must come after that script tag in the HTML file. For example, if you have a script that defines a function that is used by another script, the script defining the function should be loaded before the script that uses the function.

Additionally, if a script is loaded asynchronously or defer, the order of the scripts is less critical, as the browser will load them in the background while other parts of the page are rendering.

It's generally a good practice to order scripts in a way that makes sense for your application and to ensure that any dependencies are loaded before scripts that use them.

-------------------------------------------------------------------------------------------
Q4. 



