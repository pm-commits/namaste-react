/* <h1 id="parent">I am the parent<h2 id="firstchild">i am the first child.<h3 id="firstgrandchild">i am the first grandchild.</h3></h2><h2 id="secondchild">i am the second child.</h2></h1>*/
import React from "react";
import ReactDOM from "react-dom/client";

/* One way to create React elemnts*/

/*const heading = React.createElement('h3',{id: "parent"},[
"I am the parent",
React.createElement('h2',{id: "firstchild"},["i am the first child.",
React.createElement('h1',{id: "firstgrandchild"},"i am the first grandchild.")]),
React.createElement('h2',{id: "secondchild"},"i am the second child.")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/

// Using JSX
const heading = <h1 className="First">React using JSX</h1>;
const TitleComponent = () => <h1 className="First">React using JSX Title component</h1>;

/* const functionCompo = () =>{
     return <h1 className="Second">Returning JSX from func component</h1>;
 }*/

/*
Component Composition (one funcitonal component into another).
Within curly braces we can write any JS expression.Ex: {3+4} will show output as 7.
Whatever we pass in curly braces JSX sanitises the data preventing cross browser scripting
*/

const HeadingFunctionComp = () => (
    <div className="container">
        {heading}
        {<TitleComponent /> }
        {3+4}
<h1 className="Second">Returning JSX from func component</h1>
</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

/* Render positions matter. The last rendered element or functional component will reflect in the concerned root DOM*/
root.render(heading);
root.render(<HeadingFunctionComp />);