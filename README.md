Express Middleware
==================

Build some kind of webpack-server with Express

```shell
# install express
npm install express

# create server directory
mkdir src/server

## create two files
touch src/server/main.js src/server/express.js
```

Add new script in **package.json**, that runs our main.js:

```javascript
"scripts": {
    "start": "webpack-dev-server --config=config/webpack.dev.js",
    "build": "webpack --config=config/webpack.dev.js",
    "dev": "node src/server/main.js"
  }
```

Also remove useless stuff from __.babelrc__

```javascript
{
    "presets": [
        ["env"]
    ],
    "plugins": ["transform-runtime"]
}
```

Also the I installed the babel-register module

```shell
 npm install babel-register
```

**This is a continuos of the babel-3-preset, I get some errors because of that, but reinstalling babel-core and modules, it should be fine**

## Create simple Express Server

__main.js__ file:

```javascript
// This one tells to transpile with the rules specified inside .babelrc file
require("babel-register")

// This one requires our express.js file that going to contain our code
require("./express.js")
```

__express.js__ file:

```javascript
import express from "express"

// Create simple express server
const server = express();

// User static middleware
const staticMiddleware = express.static("dist");

server.use(staticMiddleware);
server.listen(8080, () => {
    console.log("The Server is Listen 8080")
})
```

Now you can run:

```shell
npm run dev
```

And if it works open http://localhost:8080/ in any browser, the hot reloading not going to work...