const container = document.getElementById("squareContainer");

function createNewGrid(size) {

}

// Handling of the creation of a new grid
const resizeBtn = document.getElementById("resize-btn");
resizeBtn.addEventListener("click", () => {
  let size = prompt(`Please enter the desired board size:`);
  createNewGrid(size);
});



// Creation of a new grid to start with
createNewGrid(16);
