let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

context.beginPath();
context.rect(10, 15, 80, 100);
context.fillStyle = "FF0000";
context.fill();
context.closePath