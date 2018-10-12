Babel
=====

Webpack 4 & Babel

```shell
# Install
npm install babel-core

#Create .babelrc
touch .babelrc

# Install babel plugins
npm install babel-plugin-transform-es2015-arrow-functions babel-cli
```
Modify the .babelrc file toadd installed plugin

```json
{
    "plugins": ["transform-es2015-arrow-functions"]
}
```

The babel RC can be tested if you install it locally like that:

```shell
npx babel src/main.js
```

## Babel Loader

```shell
npm install babel-loader
```

Configure it like so:

```javascript
{
    test: /\.js$/,
    use: [{ loader: "babel-loader" }],
    exclude: /node_modules/
}
```