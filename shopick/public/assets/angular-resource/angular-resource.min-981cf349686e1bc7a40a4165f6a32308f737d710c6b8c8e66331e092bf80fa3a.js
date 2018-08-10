!function(e,t){"use strict";function n(e,n){n=n||{},t.forEach(n,function(e,t){delete n[t]});for(var r in e)!e.hasOwnProperty(r)||"$"===r.charAt(0)&&"$"===r.charAt(1)||(n[r]=e[r]);return n}var r=t.$$minErr("$resource"),i=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;t.module("ngResource",["ng"]).provider("$resource",function(){var e=/^https?:\/\/[^\/]*/,o=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}},this.$get=["$http","$log","$q","$timeout",function(a,s,u,l){function c(e,t){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,t?"%20":"+")}function f(e,t){this.template=e,this.defaults=m({},o.defaults,t),this.urlParams={}}function p(e,c,$,y){function b(e,n){var o={};return n=m({},c,n),h(n,function(n,a){v(n)&&(n=n());var s;if(n&&n.charAt&&"@"==n.charAt(0)){s=e;var u=n.substr(1);if(null==u||""===u||"hasOwnProperty"===u||!i.test("."+u))throw r("badmember",u);for(var u=u.split("."),l=0,c=u.length;c>l&&t.isDefined(s);l++){var f=u[l];s=null!==s?s[f]:void 0}}else s=n;o[a]=s}),o}function x(e){return e.resource}function w(e){n(e||{},this)}var C=new f(e,y);return $=m({},o.defaults.actions,$),w.prototype.toJSON=function(){var e=m({},this);return delete e.$promise,delete e.$resolved,e},h($,function(e,i){var c=/^(POST|PUT|PATCH)$/i.test(e.method),f=e.timeout,p=t.isDefined(e.cancellable)?e.cancellable:y&&t.isDefined(y.cancellable)?y.cancellable:o.defaults.cancellable;f&&!t.isNumber(f)&&(s.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),delete e.timeout,f=null),w[i]=function(o,s,$,y){var S,k,E,T={};switch(arguments.length){case 4:E=y,k=$;case 3:case 2:if(!v(s)){T=o,S=s,k=$;break}if(v(o)){k=o,E=s;break}k=s,E=$;case 1:v(o)?k=o:c?S=o:T=o;break;case 0:break;default:throw r("badargs",arguments.length)}var A,N,O=this instanceof w,M=O?S:e.isArray?[]:new w(S),_={},V=e.interceptor&&e.interceptor.response||x,j=e.interceptor&&e.interceptor.responseError||void 0;return h(e,function(e,t){switch(t){default:_[t]=g(e);case"params":case"isArray":case"interceptor":case"cancellable":}}),!O&&p&&(A=u.defer(),_.timeout=A.promise,f&&(N=l(A.resolve,f))),c&&(_.data=S),C.setUrlParams(_,m({},b(S,e.params||{}),T),e.url),T=a(_).then(function(o){var a=o.data;if(a){if(t.isArray(a)!==!!e.isArray)throw r("badcfg",i,e.isArray?"array":"object",t.isArray(a)?"array":"object",_.method,_.url);if(e.isArray)M.length=0,h(a,function(e){"object"==typeof e?M.push(new w(e)):M.push(e)});else{var s=M.$promise;n(a,M),M.$promise=s}}return o.resource=M,o},function(e){return(E||d)(e),u.reject(e)}),T["finally"](function(){M.$resolved=!0,!O&&p&&(M.$cancelRequest=t.noop,l.cancel(N),A=N=_.timeout=null)}),T=T.then(function(e){var t=V(e);return(k||d)(t,e.headers),t},j),O?T:(M.$promise=T,M.$resolved=!1,p&&(M.$cancelRequest=A.resolve),M)},w.prototype["$"+i]=function(e,t,n){return v(e)&&(n=t,t=e,e={}),e=w[i].call(this,e,this,t,n),e.$promise||e}}),w.bind=function(t){return p(e,m({},c,t),$)},w}var d=t.noop,h=t.forEach,m=t.extend,g=t.copy,v=t.isFunction;return f.prototype={setUrlParams:function(n,i,o){var a,s,u=this,l=o||u.template,f="",p=u.urlParams={};h(l.split(/\W/),function(e){if("hasOwnProperty"===e)throw r("badname");!/^\d+$/.test(e)&&e&&new RegExp("(^|[^\\\\]):"+e+"(\\W|$)").test(l)&&(p[e]={isQueryParamValue:new RegExp("\\?.*=:"+e+"(?:\\W|$)").test(l)})}),l=l.replace(/\\:/g,":"),l=l.replace(e,function(e){return f=e,""}),i=i||{},h(u.urlParams,function(e,n){a=i.hasOwnProperty(n)?i[n]:u.defaults[n],t.isDefined(a)&&null!==a?(s=e.isQueryParamValue?c(a,!0):c(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),l=l.replace(new RegExp(":"+n+"(\\W|$)","g"),function(e,t){return s+t})):l=l.replace(new RegExp("(/?):"+n+"(\\W|$)","g"),function(e,t,n){return"/"==n.charAt(0)?n:t+n})}),u.defaults.stripTrailingSlashes&&(l=l.replace(/\/+$/,"")||"/"),l=l.replace(/\/\.(?=\w+($|\?))/,"."),n.url=f+l.replace(/\/\\\./,"/."),h(i,function(e,t){u.urlParams[t]||(n.params=n.params||{},n.params[t]=e)})}},p}]})}(window,window.angular);