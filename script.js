const changeSizeButton = document.querySelector("#changeSize");
const resetButton = document.querySelector("#reset");
const colorModeButton = document.querySelector("#colorMode");
const container = document.querySelector("#container");

let size = 16;
let colorMode = false;

function createGrid(size) {
	container.innerHTML = "";
	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			const square = document.createElement("div");
			square.classList.add("square");
			container.appendChild(square);
			square.addEventListener("mouseover", (event) => {
				if (colorMode) {
					const r = Math.floor(Math.random() * 256);
					const g = Math.floor(Math.random() * 256);
					const b = Math.floor(Math.random() * 256);
					square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
					square.style.transition = "background-color 0.5s ease";
				} else {
					square.style.backgroundColor = "";
					square.classList.add("hover");
				}
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

colorModeButton.addEventListener("click", (event) => {
	colorMode = !colorMode;
	colorModeButton.textContent = colorMode
		? "Black and white mode"
		: "Color mode";
});

createGrid(16);
