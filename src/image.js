import '../style/image.css'

//Create image element
const image = document.createElement('img');
image.src = "https://lorempixel.com/400/400";

//Append that image to container
const container = document.querySelector('.container');
container.appendChild(image);