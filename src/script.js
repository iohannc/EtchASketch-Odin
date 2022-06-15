// Return a random rgb value in a string.
function randomRGB() {
  const r = Math.floor((Math.random() * 255) + 1);
  const g = Math.floor((Math.random() * 255) + 1);
  const b = Math.floor((Math.random() * 255) + 1);
  return `rgb(${r}, ${g}, ${b})`;
}

function setGradient(target) {
  
}

let brushMode = 'standard';

const sketchArea = document.querySelector(".sketchArea");
let sketchPadSize = 16;
sketchArea.style.gridTemplateColumns = `repeat(${sketchPadSize}, 1fr)`;

const brushColor = document.querySelector('#brush-color');
brushColor.value = '#000'; //Reinitialize default color with each reload.

// Detect if the mouse button is currently being pressed.
let mouseDown = 0;
document.body.addEventListener('mousedown', (e) => {
  ++mouseDown;
});
document.body.addEventListener('mouseup', (e) => {
  --mouseDown;
});


for (let i = 0; i < sketchPadSize * sketchPadSize; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("tile"); // This sets the default background color as white in the css [rgb(255, 255, 255)].
  sketchArea.appendChild(newDiv);
}

const sketchTiles = document.querySelectorAll(".tile");
sketchTiles.forEach(tile => {
  tile.addEventListener("mouseover", (e) => {
    if (mouseDown) {
      switch (brushMode) {
        case 'standard':
          e.target.style.backgroundColor = brushColor.value;
          break;
        case 'rainbow':
          e.target.style.backgroundColor = randomRGB();
          break;
        case 'gradient':

          break;
      }
    } 
  });
});

sketchTiles.forEach(tile => {
  tile.addEventListener("mousedown", (e) => {
    switch (brushMode) {
      case 'standard':
        e.target.style.backgroundColor = brushColor.value;
        break;
      case 'rainbow':
        e.target.style.backgroundColor = randomRGB();
        break;
      case 'gradient':
        break;
  }});
});

const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', () => {
  sketchTiles.forEach(tile => {
    tile.style.backgroundColor = '#fff';
  })
});

const standardButton = document.querySelector('#standard-button');
standardButton.addEventListener('click', () => {
  brushMode = 'standard';
});

const rainbowButton = document.querySelector('#rainbow-button');
rainbowButton.addEventListener('click', () => {
  brushMode = 'rainbow';
});

const gradientButton = document.querySelector('#gradient-button');
gradientButton.addEventListener('click', () => {
  brushMode = 'gradient';
});


