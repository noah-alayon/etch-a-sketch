const container = document.querySelector(".container");

function makeGrid(num) {
    // Set maximum squares to 100 to prevent lag
    if (num > 100) num = 100;

    // Delete the existing grid
    container.replaceChildren();

    // Make the num x num grid
    for (let i = 0; i < num; ++i) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < num; ++j) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }

        container.appendChild(row);
    }

    // Add hover event listener to each cell
    const cells = container.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.classList.add("hover");
        });
    });
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let numSquares = prompt("How many squares?");
    makeGrid(numSquares);
});

makeGrid(16);