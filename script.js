const container = document.querySelector("#container");

let grid = []
// const gridSquare = document.createElement("div");
// gridSquare.classList.add("grid-square");

// container.appendChild(gridSquare);


for (i=0; i<16*16; i++) {
  let gridSquare = document.createElement("div");
  gridSquare.classList.add("grid-square");
  container.appendChild(gridSquare);
  grid.push(gridSquare);
  
}