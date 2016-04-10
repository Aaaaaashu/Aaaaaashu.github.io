(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("river", [], factory);
	else if(typeof exports === 'object')
		exports["river"] = factory();
	else
		root["river"] = factory();
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Kudo = function ($) {
	
	  var NAME = 'kudo';
	
	  var Kudo = function () {
	    function Kudo(element) {
	      _classCallCheck(this, Kudo);
	
	      this._element = element;
	      this._element.data('kudoable', this);
	      this.counter = $('.count .num', this._element);
	      this.timer = null;
	
	      this.start = $.proxy(this.start, this);
	      this.end = $.proxy(this.end, this);
	      this.stop = $.proxy(this.stop, this);
	      this.complete = $.proxy(this.complete, this);
	
	      this.bindEvents();
	    }
	
	    _createClass(Kudo, [{
	      key: 'bindEvents',
	      value: function bindEvents() {
	        this._element.on('mouseenter', this.start);
	        this._element.on('mouseleave', this.end);
	        this._element.on('click', this.stop);
	        this._element.on('touchstart', this.start);
	        this._element.on('touchend', this.end);
	      }
	    }, {
	      key: 'start',
	      value: function start() {
	        if (this._isKudoable() && !this._isComplete()) {
	          this._element.trigger('kudo:active');
	          this._element.addClass('active');
	
	          return this.timer = setTimeout(this.complete, 700);
	        }
	      }
	    }, {
	      key: 'end',
	      value: function end() {
	        if (this._isKudoable() && !this._isComplete()) {
	          this._element.trigger('kudo:inactive');
	          this._element.removeClass('active');
	
	          if (this.timer != null) {
	            return clearTimeout(this.timer);
	          }
	        }
	      }
	    }, {
	      key: 'stop',
	      value: function stop(e) {
	        e.preventDefault();
	
	        if (this._isComplete()) {
	          this.decrementCount();
	          this._element.trigger('kudo:removed');
	          this._element.removeClass('complete');
	        }
	      }
	    }, {
	      key: 'complete',
	      value: function complete() {
	        this.end();
	        this.incrementCount();
	        this._element.trigger('kudo:added');
	        this._element.addClass('complete');
	      }
	    }, {
	      key: 'setCount',
	      value: function setCount(count) {
	        this.counter.html(count);
	      }
	    }, {
	      key: 'currentCount',
	      value: function currentCount() {
	        return parseInt(this.counter.html());
	      }
	    }, {
	      key: 'incrementCount',
	      value: function incrementCount() {
	        this.setCount(this.currentCount() + 1);
	      }
	    }, {
	      key: 'decrementCount',
	      value: function decrementCount() {
	        this.setCount(this.currentCount() - 1);
	      }
	
	      // private
	
	    }, {
	      key: '_isKudoable',
	      value: function _isKudoable() {
	        return this._element.hasClass('kudoable');
	      }
	    }, {
	      key: '_isComplete',
	      value: function _isComplete() {
	        return this._element.hasClass('complete');
	      }
	
	      // static
	
	    }], [{
	      key: '_jQueryInterface',
	      value: function _jQueryInterface(config) {
	        return this.each(function () {
	          return new Kudo($(this));
	        });
	      }
	    }]);
	
	    return Kudo;
	  }();
	
	  $.fn[NAME] = Kudo._jQueryInterface;
	
	  return Kudo;
	}(jQuery);
	
	exports.default = Kudo;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var Ethfans = function ($) {
	
	  $(document).on('ready', function () {
	    var $navbar = $('#navbar');
	    var $navbarIconSearch = $navbar.find('.icon-search');
	    var $navbarSearch = $navbar.find('.search');
	
	    var $banners = $('#recommend-banners');
	    var $hotBannerItem = $banners.find('.hot-banner').children('.item');
	
	    $navbarIconSearch.on('click', function () {
	      $navbar.addClass('search-focus');
	      $navbarSearch.focus();
	    });
	
	    $navbarSearch.on('focusout', function () {
	      $navbar.removeClass('search-focus');
	    });
	
	    $hotBannerItem.hover(function () {
	      $hotBannerItem.removeClass('hover');
	      $(this).addClass('hover');
	    });
	
	    var kudo = $('.kudo');
	
	    // initialize the kudoer
	    kudo.kudo();
	
	    // bind to events on the kudos
	    kudo.on('kudo:added', function (event) {
	      var element = $(this);
	      var id = element.data('id');
	
	      // send the data to your server...
	      console.log("Kudod", element);
	    });
	  });
	}(jQuery);
	
	exports.default = Ethfans;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=river.js.map