"use strict";

// creating a reference to the etch a sketch
const device = document.querySelector("device");

// create grid for etch a sketch
function createGrid(numOfCells) {
  for (let i = 0; i < numOfCells; i++) {
    const row = document.createElement("div");
    // maybe nested loop would be better to generate cells?
    device.appendChild(row);
  }
  for (let i = 0; i < numOfCells; i++) {
    // creating cells in those rows
  }
  return;
}
