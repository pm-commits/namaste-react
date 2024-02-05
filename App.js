/* <h1 id="parent">I am the parent<h2 id="firstchild">i am the first child.<h3 id="firstgrandchild">i am the first grandchild.</h3></h2><h2 id="secondchild">i am the second child.</h2></h1>*/
import React from "react";
import ReactDOM from "react-dom/client";

/* One way to create React elemnts*/

// const heading = React.createElement('h3',{id: "parent"},[
// "I am the parent",
// React.createElement('h2',{id: "firstchild"},["i am the first child.",
// React.createElement('h1',{id: "firstgrandchild"},"i am the first grandchild.")]),
// React.createElement('h2',{id: "secondchild"},"i am the second child.")]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Using JSX
const heading = <h1>React using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);