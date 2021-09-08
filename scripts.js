let gridSize = 16;

/**
 * Generates pseudo-random hex color values
 * @returns Randomly generated Hex value color code
 */
function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//#region - EVENT LISTENERS
function onMouseHover(elem) {
  let cellColor = elem.style.backgroundColor;
  if (!cellColor) {
    elem.style.backgroundColor = generateRandomColor();
  }
}

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click", () => onClearButtonClick());

const setGridSizeButton = document.querySelector("#grid-btn");
setGridSizeButton.addEventListener("click", () => onResizeGridClick());
// #endregion

function makeGrid(rows, columns) {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", columns);

  let cells = rows * columns;
  for (let i = 0; i < cells; i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.addEventListener("mouseover", () => onMouseHover(cell));
    container.appendChild(cell);
  }
}

// #region - LISTENER HELPERS
function onClearButtonClick() {
  makeGrid(gridSize, gridSize);
}

function onResizeGridClick() {
  let gridsizePrompt = prompt(
    "How large should the grid be? (n*n where n < 100)"
  );

  if (isNaN(gridsizePrompt) || gridsizePrompt > 100 || gridsizePrompt < 1) {
    // gridsize = 16;
  } else {
    gridSize = Math.trunc(gridsizePrompt); // prevents errors from floats
    makeGrid(gridSize, gridSize);
  }
}
// #endregion

(function main() {
  makeGrid(gridSize, gridSize);
})();
