#Episode 2

- Parcel and its advantages. Parcel is a beast! :-)

#Episode 3

- React.createElement and ReactDOM.createRoot
- JSX : It is not HTML in javascript. Rather it is an HTML like syntax.

  - It is a way to write react in a easier way. Parcel, behind the scene,
    reads the jsx code and transpiles it to es6 syntax that the browsers can
    understand. For this transpilation, parcel makes use of babel.
  - JSX => React.createElement => React Element (JS Object) => HTML Element.
  - JSX element attributes are camel case unlike html.
  - {} used to inject javascript inside jsx.
  - JSX made the code readable.
  - Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

- React Components : Everything in react is a component.
  - Class based components - OLD
  - Function components - NEW : It is a javascript function that returns a react element (JSX code).
  - Component composition is rendering components inside other components.