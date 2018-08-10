!function(e,t){"use strict";var n="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),r=function(e,t){return-1!==t.indexOf(e[0].nodeName)?!0:void 0};t.module("ngAria",["ng"]).provider("$aria",function(){function e(e,t,i,o){return function(a,s,c){var l=c.$normalize(t);!n[l]||r(s,i)||c[l]||a.$watch(c[e],function(e){e=o?!e:!!e,s.attr(t,e)})}}var n={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};this.config=function(e){n=t.extend(n,e)},this.$get=function(){return{config:function(e){return n[e]},$$watchExpr:e}}}).directive("ngShow",["$aria",function(e){return e.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(e){return e.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(e){return e.$$watchExpr("ngValue","aria-checked",n,!1)}]).directive("ngChecked",["$aria",function(e){return e.$$watchExpr("ngChecked","aria-checked",n,!1)}]).directive("ngReadonly",["$aria",function(e){return e.$$watchExpr("ngReadonly","aria-readonly",n,!1)}]).directive("ngRequired",["$aria",function(e){return e.$$watchExpr("ngRequired","aria-required",n,!1)}]).directive("ngModel",["$aria",function(e){function t(t,i,o,a){return e.config(i)&&!o.attr(t)&&(a||!r(o,n))}function i(e,t){return!t.attr("role")&&t.attr("type")===e&&"INPUT"!==t[0].nodeName}function o(e,t){var n=e.type,r=e.role;return"checkbox"===(n||r)||"menuitemcheckbox"===r?"checkbox":"radio"===(n||r)||"menuitemradio"===r?"radio":"range"===n||"progressbar"===r||"slider"===r?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(n,r){var a=o(r,n);return{pre:function(e,t,n,r){"checkbox"===a&&(r.$isEmpty=function(e){return!1===e})},post:function(n,r,o,s){function c(){return s.$modelValue}function l(e){r.attr("aria-checked",o.value==s.$viewValue)}function d(){r.attr("aria-checked",!s.$isEmpty(s.$viewValue))}var u=t("tabindex","tabindex",r,!1);switch(a){case"radio":case"checkbox":i(a,r)&&r.attr("role",a),t("aria-checked","ariaChecked",r,!1)&&n.$watch(c,"radio"===a?l:d),u&&r.attr("tabindex",0);break;case"range":if(i(a,r)&&r.attr("role","slider"),e.config("ariaValue")){var m=!r.attr("aria-valuemin")&&(o.hasOwnProperty("min")||o.hasOwnProperty("ngMin")),f=!r.attr("aria-valuemax")&&(o.hasOwnProperty("max")||o.hasOwnProperty("ngMax")),p=!r.attr("aria-valuenow");m&&o.$observe("min",function(e){r.attr("aria-valuemin",e)}),f&&o.$observe("max",function(e){r.attr("aria-valuemax",e)}),p&&n.$watch(c,function(e){r.attr("aria-valuenow",e)})}u&&r.attr("tabindex",0)}!o.hasOwnProperty("ngRequired")&&s.$validators.required&&t("aria-required","ariaRequired",r,!1)&&o.$observe("required",function(){r.attr("aria-required",!!o.required)}),t("aria-invalid","ariaInvalid",r,!0)&&n.$watch(function(){return s.$invalid},function(e){r.attr("aria-invalid",!!e)})}}}}}]).directive("ngDisabled",["$aria",function(e){return e.$$watchExpr("ngDisabled","aria-disabled",n,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(e,t,n,r){t.attr("aria-live")||t.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(e,t){return{restrict:"A",compile:function(i,o){var a=t(o.ngClick,null,!0);return function(t,i,o){r(i,n)||(e.config("bindRoleForClick")&&!i.attr("role")&&i.attr("role","button"),e.config("tabindex")&&!i.attr("tabindex")&&i.attr("tabindex",0),!e.config("bindKeypress")||o.ngKeypress)||i.on("keypress",function(e){function n(){a(t,{$event:e})}var r=e.which||e.keyCode;32!==r&&13!==r||t.$apply(n)})}}}}]).directive("ngDblclick",["$aria",function(e){return function(t,i,o){!e.config("tabindex")||i.attr("tabindex")||r(i,n)||i.attr("tabindex",0)}}])}(window,window.angular);