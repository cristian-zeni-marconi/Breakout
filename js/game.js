let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

context.beginPath();
context.rect(240, 160, 20, 50);
context.fillStyle = "Red";
context.fill();
context.closePath