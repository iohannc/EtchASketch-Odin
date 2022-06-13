const sketchArea = document.querySelector(".sketchArea");
let sketchPadSize = 13;
sketchArea.style.gridTemplateColumns = `repeat(${sketchPadSize}, 50px)`;

for (let i = 0; i < sketchPadSize * sketchPadSize; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("tile", `tile${i}`);
  sketchArea.appendChild(newDiv);
}

const sketchTiles = document.querySelectorAll(".tile");
console.log(sketchTiles);
sketchTiles.forEach((tile) => {
  tile.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "white";
  });
});

