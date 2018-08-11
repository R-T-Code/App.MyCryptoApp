/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/index.scss":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/scss/index.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit; }\\n\\ntextarea,\\nselect,\\ninput,\\nbutton {\\n  outline: none; }\\n\\nhtml {\\n  font-size: 62.5%; }\\n\\nbody {\\n  box-sizing: border-box;\\n  font-size: 1.6rem;\\n  background-image: url(\" + escape(__webpack_require__(/*! ./../img/background.jpeg */ \"./src/img/background.jpeg\")) + \");\\n  background-size: cover;\\n  background-position: top;\\n  background-repeat: no-repeat;\\n  font-family: 'Roboto Mono', monospace;\\n  font-weight: 100;\\n  min-height: 100vh; }\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px; }\\n  @media only screen and (max-width: 900px) {\\n    .header {\\n      flex-direction: column;\\n      align-items: center; }\\n      .header * {\\n        margin: .2rem; } }\\n\\n.add-crypto {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: space-between;\\n  position: relative; }\\n  .add-crypto__input {\\n    width: 14rem;\\n    height: 2rem;\\n    border-radius: 3px;\\n    border: none;\\n    margin-right: .5rem;\\n    transition: .3s; }\\n    .add-crypto__input:focus {\\n      height: 3rem;\\n      border-top: 2px inset grey;\\n      border-bottom: 2px inset grey; }\\n  .add-crypto__btn {\\n    height: 3rem; }\\n  .add-crypto__output-container {\\n    flex: 0 0 100%;\\n    position: relative; }\\n  .add-crypto__output {\\n    width: 100%;\\n    position: absolute;\\n    color: white;\\n    border-radius: 3px;\\n    background-image: linear-gradient(to bottom, black, grey); }\\n  .add-crypto__input-match {\\n    list-style: none; }\\n    .add-crypto__input-match:hover {\\n      color: lightgray;\\n      cursor: pointer; }\\n\\n.market-cap {\\n  color: white;\\n  font-size: 4rem; }\\n  @media only screen and (max-width: 1100px) {\\n    .market-cap {\\n      font-size: 3.4rem; } }\\n  @media only screen and (max-width: 1000px) {\\n    .market-cap {\\n      font-size: 2.6rem; } }\\n\\n.my-portfolio {\\n  display: flex;\\n  color: white;\\n  align-items: center;\\n  min-width: 24rem; }\\n  .my-portfolio__amount {\\n    margin-left: .5rem; }\\n  .my-portfolio i {\\n    fill: red;\\n    font-size: 4rem; }\\n\\n.crypto-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around; }\\n  .crypto-container__crypto {\\n    padding: 2rem 3rem;\\n    margin: 1rem;\\n    background-color: rgba(29, 28, 28, 0.9);\\n    border-radius: 1rem;\\n    color: white;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center; }\\n  .crypto-container__img {\\n    background-image: linear-gradient(to bottom, black, white);\\n    border-radius: 1rem;\\n    padding: 1rem; }\\n  .crypto-container * {\\n    margin-bottom: .5rem; }\\n  .crypto-container__price-container {\\n    display: flex;\\n    margin: 0; }\\n  .crypto-container__own-amount {\\n    background-color: transparent;\\n    color: inherit;\\n    border: 1px solid inherit;\\n    font-size: inherit; }\\n    .crypto-container__own-amount::-webkit-inner-spin-button, .crypto-container__own-amount::-webkit-outer-spin-button {\\n      -webkit-appearance: none;\\n      margin: 0; }\\n\\n.negative {\\n  border: 1px solid black;\\n  box-shadow: inset 0 0 4px 4px red; }\\n\\n.positive {\\n  border: 1px solid black;\\n  box-shadow: inset 0 0 4px 4px green; }\\n\\n.delete-btn {\\n  margin-top: 1rem; }\\n\\n.btn {\\n  padding: .8rem;\\n  border: none;\\n  border-radius: 3px;\\n  background-image: linear-gradient(to right, grey, lightgrey);\\n  transition: .3s;\\n  font-family: inherit; }\\n  .btn:hover {\\n    cursor: pointer;\\n    transform: translateY(-2px);\\n    box-shadow: 0 1px 1px 0 white; }\\n  .btn:active {\\n    transform: translateY(0);\\n    box-shadow: 0 0 0 0 black; }\\n\\n.msg-error {\\n  color: red; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/scss/index.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/img/background.jpeg":
/*!*********************************!*\
  !*** ./src/img/background.jpeg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f1aa0316e66cc58b192750585a6cae50.jpeg\";\n\n//# sourceURL=webpack:///./src/img/background.jpeg?");

/***/ }),

/***/ "./src/js/cryptoAPI.js":
/*!*****************************!*\
  !*** ./src/js/cryptoAPI.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Creating a new class for API call \nvar CryptoAPI = exports.CryptoAPI = function () {\n    function CryptoAPI() {\n        _classCallCheck(this, CryptoAPI);\n    }\n\n    _createClass(CryptoAPI, [{\n        key: 'queryAPI',\n\n\n        //__api for all cryptos, returns - [id, name, symbol, website_slug]\n        value: async function queryAPI() {\n            // Query the url\n            var url = await fetch('https://api.coinmarketcap.com/v2/listings/');\n\n            // Return the info as json\n            var cryptoInfo = await url.json();\n\n            //Return info from the api as an object\n            return {\n                cryptoInfo: cryptoInfo\n            };\n        }\n\n        //__Query the rest api for each cryptocurrency\n\n    }, {\n        key: 'getCryptoData',\n        value: async function getCryptoData(id) {\n            var url = await fetch('https://api.coinmarketcap.com/v2/ticker/' + id + '/');\n\n            var cryptoData = await url.json();\n\n            return {\n                cryptoData: cryptoData\n            };\n        }\n\n        //__Query global data for the total market cap\n\n    }, {\n        key: 'getGlobalData',\n        value: async function getGlobalData() {\n            var url = await fetch('https://api.coinmarketcap.com/v2/global/');\n\n            var globalData = await url.json();\n\n            return {\n                globalData: globalData\n            };\n        }\n\n        //_Url for logo\n\n    }, {\n        key: 'getLogo',\n        value: function getLogo(id) {\n            var url = 'https://s2.coinmarketcap.com/static/img/coins/128x128/' + id + '.png';\n\n            return url;\n        }\n    }]);\n\n    return CryptoAPI;\n}();\n\n//# sourceURL=webpack:///./src/js/cryptoAPI.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n\nvar _cryptoAPI = __webpack_require__(/*! ./cryptoAPI.js */ \"./src/js/cryptoAPI.js\");\n\nvar _ui = __webpack_require__(/*! ./ui.js */ \"./src/js/ui.js\");\n\nvar UI = _interopRequireWildcard(_ui);\n\nvar _ls = __webpack_require__(/*! ./ls.js */ \"./src/js/ls.js\");\n\nvar LS = _interopRequireWildcard(_ls);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// use class for api calls\n// import css files for webpack\nvar cryptoAPI = new _cryptoAPI.CryptoAPI();\n\n// Add a new currency button\n\n\n// import js modules\nUI.addCryptoBtn.addEventListener('click', function () {\n    // read the crypto name from input\n    var newCrypto = UI.addCryptoInput.value;\n    // api for all cryptos, returns - [id, name, symbol, website_slug]\n    cryptoAPI.queryAPI().then(function (data) {\n        // path to all crypto array\n        var allCryptoInfoArr = data.cryptoInfo.data;\n\n        // match the newCrypto input to the all crypto array and get the ID\n        allCryptoInfoArr.forEach(function (crypto) {\n            // console log a currency info if cant guess the website slug\n            // if(crypto.symbol === 'BTCP'){\n            //     console.log(crypto);\n            // }\n            if (crypto.website_slug === newCrypto) {\n                var newCryptoID = crypto.id;\n\n                // using the id from first call for second api call to get full data on a single crypto\n                cryptoAPI.getCryptoData(newCryptoID).then(function (data) {\n                    // Prevents same crypto to be created\n                    var idArr = LS.getFromLS();\n                    var match = idArr.some(matchFunction);\n                    function matchFunction(crypto) {\n                        return crypto.id === newCryptoID;\n                    }\n                    if (match === false) {\n                        var cryptoData = data.cryptoData.data;\n                        var cryptoName = cryptoData.name;\n                        var cryptoPrice = cryptoData.quotes.USD.price;\n                        var cryptoChange = cryptoData.quotes.USD.percent_change_24h;\n                        var cryptoAmount = crypto.amount;\n                        UI.buildCryptoElement(cryptoName, cryptoPrice, cryptoChange, newCryptoID, cryptoAmount);\n\n                        // Add crypto id to local storage idArr\n                        LS.addToLS(newCryptoID);\n                    } else {\n                        UI.displayError('Currency already exists');\n                    }\n                }).catch(function (err) {\n                    console.log(err);\n                });\n            }\n        });\n    }).catch(function (err) {\n        console.log(err);\n    });\n    UI.clearInput();\n    UI.clearAddCryptoOutput();\n});\n\n// On page load display cryptos that are in local storage\ndocument.addEventListener('DOMContentLoaded', LS.loadCryptoFromLS);\n\n// Total market cap info\ncryptoAPI.getGlobalData().then(function (data) {\n    var marketCapPath = data.globalData.data.quotes.USD.total_market_cap;\n    var capArr = marketCapPath.toString().split('');\n    var formatedMarketCap = marketCapPath.toLocaleString();\n    UI.marketCap.innerHTML = '$ ' + formatedMarketCap + ' ' + UI.displayIll(capArr);\n});\n\n// calculate and show total portfolio\nUI.showMoneyBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    var portValue = 0;\n    var cryptoArr = document.querySelectorAll('.crypto-container__crypto');\n    cryptoArr.forEach(function (crypto) {\n        var ownAmount = crypto.querySelector('.crypto-container__own-amount').value;\n        var currPrice = crypto.querySelector('.crypto-container__price').textContent;\n        var ownValue = ownAmount * currPrice;\n        portValue += ownValue;\n    });\n\n    UI.showMoney.innerHTML = '$ ' + portValue.toFixed(2);\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/ls.js":
/*!**********************!*\
  !*** ./src/js/ls.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.addToLS = addToLS;\nexports.getFromLS = getFromLS;\nexports.deleteFromLS = deleteFromLS;\nexports.loadCryptoFromLS = loadCryptoFromLS;\nexports.updateLS = updateLS;\n\nvar _cryptoAPI = __webpack_require__(/*! ./cryptoAPI.js */ \"./src/js/cryptoAPI.js\");\n\nvar _ui = __webpack_require__(/*! ./ui.js */ \"./src/js/ui.js\");\n\nvar UI = _interopRequireWildcard(_ui);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// use class for api calls\nvar cryptoAPI = new _cryptoAPI.CryptoAPI();\n\n// Add id to local storage id array\nfunction addToLS(id) {\n    var idArr = getFromLS();\n    // If the crypto id is already in the array it won't be added again\n    if (idArr.length === 0) {\n        idArr.push({\n            id: id,\n            amount: 0\n        });\n    } else {\n        var matchFunction = function matchFunction(crypto) {\n            return crypto.id === id;\n        };\n\n        var match = idArr.some(matchFunction);\n\n        if (match === false) {\n            idArr.push({\n                id: id,\n                amount: 0\n            });\n        }\n        // The local storage part works, adds cryptos if a new one and doesnt if it exsists. Change the UI so it wouldnt add crypto if it exists\n    }\n\n    localStorage.setItem('idArr', JSON.stringify(idArr));\n}\n\n// Get id array from local storage\nfunction getFromLS() {\n    var idArr = void 0;\n\n    var idLS = localStorage.getItem('idArr');\n    if (idLS === null) {\n        idArr = [];\n    } else {\n        idArr = JSON.parse(idLS);\n    }\n    return idArr;\n}\n\n// Delete from local storage\nfunction deleteFromLS(id) {\n    //Get the id array form ls\n    var idArr = getFromLS();\n\n    for (var i = 0; i < idArr.length; i++) {\n        // DEVELOP DEVELOP DEVELOP\n        if (idArr[i].id === id) {\n            idArr.splice(idArr.indexOf(idArr[i]), 1);\n        }\n    }\n\n    // update the id arr in local storage\n    localStorage.setItem('idArr', JSON.stringify(idArr));\n}\n\n// on document load cryptos from local storage and create a crypto div element for each\nfunction loadCryptoFromLS() {\n    var idArr = getFromLS();\n\n    idArr.forEach(function (crypto) {\n        var id = crypto.id;\n        cryptoAPI.getCryptoData(id).then(function (data) {\n            var cryptoData = data.cryptoData.data;\n            var cryptoName = cryptoData.name;\n            var cryptoPrice = cryptoData.quotes.USD.price;\n            var cryptoChange = cryptoData.quotes.USD.percent_change_24h;\n            var cryptoAmount = crypto.amount;\n            UI.buildCryptoElement(cryptoName, cryptoPrice, cryptoChange, id, cryptoAmount);\n        }).catch(function (err) {\n            console.log(err);\n        });\n    });\n}\n\n// Update local storage when submited the owned amount\nfunction updateLS(id, amount) {\n    var idArr = getFromLS();\n\n    for (var i = 0; i < idArr.length; i++) {\n        if (idArr[i].id === id) {\n            idArr[i].id = id, idArr[i].amount = amount;\n        }\n    }\n\n    localStorage.setItem('idArr', JSON.stringify(idArr));\n}\n\n//# sourceURL=webpack:///./src/js/ls.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ownAmount = exports.showMoney = exports.showMoneyBtn = exports.marketCap = exports.deleteBtn = exports.container = exports.cryptoDayChange = exports.cryptoPrice = exports.cryptoName = exports.cryptoImg = exports.addCryptoBtn = exports.addCryptoOutput = exports.addCryptoInput = exports.addCrypto = undefined;\nexports.buildCryptoElement = buildCryptoElement;\nexports.displayError = displayError;\nexports.clearInput = clearInput;\nexports.clearAddCryptoOutput = clearAddCryptoOutput;\nexports.displayIll = displayIll;\nexports.showDate = showDate;\n\nvar _cryptoAPI = __webpack_require__(/*! ./cryptoAPI.js */ \"./src/js/cryptoAPI.js\");\n\nvar _ls = __webpack_require__(/*! ./ls.js */ \"./src/js/ls.js\");\n\nvar LS = _interopRequireWildcard(_ls);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// use class for api calls\nvar cryptoAPI = new _cryptoAPI.CryptoAPI();\n\n//_DOM variables\nvar addCrypto = exports.addCrypto = document.querySelector('.add-crypto'),\n    addCryptoInput = exports.addCryptoInput = document.querySelector('.add-crypto__input'),\n    addCryptoOutput = exports.addCryptoOutput = document.querySelector('.add-crypto__output'),\n    addCryptoBtn = exports.addCryptoBtn = document.querySelector('.add-crypto__btn'),\n    cryptoImg = exports.cryptoImg = document.querySelector('.crypto__img'),\n    cryptoName = exports.cryptoName = document.querySelector('.crypto__name'),\n    cryptoPrice = exports.cryptoPrice = document.querySelector('.crypto__price'),\n    cryptoDayChange = exports.cryptoDayChange = document.querySelector('.crypto__day-change'),\n    container = exports.container = document.querySelector('.crypto-container'),\n    deleteBtn = exports.deleteBtn = document.querySelector('.delete-btn'),\n    marketCap = exports.marketCap = document.querySelector('.market-cap__cap'),\n    showMoneyBtn = exports.showMoneyBtn = document.querySelector('.my-portfolio__btn'),\n    showMoney = exports.showMoney = document.querySelector('.my-portfolio__amount');\n\nvar ownAmount = exports.ownAmount = document.querySelector('.own-amount');\n\n//_Crypto element template\nfunction buildCryptoElement(name, price, change, id, amount) {\n    var cryptoDiv = document.createElement('div');\n    cryptoDiv.classList = \"crypto-container__crypto\";\n\n    // border color according to the day change value\n    if (change < 0) {\n        cryptoDiv.classList.add('negative');\n    } else {\n        cryptoDiv.classList.add('positive');\n    }\n\n    // the content of a crypto div element\n    var cryptoDivContent = '\\n            <div class=\"crypto-container__logo\">\\n                <img class=\"crypto-container__img\" src=\"' + cryptoAPI.getLogo(id) + '\" alt=\"\">\\n            </div>\\n            <p class=\"crypto-container__name\">' + name + '</p>\\n            <div class=\"crypto-container__price-container\">\\n                <p>$&nbsp;</p>\\n                <p class=\"crypto-container__price\">' + price.toFixed(2) + '</p>\\n            </div>\\n            <p class=\"crypto-container__day-change\">' + change + ' %</p>\\n            <input type=\"number\" class=\"crypto-container__own-amount\" value=\"' + (amount === undefined ? 0 : amount) + '\">\\n            <input type=\"submit\" class=\"crypto-container__own-btn btn\" value=\"update amount\" title=\"Update amount\">\\n            <div class=\"crypto-container__delete-btn btn\" title=\"Delete crypto currency\">X</div>\\n    ';\n    cryptoDiv.innerHTML = cryptoDivContent;\n\n    // Own Amount input reset on click\n    var ownInputArr = document.querySelectorAll('.crypto-container__own-amount');\n    ownInputArr.forEach(function (ownInput) {\n        ownInput.addEventListener('click', function () {\n            ownInput.value = '';\n        });\n    });\n\n    // MAKE ALL BUTTONS SHOW EFFECT ON TOUCH EVENT!!!\n\n\n    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!\n    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!\n    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!\n    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!\n    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!\n    // !!!!!!!!! THIS SHOULD BE IN app.js !!!!!!!!!!!!!!!!!!\n    // button to delete a crypto from porftolio\n    cryptoDiv.addEventListener('click', function (e) {\n        if (e.target.classList.contains('crypto-container__delete-btn')) {\n            // remove from DOM\n            var targetParent = e.target.parentElement;\n            targetParent.remove();\n            // remove from local storage\n            var targetID = id;\n            LS.deleteFromLS(targetID);\n        };\n\n        // button event to update the amount you own of a crypto\n        if (e.target.classList.contains('crypto-container__own-btn')) {\n            e.preventDefault();\n            // read the own input value\n            exports.ownAmount = ownAmount = e.target.previousElementSibling.value;\n\n            LS.updateLS(id, ownAmount);\n            // LS.addCryptoLS(id, ownAmount);\n        }\n    });\n\n    // Add crypto div element to the cointainer in DOM\n    container.appendChild(cryptoDiv);\n}\n\n//_Display error with passed in message\nfunction displayError(msg) {\n    var textEl = document.createElement('p');\n    // CREATE THE CSS FOR THIS CLASS TO BE RED AND INLINE WITH OTHER ELEMENTS;\n    textEl.classList.add('msg-error');\n    textEl.textContent = msg;\n    addCrypto.appendChild(textEl);\n    setTimeout(function () {\n        textEl.textContent = '';\n    }, 2000);\n}\n\n//_Clear input field\nfunction clearInput() {\n    addCryptoInput.value = '';\n}\n// Clear search field (type ahead) div container\nfunction clearAddCryptoOutput() {\n    addCryptoOutput.innerHTML = '';\n}\n\n//_Display the market cap amount in words\nfunction displayIll(arr) {\n    if (arr.length <= 9) {\n        return '(mil)';\n    } else if (arr.length <= 12 || arr.length > 9) {\n        return '(bil)';\n    } else {\n        return '(tril)';\n    }\n}\n\n// INPUT TYPE AHEAD (understand this and make sure its in right place!)\nvar cryptoArr = [];\n\ncryptoAPI.queryAPI().then(function (data) {\n    var dataArr = data.cryptoInfo.data;\n    cryptoArr.push.apply(cryptoArr, _toConsumableArray(dataArr));\n});\n\nfunction matchInput(wordToMatch, cryptoArr) {\n    return cryptoArr.filter(function (crypto) {\n        var regex = new RegExp(wordToMatch, 'gi');\n        return crypto.name.match(regex) || crypto.website_slug.match(regex);\n    });\n}\n\n// addCryptoInput.addEventListener('change', displayMatch);\naddCryptoInput.addEventListener('keyup', displayMatch);\n\nfunction displayMatch() {\n    var matchArray = matchInput(this.value, cryptoArr);\n    var html = matchArray.map(function (crypto) {\n        return '\\n            <li class=\"add-crypto__input-match\">' + crypto.name + ' (' + crypto.website_slug + ')</li>';\n    }).join('');\n    addCryptoOutput.innerHTML = html;\n\n    var liArray = Array.from(document.querySelectorAll('.add-crypto__input-match'));\n    liArray.forEach(function (li) {\n        li.addEventListener('click', function (e) {\n            var liWebsiteSlug = e.target.textContent.split('(')[1];\n            var liToInputEntry = liWebsiteSlug.substring(0, liWebsiteSlug.length - 1);\n            var liElement = document.querySelector('.add-crypto__input-match');\n            addCryptoInput.value = liToInputEntry;\n            clearAddCryptoOutput();\n        });\n    });\n\n    if (addCryptoInput.value === \"\") {\n        clearAddCryptoOutput();\n    }\n}\n\n// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //\n// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //\n// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //\n// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //\n// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //\n// DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE DATE //\n//_Display day and date\nfunction showDate() {\n    var date = new Date();\n    // Day returned as 0-6.\n    var weekDay = date.getDay();\n    if (weekDay === 0) {\n        return 'Sunday';\n    } else if (weekDay === 1) {\n        return 'Monday';\n    } else if (weekDay === 2) {\n        return 'Tuesday';\n    } else if (weekDay === 3) {\n        return 'Wednesday';\n    } else if (weekDay === 4) {\n        return 'Thursday';\n    } else if (weekDay === 5) {\n        return 'Friday';\n    } else if (weekDay === 6) {\n        return 'Saturday';\n    }\n\n    // Year\n    var year = date.getFullYear();\n    // Month\n    var month = date.getMonth();\n    // Day\n    var day = date.getDate();\n    console.log(day);\n}\nshowDate();\n\n//# sourceURL=webpack:///./src/js/ui.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./index.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ })

/******/ });