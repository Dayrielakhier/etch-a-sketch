const div = document.querySelector("#container")

for (i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    for (j = 0;j < 16; j++) {
        const grid = document.createElement("div")
        grid.classList.add("grid")
        grid.addEventListener("mouseenter", function () {
            grid.style.background = "blue"
        })
        grid.addEventListener("mouseleave", function () {
            grid.style.background = "initial"
        })
        row.appendChild(grid)
    }
    div.appendChild(row)
}

