+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),o=i.data("bs.carousel"),r=e.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t),a="string"==typeof t?t:r.slide;o||i.data("bs.carousel",o=new n(this,r)),"number"==typeof t?o.to(t):a?o[a]():r.interval&&o.pause().cycle()})}var n=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",e.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))};n.VERSION="3.3.6",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()}},n.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},n.prototype.getItemForDirection=function(e,t){var n=this.getItemIndex(t),i="prev"==e&&0===n||"next"==e&&n==this.$items.length-1;if(i&&!this.options.wrap)return t;var o="prev"==e?-1:1,r=(n+o)%this.$items.length;return this.$items.eq(r)},n.prototype.to=function(e){var t=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){t.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",this.$items.eq(e))},n.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(t,i){var o=this.$element.find(".item.active"),r=i||this.getItemForDirection(t,o),a=this.interval,s="next"==t?"left":"right",l=this;if(r.hasClass("active"))return this.sliding=!1;var c=r[0],u=e.Event("slide.bs.carousel",{relatedTarget:c,direction:s});if(this.$element.trigger(u),!u.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var d=e(this.$indicators.children()[this.getItemIndex(r)]);d&&d.addClass("active")}var p=e.Event("slid.bs.carousel",{relatedTarget:c,direction:s});return e.support.transition&&this.$element.hasClass("slide")?(r.addClass(t),r[0].offsetWidth,o.addClass(s),r.addClass(s),o.one("bsTransitionEnd",function(){r.removeClass([t,s].join(" ")).addClass("active"),o.removeClass(["active",s].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(p)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(p)),a&&this.cycle(),this}};var i=e.fn.carousel;e.fn.carousel=t,e.fn.carousel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=i,this};var o=function(n){var i,o=e(this),r=e(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(r.hasClass("carousel")){var a=e.extend({},r.data(),o.data()),s=o.attr("data-slide-to");s&&(a.interval=!1),t.call(r,a),s&&r.data("bs.carousel").to(s),n.preventDefault()}};e(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var n=e(this);t.call(n,n.data())})})}(jQuery);