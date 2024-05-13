const div = document.getElementById("squareContainer");

for (let i = 0; i < 272; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  div.appendChild(square); 
}