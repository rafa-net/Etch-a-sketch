const container = document.getElementById("squareContainer");

// Everything happens through a dynamic loop here, without static values
function createNewGrid(size) {
    // As long as the iteration variable is smaller than the result of 5 x 5, 16 x 16, increment it, so more squares are added
    for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;
    container.appendChild(square);
  }
}

// Handling of the creation of a new grid
const resizeBtn = document.getElementById("resize-btn");
resizeBtn.addEventListener("click", () => {
  let size = prompt(`Please enter the desired board size:`);
  createNewGrid(size);
});



// Creation of a new grid to start with
createNewGrid(16);
