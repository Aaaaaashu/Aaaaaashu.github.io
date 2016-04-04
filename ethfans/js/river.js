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
	
	var _affix = __webpack_require__(1);
	
	var _affix2 = _interopRequireDefault(_affix);
	
	var _scrollspy = __webpack_require__(2);
	
	var _scrollspy2 = _interopRequireDefault(_scrollspy);
	
	__webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/* ========================================================================
	 * Bootstrap: affix.js v3.3.6
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	+function ($) {
	  'use strict';
	
	  // AFFIX CLASS DEFINITION
	  // ======================
	
	  var Affix = function Affix(element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options);
	
	    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));
	
	    this.$element = $(element);
	    this.affixed = null;
	    this.unpin = null;
	    this.pinnedOffset = null;
	
	    this.checkPosition();
	  };
	
	  Affix.VERSION = '3.3.6';
	
	  Affix.RESET = 'affix affix-top affix-bottom';
	
	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  };
	
	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    var targetHeight = this.$target.height();
	
	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;
	
	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
	      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
	    }
	
	    var initializing = this.affixed == null;
	    var colliderTop = initializing ? scrollTop : position.top;
	    var colliderHeight = initializing ? targetHeight : height;
	
	    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
	    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';
	
	    return false;
	  };
	
	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset;
	    this.$element.removeClass(Affix.RESET).addClass('affix');
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    return this.pinnedOffset = position.top - scrollTop;
	  };
	
	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1);
	  };
	
	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return;
	
	    var height = this.$element.height();
	    var offset = this.options.offset;
	    var offsetTop = offset.top;
	    var offsetBottom = offset.bottom;
	    var scrollHeight = Math.max($(document).height(), $(document.body).height());
	
	    if ((typeof offset === 'undefined' ? 'undefined' : _typeof(offset)) != 'object') offsetBottom = offsetTop = offset;
	    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);
	
	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
	
	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '');
	
	      var affixType = 'affix' + (affix ? '-' + affix : '');
	      var e = $.Event(affixType + '.bs.affix');
	
	      this.$element.trigger(e);
	
	      if (e.isDefaultPrevented()) return;
	
	      this.affixed = affix;
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;
	
	      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
	    }
	
	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      });
	    }
	  };
	
	  // AFFIX PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.affix');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;
	
	      if (!data) $this.data('bs.affix', data = new Affix(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }
	
	  var old = $.fn.affix;
	
	  $.fn.affix = Plugin;
	  $.fn.affix.Constructor = Affix;
	
	  // AFFIX NO CONFLICT
	  // =================
	
	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old;
	    return this;
	  };
	
	  // AFFIX DATA-API
	  // ==============
	
	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this);
	      var data = $spy.data();
	
	      data.offset = data.offset || {};
	
	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
	      if (data.offsetTop != null) data.offset.top = data.offsetTop;
	
	      Plugin.call($spy, data);
	    });
	  });
	}(jQuery);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.6
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	+function ($) {
	  'use strict';
	
	  // SCROLLSPY CLASS DEFINITION
	  // ==========================
	
	  function ScrollSpy(element, options) {
	    this.$body = $(document.body);
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
	    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
	    this.selector = (this.options.target || '') + ' .nav li > a';
	    this.offsets = [];
	    this.targets = [];
	    this.activeTarget = null;
	    this.scrollHeight = 0;
	
	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
	    this.refresh();
	    this.process();
	  }
	
	  ScrollSpy.VERSION = '3.3.6';
	
	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  };
	
	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	  };
	
	  ScrollSpy.prototype.refresh = function () {
	    var that = this;
	    var offsetMethod = 'offset';
	    var offsetBase = 0;
	
	    this.offsets = [];
	    this.targets = [];
	    this.scrollHeight = this.getScrollHeight();
	
	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position';
	      offsetBase = this.$scrollElement.scrollTop();
	    }
	
	    this.$body.find(this.selector).map(function () {
	      var $el = $(this);
	      var href = $el.data('target') || $el.attr('href');
	      var $href = /^#./.test(href) && $(href);
	
	      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
	    }).sort(function (a, b) {
	      return a[0] - b[0];
	    }).each(function () {
	      that.offsets.push(this[0]);
	      that.targets.push(this[1]);
	    });
	  };
	
	  ScrollSpy.prototype.process = function () {
	    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
	    var scrollHeight = this.getScrollHeight();
	    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
	    var offsets = this.offsets;
	    var targets = this.targets;
	    var activeTarget = this.activeTarget;
	    var i;
	
	    if (this.scrollHeight != scrollHeight) {
	      this.refresh();
	    }
	
	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
	    }
	
	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null;
	      return this.clear();
	    }
	
	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
	    }
	  };
	
	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target;
	
	    this.clear();
	
	    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
	
	    var active = $(selector).parents('li').addClass('active');
	
	    if (active.parent('.dropdown-menu').length) {
	      active = active.closest('li.dropdown').addClass('active');
	    }
	
	    active.trigger('activate.bs.scrollspy');
	  };
	
	  ScrollSpy.prototype.clear = function () {
	    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
	  };
	
	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.scrollspy');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;
	
	      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }
	
	  var old = $.fn.scrollspy;
	
	  $.fn.scrollspy = Plugin;
	  $.fn.scrollspy.Constructor = ScrollSpy;
	
	  // SCROLLSPY NO CONFLICT
	  // =====================
	
	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old;
	    return this;
	  };
	
	  // SCROLLSPY DATA-API
	  // ==================
	
	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this);
	      Plugin.call($spy, $spy.data());
	    });
	  });
	}(jQuery);

/***/ },
/* 3 */
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
	  });
	}(jQuery);
	
	exports.default = Ethfans;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=river.js.map