require("@babel/runtime/regenerator");
require("./main.css")
require("./index.html")

var a = async (args) => {
    const {a, b} = args;
    await console.log('Hello from the future', a, b);
    console.log('This shoud be in the .then place')
}

console.log('Hello cruel world');

a({a: 1, b: 2});