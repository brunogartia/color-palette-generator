const COLORS = [
	"#e74c3c", // Red
	"#f1c40f", // Yellow
	"#2ecc71", // Green
	"#3498db", // Blue
	"#9b59b6" // Purple
];

let container = document.getElementById("color-container");

// Create the color boxes and add them to the container
COLORS.forEach(color => {
	let box = document.createElement("div");
	box.className = "color-box";
	box.style.backgroundColor = color;
	box.addEventListener("click", () => {
		copyToClipboard(color);
	});
	container.appendChild(box);
});

// Copy a color to the clipboard
function copyToClipboard(color) {
	let input = document.createElement("input");
	input.style.position = "absolute";
	input.style.left = "-1000px";
	input.value = color;
	document.body.appendChild(input);
	input.select();
	document.execCommand("copy");
	document.body.removeChild(input);
	alert(`Copied ${color} to clipboard!`);
}
