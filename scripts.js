const container = document.getElementById("squareContainer");

function createNewGrid(size) {
    container.innerHTML = "";
    if (size >= 100 || size <= 0) {
      size = 100;
    }
    for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;
    container.appendChild(square);
  }
  function getRandomColor() {
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = "#" + 
    red.toString(16).padStart(2, '0') + 
    green.toString(16).padStart(2, '0') + 
    blue.toString(16).padStart(2, '0');

    return color;
  }
    
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColor();
      });
    });
}

const resizeBtn = document.getElementById("resize-btn");
resizeBtn.addEventListener("click", () => {
  let size = prompt(`Please enter the desired board size:`);
  createNewGrid(size);
});

createNewGrid(16);
