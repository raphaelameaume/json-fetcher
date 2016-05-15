(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsonFetcher"] = factory();
	else
		root["jsonFetcher"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function call(config) {
	  var url = config.baseUrl + config.endpoint;
	  var method = config.method;
	  var body = JSON.stringify(config.body);
	  var options = config.options;
	  var optionalHeaders = options.headers || {};
	
	  var headers = {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json'
	  };
	
	  var fetchConfig = {
	    method: method,
	    body: body,
	    headers: headers
	  };
	
	  return fetch(url, fetchConfig).then(function (response) {
	    return response.json();
	  }).then(function (response) {
	    if (response.status !== 200 || response.statusCode !== 200 || !response.success) {
	      return Promise.reject(error);
	    }
	    return response;
	  }).catch(function (error) {
	    console.error(error);
	    return Promise.reject(error);
	  });
	}
	
	var jsonFetcher = {
	  baseUrl: '',
	  headers: {},
	
	  create: function create(options) {
	    if (options.baseUrl) {
	      this.baseUrl = options.baseUrl;
	    }
	
	    if (options.headers) {
	      this.headers = options.headers;
	    }
	
	    return this;
	  },
	  get: function get(endpoint) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    return call({
	      baseUrl: this.baseUrl,
	      headers: this.headers,
	      endpoint: endpoint,
	      method: 'get',
	      options: options
	    });
	  },
	  post: function post(endpoint) {
	    var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	    return call({
	      baseUrl: this.baseUrl,
	      headers: this.headers,
	      endpoint: endpoint,
	      method: 'post',
	      body: body,
	      options: options
	    });
	  },
	  put: function put(endpoint) {
	    var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	    return call({
	      baseUrl: this.baseUrl,
	      headers: this.headers,
	      endpoint: endpoint,
	      method: 'put',
	      body: body,
	      options: options
	    });
	  },
	  remove: function remove(endpoint) {
	    var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	    return call({
	      baseUrl: this.baseUrl,
	      headers: this.headers,
	      endpoint: endpoint,
	      method: 'delete',
	      body: body,
	      options: options
	    });
	  }
	};
	
	exports.default = jsonFetcher;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=json-fetcher.js.map