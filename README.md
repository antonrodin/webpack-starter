Starter Webpack 4 project
=========================

## Git and npm init

```shell
git init

# Ignore node_modules
echo "node_modules" > .gitignore

# Init npm with defaults, the -y option
npm init -y
```

## Install NPM

Global webpack installation

```shell
npm install -g webpack webpack-cli
```

## Create main.js and some index.html file

```shell
touch src/main.js
touch dist/index.html
```

Add some boilerplate code

```javascript
alert("Hello cruel world");
```

and html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML Boilerplate for Webpack 4</title>
</head>
<body>
    <h1>Hello Cruel World</h1>
    <script src="main-bundle.js"></script>
</body>
</html>
```

## Set up config files:

Create **config/webpack.dev.js** config file:

```shell
touch config/webpack.dev.js
```

```javascript
const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    }
}
```

## Test webpack with that config file

```shell
webpack --config/webpack.dev.js
```
It should create a main-bundle.js inside of out dist directory, that we are going to use in our 
html file.

## DevServer configuration

```shell
npm install -g webpack-dev-server
```

Also you can save it locally like so

```shell
npm install -S webpack webpack-cli webpack-dev-server
```

Update **webpack.dev.js** config file

```javascript
const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist"
    }
}
```

Run webpack-dev-server:

```shell
webpack-dev-server --config/webpack.dev.js
```
with dev server running you can view any changes you make in you browser **http://localhost:8080/**

## Final package.json config

Add this scripts inside your **packae.json** file:

```javascript
"scripts": {
    "start": "webpack-dev-server --config=config/webpack.dev.js",
    "build": "webpack --config=config/webpack.dev.js"
}
```

Now you can run:

```shell
npm run start
npm run build
```

Remember that the start or webpack-dev-server option not going to udate your main-bundle.js file, it serves the file from the memory. The __build__ options create the main-bundle.js inside you __dist__ directory.