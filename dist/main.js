/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("let box = document.getElementById(\"box\");\nlet widthInput = document.getElementById(\"width\");\nlet heightInput = document.getElementById(\"height\");\nlet paddingInput = document.getElementById(\"padding\");\nlet borderInput = document.getElementById(\"border\");\nlet switchBoxSizing = document.querySelector(\".switch input\");\nlet contentBoxSizeDisplay = document.getElementById(\"content-box-size\");\nlet borderBoxSizeDisplay = document.getElementById(\"border-box-size\");\n\nlet widthValue = null;\nlet heightValue = null;\nlet paddingValue = 0;\nlet borderValue = 0;\nlet boxSizingValue = \"content-box\"; // Default box-sizing value\n\nfunction calculateContentWidth() {\n  const computedStyles = window.getComputedStyle(box);\n  const totalWidth = parseFloat(computedStyles.width);\n  const paddingLeft = parseFloat(computedStyles.paddingLeft);\n  const paddingRight = parseFloat(computedStyles.paddingRight);\n  const borderLeft = parseFloat(computedStyles.borderLeftWidth);\n  const borderRight = parseFloat(computedStyles.borderRightWidth);\n\n  return boxSizingValue === \"content-box\"\n    ? totalWidth\n    : totalWidth - (paddingLeft + paddingRight + borderLeft + borderRight);\n}\n\nfunction calculateContentHeight() {\n  const computedStyles = window.getComputedStyle(box);\n  const totalHeight = parseFloat(computedStyles.height);\n  const paddingTop = parseFloat(computedStyles.paddingTop);\n  const paddingBottom = parseFloat(computedStyles.paddingBottom);\n  const borderTop = parseFloat(computedStyles.borderTopWidth);\n  const borderBottom = parseFloat(computedStyles.borderBottomWidth);\n\n  return boxSizingValue === \"content-box\"\n    ? totalHeight\n    : totalHeight - (paddingTop + paddingBottom + borderTop + borderBottom);\n}\n\nfunction updateDimensions() {\n  if (boxSizingValue === \"content-box\") {\n    contentBoxSizeDisplay.innerText = `${widthValue}px`;\n    borderBoxSizeDisplay.innerText = `${\n      widthValue + paddingValue * 2 + borderValue * 2\n    }px`;\n  } else {\n    contentBoxSizeDisplay.innerText = `${\n      widthValue - paddingValue * 2 - borderValue * 2\n    }px`;\n    borderBoxSizeDisplay.innerText = `${widthValue}px`;\n  }\n\n  // Update the inner HTML of the box to show current dimensions\n  box.innerHTML = `${calculateContentWidth()}px × ${calculateContentHeight()}px`;\n}\n\nfunction initialize() {\n  widthValue = calculateContentWidth();\n  heightValue = calculateContentHeight();\n  widthInput.value = widthValue; // Set initial value in the input field\n  heightInput.value = heightValue; // Set initial value in the input field\n  box.style.width = `${widthValue}px`;\n  box.style.height = `${heightValue}px`;\n  box.style.padding = `${paddingValue}px`;\n  box.style.border = `${borderValue}px solid #333`;\n  box.style.boxSizing = boxSizingValue;\n\n  widthValue = calculateContentWidth();\n  heightValue = calculateContentHeight();\n\n  widthInput.value = widthValue;\n  heightInput.value = heightValue;\n\n  box.innerHTML = `${widthValue} * ${heightValue}`;\n  updateDimensions();\n}\n\nfunction setBoxWidth(e) {\n  widthValue = parseFloat(e.target.value);\n  box.style.width = `${widthValue}px`;\n  updateDimensions();\n}\n\nfunction setBoxHeight(e) {\n  heightValue = parseFloat(e.target.value);\n  box.style.height = `${heightValue}px`;\n  updateDimensions();\n}\n\nfunction setPadding(e) {\n  paddingValue = parseFloat(e.target.value);\n  box.style.padding = `${paddingValue}px`;\n\n  if (paddingValue > 0) {\n    // Apply the box-shadow inset based on the padding value\n    box.style.boxShadow = `inset 0 0 0 ${paddingValue}px rgba(255, 55, 0, 0.5)`;\n  } else {\n    // Remove box-shadow when padding is 0\n    box.style.boxShadow = \"none\";\n  }\n  updateDimensions();\n}\n\nfunction setBorder(e) {\n  borderValue = parseFloat(e.target.value);\n  box.style.border = `${borderValue}px solid #333`;\n  updateDimensions();\n}\n\nfunction toggleBoxSizing(e) {\n  boxSizingValue = e.target.checked ? \"border-box\" : \"content-box\";\n  box.style.boxSizing = boxSizingValue;\n  updateDimensions();\n}\n\nwidthInput.addEventListener(\"input\", setBoxWidth);\nheightInput.addEventListener(\"input\", setBoxHeight);\npaddingInput.addEventListener(\"input\", setPadding);\nborderInput.addEventListener(\"input\", setBorder);\nswitchBoxSizing.addEventListener(\"change\", toggleBoxSizing);\n\ninitialize();\n\n\n//# sourceURL=webpack://boxmodel/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;