/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// noconst sum = require(\"./modules/sum.js\");\nconst Select = __webpack_require__(/*! ./modules/select.js */ \"./src/js/modules/select.js\");\n\n\nconst selectApp = new Select('#elemId', {\n  placeholder: 'Option',\n  selectedDefault: '-1',\n  data: [\n    {id:0, value:'option1'},\n    {id:1, value:'option2'},\n    {id:2, value:'option3'},\n    {id:3, value:'option4'},\n    {id:4, value:'option5'},\n    {id:5, value:'option6'},\n  ],\n  onSelect(option) {\n    console.log('option', option);\n  }\n})\n\nwindow.s = selectApp;\n\n\n\n\n//# sourceURL=webpack://iana/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/***/ (function(module) {

eval("const getTemplate = (data, placeholder, selectedDefault) => {\n  let defaultPlaceholder = placeholder ?? 'placeholder не задан'\n\n\n\n  const optionİtem = data.map((item) => {\n    let cls = ''\n    if (item.id == selectedDefault) {\n      defaultPlaceholder = item.value;\n      cls = 'selected'\n    }\n    return ` <li class=\"select__item ${cls}\" data-type=\"option\" data-id=\"${item.id}\">${item.value}</li>`\n  })\n\n\n  \n  return `\n  \n  <div class=\"select__input\" data-type=\"input\">\n    <span class=\"select__input-text\" data-type=\"value\">${defaultPlaceholder}</span>\n    <i class=\"select__input-icon fa-solid fa-chevron-down\"></i>\n  </div>\n\n  <div class=\"select__dropdown\">\n    <ul class=\"select__list\">\n    ${optionİtem.join('')}\n    </ul>\n  </div>\n  <div class=\"select__backdrop\" data-type=\"backdrop\"></div>\n  `\n}\n\nconst select = class Select {\n  constructor(selector, options) {\n    this.el = document.querySelector(selector)\n    this.options = options;\n    this.selectedId = options.selectedDefault;\n\n    this.placeholder = options.placeholder;\n\n    this.#render();\n    this.#setup();\n  }\n\n  #render() {\n    const {placeholder} = this.options;\n    const {data} = this.options;\n    // console.log('data', data);\n    this.el.classList.add('select')\n    this.el.innerHTML = getTemplate(data, placeholder, this.selectedId );\n    this.doRed();\n  }\n\n  doRed() {\n    document.querySelector('.select__input-text').style.opacity = '0.5'\n    console.log('doRed', this.placeholder);\n  }\n\n  #setup() {\n    this.clickHandler = this.clickHandler.bind(this) \n    this.el.addEventListener('click', this.clickHandler)\n    this.value = this.el.querySelector('[data-type=\"value\"]')\n  }\n\n  clickHandler(event) {\n    const { type } = event.target.dataset\n\n    if (type === 'input') {\n      this.toggle()\n    } else if (type === 'option') {\n      const { id } = event.target.dataset;\n      this.select(id)\n    } else if (type === 'backdrop') {\n      this.close();\n    }\n\n\n  }\n\n  get isOpened() {\n    return this.el.classList.contains('opened')\n  }\n\n\n  get currentOption() {\n    return this.options.data.find(item => item.id == this.selectedId)\n    // return this.selectedId\n    // return this.options.data\n    // this.options.data.forEach((item) => console.log(item.id))\n  }\n\n  open() {\n    this.el.classList.add('opened')\n  }\n\n  select(id) {\n    this.selectedId = id;\n    // console.log('this.value.textContent ' , this.selectedId, this.currentOption)\n    this.value.textContent = this.currentOption.value;\n    document.querySelector('.select__input-text').style.opacity = '1'\n    this.el.querySelectorAll(`[data-type=\"option\"]`).forEach((el) => {\n      el.classList.remove('selected');\n    })\n\n    this.options.onSelect ? this.options.onSelect(this.currentOption) : null;\n\n    this.close();\n    this.el.querySelector(`[data-id=\"${id}\"]`).classList.add('selected')\n  }\n  toggle() {\n    this.isOpened ? \n    this.el.classList.remove('opened') :\n    this.el.classList.add('opened')\n  }\n  close() {\n    this.el.classList.remove('opened')\n  }\n  destroy() {\n    this.el.removeEventListener('click', this.clickHandler);\n    this.el.innerHTML = '';\n  }\n}\n\nmodule.exports = select;\n\n//# sourceURL=webpack://iana/./src/js/modules/select.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;