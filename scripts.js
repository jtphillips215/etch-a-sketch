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
    console.log("Cells generated");
  }
}

// random color for color mode
function randomColor(e) {
  let ranNum = Math.floor(Math.random() * 5);
  if (ranNum == 0) {
    e.target.style.background = "lime";
  }
  if (ranNum == 1) {
    e.target.style.background = "cornflowerblue";
  }
  if (ranNum == 2) {
    e.target.style.background = "coral";
  }
  if (ranNum == 3) {
    e.target.style.background = "red";
  }
  if (ranNum == 4) {
    e.target.style.background = "purple";
  }
  console.log("color cell");
  return;
}

// calling function to create grid
createGrid(16);

// adding references to on screen elements
const cells = document.querySelectorAll(".cell");
const body = document.querySelector("body");
const title = document.querySelector("#title");
const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const color = document.querySelector("#color");
const classic = document.querySelector("#classic");

// adding event listener for cell hover
cells.forEach((cell) => {
  cell.addEventListener("mouseover", function (e) {
    if (cell.classList.contains("color")) {
      randomColor(e);
    } else {
      cell.classList.add("hovered");
    }
    console.log("Hover");
  });
});

// adding listener for reset button
reset.addEventListener("click", () => {
  cells.forEach((cell) => {
    if (cell.classList.contains("color")) {
      cell.style.backgroundColor = "#C3BFBC";
    } else {
      cell.classList.remove("hovered");
    }
  });
  console.log("Reset");
});

// adding listener for activating color mode
color.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.classList.add("color");
  });
  body.classList.add("color");
  title.classList.add("color");
  container.classList.add("color");
});

// adding listener for activating classic mode
classic.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.classList.remove("color");
  });
  body.classList.remove("color");
  title.classList.remove("color");
  container.classList.remove("color");
});
