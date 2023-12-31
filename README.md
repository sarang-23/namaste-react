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
