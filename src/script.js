const sketchArea = document.querySelector(".sketchArea");
let sketchPadSize = 16;
sketchArea.style.gridTemplateColumns = `repeat(${sketchPadSize}, 1fr)`;

let mouseDown = 0;
document.body.addEventListener('mousedown', (e) => {
  ++mouseDown;
});
document.body.addEventListener('mouseup', (e) => {
  --mouseDown;
});

const brushColor = document.querySelector('#brush-color');
brushColor.value = '#000';

for (let i = 0; i < sketchPadSize * sketchPadSize; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("tile");
  sketchArea.appendChild(newDiv);
}

const sketchTiles = document.querySelectorAll(".tile");
sketchTiles.forEach(tile => {
  tile.addEventListener("mouseover", (e) => {
    if (mouseDown) e.target.style.backgroundColor = brushColor.value;
  });
});
sketchTiles.forEach(tile => {
  tile.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = brushColor.value;
  });
});

const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', () => {
  sketchTiles.forEach(tile => {
    tile.style.backgroundColor = '#fff';
  })
})