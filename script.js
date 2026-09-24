const container = document.querySelector(".container");

// Make 16x16 grid of square divs
for (let i = 0; i < 16; ++i) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 16; ++j) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }

    container.appendChild(row);
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.classList.add("hover");
    });

    cell.addEventListener("mouseleave", () => {
        cell.classList.remove("hover");
    });
});