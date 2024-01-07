# Episode 2

- Parcel and its advantages. Parcel is a beast! :-)

# Episode 3

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

# Episode 4

- Planning an application
- Creating components
- Making dynamic components - passing props to a component is same as passing args to js function.
- Config Driven UI

# Episode 5

- Named Import and default import
- React hooks
- Whenever a state variable changes, react re-renders the component
- Reconciliation (React Fiber)
  - Virtual DOM is an Object representation of actual DOM
  - Diff Algorimthm finds the difference between old and new virtaul DOM and then updates the actual DOM
  - React does not touch the DOM a lot. It compares different versions of the virtual DOM.
  - Incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

# Episode 6

- Monolith vs Microservices.
- Microservices : Separation of concerns.
- CORS
- Fetch requests -> useEffect hook details.
- Shimmer UI
- Whwnever state changes, react triggers the reconcilliation algorithm and hence,
  React re-renders on change of state variable

# Episode 7

- When is useEffect called. Depending on the dependency array values - empty, [], or with some value
- Don't use useState inside any condition / function in a component.
- React Router Dom -> createBrowserRouter : Takes in a list of objects and prepares router config.
- Children Routes -> `children` key of configuration object helps in defining children routes. These can
  be rendered usiing the <Outlet/> component.
- <Link/> Component. Differnce between Link and href is that href will reload the entire page while
  the link element will not cause the page to reload. Link element only refreshes the component. This 
  makes the application a SPA - single page application.
- Dynamic routing (:resId)

# Episode 8

- Class based components
- If we want to use this.props or simply this keyword inside the constructor,
  we need to pass the props coming from the parent class in super.
  super() is a reference to the parent class constructor i.e. React.Component.
  So when we pass props to super, the props get assigned to this also.
- To create a state variable for class based component, create it in the class's
  constructor
- Interesting thing : In functional components, all state variables are merged to
  a single object by react behind the scenes.
- NEVER UPDATE STATE VARIABLES DIRECTLY - use this.setState()
- setState will only update part of the state object by finding diff.
