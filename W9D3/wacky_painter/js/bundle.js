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

/***/ "./js/view.js":
/*!********************!*\
  !*** ./js/view.js ***!
  \********************/
/***/ ((module) => {

eval("/* jshint esversion: 6 */\n\nfunction View($el) {\n  this.$el = $el;\n  this.setupEasel();\n}\n\nwindow._randomColorString = function () {\n  return \"#\" + Math.random().toString(16).substr(-6);\n};\n\nView.prototype.exercise0 = function () {\n  //Challenge: (example) remove the 'square' class from every li\n  //Result: this should cause the grid to turn into a long list of undecorated lis\n  //just a list of dots\n\n  //this one completed as an example :) no additional code necessary\n  $(\"li\").removeClass(\"square\");\n};\n\nView.prototype.exercise1 = function () {\n  //Challenge: Give every square the class 'orange'\n  //Result: Every square should turn orange (we already have a CSS rule)\n  //your code here!\n  $(\"li\").addClass(\"orange\");\n};\n\nView.prototype.exercise2 = function () {\n  //Challenge: Remove every square\n  //Result: Every square vanishes\n  //your code here!\n  $(\".square\").remove();\n};\n\nView.prototype.exercise3 = function () {\n  //Challenge: Add an <h1> with the text 'i love jquery' under the grid.\n  //Result: An <h1> with the text 'i love jquery' appears under the grid.\n  //your code here!\n  const h1 = $(\"<h1>\").text(\"I love jQuery\");\n  $(\"#easel\").append(h1);\n};\n\nView.prototype.exercise4 = function () {\n  //Challenge: Write your first name in every other square.\n  //Result: Your name appears in every other square.\n  //your code here!\n\n  $(\".square:nth-child(even)\").text(\"Roger\");\n};\n\nView.prototype.exercise5 = function () {\n  //Challenge: Alert the row and column of the square, when the square is clicked.\n  //Result: When a square is clicked, the row and column appear in an alert. for\n  //example: clicking the top left square should alert '0, 0'.\n  //hint: checkout the addRow function at the bottom of the file: we set the\n  //  'data-pos' of every square\n  //your code here!\n  $(\".square\").on(\"click\", (e) => {\n    const $sq = $(e.currentTarget);\n    alert($sq.attr(\"data-pos\"));\n  });\n};\n\nView.prototype.exercise6 = function () {\n  //Challenge: Give every square a random color!\n  //Result: Every square becomes a color as soon as this code runs. The grid\n  //should become a beautiful rainbow of colors.\n  //hint: use window._randomColorString() (defined at top) to get a random color!\n  //your code here!\n  $(\".square\").each((idx, el) => {\n    var $sq = $(el);\n    $sq.css(\"background-color\", _randomColorString());\n  });\n};\n\nView.prototype.exercise7 = function () {\n  //Challenge: When your mouse goes over a square, console log its color.\n  //Result: When the mouse goes over a square its color should appear in the\n  //console. The color won't be the color's name, but its rbg value.\n  //You should push the button for exercise 6 first to try it on the\n  //rainbow.\n  //your code here!\n  $(\"#easel\").on(\"mouseenter\", \".square\", (e) => {\n    const $sq = $(e.currentTarget);\n    console.log($sq.css(\"background-color\"));\n  });\n};\n\nView.prototype.setupEasel = function () {\n  const $addRowButton = $(\"<button>\").html(\"Add a row\");\n  this.$el.append($addRowButton);\n  $addRowButton.on(\"click\", this.addRow.bind(this));\n\n  for (let j = 0; j <= 7; j++) {\n    const $button = $(\"<button>\").html(\"Exercise \" + j);\n    $button.on(\"click\", this[\"exercise\" + j]);\n    this.$el.append($button);\n  }\n\n  for (let i = 0; i < 20; i++) {\n    this.addRow();\n  }\n};\n\nView.prototype.addRow = function () {\n  const rowIdx = this.$el.find(\".row\").length;\n  const $row = $(\"<ul>\").addClass(\"row\").addClass(\"group\");\n  for (let colIdx = 0; colIdx < 20; colIdx++) {\n    const $square = $(\"<li>\")\n      .addClass(\"square\")\n      .attr(\"data-pos\", [rowIdx, colIdx]);\n    $square.on(\"mouseenter\", (e) => {\n      const $square = $(e.currentTarget);\n      $square.css(\"background-color\", window._randomColorString());\n    });\n    $row.append($square);\n  }\n  this.$el.append($row);\n};\n\nmodule.exports = View;\n\n\n//# sourceURL=./js/view.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
eval("/* globals $ */\n\nvar View = __webpack_require__(/*! ./view */ \"./js/view.js\");\n\n$(function () {\n  var $easel = $(\"#easel\");\n  new View($easel);\n});\n\n\n//# sourceURL=./js/main.js");
})();

/******/ })()
;