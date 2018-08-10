!function(e,n){"use strict";var r="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),t=function(e,n){return-1!==n.indexOf(e[0].nodeName)?!0:void 0};n.module("ngAria",["ng"]).provider("$aria",function(){function e(e,n,i,a){return function(c,o,u){var s=u.$normalize(n);!r[s]||t(o,i)||u[s]||c.$watch(u[e],function(e){e=a?!e:!!e,o.attr(n,e)})}}var r={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};this.config=function(e){r=n.extend(r,e)},this.$get=function(){return{config:function(e){return r[e]},$$watchExpr:e}}}).directive("ngShow",["$aria",function(e){return e.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(e){return e.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(e){return e.$$watchExpr("ngValue","aria-checked",r,!1)}]).directive("ngChecked",["$aria",function(e){return e.$$watchExpr("ngChecked","aria-checked",r,!1)}]).directive("ngReadonly",["$aria",function(e){return e.$$watchExpr("ngReadonly","aria-readonly",r,!1)}]).directive("ngRequired",["$aria",function(e){return e.$$watchExpr("ngRequired","aria-required",r,!1)}]).directive("ngModel",["$aria",function(e){function n(n,i,a,c){return e.config(i)&&!a.attr(n)&&(c||!t(a,r))}function i(e,n){return!n.attr("role")&&n.attr("type")===e&&"INPUT"!==n[0].nodeName}function a(e,n){var r=e.type,t=e.role;return"checkbox"===(r||t)||"menuitemcheckbox"===t?"checkbox":"radio"===(r||t)||"menuitemradio"===t?"radio":"range"===r||"progressbar"===t||"slider"===t?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(r,t){var c=a(t,r);return{pre:function(e,n,r,t){"checkbox"===c&&(t.$isEmpty=function(e){return!1===e})},post:function(r,t,a,o){function u(){return o.$modelValue}function s(e){t.attr("aria-checked",a.value==o.$viewValue)}function d(){t.attr("aria-checked",!o.$isEmpty(o.$viewValue))}var l=n("tabindex","tabindex",t,!1);switch(c){case"radio":case"checkbox":i(c,t)&&t.attr("role",c),n("aria-checked","ariaChecked",t,!1)&&r.$watch(u,"radio"===c?s:d),l&&t.attr("tabindex",0);break;case"range":if(i(c,t)&&t.attr("role","slider"),e.config("ariaValue")){var g=!t.attr("aria-valuemin")&&(a.hasOwnProperty("min")||a.hasOwnProperty("ngMin")),f=!t.attr("aria-valuemax")&&(a.hasOwnProperty("max")||a.hasOwnProperty("ngMax")),h=!t.attr("aria-valuenow");g&&a.$observe("min",function(e){t.attr("aria-valuemin",e)}),f&&a.$observe("max",function(e){t.attr("aria-valuemax",e)}),h&&r.$watch(u,function(e){t.attr("aria-valuenow",e)})}l&&t.attr("tabindex",0)}!a.hasOwnProperty("ngRequired")&&o.$validators.required&&n("aria-required","ariaRequired",t,!1)&&a.$observe("required",function(){t.attr("aria-required",!!a.required)}),n("aria-invalid","ariaInvalid",t,!0)&&r.$watch(function(){return o.$invalid},function(e){t.attr("aria-invalid",!!e)})}}}}}]).directive("ngDisabled",["$aria",function(e){return e.$$watchExpr("ngDisabled","aria-disabled",r,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(e,n,r,t){n.attr("aria-live")||n.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(e,n){return{restrict:"A",compile:function(i,a){var c=n(a.ngClick,null,!0);return function(n,i,a){t(i,r)||(e.config("bindRoleForClick")&&!i.attr("role")&&i.attr("role","button"),e.config("tabindex")&&!i.attr("tabindex")&&i.attr("tabindex",0),!e.config("bindKeypress")||a.ngKeypress)||i.on("keypress",function(e){function r(){c(n,{$event:e})}var t=e.which||e.keyCode;32!==t&&13!==t||n.$apply(r)})}}}}]).directive("ngDblclick",["$aria",function(e){return function(n,i,a){!e.config("tabindex")||i.attr("tabindex")||t(i,r)||i.attr("tabindex",0)}}])}(window,window.angular);