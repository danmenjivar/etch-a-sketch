
// Make a 16x16 grid of square divs using JS




function makeGrid(rows, columns) {
    const container = document.querySelector("#container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);

    let cells = rows * columns;
    for (let i = 0; i < cells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        container.appendChild(cell);
    }
}


makeGrid(16, 16);