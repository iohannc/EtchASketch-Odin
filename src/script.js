// Return a random rgb value in a string.
function randomRGB() {
  const r = Math.floor((Math.random() * 255) + 1);
  const g = Math.floor((Math.random() * 255) + 1);
  const b = Math.floor((Math.random() * 255) + 1);
  return `rgb(${r}, ${g}, ${b})`;
}

function setGradient(target) {
  if (!target.style.filter) target.style.filter = 'brightness(0.9)';
  let currentGradient = Number(target.style.filter.slice(11, 14));
  if (currentGradient != 0) {
    currentGradient -= 0.1;
    target.style.filter = `brightness(${currentGradient})`;
  } else return;
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
          tile.style.filter = '';
          e.target.style.backgroundColor = brushColor.value;
          break;
        case 'rainbow':
          tile.style.filter = '';
          e.target.style.backgroundColor = randomRGB();
          break;
        case 'gradient':
          setGradient(e.target);
          break;
      }
    } 
  });
});

sketchTiles.forEach(tile => {
  tile.addEventListener("mousedown", (e) => {
    switch (brushMode) {
      case 'standard':
        tile.style.filter = '';
        e.target.style.backgroundColor = brushColor.value;
        break;
      case 'rainbow':
        tile.style.filter = '';
        e.target.style.backgroundColor = randomRGB();
        break;
      case 'gradient':
        setGradient(e.target);
        break;
  }});
});

const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', () => {
  sketchTiles.forEach(tile => {
    tile.style.filter = '';
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


