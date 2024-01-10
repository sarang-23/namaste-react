## Namaste React

# Parcel for packaging

- Dev build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithms - written in c++
- Cache - for faster builds
- Image Optimizations
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential bundling - supports older browser
- Diagnostics
- Error handling
- SSL support
- Tree shaking

# App structure

Header

- Logo
- Home
- About
- Cart
  Body
- Restaurant Container
  - Restauarant Card
    - Restaurant Logo
    - Name
    - Cuisines
    - Star Rating
    - Delivery Time

Footer

# Types of routing

- React router dom is a javascript library created to aid in seamless routing inside react applications.
- Client side routing
- Server side routing -> Make a network call, server returns the new page according to route.

# Rendering

- This app is a SPA rendered on the client side
- In client (browser/mobile) side rendering, all static files such as javascript, html and css are pushed to the
  client on first load and henceforth, it is the responsibility of the client to paint the DOM according to the received files.
- In server side rendering, a call is made to the server which returns a comtentful html that is directly painted onto the client.
  For SEO, Server side rendering is preferable.
- SSG : Static site generation. In websites such as blog posts, where the content is pre determined and need not be updated
  very frequent, static htmls are generated and storwd on the server and returned to browser as and when requested.
- ISR : Incremental Site Regeneration

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
- React Lifecycle: React works in 2 phases - Render phase, Commit phase :
  Diagram can be found here - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  ----- Mounting cycle -------

  1. Constructor - Render cycle
  2. Render - Render Cycle
  3. React updates DOM
  4. ComponentDidMount - Commit cycle -> Updates state

  ----- Update Cycle ---------

  1. Render - Render cycle
  2. React Updates DOM - Commit cycle
  3. ComponentDidUpdate - Commit cycle.

  --- Unmount cycle ----

  1. componentWillUnmount - commit cycle. Triggered just before component is about
     to unmount.

# Episode 9

1. Single responsibility principle. - Implementing Custom hooks
