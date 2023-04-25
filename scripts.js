"use strict";

// creating a reference to the etch a sketch
const device = document.querySelector("device");

// create grid for etch a sketch
function createGrid(numOfCells) {
  for (let i = 0; i < numOfCells; i++) {
    // creating element and adding an id and class
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < numOfCells; j++) {
      const cell = document.createElement("cell");
      cell.setAttribute("class", "cell");
      row.appendChild(cell);
    }
    device.appendChild(row);
  }
  return;
}
