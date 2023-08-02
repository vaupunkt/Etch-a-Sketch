const container = document.querySelector("#container");
for (let y = 0; y < 16; y++) {
	for (let x = 0; x < 16; x++) {
		const square = document.createElement("div");
		square.classList.add("square");
		container.appendChild(square);
		square.addEventListener("mouseover", (event) => {
			square.classList.add("hover");
		});
	}
}
