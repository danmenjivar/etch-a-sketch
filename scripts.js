
// Make a 16x16 grid of square divs using JS




function makeGrid(rows, columns) {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);

    let cells = rows * columns;
    for (let i = 0; i < cells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.addEventListener("mouseover", () => cell.classList.add("hovered"));
        container.appendChild(cell);
    }
}


makeGrid(16, 16);



const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click", () => onClearButtonClick());


function onClearButtonClick() {
    let gridsize = prompt("How large should the grid be? (n*n)");

    console.log(typeof gridsize);

    if (isNaN(gridsize) || gridsize > 100 || gridsize < 0) {
        gridsize = 16;
    }
    gridsize = Math.trunc(gridsize); // prevents errors from floats
    makeGrid(gridsize, gridsize)
}