import "./dist/style.css";

let box = document.getElementById("box");
const dimensionBadge = document.getElementById("dimension-badge");
let widthInput = document.getElementById("width");
let heightInput = document.getElementById("height");
let paddingInput = document.getElementById("padding");
let borderInput = document.getElementById("border");
let switchBoxSizing = document.querySelector(".switch input");
let borderBoxSizeDisplay = document.getElementById("border-box-size");

let widthValue = null;
let heightValue = null;
let paddingValue = 0;
let borderValue = 0;
let boxSizingValue = "content-box"; // Default box-sizing value

// Function to calculate content width
function calculateContentWidth() {
  const computedStyles = window.getComputedStyle(box);
  const totalWidth = parseFloat(computedStyles.width);
  const paddingLeft = parseFloat(computedStyles.paddingLeft);
  const paddingRight = parseFloat(computedStyles.paddingRight);
  const borderLeft = parseFloat(computedStyles.borderLeftWidth);
  const borderRight = parseFloat(computedStyles.borderRightWidth);

  return boxSizingValue === "content-box"
    ? totalWidth
    : totalWidth - (paddingLeft + paddingRight + borderLeft + borderRight);
}

// Function to calculate content height
function calculateContentHeight() {
  const computedStyles = window.getComputedStyle(box);
  const totalHeight = parseFloat(computedStyles.height);
  const paddingTop = parseFloat(computedStyles.paddingTop);
  const paddingBottom = parseFloat(computedStyles.paddingBottom);
  const borderTop = parseFloat(computedStyles.borderTopWidth);
  const borderBottom = parseFloat(computedStyles.borderBottomWidth);

  return boxSizingValue === "content-box"
    ? totalHeight
    : totalHeight - (paddingTop + paddingBottom + borderTop + borderBottom);
}

// Function to update badge position dynamically based on border value
function updateBadgePosition() {
  const badgeOffset = -15; // Base offset value
  const computedStyles = window.getComputedStyle(box);
  const borderTopWidth = parseFloat(computedStyles.borderTopWidth) || 0;
  // Calculate the top position of the badge
  const newTopPosition = badgeOffset + borderTopWidth;
  dimensionBadge.style.right = `${newTopPosition}px`;
}

// Update dimensions display
// Update dimensions display
function updateDimensions(newWidthValue, newHeightValue) {
  if (boxSizingValue === "content-box") {
    // contentBoxSizeDisplay.innerText = `${newWidthValue}px × ${newHeightValue}px`;

    borderBoxSizeDisplay.innerText = `${
      newWidthValue + paddingValue * 2 + borderValue * 2
    }px × ${newHeightValue + paddingValue * 2 + borderValue * 2}px`;

    dimensionBadge.innerText = `${newWidthValue}px × ${newHeightValue}px`;
  } else {
    borderBoxSizeDisplay.innerText = `${newWidthValue}px × ${newHeightValue}px`;
    // Update the inner HTML of the box to show current dimensions
    dimensionBadge.innerText = `${
      newWidthValue - paddingValue * 2 - borderValue * 2
    }px × ${newHeightValue - paddingValue * 2 - borderValue * 2}px`;
  }
  box.appendChild(dimensionBadge); // Ensure badge remains inside the box
}

// Set box width
function setBoxWidth(e) {
  let newWidth = parseFloat(e.target.value);
  const maxValue = parseFloat(e.target.max);
  const minValue = parseFloat(e.target.min);

  if (newWidth > maxValue || newWidth < minValue) {
    alert(`Please enter a value between ${minValue} and ${maxValue} px.`);
    newWidth = calculateContentWidth();
    e.target.value = newWidth;
  }

  widthValue = newWidth;
  box.style.width = `${widthValue}px`;
  updateDimensions(widthValue, heightValue);
}

// Set box height
function setBoxHeight(e) {
  let newHeight = parseFloat(e.target.value);
  const maxValue = parseFloat(e.target.max);
  const minValue = parseFloat(e.target.min);

  if (newHeight > maxValue || newHeight < minValue) {
    alert(`Please enter a value between ${minValue} and ${maxValue} px.`);
    newHeight = calculateContentHeight();
    e.target.value = newHeight;
  }

  heightValue = newHeight;
  box.style.height = `${heightValue}px`;
  updateDimensions(widthValue, heightValue);
}

// Set padding value
function setPadding(e) {
  let newPadding = parseFloat(e.target.value);
  const maxValue = parseFloat(e.target.max);
  const minValue = parseFloat(e.target.min);

  if (newPadding > maxValue || newPadding < minValue) {
    alert(
      `Please enter a padding value between ${minValue} and ${maxValue} px.`
    );
    newPadding = paddingValue; // Reset to the current valid value
    e.target.value = newPadding;
  }

  paddingValue = newPadding;
  box.style.padding = `${paddingValue}px`;

  if (paddingValue > 0) {
    box.style.boxShadow = `inset 0 0 0 ${paddingValue}px rgba(255, 55, 0, 0.5)`;
  } else {
    box.style.boxShadow = "none";
  }
  updateDimensions(widthValue, heightValue);
}

// set box border
function setBorder(e) {
  let newBorder = parseFloat(e.target.value);
  if (!newBorder) {
    newBorder = 0;
    e.target.value = null;
  }
  const maxValue = parseFloat(e.target.max);
  const minValue = parseFloat(e.target.min);

  if (newBorder > maxValue || newBorder < minValue) {
    alert(
      `Please enter a border value between ${minValue} and ${maxValue} px.`
    );
    newBorder = borderValue; // Reset to the current valid value
    e.target.value = newBorder;
  }

  borderValue = newBorder;
  box.style.border = `${borderValue}px solid #333`;
  updateDimensions(widthValue, heightValue);
  updateBadgePosition(); // Update badge position
}

// Toggle box-sizing
function toggleBoxSizing(e) {
  boxSizingValue = e.target.checked ? "border-box" : "content-box";
  box.style.boxSizing = boxSizingValue;
  updateDimensions(widthValue, heightValue);
}

// Initialize function
function initialize() {
  widthValue = calculateContentWidth();
  heightValue = calculateContentHeight();

  // Set the initial values in the input fields
  widthInput.value = widthValue;
  heightInput.value = heightValue;

  // Set initial styles for the box
  box.style.width = `${widthValue}px`;
  box.style.height = `${heightValue}px`;
  box.style.padding = `${paddingValue}px`;
  box.style.border = `${borderValue}px solid #333`;
  box.style.boxSizing = boxSizingValue;

  // Update dimensions display
  updateDimensions(widthValue, heightValue);
  updateBadgePosition();
}

// Event listeners
widthInput.addEventListener("change", setBoxWidth);
heightInput.addEventListener("change", setBoxHeight);
paddingInput.addEventListener("input", setPadding);
borderInput.addEventListener("change", setBorder);
switchBoxSizing.addEventListener("change", toggleBoxSizing);

// Initialize the page
initialize();
