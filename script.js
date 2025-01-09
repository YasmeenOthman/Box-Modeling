let box = document.getElementById("box");
let colorInput = document.getElementById("color");
let widthInput = document.getElementById("width");
let paddingInput = document.getElementById("padding");
let borderInput = document.getElementById("border");
let switchBoxSizing = document.querySelector(".switch input");
let contentBoxSizeDisplay = document.getElementById("content-box-size");
let borderBoxSizeDisplay = document.getElementById("border-box-size");

let colorValue = "";
let widthValue = null;
let paddingValue = 0;
let borderValue = 0;
let boxSizingValue = "content-box"; // Default box-sizing value

// Function to calculate the content area width (only content, no padding/border)
function calculateContentWidth() {
  const computedStyles = window.getComputedStyle(box);
  const totalWidth = parseFloat(computedStyles.width);
  const paddingLeft = parseFloat(computedStyles.paddingLeft);
  const paddingRight = parseFloat(computedStyles.paddingRight);
  const borderLeft = parseFloat(computedStyles.borderLeftWidth);
  const borderRight = parseFloat(computedStyles.borderRightWidth);

  // Content width calculation
  return totalWidth - (paddingLeft + paddingRight + borderLeft + borderRight);
}

// Function to calculate the border-box width (includes padding and border)
function calculateBorderWidth() {
  const computedStyles = window.getComputedStyle(box);
  const totalWidth = parseFloat(computedStyles.width);
  return totalWidth; // When box-sizing is border-box, total width includes padding/border
}

// Function to update the box background color based on user input
function setBoxColor(e) {
  colorValue = e.target.value;
  box.style.backgroundColor = colorValue;
}
// Function to update the box width based on user input
function setBoxWidth(e) {
  widthValue = e.target.value;
  box.style.width = `${widthValue}px`;
  updateDimensions();
}

// Function to set padding on the box
function setPadding(e) {
  paddingValue = e.target.value;
  box.style.padding = `${paddingValue}px`;

  updateDimensions();
}

// Function to set border on the box
function setBorder(e) {
  borderValue = e.target.value;
  box.style.border = `${borderValue}px solid #333`;

  updateDimensions();
}

// Function to toggle box-sizing
function toggleBoxSizing(e) {
  boxSizingValue = e.target.checked ? "border-box" : "content-box";
  box.style.boxSizing = boxSizingValue;

  updateDimensions();
}

// Function to update the content-box and border-box size displays
function updateDimensions() {
  if (boxSizingValue === "content-box") {
    contentBoxSizeDisplay.textContent = `${calculateContentWidth()}px`;
    borderBoxSizeDisplay.textContent = `${
      widthValue + paddingValue * 2 + borderValue * 2
    }px`;
  } else {
    contentBoxSizeDisplay.textContent = `${widthValue}px`;
    borderBoxSizeDisplay.textContent = `${
      widthValue + paddingValue * 2 + borderValue * 2
    }px`;
  }
}

// Function to initialize width and events
function initialize() {
  widthValue = calculateContentWidth();
  widthInput.value = widthValue; // Set initial value in the input field
  box.style.width = `${widthValue}px`;
  box.style.padding = `${paddingValue}px`;
  box.style.border = `${borderValue}px solid #333`;

  updateDimensions();
}

// Event listeners for user input
colorInput.addEventListener("change", setBoxColor);

widthInput.addEventListener("input", setBoxWidth);
paddingInput.addEventListener("input", setPadding);
borderInput.addEventListener("input", setBorder);
switchBoxSizing.addEventListener("change", toggleBoxSizing);

// Initialize dimensions
initialize();
