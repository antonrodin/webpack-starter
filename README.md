Babel Presets
=============

Webpack 4 & Babel presets, resumption of the babel-2 branch

# Presets

```shell
npm install babel-preset-env
```

Update the .babelrc like so:

```javascript
{
    "presets": [
        [
            "env",
            { 
                "targets": {
                    "browsers": ["last 2 versions"]
                },
                "debug": true 
            }
        ]
    ]
}
```

This configuration transpile the modern ES2015 JS to be used in two old browsers, also with the debug set to true, you should view more info then run npm start

# Babel Plugin Transform Runtime

Install dependencies:

```shell
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```

Update .babelrc file

```shell
{
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

# Polyfill

This will emulate a full ES2015+ environment, search more about in babel documentation

```shell
# Install
npm install babel-polyfill
```
Modify the .webpack.dev.js file to add babel-polyfill into entry array.

```json
    entry: {
        main: ["babel-polyfill", "./src/main.js"]
    }
```

When you run npm start now you can find that main-bundle is a bigger file than includes a huge amount of libraries.