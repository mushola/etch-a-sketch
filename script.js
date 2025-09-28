let gridSize = "640px";
let squareDim = 20;
let squareEdge = undefined
const container = document.querySelector("#container");

// set width of header div
const header = document.querySelector("#header");
header.style.width = gridSize

// set buttons
const btnGridResize = document.querySelector("#btnGridResize");
btnGridResize.addEventListener("click", function (e) {
    resizeGrid();
})
const btnClearGrid = document.querySelector("#btnClearGrid");
btnClearGrid.addEventListener("click", function (e) {
    replaceGrid(squareDim);
})

// launch cgrid
replaceGrid(squareDim);

function placeGrid (size) {
  // Creates size x size grid in container

  // set container and square size
  container.style.width = gridSize
  squareEdge = parseInt(gridSize,10) / squareDim + "px"
  
  // place squares
  for (i=0; i < size*size; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.style.width = squareEdge
    gridSquare.style.height = squareEdge
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseover", function (e) {
    draw(gridSquare);
    })
  }
}

function draw(square) {
  // mouse drawing effect
  square.classList.add("drawn-square");
}

function deleteGrid() {
  // deletes container contents
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function replaceGrid(dim) {
  deleteGrid();
  placeGrid(dim);
}

function resizeGrid() {
  // resize grid prompt
  let newDim = parseInt(prompt("New grid dimension (1-100):"), 10)
  if(isNaN(newDim)) {
    alert("Entry must be a number")
  } else if (newDim > 100 || newDim < 1) {
    alert("Entry must be between 1 and 100")
  } else {
    squareDim = newDim
    replaceGrid(squareDim)
  }
}
