const div = document.getElementById("squareContainer");

for (let i = 0; i < 272; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
  div.appendChild(square);
}

function reset() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "blue";
  });
}

resetBtn.addEventListener("click", reset);

resizeBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.width = "20px";
    square.style.height = "20px";
  });
});