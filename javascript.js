const div = document.querySelector("#container")
const btn = document.querySelector("button")

function getGrids() {
    return prompt("Enter a number of grids between 1-100")
}

btn.addEventListener("click", () => generateGrids(getGrids()))

function generateGrids(grids) {
    if (grids < 1 || grids > 100) {
        console.log("Type a number between 1-100")
    } else {
        div.replaceChildren()
        for (i = 0; i < grids; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
            for (j = 0;j < grids; j++) {
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
    }
}

