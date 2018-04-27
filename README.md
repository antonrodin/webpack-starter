# Babel branch Starter Source
## Converts the ES6 o ES2015 code into old shitty ES5 Javascript,
## that runs in the old browsers like iExplorer 8 and more...

Got into master, to set up starter webpack, and then go into babel branch.

1. Install babel-loader, like so or google it:

```shell
npm install --save-dev babel-loader babel-core babel-preset-env webpack
```

Add into the file webpack.config.js, new module, like so:

```javascript

//helper for path
const path = require('path');

const config = {
    //Entry .js file, somekind like bootstrap
    entry: "./src/index.js",
    output: {
        
        //Global route for working directory
        path: path.resolve(__dirname, 'build'),

        //Our final file, the conventino is call it bundle.js
        filename: "bundle.js"
    }
};

//Also we should export that config
module.exports = config;
```