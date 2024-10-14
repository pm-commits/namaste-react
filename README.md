# namaste-react

## Setup
Install nodejs
Setup npm
Install react and react-dom
npm install -D parcel
-D for Development: important for creating build

## Dependencies
Two types of dependencies: Dev dependency(Required in development phase)
                           Normal dependency


## CDN link for React
CDN links is not a preferred way to bring react and react dom in out project
Heavy
url have to be changed each time new version is released, npm will install it as a package so versions will managed will have updates with us. Easier to handle.
Consistent hashing
Differential bundling: When hosting the app, support on different browsers like older versions.

^ helps with minor version upgrade(all upgrades)
~ helps with major version updates only.

Package-lock.json: Keeps track of exact version of the package/dependency installed.

Packages have their own lot of dependencies.So, each package has its own package.json to keep trach of dependencies.

NPX: executing command
NPM: for installation

Normal js browser scripts cannot have import. We have mentioned App.js as a module so it supports "import".

Transitive Dependency

# PARCEL : Bundler

- npx parcel build index.html (To avoid error while building like this remove [main: ] entry point from package.json)

Zero Config Tool
Dev Build
Local Server
Hot Module Replacement (HMR): save file and it refreshes the app using File watching algo using C++
Caching: faster builds (Each build reduces time: parcel is caching things for faster buils)
Image optimization (Loading images is one of the most time expensive task)
Minification
Bundling
Compress
Consistent Hashing
Code splitting
Differential Bundling: Gives support of older/newer versions of browsers
Diagnostics
Error Handling
Hosting app on https
Tree Shaking
Transpilation
Service Worker
Lazy Loading
Different dev and prod builds

# JSX
JSX is not a part of React. We use for our comfort.
JSX is HTML/XML like syntax but different.

Javascript engine JS engine understands (For eg; Ecmascript). It doesn't understand JSX. Parcel does the part of transpiling.
JSX is converted to React.CreateElement and then to HTML element to render on browser.
Use camelCase for attributes in JSX.
JSX sanitizes data whenever it is bound in {} braces.

# Babel
It's job to convert JSX to react.createElement.

# React Components
Class Based Components(Old way, JS classes), Functional Components(JS functions)
Components should have unique keys(ids): React renders based on keys and rendering becomes optimised
Do not use indexes as keys

# React Functional Component
It is a normal JS function which returns some JSX. Use first letter in capital for name.

# Config driven UI: Swiggy
It shows different data according to cities

Optional chaining: (data?.name)

# Exports/Imports
## Default exports(only one default export allowed in one module)
    export default Name;
    import Name from "path";

## Named Exports(import using curly braces)
    export Name;
    import { Name } from "path";

# Hooks
Hook is a normal JS function with specific purpose.
So react doesn't re-render the component when we update any variable or any function inside, to support this we have to make use of hooks.
1. Call hooks inside react components
2. react hooks must not be called inside nested statements 
(Normal JS utility functions)
## useState() 
Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
Never create useState() in conditions
## useEffect() 
It is called after render cycle of component
useEffect(()=>{},[]);

If no dependency array => useEffect is called on every render
If dependency array is empty => useEffect called only on initial render

# React points to remember
Your JSX code leads to a tree-like code structure that "tells" React how the different components are related and how the UI should look like. It then executes appropriate commands to manipulate the real DOM to reflect that target structure / code.

In JS:

{!(flag === 20) && <p>Show Flag</p>} when flag = 20 will show "Show Flag" on output else if flag!=20 will show nothing.

### Shimmer UI
For when API is taking sometime to load

## Passing Dynamic values to event handlers
Example:
onClick={() => handleClick('abc')};

# Fragments
if one has to return multiple elements in a component and don't want to add extra div eg; <div> <header/><body></body> </div>
we can write <fragment> <header/><body></body> </fragment> or <> <header/><body></body> </>

# Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

## 2 Types of Routing:
- Server Side Routing: Using <a href="somelink"></a> reloads the whole app.

- Client Side Routing: We can use link component instead from "react-router-dom"
This is what is meant by Single Page Application, when routing the app won't reload.
Link is wrapper on anchor tag(in browser dom we will see a)




