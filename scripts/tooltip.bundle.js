(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("node-fetch"), require("pngjs"));
	else if(typeof define === 'function' && define.amd)
		define(["node-fetch", "pngjs"], factory);
	else if(typeof exports === 'object')
		exports["PC"] = factory(require("node-fetch"), require("pngjs"));
	else
		root["PC"] = factory(root["node-fetch"], root["pngjs"]);
})((typeof self!='undefined'?self:this), function(__WEBPACK_EXTERNAL_MODULE_node_fetch__, __WEBPACK_EXTERNAL_MODULE_pngjs__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../libs/alt1/base/alt1api.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),

/***/ "../../../../../libs/alt1/base/declarations.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//for some reason this got removed from ts standard declaretion files
//interface Storage { [key: string]: string }


/***/ }),

/***/ "../../../../../libs/alt1/ocr/fonts/aa_10px_mono.fontmeta.json":
/***/ (function(module, exports) {

module.exports = {"chars":[{"width":4,"chr":"!","bonus":40,"secondary":false,"pixels":[1,1,238,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,10,238]},{"width":5,"chr":"\"","bonus":30,"secondary":true,"pixels":[1,0,187,1,1,255,2,0,153,2,1,153,3,0,255,3,1,187]},{"width":10,"chr":"#","bonus":160,"secondary":false,"pixels":[1,4,238,1,8,255,2,4,255,2,8,255,2,9,221,2,10,255,3,1,153,3,2,187,3,3,221,3,4,255,3,5,255,3,6,204,3,7,170,3,8,255,4,1,153,4,4,255,4,8,255,5,4,255,5,8,255,5,9,204,5,10,255,6,2,187,6,3,221,6,4,255,6,5,255,6,6,221,6,7,187,6,8,255,7,1,153,7,4,255,7,8,255,8,4,255]},{"width":8,"chr":"$","bonus":105,"secondary":false,"pixels":[1,2,221,1,3,255,1,4,255,1,9,238,2,1,221,2,2,153,2,5,255,2,10,238,3,0,255,3,1,255,3,5,187,3,6,170,3,10,255,3,11,255,4,1,238,4,6,255,4,10,221,5,2,153,5,7,255,5,8,255,5,9,238]},{"width":10,"chr":"%","bonus":125,"secondary":false,"pixels":[1,2,255,1,3,255,1,10,187,2,1,255,2,4,255,2,9,238,3,2,255,3,3,255,3,7,170,3,8,221,4,6,238,5,4,153,5,5,238,5,8,255,5,9,255,6,3,238,6,4,170,6,7,255,6,10,255,7,2,238,7,7,255,7,10,255,8,1,187,8,8,255,8,9,255]},{"width":9,"chr":"&","bonus":150,"secondary":false,"pixels":[1,2,204,1,3,255,1,4,204,1,6,204,1,7,255,1,8,255,1,9,204,2,1,204,2,2,170,2,4,153,2,5,255,2,6,187,2,9,187,2,10,187,3,1,255,3,5,255,3,10,255,4,1,255,4,5,255,4,10,255,5,5,255,5,9,204,5,10,170,6,4,255,6,5,255,6,6,255,6,7,255,6,8,238,6,9,153,7,5,255]},{"width":4,"chr":"'","bonus":10,"secondary":true,"pixels":[2,1,221,2,2,187]},{"width":4,"chr":"(","bonus":55,"secondary":false,"pixels":[1,3,170,1,4,221,1,5,255,1,6,255,1,7,255,1,8,221,1,9,170,2,1,221,2,2,204,2,10,187,2,11,255]},{"width":4,"chr":")","bonus":55,"secondary":false,"pixels":[1,1,221,1,2,204,1,10,187,1,11,255,2,3,170,2,4,221,2,5,255,2,6,255,2,7,255,2,8,221,2,9,170]},{"width":7,"chr":"*","bonus":60,"secondary":false,"pixels":[1,3,170,2,3,238,2,4,170,2,5,238,3,1,255,3,2,255,3,3,255,3,4,238,4,3,238,4,4,170,4,5,238,5,3,153]},{"width":9,"chr":"+","bonus":65,"secondary":false,"pixels":[1,7,255,2,7,255,3,7,255,4,4,255,4,5,255,4,6,255,4,7,255,4,8,255,4,9,255,4,10,255,5,7,255,6,7,255,7,7,255]},{"width":4,"chr":",","bonus":20,"secondary":true,"pixels":[1,10,187,1,11,170,2,9,255,2,10,153]},{"width":6,"chr":"-","bonus":20,"secondary":true,"pixels":[1,7,255,2,7,255,3,7,255,4,7,170]},{"width":4,"chr":".","bonus":5,"secondary":true,"pixels":[1,10,255]},{"width":6,"chr":"/","bonus":55,"secondary":false,"pixels":[1,10,187,1,11,187,2,7,204,2,8,255,2,9,187,3,3,170,3,4,255,3,5,221,3,6,153,4,1,255,4,2,204]},{"width":9,"chr":"0","bonus":110,"secondary":false,"pixels":[1,3,187,1,4,238,1,5,255,1,6,255,1,7,238,1,8,187,2,2,255,2,9,255,3,1,238,3,10,238,4,1,255,4,10,255,5,1,238,5,10,238,6,2,255,6,9,255,7,3,187,7,4,238,7,5,255,7,6,255,7,7,238,7,8,187]},{"width":7,"chr":"1","bonus":80,"secondary":false,"pixels":[1,3,204,1,10,255,2,2,238,2,10,255,3,1,255,3,2,255,3,3,255,3,4,255,3,5,255,3,6,255,3,7,255,3,8,255,3,9,255,3,10,255,4,10,255,5,10,255]},{"width":8,"chr":"2","bonus":110,"secondary":false,"pixels":[2,2,255,2,8,204,2,9,255,2,10,255,3,1,204,3,7,221,3,8,170,3,10,255,4,1,255,4,6,204,4,7,170,4,10,255,5,1,221,5,2,153,5,5,187,5,6,204,5,10,255,6,2,221,6,3,255,6,4,255,6,5,170,6,10,255]},{"width":8,"chr":"3","bonus":120,"secondary":false,"pixels":[1,9,170,2,1,255,2,9,187,2,10,170,3,1,255,3,5,255,3,10,255,4,1,255,4,3,170,4,4,221,4,5,238,4,10,255,5,1,255,5,2,238,5,3,187,5,5,170,5,6,187,5,9,187,5,10,170,6,1,255,6,6,187,6,7,255,6,8,255,6,9,187]},{"width":9,"chr":"4","bonus":115,"secondary":false,"pixels":[1,6,187,1,7,255,2,5,221,2,6,153,2,7,255,3,4,238,3,7,255,4,3,238,4,7,255,5,1,170,5,2,255,5,7,255,6,1,255,6,2,255,6,3,255,6,4,255,6,5,255,6,6,255,6,7,255,6,8,255,6,9,255,6,10,255,7,7,255]},{"width":8,"chr":"5","bonus":120,"secondary":false,"pixels":[1,9,153,2,1,255,2,2,255,2,3,255,2,4,221,2,5,255,2,9,153,2,10,187,3,1,255,3,5,255,3,10,255,4,1,255,4,5,255,4,10,255,5,1,255,5,5,187,5,6,187,5,9,187,5,10,170,6,1,170,6,6,187,6,7,255,6,8,255,6,9,187]},{"width":9,"chr":"6","bonus":150,"secondary":false,"pixels":[1,4,187,1,5,238,1,6,255,1,7,255,1,8,187,2,2,153,2,3,255,2,4,170,2,5,204,2,6,204,2,8,170,2,9,255,3,2,238,3,5,238,3,10,221,4,1,238,4,5,255,4,10,255,5,1,255,5,5,255,5,10,255,6,1,255,6,5,170,6,6,204,6,9,221,6,10,153,7,6,170,7,7,255,7,8,255,7,9,153]},{"width":9,"chr":"7","bonus":95,"secondary":false,"pixels":[1,1,255,2,1,255,2,8,153,2,9,255,2,10,204,3,1,255,3,6,153,3,7,255,3,8,187,4,1,255,4,4,153,4,5,255,4,6,187,5,1,255,5,2,187,5,3,255,5,4,187,6,1,255,6,2,170]},{"width":9,"chr":"8","bonus":170,"secondary":false,"pixels":[1,2,204,1,3,255,1,4,204,1,6,153,1,7,255,1,8,255,1,9,153,2,1,187,2,2,187,2,4,187,2,5,255,2,6,204,2,9,221,2,10,153,3,1,255,3,5,255,3,10,255,4,1,255,4,5,170,4,10,255,5,1,204,5,2,153,5,5,204,5,6,204,5,10,238,6,2,238,6,3,255,6,4,255,6,5,170,6,6,255,6,9,221,7,7,238,7,8,255,7,9,153]},{"width":9,"chr":"9","bonus":140,"secondary":false,"pixels":[1,3,238,1,4,255,1,5,238,2,2,238,2,6,238,2,10,255,3,1,255,3,7,238,3,10,255,4,1,255,4,7,255,4,10,238,5,1,204,5,2,153,5,7,204,5,9,204,5,10,153,6,2,238,6,3,187,6,6,238,6,7,187,6,8,221,6,9,204,7,3,153,7,4,221,7,5,255,7,6,255,7,7,221]},{"width":3,"chr":":","bonus":10,"secondary":true,"pixels":[1,3,255,1,9,255]},{"width":4,"chr":";","bonus":15,"secondary":true,"pixels":[2,3,255,2,9,255,2,10,204]},{"width":8,"chr":"<","bonus":60,"secondary":false,"pixels":[1,5,187,1,6,238,2,5,255,2,6,204,3,4,170,3,7,204,4,4,255,4,7,238,5,4,170,5,8,187,6,3,187,6,8,204]},{"width":9,"chr":"=","bonus":70,"secondary":false,"pixels":[1,6,221,1,8,221,2,6,255,2,8,255,3,6,255,3,8,255,4,6,255,4,8,255,5,6,255,5,8,255,6,6,255,6,8,255,7,6,255,7,8,255]},{"width":8,"chr":">","bonus":75,"secondary":false,"pixels":[1,3,153,2,3,153,2,4,170,2,8,255,3,4,255,3,7,187,3,8,170,4,4,170,4,5,153,4,7,255,5,5,255,5,6,187,5,7,153,6,5,170,6,6,255]},{"width":6,"chr":"?","bonus":55,"secondary":false,"pixels":[1,1,204,2,1,255,2,6,187,2,7,255,2,10,255,3,1,238,3,5,238,3,6,153,4,2,238,4,3,255,4,4,255]},{"width":10,"chr":"@","bonus":165,"secondary":false,"pixels":[1,5,153,1,6,255,1,7,255,1,8,255,1,9,187,2,4,204,2,5,187,2,9,170,2,10,255,3,4,204,3,11,255,4,3,238,4,6,238,4,7,255,4,8,238,4,12,187,5,3,255,5,5,204,5,9,221,5,12,255,6,3,255,6,5,255,6,9,255,7,3,221,7,5,255,7,9,255,8,4,221,8,5,255,8,6,255,8,7,255,8,8,255,8,9,255,9,9,255]},{"width":10,"chr":"A","bonus":140,"secondary":false,"pixels":[1,9,153,1,10,238,2,7,221,2,8,255,2,9,204,3,4,204,3,5,255,3,6,204,3,7,255,4,1,187,4,2,255,4,3,204,4,7,255,5,1,238,5,2,255,5,3,187,5,7,255,6,3,153,6,4,238,6,5,255,6,6,187,6,7,255,7,6,153,7,7,255,7,8,255,7,9,170,8,9,187,8,10,255]},{"width":9,"chr":"B","bonus":160,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,1,255,2,6,255,2,10,255,3,1,255,3,6,255,3,10,255,4,1,255,4,6,255,4,10,255,5,1,221,5,2,153,5,5,170,5,6,255,5,9,153,5,10,204,6,2,238,6,3,255,6,4,255,6,5,204,6,7,238,6,8,255,6,9,238]},{"width":10,"chr":"C","bonus":105,"secondary":false,"pixels":[1,3,153,1,4,255,1,5,255,1,6,255,1,7,238,2,2,204,2,3,204,2,8,204,2,9,204,3,2,187,3,9,204,4,1,221,4,10,221,5,1,255,5,10,255,6,1,238,6,10,238,7,1,187,7,10,187,8,2,221,8,9,255]},{"width":10,"chr":"D","bonus":160,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,1,255,2,10,255,3,1,255,3,10,255,4,1,255,4,10,255,5,1,238,5,10,238,6,1,153,6,2,204,6,9,204,6,10,153,7,2,221,7,3,204,7,8,204,7,9,221,8,3,170,8,4,255,8,5,255,8,6,255,8,7,255,8,8,170]},{"width":8,"chr":"E","bonus":105,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,1,255,2,6,255,2,10,255,3,1,255,3,6,255,3,10,255,4,1,255,4,6,255,4,10,255,5,1,255,5,10,255]},{"width":7,"chr":"F","bonus":85,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,1,255,2,6,255,3,1,255,3,6,255,4,1,255,4,6,255,5,1,255]},{"width":10,"chr":"G","bonus":145,"secondary":false,"pixels":[1,3,153,1,4,255,1,5,255,1,6,255,1,7,255,1,8,153,2,2,204,2,3,187,2,8,204,2,9,221,3,1,153,3,2,187,3,9,187,3,10,170,4,1,255,4,10,255,5,1,255,5,10,255,6,1,238,6,6,170,6,10,204,7,2,204,7,6,255,7,9,238,8,6,255,8,7,255,8,8,255,8,9,255,8,10,255]},{"width":9,"chr":"H","bonus":125,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,6,255,3,6,255,4,6,255,5,6,255,6,6,255,7,1,255,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255,7,9,255,7,10,255]},{"width":5,"chr":"I","bonus":70,"secondary":false,"pixels":[1,1,255,1,10,255,2,1,255,2,2,255,2,3,255,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,3,1,255,3,10,255]},{"width":8,"chr":"J","bonus":100,"secondary":false,"pixels":[1,8,255,1,9,187,2,9,187,2,10,187,3,1,221,3,10,255,4,1,255,4,10,255,5,1,255,5,9,187,5,10,187,6,1,255,6,2,255,6,3,255,6,4,255,6,5,255,6,6,255,6,7,255,6,8,255,6,9,187]},{"width":9,"chr":"K","bonus":120,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,6,255,3,6,255,4,4,187,4,5,255,4,6,170,4,7,255,5,2,187,5,3,255,5,8,221,5,9,204,6,1,255,6,2,153,6,9,153,6,10,255]},{"width":8,"chr":"L","bonus":75,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,10,255,3,10,255,4,10,255,5,10,255,6,10,170]},{"width":11,"chr":"M","bonus":180,"secondary":false,"pixels":[1,3,170,1,4,170,1,5,204,1,6,221,1,7,238,1,8,255,1,9,255,1,10,255,2,1,255,2,2,255,2,3,255,2,4,170,3,3,204,3,4,255,3,5,170,4,5,153,4,6,255,4,7,221,5,7,221,5,8,255,6,5,187,6,6,255,6,7,187,7,3,221,7,4,238,8,1,255,8,2,255,8,3,255,8,4,187,8,5,153,9,5,170,9,6,187,9,7,204,9,8,221,9,9,238,9,10,255]},{"width":10,"chr":"N","bonus":145,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,2,238,2,3,221,3,3,170,3,4,255,4,5,221,4,6,204,5,7,255,6,8,204,6,9,221,7,1,255,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255,7,9,255,7,10,255]},{"width":11,"chr":"O","bonus":130,"secondary":false,"pixels":[1,4,255,1,5,255,1,6,255,1,7,238,2,2,204,2,3,204,2,8,204,2,9,204,3,2,187,3,9,187,4,1,221,4,10,221,5,1,255,5,10,255,6,1,221,6,10,221,7,2,204,7,9,221,8,2,187,8,3,221,8,8,221,8,9,170,9,4,221,9,5,255,9,6,255,9,7,204]},{"width":9,"chr":"P","bonus":125,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,1,255,2,7,255,3,1,255,3,7,255,4,1,255,4,7,255,5,1,187,5,2,187,5,6,187,5,7,187,6,2,187,6,3,255,6,4,255,6,5,255,6,6,187]},{"width":11,"chr":"Q","bonus":140,"secondary":false,"pixels":[1,4,255,1,5,255,1,6,255,1,7,238,2,2,204,2,3,204,2,8,204,2,9,204,3,2,187,3,9,187,4,1,238,4,10,238,5,1,255,5,10,255,6,1,221,6,10,221,7,2,204,7,8,238,7,9,221,8,2,187,8,3,221,8,8,238,8,9,255,9,4,221,9,5,255,9,6,255,9,7,204,9,10,187]},{"width":9,"chr":"R","bonus":140,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,1,255,2,6,255,3,1,255,3,6,255,4,1,255,4,6,255,5,1,204,5,2,153,5,5,153,5,6,221,5,7,238,5,8,238,6,2,221,6,3,255,6,4,255,6,5,221,6,9,238,6,10,221]},{"width":7,"chr":"S","bonus":95,"secondary":false,"pixels":[1,2,221,1,3,255,1,4,255,1,9,238,2,1,204,2,2,153,2,5,255,2,10,238,3,1,255,3,5,187,3,6,153,3,10,255,4,1,238,4,6,255,4,10,221,5,2,170,5,7,255,5,8,255,5,9,238]},{"width":10,"chr":"T","bonus":80,"secondary":false,"pixels":[1,1,255,2,1,255,3,1,255,4,1,255,4,2,255,4,3,255,4,4,255,4,5,255,4,6,255,4,7,255,4,8,255,4,9,255,4,10,255,5,1,255,6,1,255,7,1,255]},{"width":10,"chr":"U","bonus":110,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,238,2,9,238,3,10,204,4,10,255,5,10,255,6,10,204,7,9,238,8,1,255,8,2,255,8,3,255,8,4,255,8,5,255,8,6,255,8,7,255,8,8,221]},{"width":10,"chr":"V","bonus":110,"secondary":false,"pixels":[1,1,238,1,2,153,2,2,187,2,3,255,2,4,221,3,5,187,3,6,255,3,7,204,4,8,204,4,9,255,4,10,204,5,8,204,5,9,255,5,10,204,6,5,187,6,6,255,6,7,204,7,2,187,7,3,255,7,4,221,8,1,238,8,2,153]},{"width":13,"chr":"W","bonus":195,"secondary":false,"pixels":[1,1,255,1,2,187,2,3,187,2,4,255,2,5,255,2,6,204,3,7,170,3,8,221,3,9,255,3,10,221,4,7,170,4,8,238,4,9,255,4,10,187,5,3,187,5,4,255,5,5,255,5,6,187,6,1,255,6,2,255,6,3,255,7,3,170,7,4,238,7,5,255,7,6,204,8,7,153,8,8,221,8,9,255,8,10,204,9,7,187,9,8,255,9,9,255,9,10,204,10,3,204,10,4,255,10,5,255,10,6,187,11,1,255,11,2,187]},{"width":9,"chr":"X","bonus":125,"secondary":false,"pixels":[1,1,221,1,10,255,2,1,153,2,2,255,2,3,187,2,8,238,2,9,221,3,3,170,3,4,255,3,5,153,3,6,204,3,7,238,4,4,187,4,5,255,4,6,255,5,3,238,5,4,221,5,7,255,5,8,170,6,1,221,6,2,238,6,8,187,6,9,255,7,1,153,7,10,221]},{"width":9,"chr":"Y","bonus":80,"secondary":false,"pixels":[1,1,238,2,2,238,2,3,204,3,4,255,3,5,187,4,5,255,4,6,255,4,7,255,4,8,255,4,9,255,4,10,255,5,4,238,5,5,204,6,2,221,6,3,238,7,1,255]},{"width":9,"chr":"Z","bonus":115,"secondary":false,"pixels":[1,10,170,2,1,255,2,8,153,2,9,255,2,10,255,3,1,255,3,7,238,3,8,221,3,10,255,4,1,255,4,5,187,4,6,255,4,10,255,5,1,255,5,4,255,5,5,187,5,10,255,6,1,255,6,2,204,6,3,221,6,10,255,7,1,255,7,10,255]},{"width":4,"chr":"[","bonus":65,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,2,1,255,2,11,255]},{"width":6,"chr":"\\","bonus":50,"secondary":false,"pixels":[1,1,238,1,2,255,1,3,170,2,4,221,2,5,255,2,6,187,3,7,204,3,8,255,3,9,187,4,10,204]},{"width":3,"chr":"]","bonus":65,"secondary":false,"pixels":[0,1,255,0,11,255,1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255]},{"width":8,"chr":"^","bonus":55,"secondary":false,"pixels":[1,6,170,2,4,221,2,5,238,3,2,255,3,3,187,4,1,187,4,2,255,4,3,153,5,4,255,5,5,204,6,6,204]},{"width":9,"chr":"_","bonus":35,"secondary":false,"pixels":[1,11,255,2,11,255,3,11,255,4,11,255,5,11,255,6,11,255,7,11,255]},{"width":8,"chr":"a","bonus":110,"secondary":false,"pixels":[1,8,221,1,9,255,2,4,187,2,7,170,2,8,153,2,10,221,3,4,255,3,7,221,3,10,255,4,4,255,4,7,255,4,10,238,5,4,204,5,5,170,5,7,255,5,9,204,6,5,204,6,6,255,6,7,255,6,8,255,6,9,255,6,10,255]},{"width":8,"chr":"b","bonus":135,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,4,153,2,5,221,2,9,221,2,10,153,3,4,238,3,10,238,4,4,255,4,10,255,5,4,187,5,5,187,5,9,187,5,10,170,6,5,187,6,6,255,6,7,255,6,8,255,6,9,170]},{"width":8,"chr":"c","bonus":60,"secondary":false,"pixels":[1,6,255,1,7,255,1,8,255,2,5,221,2,9,221,3,4,238,3,10,238,4,4,255,4,10,255,5,4,221,5,10,221,6,9,204]},{"width":8,"chr":"d","bonus":135,"secondary":false,"pixels":[1,5,170,1,6,255,1,7,255,1,8,255,1,9,187,2,4,170,2,5,187,2,9,187,2,10,170,3,4,255,3,10,255,4,4,238,4,10,238,5,4,153,5,5,221,5,9,221,5,10,153,6,1,255,6,2,255,6,3,255,6,4,255,6,5,255,6,6,255,6,7,255,6,8,255,6,9,255,6,10,255]},{"width":8,"chr":"e","bonus":100,"secondary":false,"pixels":[1,6,255,1,7,255,1,8,255,1,9,153,2,5,204,2,7,255,2,9,204,3,4,255,3,7,255,3,10,238,4,4,255,4,7,255,4,10,255,5,4,170,5,5,187,5,7,255,5,10,221,6,5,153,6,6,238,6,7,255]},{"width":6,"chr":"f","bonus":70,"secondary":false,"pixels":[1,4,221,2,2,221,2,3,255,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,3,1,221,3,4,255,4,1,255,4,4,221]},{"width":8,"chr":"g","bonus":135,"secondary":false,"pixels":[1,5,187,1,6,255,1,7,255,1,8,255,1,9,187,2,4,204,2,5,170,2,9,170,2,10,221,2,13,238,3,4,255,3,10,255,3,13,255,4,4,187,4,5,153,4,10,204,4,12,170,4,13,187,5,4,255,5,5,255,5,6,255,5,7,255,5,8,255,5,9,255,5,10,255,5,11,255,5,12,204]},{"width":9,"chr":"h","bonus":100,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,5,238,3,4,204,4,4,255,5,4,238,6,5,255,6,6,255,6,7,255,6,8,255,6,9,255,6,10,255]},{"width":4,"chr":"i","bonus":40,"secondary":false,"pixels":[1,1,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255]},{"width":5,"chr":"j","bonus":60,"secondary":false,"pixels":[0,13,221,1,13,238,2,1,255,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,2,11,255,2,12,255]},{"width":7,"chr":"k","bonus":100,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,7,255,3,6,187,3,7,255,3,8,170,4,5,255,4,6,170,4,8,187,4,9,221,5,4,255,5,10,255]},{"width":5,"chr":"l","bonus":50,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,2,10,255]},{"width":12,"chr":"m","bonus":130,"secondary":false,"pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,5,238,3,4,204,4,4,255,5,4,221,6,5,238,6,6,255,6,7,255,6,8,255,6,9,255,6,10,255,7,5,204,8,4,255,9,4,255,10,5,255,10,6,255,10,7,255,10,8,255,10,9,255,10,10,255]},{"width":8,"chr":"n","bonus":85,"secondary":false,"pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,5,238,3,4,204,4,4,255,5,4,238,6,5,255,6,6,255,6,7,255,6,8,255,6,9,255,6,10,255]},{"width":9,"chr":"o","bonus":80,"secondary":false,"pixels":[1,6,255,1,7,255,1,8,255,2,5,221,2,9,221,3,4,221,3,10,221,4,4,255,4,10,255,5,4,221,5,10,221,6,5,238,6,9,238,7,6,221,7,7,255,7,8,221]},{"width":8,"chr":"p","bonus":130,"secondary":false,"pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,153,2,5,204,2,9,221,2,10,153,3,4,238,3,10,238,4,4,255,4,10,255,5,4,187,5,5,187,5,9,187,5,10,170,6,5,187,6,6,255,6,7,255,6,8,255,6,9,170]},{"width":8,"chr":"q","bonus":130,"secondary":false,"pixels":[1,5,170,1,6,255,1,7,255,1,8,255,1,9,187,2,4,170,2,5,187,2,9,187,2,10,187,3,4,255,3,10,255,4,4,238,4,10,238,5,4,153,5,5,204,5,9,221,5,10,153,6,4,255,6,5,255,6,6,255,6,7,255,6,8,255,6,9,255,6,10,255,6,11,255,6,12,255]},{"width":6,"chr":"r","bonus":45,"secondary":false,"pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,2,5,238,3,4,238]},{"width":6,"chr":"s","bonus":65,"secondary":false,"pixels":[1,5,255,1,6,255,1,9,153,1,10,170,2,4,255,2,7,221,2,10,255,3,4,255,3,7,238,3,10,255,4,4,153,4,8,255,4,9,255]},{"width":5,"chr":"t","bonus":65,"secondary":false,"pixels":[0,4,255,1,2,238,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,221,2,4,255,2,10,221,3,4,221,3,10,255]},{"width":9,"chr":"u","bonus":85,"secondary":false,"pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,238,2,10,221,3,10,255,4,10,221,5,9,221,6,4,255,6,5,255,6,6,255,6,7,255,6,8,255,6,9,255,6,10,255]},{"width":8,"chr":"v","bonus":75,"secondary":false,"pixels":[1,4,238,2,5,187,2,6,255,2,7,204,3,8,221,3,9,255,3,10,170,4,8,153,4,9,255,4,10,238,5,6,221,5,7,255,5,8,170,6,4,255,6,5,204]},{"width":12,"chr":"w","bonus":135,"secondary":false,"pixels":[1,4,238,1,5,153,2,5,170,2,6,255,2,7,238,2,8,153,3,8,153,3,9,255,3,10,255,4,8,204,4,9,255,4,10,170,5,5,187,5,6,255,5,7,187,6,5,255,6,6,221,7,7,187,7,8,255,7,9,187,8,9,255,8,10,255,9,6,187,9,7,255,9,8,221,10,4,255,10,5,204]},{"width":8,"chr":"x","bonus":90,"secondary":false,"pixels":[1,4,153,1,10,221,2,4,204,2,5,238,2,9,255,2,10,153,3,6,238,3,7,238,3,8,221,4,6,238,4,7,238,4,8,221,5,4,204,5,5,238,5,9,255,5,10,153,6,4,153,6,10,221]},{"width":9,"chr":"y","bonus":100,"secondary":false,"pixels":[1,4,238,1,13,204,2,5,221,2,6,255,2,7,170,2,13,255,3,7,153,3,8,238,3,9,238,3,12,238,3,13,153,4,9,255,4,10,255,4,11,187,5,6,170,5,7,255,5,8,221,6,4,238,6,5,255,6,6,170]},{"width":8,"chr":"z","bonus":95,"secondary":false,"pixels":[1,4,255,1,10,255,2,4,255,2,8,187,2,9,255,2,10,255,3,4,255,3,7,221,3,8,187,3,10,255,4,4,255,4,6,238,4,7,153,4,10,255,5,4,255,5,5,255,5,10,255,6,4,238,6,10,255]},{"width":6,"chr":"{","bonus":55,"secondary":false,"pixels":[1,6,255,2,2,255,2,3,255,2,4,255,2,5,221,2,7,238,2,8,255,2,9,255,2,10,255,3,1,255,3,11,255]},{"width":4,"chr":"|","bonus":60,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255]},{"width":5,"chr":"}","bonus":55,"secondary":false,"pixels":[1,1,255,1,11,255,2,2,221,2,3,255,2,4,255,2,5,238,2,7,255,2,8,255,2,9,255,2,10,221,3,6,255]},{"width":8,"chr":"~","bonus":30,"secondary":false,"pixels":[1,6,238,2,5,255,3,5,238,4,6,238,5,6,255,6,5,238]}],"width":13,"spacewidth":3,"shadow":false,"height":14,"basey":10}

/***/ }),

/***/ "./tooltip.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var imagedetect_namespaceObject = {};
__webpack_require__.r(imagedetect_namespaceObject);
__webpack_require__.d(imagedetect_namespaceObject, "imageDataFromUrl", function() { return imageDataFromUrl; });
__webpack_require__.d(imagedetect_namespaceObject, "imageDataFromBase64", function() { return imageDataFromBase64; });
__webpack_require__.d(imagedetect_namespaceObject, "isPngBuffer", function() { return isPngBuffer; });
__webpack_require__.d(imagedetect_namespaceObject, "clearPngColorspace", function() { return clearPngColorspace; });
__webpack_require__.d(imagedetect_namespaceObject, "findSubimage", function() { return findSubimage; });
__webpack_require__.d(imagedetect_namespaceObject, "findSubbuffer", function() { return findSubbuffer; });
__webpack_require__.d(imagedetect_namespaceObject, "simpleCompare", function() { return simpleCompare; });
__webpack_require__.d(imagedetect_namespaceObject, "coldif", function() { return coldif; });
__webpack_require__.d(imagedetect_namespaceObject, "asyncMap", function() { return asyncMap; });
__webpack_require__.d(imagedetect_namespaceObject, "webpackImages", function() { return webpackImages; });
var ocr_namespaceObject = {};
__webpack_require__.r(ocr_namespaceObject);
__webpack_require__.d(ocr_namespaceObject, "debug", function() { return debug; });
__webpack_require__.d(ocr_namespaceObject, "debugout", function() { return debugout; });
__webpack_require__.d(ocr_namespaceObject, "debugFont", function() { return debugFont; });
__webpack_require__.d(ocr_namespaceObject, "unblendKnownBg", function() { return unblendKnownBg; });
__webpack_require__.d(ocr_namespaceObject, "unblendTrans", function() { return unblendTrans; });
__webpack_require__.d(ocr_namespaceObject, "canblend", function() { return canblend; });
__webpack_require__.d(ocr_namespaceObject, "decompose2col", function() { return decompose2col; });
__webpack_require__.d(ocr_namespaceObject, "decompose3col", function() { return decompose3col; });
__webpack_require__.d(ocr_namespaceObject, "findChar", function() { return findChar; });
__webpack_require__.d(ocr_namespaceObject, "findReadLine", function() { return findReadLine; });
__webpack_require__.d(ocr_namespaceObject, "GetChatColorMono", function() { return GetChatColorMono; });
__webpack_require__.d(ocr_namespaceObject, "readLine", function() { return readLine; });
__webpack_require__.d(ocr_namespaceObject, "readSmallCapsBackwards", function() { return readSmallCapsBackwards; });
__webpack_require__.d(ocr_namespaceObject, "readChar", function() { return readChar; });
__webpack_require__.d(ocr_namespaceObject, "generatefont", function() { return generatefont; });

// EXTERNAL MODULE: C:/runeapps/libs/alt1/base/declarations.ts
var declarations = __webpack_require__("../../../../../libs/alt1/base/declarations.ts");

// CONCATENATED MODULE: C:/runeapps/libs/alt1/base/imgref.ts

class imgref_ImgRef {
    constructor(x, y, w, h) {
        this.t = "none";
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        throw ("This imgref (" + this.t + ") does not support toData");
    }
    findSubimage(needle, sx = 0, sy = 0, w = this.width, h = this.height) {
        return imagedetect_namespaceObject.findSubimage(this, needle, sx, sy, w, h);
    }
    toData(x = this.x, y = this.y, w = this.width, h = this.height) {
        return this.read(x - this.x, y - this.y, w, h);
    }
    ;
    containsArea(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + rect.width && this.y + this.height >= rect.y + rect.height;
    }
}
class ImgRefCtx extends imgref_ImgRef {
    constructor(img, x = 0, y = 0) {
        if (img instanceof CanvasRenderingContext2D) {
            super(x, y, img.canvas.width, img.canvas.height);
            this.ctx = img;
        }
        else {
            super(x, y, img.width, img.height);
            var cnv = (img instanceof HTMLCanvasElement ? img : img.toCanvas());
            this.ctx = cnv.getContext("2d");
        }
        this.t = "ctx";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return this.ctx.getImageData(x, y, w, h);
    }
}
class imgref_ImgRefBind extends imgref_ImgRef {
    constructor(handle, x = 0, y = 0, w = 0, h = 0) {
        super(x, y, w, h);
        this.handle = handle;
        this.t = "bind";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return transferImageData(this.handle, x, y, w, h);
    }
}
class ImgRefData extends imgref_ImgRef {
    constructor(buf, x = 0, y = 0) {
        super(x, y, buf.width, buf.height);
        this.buf = buf;
        this.t = "data";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        if (x == 0 && y == 0 && w == this.width && h == this.height) {
            return this.buf;
        }
        var r = new ImageData(w, h);
        for (var b = y; b < y + h; b++) {
            for (var a = x; a < x + w; a++) {
                var i1 = (a - x) * 4 + (b - y) * w * 4;
                var i2 = a * 4 + b * 4 * this.buf.width;
                r.data[i1] = this.buf.data[i2];
                r.data[i1 + 1] = this.buf.data[i2 + 1];
                r.data[i1 + 2] = this.buf.data[i2 + 2];
                r.data[i1 + 3] = this.buf.data[i2 + 3];
            }
        }
        return r;
    }
}

// CONCATENATED MODULE: C:/runeapps/libs/alt1/base/rect.ts
//util class for rectangle maths
//TODO shit this sucks can we remove it again?
//more of a shorthand to get {x,y,width,height} than a class
//kinda starting to like it again
//TODO remove rant
;
/**
 * Simple rectangle class with some util functions
 */
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    static fromArgs(...args) {
        if (typeof args[0] == "object") {
            if (typeof args[0][0] == "number") {
                return new Rect(args[0], args[1], args[2], args[3]);
            }
            else {
                return new Rect(args[0].x, args[0].y, args[0].width, args[0].height);
            }
        }
        else {
            return new Rect(args[0], args[1], args[2], args[3]);
        }
    }
    /**
     * Resizes this Rect to include the full size of a given second rectangle
     */
    union(r2) {
        var x = Math.min(this.x, r2.x);
        var y = Math.min(this.y, r2.y);
        this.width = Math.max(this.x + this.width, r2.x + r2.width) - x;
        this.height = Math.max(this.y + this.height, r2.y + r2.height) - y;
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Resizes this Rect to include a given point
     */
    includePoint(x, y) {
        this.union(new Rect(x, y, 0, 0));
    }
    /**
     * Grows the rectangle with the given dimensions
     */
    inflate(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += 2 * w;
        this.height += 2 * h;
    }
    /**
     * Resizes this Rect to the area that overlaps a given Rect
     * width and height will be set to 0 if the intersection does not exist
     */
    intersect(r2) {
        if (this.x < r2.x) {
            this.width -= r2.x - this.x;
            this.x = r2.x;
        }
        if (this.y < r2.y) {
            this.height -= r2.y - this.y;
            this.y = r2.y;
        }
        this.width = Math.min(this.x + this.width, r2.x + r2.width) - this.x;
        this.height = Math.min(this.y + this.height, r2.y + r2.height) - this.y;
        if (this.width <= 0 || this.height <= 0) {
            this.width = 0;
            this.height = 0;
        }
    }
    /**
     * Returns wether this Rect has at least one pixel overlap with a given Rect
     */
    overlaps(r2) {
        return this.x < r2.x + r2.width && this.x + this.width > r2.x && this.y < r2.y + r2.height && this.y + this.height > r2.y;
    }
    /**
     * Returns wether a given Rect fits completely inside this Rect
     * @param r2
     */
    contains(r2) {
        return this.x <= r2.x && this.x + this.width >= r2.x + r2.width && this.y <= r2.y && this.y + this.height >= r2.y + r2.height;
    }
    /**
     * Returns wether a given point lies inside this Rect
     */
    containsPoint(x, y) {
        return this.x <= x && this.x + this.width > x && this.y <= y && this.y + this.height > y;
    }
}

// EXTERNAL MODULE: external {"root":"pngjs","commonjs":"pngjs","commonjs2":"pngjs","amd":"pngjs"}
var external_root_pngjs_commonjs_pngjs_commonjs2_pngjs_amd_pngjs_ = __webpack_require__("pngjs");

// CONCATENATED MODULE: C:/runeapps/libs/alt1/base/imagedata-extensions.ts


//export this so node.js can also use it
var imagedata_extensions_ImageData;
(function () {
    var globalvar = (typeof self != "undefined" ? self : (typeof global != "undefined" ? global : null));
    var fill = typeof globalvar.ImageData == "undefined" || typeof globalvar.document == "undefined";
    var constr = function () {
        var i = 0;
        var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
        var width = arguments[i++];
        var height = arguments[i++];
        if (fill) {
            if (!data) {
                data = new Uint8ClampedArray(width * height * 4);
            }
            this.width = width;
            this.height = height;
            this.data = data;
        }
        else {
            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            var imageData = ctx.createImageData(width, height);
            if (data) {
                imageData.data.set(data);
            }
            return imageData;
        }
    };
    if (!fill) {
        constr.prototype = globalvar.ImageData.prototype;
    }
    globalvar.ImageData = constr;
    imagedata_extensions_ImageData = constr;
})();
imagedata_extensions_ImageData.prototype.putImageData = function (buf, cx, cy) {
    for (var dx = 0; dx < buf.width; dx++) {
        for (var dy = 0; dy < buf.height; dy++) {
            var i1 = (dx + cx) * 4 + (dy + cy) * 4 * this.width;
            var i2 = dx * 4 + dy * 4 * buf.width;
            this.data[i1] = buf.data[i2];
            this.data[i1 + 1] = buf.data[i2 + 1];
            this.data[i1 + 2] = buf.data[i2 + 2];
            this.data[i1 + 3] = buf.data[i2 + 3];
        }
    }
};
imagedata_extensions_ImageData.prototype.pixelOffset = function (x, y) {
    return x * 4 + y * this.width * 4;
};
//creates a hash of a portion of the buffer used to check for changes
imagedata_extensions_ImageData.prototype.getPixelHash = function (rect) {
    if (!rect) {
        rect = new Rect(0, 0, this.width, this.height);
    }
    var hash = 0;
    for (var x = rect.x; x < rect.x + rect.width; x++) {
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            var i = x * 4 + y * 4 * this.width;
            hash = (((hash << 5) - hash) + this.data[i]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 1]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 2]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 3]) | 0;
        }
    }
    return hash;
};
imagedata_extensions_ImageData.prototype.clone = function (rect) {
    return this.toImage(rect).getContext("2d").getImageData(0, 0, rect.width, rect.height);
};
imagedata_extensions_ImageData.prototype.show = function (x = 5, y = 5, zoom = 1) {
    var imgs = document.getElementsByClassName("debugimage");
    while (imgs.length > imagedata_extensions_ImageData.prototype.show.maxImages) {
        imgs[0].remove();
    }
    var el = this.toImage();
    el.classList.add("debugimage");
    el.style.position = "absolute";
    el.style.zIndex = "1000";
    el.style.left = x / zoom + "px";
    el.style.top = y / zoom + "px";
    el.style.background = "purple";
    el.style.cursor = "pointer";
    el.style.imageRendering = "pixelated";
    el.style.outline = "1px solid #0f0";
    el.style.width = (this.width == 1 ? 100 : this.width) + "px";
    el.style.height = (this.height == 1 ? 100 : this.height) + "px";
    el.onclick = function () { el.remove(); };
    document.body.appendChild(el);
    return el;
};
imagedata_extensions_ImageData.prototype.show.maxImages = 10;
imagedata_extensions_ImageData.prototype.toImage = function (rect) {
    if (!rect) {
        rect = new Rect(0, 0, this.width, this.height);
    }
    var el = document.createElement("canvas");
    el.width = rect.width;
    el.height = rect.height;
    var ctx = el.getContext("2d");
    ctx.putImageData(this, -rect.x, -rect.y);
    return el;
};
imagedata_extensions_ImageData.prototype.getPixel = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
};
imagedata_extensions_ImageData.prototype.getPixelInt = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return (this.data[i + 3] << 24) + (this.data[i + 0] << 16) + (this.data[i + 1] << 8) + (this.data[i + 2] << 0);
};
imagedata_extensions_ImageData.prototype.getColorDifference = function (x, y, r, g, b, a = 255) {
    var i = x * 4 + y * 4 * this.width;
    return Math.abs(this.data[i] - r) + Math.abs(this.data[i + 1] - g) + Math.abs(this.data[i + 2] - b) * a / 255;
};
imagedata_extensions_ImageData.prototype.setPixel = function (x, y, ...color) {
    var r, g, b, a;
    var [r, g, b, a] = (Array.isArray(color[0]) ? color[0] : color);
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = r;
    this.data[i + 1] = g;
    this.data[i + 2] = b;
    this.data[i + 3] = a == undefined ? 255 : a;
};
imagedata_extensions_ImageData.prototype.setPixelInt = function (x, y, color) {
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = (color >> 24) & 0xff;
    this.data[i + 1] = (color >> 16) & 0xff;
    this.data[i + 2] = (color >> 8) & 0xff;
    this.data[i + 3] = (color >> 0) & 0xff;
};
imagedata_extensions_ImageData.prototype.toJSON = function (rect) {
    if (typeof HTMLCanvasElement != "undefined") {
        var str = this.toImage(rect).toDataURL("image/png");
        return str.slice(str.indexOf(",") + 1);
    }
    else {
        var png = new external_root_pngjs_commonjs_pngjs_commonjs2_pngjs_amd_pngjs_["PNG"]();
        var bytes = new Uint8ClampedArray(png.data.buffer, png.data.byteOffset, png.data.byteLength);
        bytes.set(this.data, 0);
        var buf = external_root_pngjs_commonjs_pngjs_commonjs2_pngjs_amd_pngjs_["PNG"].sync.write(png);
        return buf.toString("base64");
    }
};
imagedata_extensions_ImageData.prototype.pixelCompare = function (buf, x = 0, y = 0, max) {
    return imagedetect_namespaceObject.simpleCompare(this, buf, x, y, max);
};
imagedata_extensions_ImageData.prototype.copyTo = function (target, sourcex, sourcey, width, height, targetx, targety) {
    for (var cx = 0; cx < width; cx++) {
        for (var cy = 0; cy < height; cy++) {
            var it = (cx + targetx) * 4 + (cy + targety) * target.width * 4;
            var is = (cx + sourcex) * 4 + (cy + sourcey) * this.width * 4;
            target.data[it + 0] = this.data[is + 0];
            target.data[it + 1] = this.data[is + 1];
            target.data[it + 2] = this.data[is + 2];
            target.data[it + 3] = this.data[is + 3];
        }
    }
};
if (typeof HTMLImageElement != "undefined") {
    HTMLImageElement.prototype.toBuffer = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return ctx.getImageData(0, 0, w, h);
    };
    HTMLImageElement.prototype.toCanvas = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return cnv;
    };
}

// EXTERNAL MODULE: C:/runeapps/libs/alt1/base/alt1api.ts
var alt1api = __webpack_require__("../../../../../libs/alt1/base/alt1api.ts");

// CONCATENATED MODULE: C:/runeapps/libs/alt1/base/wrapper.ts





/**
 * Thrown when a method is called that can not be used outside of Alt1
 */
class NoAlt1Error extends Error {
    constructor() {
        super();
        this.message = "This method can not be ran outside of Alt1";
    }
}
;
/**
 * Thrown when the Alt1 API returns an invalid result
 * Errors of a different type are throw when internal Alt1 errors occur
 */
class Alt1Error extends Error {
}
/**
 * The latest Alt1 version
 */
var newestversion = "1.5.3";
/**
 * Wether the Alt1 API is available
 */
var hasAlt1 = (typeof alt1 != "undefined");
/**
 * The name of the Alt1 interface skin. (Always "default" if running in a browser)
 */
var skinName = hasAlt1 ? alt1.skinName : "default";
/**
 * Max number of bytes that can be sent by alt1 in one function
 * Not completely sure why this number is different than window.alt1.maxtranfer
 */
var maxtransfer = 4000000;
/**
 * Open a link in the default browser
 * @deprecated use window.open instead
 */
function openbrowser(url) {
    if (hasAlt1) {
        alt1.openBrowser(url);
    }
    else {
        window.open(url, '_blank');
    }
}
/**
 * Throw if Alt1 API is not available
 */
function requireAlt1() {
    if (!hasAlt1) {
        throw new NoAlt1Error();
    }
}
/**
 * Returns an object with a rectangle that spans all screens
 */
function getdisplaybounds() {
    if (!hasAlt1) {
        return false;
    }
    return new Rect(alt1.screenX, alt1.screenY, alt1.screenWidth, alt1.screenHeight);
}
function capture(...args) {
    if (!hasAlt1) {
        throw new NoAlt1Error();
    }
    var i = 0;
    var rect = Rect.fromArgs(...args);
    var buf = new imagedata_extensions_ImageData(rect.width, rect.height);
    if (rect.width * rect.height * 4 <= maxtransfer) {
        var data = alt1.getRegion(rect.x, rect.y, rect.width, rect.height);
        if (!data) {
            return null;
        }
        decodeImageString(data, buf, 0, 0, rect.width, rect.height);
    }
    else {
        //split up the request to to exceed the single transfer limit (for now)
        var x1 = rect.x;
        var ref = alt1.bindRegion(rect.x, rect.y, rect.width, rect.height);
        if (ref <= 0) {
            return null;
        }
        while (x1 < rect.x + rect.width) {
            var x2 = Math.min(rect.x + rect.width, Math.floor(x1 + (maxtransfer / 4 / rect.height)));
            var data = alt1.bindGetRegion(ref, x1, rect.y, x2 - x1, rect.height);
            if (!data) {
                return null;
            }
            decodeImageString(data, buf, x1 - rect.x, 0, x2 - x1, rect.height);
            x1 = x2;
        }
    }
    return buf;
}
/**
 * Makes alt1 bind an area of the rs client in memory without sending it to the js client
 * returns an imgref object which can be used to get pixel data using the imgreftobuf function
 * currently only one bind can exist per app and the ref in (v) will always be 1
 */
function captureHold(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindRegion(x, y, w, h);
    if (r <= 0) {
        throw new Alt1Error("capturehold failed");
    }
    return new imgref_ImgRefBind(r, x, y, w, h);
}
/**
 * Same as captureHoldRegion, but captures the screen instead of the rs client. it also uses screen coordinates instead and can capture outside of the rs client
 */
function captureHoldScreen(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindScreenRegion(x, y, w, h);
    if (r <= 0) {
        return false;
    }
    return new imgref_ImgRefBind(r, x, y, w, h);
}
/**
 * bind the full rs window if the rs window can be detected by alt1, otherwise return the full screen
 */
function captureHoldFullRs() {
    return captureHold(0, 0, alt1.rsWidth, alt1.rsHeight);
}
/**
 * returns a subregion from a bound image
 * used internally in imgreftobuf if imgref is a bound image
 * @deprecated This should be handled internall by the imgrefbind.toData method
 */
function transferImageData(handle, x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = new imagedata_extensions_ImageData(w, h);
    var x1 = x;
    while (true) { //split up the request to to exceed the single transfer limit (for now)
        var x2 = Math.min(x + w, Math.floor(x1 + (maxtransfer / 4 / h)));
        var a = alt1.bindGetRegion(handle, x1, y, x2 - x1, h);
        if (!a) {
            throw new Alt1Error();
        }
        decodeImageString(a, r, x1 - x, 0, x2 - x1, h);
        x1 = x2;
        if (x1 == x + w) {
            break;
        }
        ;
    }
    return r;
}
/**
 * decodes a returned string from alt1 to an imagebuffer
 */
function decodeImageString(imagestring, target, x, y, w, h) {
    var bin = atob(imagestring);
    var bytes = target.data;
    w |= 0;
    h |= 0;
    var offset = 4 * x + 4 * y * target.width;
    var target_width = target.width | 0;
    for (var a = 0; a < w; a++) {
        for (var b = 0; b < h; b++) {
            var i1 = (offset + (a * 4 | 0) + (b * target_width * 4 | 0)) | 0;
            var i2 = ((a * 4 | 0) + (b * 4 * w | 0)) | 0;
            bytes[i1 + 0 | 0] = bin.charCodeAt(i2 + 2 | 0); //fix weird red/blue swap in c#
            bytes[i1 + 1 | 0] = bin.charCodeAt(i2 + 1 | 0);
            bytes[i1 + 2 | 0] = bin.charCodeAt(i2 + 0 | 0);
            bytes[i1 + 3 | 0] = bin.charCodeAt(i2 + 3 | 0);
        }
    }
    return target;
}
/**
 * encodes an imagebuffer to a string
 */
function encodeImageString(buf, sx = 0, sy = 0, sw = buf.width, sh = buf.height) {
    var raw = "";
    for (var y = sy; y < sy + sh; y++) {
        for (var x = sx; x < sx + sw; x++) {
            var i = 4 * x + 4 * buf.width * y | 0;
            raw += String.fromCharCode(buf.data[i + 2 | 0]);
            raw += String.fromCharCode(buf.data[i + 1 | 0]);
            raw += String.fromCharCode(buf.data[i + 0 | 0]);
            raw += String.fromCharCode(buf.data[i + 3 | 0]);
        }
    }
    return btoa(raw);
}
/**
 * mixes the given color into a single int. This format is used by alt1
 */
function mixColor(r, g, b, a = 255) {
    return (b << 0) + (g << 8) + (r << 16) + (a << 24);
}
function identifyApp(url) {
    if (hasAlt1) {
        alt1.identifyAppUrl(url);
    }
}
function convertAlt1Version(str) {
    var a = str.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!a) {
        throw new RangeError("Invalid version string");
    }
    return (+a[1]) * 1000 * 1000 + (+a[2]) * 1000 + (+a[3]) * 1;
}
var cachedVersionInt = -1;
/**
 * checks if alt1 is running and at least the given version. versionstr should be a string with the version eg: 1.3.2
 * @param versionstr
 */
function hasAlt1Version(versionstr) {
    if (!hasAlt1) {
        return false;
    }
    if (cachedVersionInt == -1) {
        cachedVersionInt = alt1.versionint;
    }
    return cachedVersionInt >= convertAlt1Version(versionstr);
}
/**
 * Gets the current cursor position in the game, returns null if the rs window is not active (alt1.rsActive)
 */
function getMousePosition() {
    var pos = alt1.mousePosition;
    if (pos == -1) {
        return null;
    }
    return { x: pos >>> 16, y: pos & 0xFFFF };
}
/**
 * Registers a given HTML element as a frame border, when this element is dragged by the user the Alt1 frame will resize accordingly
 * Use the direction arguements to make a given direction stick to the mouse. eg. Only set left to true to make the element behave as the left border
 * Or set all to true to move the whole window. Not all combinations are permitted
 */
function addResizeElement(el, left, top, right, bot) {
    if (!hasAlt1 || !alt1.userResize) {
        return;
    }
    el.addEventListener("mousedown", function (e) {
        alt1.userResize(left, top, right, bot);
        e.preventDefault();
    });
}
/**
 * Add an event listener
 */
function on(type, listener) {
    requireAlt1();
    if (!alt1.events) {
        alt1.events = {};
    }
    if (!alt1.events[type]) {
        alt1.events[type] = [];
    }
    alt1.events[type].push(listener);
}
/**
 * Removes an event listener
 */
function removeListener(type, listener) {
    var elist = alt1.events && alt1.events[type];
    if (!elist) {
        return;
    }
    var i = elist.indexOf(listener);
    if (i == -1) {
        return;
    }
    elist.splice(i, 1);
}
/**
 * Listens for the event to fire once and then stops listening
 * @param event
 * @param cb
 */
function once(type, listener) {
    requireAlt1();
    var fn = (e) => {
        removeListener(type, fn);
        listener(e);
    };
    on(type, fn);
}
;
/**
 * Used to read a set of images from a binary stream returned by the Alt1 API
 */
class wrapper_ImageStreamReader {
    constructor(reader, ...args) {
        this.framebuffer = null;
        this.pos = 0;
        this.reading = false;
        this.closed = false;
        //paused state
        this.pausedindex = -1;
        this.pausedbuffer = null;
        this.streamreader = reader;
        if (args[0] instanceof imagedata_extensions_ImageData) {
            this.setFrameBuffer(args[0]);
        }
        else if (typeof args[0] == "number") {
            this.setFrameBuffer(new imagedata_extensions_ImageData(args[0], args[1]));
        }
    }
    /**
     *
     */
    setFrameBuffer(buffer) {
        if (this.reading) {
            throw new Error("can't change framebuffer while reading");
        }
        this.framebuffer = buffer;
    }
    /**
     * Closes the underlying stream and ends reading
     */
    close() {
        this.streamreader.cancel();
    }
    /**
     * Reads a single image from the stream
     */
    async nextImage() {
        if (this.reading) {
            throw new Error("already reading from this stream");
        }
        if (!this.framebuffer) {
            throw new Error("framebuffer not set");
        }
        this.reading = true;
        var synctime = -Date.now();
        var starttime = Date.now();
        var r = false;
        while (!r) {
            if (this.pausedindex != -1 && this.pausedbuffer) {
                r = this.readChunk(this.pausedindex, this.framebuffer.data, this.pausedbuffer);
            }
            else {
                synctime += Date.now();
                var res = await this.streamreader.read();
                synctime -= Date.now();
                if (res.done) {
                    throw new Error("Stream closed while reading");
                }
                var data = res.value;
                r = this.readChunk(0, this.framebuffer.data, data);
            }
        }
        synctime += Date.now();
        //console.log("Decoded async image, " + this.framebuffer.width + "x" + this.framebuffer.height + " time: " + (Date.now() - starttime) + "ms (" + synctime + "ms main thread)");
        this.reading = false;
        return this.framebuffer;
    }
    readChunk(i, framedata, buffer) {
        //very hot code, explicit int32 casting with |0 speeds it up by ~ x2
        i = i | 0;
        var framesize = framedata.length | 0;
        var pos = this.pos;
        var datalen = buffer.length | 0;
        //var data32 = new Float64Array(buffer.buffer);
        //var framedata32 = new Float64Array(framedata.buffer);
        //fix possible buffer misalignment
        //align to 16 for extra loop unrolling
        while (i < datalen) {
            //slow loop, fix alignment and other issues
            while (i < datalen && pos < framesize && (pos % 16 != 0 || !((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize))) {
                var rel = pos;
                if (pos % 4 == 0) {
                    rel = rel + 2 | 0;
                }
                if (pos % 4 == 2) {
                    rel = rel - 2 | 0;
                }
                framedata[rel | 0] = buffer[i | 0];
                i = i + 1 | 0;
                pos = pos + 1 | 0;
            }
            //fast unrolled loop for large chunks i wish js had some sort of memcpy
            if (pos % 16 == 0) {
                while ((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize) {
                    framedata[pos + 0 | 0] = buffer[i + 2 | 0];
                    framedata[pos + 1 | 0] = buffer[i + 1 | 0];
                    framedata[pos + 2 | 0] = buffer[i + 0 | 0];
                    framedata[pos + 3 | 0] = buffer[i + 3 | 0];
                    framedata[pos + 4 | 0] = buffer[i + 6 | 0];
                    framedata[pos + 5 | 0] = buffer[i + 5 | 0];
                    framedata[pos + 6 | 0] = buffer[i + 4 | 0];
                    framedata[pos + 7 | 0] = buffer[i + 7 | 0];
                    framedata[pos + 8 | 0] = buffer[i + 10 | 0];
                    framedata[pos + 9 | 0] = buffer[i + 9 | 0];
                    framedata[pos + 10 | 0] = buffer[i + 8 | 0];
                    framedata[pos + 11 | 0] = buffer[i + 11 | 0];
                    framedata[pos + 12 | 0] = buffer[i + 14 | 0];
                    framedata[pos + 13 | 0] = buffer[i + 13 | 0];
                    framedata[pos + 14 | 0] = buffer[i + 12 | 0];
                    framedata[pos + 15 | 0] = buffer[i + 15 | 0];
                    //could speed it up another x2 but wouldn't be able to swap r/b swap and possible alignment issues
                    //framedata32[pos / 8 + 0 | 0] = data32[i / 8 + 0 | 0];
                    //framedata32[pos / 8 + 1 | 0] = data32[i / 8 + 1 | 0];
                    //framedata32[pos / 4 + 2 | 0] = data32[i / 4 + 2 | 0];
                    //framedata32[pos / 4 + 3 | 0] = data32[i / 4 + 3 | 0];
                    pos = pos + 16 | 0;
                    i = i + 16 | 0;
                }
            }
            if (pos >= framesize) {
                this.pausedbuffer = null;
                this.pausedindex = -1;
                this.pos = 0;
                if (i != buffer.length - 1) {
                    this.pausedbuffer = buffer;
                    this.pausedindex = i;
                }
                return true;
            }
        }
        this.pos = pos;
        this.pausedbuffer = null;
        this.pausedindex = -1;
        return false;
    }
}
async function captureAsync(...args) {
    requireAlt1();
    var i = 0;
    var rect = (typeof args[i] == "object" ? args[i++] : { x: args[i++], y: args[i++], width: args[i++], height: args[i++] });
    var format = args[i++] || "raw";
    var quality = args[i++] || 0.6;
    if (!hasAlt1Version("1.4.6")) {
        return capture(rect.x, rect.y, rect.width, rect.height);
    }
    var url = "https://alt1api/pixel/getregion/" + encodeURIComponent(JSON.stringify({ ...rect, format, quality }));
    if (format == "raw") {
        var res = await fetch(url);
        var imgreader = new wrapper_ImageStreamReader(res.body.getReader(), rect.width, rect.height);
        return imgreader.nextImage();
    }
    else {
        return imageDataFromUrl(url);
    }
}
/**
 * Asynchronously captures multple area's. This method captures the images in the same render frame if possible
 * @param areas
 */
async function captureMultiAsync(areas) {
    requireAlt1();
    var format = "raw";
    var quality = 0.6;
    var r = {};
    var capts = [];
    var captids = [];
    for (var id in areas) {
        if (areas[id]) {
            capts.push(areas[id]);
            captids.push(id);
        }
        else {
            r[id] = null;
        }
    }
    if (!hasAlt1Version("1.5.1")) {
        var proms = [];
        for (var a = 0; a < capts.length; a++) {
            proms.push(captureAsync(capts[a], format, quality));
        }
        var results = await Promise.all(proms);
        for (var a = 0; a < capts.length; a++) {
            r[captids[a]] = results[a];
        }
    }
    else {
        var res = await fetch("https://alt1api/pixel/getregionmulti/" + encodeURIComponent(JSON.stringify({ areas: capts, format, quality })));
        var imgreader = new wrapper_ImageStreamReader(res.body.getReader());
        for (var a = 0; a < capts.length; a++) {
            var capt = capts[a];
            imgreader.setFrameBuffer(new imagedata_extensions_ImageData(capt.width, capt.height));
            r[captids[a]] = await imgreader.nextImage();
        }
    }
    return r;
}
/**
 * Starts capturing a realtime stream of the game. Make sure you keep reading the stream and close it when you're done or Alt1 WILL crash
 * @param framecb Called whenever a new frame is decoded
 * @param errorcb Called whenever an error occurs, the error is rethrown if not defined
 * @param fps Maximum fps of the stream
 */
function captureStream(x, y, width, height, fps, framecb, errorcb) {
    requireAlt1();
    if (!hasAlt1Version("1.4.6")) {
        throw new Alt1Error("This function is not supported in this version of Alt1");
    }
    var url = "https://alt1api/pixel/streamregion/" + encodeURIComponent(JSON.stringify({ x, y, width, height, fps, format: "raw" }));
    var res = fetch(url).then(async (res) => {
        var reader = new wrapper_ImageStreamReader(res.body.getReader(), width, height);
        try {
            while (!reader.closed && !state.closed) {
                var img = await reader.nextImage();
                if (!state.closed) {
                    framecb(img);
                    state.framenr++;
                }
            }
        }
        catch (e) {
            if (!state.closed) {
                reader.close();
                if (errorcb) {
                    errorcb(e);
                }
                else {
                    throw e;
                }
            }
        }
        if (!reader.closed && state.closed) {
            reader.close();
        }
    });
    var state = {
        x, y, width, height,
        framenr: 0,
        close: () => { state.closed = true; },
        closed: false,
    };
    return state;
}

// EXTERNAL MODULE: external {"root":"node-fetch","commonjs":"node-fetch","commonjs2":"node-fetch","amd":"node-fetch"}
var external_root_node_fetch_commonjs_node_fetch_commonjs2_node_fetch_amd_node_fetch_ = __webpack_require__("node-fetch");
var external_root_node_fetch_commonjs_node_fetch_commonjs2_node_fetch_amd_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_root_node_fetch_commonjs_node_fetch_commonjs2_node_fetch_amd_node_fetch_);

// CONCATENATED MODULE: C:/runeapps/libs/alt1/base/imagedetect.ts



//rely on webpack to always externalize these imports


/**
* Downloads an image and returns the ImageData
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param url http(s) or data url to the image
*/
async function imageDataFromUrl(url) {
    if (typeof Image != "undefined") {
        var img = new Image();
        img.crossOrigin = "crossorigin";
        return await new Promise((done, fail) => {
            img.onload = function () { done(img.toBuffer()); };
            img.onerror = fail;
            img.src = url;
        });
    }
    else {
        var hdr = "data:image/png;base64,";
        if (url.startsWith(hdr)) {
            var raw = Buffer.from(url.slice(hdr.length), "base64");
            var buffer = new Uint8Array(raw.buffer, raw.byteOffset, raw.byteLength);
        }
        else {
            var res = await external_root_node_fetch_commonjs_node_fetch_commonjs2_node_fetch_amd_node_fetch_default()(url).then(r => r.arrayBuffer());
            var buffer = new Uint8Array(res);
        }
        clearPngColorspace(buffer);
        var png = new external_root_pngjs_commonjs_pngjs_commonjs2_pngjs_amd_pngjs_["PNG"]();
        await new Promise((done, err) => {
            png.on("parsed", (e) => done(e));
            png.on("error", (e) => err(e));
            png.parse(Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength));
        });
        return new imagedata_extensions_ImageData(new Uint8ClampedArray(png.data.buffer, png.data.byteOffset, png.data.byteLength), png.width, png.height);
    }
}
/**
* Loads an ImageData object from a base64 encoded png image
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param data a base64 encoded png image
*/
async function imageDataFromBase64(data) {
    return imageDataFromUrl("data:image/png;base64," + data);
}
/**
* Used to visualise data as a grayscale image. The imput array must contain one (float) value per pixel.
* The values are automatically scaled so the lowest value is black and the highest is white
* @param array The pixels, one values per pixel
*/
function imagedataFromArray(array, w, h) {
    if (array.length != w * h) {
        throw new Error("Invalid array size");
    }
    var min = Math.min.apply(null, array);
    var max = Math.max.apply(null, array);
    var range = max - min;
    var buf = new ImageData(w, h);
    for (var i = 0; i < w * h; i++) {
        var ibuf = i * 4;
        buf.data[ibuf] = buf.data[ibuf + 1] = buf.data[ibuf + 2] = (array[i] - min) / range * 255;
        buf.data[ibuf + 3] = 255;
    }
    return buf;
}
/**
* Checks if a given byte array is a png file (by checking for ?PNG as first 4 bytes)
* @param bytes Raw bytes of the png file
*/
function isPngBuffer(bytes) {
    return bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78 && bytes[3] == 71;
}
/**
* Resets the colorspace data in the png file.
* This makes sure the browser renders the exact colors in the file instead of filtering it in order to obtain the best real life representation of
* what it looked like on the authors screen. (this feature is often broken and not supported)
* For example a round trip printscreen -> open in browser results in different colors than the original
* @param data Raw bytes of the png file
*/
function clearPngColorspace(data) {
    if (!isPngBuffer(data)) {
        throw new Error("non-png image received");
    }
    var i = 8;
    while (i < data.length) {
        var length = data[i++] * 0x1000000 + data[i++] * 0x10000 + data[i++] * 0x100 + data[i++];
        var chunkname = String.fromCharCode(data[i++], data[i++], data[i++], data[i++]);
        //qw(chunkname, length);
        if (chunkname == "sRGB") {
            //Set render intent to absole colormetric, this forces browsers to not mess with the image
            console.log("- Changed sRGB, old value:", data[i]);
            //new chunk data
            data[i] = 3;
            //new chunk checksum
            data[i + length + 0] = 0x37;
            data[i + length + 1] = 0xc7;
            data[i + length + 2] = 0x4d;
            data[i + length + 3] = 0x53;
        }
        if (chunkname == "IEND") {
            break;
        }
        i += length;
        i += 4;
    }
}
/**
* finds the given needle ImageBuffer in the given haystack ImgRef this function uses the best optimized available
* code depending on the type of the haystack. It will use fast c# searching if the haystack is an ImgRefBind, js searching
* is used otherwise.
* the checklist argument is no longer used and should ignored or null/undefined
* The optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search the needle. The rectangle should be bigger than the needle
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubimage(haystackImgref, needleBuffer, sx = 0, sy = 0, sw = haystackImgref.width, sh = haystackImgref.height) {
    if (!haystackImgref) {
        throw new TypeError();
    }
    if (!needleBuffer) {
        throw new TypeError();
    }
    var max = 30;
    //check if we can do this in alt1
    if (haystackImgref instanceof imgref_ImgRefBind && hasAlt1 && alt1.bindFindSubImg) {
        var needlestr = encodeImageString(needleBuffer);
        var r = alt1.bindFindSubImg(haystackImgref.handle, needlestr, needleBuffer.width, sx, sy, sw, sh);
        if (!r) {
            throw new Alt1Error();
        }
        return JSON.parse(r);
    }
    return findSubbuffer(haystackImgref.read(), needleBuffer, sx, sy, sw, sh);
}
/**
* Uses js to find the given needle ImageBuffer in the given haystack ImageBuffer. It is better to use the alt1.bind- functions in
* combination with a1nxt.findsubimg.
* the optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search.
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubbuffer(haystack, needle, sx = 0, sy = 0, sw = haystack.width, sh = haystack.height) {
    var r = [];
    var maxdif = 30;
    var maxresults = 50;
    var needlestride = needle.width * 4;
    var heystackstride = haystack.width * 4;
    //built list of non trans pixel to check
    var checkList = [];
    for (var x = 0; x < needle.width; x++) {
        for (var y = 0; y < needle.height; y++) {
            var i = x * 4 + y * needlestride;
            if (needle.data[i + 3] == 255) {
                checkList.push({ x: x, y: y });
            }
            if (checkList.length == 10) {
                break;
            }
        }
        if (checkList.length == 10) {
            break;
        }
    }
    var cw = (sx + sw) - needle.width;
    var ch = (sy + sh) - needle.height;
    var checklength = checkList.length;
    for (var x = sx; x <= cw; x++) {
        outer: for (var y = sy; y <= ch; y++) {
            for (var a = 0; a < checklength; a++) {
                var i1 = (x + checkList[a].x) * 4 + (y + checkList[a].y) * heystackstride;
                var i2 = checkList[a].x * 4 + checkList[a].y * needlestride;
                var d = 0;
                d = d + Math.abs(haystack.data[i1 + 0] - needle.data[i2 + 0]) | 0;
                d = d + Math.abs(haystack.data[i1 + 1] - needle.data[i2 + 1]) | 0;
                d = d + Math.abs(haystack.data[i1 + 2] - needle.data[i2 + 2]) | 0;
                d *= 255 / needle.data[i2 + 3];
                if (d > maxdif) {
                    continue outer;
                }
            }
            if (simpleCompare(haystack, needle, x, y, maxdif) != Infinity) {
                r.push({ x, y });
                if (r.length > maxresults) {
                    return r;
                }
            }
        }
    }
    return r;
}
/**
* Compares two images and returns the average color difference per pixel between them
* @param max The max color difference at any point in the image before short circuiting the function and returning Infinity. set to -1 to always continue.
* @returns The average color difference per pixel or Infinity if the difference is more than max at any point in the image
*/
function simpleCompare(bigbuf, checkbuf, x, y, max = 30) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    if (max == -1) {
        max = 255 * 4;
    }
    var go = true;
    var dif = 0;
    for (var step = 8; step >= 1; step /= 2) {
        for (var cx = 0; cx < checkbuf.width; cx += step) {
            for (var cy = 0; cy < checkbuf.height; cy += step) {
                var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
                var i2 = cx * 4 + cy * checkbuf.width * 4;
                var d = 0;
                d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
                d *= checkbuf.data[i2 + 3] / 255;
                if (step == 1) {
                    dif += d;
                }
                if (d > max) {
                    return Infinity;
                }
            }
        }
    }
    return dif / checkbuf.width / checkbuf.height;
}
/**
* Returns the difference between two colors (scaled to the alpha of the second color)
*/
function coldif(r1, g1, b1, r2, g2, b2, a2) {
    return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)) * a2 / 255; //only applies alpha for 2nd buffer!
}
/**
 * Turns map of promises into a map that contains the resolved values after loading.
 * @param input
 */
function asyncMap(input) {
    var raw = {};
    var promises = [];
    for (var a in input) {
        if (input.hasOwnProperty(a)) {
            raw[a] = null;
            promises.push(input[a].then(function (a, i) { raw[a] = i; r[a] = i; }.bind(null, a)));
        }
    }
    var r = {};
    var promise = Promise.all(promises).then(() => { r.loaded = true; return r; });
    Object.defineProperty(r, "loaded", { enumerable: false, value: false, writable: true });
    Object.defineProperty(r, "promise", { enumerable: false, value: promise });
    Object.defineProperty(r, "raw", { enumerable: false, value: raw });
    return Object.assign(r, raw);
}
/**
* Same as asyncMap, but casts the properties to ImageData in typescript
*/
function webpackImages(input) {
    return asyncMap(input);
}

// CONCATENATED MODULE: C:/runeapps/libs/alt1/base/pasteinput.ts


var listeners = [];
var started = false;
var dndStarted = false;
var pasting = false;
var lastref = null;
var lastimg = null;
function listen(func, errorfunc, dragndrop) {
    listeners.push({ cb: func, error: errorfunc });
    if (!started) {
        start();
    }
    if (dragndrop && !dndStarted) {
        startDragNDrop();
    }
}
function pasted(img) {
    var a;
    pasting = false;
    lastimg = img.toCanvas();
    lastref = new ImgRefCtx(lastimg);
    for (a in listeners) {
        listeners[a].cb(lastimg, lastref);
    }
}
function error(mes, error) {
    pasting = false;
    for (var a in listeners) {
        if (listeners[a].error) {
            listeners[a].error(mes, error);
        }
    }
}
function startDragNDrop() {
    var getitem = function (items) {
        var foundimage = "";
        for (var a = 0; a < items.length; a++) {
            var item = items[a];
            var m = item.type.match(/^image\/(\w+)$/);
            if (m) {
                if (m[1] == "png") {
                    return item;
                }
                else {
                    foundimage = m[1];
                }
            }
        }
        if (foundimage) {
            error("The image you uploaded is not a .png image. Other image type have compression noise and can't be used for image detection.", "notpng");
        }
        return null;
    };
    window.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    window.addEventListener("drop", function (e) {
        if (!e.dataTransfer) {
            return;
        }
        var item = getitem(e.dataTransfer.items);
        e.preventDefault();
        if (!item) {
            return;
        }
        fromFile(item.getAsFile());
    });
}
function start() {
    if (started) {
        return;
    }
    started = true;
    //determine if we have a clipboard api
    //try{a=new Event("clipboard"); a="clipboardData" in a;}
    //catch(e){a=false;}
    var ischrome = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/);
    //old method breaks after chrome 41, revert to good old user agent sniffing
    //nvm, internet explorer (edge) decided that it wants to be chrome, however fails at delivering
    //turns out this one is interesting, edge is a hybrid between the paste api's
    var apipasted = function (e) {
        for (var a = 0; a < e.clipboardData.items.length; a++) { //loop all data types
            if (e.clipboardData.items[a].type.indexOf("image") != -1) {
                var file = e.clipboardData.items[a].getAsFile();
                var img = new Image();
                img.src = (window.URL || window.webkitURL).createObjectURL(file);
                if (img.width > 0) {
                    pasted(img);
                }
                else {
                    img.onload = function () { pasted(img); };
                }
            }
        }
    };
    if (ischrome) {
        document.addEventListener("paste", apipasted);
    }
    else {
        var catcher = document.createElement("div");
        catcher.setAttribute("contenteditable", "");
        catcher.className = "forcehidden"; //retarded ie safety/bug, cant apply styles using js//TODO i don't even know what's going on
        catcher.onpaste = function (e) {
            if (e.clipboardData && e.clipboardData.items) {
                apipasted(e);
                return;
            }
            setTimeout(function () {
                var b = catcher.children[0];
                if (!b || b.tagName != "IMG") {
                    return;
                }
                var img = new Image();
                img.src = b.src;
                var a = img.src.match(/^data:([\w\/]+);/);
                if (img.width > 0) {
                    pasted(img);
                }
                else {
                    img.onload = function () { pasted(img); };
                }
                catcher.innerHTML = "";
            }, 1);
        };
        document.body.appendChild(catcher);
    }
    //detect if ctrl-v is pressed and focus catcher if needed
    document.addEventListener("keydown", function (e) {
        if (e.target.tagName == "INPUT") {
            return;
        }
        if (e.keyCode != "V".charCodeAt(0) || !e.ctrlKey) {
            return;
        }
        pasting = true;
        setTimeout(function () {
            if (pasting) {
                error("You pressed Ctrl+V, but no image was pasted by your browser, make sure your clipboard contains an image, and not a link to an image.\n This may also happen if your browser is (very) outdated.", "noimg");
            }
        }, 1000);
        if (catcher) {
            catcher.focus();
        }
    });
}
function fileDialog() {
    var fileinput = document.createElement("input");
    fileinput.type = "file";
    fileinput.accept = "image/png";
    fileinput.onchange = function () { if (fileinput.files && fileinput.files[0]) {
        fromFile(fileinput.files[0]);
    } };
    fileinput.click();
    return fileinput;
}
function fromFile(file) {
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var bytearray = new Uint8Array(reader.result);
        if (isPngBuffer(bytearray)) {
            clearPngColorspace(bytearray);
        }
        var blob = new Blob([bytearray], { type: "image/png" });
        var img = new Image();
        img.onerror = () => error("The file you uploaded could not be opened as an image.", "invalidfile");
        var bloburl = URL.createObjectURL(blob);
        img.src = bloburl;
        if (img.width > 0) {
            pasted(img);
            URL.revokeObjectURL(bloburl);
        }
        else {
            img.onload = function () { pasted(img); URL.revokeObjectURL(bloburl); };
        }
    };
    reader.readAsArrayBuffer(file);
}

// CONCATENATED MODULE: C:/runeapps/libs/alt1/base/index.ts








//export type StringMap<T> = { [key: string]: T; }
//export type NumberMap<T> = { [key: number]: T; }

// CONCATENATED MODULE: C:/runeapps/libs/alt1/ocr/index.ts

var debug = {
    printcharscores: false,
    trackread: false
};
var debugout = {};
/**
 * draws the font definition to a buffer and displays it in the dom for debugging purposes
 * @param font
 */
function debugFont(font) {
    var spacing = font.width + 2;
    var buf = new imagedata_extensions_ImageData(spacing * font.chars.length, font.height + 1);
    for (var a = 0; a < buf.data.length; a += 4) {
        buf.data[a] = buf.data[a + 1] = buf.data[a + 2] = 0;
        buf.data[a + 3] = 255;
    }
    for (var a = 0; a < font.chars.length; a++) {
        var bx = a * spacing;
        var chr = font.chars[a];
        for (var b = 0; b < chr.pixels.length; b += (font.shadow ? 4 : 3)) {
            buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 2], chr.pixels[b + 2], chr.pixels[b + 2], 255]);
            if (font.shadow) {
                buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 3], 0, 0, 255]);
            }
        }
    }
    buf.show();
}
/**
 * unblends a imagebuffer into match strength with given color
 * the bgimg argument should contain a second image with pixel occluded by the font visible.
 * @param img
 * @param shadow detect black as second color
 * @param bgimg optional second image to
 */
function unblendKnownBg(img, bgimg, shadow, r, g, b) {
    if (bgimg && (img.width != bgimg.width || img.height != bgimg.height)) {
        throw "bgimg size doesn't match";
    }
    var rimg = new imagedata_extensions_ImageData(img.width, img.height);
    var totalerror = 0;
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decompose2col(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b, bgimg.data[i + 0], bgimg.data[i + 1], bgimg.data[i + 2]);
        if (shadow) {
            if (col[2] > 0.01) {
                console.log("high error component: " + (col[2] * 100).toFixed(1) + "%");
            }
            totalerror += col[2];
            var m = 1 - col[1] - Math.abs(col[2]); //main color+black=100%-bg-error
            rimg.data[i + 0] = m * 255;
            rimg.data[i + 1] = col[0] / m * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = col[0] * 255;
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    if (shadow) {
        console.log("avg unblend px error:" + (totalerror / img.width / img.height * 100).toFixed(1) + "%");
    }
    return rimg;
}
/**
 * Unblends a font image that is already conpletely isolated to the raw image used ingame. This is the easiest mode for pixel fonts where alpha is 0 or 255, or for extracted font files.
 * @param img
 * @param r
 * @param g
 * @param b
 * @param shadow whether the font has a black shadow
 */
function unblendTrans(img, shadow, r, g, b) {
    var rimg = new imagedata_extensions_ImageData(img.width, img.height);
    var pxlum = r + g + b;
    for (var i = 0; i < img.data.length; i += 4) {
        if (shadow) {
            var lum = img.data[i + 0] + img.data[i + 1] + img.data[i + 2];
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = lum / pxlum * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
/**
 * Determised wether color [rgb]m can be a result of a blend with color [rgb]1 that is p (0-1) of the mix
 * It returns the number that the second color has to lie outside of the possible color ranges
 * @param mr resulting color
 * @param r1 first color of the mix (the other color is unknown)
 * @param p the pertion of the [rgb]1 in the mix (0-1)
 */
function canblend(rm, gm, bm, r1, g1, b1, p) {
    var m = Math.min(50, p / (1 - p));
    var r = rm + (rm - r1) * m;
    var g = gm + (gm - g1) * m;
    var b = bm + (bm - b1) * m;
    return Math.max(-r, -g, -b, r - 255, g - 255, b - 255);
}
/**
 * decomposes a color in 2 given component colors and returns the amount of each color present
 * also return a third (noise) component which is the the amount leftover orthagonal from the 2 given colors
 */
function decompose2col(rp, gp, bp, r1, g1, b1, r2, g2, b2) {
    //get the normal of the error (cross-product of both colors)
    var r3 = g1 * b2 - g2 * b1;
    var g3 = b1 * r2 - b2 * r1;
    var b3 = r1 * g2 - r2 * g1;
    //normalize to length 255
    var norm = 255 / Math.sqrt(r3 * r3 + g3 * g3 + b3 * b3);
    r3 *= norm;
    g3 *= norm;
    b3 *= norm;
    return decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3);
}
/**
 * decomposes a color in 3 given component colors and returns the amount of each color present
 */
function decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3) {
    //P=x*C1+y*C2+z*C3
    //assemble as matrix 
    //M*w=p
    //get inverse of M
    //dirty written out version of cramer's rule
    var A = g2 * b3 - b2 * g3;
    var B = g3 * b1 - b3 * g1;
    var C = g1 * b2 - b1 * g2;
    var D = b2 * r3 - r2 * b3;
    var E = b3 * r1 - r3 * b1;
    var F = b1 * r2 - r1 * b2;
    var G = r2 * g3 - g2 * r3;
    var H = r3 * g1 - g3 * r1;
    var I = r1 * g2 - g1 * r2;
    var det = r1 * A + g1 * D + b1 * G;
    //M^-1*p=w
    var x = (A * rp + D * gp + G * bp) / det;
    var y = (B * rp + E * gp + H * bp) / det;
    var z = (C * rp + F * gp + I * bp) / det;
    return [x, y, z];
}
/**
 * brute force to the exact position of the text
 */
function findChar(buffer, font, col, x, y, w, h) {
    var shiftx = 0;
    var shifty = 0;
    if (x < 0) {
        return null;
    }
    if (y - font.basey < 0) {
        return null;
    }
    if (x + w + font.width > buffer.width) {
        return null;
    }
    if (y + h - font.basey + font.height > buffer.height) {
        return null;
    }
    var best = 1000; //TODO finetune score constants
    var bestchar = null;
    for (var cx = x; cx < x + w; cx++) {
        for (var cy = y; cy < y + h; cy++) {
            var chr = readChar(buffer, font, col, cx, cy, false, false);
            if (chr != null && chr.sizescore < best) {
                best = chr.sizescore;
                bestchar = chr;
            }
        }
    }
    return bestchar;
}
/**
 * reads text with unknown exact coord or color. The given coord should be inside the text
 * color selection not implemented yet
 */
function findReadLine(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var chr = null;
    if (cols.length > 1) {
        var sorted = GetChatColorMono(buffer, new Rect(x, y - font.basey, w, h), cols);
        //loop until we have a match (max 2 cols)
        for (var a = 0; a < 2 && a < sorted.length && chr == null; a++) {
            chr = findChar(buffer, font, sorted[a].col, x, y, w, h);
        }
    }
    else {
        chr = findChar(buffer, font, cols[0], x, y, w, h);
    }
    if (chr == null) {
        return { text: "", debugArea: { x, y, w, h } };
    }
    return readLine(buffer, font, cols, chr.x, chr.y, true, true);
}
function GetChatColorMono(buf, rect, colors) {
    if (rect.x < 0 || rect.y < 0 || rect.x + rect.width > buf.width || rect.y + rect.height > buf.height) {
        return null;
    }
    var colormap = colors.map(c => ({ col: c, score: 0 }));
    var data = buf.data;
    var maxd = 50;
    for (var colobj of colormap) {
        var score = 0;
        var col = colobj.col;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                var i = x * 4 + y * 4 * buf.width;
                var d = Math.abs(data[i] - col[0]) + Math.abs(data[i + 1] - col[1]) + Math.abs(data[i + 2] - col[2]);
                if (d < maxd) {
                    score += maxd - d;
                }
            }
        }
        colobj.score = score;
    }
    return colormap;
}
/**
 * reads a line of text with exactly known position and color. y should be the y coord of the text base line, x should be the first pixel of a new character
 */
function readLine(buffer, font, colors, x, y, forward, backward = false) {
    if (typeof colors[0] != "number" && colors.length == 1) {
        colors = colors[0];
    }
    var multicol = typeof colors[0] != "number";
    var allcolors = multicol ? colors : [colors];
    var detectcolor = function (x, y, backward) {
        var best = null;
        var bestscore = Infinity;
        for (var a = 0; a < allcolors.length; a++) {
            var chr = readChar(buffer, font, allcolors[a], x, y, backward, false);
            if (chr && chr.sizescore < bestscore) {
                best = allcolors[a];
                bestscore = chr.sizescore;
            }
        }
        return best;
    };
    var r = "";
    var x1 = x;
    var x2 = x;
    for (var dirforward of [true, false]) {
        //init vars
        if (dirforward && !forward) {
            continue;
        }
        if (!dirforward && !backward) {
            continue;
        }
        var dx = 0;
        var triedspace = false;
        var triedrecol = false;
        var col = multicol ? null : colors;
        while (true) {
            col = col || detectcolor(x + dx, y, !dirforward);
            var chr = (col ? readChar(buffer, font, col, x + dx, y, !dirforward, true) : null);
            if (chr == null) {
                if (multicol && !triedrecol) {
                    col = null;
                    triedrecol = true;
                    continue;
                }
                if (!triedspace) {
                    dx += (dirforward ? 1 : -1) * font.spacewidth;
                    triedrecol = false;
                    triedspace = true;
                    continue;
                }
                if (dirforward) {
                    x2 = x + dx - font.spacewidth;
                }
                else {
                    x1 = x + dx + font.spacewidth;
                }
                break;
            }
            else {
                if (dirforward) {
                    r += (triedspace ? " " : "") + chr.chr;
                }
                else {
                    r = chr.chr + (triedspace ? " " : "") + r;
                }
                triedspace = false;
                triedrecol = false;
                dx += (dirforward ? 1 : -1) * chr.basechar.width;
            }
        }
    }
    return {
        debugArea: { x: x1, y: y - 9, w: x2 - x1, h: 10 },
        text: r
    };
}
/**
 * Reads a line of text that uses a smallcaps font, these fonts can have duplicate chars that only have a different amount of
 * empty space after the char before the next char starts.
 * The coordinates should be near the end of the string, or a rectangle with high 1 containing all points where the string can end.
 */
function readSmallCapsBackwards(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var matchedchar = null;
    var sorted = (cols.length == 1 ? [{ col: cols[0], score: 1 }] : GetChatColorMono(buffer, new Rect(x, y - font.basey, w, h), cols));
    //loop until we have a match (max 2 cols)
    for (var a = 0; a < 2 && a < sorted.length && matchedchar == null; a++) {
        for (var cx = x + w - 1; cx >= x; cx--) {
            var best = 1000; //TODO finetune score constants
            var bestchar = null;
            for (var cy = y; cy < y + h; cy++) {
                var chr = readChar(buffer, font, sorted[a].col, cx, cy, true, false);
                if (chr != null && chr.sizescore < best) {
                    best = chr.sizescore;
                    bestchar = chr;
                }
            }
            if (bestchar) {
                matchedchar = bestchar;
                break;
            }
        }
    }
    if (matchedchar == null) {
        return { text: "", debugArea: { x, y, w, h } };
    }
    return readLine(buffer, font, cols, bestchar.x, bestchar.y, false, true);
}
/**
 * Reads a single character at the exact given location
 * @param x exact x location of the start of the character domain (includes part of the spacing between characters)
 * @param y exact y location of the baseline pixel of the character
 * @param backwards read in backwards direction, the x location should be the first pixel after the character domain in that case
 */
function readChar(buffer, font, col, x, y, backwards, allowSecondary) {
    y -= font.basey;
    var shiftx = 0;
    var shifty = font.basey;
    var shadow = font.shadow;
    var debugobj = null;
    var debugimg = null;
    if (debug.trackread) {
        var name = x + ";" + y + " " + JSON.stringify(col);
        if (!debugout[name]) {
            debugout[name] = [];
        }
        debugobj = debugout[name];
    }
    //===== make sure the full domain is inside the bitmap/buffer ======
    if (y < 0 || y + font.height >= buffer.height) {
        return null;
    }
    if (!backwards) {
        if (x < 0 || x + font.width > buffer.width) {
            return null;
        }
    }
    else {
        if (x - font.width < 0 || x > buffer.width) {
            return null;
        }
    }
    //====== start reading the char ======
    var scores = [];
    for (var chr = 0; chr < font.chars.length; chr++) {
        var chrobj = font.chars[chr];
        if (chrobj.secondary && !allowSecondary) {
            continue;
        }
        scores[chr] = { score: 0, sizescore: 0, chr: chrobj };
        var chrx = (backwards ? x - chrobj.width : x);
        if (debug.trackread) {
            debugimg = new imagedata_extensions_ImageData(font.width, font.height);
        }
        for (var a = 0; a < chrobj.pixels.length;) {
            var i = (chrx + chrobj.pixels[a]) * 4 + (y + chrobj.pixels[a + 1]) * buffer.width * 4;
            var penalty = 0;
            if (!shadow) {
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0], col[1], col[2], chrobj.pixels[a + 2] / 255);
                a += 3;
            }
            else {
                var lum = chrobj.pixels[a + 3] / 255;
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0] * lum, col[1] * lum, col[2] * lum, chrobj.pixels[a + 2] / 255);
                a += 4;
            }
            scores[chr].score += Math.max(0, penalty);
            //TODO add compiler flag to this to remove it for performance
            if (debugimg) {
                debugimg.setPixel(chrobj.pixels[a], chrobj.pixels[a + 1], [penalty, penalty, penalty, 255]);
            }
        }
        scores[chr].sizescore = scores[chr].score - chrobj.bonus;
        if (debugobj) {
            debugobj.push({ chr: chrobj.chr, score: scores[chr].sizescore, rawscore: scores[chr].score, img: debugimg });
        }
    }
    scores.sort((a, b) => a.sizescore - b.sizescore);
    if (debug.printcharscores) {
        scores.slice(0, 5).forEach(q => console.log(q.chr.chr, q.score.toFixed(3), q.sizescore.toFixed(3)));
    }
    var winchr = scores[0];
    if (!winchr || winchr.score > 400) {
        return null;
    }
    return { chr: winchr.chr.chr, basechar: winchr.chr, x: x + shiftx, y: y + shifty, score: winchr.score, sizescore: winchr.sizescore };
}
/**
 * Generates a font json description to use in reader functions
 * @param unblended A source image with all characters lined up. The image should be unblended into components using the unblend functions
 * The lowest pixel line of this image is used to mark the location and size of the charecters if the red component is 255 it means there is a character on that pixel column
 * @param chars A string containing all the characters of the image in the same order
 * @param seconds A string with characters that are considered unlikely and should only be detected if no other character is possible.
 * For example the period (.) character matches positive inside many other characters and should be marked as secondary
 * @param bonusses An object that contains bonus scores for certain difficult characters to make the more liekly to be red.
 * @param basey The y position of the baseline pixel of the font
 * @param spacewidth the number of pixels a space takes
 * @param treshold minimal color match proportion (0-1) before a pixel is used for the font
 * @param shadow whether this font also uses the black shadow some fonts have. The "unblended" image should be unblended correspondingly
 * @returns a javascript object describing the font which is used as input for the different read functions
 */
function generatefont(unblended, chars, seconds, bonusses, basey, spacewidth, treshold, shadow) {
    //settings vars
    treshold *= 255;
    //initial vars
    var miny = unblended.height - 1;
    var maxy = 0;
    var font = { chars: [], width: 0, spacewidth: spacewidth, shadow: shadow, height: 0, basey: 0 };
    var ds = false;
    var chardata = [];
    //index all chars
    for (var dx = 0; dx < unblended.width; dx++) {
        var i = 4 * dx + 4 * unblended.width * (unblended.height - 1);
        if (unblended.data[i] == 255 && unblended.data[i + 3] == 255) {
            if (ds === false) {
                ds = dx;
            }
        }
        else {
            if (ds !== false) {
                //char found, start detection
                var de = dx;
                var char = chars[chardata.length];
                var chr = {
                    ds: ds,
                    de: de,
                    width: de - ds,
                    chr: char,
                    bonus: (bonusses && bonusses[char]) || 0,
                    secondary: seconds.indexOf(chars[chardata.length]) != -1,
                    pixels: []
                };
                chardata.push(chr);
                font.width = Math.max(font.width, chr.width);
                for (x = 0; x < de - ds; x++) {
                    for (y = 0; y < unblended.height - 1; y++) {
                        var i = (x + ds) * 4 + y * unblended.width * 4;
                        if (unblended.data[i] >= treshold) {
                            miny = Math.min(miny, y);
                            maxy = Math.max(maxy, y);
                        }
                    }
                }
                ds = false;
            }
        }
    }
    font.height = maxy + 1 - miny;
    font.basey = basey - miny;
    //detect all pixels
    for (var a in chardata) {
        var chr = chardata[a];
        for (var x = 0; x < chr.width; x++) {
            for (var y = 0; y < maxy + 1 - miny; y++) {
                var i = (x + chr.ds) * 4 + (y + miny) * unblended.width * 4;
                if (unblended.data[i] >= treshold) {
                    chr.pixels.push(x, y);
                    chr.pixels.push(unblended.data[i]);
                    if (shadow) {
                        chr.pixels.push(unblended.data[i + 1]);
                    }
                    chr.bonus += 5;
                }
            }
        }
        //remove process vars from final json obj
        delete chr.ds;
        delete chr.de;
        //prevent js from doing the thing with unnecessary output precision
        chr.bonus = +chr.bonus.toFixed(3);
        font.chars.push(chr);
    }
    return font;
}

// CONCATENATED MODULE: C:/runeapps/libs/alt1/tooltip/index.ts


var tooltip_font = __webpack_require__("../../../../../libs/alt1/ocr/fonts/aa_10px_mono.fontmeta.json");
class tooltip_TooltipReader {
    constructor() {
        this.farTooltip = false; //Tooltips are further away when interacting with inventory items
        this.lookabove = true; //check for tooltips going up when near the bottom of the screen
        this.trackinactive = true; //keep tracking when rs isn't active
        this.tracking = false;
        this.trackcallback = null;
        this.trackinterval = null;
    }
    track(callback, interval = 30) {
        if (!interval) {
            interval = 30;
        }
        this.stopTrack();
        this.trackinterval = setInterval(this.trackTick.bind(this), interval);
        this.trackcallback = callback;
        this.tracking = true;
    }
    stopTrack() {
        if (this.trackinterval) {
            clearInterval(this.trackinterval);
        }
        this.trackinterval = 0;
        this.tracking = false;
    }
    trackTick() {
        var dir = 1;
        var mousepos = getMousePosition();
        if (!this.trackinactive) {
            if (!alt1.rsActive) {
                return;
            }
            if (!mousepos) {
                return;
            }
        }
        var found = tooltip_TooltipReader.checkPossible(null, false, this.farTooltip);
        if (this.lookabove && !found && mousepos && mousepos.y > alt1.rsHeight - tooltip_TooltipReader.maxh) {
            found = tooltip_TooltipReader.checkPossible(null, true, this.farTooltip);
            dir = -1;
        }
        var r = null;
        if (found) {
            r = tooltip_TooltipReader.read(dir);
        }
        this.trackcallback(r);
    }
    static drawOverlay(tooltip, ignoregroup) {
        if (!ignoregroup) {
            alt1.overLayFreezeGroup("pc_tooltipread");
            alt1.overLaySetGroupZIndex("pc_tooltipread", 1);
            alt1.overLayClearGroup("pc_tooltipread");
            alt1.overLaySetGroup("pc_tooltipread");
        }
        if (tooltip) {
            var col = mixColor(0, 0, 0);
            for (var a = -4; a < tooltip.area.height + 4; a += 20) {
                var y1 = tooltip.area.y + a;
                var y2 = Math.min(y1 + 20, tooltip.area.y + tooltip.area.height + 4);
                alt1.overLayRect(col, tooltip.area.x - 4, y1, tooltip.area.width + 8, y2 - y1, 400, Math.ceil((y2 - y1) / 2));
            }
        }
        if (!ignoregroup) {
            alt1.overLayRefreshGroup("pc_tooltipread");
        }
    }
    /**
     * very fast check to see if a tooltip might exist
     * set up to true to check for tooltips above the mouse instead of under
     */
    static checkPossible(buf, up, far) {
        var mousepos = getMousePosition();
        if (!mousepos) {
            return false;
        }
        if (!buf) {
            buf = capture(mousepos.x, mousepos.y + (up ? -1 : 1) * (far ? 37 : (up ? 32 : 28)), 5, 5);
        }
        if (!buf) {
            return false;
        }
        var data = buf.data;
        var blacks = 0;
        for (var i = 0; i < data.length; i += 4) {
            if (data[i] == 0 && data[i + 1] == 0 && data[i + 2] == 0) {
                blacks++;
            }
        }
        return blacks > data.length / 4 / 2;
    }
    static getCaptArea(dir, mousepos) {
        if (!mousepos) {
            mousepos = getMousePosition();
        }
        var captarea = { x: 0, y: 0, width: 0, height: 0 };
        captarea.width = tooltip_TooltipReader.maxw;
        captarea.x = Math.min(mousepos.x - Math.floor(tooltip_TooltipReader.maxw / 2), alt1.rsWidth - tooltip_TooltipReader.maxw);
        if (dir == 0) {
            if (mousepos.y + tooltip_TooltipReader.offsety + tooltip_TooltipReader.maxh > alt1.rsHeight) {
                captarea.y = mousepos.y - tooltip_TooltipReader.offsety - tooltip_TooltipReader.maxh;
                captarea.height = alt1.rsHeight - captarea.y;
            }
            else {
                captarea.y = mousepos.y + tooltip_TooltipReader.offsety;
                captarea.height = tooltip_TooltipReader.maxh;
            }
        }
        else {
            captarea.height = tooltip_TooltipReader.maxh;
            captarea.y = mousepos.y + (dir == -1 ? -tooltip_TooltipReader.offsety - tooltip_TooltipReader.maxh : tooltip_TooltipReader.offsety);
        }
        if (captarea.x < 0) {
            captarea.x = 0;
        }
        if (captarea.y < 0) {
            captarea.y = 0;
        }
        //TODO also do this for right and bot
        return captarea;
    }
    static readImage(img, mouseAbs, dir) {
        var area = tooltip_TooltipReader.getCaptArea(dir, mouseAbs);
        //make sure we don't try to capture something that isn't in the img
        //TODO use rect class functionality instead?
        if (area.x < img.x) {
            area.width -= img.x - area.x;
            area.x = img.x;
        }
        if (area.y < img.y) {
            area.height -= img.y - area.y;
            area.y = img.y;
        }
        if (area.width > img.width) {
            area.width = img.width;
        }
        if (area.height > img.height) {
            area.height = img.height;
        }
        if (area.x + area.width > img.x + img.width) {
            area.width = img.x + img.width - area.x;
        }
        if (area.y + area.height > img.y + img.height) {
            area.height = img.y + img.height - area.y;
        }
        var buffer = img.toData(area.x, area.y, area.width, area.height);
        var cx = mouseAbs.x - img.x;
        var cy = mouseAbs.y - img.y + 20 * dir;
        var rect = null;
        while (cx >= 0 && cx < buffer.width && cy >= 0 && cy < buffer.height) {
            var i = 4 * cx + 4 * buffer.width * cy;
            if (buffer.data[i] == 0 && buffer.data[i + 1] == 0 && buffer.data[i + 2] == 0) {
                rect = this.attemptFill(buffer, cx, cy, dir);
                if (rect) {
                    break;
                }
            }
            cy += dir;
        }
        if (!rect) {
            return null;
        }
        var uncertainx = rect.x + rect.width + img.x >= alt1.rsWidth - 6 || rect.x + img.x <= 6;
        //alt1.overLayRect(a1lib.mixColor(255,255,255),rect.x+img.x,rect.y+img.y,rect.width,rect.height,200,1);
        var mousepos = {
            x: (uncertainx ? mouseAbs.x : img.x + rect.x + Math.floor(rect.width / 2)),
            y: img.y + rect.y + (dir == 1 ? -26 : +rect.height + 4),
            uncertainx: uncertainx,
        };
        return {
            area: { x: rect.x + img.x, y: rect.y + img.y, width: rect.width, height: rect.height },
            mousepos: mousepos,
            readBankItem: tooltip_TooltipReader.readBankItem.bind(tooltip_TooltipReader, img, rect),
            readInteraction: tooltip_TooltipReader.readInteraction.bind(tooltip_TooltipReader, img, rect)
        };
    }
    static read(dir) {
        if (!dir) {
            dir = 1;
        } //TODO find actual dir
        var mousepos = getMousePosition();
        if (!mousepos) {
            return null;
        }
        var captarea = tooltip_TooltipReader.getCaptArea(dir, mousepos);
        var img = captureHold(captarea.x, captarea.y, captarea.width, captarea.height);
        if (!img) {
            return null;
        }
        if (dir) {
            return tooltip_TooltipReader.readImage(img, mousepos, dir);
        }
        else {
            return tooltip_TooltipReader.readImage(img, mousepos, 1) || tooltip_TooltipReader.readImage(img, mousepos, -1);
        }
    }
    static readBankItem(img, area) {
        var data = img.toData();
        var line1 = null;
        var line2 = null;
        var name = "";
        for (var a = 0; a < 2; a++) {
            var wiggle = Math.round(Math.random() * 6 - 3);
            line1 = findReadLine(data, tooltip_font, [[248, 213, 107], [184, 209, 209]], area.x + Math.floor(area.width / 2) + 20 + 20 * a + wiggle, area.y + 14);
            if (line1 && line1.text) {
                var m = line1.text.match(/\w/g);
                if (m && m.length >= 4) {
                    name += line1.text;
                    break;
                }
            }
        }
        if (area.height > 30) {
            for (var a = 0; a < 2; a++) {
                var wiggle = Math.round(Math.random() * 6 - 3);
                line2 = findReadLine(data, tooltip_font, [[248, 213, 107], [184, 209, 209]], area.x + Math.floor(area.width / 2) - 20 + 20 * a + wiggle, area.y + 14 + 15);
                if (line2 && line2.text) {
                    var m = line2.text.match(/[\)\(\w\)]/g);
                    if (m && m.length >= 3) {
                        name += " " + line2.text;
                        break;
                    }
                }
            }
        }
        console.log(name);
        return name;
    }
    /**
     * @deprecated Not completed
     * @param area
     */
    static readInteraction(img, area) {
        var data = img.toData();
        var readrules = {
            fontname: "largefont",
            budget: 1,
            allowmulticol: true,
            backwards: true,
            colors: [
                mixColor(235, 224, 188),
                mixColor(0, 255, 255),
                mixColor(248, 213, 107),
                mixColor(184, 209, 209),
                mixColor(255, 255, 0),
            ]
        };
        var colors = [
            [235, 224, 188],
            [0, 255, 255],
            [248, 213, 107],
            [184, 209, 209],
            [255, 255, 0],
        ];
        //TODO remove this and all refs
        var rulestr = JSON.stringify(readrules);
        //throw "not completely implemented. OCR only supports one colors at a time";
        //TODO only one color allowed atm
        var lines = findReadLine(data, tooltip_font, colors, area.x + 12, area.y + 14);
        return lines;
    }
    static searchBuffer(buffer, x = 0, y = 0, w = buffer.width, h = buffer.height) {
        var xsteps = Math.ceil(w / 100);
        var data = buffer.data;
        for (var a = 0; a <= xsteps; a++) {
            var cx = x + Math.round((w - 1) / xsteps * a);
            for (var cy = y; cy < y + h; cy++) {
                var i = 4 * cx + 4 * buffer.width * cy;
                if (data[i] == 0 && data[i + 1] == 0 && data[i + 2] == 0) {
                    var r = this.attemptFill(buffer, cx, cy, -1);
                    if (typeof r == "object") {
                        return r;
                    }
                    if (r == "badimg") {
                        return null;
                    }
                }
            }
        }
        return null;
    }
    static attemptFill(buf, x, y, diry) {
        var dir = [1, diry];
        //scan in oposite x dir until nonblack pixel is found
        for (var x1 = x; x1 >= 0 && x1 < buf.width; x1 -= dir[0]) {
            var i = 4 * x1 + 4 * buf.width * y;
            if (buf.data[i] == 0 && buf.data[i + 1] == 0 && buf.data[i + 2] == 0) {
                continue;
            }
            break;
        }
        x1 += dir[0];
        if (x1 == 0) {
            return null;
        }
        //scan in oposite y dir until nonblack pixel is found
        for (var y1 = y; y1 >= 0 && y1 < buf.height; y1 -= dir[1]) {
            var i = 4 * x + 4 * buf.width * y1;
            if (buf.data[i] == 0 && buf.data[i + 1] == 0 && buf.data[i + 2] == 0) {
                continue;
            }
            break;
        }
        y1 += dir[1];
        if (dir[1] == 1 ? y1 == 0 : y1 == buf.height - 1) {
            return null;
        }
        //scan in x dir from known max y to find 2nd x
        for (var x2 = x1; x2 >= 0 && x2 < buf.width; x2 += dir[0]) {
            var i = 4 * x2 + 4 * buf.width * y1;
            if (buf.data[i] == 0 && buf.data[i + 1] == 0 && buf.data[i + 2] == 0) {
                continue;
            }
            break;
        }
        x2 -= dir[0];
        //scan in y dir from known max x to find 2nd y
        for (var y2 = y1; y2 >= 0 && y2 < buf.height; y2 += dir[1]) {
            var i = 4 * x1 + 4 * buf.width * y2;
            if (buf.data[i] == 0 && buf.data[i + 1] == 0 && buf.data[i + 2] == 0) {
                continue;
            }
            break;
        }
        y2 -= dir[1];
        if (Math.min(x1, x2) == 0 && Math.max(x1, x2) == buf.width) {
            return null;
        }
        if (Math.min(y1, y2) == 0 && Math.max(y1, y2) == buf.height) {
            return null;
        }
        if (Math.abs(x1 - x2) < 50 || Math.abs(y1 - y2) < 20) {
            return null;
        }
        return { x: Math.min(x1, x2), y: Math.min(y1, y2), width: Math.abs(x1 - x2) + 1, height: Math.abs(y1 - y2) + 1 };
    }
}
tooltip_TooltipReader.maxw = 400;
tooltip_TooltipReader.maxh = 350;
tooltip_TooltipReader.offsetx = -10;
tooltip_TooltipReader.offsety = -10;

// CONCATENATED MODULE: ./tooltip.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipReader", function() { return tooltip_TooltipReader_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCR", function() { return OCR; });


var tooltip_TooltipReader_0 = tooltip_TooltipReader;
var OCR = ocr_namespaceObject;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./tooltip.ts");


/***/ }),

/***/ "node-fetch":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_node_fetch__;

/***/ }),

/***/ "pngjs":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_pngjs__;

/***/ })

/******/ });
});
//# sourceMappingURL=tooltip.bundle.js.map