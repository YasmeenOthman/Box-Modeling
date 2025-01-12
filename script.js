let box = document.getElementById("box");
let widthInput = document.getElementById("width");
let heightInput = document.getElementById("height");
let paddingInput = document.getElementById("padding");
let borderInput = document.getElementById("border");
let switchBoxSizing = document.querySelector(".switch input");
let contentBoxSizeDisplay = document.getElementById("content-box-size");
let borderBoxSizeDisplay = document.getElementById("border-box-size");

let widthValue = null;
let heightValue = null;
let paddingValue = 0;
let borderValue = 0;
let boxSizingValue = "content-box"; // Default box-sizing value

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

function updateDimensions() {
  if (boxSizingValue === "content-box") {
    contentBoxSizeDisplay.innerText = `${widthValue}px`;
    borderBoxSizeDisplay.innerText = `${
      widthValue + paddingValue * 2 + borderValue * 2
    }px`;
  } else {
    contentBoxSizeDisplay.innerText = `${
      widthValue - paddingValue * 2 - borderValue * 2
    }px`;
    borderBoxSizeDisplay.innerText = `${widthValue}px`;
  }

  // Update the inner HTML of the box to show current dimensions
  box.innerHTML = `${Math.round(calculateContentWidth())}px × ${Math.round(
    calculateContentHeight()
  )}px`;
}

function initialize() {
  widthValue = calculateContentWidth();
  heightValue = calculateContentHeight();
  widthInput.value = widthValue; // Set initial value in the input field
  heightInput.value = heightValue; // Set initial value in the input field
  box.style.width = `${widthValue}px`;
  box.style.height = `${heightValue}px`;
  box.style.padding = `${paddingValue}px`;
  box.style.border = `${borderValue}px solid #333`;
  box.style.boxSizing = boxSizingValue;

  widthValue = calculateContentWidth();
  heightValue = calculateContentHeight();

  widthInput.value = widthValue;
  heightInput.value = heightValue;

  box.innerHTML = `${widthValue} * ${heightValue}`;
  updateDimensions();
}

function setBoxWidth(e) {
  widthValue = parseFloat(e.target.value);
  box.style.width = `${widthValue}px`;
  updateDimensions();
}

function setBoxHeight(e) {
  heightValue = parseFloat(e.target.value);
  box.style.height = `${heightValue}px`;
  updateDimensions();
}

function setPadding(e) {
  paddingValue = parseFloat(e.target.value);
  box.style.padding = `${paddingValue}px`;

  if (paddingValue > 0) {
    // Apply the box-shadow inset based on the padding value
    box.style.boxShadow = `inset 0 0 0 ${paddingValue}px rgba(255, 55, 0, 0.5)`;
  } else {
    // Remove box-shadow when padding is 0
    box.style.boxShadow = "none";
  }
  updateDimensions();
}

function setBorder(e) {
  borderValue = parseFloat(e.target.value);
  box.style.border = `${borderValue}px solid #333`;
  updateDimensions();
}

function toggleBoxSizing(e) {
  boxSizingValue = e.target.checked ? "border-box" : "content-box";
  box.style.boxSizing = boxSizingValue;
  updateDimensions();
}

widthInput.addEventListener("input", setBoxWidth);
heightInput.addEventListener("input", setBoxHeight);
paddingInput.addEventListener("input", setPadding);
borderInput.addEventListener("input", setBorder);
switchBoxSizing.addEventListener("change", toggleBoxSizing);

initialize();
