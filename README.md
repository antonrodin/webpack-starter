# Webpack and Babel Starter Source

* Webpack - Master branch
* Babel - Babel branch
* CSS - CSS branch, handle CSS files with webpack

Init NPM project, like so. It creates packages.json file.

```bash
npm init
```

Install webpack LOCALY, like so:

```bash
npm install --save-dev webpack@2.2.0-rc.0
```

Create the file webpack.config.js with this basic content:

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

Inside package.json file, add new script for build

```javascript
"scripts": {
    "build": "webpack"
  },
```

Now you can run:

```shell
npm run build
```

The End...