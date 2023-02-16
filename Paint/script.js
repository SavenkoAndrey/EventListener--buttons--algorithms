const canvas = document.getElementById("canvas");
const clearButton = document.getElementById("clear-button");
const saveButton = document.getElementById("save-button");
const brushSizeInput = document.getElementById("brush-size");
const brushSizes = document.querySelectorAll(".brush-size");


const context = canvas.getContext("2d");

context.lineWidth = 5;
context.strokeStyle = "black";
context.fillStyle = "white";
canvas.width = 1000;
canvas.height = 500;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

// input change brush's size

brushSizeInput.addEventListener("input", () => {  // this input if you need to do it in more detail
  const brushSize = brushSizeInput.value;
  context.lineWidth = brushSize;
});

// for change brush's size

brushSizes.forEach(brushSize => {
  brushSize.addEventListener("click", () => {
    const size = brushSize.getAttribute("data-size");
    context.lineWidth = size;
  });
});

// for the colors change 

function changeColor(color) {
  context.strokeStyle = color;
}

// for save 

saveButton.addEventListener("click", () => {
  const canvas = document.getElementById("canvas");
  const dataURL = canvas.toDataURL("image/png");
  const fileName = prompt("Enter a file name:");

  if (fileName) {
    const link = document.createElement("a");
    link.download = fileName + ".png";
    link.href = dataURL;
    link.click();
  }
  
});

//end 
