const changeSizeButton = document.querySelector("#changeSize");
const resetButton = document.querySelector("#reset");
const container = document.querySelector("#container");

let size = 16;

function createGrid(size) {
	container.innerHTML = "";
	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			const square = document.createElement("div");
			square.classList.add("square");
			container.appendChild(square);
			square.addEventListener("mouseover", (event) => {
				square.classList.add("hover");
			});
		}
	}
	container.style.setProperty("--size", size);
}

changeSizeButton.addEventListener("click", (event) => {
	size = prompt(
		"Enter the number of squares per side for the new grid (max 100):"
	);
	size = Math.min(Math.max(parseInt(size), 1), 100);
	createGrid(size);
});

resetButton.addEventListener("click", (event) => {
	createGrid(size);
});

createGrid(16);
