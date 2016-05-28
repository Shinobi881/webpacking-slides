#Deck
  
##Slide1
  - Webpack logo
  - Name of presentation
  - Presentation description

##Slide2
  - Heading: Why Webpack

##Slide3
  - Heading: React Ecosytem
    - React
    - Redux
    - ES6/7
    - Webpack
    - Babel
    - Sass, Stylus, Less
    - RxJS (Observables)

##Slide4
  - Heading: Where do I start?
    - Webpack 
    - Or the server (but later on that)

##Slide2
  - Heading: "Coverage"
  - Covered:
    - Webpack and npm
    - Babel
    - ES5-7
    - Hot Module Replacement
    - React
  - Not Covered:
    - Browserify
    - Grunt
    - Gulp
    - JSPM
    - Not much else

##Slide3
  - Heading: Use cases
    - CommonJS - modular code base
    - Hot Module Replacement - optimize for dev time
    - Bundling - we get this by default
    - Transpiling - Use ESNext, Typescript, Elm...
    - Simple enough (once you have a good starting point)

##Slide4
  Let's see what this looks like

##Slide5
  - Heading: CommonJS (link to webpack docs)
  - `require` 
  - `module.exports`
  - [Insert git tag]

##Slide6
  - Heading: Hot Module Replacement (link to webpack docs)
  - `webpack-dev-server` 
  - `webpack-hot-middleware`
  - [Insert git tag]

##Slide7
  - Heading: Bundling
  - Text: by default we get bundled code

##Slide8
  - Heading: Transpiling 
  - ES2015 - [insert git tag]
  - Typescript
  - Elm
  - and more (link to webpack docs)

##Slide9
  - Heading: Component Based Architecture
  - React - [insert git tag]
  - Angular 1.5.x
  - Angular 2

##Slide10
 - Heading: React

##Slide11
  - Heading: Why?
    - React is an ecosystem
    - Simplifying demands


##Slide3
  - Heading: Getting Started
  - npm modules:
    - `npm i -D webpack webpack-dev-server`
  - npm scripts:
    - `"build": "webpack"`
    - `"devserver": "webpack-dev-server"`
  - Files:
    - `__dirname/webpack.config.js`
    - `index.html` - `<script src="bundle.js">`
    - `index.js` - `document.write('Get to the Chopper!!!')`

##Slide4
  - Heading: "Bare Bones Config"
  - `myapp/webpack.config.js`
    *Note: Use relative paths*
    - module.exports = <object>
      - Entry: <string> [filename]
      - Ouput: <object>
        - filename: <string> [filename]
  
  - CLi: `$ npm run build` || `$npm run devserver`
  - Browser: `localhost:8080/webpack-dev-server/`

##Slide5
  - Heading: What we get
    - CommonJS
    - Hot Module Replacement
    - Bundled code

##Slide5
  - Heading: Our index.html 
    - 



##Slide4
  - Heading: npm modules
  - List:  
    - $ npm i -D 
        - webpack
        - webpack-dev-server

##Slide5
  - Heading: npm scripts
  - List: [a list of scripts]
    - [code slide or image]

##Slide6
  - Heading: files




##Slide

##Slide4
  - Heading: Bare Bones Config
  - [Code slide with webpack config]
  - [Insert git tag]

##Slide5
  - Heading: CommonJS
  - `require('react')` - dependencies
  - `require('./app.js')` - components
  - `require('./app.js')` - stylesheets (more on this later)
  - `module.exports` - components
  - [Insert git tag]

##Slide6
  - Hot Module Replacement
    - Via Webpack Dev Server
    Note: We're not gonna go over the middleware
    - [Insert git tag]

##Slide7
  - Heading: Transpiling
  - ES6/7 (2015 or whatever you want to call it)
  - Typescript
  - Elm
  - And much more

  Note: when using the middleware include the `module.hot` function for dom manipulation
  - [insert git tag]

##Slide8
  - Heading: Quick to React
    - Adding React to a project becomes simple

##Slide9
  