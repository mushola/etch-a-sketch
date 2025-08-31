const container = document.querySelector("#container");


// const gridSquare = document.createElement("div");
// gridSquare.classList.add("grid-square");

// container.appendChild(gridSquare);

function drawGrid (size) {
  for (i=0; i < size*size; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseover", function (e) {
    draw(gridSquare);
    })
  }
}

function draw(square) {
  square.classList.add("drawn-square");
}

drawGrid(16)