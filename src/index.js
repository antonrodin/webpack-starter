//CommonJS Import
//const sum = require('./sum.js');

//ES2015 Import
import sum from './sum.js';

const total = document.getElementById('total');
total.innerHTML = sum(20, 50);
