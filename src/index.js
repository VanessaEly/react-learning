import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// React.createElement( /* type */, /* props */, /* content */ );
// type – either a string or a React Component
// props - can be null or object,
// content – null, a string, a React Element, or a React Component

// Elements describe DOM nodes, not HTML, that's whe instead of:
// --> class, we use className
// --> for, we use htmlFor (because for is a reserver word in javascript)
// Virtual DOM -> we aren't creating real DOM elements, we are creating JAVASCRIPT OBJECTS that describe DOM nodes
const element = React.createElement('div', { className: 'welcome-message' }, 'hello world');

// Only when we use ReactDOM.render that the browser creates a real DOM element
// renders the element created in the DOM object with id = 'hello'
ReactDOM.render(element, document.getElementById('hello'));

const people = [{ name: 'Vanessa'}, { name: 'Carla'}, { name: 'Ely'}];
// You can loop through properties to generate a list, but you'll require a key property
const elementList = React.createElement('ol', null,
  people.map(person => React.createElement('li', { key: person.name }, person.name))
);
ReactDOM.render(elementList, document.getElementById('element-list'));

// React.createElement(); creates a single React element of a particular type,
// but the content argument can be another React element

// Instead of creating those elements, we can use JSX
// JSX is a syntax extension to javascript that is used to write HTML inside of javascript
// The JSX gets transpiled to React's .createElement() method that outputs HTML to be rendered in the browser.
// need to be transpiled into regular JavaScript before reaching the browser. 
// We typically use a transpiler like Babel to accomplish this for us. We can run Babel through a build tool,
// like Webpack which helps bundle all of our assets (JavaScript files, CSS, images, etc.) for web projects.
// npm install -g create-react-app, that's a lib used to create react apps with webpack
// Same example as the one above, but using JSX:
const elementListJSX = <ol>
  {people.map(person =>{
    return <li key={person.name}>{person.name}</li> // jshint ignore:line
  })}
</ol>
ReactDOM.render(elementListJSX, document.getElementById('element-list-jsx'));
// When writing JSX, keep in mind that it must only return a single element.
// This element may have any number of descendants, but there must be a single root element wrapping your overall JSX
// Example: Only one div should be returned (consider ir as a wrapper), but this div can have multiple tags inside of it.

// COMPONENTS
class ContactList extends React.Component {
  // render is REQUIRED
  render() {
    return <ol>
      {people.map(person =>{
        return <li key={person.name}>{person.name}</li> // jshint ignore:line
      })}
    </ol>
  }
}
ReactDOM.render(<ContactList/>, document.getElementById('element-list-class'));

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
