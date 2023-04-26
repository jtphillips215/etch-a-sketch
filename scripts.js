"use strict";

// creating a reference to the etch a sketch
const screen = document.querySelector("#screen");

// create grid for etch a sketch
function createGrid(numOfCells) {
  for (let i = 0; i < numOfCells; i++) {
    // creating element and adding an id and class
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < numOfCells * 1.5; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    screen.appendChild(row);
  }
}

// cellHover controls what happens when a cell gets hovered

createGrid(16);

// adding event listener for cell hover
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", function (e) {
    e.target.style.background = "#5D6E35";
    console.log("Hover");
  });
});
