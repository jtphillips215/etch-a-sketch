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

// calling function to create grid
createGrid(16);

// cellHover controls what happens when a cell gets hovered
function cellHover() {
  //
}

// adding references to on screen elements
const cells = document.querySelectorAll(".cell");
const reset = document.querySelector("#reset");
const color = document.querySelector("#color");
const classic = document.querySelector("#classic");

// adding event listener for cell hover
cells.forEach((cell) => {
  cell.addEventListener("mouseover", function (e) {
    cell.classList.add("hovered");
    console.log("Hover");
  });
});

// adding listener for reset button
reset.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.classList.remove("hovered");
  });
});
