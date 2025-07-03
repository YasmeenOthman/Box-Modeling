/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/style.css */ \"./dist/style.css\");\n\nvar box = document.getElementById(\"box\");\nvar dimensionBadge = document.getElementById(\"dimension-badge\");\nvar widthInput = document.getElementById(\"width\");\nvar heightInput = document.getElementById(\"height\");\nvar paddingInput = document.getElementById(\"padding\");\nvar borderInput = document.getElementById(\"border\");\nvar switchBoxSizing = document.querySelector(\".switch input\");\nvar borderBoxSizeDisplay = document.getElementById(\"border-box-size\");\nvar cssCodeBlock = document.getElementById(\"css-code\");\nvar widthValue = null;\nvar heightValue = null;\nvar paddingValue = 0;\nvar borderValue = 0;\nvar boxSizingValue = \"content-box\"; // Default box-sizing value\n\n// Function to calculate content width\nfunction calculateContentWidth() {\n  var computedStyles = window.getComputedStyle(box);\n  var totalWidth = parseFloat(computedStyles.width);\n  var paddingLeft = parseFloat(computedStyles.paddingLeft);\n  var paddingRight = parseFloat(computedStyles.paddingRight);\n  var borderLeft = parseFloat(computedStyles.borderLeftWidth);\n  var borderRight = parseFloat(computedStyles.borderRightWidth);\n  return boxSizingValue === \"content-box\" ? totalWidth : totalWidth - (paddingLeft + paddingRight + borderLeft + borderRight);\n}\n\n// Function to calculate content height\nfunction calculateContentHeight() {\n  var computedStyles = window.getComputedStyle(box);\n  var totalHeight = parseFloat(computedStyles.height);\n  var paddingTop = parseFloat(computedStyles.paddingTop);\n  var paddingBottom = parseFloat(computedStyles.paddingBottom);\n  var borderTop = parseFloat(computedStyles.borderTopWidth);\n  var borderBottom = parseFloat(computedStyles.borderBottomWidth);\n  return boxSizingValue === \"content-box\" ? totalHeight : totalHeight - (paddingTop + paddingBottom + borderTop + borderBottom);\n}\n\n// Function to update badge position dynamically based on border value\nfunction updateBadgePosition() {\n  var badgeOffset = -15; // Base offset value\n  var computedStyles = window.getComputedStyle(box);\n  var borderTopWidth = parseFloat(computedStyles.borderTopWidth) || 0;\n  // Calculate the top position of the badge\n  var newTopPosition = badgeOffset + borderTopWidth;\n  dimensionBadge.style.right = \"\".concat(newTopPosition, \"px\");\n}\n\n// Update dimensions display\n// Update dimensions display\nfunction updateDimensions(newWidthValue, newHeightValue) {\n  if (boxSizingValue === \"content-box\") {\n    // contentBoxSizeDisplay.innerText = `${newWidthValue}px × ${newHeightValue}px`;\n\n    borderBoxSizeDisplay.innerText = \"\".concat(newWidthValue + paddingValue * 2 + borderValue * 2, \"px \\xD7 \").concat(newHeightValue + paddingValue * 2 + borderValue * 2, \"px\");\n    dimensionBadge.innerText = \"\".concat(newWidthValue, \"px \\xD7 \").concat(newHeightValue, \"px\");\n  } else {\n    borderBoxSizeDisplay.innerText = \"\".concat(newWidthValue, \"px \\xD7 \").concat(newHeightValue, \"px\");\n    // Update the inner HTML of the box to show current dimensions\n    dimensionBadge.innerText = \"\".concat(newWidthValue - paddingValue * 2 - borderValue * 2, \"px \\xD7 \").concat(newHeightValue - paddingValue * 2 - borderValue * 2, \"px\");\n  }\n  box.appendChild(dimensionBadge); // Ensure badge remains inside the box\n}\nfunction updateCSSCode() {\n  var cssCode = \"\\n#box {\\nwidth: \".concat(widthValue, \"px;\\nheight: \").concat(heightValue, \"px;\\npadding: \").concat(paddingValue, \"px;\\nborder: \").concat(borderValue, \"px solid #333;\\nbox-sizing: \").concat(boxSizingValue, \";\\n}\\n\").trim();\n  cssCodeBlock.innerText = cssCode;\n}\n// Set box width\nfunction setBoxWidth(e) {\n  var newWidth = parseFloat(e.target.value);\n  var maxValue = parseFloat(e.target.max);\n  var minValue = parseFloat(e.target.min);\n  if (newWidth > maxValue || newWidth < minValue) {\n    alert(\"Please enter a value between \".concat(minValue, \" and \").concat(maxValue, \" px.\"));\n    newWidth = calculateContentWidth();\n    e.target.value = newWidth;\n  }\n  widthValue = newWidth;\n  box.style.width = \"\".concat(widthValue, \"px\");\n  updateDimensions(widthValue, heightValue);\n  updateCSSCode();\n}\n\n// Set box height\nfunction setBoxHeight(e) {\n  var newHeight = parseFloat(e.target.value);\n  var maxValue = parseFloat(e.target.max);\n  var minValue = parseFloat(e.target.min);\n  if (newHeight > maxValue || newHeight < minValue) {\n    alert(\"Please enter a value between \".concat(minValue, \" and \").concat(maxValue, \" px.\"));\n    newHeight = calculateContentHeight();\n    e.target.value = newHeight;\n  }\n  heightValue = newHeight;\n  box.style.height = \"\".concat(heightValue, \"px\");\n  updateDimensions(widthValue, heightValue);\n  updateCSSCode();\n}\n\n// Set padding value\nfunction setPadding(e) {\n  var newPadding = parseFloat(e.target.value);\n  var maxValue = parseFloat(e.target.max);\n  var minValue = parseFloat(e.target.min);\n  if (newPadding > maxValue || newPadding < minValue) {\n    alert(\"Please enter a padding value between \".concat(minValue, \" and \").concat(maxValue, \" px.\"));\n    newPadding = paddingValue; // Reset to the current valid value\n    e.target.value = newPadding;\n  }\n  paddingValue = newPadding;\n  box.style.padding = \"\".concat(paddingValue, \"px\");\n  if (paddingValue > 0) {\n    box.style.boxShadow = \"inset 0 0 0 \".concat(paddingValue, \"px rgba(255, 55, 0, 0.5)\");\n  } else {\n    box.style.boxShadow = \"none\";\n  }\n  updateDimensions(widthValue, heightValue);\n  updateCSSCode();\n}\n\n// set box border\nfunction setBorder(e) {\n  var newBorder = parseFloat(e.target.value);\n  if (!newBorder) {\n    newBorder = 0;\n    e.target.value = null;\n  }\n  var maxValue = parseFloat(e.target.max);\n  var minValue = parseFloat(e.target.min);\n  if (newBorder > maxValue || newBorder < minValue) {\n    alert(\"Please enter a border value between \".concat(minValue, \" and \").concat(maxValue, \" px.\"));\n    newBorder = borderValue; // Reset to the current valid value\n    e.target.value = newBorder;\n  }\n  borderValue = newBorder;\n  box.style.border = \"\".concat(borderValue, \"px solid #333\");\n  updateDimensions(widthValue, heightValue);\n  updateBadgePosition(); // Update badge position\n  updateCSSCode();\n}\n\n// Toggle box-sizing\nfunction toggleBoxSizing(e) {\n  boxSizingValue = e.target.checked ? \"border-box\" : \"content-box\";\n  box.style.boxSizing = boxSizingValue;\n  updateDimensions(widthValue, heightValue);\n  updateCSSCode();\n}\n\n// Initialize function\nfunction initialize() {\n  widthValue = calculateContentWidth();\n  heightValue = calculateContentHeight();\n\n  // Set the initial values in the input fields\n  widthInput.value = widthValue;\n  heightInput.value = heightValue;\n\n  // Set initial styles for the box\n  box.style.width = \"\".concat(widthValue, \"px\");\n  box.style.height = \"\".concat(heightValue, \"px\");\n  box.style.padding = \"\".concat(paddingValue, \"px\");\n  box.style.border = \"\".concat(borderValue, \"px solid #333\");\n  box.style.boxSizing = boxSizingValue;\n\n  // Update dimensions display\n  updateDimensions(widthValue, heightValue);\n  updateBadgePosition();\n  updateCSSCode();\n}\n\n// Event listeners\nwidthInput.addEventListener(\"change\", setBoxWidth);\nheightInput.addEventListener(\"change\", setBoxHeight);\npaddingInput.addEventListener(\"input\", setPadding);\nborderInput.addEventListener(\"change\", setBorder);\nswitchBoxSizing.addEventListener(\"change\", toggleBoxSizing);\n\n// Initialize the page\ninitialize();\n\n//# sourceURL=webpack://boxmodel/./script.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/style.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Variables and Global Reset */\n:root {\n  --mainColor: #0e3254;\n  --secondaryColor: #21f3aa;\n  --backgroundColor: #333;\n  --subbackgroundColor: #555;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nbody {\n  background-color: #f3f4f6;\n  color: var(--backgroundColor);\n  line-height: 1.6;\n  padding: 20px;\n}\n\n/* Typography and Headers */\n.main-header {\n  text-align: center;\n  color: var(--mainColor);\n  font-size: 2rem;\n  margin-bottom: 20px;\n}\n\n.subheader {\n  text-align: center;\n  color: var(--subbackgroundColor);\n  font-size: 1.1rem;\n  max-width: 700px;\n  margin: 10px auto 30px;\n  padding: 0 20px;\n}\n\n.wrapper {\n  min-height: 70vh;\n  padding: 10px;\n}\n\n/* Box Model Section */\n.box-model {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 30px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n/* Content Section */\n.content {\n  background-color: var(--mainColor);\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n.title {\n  color: var(--secondaryColor);\n}\n\nul {\n  margin-top: 20px;\n  padding-left: 20px;\n}\n\nli {\n  margin-bottom: 15px;\n}\n.code-output {\n  width: 100%;\n  background-color: #1e1e1e;\n  color: #d4d4d4;\n  padding: 15px;\n  border-radius: 8px;\n  margin-top: 20px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  font-family: \"Courier New\", monospace;\n  font-size: 0.9rem;\n  overflow-x: auto;\n  max-width: 600px;\n}\n.code-output h3 {\n  color: var(--secondaryColor);\n  margin-bottom: 10px;\n}\n\n/* Box Container */\n.box-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 2;\n  padding: 20px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Buttons and Inputs */\n\n.buttons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  gap: 15px;\n  margin-bottom: 30px;\n}\n\n.box-sizing-control {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.box-sizing-control label {\n  font-size: 14px;\n  color: var(--mainColor);\n}\n\n.inputs {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: var(--mainColor);\n  font-size: 14px;\n}\n\n.label-input-container {\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nlabel:hover {\n  color: var(--secondaryColor);\n}\n\ninput[type=\"number\"] {\n  padding: 10px;\n  width: 100px;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n  transition: border-color 0.3s;\n  color: var(--mainColor);\n}\n\ninput[type=\"number\"]:focus {\n  border-color: var(--secondaryColor);\n  outline: none;\n}\ninput[type=\"number\"]::placeholder {\n  font-size: 0.8rem;\n  color: #ababab;\n}\n\n/* Switch */\n.box-sizing-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n}\n.box-sizing-container span {\n  font-size: 0.9rem;\n\n  color: var(--mainColor);\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 25px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 50px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: var(--secondaryColor);\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* Box Styling */\n#box {\n  width: 300px;\n  height: 150px;\n  background-color: #9fd3ea;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease-in-out;\n  position: relative;\n}\n\n#dimension-badge {\n  position: absolute;\n  right: 0;\n  transform: translate(100%, -70%);\n  background-color: var(--secondaryColor);\n  color: var(--backgroundColor);\n  font-size: 14px;\n  padding: 2px 6px;\n  border-radius: 4px;\n\n  pointer-events: none;\n  z-index: 10;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n#box:hover #dimension-badge {\n  opacity: 1;\n}\n\n/* Dimensions Section */\n.dimensions {\n  margin-top: 20px;\n  min-height: 100px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 0.45rem;\n}\n\n.dimensions p {\n  font-size: 0.9rem;\n  color: var(--mainColor);\n}\n\n#border-box-size {\n  font-weight: bold;\n  font-size: 14px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: var(--mainColor);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transition-property: color, background-color;\n  transition: 0.3s ease, transform 0.2s ease;\n}\n\n#border-box-size:hover {\n  background-color: var(--secondaryColor);\n  color: var(--mainColor);\n  transform: scale(1.05);\n}\n\n/* Padding Highlight */\n.highlight-padding {\n  box-shadow: inset 0 0 0 10px rgba(255, 55, 0, 0.5);\n}\n\n/* Footer */\n.footer {\n  height: auto;\n  width: 100%;\n  text-align: center;\n  background-color: var(--mainColor);\n  color: white;\n  padding: 15px 20px;\n  font-size: 0.9rem;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  margin: 0 auto;\n  margin-top: 30px;\n}\n\n.footer p {\n  margin: 0;\n}\n\n.footer a {\n  text-decoration: none;\n  color: var(--secondaryColor);\n}\n\n/* Media Queries */\n@media screen and (max-width: 786px) {\n  .box-model {\n    grid-template-columns: repeat(auto-fill, minmax(300px, auto));\n    align-items: center;\n    justify-content: center;\n  }\n\n  #box {\n    width: 200px;\n    height: 100px;\n  }\n  #dimension-badge {\n    transform: translate(50%, -70%);\n  }\n  .box-sizing-container {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .box-sizing-container span {\n    font-size: 0.8rem;\n  }\n  input[type=\"number\"] {\n    width: 80px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://boxmodel/./dist/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://boxmodel/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://boxmodel/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./dist/style.css":
/*!************************!*\
  !*** ./dist/style.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://boxmodel/./dist/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://boxmodel/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://boxmodel/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://boxmodel/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://boxmodel/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://boxmodel/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://boxmodel/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;