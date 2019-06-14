const canvas_1 = document.getElementById("canvas_1");
const ctx2 = canvas_1.getContext("2d");

canvas_1.width = canvas_1.scrollWidth;
canvas_1.height = canvas_1.scrollHeight;


ctx2.rect(10, 10, 10, 10)
ctx2.stroke()