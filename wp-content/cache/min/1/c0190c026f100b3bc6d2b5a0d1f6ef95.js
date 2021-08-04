/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});(function(){var c=document.body.className;c=c.replace(/woocommerce-no-js/,'woocommerce-js');document.body.className=c})();(function($){"use strict";var banner_carousel=function($scope,$){if($('.main-slider-carousel').length){$('.main-slider-carousel').owlCarousel({loop:!0,margin:0,nav:!0,animateOut:'fadeOut',animateIn:'fadeIn',active:!0,smartSpeed:1000,autoplay:6000,navText:['<span class="fas fa-angle-left"></span>','<span class="fas fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},1200:{items:1}}})}}
var testimonial_carousel=function($scope,$){if($('.two-column-carousel').length){$('.two-column-carousel').owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:1000,navText:['<span class="flaticon-left-1"></span>','<span class="flaticon-right-1"></span>'],responsive:{0:{items:1},480:{items:1},600:{items:1},800:{items:2},1024:{items:2}}})}}
var brand_carousel=function($scope,$){if($('.clients-carousel').length){$('.clients-carousel').owlCarousel({loop:!0,margin:70,nav:!1,smartSpeed:2000,autoplay:!0,navText:['<span class="flaticon-left"></span>','<span class="flaticon-right"></span>'],responsive:{0:{items:1},480:{items:2},600:{items:3},800:{items:4},1200:{items:5}}})}}
var project_carousel=function($scope,$){if($('.single-item-carousel').length){$('.single-item-carousel').owlCarousel({loop:!0,margin:30,nav:!1,smartSpeed:500,autoplay:!0,navText:['<span class="flaticon-left"></span>','<span class="flaticon-right"></span>'],responsive:{0:{items:1},480:{items:1},600:{items:1},800:{items:1},1200:{items:1}}})}}
var team_carousel=function($scope,$){if($('.four-item-carousel').length){$('.four-item-carousel').owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:5000,navText:['<span class="fas fa-angle-left"></span>','<span class="fas fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:3},1024:{items:3},1200:{items:4}}})}}
var service_carousel=function($scope,$){if($('.three-item-carousel').length){$('.three-item-carousel').owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:1000,autoplay:500,navText:['<span class="fas fa-angle-left"></span>','<span class="fas fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:1},600:{items:2},800:{items:2},1024:{items:3}}})}}
$(window).on('elementor/frontend/init',function(){elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_banner.default',banner_carousel);elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_testimonial.default',testimonial_carousel);elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_clients.default',brand_carousel);elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_portfolio.default',project_carousel);elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_team.default',team_carousel);elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_product_grid.default',team_carousel);elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_service.default',service_carousel);elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_blog.default',service_carousel)})})(window.jQuery);!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,function(a){"use strict";var e,r,o="URLSearchParams"in self,n="Symbol"in self&&"iterator"in Symbol,h="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in self,s="ArrayBuffer"in self;function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return t="string"!=typeof t?String(t):t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function c(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:h&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&h&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||r(t))?this._bodyArrayBuffer=l(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},h&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,r=c(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=p(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(E)}),this.json=function(){return this.text().then(JSON.parse)},this}s&&(e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))}),d.prototype.append=function(t,e){t=u(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[u(t)]},d.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},d.prototype.set=function(t,e){this.map[u(t)]=f(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),t(r)},d.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},d.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),t(r)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){var r,o=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",t=r.toUpperCase(),-1<m.indexOf(t)?t:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function E(t){var r=new FormData;return t.trim().split("&").forEach(function(t){var e;t&&(t=(e=t.split("=")).shift().replace(/\+/g," "),e=e.join("=").replace(/\+/g," "),r.append(decodeURIComponent(t),decodeURIComponent(e)))}),r}function v(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},b.call(w.prototype),b.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];v.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},a.DOMException=self.DOMException;try{new a.DOMException}catch(t){a.DOMException=function(t,e){this.message=t,this.name=e;t=Error(t);this.stack=t.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function _(i,s){return new Promise(function(o,t){var e=new w(i,s);if(e.signal&&e.signal.aborted)return t(new a.DOMException("Aborted","AbortError"));var n=new XMLHttpRequest;function r(){n.abort()}n.onload=function(){var r,t={status:n.status,statusText:n.statusText,headers:(e=n.getAllResponseHeaders()||"",r=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),t=e.shift().trim();t&&(e=e.join(":").trim(),r.append(t,e))}),r)};t.url="responseURL"in n?n.responseURL:t.headers.get("X-Request-URL");var e="response"in n?n.response:n.responseText;o(new v(e,t))},n.onerror=function(){t(new TypeError("Network request failed"))},n.ontimeout=function(){t(new TypeError("Network request failed"))},n.onabort=function(){t(new a.DOMException("Aborted","AbortError"))},n.open(e.method,e.url,!0),"include"===e.credentials?n.withCredentials=!0:"omit"===e.credentials&&(n.withCredentials=!1),"responseType"in n&&h&&(n.responseType="blob"),e.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",r),n.onreadystatechange=function(){4===n.readyState&&e.signal.removeEventListener("abort",r)}),n.send(void 0===e._bodyInit?null:e._bodyInit)})}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=d,self.Request=w,self.Response=v),a.Headers=d,a.Request=w,a.Response=v,a.fetch=_,Object.defineProperty(a,"__esModule",{value:!0})});var wpcf7={"api":{"root":"https:\/\/smartdemowp.com\/carneshop\/wp-json\/","namespace":"contact-form-7\/v1"},"cached":"1"};!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(2);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var r=function(e){return Math.abs(parseInt(e,10))},o=function(e,t){var n=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"]]);n.has(t)&&(t=n.get(t)),Array.from(n.values()).includes(t)||(t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-"),t="custom-".concat(t));var r=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),r&&r!==t&&e.classList.remove(r),t},a=function(e,t,n){var r=new CustomEvent("wpcf7".concat(t),{bubbles:!0,detail:n});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(r)},c=n(0),i=n.n(c),s=n(1),u=n.n(s);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=wpcf7.api,n=t.root,r=t.namespace,o=void 0===r?"contact-form-7/v1":r;return d.reduceRight((function(e,t){return function(n){return t(n,e)}}),(function(e){var t,r,a=e.url,c=e.path,i=e.endpoint,s=e.headers,l=e.body,p=e.data,d=u()(e,["url","path","endpoint","headers","body","data"]);"string"==typeof i&&(t=o.replace(/^\/|\/$/g,""),c=(r=i.replace(/^\//,""))?t+"/"+r:t),"string"==typeof c&&(-1!==n.indexOf("?")&&(c=c.replace("?","&")),c=c.replace(/^\//,""),a=n+c),delete(s=f({Accept:"application/json, */*;q=0.1"},s))["X-WP-Nonce"],p&&(l=JSON.stringify(p),s["Content-Type"]="application/json");var v={code:"fetch_error",message:"You are probably offline."},b={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(a||c||window.location.href,f(f({},d),{},{headers:s,body:l})).then((function(e){return Promise.resolve(e).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){if(204===e.status)return null;if(e&&e.json)return e.json().catch((function(){throw b}));throw b}))}),(function(){throw v}))}))(e)},d=[];function v(e,t={}){const n=new FormData(e);t.submitter&&t.submitter.name&&n.append(t.submitter.name,t.submitter.value);const r={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(n,e=>{const t=e[0],n=e[1];return!t.match(/^_/)&&{name:t,value:n}}).filter(e=>!1!==e),formData:n},c=t=>{const n=document.createElement("li");n.setAttribute("id",t.error_id),t.idref?n.insertAdjacentHTML("beforeend",`<a href="#${t.idref}">${t.message}</a>`):n.insertAdjacentText("beforeend",t.message),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(n)},i=t=>{const n=e.querySelector(t.into),r=n.querySelector(".wpcf7-form-control");r.classList.add("wpcf7-not-valid"),r.setAttribute("aria-describedby",t.error_id);const o=document.createElement("span");o.setAttribute("class","wpcf7-not-valid-tip"),o.setAttribute("aria-hidden","true"),o.insertAdjacentText("beforeend",t.message),n.appendChild(o),n.querySelectorAll("[aria-invalid]").forEach(e=>{e.setAttribute("aria-invalid","true")}),r.closest(".use-floating-validation-tip")&&(r.addEventListener("focus",e=>{o.setAttribute("style","display: none")}),o.addEventListener("mouseover",e=>{o.setAttribute("style","display: none")}))};p({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:n,wpcf7:{endpoint:"feedback",form:e,detail:r}}).then(t=>{const n=o(e,t.status);return r.status=t.status,r.apiResponse=t,["invalid","unaccepted","spam","aborted"].includes(n)?a(e,n,r):["sent","failed"].includes(n)&&a(e,"mail"+n,r),a(e,"submit",r),t}).then(t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&(t.invalid_fields.forEach(c),t.invalid_fields.forEach(i)),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach(e=>{e.innerText=t.message})}).catch(e=>console.error(e))}p.use=function(e){d.unshift(e)},p.use((e,t)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:t,detail:n}=e.wpcf7;b(t),a(t,"beforesubmit",n),o(t,"submitting")}return t(e)});const b=e=>{e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText="",e.querySelectorAll(".wpcf7-not-valid-tip").forEach(e=>{e.remove()}),e.querySelectorAll("[aria-invalid]").forEach(e=>{e.setAttribute("aria-invalid","false")}),e.querySelectorAll(".wpcf7-form-control").forEach(e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid")}),e.querySelectorAll(".wpcf7-response-output").forEach(e=>{e.innerText=""})};function w(e){var t=new FormData(e),n={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(t,(function(e){var t=e[0],n=e[1];return!t.match(/^_/)&&{name:t,value:n}})).filter((function(e){return!1!==e})),formData:t};p({endpoint:"contact-forms/".concat(e.wpcf7.id,"/refill"),method:"GET",wpcf7:{endpoint:"refill",form:e,detail:n}}).then((function(t){e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,o(e,"mail_sent")):o(e,"init"),n.apiResponse=t,a(e,"reset",n)})).catch((function(e){return console.error(e)}))}p.use((function(e,t){if(e.wpcf7&&"refill"===e.wpcf7.endpoint){var n=e.wpcf7,r=n.form;n.detail,b(r),o(r,"resetting")}return t(e)}));var m=function(e,t){var n=function(n){var r=t[n];e.querySelectorAll('input[name="'.concat(n,'"]')).forEach((function(e){e.value=""})),e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach((function(e){e.setAttribute("src",r)}));var o=/([0-9]+)\.(png|gif|jpeg)$/.exec(r);o&&e.querySelectorAll('input[name="_wpcf7_captcha_challenge_'.concat(n,'"]')).forEach((function(e){e.value=o[1]}))};for(var r in t)n(r)},h=function(e,t){var n=function(n){var r=t[n][0],o=t[n][1];e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach((function(e){e.querySelector('input[name="'.concat(n,'"]')).value="",e.querySelector(".wpcf7-quiz-label").textContent=r,e.querySelector('input[name="_wpcf7_quiz_answer_'.concat(n,'"]')).value=o}))};for(var r in t)n(r)};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){var t=new FormData(e);e.wpcf7={id:r(t.get("_wpcf7")),status:e.getAttribute("data-status"),pluginVersion:t.get("_wpcf7_version"),locale:t.get("_wpcf7_locale"),unitTag:t.get("_wpcf7_unit_tag"),containerPost:r(t.get("_wpcf7_container_post")),parent:e.closest(".wpcf7")},e.querySelectorAll(".wpcf7-submit").forEach((function(e){e.insertAdjacentHTML("afterend",'<span class="ajax-loader"></span>')})),function(e){e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((function(t){t.addEventListener("change",(function(t){var n=t.target.getAttribute("name");e.querySelectorAll('input[type="checkbox"][name="'.concat(n,'"]')).forEach((function(e){e!==t.target&&(e.checked=!1)}))}))}))}(e),function(e){e.querySelectorAll(".has-free-text").forEach((function(t){var n=t.querySelector("input.wpcf7-free-text"),r=t.querySelector('input[type="checkbox"], input[type="radio"]');n.disabled=!r.checked,e.addEventListener("change",(function(e){n.disabled=!r.checked,e.target===r&&r.checked&&n.focus()}))}))}(e),function(e){e.querySelectorAll(".wpcf7-validates-as-url").forEach((function(e){e.addEventListener("change",(function(t){var n=e.value.trim();n&&!n.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==n.indexOf(".")&&(n="http://"+(n=n.replace(/^\/+/,""))),e.value=n}))}))}(e),function(e){if(e.querySelector(".wpcf7-acceptance")&&!e.classList.contains("wpcf7-acceptance-as-validation")){var t=function(){var t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((function(e){if(t&&!e.classList.contains("optional")){var n=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&n.checked||!e.classList.contains("invert")&&!n.checked)&&(t=!1)}})),e.querySelectorAll(".wpcf7-submit").forEach((function(e){e.disabled=!t}))};t(),e.addEventListener("change",(function(e){t()})),e.addEventListener("wpcf7reset",(function(e){t()}))}}(e),function(e){var t=function(e,t){var n=r(e.getAttribute("data-starting-value")),o=r(e.getAttribute("data-maximum-value")),a=r(e.getAttribute("data-minimum-value")),c=e.classList.contains("down")?n-t.value.length:t.value.length;e.setAttribute("data-current-value",c),e.innerText=c,o&&o<t.value.length?e.classList.add("too-long"):e.classList.remove("too-long"),a&&t.value.length<a?e.classList.add("too-short"):e.classList.remove("too-short")},n=function(n){n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({init:!1},n),e.querySelectorAll(".wpcf7-character-count").forEach((function(r){var o=r.getAttribute("data-target-name"),a=e.querySelector('[name="'.concat(o,'"]'));a&&(a.value=a.defaultValue,t(r,a),n.init&&a.addEventListener("keyup",(function(e){t(r,a)})))}))};n({init:!0}),e.addEventListener("wpcf7reset",(function(e){n()}))}(e),window.addEventListener("load",(function(t){wpcf7.cached&&e.reset()})),e.addEventListener("reset",(function(t){wpcf7.reset(e)})),e.addEventListener("submit",(function(t){var n=t.submitter;wpcf7.submit(e,{submitter:n}),t.preventDefault()})),e.addEventListener("wpcf7submit",(function(t){t.detail.apiResponse.captcha&&m(e,t.detail.apiResponse.captcha),t.detail.apiResponse.quiz&&h(e,t.detail.apiResponse.quiz)})),e.addEventListener("wpcf7reset",(function(t){t.detail.apiResponse.captcha&&m(e,t.detail.apiResponse.captcha),t.detail.apiResponse.quiz&&h(e,t.detail.apiResponse.quiz)}))}document.addEventListener("DOMContentLoaded",e=>{var t;if("undefined"==typeof wpcf7)return void console.error("wpcf7 is not defined.");if(void 0===wpcf7.api)return void console.error("wpcf7.api is not defined.");if("function"!=typeof window.fetch)return void console.error("Your browser doesn't support window.fetch().");if("function"!=typeof window.FormData)return void console.error("Your browser doesn't support window.FormData().");const n=document.querySelectorAll(".wpcf7 > form");"function"==typeof n.forEach?(wpcf7={init:g,submit:v,reset:w,...null!==(t=wpcf7)&&void 0!==t?t:{}},n.forEach(e=>wpcf7.init(e))):console.error("Your browser doesn't support NodeList.forEach().")})}]);/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(b){b.fn._fadeIn=b.fn.fadeIn;var p=b.noop||function(){},h=/MSIE/.test(navigator.userAgent),k=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),y=(document.documentMode,b.isFunction(document.createElement("div").style.setExpression));b.blockUI=function(e){o(window,e)},b.unblockUI=function(e){v(window,e)},b.growlUI=function(e,t,o,n){var i=b('<div class="growlUI"></div>');e&&i.append("<h1>"+e+"</h1>"),t&&i.append("<h2>"+t+"</h2>"),o===undefined&&(o=3e3);var s=function(e){e=e||{},b.blockUI({message:i,fadeIn:"undefined"!=typeof e.fadeIn?e.fadeIn:700,fadeOut:"undefined"!=typeof e.fadeOut?e.fadeOut:1e3,timeout:"undefined"!=typeof e.timeout?e.timeout:o,centerY:!1,showOverlay:!1,onUnblock:n,css:b.blockUI.defaults.growlCSS})};s();i.css("opacity");i.mouseover(function(){s({fadeIn:0,timeout:3e4});var e=b(".blockMsg");e.stop(),e.fadeTo(300,1)}).mouseout(function(){b(".blockMsg").fadeOut(1e3)})},b.fn.block=function(e){if(this[0]===window)return b.blockUI(e),this;var t=b.extend({},b.blockUI.defaults,e||{});return this.each(function(){var e=b(this);t.ignoreIfBlocked&&e.data("blockUI.isBlocked")||e.unblock({fadeOut:0})}),this.each(function(){"static"==b.css(this,"position")&&(this.style.position="relative",b(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,e)})},b.fn.unblock=function(e){return this[0]===window?(b.unblockUI(e),this):this.each(function(){v(this,e)})},b.blockUI.version=2.7,b.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var m=null,g=[];function o(e,o){var t,n,i,s,l,d,a,c,r,u=e==window,f=o&&o.message!==undefined?o.message:undefined;(o=b.extend({},b.blockUI.defaults,o||{})).ignoreIfBlocked&&b(e).data("blockUI.isBlocked")||(o.overlayCSS=b.extend({},b.blockUI.defaults.overlayCSS,o.overlayCSS||{}),i=b.extend({},b.blockUI.defaults.css,o.css||{}),o.onOverlayClick&&(o.overlayCSS.cursor="pointer"),s=b.extend({},b.blockUI.defaults.themedCSS,o.themedCSS||{}),f=f===undefined?o.message:f,u&&m&&v(window,{fadeOut:0}),f&&"string"!=typeof f&&(f.parentNode||f.jquery)&&(t=f.jquery?f[0]:f,a={},b(e).data("blockUI.history",a),a.el=t,a.parent=t.parentNode,a.display=t.style.display,a.position=t.style.position,a.parent&&a.parent.removeChild(t)),b(e).data("blockUI.onUnblock",o.onUnblock),r=o.baseZ,a=h||o.forceIframe?b('<iframe class="blockUI" style="z-index:'+r+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+o.iframeSrc+'"></iframe>'):b('<div class="blockUI" style="display:none"></div>'),t=o.theme?b('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+r+++';display:none"></div>'):b('<div class="blockUI blockOverlay" style="z-index:'+r+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),o.theme&&u?(c='<div class="blockUI '+o.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(r+10)+';display:none;position:fixed">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div>',c+="</div>"):o.theme?(c='<div class="blockUI '+o.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(r+10)+';display:none;position:absolute">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div>',c+="</div>"):c=u?'<div class="blockUI '+o.blockMsgClass+' blockPage" style="z-index:'+(r+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+o.blockMsgClass+' blockElement" style="z-index:'+(r+10)+';display:none;position:absolute"></div>',r=b(c),f&&(o.theme?(r.css(s),r.addClass("ui-widget-content")):r.css(i)),o.theme||t.css(o.overlayCSS),t.css("position",u?"fixed":"absolute"),(h||o.forceIframe)&&a.css("opacity",0),c=[a,t,r],n=b(u?"body":e),b.each(c,function(){this.appendTo(n)}),o.theme&&o.draggable&&b.fn.draggable&&r.draggable({handle:".ui-dialog-titlebar",cancel:"li"}),s=y&&(!b.support.boxModel||0<b("object,embed",u?null:e).length),(k||s)&&(u&&o.allowBodyStretch&&b.support.boxModel&&b("html,body").css("height","100%"),!k&&b.support.boxModel||u||(i=U(e,"borderTopWidth"),s=U(e,"borderLeftWidth"),l=i?"(0 - "+i+")":0,d=s?"(0 - "+s+")":0),b.each(c,function(e,t){t=t[0].style;t.position="absolute",e<2?(u?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+o.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),u?t.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),d&&t.setExpression("left",d),l&&t.setExpression("top",l)):o.centerY?(u&&t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),t.marginTop=0):!o.centerY&&u&&(e="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(o.css&&o.css.top?parseInt(o.css.top,10):0)+') + "px"',t.setExpression("top",e))})),f&&((o.theme?r.find(".ui-widget-content"):r).append(f),(f.jquery||f.nodeType)&&b(f).show()),(h||o.forceIframe)&&o.showOverlay&&a.show(),o.fadeIn?(c=o.onBlock?o.onBlock:p,a=o.showOverlay&&!f?c:p,c=f?c:p,o.showOverlay&&t._fadeIn(o.fadeIn,a),f&&r._fadeIn(o.fadeIn,c)):(o.showOverlay&&t.show(),f&&r.show(),o.onBlock&&o.onBlock.bind(r)()),I(1,e,o),u?(m=r[0],g=b(o.focusableElements,m),o.focusInput&&setTimeout(w,20)):function(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-U(n,"borderLeftWidth"),n=(n.offsetHeight-e.offsetHeight)/2-U(n,"borderTopWidth");t&&(i.left=0<s?s+"px":"0");o&&(i.top=0<n?n+"px":"0")}(r[0],o.centerX,o.centerY),o.timeout&&(r=setTimeout(function(){u?b.unblockUI(o):b(e).unblock(o)},o.timeout),b(e).data("blockUI.timeout",r)))}function v(e,t){var o,n,i=e==window,s=b(e),l=s.data("blockUI.history"),d=s.data("blockUI.timeout");d&&(clearTimeout(d),s.removeData("blockUI.timeout")),t=b.extend({},b.blockUI.defaults,t||{}),I(0,e,t),null===t.onUnblock&&(t.onUnblock=s.data("blockUI.onUnblock"),s.removeData("blockUI.onUnblock")),n=i?b(document.body).children().filter(".blockUI").add("body > .blockUI"):s.find(">.blockUI"),t.cursorReset&&(1<n.length&&(n[1].style.cursor=t.cursorReset),2<n.length&&(n[2].style.cursor=t.cursorReset)),i&&(m=g=null),t.fadeOut?(o=n.length,n.stop().fadeOut(t.fadeOut,function(){0==--o&&a(n,l,t,e)})):a(n,l,t,e)}function a(e,t,o,n){var i=b(n);i.data("blockUI.isBlocked")||(e.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.el.style.cursor="default",t.parent&&t.parent.appendChild(t.el),i.removeData("blockUI.history")),i.data("blockUI.static")&&i.css("position","static"),"function"==typeof o.onUnblock&&o.onUnblock(n,o),n=(i=b(document.body)).width(),o=i[0].style.width,i.width(n-1).width(n),i[0].style.width=o)}function I(e,t,o){var n=t==window,t=b(t);!e&&(n&&!m||!n&&!t.data("blockUI.isBlocked"))||(t.data("blockUI.isBlocked",e),n&&o.bindEvents&&(!e||o.showOverlay)&&(n="mousedown mouseup keydown keypress keyup touchstart touchend touchmove",e?b(document).bind(n,o,i):b(document).unbind(n,i)))}function i(e){if("keydown"===e.type&&e.keyCode&&9==e.keyCode&&m&&e.data.constrainTabKey){var t=!e.shiftKey&&e.target===g[g.length-1],o=e.shiftKey&&e.target===g[0];if(t||o)return setTimeout(function(){w(o)},10),!1}var n=e.data,t=b(e.target);return t.hasClass("blockOverlay")&&n.onOverlayClick&&n.onOverlayClick(e),0<t.parents("div."+n.blockMsgClass).length||0===t.parents().children().filter("div.blockUI").length}function w(e){!g||(e=g[!0===e?g.length-1:0])&&e.focus()}function U(e,t){return parseInt(b.css(e,t),10)||0}}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();jQuery(function(d){if("undefined"==typeof wc_add_to_cart_params)return!1;var t=function(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),d(document.body).on("click",".add_to_cart_button",{addToCartHandler:this},this.onAddToCart).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("ajax_request_not_sent.adding_to_cart",this.updateButton).on("added_to_cart removed_from_cart",{addToCartHandler:this},this.updateFragments)};t.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},t.prototype.run=function(){var t=this,a=t.requests[0].complete;t.requests[0].complete=function(){"function"==typeof a&&a(),t.requests.shift(),0<t.requests.length&&t.run()},d.ajax(this.requests[0])},t.prototype.onAddToCart=function(t){var a=d(this);if(a.is(".ajax_add_to_cart")){if(!a.attr("data-product_id"))return!0;if(t.preventDefault(),a.removeClass("added"),a.addClass("loading"),!1===d(document.body).triggerHandler("should_send_ajax_request.adding_to_cart",[a]))return d(document.body).trigger("ajax_request_not_sent.adding_to_cart",[!1,!1,a]),!0;var e={};d.each(a.data(),function(t,a){e[t]=a}),d.each(a[0].dataset,function(t,a){e[t]=a}),d(document.body).trigger("adding_to_cart",[a,e]),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:e,success:function(t){t&&(t.error&&t.product_url?window.location=t.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?d(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a]):window.location=wc_add_to_cart_params.cart_url)},dataType:"json"})}},t.prototype.onRemoveFromCart=function(t){var a=d(this),e=a.closest(".woocommerce-mini-cart-item");t.preventDefault(),e.block({message:null,overlayCSS:{opacity:.6}}),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:a.data("cart_item_key")},success:function(t){t&&t.fragments?d(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash,a]):window.location=a.attr("href")},error:function(){window.location=a.attr("href")},dataType:"json"})},t.prototype.updateButton=function(t,a,e,r){(r=void 0!==r&&r)&&(r.removeClass("loading"),a&&r.addClass("added"),a&&!wc_add_to_cart_params.is_cart&&0===r.parent().find(".added_to_cart").length&&r.after('<a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),d(document.body).trigger("wc_cart_button_updated",[r]))},t.prototype.updateFragments=function(t,a){a&&(d.each(a,function(t){d(t).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),d.each(a,function(t,a){d(t).replaceWith(a),d(t).stop(!0).css("opacity","1").unblock()}),d(document.body).trigger("wc_fragments_loaded"))},new t});/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
!function(d){var n={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};d.zoom=function(o,t,e,n){var i,u,a,c,r,l,m,s=d(o),f=s.css("position"),h=d(t);return o.style.position=/(absolute|fixed)/.test(f)?f:"relative",o.style.overflow="hidden",e.style.width=e.style.height="",d(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*n,height:e.height*n,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(o),{init:function(){u=s.outerWidth(),i=s.outerHeight(),a=t===o?(c=u,i):(c=h.outerWidth(),h.outerHeight()),r=(e.width-u)/c,l=(e.height-i)/a,m=h.offset()},move:function(o){var t=o.pageX-m.left,o=o.pageY-m.top,o=Math.max(Math.min(o,a),0),t=Math.max(Math.min(t,c),0);e.style.left=t*-r+"px",e.style.top=o*-l+"px"}}},d.fn.zoom=function(e){return this.each(function(){var i=d.extend({},n,e||{}),u=i.target&&d(i.target)[0]||this,o=this,a=d(o),c=document.createElement("img"),r=d(c),l="mousemove.zoom",m=!1,s=!1;if(!i.url){var t=o.querySelector("img");if(t&&(i.url=t.getAttribute("data-src")||t.currentSrc||t.src,i.alt=t.getAttribute("data-alt")||t.alt),!i.url)return}a.one("zoom.destroy",function(o,t){a.off(".zoom"),u.style.position=o,u.style.overflow=t,c.onload=null,r.remove()}.bind(this,u.style.position,u.style.overflow)),c.onload=function(){var t=d.zoom(u,o,c,i.magnify);function e(o){t.init(),t.move(o),r.stop().fadeTo(d.support.opacity?i.duration:0,1,!!d.isFunction(i.onZoomIn)&&i.onZoomIn.call(c))}function n(){r.stop().fadeTo(i.duration,0,!!d.isFunction(i.onZoomOut)&&i.onZoomOut.call(c))}"grab"===i.on?a.on("mousedown.zoom",function(o){1===o.which&&(d(document).one("mouseup.zoom",function(){n(),d(document).off(l,t.move)}),e(o),d(document).on(l,t.move),o.preventDefault())}):"click"===i.on?a.on("click.zoom",function(o){if(!m)return m=!0,e(o),d(document).on(l,t.move),d(document).one("click.zoom",function(){n(),m=!1,d(document).off(l,t.move)}),!1}):"toggle"===i.on?a.on("click.zoom",function(o){m?n():e(o),m=!m}):"mouseover"===i.on&&(t.init(),a.on("mouseenter.zoom",e).on("mouseleave.zoom",n).on(l,t.move)),i.touch&&a.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,e(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),t.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),d.isFunction(i.callback)&&i.callback.call(c)},c.setAttribute("role","presentation"),c.alt=i.alt||"",c.src=i.url})},d.fn.zoom.defaults=n}(window.jQuery);!function(v){var a=!0;v.flexslider=function(p,e){var m=v(p);"undefined"==typeof e.rtl&&"rtl"==v("html").attr("dir")&&(e.rtl=!0),m.vars=v.extend({},v.flexslider.defaults,e);var t,s=m.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&m.vars.touch,l="click touchend MSPointerUp keyup",d="",g="vertical"===m.vars.direction,h=m.vars.reverse,S=0<m.vars.itemWidth,x="fade"===m.vars.animation,c=""!==m.vars.asNavFor,u={};v.data(p,"flexslider",m),u={init:function(){m.animating=!1,m.currentSlide=parseInt(m.vars.startAt?m.vars.startAt:0,10),isNaN(m.currentSlide)&&(m.currentSlide=0),m.animatingTo=m.currentSlide,m.atEnd=0===m.currentSlide||m.currentSlide===m.last,m.containerSelector=m.vars.selector.substr(0,m.vars.selector.search(" ")),m.slides=v(m.vars.selector,m),m.container=v(m.containerSelector,m),m.count=m.slides.length,m.syncExists=0<v(m.vars.sync).length,"slide"===m.vars.animation&&(m.vars.animation="swing"),m.prop=g?"top":m.vars.rtl?"marginRight":"marginLeft",m.args={},m.manualPause=!1,m.stopped=!1,m.started=!1,m.startTimeout=null,m.transitions=!m.vars.video&&!x&&m.vars.useCSS&&function(){var e,t=document.createElement("div"),a=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(e in a)if(t.style[a[e]]!==undefined)return m.pfx=a[e].replace("Perspective","").toLowerCase(),m.prop="-"+m.pfx+"-transform",!0;return!1}(),m.isFirefox=-1<navigator.userAgent.toLowerCase().indexOf("firefox"),(m.ensureAnimationEnd="")!==m.vars.controlsContainer&&(m.controlsContainer=0<v(m.vars.controlsContainer).length&&v(m.vars.controlsContainer)),""!==m.vars.manualControls&&(m.manualControls=0<v(m.vars.manualControls).length&&v(m.vars.manualControls)),""!==m.vars.customDirectionNav&&(m.customDirectionNav=2===v(m.vars.customDirectionNav).length&&v(m.vars.customDirectionNav)),m.vars.randomize&&(m.slides.sort(function(){return Math.round(Math.random())-.5}),m.container.empty().append(m.slides)),m.doMath(),m.setup("init"),m.vars.controlNav&&u.controlNav.setup(),m.vars.directionNav&&u.directionNav.setup(),m.vars.keyboard&&(1===v(m.containerSelector).length||m.vars.multipleKeyboard)&&v(document).bind("keyup",function(e){e=e.keyCode;m.animating||39!==e&&37!==e||(e=m.vars.rtl?37===e?m.getTarget("next"):39===e&&m.getTarget("prev"):39===e?m.getTarget("next"):37===e&&m.getTarget("prev"),m.flexAnimate(e,m.vars.pauseOnAction))}),m.vars.mousewheel&&m.bind("mousewheel",function(e,t,a,n){e.preventDefault();t=t<0?m.getTarget("next"):m.getTarget("prev");m.flexAnimate(t,m.vars.pauseOnAction)}),m.vars.pausePlay&&u.pausePlay.setup(),m.vars.slideshow&&m.vars.pauseInvisible&&u.pauseInvisible.init(),m.vars.slideshow&&(m.vars.pauseOnHover&&m.hover(function(){m.manualPlay||m.manualPause||m.pause()},function(){m.manualPause||m.manualPlay||m.stopped||m.play()}),m.vars.pauseInvisible&&u.pauseInvisible.isHidden()||(0<m.vars.initDelay?m.startTimeout=setTimeout(m.play,m.vars.initDelay):m.play())),c&&u.asNav.setup(),o&&m.vars.touch&&u.touch(),(!x||x&&m.vars.smoothHeight)&&v(window).bind("resize orientationchange focus",u.resize),m.find("img").attr("draggable","false"),setTimeout(function(){m.vars.start(m)},200)},asNav:{setup:function(){m.asNav=!0,m.animatingTo=Math.floor(m.currentSlide/m.move),m.currentItem=m.currentSlide,m.slides.removeClass(s+"active-slide").eq(m.currentItem).addClass(s+"active-slide"),f?(p._slider=m).slides.each(function(){var e=this;e._gesture=new MSGesture,(e._gesture.target=e).addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=v(this),e=t.index();v(m.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(m.direction=m.currentItem<e?"next":"prev",m.flexAnimate(e,m.vars.pauseOnAction,!1,!0,!0))})}):m.slides.on(l,function(e){e.preventDefault();var t=v(this),a=t.index(),e=m.vars.rtl?-1*(t.offset().right-v(m).scrollLeft()):t.offset().left-v(m).scrollLeft();e<=0&&t.hasClass(s+"active-slide")?m.flexAnimate(m.getTarget("prev"),!0):v(m.vars.asNavFor).data("flexslider").animating||t.hasClass(s+"active-slide")||(m.direction=m.currentItem<a?"next":"prev",m.flexAnimate(a,m.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){m.manualControls?u.controlNav.setupManual():u.controlNav.setupPaging()},setupPaging:function(){var e,t="thumbnails"===m.vars.controlNav?"control-thumbs":"control-paging",a=1;if(m.controlNavScaffold=v('<ol class="'+s+"control-nav "+s+t+'"></ol>'),1<m.pagingCount)for(var n=0;n<m.pagingCount;n++){var i=m.slides.eq(n);undefined===i.attr("data-thumb-alt")&&i.attr("data-thumb-alt",""),e=v("<a></a>").attr("href","#").text(a),"thumbnails"===m.vars.controlNav&&(e=v("<img/>").attr("src",i.attr("data-thumb"))),""!==i.attr("data-thumb-alt")&&e.attr("alt",i.attr("data-thumb-alt")),"thumbnails"!==m.vars.controlNav||!0!==m.vars.thumbCaptions||""!==(i=i.attr("data-thumbcaption"))&&undefined!==i&&(r=v("<span></span>").addClass(s+"caption").text(i),e.append(r));var r=v("<li>");e.appendTo(r),r.append("</li>"),m.controlNavScaffold.append(r),a++}(m.controlsContainer?v(m.controlsContainer):m).append(m.controlNavScaffold),u.controlNav.set(),u.controlNav.active(),m.controlNavScaffold.delegate("a, img",l,function(e){var t,a;e.preventDefault(),""!==d&&d!==e.type||(t=v(this),a=m.controlNav.index(t),t.hasClass(s+"active")||(m.direction=a>m.currentSlide?"next":"prev",m.flexAnimate(a,m.vars.pauseOnAction))),""===d&&(d=e.type),u.setToClearWatchedEvent()})},setupManual:function(){m.controlNav=m.manualControls,u.controlNav.active(),m.controlNav.bind(l,function(e){var t,a;e.preventDefault(),""!==d&&d!==e.type||(t=v(this),a=m.controlNav.index(t),t.hasClass(s+"active")||(a>m.currentSlide?m.direction="next":m.direction="prev",m.flexAnimate(a,m.vars.pauseOnAction))),""===d&&(d=e.type),u.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===m.vars.controlNav?"img":"a";m.controlNav=v("."+s+"control-nav li "+e,m.controlsContainer?m.controlsContainer:m)},active:function(){m.controlNav.removeClass(s+"active").eq(m.animatingTo).addClass(s+"active")},update:function(e,t){1<m.pagingCount&&"add"===e?m.controlNavScaffold.append(v('<li><a href="#">'+m.count+"</a></li>")):(1===m.pagingCount?m.controlNavScaffold.find("li"):m.controlNav.eq(t).closest("li")).remove(),u.controlNav.set(),1<m.pagingCount&&m.pagingCount!==m.controlNav.length?m.update(t,e):u.controlNav.active()}},directionNav:{setup:function(){var e=v('<ul class="'+s+'direction-nav"><li class="'+s+'nav-prev"><a class="'+s+'prev" href="#">'+m.vars.prevText+'</a></li><li class="'+s+'nav-next"><a class="'+s+'next" href="#">'+m.vars.nextText+"</a></li></ul>");m.customDirectionNav?m.directionNav=m.customDirectionNav:m.controlsContainer?(v(m.controlsContainer).append(e),m.directionNav=v("."+s+"direction-nav li a",m.controlsContainer)):(m.append(e),m.directionNav=v("."+s+"direction-nav li a",m)),u.directionNav.update(),m.directionNav.bind(l,function(e){var t;e.preventDefault(),""!==d&&d!==e.type||(t=v(this).hasClass(s+"next")?m.getTarget("next"):m.getTarget("prev"),m.flexAnimate(t,m.vars.pauseOnAction)),""===d&&(d=e.type),u.setToClearWatchedEvent()})},update:function(){var e=s+"disabled";1===m.pagingCount?m.directionNav.addClass(e).attr("tabindex","-1"):m.vars.animationLoop?m.directionNav.removeClass(e).removeAttr("tabindex"):0===m.animatingTo?m.directionNav.removeClass(e).filter("."+s+"prev").addClass(e).attr("tabindex","-1"):m.animatingTo===m.last?m.directionNav.removeClass(e).filter("."+s+"next").addClass(e).attr("tabindex","-1"):m.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=v('<div class="'+s+'pauseplay"><a href="#"></a></div>');m.controlsContainer?(m.controlsContainer.append(e),m.pausePlay=v("."+s+"pauseplay a",m.controlsContainer)):(m.append(e),m.pausePlay=v("."+s+"pauseplay a",m)),u.pausePlay.update(m.vars.slideshow?s+"pause":s+"play"),m.pausePlay.bind(l,function(e){e.preventDefault(),""!==d&&d!==e.type||(v(this).hasClass(s+"pause")?(m.manualPause=!0,m.manualPlay=!1,m.pause()):(m.manualPause=!1,m.manualPlay=!0,m.play())),""===d&&(d=e.type),u.setToClearWatchedEvent()})},update:function(e){"play"===e?m.pausePlay.removeClass(s+"pause").addClass(s+"play").html(m.vars.playText):m.pausePlay.removeClass(s+"play").addClass(s+"pause").html(m.vars.pauseText)}},touch:function(){var n,i,r,s,o,l,e,d,c,u=!1,t=0,a=0,v=0;f?(p.style.msTouchAction="none",p._gesture=new MSGesture,(p._gesture.target=p).addEventListener("MSPointerDown",function(e){e.stopPropagation(),m.animating?e.preventDefault():(m.pause(),p._gesture.addPointer(e.pointerId),v=0,s=g?m.h:m.w,l=Number(new Date),r=S&&h&&m.animatingTo===m.last?0:S&&h?m.limit-(m.itemW+m.vars.itemMargin)*m.move*m.animatingTo:S&&m.currentSlide===m.last?m.limit:S?(m.itemW+m.vars.itemMargin)*m.move*m.currentSlide:h?(m.last-m.currentSlide+m.cloneOffset)*s:(m.currentSlide+m.cloneOffset)*s)},!1),p._slider=m,p.addEventListener("MSGestureChange",function(e){e.stopPropagation();var t=e.target._slider;if(!t)return;var a=-e.translationX,n=-e.translationY;if(v+=g?n:a,o=(t.vars.rtl?-1:1)*v,u=g?Math.abs(v)<Math.abs(-a):Math.abs(v)<Math.abs(-n),e.detail===e.MSGESTURE_FLAG_INERTIA)return void setImmediate(function(){p._gesture.stop()});(!u||500<Number(new Date)-l)&&(e.preventDefault(),!x&&t.transitions&&(t.vars.animationLoop||(o=v/(0===t.currentSlide&&v<0||t.currentSlide===t.last&&0<v?Math.abs(v)/s+2:1)),t.setProps(r+o,"setTouch")))},!1),p.addEventListener("MSGestureEnd",function(e){e.stopPropagation();var t=e.target._slider;if(!t)return;{var a;t.animatingTo!==t.currentSlide||u||null===o||(e=0<(a=h?-o:o)?t.getTarget("next"):t.getTarget("prev"),t.canAdvance(e)&&(Number(new Date)-l<550&&50<Math.abs(a)||Math.abs(a)>s/2)?t.flexAnimate(e,t.vars.pauseOnAction):x||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0))}r=o=i=n=null,v=0},!1)):(e=function(e){m.animating?e.preventDefault():!window.navigator.msPointerEnabled&&1!==e.touches.length||(m.pause(),s=g?m.h:m.w,l=Number(new Date),t=e.touches[0].pageX,a=e.touches[0].pageY,r=S&&h&&m.animatingTo===m.last?0:S&&h?m.limit-(m.itemW+m.vars.itemMargin)*m.move*m.animatingTo:S&&m.currentSlide===m.last?m.limit:S?(m.itemW+m.vars.itemMargin)*m.move*m.currentSlide:h?(m.last-m.currentSlide+m.cloneOffset)*s:(m.currentSlide+m.cloneOffset)*s,n=g?a:t,i=g?t:a,p.addEventListener("touchmove",d,!1),p.addEventListener("touchend",c,!1))},d=function(e){t=e.touches[0].pageX,a=e.touches[0].pageY,o=g?n-a:(m.vars.rtl?-1:1)*(n-t);(!(u=g?Math.abs(o)<Math.abs(t-i):Math.abs(o)<Math.abs(a-i))||500<Number(new Date)-l)&&(e.preventDefault(),!x&&m.transitions&&(m.vars.animationLoop||(o/=0===m.currentSlide&&o<0||m.currentSlide===m.last&&0<o?Math.abs(o)/s+2:1),m.setProps(r+o,"setTouch")))},c=function(e){var t,a;p.removeEventListener("touchmove",d,!1),m.animatingTo!==m.currentSlide||u||null===o||(a=0<(t=h?-o:o)?m.getTarget("next"):m.getTarget("prev"),m.canAdvance(a)&&(Number(new Date)-l<550&&50<Math.abs(t)||Math.abs(t)>s/2)?m.flexAnimate(a,m.vars.pauseOnAction):x||m.flexAnimate(m.currentSlide,m.vars.pauseOnAction,!0)),p.removeEventListener("touchend",c,!1),r=o=i=n=null},p.addEventListener("touchstart",e,!1))},resize:function(){!m.animating&&m.is(":visible")&&(S||m.doMath(),x?u.smoothHeight():S?(m.slides.width(m.computedW),m.update(m.pagingCount),m.setProps()):g?(m.viewport.height(m.h),m.setProps(m.h,"setTotal")):(m.vars.smoothHeight&&u.smoothHeight(),m.newSlides.width(m.computedW),m.setProps(m.computedW,"setTotal")))},smoothHeight:function(e){var t;g&&!x||(t=x?m:m.viewport,e?t.animate({height:m.slides.eq(m.animatingTo).innerHeight()},e):t.innerHeight(m.slides.eq(m.animatingTo).innerHeight()))},sync:function(e){var t=v(m.vars.sync).data("flexslider"),a=m.animatingTo;switch(e){case"animate":t.flexAnimate(a,m.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=v(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=u.pauseInvisible.getHiddenProp();e&&(e=e.replace(/[H|h]idden/,"")+"visibilitychange",document.addEventListener(e,function(){u.pauseInvisible.isHidden()?m.startTimeout?clearTimeout(m.startTimeout):m.pause():!m.started&&0<m.vars.initDelay?setTimeout(m.play,m.vars.initDelay):m.play()}))},isHidden:function(){var e=u.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(t),t=setTimeout(function(){d=""},3e3)}},m.flexAnimate=function(e,t,a,n,i){if(m.vars.animationLoop||e===m.currentSlide||(m.direction=e>m.currentSlide?"next":"prev"),c&&1===m.pagingCount&&(m.direction=m.currentItem<e?"next":"prev"),!m.animating&&(m.canAdvance(e,i)||a)&&m.is(":visible")){if(c&&n){n=v(m.vars.asNavFor).data("flexslider");if(m.atEnd=0===e||e===m.count-1,n.flexAnimate(e,!0,!1,!0,i),m.direction=m.currentItem<e?"next":"prev",n.direction=m.direction,Math.ceil((e+1)/m.visible)-1===m.currentSlide||0===e)return m.currentItem=e,m.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),!1;m.currentItem=e,m.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),e=Math.floor(e/m.visible)}var r;m.animating=!0,m.animatingTo=e,t&&m.pause(),m.vars.before(m),m.syncExists&&!i&&u.sync("animate"),m.vars.controlNav&&u.controlNav.active(),S||m.slides.removeClass(s+"active-slide").eq(e).addClass(s+"active-slide"),m.atEnd=0===e||e===m.last,m.vars.directionNav&&u.directionNav.update(),e===m.last&&(m.vars.end(m),m.vars.animationLoop||m.pause()),x?o?(m.slides.eq(m.currentSlide).css({opacity:0,zIndex:1}),m.slides.eq(e).css({opacity:1,zIndex:2}),m.wrapup(r)):(m.slides.eq(m.currentSlide).css({zIndex:1}).animate({opacity:0},m.vars.animationSpeed,m.vars.easing),m.slides.eq(e).css({zIndex:2}).animate({opacity:1},m.vars.animationSpeed,m.vars.easing,m.wrapup)):(r=g?m.slides.filter(":first").height():m.computedW,e=S?(i=m.vars.itemMargin,(i=(m.itemW+i)*m.move*m.animatingTo)>m.limit&&1!==m.visible?m.limit:i):0===m.currentSlide&&e===m.count-1&&m.vars.animationLoop&&"next"!==m.direction?h?(m.count+m.cloneOffset)*r:0:m.currentSlide===m.last&&0===e&&m.vars.animationLoop&&"prev"!==m.direction?h?0:(m.count+1)*r:h?(m.count-1-e+m.cloneOffset)*r:(e+m.cloneOffset)*r,m.setProps(e,"",m.vars.animationSpeed),m.transitions?(m.vars.animationLoop&&m.atEnd||(m.animating=!1,m.currentSlide=m.animatingTo),m.container.unbind("webkitTransitionEnd transitionend"),m.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(m.ensureAnimationEnd),m.wrapup(r)}),clearTimeout(m.ensureAnimationEnd),m.ensureAnimationEnd=setTimeout(function(){m.wrapup(r)},m.vars.animationSpeed+100)):m.container.animate(m.args,m.vars.animationSpeed,m.vars.easing,function(){m.wrapup(r)})),m.vars.smoothHeight&&u.smoothHeight(m.vars.animationSpeed)}},m.wrapup=function(e){x||S||(0===m.currentSlide&&m.animatingTo===m.last&&m.vars.animationLoop?m.setProps(e,"jumpEnd"):m.currentSlide===m.last&&0===m.animatingTo&&m.vars.animationLoop&&m.setProps(e,"jumpStart")),m.animating=!1,m.currentSlide=m.animatingTo,m.vars.after(m)},m.animateSlides=function(){!m.animating&&a&&m.flexAnimate(m.getTarget("next"))},m.pause=function(){clearInterval(m.animatedSlides),m.animatedSlides=null,m.playing=!1,m.vars.pausePlay&&u.pausePlay.update("play"),m.syncExists&&u.sync("pause")},m.play=function(){m.playing&&clearInterval(m.animatedSlides),m.animatedSlides=m.animatedSlides||setInterval(m.animateSlides,m.vars.slideshowSpeed),m.started=m.playing=!0,m.vars.pausePlay&&u.pausePlay.update("pause"),m.syncExists&&u.sync("play")},m.stop=function(){m.pause(),m.stopped=!0},m.canAdvance=function(e,t){var a=c?m.pagingCount-1:m.last;return!!t||(c&&m.currentItem===m.count-1&&0===e&&"prev"===m.direction||(!c||0!==m.currentItem||e!==m.pagingCount-1||"next"===m.direction)&&((e!==m.currentSlide||c)&&(!!m.vars.animationLoop||(!m.atEnd||0!==m.currentSlide||e!==a||"next"===m.direction)&&(!m.atEnd||m.currentSlide!==a||0!==e||"next"!==m.direction))))},m.getTarget=function(e){return"next"===(m.direction=e)?m.currentSlide===m.last?0:m.currentSlide+1:0===m.currentSlide?m.last:m.currentSlide-1},m.setProps=function(e,t,a){var n,i=(n=e||(m.itemW+m.vars.itemMargin)*m.move*m.animatingTo,function(){if(S)return"setTouch"===t?e:h&&m.animatingTo===m.last?0:h?m.limit-(m.itemW+m.vars.itemMargin)*m.move*m.animatingTo:m.animatingTo===m.last?m.limit:n;switch(t){case"setTotal":return h?(m.count-1-m.currentSlide+m.cloneOffset)*e:(m.currentSlide+m.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return h?e:m.count*e;case"jumpStart":return h?m.count*e:e;default:return e}}()*(m.vars.rtl?1:-1)+"px");m.transitions&&(i=g?"translate3d(0,"+i+",0)":"translate3d("+parseInt(i)+"px,0,0)",a=a!==undefined?a/1e3+"s":"0s",m.container.css("-"+m.pfx+"-transition-duration",a),m.container.css("transition-duration",a)),m.args[m.prop]=i,!m.transitions&&a!==undefined||m.container.css(m.args),m.container.css("transform",i)},m.setup=function(e){var t,a;x?(m.vars.rtl?m.slides.css({width:"100%","float":"right",marginLeft:"-100%",position:"relative"}):m.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(o?m.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+m.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(m.currentSlide).css({opacity:1,zIndex:2}):0==m.vars.fadeFirstSlide?m.slides.css({opacity:0,display:"block",zIndex:1}).eq(m.currentSlide).css({zIndex:2}).css({opacity:1}):m.slides.css({opacity:0,display:"block",zIndex:1}).eq(m.currentSlide).css({zIndex:2}).animate({opacity:1},m.vars.animationSpeed,m.vars.easing)),m.vars.smoothHeight&&u.smoothHeight()):("init"===e&&(m.viewport=v('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(m).append(m.container),m.cloneCount=0,m.cloneOffset=0,h&&(a=v.makeArray(m.slides).reverse(),m.slides=v(a),m.container.empty().append(m.slides))),m.vars.animationLoop&&!S&&(m.cloneCount=2,m.cloneOffset=1,"init"!==e&&m.container.find(".clone").remove(),m.container.append(u.uniqueID(m.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(u.uniqueID(m.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),m.newSlides=v(m.vars.selector,m),t=h?m.count-1-m.currentSlide+m.cloneOffset:m.currentSlide+m.cloneOffset,g&&!S?(m.container.height(200*(m.count+m.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){m.newSlides.css({display:"block"}),m.doMath(),m.viewport.height(m.h),m.setProps(t*m.h,"init")},"init"===e?100:0)):(m.container.width(200*(m.count+m.cloneCount)+"%"),m.setProps(t*m.computedW,"init"),setTimeout(function(){m.doMath(),m.vars.rtl?m.newSlides.css({width:m.computedW,marginRight:m.computedM,"float":"right",display:"block"}):m.newSlides.css({width:m.computedW,marginRight:m.computedM,"float":"left",display:"block"}),m.vars.smoothHeight&&u.smoothHeight()},"init"===e?100:0))),S||m.slides.removeClass(s+"active-slide").eq(m.currentSlide).addClass(s+"active-slide"),m.vars.init(m)},m.doMath=function(){var e=m.slides.first(),t=m.vars.itemMargin,a=m.vars.minItems,n=m.vars.maxItems;m.w=(m.viewport===undefined?m:m.viewport).width(),m.isFirefox&&(m.w=m.width()),m.h=e.height(),m.boxPadding=e.outerWidth()-e.width(),S?(m.itemT=m.vars.itemWidth+t,m.itemM=t,m.minW=a?a*m.itemT:m.w,m.maxW=n?n*m.itemT-t:m.w,m.itemW=m.minW>m.w?(m.w-t*(a-1))/a:m.maxW<m.w?(m.w-t*(n-1))/n:m.vars.itemWidth>m.w?m.w:m.vars.itemWidth,m.visible=Math.floor(m.w/m.itemW),m.move=0<m.vars.move&&m.vars.move<m.visible?m.vars.move:m.visible,m.pagingCount=Math.ceil((m.count-m.visible)/m.move+1),m.last=m.pagingCount-1,m.limit=1===m.pagingCount?0:m.vars.itemWidth>m.w?m.itemW*(m.count-1)+t*(m.count-1):(m.itemW+t)*m.count-m.w-t):(m.itemW=m.w,m.itemM=t,m.pagingCount=m.count,m.last=m.count-1),m.computedW=m.itemW-m.boxPadding,m.computedM=m.itemM},m.update=function(e,t){m.doMath(),S||(e<m.currentSlide?m.currentSlide+=1:e<=m.currentSlide&&0!==e&&--m.currentSlide,m.animatingTo=m.currentSlide),m.vars.controlNav&&!m.manualControls&&("add"===t&&!S||m.pagingCount>m.controlNav.length?u.controlNav.update("add"):("remove"===t&&!S||m.pagingCount<m.controlNav.length)&&(S&&m.currentSlide>m.last&&(--m.currentSlide,--m.animatingTo),u.controlNav.update("remove",m.last))),m.vars.directionNav&&u.directionNav.update()},m.addSlide=function(e,t){e=v(e);m.count+=1,m.last=m.count-1,g&&h?t!==undefined?m.slides.eq(m.count-t).after(e):m.container.prepend(e):t!==undefined?m.slides.eq(t).before(e):m.container.append(e),m.update(t,"add"),m.slides=v(m.vars.selector+":not(.clone)",m),m.setup(),m.vars.added(m)},m.removeSlide=function(e){var t=isNaN(e)?m.slides.index(v(e)):e;--m.count,m.last=m.count-1,(isNaN(e)?v(e,m.slides):g&&h?m.slides.eq(m.last):m.slides.eq(e)).remove(),m.doMath(),m.update(t,"remove"),m.slides=v(m.vars.selector+":not(.clone)",m),m.setup(),m.vars.removed(m)},u.init()},v(window).blur(function(e){a=!1}).focus(function(e){a=!0}),v.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,isFirefox:!1,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){},rtl:!1},v.fn.flexslider=function(a){if(a===undefined&&(a={}),"object"==typeof a)return this.each(function(){var e=v(this),t=a.selector?a.selector:".slides > li",t=e.find(t);1===t.length&&!1===a.allowOneSlide||0===t.length?(t.fadeIn(400),a.start&&a.start(e)):e.data("flexslider")===undefined&&new v.flexslider(this,a)});var e=v(this).data("flexslider");switch(a){case"play":e.play();break;case"pause":e.pause();break;case"stop":e.stop();break;case"next":e.flexAnimate(e.getTarget("next"),!0);break;case"prev":case"previous":e.flexAnimate(e.getTarget("prev"),!0);break;default:"number"==typeof a&&e.flexAnimate(a,!0)}}}(jQuery);/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";return function(m,n,e,t){var f={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){t=document.createElement(t||"div");return e&&(t.className=e),t},getScrollY:function(){var e=window.pageYOffset;return e!==undefined?e:document.documentElement.scrollTop},unbind:function(e,t,n){f.bind(e,t,n,!0)},removeClass:function(e,t){t=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(t," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){f.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(f.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)t.hasOwnProperty(i)&&(n&&e.hasOwnProperty(i)||(e[i]=t[i]))},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(f.features)return f.features;var e,t,n=f.createEl().style,i="",o={};o.oldIE=document.all&&!document.addEventListener,o.touch="ontouchstart"in window,window.requestAnimationFrame&&(o.raf=window.requestAnimationFrame,o.caf=window.cancelAnimationFrame),o.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,o.pointerEvent||(e=navigator.userAgent,!/iP(hone|od)/.test(navigator.platform)||(t=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))&&0<t.length&&1<=(t=parseInt(t[1],10))&&t<8&&(o.isOldIOSPhone=!0),t=(t=e.match(/Android\s([0-9\.]*)/))?t[1]:0,1<=(t=parseFloat(t))&&(t<4.4&&(o.isOldAndroid=!0),o.androidVersion=t),o.isMobileOpera=/opera mini|opera mobi/i.test(e));for(var a,r,l,s=["transform","perspective","animationName"],u=["","webkit","Moz","ms","O"],c=0;c<4;c++){i=u[c];for(var d=0;d<3;d++)a=s[d],r=i+(i?a.charAt(0).toUpperCase()+a.slice(1):a),!o[a]&&r in n&&(o[a]=r);i&&!o.raf&&(i=i.toLowerCase(),o.raf=window[i+"RequestAnimationFrame"],o.raf&&(o.caf=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]))}return o.raf||(l=0,o.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-l)),i=window.setTimeout(function(){e(t+n)},n);return l=t+n,i},o.caf=function(e){clearTimeout(e)}),o.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,f.features=o}};f.detectFeatures(),f.features.oldIE&&(f.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var h=this,y={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e||t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};f.extend(y,t);var r,i,o,x,a,l,s,u,c,g,d,p,v,w,b,I,C,D,T,M,S,A,E,O,k,R,P,Z,F,L,z,_,N,U,H,Y,W,B,G,X,V,K,q,$,j,J,Q,ee,te,ne,ie,oe,ae,re,le,se,ue=function(){return{x:0,y:0}},ce=ue(),de=ue(),pe=ue(),me={},fe=0,he={},ye=ue(),xe=0,ge=!0,ve=[],we={},be=!1,Ie=function(e,t){f.extend(h,t.publicMethods),ve.push(e)},Ce=function(e){var t=Ht();return t-1<e?e-t:e<0?t+e:e},De={},Te=function(e,t){return De[e]||(De[e]=[]),De[e].push(t)},Me=function(e){var t=De[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(h,n)}},Se=function(){return(new Date).getTime()},Ae=function(e){re=e,h.bg.style.opacity=e*y.bgOpacity},Ee=function(e,t,n,i,o){(!be||o&&o!==h.currItem)&&(i/=(o||h.currItem).fitRatio),e[A]=p+t+"px, "+n+"px"+v+" scale("+i+")"},Oe=function(e){te&&(e&&(g>h.currItem.fitRatio?be||(jt(h.currItem,!1,!0),be=!0):be&&(jt(h.currItem),be=!1)),Ee(te,pe.x,pe.y,g))},ke=function(e){e.container&&Ee(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},Re=function(e,t){t[A]=p+e+"px, 0px"+v},Pe=function(e,t){var n;!y.loop&&t&&(n=x+(ye.x*fe-e)/ye.x,t=Math.round(e-ct.x),(n<0&&0<t||n>=Ht()-1&&t<0)&&(e=ct.x+t*y.mainScrollEndFriction)),ct.x=e,Re(e,a)},Ze=function(e,t){var n=dt[e]-he[e];return de[e]+ce[e]+n-t/d*n},Fe=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},Le=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},ze=null,_e=function(){ze&&(f.unbind(document,"mousemove",_e),f.addClass(m,"pswp--has_mouse"),y.mouseUsed=!0,Me("mouseUsed")),ze=setTimeout(function(){ze=null},100)},Ne=function(e,t){e=Vt(h.currItem,me,e);return t&&(ee=e),e},Ue=function(e){return(e=e||h.currItem).initialZoomLevel},He=function(e){return 0<(e=e||h.currItem).w?y.maxSpreadZoom:1},Ye=function(e,t,n,i){return i===h.currItem.initialZoomLevel?(n[e]=h.currItem.initialPosition[e],!0):(n[e]=Ze(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]&&(n[e]=t.max[e],!0))},We=function(e){var t="";y.escKey&&27===e.keyCode?t="close":y.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,h[t]()))},Be=function(e){e&&(K||V||ne||W)&&(e.preventDefault(),e.stopPropagation())},Ge=function(){h.setScrollOffset(0,f.getScrollY())},Xe={},Ve=0,Ke=function(e){Xe[e]&&(Xe[e].raf&&R(Xe[e].raf),Ve--,delete Xe[e])},qe=function(e){Xe[e]&&Ke(e),Xe[e]||(Ve++,Xe[e]={})},$e=function(){for(var e in Xe)Xe.hasOwnProperty(e)&&Ke(e)},je=function(e,t,n,i,o,a,r){var l,s=Se();qe(e);var u=function(){if(Xe[e]){if(l=Se()-s,i<=l)return Ke(e),a(n),void(r&&r());a((n-t)*o(l/i)+t),Xe[e].raf=k(u)}};u()},t={shout:Me,listen:Te,viewportSize:me,options:y,isMainScrollAnimating:function(){return ne},getZoomLevel:function(){return g},getCurrentIndex:function(){return x},isDragging:function(){return G},isZooming:function(){return J},setScrollOffset:function(e,t){he.x=e,L=he.y=t,Me("updateScrollOffset",he)},applyZoomPan:function(e,t,n,i){pe.x=t,pe.y=n,g=e,Oe(i)},init:function(){if(!r&&!i){var e;h.framework=f,h.template=m,h.bg=f.getChildByClass(m,"pswp__bg"),P=m.className,r=!0,z=f.detectFeatures(),k=z.raf,R=z.caf,A=z.transform,F=z.oldIE,h.scrollWrap=f.getChildByClass(m,"pswp__scroll-wrap"),h.container=f.getChildByClass(h.scrollWrap,"pswp__container"),a=h.container.style,h.itemHolders=I=[{el:h.container.children[0],wrap:0,index:-1},{el:h.container.children[1],wrap:0,index:-1},{el:h.container.children[2],wrap:0,index:-1}],I[0].el.style.display=I[2].el.style.display="none",function(){if(A){var e=z.perspective&&!O;return p="translate"+(e?"3d(":"("),v=z.perspective?", 0px)":")"}A="left",f.addClass(m,"pswp--ie"),Re=function(e,t){t.left=e+"px"},ke=function(e){var t=1<e.fitRatio?1:e.fitRatio,n=e.container.style,i=t*e.w,t=t*e.h;n.width=i+"px",n.height=t+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},Oe=function(){var e,t,n,i;te&&(e=te,n=(t=1<(i=h.currItem).fitRatio?1:i.fitRatio)*i.w,i=t*i.h,e.width=n+"px",e.height=i+"px",e.left=pe.x+"px",e.top=pe.y+"px")}}(),c={resize:h.updateSize,orientationchange:function(){clearTimeout(_),_=setTimeout(function(){me.x!==h.scrollWrap.clientWidth&&h.updateSize()},500)},scroll:Ge,keydown:We,click:Be};var t=z.isOldIOSPhone||z.isOldAndroid||z.isMobileOpera;for(z.animationName&&z.transform&&!t||(y.showAnimationDuration=y.hideAnimationDuration=0),e=0;e<ve.length;e++)h["init"+ve[e]]();n&&(h.ui=new n(h,f)).init(),Me("firstUpdate"),x=x||y.index||0,(isNaN(x)||x<0||x>=Ht())&&(x=0),h.currItem=Ut(x),(z.isOldIOSPhone||z.isOldAndroid)&&(ge=!1),m.setAttribute("aria-hidden","false"),y.modal&&(ge?m.style.position="fixed":(m.style.position="absolute",m.style.top=f.getScrollY()+"px")),L===undefined&&(Me("initialLayout"),L=Z=f.getScrollY());t="pswp--open ";for(y.mainClass&&(t+=y.mainClass+" "),y.showHideOpacity&&(t+="pswp--animate_opacity "),t+=O?"pswp--touch":"pswp--notouch",t+=z.animationName?" pswp--css_animation":"",t+=z.svg?" pswp--svg":"",f.addClass(m,t),h.updateSize(),l=-1,xe=null,e=0;e<3;e++)Re((e+l)*ye.x,I[e].el.style);F||f.bind(h.scrollWrap,u,h),Te("initialZoomInEnd",function(){h.setContent(I[0],x-1),h.setContent(I[2],x+1),I[0].el.style.display=I[2].el.style.display="block",y.focus&&m.focus(),f.bind(document,"keydown",h),z.transform&&f.bind(h.scrollWrap,"click",h),y.mouseUsed||f.bind(document,"mousemove",_e),f.bind(window,"resize scroll orientationchange",h),Me("bindEvents")}),h.setContent(I[1],x),h.updateCurrItem(),Me("afterInit"),ge||(w=setInterval(function(){Ve||G||J||g!==h.currItem.initialZoomLevel||h.updateSize()},1e3)),f.addClass(m,"pswp--visible")}},close:function(){r&&(i=!(r=!1),Me("close"),f.unbind(window,"resize scroll orientationchange",h),f.unbind(window,"scroll",c.scroll),f.unbind(document,"keydown",h),f.unbind(document,"mousemove",_e),z.transform&&f.unbind(h.scrollWrap,"click",h),G&&f.unbind(window,s,h),clearTimeout(_),Me("unbindEvents"),Yt(h.currItem,null,!0,h.destroy))},destroy:function(){Me("destroy"),Lt&&clearTimeout(Lt),m.setAttribute("aria-hidden","true"),m.className=P,w&&clearInterval(w),f.unbind(h.scrollWrap,u,h),f.unbind(window,"scroll",h),ft(),$e(),De=null},panTo:function(e,t,n){n||(e>ee.min.x?e=ee.min.x:e<ee.max.x&&(e=ee.max.x),t>ee.min.y?t=ee.min.y:t<ee.max.y&&(t=ee.max.y)),pe.x=e,pe.y=t,Oe()},handleEvent:function(e){e=e||window.event,c[e.type]&&c[e.type](e)},goTo:function(e){var t=(e=Ce(e))-x;xe=t,x=e,h.currItem=Ut(x),fe-=t,Pe(ye.x*fe),$e(),ne=!1,h.updateCurrItem()},next:function(){h.goTo(x+1)},prev:function(){h.goTo(x-1)},updateCurrZoomItem:function(e){var t;e&&Me("beforeChange",0),te=I[1].el.children.length?(t=I[1].el.children[0],f.hasClass(t,"pswp__zoom-wrap")?t.style:null):null,ee=h.currItem.bounds,d=g=h.currItem.initialZoomLevel,pe.x=ee.center.x,pe.y=ee.center.y,e&&Me("afterChange")},invalidateCurrItems:function(){b=!0;for(var e=0;e<3;e++)I[e].item&&(I[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==xe){var t,n=Math.abs(xe);if(!(e&&n<2)){h.currItem=Ut(x),be=!1,Me("beforeChange",xe),3<=n&&(l+=xe+(0<xe?-3:3),n=3);for(var i=0;i<n;i++)0<xe?(t=I.shift(),I[2]=t,Re((++l+2)*ye.x,t.el.style),h.setContent(t,x-n+i+1+1)):(t=I.pop(),I.unshift(t),Re(--l*ye.x,t.el.style),h.setContent(t,x+n-i-1-1));!te||1!==Math.abs(xe)||(e=Ut(C)).initialZoomLevel!==g&&(Vt(e,me),jt(e),ke(e)),xe=0,h.updateCurrZoomItem(),C=x,Me("afterChange")}}},updateSize:function(e){if(!ge&&y.modal){var t=f.getScrollY();if(L!==t&&(m.style.top=t+"px",L=t),!e&&we.x===window.innerWidth&&we.y===window.innerHeight)return;we.x=window.innerWidth,we.y=window.innerHeight,m.style.height=we.y+"px"}if(me.x=h.scrollWrap.clientWidth,me.y=h.scrollWrap.clientHeight,Ge(),ye.x=me.x+Math.round(me.x*y.spacing),ye.y=me.y,Pe(ye.x*fe),Me("beforeResize"),l!==undefined){for(var n,i,o,a=0;a<3;a++)n=I[a],Re((a+l)*ye.x,n.el.style),o=x+a-1,y.loop&&2<Ht()&&(o=Ce(o)),(i=Ut(o))&&(b||i.needsUpdate||!i.bounds)?(h.cleanSlide(i),h.setContent(n,o),1===a&&(h.currItem=i,h.updateCurrZoomItem(!0)),i.needsUpdate=!1):-1===n.index&&0<=o&&h.setContent(n,o),i&&i.container&&(Vt(i,me),jt(i),ke(i));b=!1}d=g=h.currItem.initialZoomLevel,(ee=h.currItem.bounds)&&(pe.x=ee.center.x,pe.y=ee.center.y,Oe(!0)),Me("resize")},zoomTo:function(t,e,n,i,o){e&&(d=g,dt.x=Math.abs(e.x)-pe.x,dt.y=Math.abs(e.y)-pe.y,Fe(de,pe));var e=Ne(t,!1),a={};Ye("x",e,a,t),Ye("y",e,a,t);var r=g,l=pe.x,s=pe.y;Le(a);e=function(e){1===e?(g=t,pe.x=a.x,pe.y=a.y):(g=(t-r)*e+r,pe.x=(a.x-l)*e+l,pe.y=(a.y-s)*e+s),o&&o(e),Oe(1===e)};n?je("customZoomTo",0,1,n,i||f.easing.sine.inOut,e):e(1)}},Je={},Qe={},et={},tt={},nt={},it=[],ot={},at=[],rt={},lt=0,st=ue(),ut=0,ct=ue(),dt=ue(),pt=ue(),mt=function(e,t){return rt.x=Math.abs(e.x-t.x),rt.y=Math.abs(e.y-t.y),Math.sqrt(rt.x*rt.x+rt.y*rt.y)},ft=function(){q&&(R(q),q=null)},ht=function(){G&&(q=k(ht),Et())},yt=function(e,t){return!(!e||e===document)&&(!(e.getAttribute("class")&&-1<e.getAttribute("class").indexOf("pswp__scroll-wrap"))&&(t(e)?e:yt(e.parentNode,t)))},xt={},gt=function(e,t){return xt.prevent=!yt(e.target,y.isClickableElement),Me("preventDragEvent",e,t,xt),xt.prevent},vt=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},wt=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},bt=function(){var e=pe.y-h.currItem.initialPosition.y;return 1-Math.abs(e/(me.y/2))},It={},Ct={},Dt=[],Tt=function(e){for(;0<Dt.length;)Dt.pop();return E?(se=0,it.forEach(function(e){0===se?Dt[0]=e:1===se&&(Dt[1]=e),se++})):-1<e.type.indexOf("touch")?e.touches&&0<e.touches.length&&(Dt[0]=vt(e.touches[0],It),1<e.touches.length&&(Dt[1]=vt(e.touches[1],Ct))):(It.x=e.pageX,It.y=e.pageY,It.id="",Dt[0]=It),Dt},Mt=function(e,t){var n,i,o,a=pe[e]+t[e],r=0<t[e],l=ct.x+t.x,s=ct.x-ot.x,u=a>ee.min[e]||a<ee.max[e]?y.panEndFriction:1,a=pe[e]+t[e]*u;if((y.allowPanToNext||g===h.currItem.initialZoomLevel)&&(te?"h"!==ie||"x"!==e||V||(r?(a>ee.min[e]&&(u=y.panEndFriction,ee.min[e],n=ee.min[e]-de[e]),(n<=0||s<0)&&1<Ht()?(o=l,s<0&&l>ot.x&&(o=ot.x)):ee.min.x!==ee.max.x&&(i=a)):(a<ee.max[e]&&(u=y.panEndFriction,ee.max[e],n=de[e]-ee.max[e]),(n<=0||0<s)&&1<Ht()?(o=l,0<s&&l<ot.x&&(o=ot.x)):ee.min.x!==ee.max.x&&(i=a))):o=l,"x"===e))return o!==undefined&&(Pe(o,!0),$=o!==ot.x),ee.min.x!==ee.max.x&&(i!==undefined?pe.x=i:$||(pe.x+=t.x*u)),o!==undefined;ne||$||g>h.currItem.fitRatio&&(pe[e]+=t[e]*u)},St=function(e){var t;"mousedown"===e.type&&0<e.button||(Nt?e.preventDefault():B&&"mousedown"===e.type||(gt(e,!0)&&e.preventDefault(),Me("pointerDown"),E&&((t=f.arraySearch(it,e.pointerId,"id"))<0&&(t=it.length),it[t]={x:e.pageX,y:e.pageY,id:e.pointerId}),e=(t=Tt(e)).length,j=null,$e(),G&&1!==e||(G=oe=!0,f.bind(window,s,h),Y=le=ae=W=$=K=X=V=!1,ie=null,Me("firstTouchStart",t),Fe(de,pe),ce.x=ce.y=0,Fe(tt,t[0]),Fe(nt,tt),ot.x=ye.x*fe,at=[{x:tt.x,y:tt.y}],U=N=Se(),Ne(g,!0),ft(),ht()),!J&&1<e&&!ne&&!$&&(d=g,J=X=!(V=!1),ce.y=ce.x=0,Fe(de,pe),Fe(Je,t[0]),Fe(Qe,t[1]),wt(Je,Qe,pt),dt.x=Math.abs(pt.x)-pe.x,dt.y=Math.abs(pt.y)-pe.y,Q=mt(Je,Qe))))},At=function(e){var t,n;e.preventDefault(),!E||-1<(t=f.arraySearch(it,e.pointerId,"id"))&&((n=it[t]).x=e.pageX,n.y=e.pageY),G&&(n=Tt(e),ie||K||J?j=n:ct.x!==ye.x*fe?ie="h":(e=Math.abs(n[0].x-tt.x)-Math.abs(n[0].y-tt.y),10<=Math.abs(e)&&(ie=0<e?"h":"v",j=n)))},Et=function(){if(j){var e,t,n,i,o,a=j.length;if(0!==a)if(Fe(Je,j[0]),et.x=Je.x-tt.x,et.y=Je.y-tt.y,J&&1<a)tt.x=Je.x,tt.y=Je.y,(et.x||et.y||(i=j[1],o=Qe,i.x!==o.x||i.y!==o.y))&&(Fe(Qe,j[1]),V||(V=!0,Me("zoomGestureStarted")),t=mt(Je,Qe),(n=Zt(t))>h.currItem.initialZoomLevel+h.currItem.initialZoomLevel/15&&(le=!0),e=1,a=Ue(),i=He(),n<a?y.pinchToClose&&!le&&d<=h.currItem.initialZoomLevel?(Ae(o=1-(a-n)/(a/1.2)),Me("onPinchClose",o),ae=!0):(1<(e=(a-n)/a)&&(e=1),n=a-e*(a/3)):i<n&&(1<(e=(n-i)/(6*a))&&(e=1),n=i+e*a),e<0&&(e=0),wt(Je,Qe,st),ce.x+=st.x-pt.x,ce.y+=st.y-pt.y,Fe(pt,st),pe.x=Ze("x",n),pe.y=Ze("y",n),Y=g<n,g=n,Oe());else if(ie&&(oe&&(oe=!1,10<=Math.abs(et.x)&&(et.x-=j[0].x-nt.x),10<=Math.abs(et.y)&&(et.y-=j[0].y-nt.y)),tt.x=Je.x,tt.y=Je.y,0!==et.x||0!==et.y)){if("v"===ie&&y.closeOnVerticalDrag&&"fit"===y.scaleMode&&g===h.currItem.initialZoomLevel){ce.y+=et.y,pe.y+=et.y;var r=bt();return W=!0,Me("onVerticalDrag",r),Ae(r),void Oe()}e=Se(),t=Je.x,n=Je.y,50<e-U&&((r=2<at.length?at.shift():{}).x=t,r.y=n,at.push(r),U=e),K=!0,ee=h.currItem.bounds,Mt("x",et)||(Mt("y",et),Le(pe),Oe())}}},Ot=function(e){if(z.isOldAndroid){if(B&&"mouseup"===e.type)return;-1<e.type.indexOf("touch")&&(clearTimeout(B),B=setTimeout(function(){B=0},600))}Me("pointerUp"),gt(e,!1)&&e.preventDefault(),!E||-1<(n=f.arraySearch(it,e.pointerId,"id"))&&(a=it.splice(n,1)[0],navigator.msPointerEnabled?(a.type={4:"mouse",2:"touch",3:"pen"}[e.pointerType],a.type||(a.type=e.pointerType||"mouse")):a.type=e.pointerType||"mouse");var t=Tt(e),n=t.length;if("mouseup"===e.type&&(n=0),2===n)return!(j=null);1===n&&Fe(nt,t[0]),0!==n||ie||ne||(a||("mouseup"===e.type?a={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(a={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),Me("touchRelease",e,a));var i,o,a=-1;if(0===n&&(G=!1,f.unbind(window,s,h),ft(),J?a=0:-1!==ut&&(a=Se()-ut)),ut=1===n?Se():-1,a=-1!==a&&a<150?"zoom":"swipe",J&&n<2&&(J=!1,1===n&&(a="zoomPointerUp"),Me("zoomGestureEnded")),j=null,K||V||ne||W)if($e(),(H=H||kt()).calculateSwipeSpeed("x"),W){bt()<y.verticalDragRange?h.close():(i=pe.y,o=re,je("verticalDrag",0,1,300,f.easing.cubic.out,function(e){pe.y=(h.currItem.initialPosition.y-i)*e+i,Ae((1-o)*e+o),Oe()}),Me("onVerticalDrag",1))}else{if(($||ne)&&0===n){if(Pt(a,H))return;a="zoomPointerUp"}ne||("swipe"===a?!$&&g>h.currItem.fitRatio&&Rt(H):Ft())}},kt=function(){var t,n,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(e){n=1<at.length?(t=Se()-U+50,at[at.length-2][e]):(t=Se()-N,nt[e]),i.lastFlickOffset[e]=tt[e]-n,i.lastFlickDist[e]=Math.abs(i.lastFlickOffset[e]),20<i.lastFlickDist[e]?i.lastFlickSpeed[e]=i.lastFlickOffset[e]/t:i.lastFlickSpeed[e]=0,Math.abs(i.lastFlickSpeed[e])<.1&&(i.lastFlickSpeed[e]=0),i.slowDownRatio[e]=.95,i.slowDownRatioReverse[e]=1-i.slowDownRatio[e],i.speedDecelerationRatio[e]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(pe[t]>ee.min[t]?i.backAnimDestination[t]=ee.min[t]:pe[t]<ee.max[t]&&(i.backAnimDestination[t]=ee.max[t]),i.backAnimDestination[t]!==undefined&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,je("bounceZoomPan"+t,pe[t],i.backAnimDestination[t],e||300,f.easing.sine.out,function(e){pe[t]=e,Oe()}))))},calculateAnimOffset:function(e){i.backAnimStarted[e]||(i.speedDecelerationRatio[e]=i.speedDecelerationRatio[e]*(i.slowDownRatio[e]+i.slowDownRatioReverse[e]-i.slowDownRatioReverse[e]*i.timeDiff/10),i.speedDecelerationRatioAbs[e]=Math.abs(i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]),i.distanceOffset[e]=i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]*i.timeDiff,pe[e]+=i.distanceOffset[e])},panAnimLoop:function(){Xe.zoomPan&&(Xe.zoomPan.raf=k(i.panAnimLoop),i.now=Se(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),Oe(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05&&(pe.x=Math.round(pe.x),pe.y=Math.round(pe.y),Oe(),Ke("zoomPan")))}};return i},Rt=function(e){if(e.calculateSwipeSpeed("y"),ee=h.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05)return e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0;qe("zoomPan"),e.lastNow=Se(),e.panAnimLoop()},Pt=function(e,t){var n,i;ne||(lt=x),"swipe"===e&&(i=tt.x-nt.x,e=t.lastFlickDist.x<10,30<i&&(e||20<t.lastFlickOffset.x)?a=-1:i<-30&&(e||t.lastFlickOffset.x<-20)&&(a=1)),a&&((x+=a)<0?(x=y.loop?Ht()-1:0,o=!0):x>=Ht()&&(x=y.loop?0:Ht()-1,o=!0),o&&!y.loop||(xe+=a,fe-=a,n=!0));var o=ye.x*fe,a=Math.abs(o-ct.x),r=n||o>ct.x==0<t.lastFlickSpeed.x?(r=0<Math.abs(t.lastFlickSpeed.x)?a/Math.abs(t.lastFlickSpeed.x):333,r=Math.min(r,400),Math.max(r,250)):333;return lt===x&&(n=!1),ne=!0,Me("mainScrollAnimStart"),je("mainScroll",ct.x,o,r,f.easing.cubic.out,Pe,function(){$e(),ne=!1,lt=-1,!n&&lt===x||h.updateCurrItem(),Me("mainScrollAnimComplete")}),n&&h.updateCurrItem(!0),n},Zt=function(e){return 1/Q*e*d},Ft=function(){var e=g,t=Ue(),n=He();g<t?e=t:n<g&&(e=n);var i,o=re;return ae&&!Y&&!le&&g<t?h.close():(ae&&(i=function(e){Ae((1-o)*e+o)}),h.zoomTo(e,0,200,f.easing.cubic.out,i)),!0};Ie("Gestures",{publicMethods:{initGestures:function(){var e=function(e,t,n,i,o){D=e+t,T=e+n,M=e+i,S=o?e+o:""};(E=z.pointerEvent)&&z.touch&&(z.touch=!1),E?navigator.msPointerEnabled?e("MSPointer","Down","Move","Up","Cancel"):e("pointer","down","move","up","cancel"):z.touch?(e("touch","start","move","end","cancel"),O=!0):e("mouse","down","move","up"),s=T+" "+M+" "+S,u=D,E&&!O&&(O=1<navigator.maxTouchPoints||1<navigator.msMaxTouchPoints),h.likelyTouchDevice=O,c[D]=St,c[T]=At,c[M]=Ot,S&&(c[S]=c[M]),z.touch&&(u+=" mousedown",s+=" mousemove mouseup",c.mousedown=c[D],c.mousemove=c[T],c.mouseup=c[M]),O||(y.allowPanToNext=!1)}}});var Lt,zt,_t,Nt,Ut,Ht,Yt=function(r,e,l,t){var s;Lt&&clearTimeout(Lt),_t=Nt=!0,r.initialLayout?(s=r.initialLayout,r.initialLayout=null):s=y.getThumbBoundsFn&&y.getThumbBoundsFn(x);var u=l?y.hideAnimationDuration:y.showAnimationDuration,c=function(){Ke("initialZoom"),l?(h.template.removeAttribute("style"),h.bg.removeAttribute("style")):(Ae(1),e&&(e.style.display="block"),f.addClass(m,"pswp--animated-in"),Me("initialZoom"+(l?"OutEnd":"InEnd"))),t&&t(),Nt=!1};if(!u||!s||s.x===undefined)return Me("initialZoom"+(l?"Out":"In")),g=r.initialZoomLevel,Fe(pe,r.initialPosition),Oe(),m.style.opacity=l?0:1,Ae(1),void(u?setTimeout(function(){c()},u):c());var d,p;d=o,p=!h.currItem.src||h.currItem.loadError||y.showHideOpacity,r.miniImg&&(r.miniImg.style.webkitBackfaceVisibility="hidden"),l||(g=s.w/r.w,pe.x=s.x,pe.y=s.y-Z,h[p?"template":"bg"].style.opacity=.001,Oe()),qe("initialZoom"),l&&!d&&f.removeClass(m,"pswp--animated-in"),p&&(l?f[(d?"remove":"add")+"Class"](m,"pswp--animate_opacity"):setTimeout(function(){f.addClass(m,"pswp--animate_opacity")},30)),Lt=setTimeout(function(){var t,n,i,o,a,e;Me("initialZoom"+(l?"Out":"In")),l?(t=s.w/r.w,n=pe.x,i=pe.y,o=g,a=re,e=function(e){1===e?(g=t,pe.x=s.x,pe.y=s.y-L):(g=(t-o)*e+o,pe.x=(s.x-n)*e+n,pe.y=(s.y-L-i)*e+i),Oe(),p?m.style.opacity=1-e:Ae(a-e*a)},d?je("initialZoom",0,1,u,f.easing.cubic.out,e,c):(e(1),Lt=setTimeout(c,u+20))):(g=r.initialZoomLevel,Fe(pe,r.initialPosition),Oe(),Ae(1),p?m.style.opacity=1:Ae(1),Lt=setTimeout(c,u+20))},l?25:90)},Wt={},Bt=[],Gt={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return zt.length}},Xt=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},Vt=function(e,t,n){if(!e.src||e.loadError)return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds=Xt(),e.initialPosition=e.bounds.center,e.bounds;var i,o,a,r=!n;return r&&(e.vGap||(e.vGap={top:0,bottom:0}),Me("parseVerticalMargin",e)),Wt.x=t.x,Wt.y=t.y-e.vGap.top-e.vGap.bottom,r&&(i=Wt.x/e.w,o=Wt.y/e.h,e.fitRatio=i<o?i:o,"orig"===(a=y.scaleMode)?n=1:"fit"===a&&(n=e.fitRatio),1<n&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds=Xt())),n?(i=(t=e).w*n,o=e.h*n,(a=t.bounds).center.x=Math.round((Wt.x-i)/2),a.center.y=Math.round((Wt.y-o)/2)+t.vGap.top,a.max.x=i>Wt.x?Math.round(Wt.x-i):a.center.x,a.max.y=o>Wt.y?Math.round(Wt.y-o)+t.vGap.top:a.center.y,a.min.x=i>Wt.x?0:a.center.x,a.min.y=o>Wt.y?t.vGap.top:a.center.y,r&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds):void 0},Kt=function(e,t,n,i,o,a){t.loadError||i&&(t.imageAppended=!0,jt(t,i,t===h.currItem&&be),n.appendChild(i),a&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},qt=function(e){e.loading=!0,e.loaded=!1;var t=e.img=f.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t.alt=e.alt||"",t},$t=function(e,t){if(e.src&&e.loadError&&e.container)return t&&(e.container.innerHTML=""),e.container.innerHTML=y.errorMsg.replace("%url%",e.src),!0},jt=function(e,t,n){var i;e.src&&(t=t||e.container.lastChild,i=n?e.w:Math.round(e.w*e.fitRatio),n=n?e.h:Math.round(e.h*e.fitRatio),e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=n+"px"),t.style.width=i+"px",t.style.height=n+"px")},Jt=function(){if(Bt.length){for(var e,t=0;t<Bt.length;t++)(e=Bt[t]).holder.index===e.index&&Kt(e.index,e.item,e.baseDiv,e.img,0,e.clearPlaceholder);Bt=[]}};Ie("Controller",{publicMethods:{lazyLoadItem:function(e){e=Ce(e);var t=Ut(e);t&&(!t.loaded&&!t.loading||b)&&(Me("gettingData",e,t),t.src&&qt(t))},initController:function(){f.extend(y,Gt,!0),h.items=zt=e,Ut=h.getItemAt,Ht=y.getNumItemsFn,y.loop,Ht()<3&&(y.loop=!1),Te("beforeChange",function(e){for(var t=y.preload,n=null===e||0<=e,i=Math.min(t[0],Ht()),o=Math.min(t[1],Ht()),a=1;a<=(n?o:i);a++)h.lazyLoadItem(x+a);for(a=1;a<=(n?i:o);a++)h.lazyLoadItem(x-a)}),Te("initialLayout",function(){h.currItem.initialLayout=y.getThumbBoundsFn&&y.getThumbBoundsFn(x)}),Te("mainScrollAnimComplete",Jt),Te("initialZoomInEnd",Jt),Te("destroy",function(){for(var e,t=0;t<zt.length;t++)(e=zt[t]).container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);Bt=null})},getItemAt:function(e){return 0<=e&&(zt[e]!==undefined&&zt[e])},allowProgressiveImg:function(){return y.forceProgressiveLoading||!O||y.mouseUsed||1200<screen.width},setContent:function(t,n){y.loop&&(n=Ce(n));var e=h.getItemAt(t.index);e&&(e.container=null);var i,o,a=h.getItemAt(n);a?(Me("gettingData",n,a),t.index=n,o=(t.item=a).container=f.createEl("pswp__zoom-wrap"),!a.src&&a.html&&(a.html.tagName?o.appendChild(a.html):o.innerHTML=a.html),$t(a),Vt(a,me),!a.src||a.loadError||a.loaded?a.src&&!a.loadError&&((i=f.createEl("pswp__img","img")).style.opacity=1,i.src=a.src,jt(a,i),Kt(0,a,o,i)):(a.loadComplete=function(e){if(r){if(t&&t.index===n){if($t(e,!0))return e.loadComplete=e.img=null,Vt(e,me),ke(e),void(t.index===x&&h.updateCurrZoomItem());e.imageAppended?!Nt&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null):z.transform&&(ne||Nt)?Bt.push({item:e,baseDiv:o,img:e.img,index:n,holder:t,clearPlaceholder:!0}):Kt(0,e,o,e.img,0,!0)}e.loadComplete=null,e.img=null,Me("imageLoadComplete",n,e)}},f.features.transform&&(e="pswp__img pswp__img--placeholder",e+=a.msrc?"":" pswp__img--placeholder--blank",e=f.createEl(e,a.msrc?"img":""),a.msrc&&(e.src=a.msrc),jt(a,e),o.appendChild(e),a.placeholder=e),a.loading||qt(a),h.allowProgressiveImg()&&(!_t&&z.transform?Bt.push({item:a,baseDiv:o,img:a.img,index:n,holder:t}):Kt(0,a,o,a.img,0,!0))),_t||n!==x?ke(a):(te=o.style,Yt(a,i||a.img)),t.el.innerHTML="",t.el.appendChild(o)):t.el.innerHTML=""},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var Qt,en,tn={},nn=function(e,t,n){var i=document.createEvent("CustomEvent"),n={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,n),e.target.dispatchEvent(i)};Ie("Tap",{publicMethods:{initTap:function(){Te("firstTouchStart",h.onTapStart),Te("touchRelease",h.onTapRelease),Te("destroy",function(){tn={},Qt=null})},onTapStart:function(e){1<e.length&&(clearTimeout(Qt),Qt=null)},onTapRelease:function(e,t){var n,i,o;t&&(K||X||Ve||(n=t,Qt&&(clearTimeout(Qt),Qt=null,i=n,o=tn,Math.abs(i.x-o.x)<25&&Math.abs(i.y-o.y)<25)?Me("doubleTap",n):"mouse"!==t.type?"BUTTON"===e.target.tagName.toUpperCase()||f.hasClass(e.target,"pswp__single-tap")?nn(e,t):(Fe(tn,n),Qt=setTimeout(function(){nn(e,t),Qt=null},300)):nn(e,t,"mouse")))}}}),Ie("DesktopZoom",{publicMethods:{initDesktopZoom:function(){F||(O?Te("mouseUsed",function(){h.setupDesktopZoom()}):h.setupDesktopZoom(!0))},setupDesktopZoom:function(e){en={};var t="wheel mousewheel DOMMouseScroll";Te("bindEvents",function(){f.bind(m,t,h.handleMouseWheel)}),Te("unbindEvents",function(){en&&f.unbind(m,t,h.handleMouseWheel)}),h.mouseZoomedIn=!1;var n,i=function(){h.mouseZoomedIn&&(f.removeClass(m,"pswp--zoomed-in"),h.mouseZoomedIn=!1),g<1?f.addClass(m,"pswp--zoom-allowed"):f.removeClass(m,"pswp--zoom-allowed"),o()},o=function(){n&&(f.removeClass(m,"pswp--dragging"),n=!1)};Te("resize",i),Te("afterChange",i),Te("pointerDown",function(){h.mouseZoomedIn&&(n=!0,f.addClass(m,"pswp--dragging"))}),Te("pointerUp",o),e||i()},handleMouseWheel:function(e){if(g<=h.currItem.fitRatio)return y.modal&&(!y.closeOnScroll||Ve||G?e.preventDefault():A&&2<Math.abs(e.deltaY)&&(o=!0,h.close())),!0;if(e.stopPropagation(),en.x=0,"deltaX"in e)1===e.deltaMode?(en.x=18*e.deltaX,en.y=18*e.deltaY):(en.x=e.deltaX,en.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(en.x=-.16*e.wheelDeltaX),e.wheelDeltaY?en.y=-.16*e.wheelDeltaY:en.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;en.y=e.detail}Ne(g,!0);var t=pe.x-en.x,n=pe.y-en.y;(y.modal||t<=ee.min.x&&t>=ee.max.x&&n<=ee.min.y&&n>=ee.max.y)&&e.preventDefault(),h.panTo(t,n)},toggleDesktopZoom:function(e){e=e||{x:me.x/2+he.x,y:me.y/2+he.y};var t=y.getDoubleTapZoom(!0,h.currItem),n=g===t;h.mouseZoomedIn=!n,h.zoomTo(n?h.currItem.initialZoomLevel:t,e,333),f[(n?"remove":"add")+"Class"](m,"pswp--zoomed-in")}}});var on,an,rn,ln,sn,un,cn,dn,pn,mn,fn,hn,yn={history:!0,galleryUID:1},xn=function(){return fn.hash.substring(1)},gn=function(){on&&clearTimeout(on),rn&&clearTimeout(rn)},vn=function(){var e=xn(),t={};if(e.length<5)return t;var n,i=e.split("&");for(a=0;a<i.length;a++){i[a]&&((n=i[a].split("=")).length<2||(t[n[0]]=n[1]))}if(y.galleryPIDs){for(var o=t.pid,a=t.pid=0;a<zt.length;a++)if(zt[a].pid===o){t.pid=a;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},wn=function(){var e,t;rn&&clearTimeout(rn),Ve||G?rn=setTimeout(wn,500):(ln?clearTimeout(an):ln=!0,t=x+1,(e=Ut(x)).hasOwnProperty("pid")&&(t=e.pid),e=cn+"&gid="+y.galleryUID+"&pid="+t,dn||-1===fn.hash.indexOf(e)&&(mn=!0),t=fn.href.split("#")[0]+"#"+e,hn?"#"+e!==window.location.hash&&history[dn?"replaceState":"pushState"]("",document.title,t):dn?fn.replace(t):fn.hash=e,dn=!0,an=setTimeout(function(){ln=!1},60))};Ie("History",{publicMethods:{initHistory:function(){var e,t;f.extend(y,yn,!0),y.history&&(fn=window.location,dn=pn=mn=!1,cn=xn(),hn="pushState"in history,-1<cn.indexOf("gid=")&&(cn=(cn=cn.split("&gid=")[0]).split("?gid=")[0]),Te("afterChange",h.updateURL),Te("unbindEvents",function(){f.unbind(window,"hashchange",h.onHashChange)}),e=function(){un=!0,pn||(mn?history.back():cn?fn.hash=cn:hn?history.pushState("",document.title,fn.pathname+fn.search):fn.hash=""),gn()},Te("unbindEvents",function(){o&&e()}),Te("destroy",function(){un||e()}),Te("firstUpdate",function(){x=vn().pid}),-1<(t=cn.indexOf("pid="))&&"&"===(cn=cn.substring(0,t)).slice(-1)&&(cn=cn.slice(0,-1)),setTimeout(function(){r&&f.bind(window,"hashchange",h.onHashChange)},40))},onHashChange:function(){if(xn()===cn)return pn=!0,void h.close();ln||(sn=!0,h.goTo(vn().pid),sn=!1)},updateURL:function(){gn(),sn||(dn?on=setTimeout(wn,800):wn())}}}),f.extend(h,t)}});/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipeUI_Default=t()}(this,function(){"use strict";return function(o,s){var n,a,l,r,t,i,u,c,p,e,d,m,f,h,w,g,b,v,_=this,C=!1,T=!0,I=!0,E={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].innerHTML=e.title,!0):(t.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return o.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return o.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},F=function(e){if(g)return!0;e=e||window.event,w.timeToIdle&&w.mouseUsed&&!p&&z();for(var t,n,o=(e.target||e.srcElement).getAttribute("class")||"",l=0;l<P.length;l++)(t=P[l]).onTap&&-1<o.indexOf("pswp__"+t.name)&&(t.onTap(),n=!0);n&&(e.stopPropagation&&e.stopPropagation(),g=!0,e=s.features.isOldAndroid?600:30,setTimeout(function(){g=!1},e))},x=function(e,t,n){s[(n?"add":"remove")+"Class"](e,"pswp__"+t)},S=function(){var e=1===w.getNumItemsFn();e!==h&&(x(a,"ui--one-slide",e),h=e)},k=function(){x(u,"share-modal--hidden",I)},K=function(){return(I=!I)?(s.removeClass(u,"pswp__share-modal--fade-in"),setTimeout(function(){I&&k()},300)):(k(),setTimeout(function(){I||s.addClass(u,"pswp__share-modal--fade-in")},30)),I||O(),!1},L=function(e){var t=(e=e||window.event).target||e.srcElement;return o.shout("shareLinkClick",e,t),!!t.href&&(!!t.hasAttribute("download")||(window.open(t.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),I||K(),!1))},O=function(){for(var e,t,n,o,l="",r=0;r<w.shareButtons.length;r++)e=w.shareButtons[r],t=w.getImageURLForShare(e),n=w.getPageURLForShare(e),o=w.getTextForShare(e),l+='<a href="'+e.url.replace("{{url}}",encodeURIComponent(n)).replace("{{image_url}}",encodeURIComponent(t)).replace("{{raw_image_url}}",t).replace("{{text}}",encodeURIComponent(o))+'" target="_blank" class="pswp__share--'+e.id+'"'+(e.download?"download":"")+">"+e.label+"</a>",w.parseShareButtonOut&&(l=w.parseShareButtonOut(e,l));u.children[0].innerHTML=l,u.children[0].onclick=L},R=function(e){for(var t=0;t<w.closeElClasses.length;t++)if(s.hasClass(e,"pswp__"+w.closeElClasses[t]))return!0},y=0,z=function(){clearTimeout(v),y=0,p&&_.setIdle(!1)},M=function(e){e=(e=e||window.event).relatedTarget||e.toElement;e&&"HTML"!==e.nodeName||(clearTimeout(v),v=setTimeout(function(){_.setIdle(!0)},w.timeToIdleOutside))},D=function(e){m!==e&&(x(d,"preloader--active",!e),m=e)},A=function(e){var t,n=e.vGap;!o.likelyTouchDevice||w.mouseUsed||screen.width>w.fitControlsWidth?(t=w.barsSize,w.captionEl&&"auto"===t.bottom?(r||((r=s.createEl("pswp__caption pswp__caption--fake")).appendChild(s.createEl("pswp__caption__center")),a.insertBefore(r,l),s.addClass(a,"pswp__ui--fit")),w.addCaptionHTMLFn(e,r,!0)?(e=r.clientHeight,n.bottom=parseInt(e,10)||44):n.bottom=t.top):n.bottom="auto"===t.bottom?0:t.bottom,n.top=t.top):n.top=n.bottom=0},P=[{name:"caption",option:"captionEl",onInit:function(e){l=e}},{name:"share-modal",option:"shareEl",onInit:function(e){u=e},onTap:function(){K()}},{name:"button--share",option:"shareEl",onInit:function(e){i=e},onTap:function(){K()}},{name:"button--zoom",option:"zoomEl",onTap:o.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){t=e}},{name:"button--close",option:"closeEl",onTap:o.close},{name:"button--arrow--left",option:"arrowEl",onTap:o.prev},{name:"button--arrow--right",option:"arrowEl",onTap:o.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){n.isFullscreen()?n.exit():n.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(e){d=e}}];_.init=function(){var t;s.extend(o.options,E,!0),w=o.options,a=s.getChildByClass(o.scrollWrap,"pswp__ui"),(e=o.listen)("onVerticalDrag",function(e){T&&e<.95?_.hideControls():!T&&.95<=e&&_.showControls()}),e("onPinchClose",function(e){T&&e<.9?(_.hideControls(),t=!0):t&&!T&&.9<e&&_.showControls()}),e("zoomGestureEnded",function(){(t=!1)&&!T&&_.showControls()}),e("beforeChange",_.update),e("doubleTap",function(e){var t=o.currItem.initialZoomLevel;o.getZoomLevel()!==t?o.zoomTo(t,e,333):o.zoomTo(w.getDoubleTapZoom(!1,o.currItem),e,333)}),e("preventDragEvent",function(e,t,n){var o=e.target||e.srcElement;o&&o.getAttribute("class")&&-1<e.type.indexOf("mouse")&&(0<o.getAttribute("class").indexOf("__caption")||/(SMALL|STRONG|EM)/i.test(o.tagName))&&(n.prevent=!1)}),e("bindEvents",function(){s.bind(a,"pswpTap click",F),s.bind(o.scrollWrap,"pswpTap",_.onGlobalTap),o.likelyTouchDevice||s.bind(o.scrollWrap,"mouseover",_.onMouseOver)}),e("unbindEvents",function(){I||K(),b&&clearInterval(b),s.unbind(document,"mouseout",M),s.unbind(document,"mousemove",z),s.unbind(a,"pswpTap click",F),s.unbind(o.scrollWrap,"pswpTap",_.onGlobalTap),s.unbind(o.scrollWrap,"mouseover",_.onMouseOver),n&&(s.unbind(document,n.eventK,_.updateFullscreen),n.isFullscreen()&&(w.hideAnimationDuration=0,n.exit()),n=null)}),e("destroy",function(){w.captionEl&&(r&&a.removeChild(r),s.removeClass(l,"pswp__caption--empty")),u&&(u.children[0].onclick=null),s.removeClass(a,"pswp__ui--over-close"),s.addClass(a,"pswp__ui--hidden"),_.setIdle(!1)}),w.showAnimationDuration||s.removeClass(a,"pswp__ui--hidden"),e("initialZoomIn",function(){w.showAnimationDuration&&s.removeClass(a,"pswp__ui--hidden")}),e("initialZoomOut",function(){s.addClass(a,"pswp__ui--hidden")}),e("parseVerticalMargin",A),function(){var l,r,i,e=function(e){if(e)for(var t=e.length,n=0;n<t;n++){l=e[n],r=l.className;for(var o=0;o<P.length;o++)i=P[o],-1<r.indexOf("pswp__"+i.name)&&(w[i.option]?(s.removeClass(l,"pswp__element--disabled"),i.onInit&&i.onInit(l)):s.addClass(l,"pswp__element--disabled"))}};e(a.children);var t=s.getChildByClass(a,"pswp__top-bar");t&&e(t.children)}(),w.shareEl&&i&&u&&(I=!0),S(),w.timeToIdle&&e("mouseUsed",function(){s.bind(document,"mousemove",z),s.bind(document,"mouseout",M),b=setInterval(function(){2===++y&&_.setIdle(!0)},w.timeToIdle/2)}),w.fullscreenEl&&!s.features.isOldAndroid&&((n=n||_.getFullscreenAPI())?(s.bind(document,n.eventK,_.updateFullscreen),_.updateFullscreen(),s.addClass(o.template,"pswp--supports-fs")):s.removeClass(o.template,"pswp--supports-fs")),w.preloaderEl&&(D(!0),e("beforeChange",function(){clearTimeout(f),f=setTimeout(function(){o.currItem&&o.currItem.loading?o.allowProgressiveImg()&&(!o.currItem.img||o.currItem.img.naturalWidth)||D(!1):D(!0)},w.loadingIndicatorDelay)}),e("imageLoadComplete",function(e,t){o.currItem===t&&D(!0)}))},_.setIdle=function(e){x(a,"ui--idle",p=e)},_.update=function(){C=!(!T||!o.currItem)&&(_.updateIndexIndicator(),w.captionEl&&(w.addCaptionHTMLFn(o.currItem,l),x(l,"caption--empty",!o.currItem.title)),!0),I||K(),S()},_.updateFullscreen=function(e){e&&setTimeout(function(){o.setScrollOffset(0,s.getScrollY())},50),s[(n.isFullscreen()?"add":"remove")+"Class"](o.template,"pswp--fs")},_.updateIndexIndicator=function(){w.counterEl&&(t.innerHTML=o.getCurrentIndex()+1+w.indexIndicatorSep+w.getNumItemsFn())},_.onGlobalTap=function(e){var t=(e=e||window.event).target||e.srcElement;g||(e.detail&&"mouse"===e.detail.pointerType?R(t)?o.close():s.hasClass(t,"pswp__img")&&(1===o.getZoomLevel()&&o.getZoomLevel()<=o.currItem.fitRatio?w.clickToCloseNonZoomable&&o.close():o.toggleDesktopZoom(e.detail.releasePoint)):(w.tapToToggleControls&&(T?_.hideControls():_.showControls()),w.tapToClose&&(s.hasClass(t,"pswp__img")||R(t))&&o.close()))},_.onMouseOver=function(e){e=(e=e||window.event).target||e.srcElement;x(a,"ui--over-close",R(e))},_.hideControls=function(){s.addClass(a,"pswp__ui--hidden"),T=!1},_.showControls=function(){T=!0,C||_.update(),s.removeClass(a,"pswp__ui--hidden")},_.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)},_.getFullscreenAPI=function(){var e,t=document.documentElement,n="fullscreenchange";return t.requestFullscreen?e={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:n}:t.mozRequestFullScreen?e={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+n}:t.webkitRequestFullscreen?e={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+n}:t.msRequestFullscreen&&(e={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),e&&(e.enter=function(){if(c=w.closeOnScroll,w.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK)return o.template[this.enterK]();o.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},e.exit=function(){return w.closeOnScroll=c,document[this.exitK]()},e.isFullscreen=function(){return document[this.elementK]}),e}}});var wc_single_product_params={"i18n_required_rating_text":"Please select a rating","review_rating_required":"yes","flexslider":{"rtl":!1,"animation":"slide","smoothHeight":!0,"directionNav":!1,"controlNav":"thumbnails","slideshow":!1,"animationSpeed":500,"animationLoop":!1,"allowOneSlide":!1},"zoom_enabled":"1","zoom_options":[],"photoswipe_enabled":"1","photoswipe_options":{"shareEl":!1,"closeOnScroll":!1,"history":!1,"hideAnimationDuration":0,"showAnimationDuration":0},"flexslider_enabled":"1"};jQuery(function(s){if("undefined"==typeof wc_single_product_params)return!1;s("body").on("init",".wc-tabs-wrapper, .woocommerce-tabs",function(){s(this).find(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();var t=window.location.hash,e=window.location.href,i=s(this).find(".wc-tabs, ul.tabs").first();(0<=t.toLowerCase().indexOf("comment-")||"#reviews"===t||"#tab-reviews"===t||0<e.indexOf("comment-page-")||0<e.indexOf("cpage=")?i.find("li.reviews_tab a"):"#tab-additional_information"===t?i.find("li.additional_information_tab a"):i.find("li:first a")).trigger("click")}).on("click",".wc-tabs li a, ul.tabs li a",function(t){t.preventDefault();var e=s(this),t=e.closest(".wc-tabs-wrapper, .woocommerce-tabs");t.find(".wc-tabs, ul.tabs").find("li").removeClass("active"),t.find(".wc-tab, .panel:not(.panel .panel)").hide(),e.closest("li").addClass("active"),t.find(e.attr("href")).show()}).on("click","a.woocommerce-review-link",function(){return s(".reviews_tab a").trigger("click"),!0}).on("init","#rating",function(){s("#rating").hide().before('<p class="stars">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t<a class="star-1" href="#">1</a>\t\t\t\t\t\t\t<a class="star-2" href="#">2</a>\t\t\t\t\t\t\t<a class="star-3" href="#">3</a>\t\t\t\t\t\t\t<a class="star-4" href="#">4</a>\t\t\t\t\t\t\t<a class="star-5" href="#">5</a>\t\t\t\t\t\t</span>\t\t\t\t\t</p>')}).on("click","#respond p.stars a",function(){var t=s(this),e=s(this).closest("#respond").find("#rating"),i=s(this).closest(".stars");return e.val(t.text()),t.siblings("a").removeClass("active"),t.addClass("active"),i.addClass("selected"),!1}).on("click","#respond #submit",function(){var t=s(this).closest("#respond").find("#rating"),e=t.val();if(0<t.length&&!e&&"yes"===wc_single_product_params.review_rating_required)return window.alert(wc_single_product_params.i18n_required_rating_text),!1}),s(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init");var e=function(t,e){this.$target=t,this.$images=s(".woocommerce-product-gallery__image",t),0!==this.$images.length?(t.data("product_gallery",this),this.flexslider_enabled="function"==typeof s.fn.flexslider&&wc_single_product_params.flexslider_enabled,this.zoom_enabled="function"==typeof s.fn.zoom&&wc_single_product_params.zoom_enabled,this.photoswipe_enabled="undefined"!=typeof PhotoSwipe&&wc_single_product_params.photoswipe_enabled,e&&(this.flexslider_enabled=!1!==e.flexslider_enabled&&this.flexslider_enabled,this.zoom_enabled=!1!==e.zoom_enabled&&this.zoom_enabled,this.photoswipe_enabled=!1!==e.photoswipe_enabled&&this.photoswipe_enabled),1===this.$images.length&&(this.flexslider_enabled=!1),this.initFlexslider=this.initFlexslider.bind(this),this.initZoom=this.initZoom.bind(this),this.initZoomForTarget=this.initZoomForTarget.bind(this),this.initPhotoswipe=this.initPhotoswipe.bind(this),this.onResetSlidePosition=this.onResetSlidePosition.bind(this),this.getGalleryItems=this.getGalleryItems.bind(this),this.openPhotoswipe=this.openPhotoswipe.bind(this),this.flexslider_enabled?(this.initFlexslider(e.flexslider),t.on("woocommerce_gallery_reset_slide_position",this.onResetSlidePosition)):this.$target.css("opacity",1),this.zoom_enabled&&(this.initZoom(),t.on("woocommerce_gallery_init_zoom",this.initZoom)),this.photoswipe_enabled&&this.initPhotoswipe()):this.$target.css("opacity",1)};e.prototype.initFlexslider=function(t){var e=this.$target,i=this,t=s.extend({selector:".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",start:function(){e.css("opacity",1)},after:function(t){i.initZoomForTarget(i.$images.eq(t.currentSlide))}},t);e.flexslider(t),s(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image:eq(0) .wp-post-image").one("load",function(){var i=s(this);i&&setTimeout(function(){var t=i.closest(".woocommerce-product-gallery__image").height(),e=i.closest(".flex-viewport");t&&e&&e.height(t)},100)}).each(function(){this.complete&&s(this).trigger("load")})},e.prototype.initZoom=function(){this.initZoomForTarget(this.$images.first())},e.prototype.initZoomForTarget=function(t){if(!this.zoom_enabled)return!1;var e,i=this.$target.width(),o=!1;s(t).each(function(t,e){if(s(e).find("img").data("large_image_width")>i)return!(o=!0)}),o&&(e=s.extend({touch:!1},wc_single_product_params.zoom_options),"ontouchstart"in document.documentElement&&(e.on="click"),t.trigger("zoom.destroy"),t.zoom(e),setTimeout(function(){t.find(":hover").length&&t.trigger("mouseover")},100))},e.prototype.initPhotoswipe=function(){this.zoom_enabled&&0<this.$images.length?(this.$target.prepend('<a href="#" class="woocommerce-product-gallery__trigger">🔍</a>'),this.$target.on("click",".woocommerce-product-gallery__trigger",this.openPhotoswipe),this.$target.on("click",".woocommerce-product-gallery__image a",function(t){t.preventDefault()}),this.flexslider_enabled||this.$target.on("click",".woocommerce-product-gallery__image a",this.openPhotoswipe)):this.$target.on("click",".woocommerce-product-gallery__image a",this.openPhotoswipe)},e.prototype.onResetSlidePosition=function(){this.$target.flexslider(0)},e.prototype.getGalleryItems=function(){var t=this.$images,a=[];return 0<t.length&&t.each(function(t,e){var i,o,r=s(e).find("img");r.length&&(i=r.attr("data-large_image"),o=r.attr("data-large_image_width"),e=r.attr("data-large_image_height"),r={alt:r.attr("alt"),src:i,w:o,h:e,title:r.attr("data-caption")?r.attr("data-caption"):r.attr("title")},a.push(r))}),a},e.prototype.openPhotoswipe=function(t){t.preventDefault();var e=s(".pswp")[0],i=this.getGalleryItems(),t=s(t.target),t=t.is(".woocommerce-product-gallery__trigger")||t.is(".woocommerce-product-gallery__trigger img")?this.$target.find(".flex-active-slide"):t.closest(".woocommerce-product-gallery__image"),t=s.extend({index:s(t).index(),addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].textContent=t.title,!0):(e.children[0].textContent="",!1)}},wc_single_product_params.photoswipe_options);new PhotoSwipe(e,PhotoSwipeUI_Default,i,t).init()},s.fn.wc_product_gallery=function(t){return new e(this,t||wc_single_product_params),this},s(".woocommerce-product-gallery").each(function(){s(this).trigger("wc-product-gallery-before-init",[this,wc_single_product_params]),s(this).wc_product_gallery(wc_single_product_params),s(this).trigger("wc-product-gallery-after-init",[this,wc_single_product_params])})});/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n,o,t=!1;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),t||(n=window.Cookies,(o=window.Cookies=e()).noConflict=function(){return window.Cookies=n,o})}(function(){function m(){for(var e=0,n={};e<arguments.length;e++){var o,t=arguments[e];for(o in t)n[o]=t[o]}return n}return function e(C){function g(e,n,o){var t,r;if("undefined"!=typeof document){if(1<arguments.length){"number"==typeof(o=m({path:"/"},g.defaults,o)).expires&&((r=new Date).setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r),o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(l){}n=C.write?C.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i,c="";for(i in o)o[i]&&(c+="; "+i,!0!==o[i]&&(c+="="+o[i]));return document.cookie=e+"="+n+c}e||(t={});for(var s=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,p=0;p<s.length;p++){var a=s[p].split("=");'"'===(u=a.slice(1).join("=")).charAt(0)&&(u=u.slice(1,-1));try{var d=a[0].replace(f,decodeURIComponent),u=C.read?C.read(u,d):C(u,d)||u.replace(f,decodeURIComponent);if(this.json)try{u=JSON.parse(u)}catch(l){}if(e===d){t=u;break}e||(t[d]=u)}catch(l){}}return t}}return(g.set=g).get=function(e){return g.call(g,e)},g.getJSON=function(){return g.apply({json:!0},[].slice.call(arguments))},g.defaults={},g.remove=function(e,n){g(e,"",m(n,{expires:-1}))},g.withConverter=e,g}(function(){})});jQuery(function(t){t(".woocommerce-ordering").on("change","select.orderby",function(){t(this).closest("form").trigger("submit")}),t("input.qty:not(.product-quantity input.qty)").each(function(){var o=parseFloat(t(this).attr("min"));0<=o&&parseFloat(t(this).val())<o&&t(this).val(o)});var e="store_notice"+(t(".woocommerce-store-notice").data("notice-id")||"");"hidden"===Cookies.get(e)?t(".woocommerce-store-notice").hide():t(".woocommerce-store-notice").show(),t(".woocommerce-store-notice__dismiss-link").on("click",function(o){Cookies.set(e,"hidden",{path:"/"}),t(".woocommerce-store-notice").hide(),o.preventDefault()}),t(".woocommerce-input-wrapper span.description").length&&t(document.body).on("click",function(){t(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),t(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),t(".woocommerce-input-wrapper :input").on("keydown",function(o){var e=t(this).parent().find("span.description");if(27===o.which&&e.length&&e.is(":visible"))return e.prop("aria-hidden",!0).slideUp(250),o.preventDefault(),!1}).on("click focus",function(){var o=t(this).parent(),e=o.find("span.description");o.addClass("currentTarget"),t(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),e.length&&e.is(":hidden")&&e.prop("aria-hidden",!1).slideDown(250),o.removeClass("currentTarget")}),t.scroll_to_notices=function(o){o.length&&t("html, body").animate({scrollTop:o.offset().top-100},1e3)},t('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),t(".woocommerce form input").filter(":password").parent("span").addClass("password-input"),t(".password-input").append('<span class="show-password-input"></span>'),t(".show-password-input").on("click",function(){t(this).toggleClass("display-password"),t(this).hasClass("display-password")?t(this).siblings(['input[type="password"]']).prop("type","text"):t(this).siblings('input[type="text"]').prop("type","password")})});jQuery(function(r){if("undefined"==typeof wc_cart_fragments_params)return!1;var t=!0,o=wc_cart_fragments_params.cart_hash_key;try{t="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){t=!1}function a(){t&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function s(e){t&&(localStorage.setItem(o,e),sessionStorage.setItem(o,e))}var e={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",data:{time:(new Date).getTime()},timeout:wc_cart_fragments_params.request_timeout,success:function(e){e&&e.fragments&&(r.each(e.fragments,function(e,t){r(e).replaceWith(t)}),t&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(e.fragments)),s(e.cart_hash),e.cart_hash&&a()),r(document.body).trigger("wc_fragments_refreshed"))},error:function(){r(document.body).trigger("wc_fragments_ajax_error")}};function n(){r.ajax(e)}if(t){var i=null;r(document.body).on("wc_fragment_refresh updated_wc_div",function(){n()}),r(document.body).on("added_to_cart removed_from_cart",function(e,t,r){var n=sessionStorage.getItem(o);null!==n&&n!==undefined&&""!==n||a(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(t)),s(r)}),r(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(n,864e5)}),r(window).on("storage onstorage",function(e){o===e.originalEvent.key&&localStorage.getItem(o)!==sessionStorage.getItem(o)&&n()}),r(window).on("pageshow",function(e){e.originalEvent.persisted&&(r(".widget_shopping_cart_content").empty(),r(document.body).trigger("wc_fragment_refresh"))});try{var c=JSON.parse(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(o),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=+m+864e5,m=(new Date).getTime();if(d<m)throw"Fragment expired";i=setTimeout(n,d-m)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";r.each(c,function(e,t){r(e).replaceWith(t)}),r(document.body).trigger("wc_fragments_loaded")}catch(w){n()}}else n();0<Cookies.get("woocommerce_items_in_cart")?r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),r(document.body).on("adding_to_cart",function(){r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()}),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.widgetsPreview&&wp.customize.widgetsPreview.WidgetPartial&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){n()})});(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return/(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){if(!e)return document.documentElement;for(var o=ie(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?r(n):n:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,a=document.createRange();a.setStart(n,0),a.setEnd(i,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=a(t,'top'),i=a(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function f(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function m(e,t,o,n){return Q(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie(10)?o['offset'+e]+n['margin'+('Height'===e?'Top':'Left')]+n['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie(10)&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return de({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};try{if(ie(10)){o=e.getBoundingClientRect();var n=a(e,'top'),i=a(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=ie(10),p='HTML'===o.nodeName,s=g(e),d=g(o),a=n(e),f=t(o),m=parseFloat(f.borderTopWidth,10),h=parseFloat(f.borderLeftWidth,10);i&&'HTML'===o.nodeName&&(d.top=Q(d.top,0),d.left=Q(d.left,0));var u=c({top:s.top-d.top-m,left:s.left-d.left-h,width:s.width,height:s.height});if(u.marginTop=0,u.marginLeft=0,!r&&p){var b=parseFloat(f.marginTop,10),y=parseFloat(f.marginLeft,10);u.top-=m-b,u.bottom-=m-b,u.left-=h-y,u.right-=h-y,u.marginTop=b,u.marginLeft=y}return(r&&!i?o.contains(a):o===a&&'BODY'!==a.nodeName)&&(u=l(u,o)),u}function b(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=u(e,o),i=Q(o.clientWidth,window.innerWidth||0),r=Q(o.clientHeight,window.innerHeight||0),p=t?0:a(o),s=t?0:a(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return c(d)}function y(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||y(o(e))}function w(e){if(!e||!e.parentElement||ie())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function E(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},a=p?w(e):d(e,t);if('viewport'===r)s=b(a,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=u(l,a,p);if('HTML'===l.nodeName&&!y(a)){var m=h(),c=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=c+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}return s.left+=i,s.top+=i,s.right-=i,s.bottom-=i,s}function v(e){var t=e.width,o=e.height;return t*o}function x(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=E(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return de({key:e},s[e],{area:v(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?w(t):d(t,o);return u(o,i,n)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function S(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function T(e,t,o){o=o.split('-')[0];var n=L(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[S(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function N(t,o,n){var i=void 0===n?t:t.slice(0,C(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=x(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=T(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function P(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,P(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e){var t=e.ownerDocument;return t?t.defaultView:window}function A(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||A(n(p.parentNode),t,o,i),i.push(p)}function I(e,t,o,i){o.updateBound=i,H(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return A(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function M(){this.state.eventsEnabled||(this.state=I(this.reference,this.options,this.state,this.scheduleUpdate))}function F(e,t){return H(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=F(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function K(e){return'end'===e?'start':'start'===e?'end':e}function V(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),n=le.slice(o+1).concat(le.slice(0,o));return t?n.reverse():n}function z(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?Q(document.documentElement.clientHeight,window.innerHeight||0):Q(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return z(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){U(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function _(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=U(+n)?[+n,0]:G(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var X=Math.min,J=Math.floor,Q=Math.max,Z='undefined'!=typeof window&&'undefined'!=typeof document,$=['Edge','Trident','Firefox'],ee=0,te=0;te<$.length;te+=1)if(Z&&0<=navigator.userAgent.indexOf($[te])){ee=1;break}var i=Z&&window.Promise,oe=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}},ne={},ie=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'all';return(e=e.toString(),ne.hasOwnProperty(e))?ne[e]:('11'===e?ne[e]=-1!==navigator.userAgent.indexOf('Trident'):'10'===e?ne[e]=-1!==navigator.appVersion.indexOf('MSIE 10'):'all'===e?ne[e]=-1!==navigator.userAgent.indexOf('Trident')||-1!==navigator.userAgent.indexOf('MSIE'):void 0,ne.all=ne.all||Object.keys(ne).some(function(e){return ne[e]}),ne[e])},re=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),se=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},de=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},ae=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=ae.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},me=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=oe(this.update.bind(this)),this.options=de({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(de({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=de({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return de({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return pe(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return M.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=ae,me.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:se({},d,r[d]),end:se({},d,r[d]+r[a]-p[a])};e.offsets.popper=de({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:_,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var n=E(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);t.boundaries=n;var i=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<n[e]&&!t.escapeWithReference&&(o=Q(p[e],n[e])),se({},e,o)},secondary:function(e){var o='right'===e?'left':'top',i=p[o];return p[e]>n[e]&&!t.escapeWithReference&&(i=X(p[o],n[e]-('right'===e?p.width:p.height))),se({},o,i)}};return i.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=de({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=J,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(i)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=Q(X(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},se(n,m,Math.round(v)),se(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(P(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=E(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=S(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[n,i];break;case fe.CLOCKWISE:p=V(n);break;case fe.COUNTERCLOCKWISE:p=V(n,!0);break;default:p=t.behavior}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=S(n);var a=e.offsets.popper,l=e.offsets.reference,f=J,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=K(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=de({},e.offsets.popper,T(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=S(t),e.offsets.popper=c(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,p=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:i.position},h={left:J(i.left),top:J(i.top),bottom:J(i.bottom),right:J(i.right)},c='bottom'===o?'top':'bottom',u='right'===n?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==u?-1:1;m[c]=d*y,m[u]=s*w,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=de({},E,e.attributes),e.styles=de({},m,e.styles),e.arrowStyles=de({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=O(i,t,e,o.positionFixed),p=x(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},me});/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var n="transitionend";function o(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};_.jQueryDetection(),g.fn.emulateTransitionEnd=o,g.event.special[_.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=g.fn[r],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},d="alert",m="fade",p="show",v=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,a),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n=n||g(t).closest("."+d)[0]},t._triggerCloseEvent=function(t){var e=g.Event(f.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(p),g(e).hasClass(m)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(a);e||(e=new i(this),t.data(a,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),g.fn[r]=v._jQueryInterface,g.fn[r].Constructor=v,g.fn[r].noConflict=function(){return g.fn[r]=h,v._jQueryInterface};var y="button",E="bs.button",C="."+E,T=".data-api",b=g.fn[y],S="active",D="btn",I="focus",w='[data-toggle^="button"]',A='[data-toggle="buttons"]',N='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',k='input:not([type="hidden"])',P=".active",L=".btn",j={CLICK_DATA_API:"click"+C+T,FOCUS_BLUR_DATA_API:"focus"+C+T+" blur"+C+T,LOAD_DATA_API:"load"+C+T},H=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var i=this._element.querySelector(k);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(P);o&&g(o).removeClass(S)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(S)&&(t=!1):t=!1;t&&(i.checked=!this._element.classList.contains(S),g(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S))},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();g(document).on(j.CLICK_DATA_API,w,function(t){var e=t.target;if(g(e).hasClass(D)||(e=g(e).closest(L)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var n=e.querySelector(k);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void t.preventDefault();H._jQueryInterface.call(g(e),"toggle")}}).on(j.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(L)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g(window).on(j.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(O)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(k);o.checked||o.hasAttribute("checked")?i.classList.add(S):i.classList.remove(S)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll(N))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(S):a.classList.remove(S)}}),g.fn[y]=H._jQueryInterface,g.fn[y].Constructor=H,g.fn[y].noConflict=function(){return g.fn[y]=b,H._jQueryInterface};var R="carousel",x="bs.carousel",F="."+x,U=".data-api",W=g.fn[R],q={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",Q="prev",B="left",V="right",Y={SLIDE:"slide"+F,SLID:"slid"+F,KEYDOWN:"keydown"+F,MOUSEENTER:"mouseenter"+F,MOUSELEAVE:"mouseleave"+F,TOUCHSTART:"touchstart"+F,TOUCHMOVE:"touchmove"+F,TOUCHEND:"touchend"+F,POINTERDOWN:"pointerdown"+F,POINTERUP:"pointerup"+F,DRAG_START:"dragstart"+F,LOAD_DATA_API:"load"+F+U,CLICK_DATA_API:"click"+F+U},z="carousel",X="active",$="slide",G="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",tt="carousel-item-prev",et="pointer-event",nt=".active",it=".active.carousel-item",ot=".carousel-item",rt=".carousel-item img",st=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",lt="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',ht={TOUCH:"touch",PEN:"pen"},ut=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(at),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(K)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(Q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(st)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(it);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Y.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?K:Q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(F),g.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},q,{},t),_.typeCheckConfig(R,t,M),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Y.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Y.MOUSEENTER,function(t){return e.pause(t)}).on(Y.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};g(this._element.querySelectorAll(rt)).on(Y.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Y.POINTERDOWN,function(t){return n(t)}),g(this._element).on(Y.POINTERUP,function(t){return i(t)}),this._element.classList.add(et)):(g(this._element).on(Y.TOUCHSTART,function(t){return n(t)}),g(this._element).on(Y.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),g(this._element).on(Y.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(ot)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===K,i=t===Q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===Q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(it)),o=g.Event(Y.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(nt));g(e).removeClass(X);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(X)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(it),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===K?(n=J,i=Z,B):(n=G,i=tt,V),l&&g(l).hasClass(X))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Y.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass($)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(X),g(s).removeClass(X+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(X),g(l).addClass(X),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(x),e=l({},q,{},g(this).data());"object"==typeof i&&(e=l({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(z)){var i=l({},g(n).data(),{},g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return q}}]),r}();g(document).on(Y.CLICK_DATA_API,lt,ut._dataApiClickHandler),g(window).on(Y.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ct)),e=0,n=t.length;e<n;e++){var i=g(t[e]);ut._jQueryInterface.call(i,i.data())}}),g.fn[R]=ut._jQueryInterface,g.fn[R].Constructor=ut,g.fn[R].noConflict=function(){return g.fn[R]=W,ut._jQueryInterface};var ft="collapse",dt="bs.collapse",gt="."+dt,_t=g.fn[ft],mt={toggle:!0,parent:""},pt={toggle:"boolean",parent:"(string|element)"},vt={SHOW:"show"+gt,SHOWN:"shown"+gt,HIDE:"hide"+gt,HIDDEN:"hidden"+gt,CLICK_DATA_API:"click"+gt+".data-api"},yt="show",Et="collapse",Ct="collapsing",Tt="collapsed",bt="width",St="height",Dt=".show, .collapsing",It='[data-toggle="collapse"]',wt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(It)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(yt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(yt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(Et)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(dt))&&e._isTransitioning))){var i=g.Event(vt.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(dt,null));var o=this._getDimension();g(this._element).removeClass(Et).addClass(Ct),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Tt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(Ct).addClass(Et).addClass(yt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(vt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(yt)){var e=g.Event(vt.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(yt)||g(r).addClass(Tt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,dt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},mt,{},t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ft,t,pt),t},t._getDimension=function(){return g(this._element).hasClass(bt)?bt:St},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(yt);e.length&&g(e).toggleClass(Tt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(dt),n=l({},mt,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(dt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return mt}}]),a}();g(document).on(vt.CLICK_DATA_API,It,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(dt)?"toggle":n.data();wt._jQueryInterface.call(t,e)})}),g.fn[ft]=wt._jQueryInterface,g.fn[ft].Constructor=wt,g.fn[ft].noConflict=function(){return g.fn[ft]=_t,wt._jQueryInterface};var At="dropdown",Nt="bs.dropdown",Ot="."+Nt,kt=".data-api",Pt=g.fn[At],Lt=new RegExp("38|40|27"),jt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+kt,KEYDOWN_DATA_API:"keydown"+Ot+kt,KEYUP_DATA_API:"keyup"+Ot+kt},Ht="disabled",Rt="show",xt="dropup",Ft="dropright",Ut="dropleft",Wt="dropdown-menu-right",qt="position-static",Mt='[data-toggle="dropdown"]',Kt=".dropdown form",Qt=".dropdown-menu",Bt=".navbar-nav",Vt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Yt="top-start",zt="top-end",Xt="bottom-start",$t="bottom-end",Gt="right-start",Jt="left-start",Zt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},te={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ee=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)){var t=g(this._menu).hasClass(Rt);c._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||g(this._element).hasClass(Ht)||g(this._menu).hasClass(Rt))){var e={relatedTarget:this._element},n=g.Event(jt.SHOW,e),i=c._getParentFromElement(this._element);if(g(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(i).addClass(qt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(i).closest(Bt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Rt),g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN,e))}}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)&&g(this._menu).hasClass(Rt)){var t={relatedTarget:this._element},e=g.Event(jt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),g(this._menu).toggleClass(Rt),g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Nt),g(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(jt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,{},g(this._element).data(),{},t),_.typeCheckConfig(At,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Xt;return t.hasClass(xt)?(e=Yt,g(this._menu).hasClass(Wt)&&(e=zt)):t.hasClass(Ft)?e=Gt:t.hasClass(Ut)?e=Jt:g(this._menu).hasClass(Wt)&&(e=$t),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),l({},t,{},this._config.popperConfig)},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Nt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Nt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Mt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Nt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Rt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(jt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),g(a).removeClass(Rt),g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(Qt).length)):Lt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Ht))){var e=c._getParentFromElement(this),n=g(e).hasClass(Rt);if(n||27!==t.which)if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Vt)).filter(function(t){return g(t).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Mt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zt}},{key:"DefaultType",get:function(){return te}}]),c}();g(document).on(jt.KEYDOWN_DATA_API,Mt,ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API,Qt,ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API+" "+jt.KEYUP_DATA_API,ee._clearMenus).on(jt.CLICK_DATA_API,Mt,function(t){t.preventDefault(),t.stopPropagation(),ee._jQueryInterface.call(g(this),"toggle")}).on(jt.CLICK_DATA_API,Kt,function(t){t.stopPropagation()}),g.fn[At]=ee._jQueryInterface,g.fn[At].Constructor=ee,g.fn[At].noConflict=function(){return g.fn[At]=Pt,ee._jQueryInterface};var ne="modal",ie="bs.modal",oe="."+ie,re=g.fn[ne],se={backdrop:!0,keyboard:!0,focus:!0,show:!0},ae={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},le={HIDE:"hide"+oe,HIDE_PREVENTED:"hidePrevented"+oe,HIDDEN:"hidden"+oe,SHOW:"show"+oe,SHOWN:"shown"+oe,FOCUSIN:"focusin"+oe,RESIZE:"resize"+oe,CLICK_DISMISS:"click.dismiss"+oe,KEYDOWN_DISMISS:"keydown.dismiss"+oe,MOUSEUP_DISMISS:"mouseup.dismiss"+oe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+oe,CLICK_DATA_API:"click"+oe+".data-api"},ce="modal-dialog-scrollable",he="modal-scrollbar-measure",ue="modal-backdrop",fe="modal-open",de="fade",ge="show",_e="modal-static",me=".modal-dialog",pe=".modal-body",ve='[data-toggle="modal"]',ye='[data-dismiss="modal"]',Ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ce=".sticky-top",Te=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(me),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(de)&&(this._isTransitioning=!0);var n=g.Event(le.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(le.CLICK_DISMISS,ye,function(t){return e.hide(t)}),g(this._dialog).on(le.MOUSEDOWN_DISMISS,function(){g(e._element).one(le.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(le.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(de);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(le.FOCUSIN),g(this._element).removeClass(ge),g(this._element).off(le.CLICK_DISMISS),g(this._dialog).off(le.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(oe)}),g(document).off(le.FOCUSIN),g.removeData(this._element,ie),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},se,{},t),_.typeCheckConfig(ne,t,ae),t},t._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=g.Event(le.HIDE_PREVENTED);if(g(this._element).trigger(e),e.defaultPrevented)return;this._element.classList.add(_e);var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t._element.classList.remove(_e)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},t._showElement=function(t){var e=this,n=g(this._element).hasClass(de),i=this._dialog?this._dialog.querySelector(pe):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(ce)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ge),this._config.focus&&this._enforceFocus();function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(r)}var r=g.Event(le.SHOWN,{relatedTarget:t});if(n){var s=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},t._enforceFocus=function(){var e=this;g(document).off(le.FOCUSIN).on(le.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(le.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||g(this._element).off(le.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(le.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(le.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(fe),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(le.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(de)?de:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ue,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(le.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ge),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ge);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(de)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(Ee)),e=[].slice.call(document.querySelectorAll(Ce));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(fe)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Ee));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+Ce));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=he,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(ie),e=l({},se,{},g(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(ie,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return se}}]),o}();g(document).on(le.CLICK_DATA_API,ve,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(ie)?"toggle":l({},g(e).data(),{},g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(le.SHOW,function(t){t.isDefaultPrevented()||r.one(le.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});Te._jQueryInterface.call(g(e),o,this)}),g.fn[ne]=Te._jQueryInterface,g.fn[ne].Constructor=Te,g.fn[ne].noConflict=function(){return g.fn[ne]=re,Te._jQueryInterface};var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Se={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},De=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Ie=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function we(t,r,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(t){var e=a[t],n=e.nodeName.toLowerCase();if(-1===s.indexOf(e.nodeName.toLowerCase()))return e.parentNode.removeChild(e),"continue";var i=[].slice.call(e.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(De)||t.nodeValue.match(Ie));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(t,o)&&e.removeAttribute(t.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var Ae="tooltip",Ne="bs.tooltip",Oe="."+Ne,ke=g.fn[Ae],Pe="bs-tooltip",Le=new RegExp("(^|\\s)"+Pe+"\\S+","g"),je=["sanitize","whiteList","sanitizeFn"],He={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Re={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Se,popperConfig:null},Fe="show",Ue="out",We={HIDE:"hide"+Oe,HIDDEN:"hidden"+Oe,SHOW:"show"+Oe,SHOWN:"shown"+Oe,INSERTED:"inserted"+Oe,CLICK:"click"+Oe,FOCUSIN:"focusin"+Oe,FOCUSOUT:"focusout"+Oe,MOUSEENTER:"mouseenter"+Oe,MOUSELEAVE:"mouseleave"+Oe},qe="fade",Me="show",Ke=".tooltip-inner",Qe=".arrow",Be="hover",Ve="focus",Ye="click",ze="manual",Xe=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Me))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(qe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,this._getPopperConfig(a)),g(o).addClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===Ue&&e._leave(null,e)};if(g(this.tip).hasClass(qe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){function e(){n._hoverState!==Fe&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),g(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=g.Event(this.constructor.Event.HIDE);if(g(this.element).trigger(o),!o.isDefaultPrevented()){if(g(i).removeClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ye]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Be]=!1,g(this.tip).hasClass(qe)){var r=_.getTransitionDurationFromElement(i);g(i).one(_.TRANSITION_END,e).emulateTransitionEnd(r)}else e();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Pe+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ke)),this.getTitle()),g(t).removeClass(qe+" "+Me)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=we(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},t._getPopperConfig=function(t){var e=this;return l({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Qe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Re[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==ze){var e=t===Be?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Be?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),this._hideModalHandler=function(){i.element&&i.hide()},g(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ve:Be]=!0),g(e.getTipElement()).hasClass(Me)||e._hoverState===Fe?e._hoverState=Fe:(clearTimeout(e._timeout),e._hoverState=Fe,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Fe&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ve:Be]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ue,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===Ue&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==je.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(Ae,t,this.constructor.DefaultType),t.sanitize&&(t.template=we(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(qe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ne),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ne,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Ae}},{key:"DATA_KEY",get:function(){return Ne}},{key:"Event",get:function(){return We}},{key:"EVENT_KEY",get:function(){return Oe}},{key:"DefaultType",get:function(){return He}}]),i}();g.fn[Ae]=Xe._jQueryInterface,g.fn[Ae].Constructor=Xe,g.fn[Ae].noConflict=function(){return g.fn[Ae]=ke,Xe._jQueryInterface};var $e="popover",Ge="bs.popover",Je="."+Ge,Ze=g.fn[$e],tn="bs-popover",en=new RegExp("(^|\\s)"+tn+"\\S+","g"),nn=l({},Xe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),on=l({},Xe.DefaultType,{content:"(string|element|function)"}),rn="fade",sn="show",an=".popover-header",ln=".popover-body",cn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,INSERTED:"inserted"+Je,CLICK:"click"+Je,FOCUSIN:"focusin"+Je,FOCUSOUT:"focusout"+Je,MOUSEENTER:"mouseenter"+Je,MOUSELEAVE:"mouseleave"+Je},hn=function(t){function i(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(i,t);var e=i.prototype;return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){g(this.getTipElement()).addClass(tn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},e.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(an),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ln),e),t.removeClass(rn+" "+sn)},e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(en);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ge),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ge,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}},{key:"NAME",get:function(){return $e}},{key:"DATA_KEY",get:function(){return Ge}},{key:"Event",get:function(){return cn}},{key:"EVENT_KEY",get:function(){return Je}},{key:"DefaultType",get:function(){return on}}]),i}(Xe);g.fn[$e]=hn._jQueryInterface,g.fn[$e].Constructor=hn,g.fn[$e].noConflict=function(){return g.fn[$e]=Ze,hn._jQueryInterface};var un="scrollspy",fn="bs.scrollspy",dn="."+fn,gn=g.fn[un],_n={offset:10,method:"auto",target:""},mn={offset:"number",method:"string",target:"(string|element)"},pn={ACTIVATE:"activate"+dn,SCROLL:"scroll"+dn,LOAD_DATA_API:"load"+dn+".data-api"},vn="dropdown-item",yn="active",En='[data-spy="scroll"]',Cn=".nav, .list-group",Tn=".nav-link",bn=".nav-item",Sn=".list-group-item",Dn=".dropdown",In=".dropdown-item",wn=".dropdown-toggle",An="offset",Nn="position",On=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Tn+","+this._config.target+" "+Sn+","+this._config.target+" "+In,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(pn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?An:Nn,o="auto"===this._config.method?t:this._config.method,r=o===Nn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,fn),g(this._scrollElement).off(dn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},_n,{},"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(un),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(un,t,mn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(vn)?(n.closest(Dn).find(wn).addClass(yn),n.addClass(yn)):(n.addClass(yn),n.parents(Cn).prev(Tn+", "+Sn).addClass(yn),n.parents(Cn).prev(bn).children(Tn).addClass(yn)),g(this._scrollElement).trigger(pn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(yn)}).forEach(function(t){return t.classList.remove(yn)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(fn);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(fn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return _n}}]),n}();g(window).on(pn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(En)),e=t.length;e--;){var n=g(t[e]);On._jQueryInterface.call(n,n.data())}}),g.fn[un]=On._jQueryInterface,g.fn[un].Constructor=On,g.fn[un].noConflict=function(){return g.fn[un]=gn,On._jQueryInterface};var kn="bs.tab",Pn="."+kn,Ln=g.fn.tab,jn={HIDE:"hide"+Pn,HIDDEN:"hidden"+Pn,SHOW:"show"+Pn,SHOWN:"shown"+Pn,CLICK_DATA_API:"click"+Pn+".data-api"},Hn="dropdown-menu",Rn="active",xn="disabled",Fn="fade",Un="show",Wn=".dropdown",qn=".nav, .list-group",Mn=".active",Kn="> li > .active",Qn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Bn=".dropdown-toggle",Vn="> .dropdown-menu .active",Yn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Rn)||g(this._element).hasClass(xn))){var t,i,e=g(this._element).closest(qn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Kn:Mn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(jn.HIDE,{relatedTarget:this._element}),a=g.Event(jn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(jn.HIDDEN,{relatedTarget:n._element}),e=g.Event(jn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,kn),this._element=null},t._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Mn):g(e).find(Kn))[0],s=n&&r&&g(r).hasClass(Fn);if(r&&s){var a=_.getTransitionDurationFromElement(r);g(r).removeClass(Un).one(_.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Rn);var i=g(e.parentNode).find(Vn)[0];i&&g(i).removeClass(Rn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Rn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(Fn)&&t.classList.add(Un),t.parentNode&&g(t.parentNode).hasClass(Hn)){var o=g(t).closest(Wn)[0];if(o){var r=[].slice.call(o.querySelectorAll(Bn));g(r).addClass(Rn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(kn);if(e||(e=new i(this),t.data(kn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(jn.CLICK_DATA_API,Qn,function(t){t.preventDefault(),Yn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Yn._jQueryInterface,g.fn.tab.Constructor=Yn,g.fn.tab.noConflict=function(){return g.fn.tab=Ln,Yn._jQueryInterface};var zn="toast",Xn="bs.toast",$n="."+Xn,Gn=g.fn[zn],Jn={CLICK_DISMISS:"click.dismiss"+$n,HIDE:"hide"+$n,HIDDEN:"hidden"+$n,SHOW:"show"+$n,SHOWN:"shown"+$n},Zn="fade",ti="hide",ei="show",ni="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:500},ri='[data-dismiss="toast"]',si=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this,e=g.Event(Jn.SHOW);if(g(this._element).trigger(e),!e.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Zn);var n=function(){t._element.classList.remove(ni),t._element.classList.add(ei),g(t._element).trigger(Jn.SHOWN),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove(ti),_.reflow(this._element),this._element.classList.add(ni),this._config.animation){var i=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},t.hide=function(){if(this._element.classList.contains(ei)){var t=g.Event(Jn.HIDE);g(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ei)&&this._element.classList.remove(ei),g(this._element).off(Jn.CLICK_DISMISS),g.removeData(this._element,Xn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},oi,{},g(this._element).data(),{},"object"==typeof t&&t?t:{}),_.typeCheckConfig(zn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Jn.CLICK_DISMISS,ri,function(){return t.hide()})},t._close=function(){function t(){e._element.classList.add(ti),g(e._element).trigger(Jn.HIDDEN)}var e=this;if(this._element.classList.remove(ei),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Xn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Xn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return ii}},{key:"Default",get:function(){return oi}}]),i}();g.fn[zn]=si._jQueryInterface,g.fn[zn].Constructor=si,g.fn[zn].noConflict=function(){return g.fn[zn]=Gn,si._jQueryInterface},t.Alert=v,t.Button=H,t.Carousel=ut,t.Collapse=wt,t.Dropdown=ee,t.Modal=Te,t.Popover=hn,t.Scrollspy=On,t.Tab=Yn,t.Toast=si,t.Tooltip=Xe,t.Util=_,Object.defineProperty(t,"__esModule",{value:!0})});/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($,window,document,undefined){/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){var style=$('<support>').get(0).style,prefixes='Webkit Moz O ms'.split(' '),events={transition:{end:{WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd',transition:'transitionend'}},animation:{end:{WebkitAnimation:'webkitAnimationEnd',MozAnimation:'animationend',OAnimation:'oAnimationEnd',animation:'animationend'}}},tests={csstransforms:function(){return!!test('transform')},csstransforms3d:function(){return!!test('perspective')},csstransitions:function(){return!!test('transition')},cssanimations:function(){return!!test('animation')}};function test(property,prefixed){var result=!1,upper=property.charAt(0).toUpperCase()+property.slice(1);$.each((property+' '+prefixes.join(upper+' ')+upper).split(' '),function(i,property){if(style[property]!==undefined){result=prefixed?property:!0;return!1}});return result}
function prefixed(property){return test(property,!0)}
if(tests.csstransitions()){$.support.transition=new String(prefixed('transition'))
$.support.transition.end=events.transition.end[$.support.transition]}
if(tests.cssanimations()){$.support.animation=new String(prefixed('animation'))
$.support.animation.end=events.animation.end[$.support.animation]}
if(tests.csstransforms()){$.support.transform=new String(prefixed('transform'));$.support.transform3d=tests.csstransforms3d()}})(window.Zepto||window.jQuery,window,document);/*! WOW - v1.0.1 - 2014-08-15
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d=function(a,b){return function(){return a.apply(b,arguments)}},e=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),this.WOW=function(){function f(a){null==a&&(a={}),this.scrollCallback=d(this.scrollCallback,this),this.scrollHandler=d(this.scrollHandler,this),this.start=d(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return f.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},f.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},f.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},f.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},f.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},f.prototype.doSync=function(a){var b,c,d,f,g;if(!this.stopped){if(null==a&&(a=this.element),1!==a.nodeType)return;for(a=a.parentNode||a,f=a.querySelectorAll("."+this.config.boxClass),g=[],c=0,d=f.length;d>c;c++)b=f[c],e.call(this.all,b)<0?(this.applyStyle(b,!0),this.boxes.push(b),this.all.push(b),g.push(this.scrolled=!0)):g.push(void 0);return g}},f.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},f.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},f.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),f.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},f.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},f.prototype.vendors=["moz","webkit"],f.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},f.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},f.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},f.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},f.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},f.prototype.scrollHandler=function(){return this.scrolled=!0},f.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},f.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},f.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,innerHeight)-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},f.prototype.util=function(){return null!=this._util?this._util:this._util=new b},f.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},f}()}).call(this);(function(window,document,$,undefined){'use strict';if(!$){return}
if($.fn.fancybox){if('console' in window){console.log('fancyBox already initialized')}
return}
var defaults={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!0,toolbar:!0,buttons:['slideShow','fullScreen','thumbs','share','close'],idleTime:3,smallBtn:'auto',protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:'auto'}},defaultType:'image',animationEffect:"zoom",animationDuration:500,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:'',baseClass:'',baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1">'+'<div class="fancybox-bg"></div>'+'<div class="fancybox-inner">'+'<div class="fancybox-infobar">'+'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>'+'</div>'+'<div class="fancybox-toolbar">{{buttons}}</div>'+'<div class="fancybox-navigation">{{arrows}}</div>'+'<div class="fancybox-stage"></div>'+'<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>'+'</div>'+'</div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" />'+'</svg>'+'</a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" />'+'</svg>'+'</button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M10,10 L30,30 M30,10 L10,30" />'+'</svg>'+'</button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path>'+'</svg>'+'</button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path>'+'</svg>'+'</button>'},parentEl:'body',autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1,},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4000},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:'.fancybox-container',axis:'y'},wheel:'auto',onInit:$.noop,beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,beforeClose:$.noop,afterClose:$.noop,onActivate:$.noop,onDeactivate:$.noop,clickContent:function(current,event){return current.type==='image'?'zoom':!1},clickSlide:'close',clickOutside:'close',dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,margin:0,clickContent:function(current,event){return current.type==='image'?'toggleControls':!1},clickSlide:function(current,event){return current.type==='image'?'toggleControls':'close'},dblclickContent:function(current,event){return current.type==='image'?'zoom':!1},dblclickSlide:function(current,event){return current.type==='image'?'zoom':!1}},lang:'en',i18n:{'en':{CLOSE:'Close',NEXT:'Next',PREV:'Previous',ERROR:'The requested content cannot be loaded. <br/> Please try again later.',PLAY_START:'Start slideshow',PLAY_STOP:'Pause slideshow',FULL_SCREEN:'Full screen',THUMBS:'Thumbnails',DOWNLOAD:'Download',SHARE:'Share',ZOOM:'Zoom'},'de':{CLOSE:'Schliessen',NEXT:'Weiter',PREV:'Zurück',ERROR:'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',PLAY_START:'Diaschau starten',PLAY_STOP:'Diaschau beenden',FULL_SCREEN:'Vollbild',THUMBS:'Vorschaubilder',DOWNLOAD:'Herunterladen',SHARE:'Teilen',ZOOM:'Maßstab'}}};var $W=$(window);var $D=$(document);var called=0;var isQuery=function(obj){return obj&&obj.hasOwnProperty&&obj instanceof $};var requestAFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60)}})();var transitionEnd=(function(){var t,el=document.createElement("fakeelement");var transitions={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"};for(t in transitions){if(el.style[t]!==undefined){return transitions[t]}}
return'transitionend'})();var forceRedraw=function($el){return($el&&$el.length&&$el[0].offsetHeight)};var FancyBox=function(content,opts,index){var self=this;self.opts=$.extend(!0,{index:index},$.fancybox.defaults,opts||{});if($.fancybox.isMobile){self.opts=$.extend(!0,{},self.opts,self.opts.mobile)}
if(opts&&$.isArray(opts.buttons)){self.opts.buttons=opts.buttons}
self.id=self.opts.id||++called;self.group=[];self.currIndex=parseInt(self.opts.index,10)||0;self.prevIndex=null;self.prevPos=null;self.currPos=0;self.firstRun=null;self.createGroup(content);if(!self.group.length){return}
self.$lastFocus=$(document.activeElement).blur();self.slides={};self.init()};$.extend(FancyBox.prototype,{init:function(){var self=this,firstItem=self.group[self.currIndex],firstItemOpts=firstItem.opts,scrollbarWidth=$.fancybox.scrollbarWidth,$scrollDiv,$container,buttonStr;self.scrollTop=$D.scrollTop();self.scrollLeft=$D.scrollLeft();if(!$.fancybox.getInstance()){$('body').addClass('fancybox-active');if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){if(firstItem.type!=='image'){$('body').css('top',$('body').scrollTop()*-1).addClass('fancybox-iosfix')}}else if(!$.fancybox.isMobile&&document.body.scrollHeight>window.innerHeight){if(scrollbarWidth===undefined){$scrollDiv=$('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo('body');scrollbarWidth=$.fancybox.scrollbarWidth=$scrollDiv[0].offsetWidth-$scrollDiv[0].clientWidth;$scrollDiv.remove()}
$('head').append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+scrollbarWidth+'px; }</style>');$('body').addClass('compensate-for-scrollbar')}}
buttonStr='';$.each(firstItemOpts.buttons,function(index,value){buttonStr+=(firstItemOpts.btnTpl[value]||'')});$container=$(self.translate(self,firstItemOpts.baseTpl.replace('\{\{buttons\}\}',buttonStr).replace('\{\{arrows\}\}',firstItemOpts.btnTpl.arrowLeft+firstItemOpts.btnTpl.arrowRight))).attr('id','fancybox-container-'+self.id).addClass('fancybox-is-hidden').addClass(firstItemOpts.baseClass).data('FancyBox',self).appendTo(firstItemOpts.parentEl);self.$refs={container:$container};['bg','inner','infobar','toolbar','stage','caption','navigation'].forEach(function(item){self.$refs[item]=$container.find('.fancybox-'+item)});self.trigger('onInit');self.activate();self.jumpTo(self.currIndex)},translate:function(obj,str){var arr=obj.opts.i18n[obj.opts.lang];return str.replace(/\{\{(\w+)\}\}/g,function(match,n){var value=arr[n];if(value===undefined){return match}
return value})},createGroup:function(content){var self=this;var items=$.makeArray(content);$.each(items,function(i,item){var obj={},opts={},$item,type,found,src,srcParts;if($.isPlainObject(item)){obj=item;opts=item.opts||item}else if($.type(item)==='object'&&$(item).length){$item=$(item);opts=$item.data();opts=$.extend({},opts,opts.options||{});opts.$orig=$item;obj.src=opts.src||$item.attr('href');if(!obj.type&&!obj.src){obj.type='inline';obj.src=item}}else{obj={type:'html',src:item+''}}
obj.opts=$.extend(!0,{},self.opts,opts);if($.isArray(opts.buttons)){obj.opts.buttons=opts.buttons}
type=obj.type||obj.opts.type;src=obj.src||'';if(!type&&src){if(src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)){type='image'}else if(src.match(/\.(pdf)((\?|#).*)?$/i)){type='pdf'}else if(found=src.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)){type='video';if(!obj.opts.videoFormat){obj.opts.videoFormat='video/'+(found[1]==='ogv'?'ogg':found[1])}}else if(src.charAt(0)==='#'){type='inline'}}
if(type){obj.type=type}else{self.trigger('objectNeedsType',obj)}
obj.index=self.group.length;if(obj.opts.$orig&&!obj.opts.$orig.length){delete obj.opts.$orig}
if(!obj.opts.$thumb&&obj.opts.$orig){obj.opts.$thumb=obj.opts.$orig.find('img:first')}
if(obj.opts.$thumb&&!obj.opts.$thumb.length){delete obj.opts.$thumb}
if($.type(obj.opts.caption)==='function'){obj.opts.caption=obj.opts.caption.apply(item,[self,obj])}
if($.type(self.opts.caption)==='function'){obj.opts.caption=self.opts.caption.apply(item,[self,obj])}
if(!(obj.opts.caption instanceof $)){obj.opts.caption=obj.opts.caption===undefined?'':obj.opts.caption+''}
if(type==='ajax'){srcParts=src.split(/\s+/,2);if(srcParts.length>1){obj.src=srcParts.shift();obj.opts.filter=srcParts.shift()}}
if(obj.opts.smallBtn=='auto'){if($.inArray(type,['html','inline','ajax'])>-1){obj.opts.toolbar=!1;obj.opts.smallBtn=!0}else{obj.opts.smallBtn=!1}}
if(type==='pdf'){obj.type='iframe';obj.opts.iframe.preload=!1}
if(obj.opts.modal){obj.opts=$.extend(!0,obj.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})}
self.group.push(obj)})},addEvents:function(){var self=this;self.removeEvents();self.$refs.container.on('click.fb-close','[data-fancybox-close]',function(e){e.stopPropagation();e.preventDefault();self.close(e)}).on('click.fb-prev touchend.fb-prev','[data-fancybox-prev]',function(e){e.stopPropagation();e.preventDefault();self.previous()}).on('click.fb-next touchend.fb-next','[data-fancybox-next]',function(e){e.stopPropagation();e.preventDefault();self.next()}).on('click.fb','[data-fancybox-zoom]',function(e){self[self.isScaledDown()?'scaleToActual':'scaleToFit']()});$W.on('orientationchange.fb resize.fb',function(e){if(e&&e.originalEvent&&e.originalEvent.type==="resize"){requestAFrame(function(){self.update()})}else{self.$refs.stage.hide();setTimeout(function(){self.$refs.stage.show();self.update()},600)}});$D.on('focusin.fb',function(e){var instance=$.fancybox?$.fancybox.getInstance():null;if(instance.isClosing||!instance.current||!instance.current.opts.trapFocus||$(e.target).hasClass('fancybox-container')||$(e.target).is(document)){return}
if(instance&&$(e.target).css('position')!=='fixed'&&!instance.$refs.container.has(e.target).length){e.stopPropagation();instance.focus();$W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft)}});$D.on('keydown.fb',function(e){var current=self.current,keycode=e.keyCode||e.which;if(!current||!current.opts.keyboard){return}
if($(e.target).is('input')||$(e.target).is('textarea')){return}
if(keycode===8||keycode===27){e.preventDefault();self.close(e);return}
if(keycode===37||keycode===38){e.preventDefault();self.previous();return}
if(keycode===39||keycode===40){e.preventDefault();self.next();return}
self.trigger('afterKeydown',e,keycode)});if(self.group[self.currIndex].opts.idleTime){self.idleSecondsCounter=0;$D.on('mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',function(e){self.idleSecondsCounter=0;if(self.isIdle){self.showControls()}
self.isIdle=!1});self.idleInterval=window.setInterval(function(){self.idleSecondsCounter++;if(self.idleSecondsCounter>=self.group[self.currIndex].opts.idleTime&&!self.isDragging){self.isIdle=!0;self.idleSecondsCounter=0;self.hideControls()}},1000)}},removeEvents:function(){var self=this;$W.off('orientationchange.fb resize.fb');$D.off('focusin.fb keydown.fb .fb-idle');this.$refs.container.off('.fb-close .fb-prev .fb-next');if(self.idleInterval){window.clearInterval(self.idleInterval);self.idleInterval=null}},previous:function(duration){return this.jumpTo(this.currPos-1,duration)},next:function(duration){return this.jumpTo(this.currPos+1,duration)},jumpTo:function(pos,duration,slide){var self=this,firstRun,loop,current,previous,canvasWidth,currentPos,transitionProps;var groupLen=self.group.length;if(self.isDragging||self.isClosing||(self.isAnimating&&self.firstRun)){return}
pos=parseInt(pos,10);loop=self.current?self.current.opts.loop:self.opts.loop;if(!loop&&(pos<0||pos>=groupLen)){return!1}
firstRun=self.firstRun=(self.firstRun===null);if(groupLen<2&&!firstRun&&!!self.isDragging){return}
previous=self.current;self.prevIndex=self.currIndex;self.prevPos=self.currPos;current=self.createSlide(pos);if(groupLen>1){if(loop||current.index>0){self.createSlide(pos-1)}
if(loop||current.index<groupLen-1){self.createSlide(pos+1)}}
self.current=current;self.currIndex=current.index;self.currPos=current.pos;self.trigger('beforeShow',firstRun);self.updateControls();currentPos=$.fancybox.getTranslate(current.$slide);current.isMoved=(currentPos.left!==0||currentPos.top!==0)&&!current.$slide.hasClass('fancybox-animated');current.forcedDuration=undefined;if($.isNumeric(duration)){current.forcedDuration=duration}else{duration=current.opts[firstRun?'animationDuration':'transitionDuration']}
duration=parseInt(duration,10);if(firstRun){if(current.opts.animationEffect&&duration){self.$refs.container.css('transition-duration',duration+'ms')}
self.$refs.container.removeClass('fancybox-is-hidden');forceRedraw(self.$refs.container);self.$refs.container.addClass('fancybox-is-open');current.$slide.addClass('fancybox-slide--current');self.loadSlide(current);self.preload('image');return}
$.each(self.slides,function(index,slide){$.fancybox.stop(slide.$slide)});current.$slide.removeClass('fancybox-slide--next fancybox-slide--previous').addClass('fancybox-slide--current');if(current.isMoved){canvasWidth=Math.round(current.$slide.width());$.each(self.slides,function(index,slide){var pos=slide.pos-current.pos;$.fancybox.animate(slide.$slide,{top:0,left:(pos*canvasWidth)+(pos*slide.opts.gutter)},duration,function(){slide.$slide.removeAttr('style').removeClass('fancybox-slide--next fancybox-slide--previous');if(slide.pos===self.currPos){current.isMoved=!1;self.complete()}})})}else{self.$refs.stage.children().removeAttr('style')}
if(current.isLoaded){self.revealContent(current)}else{self.loadSlide(current)}
self.preload('image');if(previous.pos===current.pos){return}
transitionProps='fancybox-slide--'+(previous.pos>current.pos?'next':'previous');previous.$slide.removeClass('fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous');previous.isComplete=!1;if(!duration||(!current.isMoved&&!current.opts.transitionEffect)){return}
if(current.isMoved){previous.$slide.addClass(transitionProps)}else{transitionProps='fancybox-animated '+transitionProps+' fancybox-fx-'+current.opts.transitionEffect;$.fancybox.animate(previous.$slide,transitionProps,duration,function(){previous.$slide.removeClass(transitionProps).removeAttr('style')})}},createSlide:function(pos){var self=this;var $slide;var index;index=pos%self.group.length;index=index<0?self.group.length+index:index;if(!self.slides[pos]&&self.group[index]){$slide=$('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);self.slides[pos]=$.extend(!0,{},self.group[index],{pos:pos,$slide:$slide,isLoaded:!1,});self.updateSlide(self.slides[pos])}
return self.slides[pos]},scaleToActual:function(x,y,duration){var self=this;var current=self.current;var $what=current.$content;var imgPos,posX,posY,scaleX,scaleY;var canvasWidth=parseInt(current.$slide.width(),10);var canvasHeight=parseInt(current.$slide.height(),10);var newImgWidth=current.width;var newImgHeight=current.height;if(!(current.type=='image'&&!current.hasError)||!$what||self.isAnimating){return}
$.fancybox.stop($what);self.isAnimating=!0;x=x===undefined?canvasWidth*0.5:x;y=y===undefined?canvasHeight*0.5:y;imgPos=$.fancybox.getTranslate($what);scaleX=newImgWidth/imgPos.width;scaleY=newImgHeight/imgPos.height;posX=(canvasWidth*0.5-newImgWidth*0.5);posY=(canvasHeight*0.5-newImgHeight*0.5);if(newImgWidth>canvasWidth){posX=imgPos.left*scaleX-((x*scaleX)-x);if(posX>0){posX=0}
if(posX<canvasWidth-newImgWidth){posX=canvasWidth-newImgWidth}}
if(newImgHeight>canvasHeight){posY=imgPos.top*scaleY-((y*scaleY)-y);if(posY>0){posY=0}
if(posY<canvasHeight-newImgHeight){posY=canvasHeight-newImgHeight}}
self.updateCursor(newImgWidth,newImgHeight);$.fancybox.animate($what,{top:posY,left:posX,scaleX:scaleX,scaleY:scaleY},duration||330,function(){self.isAnimating=!1});if(self.SlideShow&&self.SlideShow.isActive){self.SlideShow.stop()}},scaleToFit:function(duration){var self=this;var current=self.current;var $what=current.$content;var end;if(!(current.type=='image'&&!current.hasError)||!$what||self.isAnimating){return}
$.fancybox.stop($what);self.isAnimating=!0;end=self.getFitPos(current);self.updateCursor(end.width,end.height);$.fancybox.animate($what,{top:end.top,left:end.left,scaleX:end.width/$what.width(),scaleY:end.height/$what.height()},duration||330,function(){self.isAnimating=!1})},getFitPos:function(slide){var self=this;var $what=slide.$content;var imgWidth=slide.width;var imgHeight=slide.height;var margin=slide.opts.margin;var canvasWidth,canvasHeight,minRatio,width,height;if(!$what||!$what.length||(!imgWidth&&!imgHeight)){return!1}
if($.type(margin)==="number"){margin=[margin,margin]}
if(margin.length==2){margin=[margin[0],margin[1],margin[0],margin[1]]}
canvasWidth=parseInt(self.$refs.stage.width(),10)-(margin[1]+margin[3]);canvasHeight=parseInt(self.$refs.stage.height(),10)-(margin[0]+margin[2]);minRatio=Math.min(1,canvasWidth/imgWidth,canvasHeight/imgHeight);width=Math.floor(minRatio*imgWidth);height=Math.floor(minRatio*imgHeight);return{top:Math.floor((canvasHeight-height)*0.5)+margin[0],left:Math.floor((canvasWidth-width)*0.5)+margin[3],width:width,height:height}},update:function(){var self=this;$.each(self.slides,function(key,slide){self.updateSlide(slide)})},updateSlide:function(slide,duration){var self=this,$what=slide&&slide.$content;if($what&&(slide.width||slide.height)){self.isAnimating=!1;$.fancybox.stop($what);$.fancybox.setTranslate($what,self.getFitPos(slide));if(slide.pos===self.currPos){self.updateCursor()}}
slide.$slide.trigger('refresh');self.trigger('onUpdate',slide)},centerSlide:function(slide,duration){var self=this,canvasWidth,pos;if(self.current){canvasWidth=Math.round(slide.$slide.width());pos=slide.pos-self.current.pos;$.fancybox.animate(slide.$slide,{top:0,left:(pos*canvasWidth)+(pos*slide.opts.gutter),opacity:1},duration===undefined?0:duration,null,!1)}},updateCursor:function(nextWidth,nextHeight){var self=this;var isScaledDown;var $container=self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');if(!self.current||self.isClosing){return}
if(self.isZoomable()){$container.addClass('fancybox-is-zoomable');if(nextWidth!==undefined&&nextHeight!==undefined){isScaledDown=nextWidth<self.current.width&&nextHeight<self.current.height}else{isScaledDown=self.isScaledDown()}
if(isScaledDown){$container.addClass('fancybox-can-zoomIn')}else{if(self.current.opts.touch){$container.addClass('fancybox-can-drag')}else{$container.addClass('fancybox-can-zoomOut')}}}else if(self.current.opts.touch){$container.addClass('fancybox-can-drag')}},isZoomable:function(){var self=this;var current=self.current;var fitPos;if(!current||self.isClosing){return}
if(current.type==='image'&&current.isLoaded&&!current.hasError&&(current.opts.clickContent==='zoom'||($.isFunction(current.opts.clickContent)&&current.opts.clickContent(current)==="zoom"))){fitPos=self.getFitPos(current);if(current.width>fitPos.width||current.height>fitPos.height){return!0}}
return!1},isScaledDown:function(){var self=this;var current=self.current;var $what=current.$content;var rez=!1;if($what){rez=$.fancybox.getTranslate($what);rez=rez.width<current.width||rez.height<current.height}
return rez},canPan:function(){var self=this;var current=self.current;var $what=current.$content;var rez=!1;if($what){rez=self.getFitPos(current);rez=Math.abs($what.width()-rez.width)>1||Math.abs($what.height()-rez.height)>1}
return rez},loadSlide:function(slide){var self=this,type,$slide;var ajaxLoad;if(slide.isLoading){return}
if(slide.isLoaded){return}
slide.isLoading=!0;self.trigger('beforeLoad',slide);type=slide.type;$slide=slide.$slide;$slide.off('refresh').trigger('onReset').addClass('fancybox-slide--'+(type||'unknown')).addClass(slide.opts.slideClass);switch(type){case 'image':self.setImage(slide);break;case 'iframe':self.setIframe(slide);break;case 'html':self.setContent(slide,slide.src||slide.content);break;case 'inline':if($(slide.src).length){self.setContent(slide,$(slide.src))}else{self.setError(slide)}
break;case 'ajax':self.showLoading(slide);ajaxLoad=$.ajax($.extend({},slide.opts.ajax.settings,{url:slide.src,success:function(data,textStatus){if(textStatus==='success'){self.setContent(slide,data)}},error:function(jqXHR,textStatus){if(jqXHR&&textStatus!=='abort'){self.setError(slide)}}}));$slide.one('onReset',function(){ajaxLoad.abort()});break;case 'video':self.setContent(slide,'<video controls>'+'<source src="'+slide.src+'" type="'+slide.opts.videoFormat+'">'+'Your browser doesn\'t support HTML5 video'+'</video>');break;default:self.setError(slide);break}
return!0},setImage:function(slide){var self=this;var srcset=slide.opts.srcset||slide.opts.image.srcset;var found,temp,pxRatio,windowWidth;if(srcset){pxRatio=window.devicePixelRatio||1;windowWidth=window.innerWidth*pxRatio;temp=srcset.split(',').map(function(el){var ret={};el.trim().split(/\s+/).forEach(function(el,i){var value=parseInt(el.substring(0,el.length-1),10);if(i===0){return(ret.url=el)}
if(value){ret.value=value;ret.postfix=el[el.length-1]}});return ret});temp.sort(function(a,b){return a.value-b.value});for(var j=0;j<temp.length;j++){var el=temp[j];if((el.postfix==='w'&&el.value>=windowWidth)||(el.postfix==='x'&&el.value>=pxRatio)){found=el;break}}
if(!found&&temp.length){found=temp[temp.length-1]}
if(found){slide.src=found.url;if(slide.width&&slide.height&&found.postfix=='w'){slide.height=(slide.width/slide.height)*found.value;slide.width=found.value}}}
slide.$content=$('<div class="fancybox-image-wrap"></div>').addClass('fancybox-is-hidden').appendTo(slide.$slide);if(slide.opts.preload!==!1&&slide.opts.width&&slide.opts.height&&(slide.opts.thumb||slide.opts.$thumb)){slide.width=slide.opts.width;slide.height=slide.opts.height;slide.$ghost=$('<img />').one('error',function(){$(this).remove();slide.$ghost=null;self.setBigImage(slide)}).one('load',function(){self.afterLoad(slide);self.setBigImage(slide)}).addClass('fancybox-image').appendTo(slide.$content).attr('src',slide.opts.thumb||slide.opts.$thumb.attr('src'))}else{self.setBigImage(slide)}},setBigImage:function(slide){var self=this;var $img=$('<img />');slide.$image=$img.one('error',function(){self.setError(slide)}).one('load',function(){clearTimeout(slide.timouts);slide.timouts=null;if(self.isClosing){return}
slide.width=slide.opts.width||this.naturalWidth;slide.height=slide.opts.height||this.naturalHeight;if(slide.opts.image.srcset){$img.attr('sizes','100vw').attr('srcset',slide.opts.image.srcset)}
self.hideLoading(slide);if(slide.$ghost){slide.timouts=setTimeout(function(){slide.timouts=null;slide.$ghost.hide()},Math.min(300,Math.max(1000,slide.height/1600)))}else{self.afterLoad(slide)}}).addClass('fancybox-image').attr('src',slide.src).appendTo(slide.$content);if(($img[0].complete||$img[0].readyState=="complete")&&$img[0].naturalWidth&&$img[0].naturalHeight){$img.trigger('load')}else if($img[0].error){$img.trigger('error')}else{slide.timouts=setTimeout(function(){if(!$img[0].complete&&!slide.hasError){self.showLoading(slide)}},100)}},setIframe:function(slide){var self=this,opts=slide.opts.iframe,$slide=slide.$slide,$iframe;slide.$content=$('<div class="fancybox-content'+(opts.preload?' fancybox-is-hidden':'')+'"></div>').css(opts.css).appendTo($slide);$iframe=$(opts.tpl.replace(/\{rnd\}/g,new Date().getTime())).attr(opts.attr).appendTo(slide.$content);if(opts.preload){self.showLoading(slide);$iframe.on('load.fb error.fb',function(e){this.isReady=1;slide.$slide.trigger('refresh');self.afterLoad(slide)});$slide.on('refresh.fb',function(){var $wrap=slide.$content,frameWidth=opts.css.width,frameHeight=opts.css.height,scrollWidth,$contents,$body;if($iframe[0].isReady!==1){return}
try{$contents=$iframe.contents();$body=$contents.find('body')}catch(ignore){}
if($body&&$body.length){if(frameWidth===undefined){scrollWidth=$iframe[0].contentWindow.document.documentElement.scrollWidth;frameWidth=Math.ceil($body.outerWidth(!0)+($wrap.width()-scrollWidth));frameWidth+=$wrap.outerWidth()-$wrap.innerWidth()}
if(frameHeight===undefined){frameHeight=Math.ceil($body.outerHeight(!0));frameHeight+=$wrap.outerHeight()-$wrap.innerHeight()}
if(frameWidth){$wrap.width(frameWidth)}
if(frameHeight){$wrap.height(frameHeight)}}
$wrap.removeClass('fancybox-is-hidden')})}else{this.afterLoad(slide)}
$iframe.attr('src',slide.src);if(slide.opts.smallBtn===!0){slide.$content.prepend(self.translate(slide,slide.opts.btnTpl.smallBtn))}
$slide.one('onReset',function(){try{$(this).find('iframe').hide().attr('src','//about:blank')}catch(ignore){}
$(this).empty();slide.isLoaded=!1})},setContent:function(slide,content){var self=this;if(self.isClosing){return}
self.hideLoading(slide);slide.$slide.empty();if(isQuery(content)&&content.parent().length){content.parent('.fancybox-slide--inline').trigger('onReset');slide.$placeholder=$('<div></div>').hide().insertAfter(content);content.css('display','inline-block')}else if(!slide.hasError){if($.type(content)==='string'){content=$('<div>').append($.trim(content)).contents();if(content[0].nodeType===3){content=$('<div>').html(content)}}
if(slide.opts.filter){content=$('<div>').html(content).find(slide.opts.filter)}}
slide.$slide.one('onReset',function(){$(this).find('video,audio').trigger('pause');if(slide.$placeholder){slide.$placeholder.after(content.hide()).remove();slide.$placeholder=null}
if(slide.$smallBtn){slide.$smallBtn.remove();slide.$smallBtn=null}
if(!slide.hasError){$(this).empty();slide.isLoaded=!1}});slide.$content=$(content).appendTo(slide.$slide);this.afterLoad(slide)},setError:function(slide){slide.hasError=!0;slide.$slide.removeClass('fancybox-slide--'+slide.type);this.setContent(slide,this.translate(slide,slide.opts.errorTpl))},showLoading:function(slide){var self=this;slide=slide||self.current;if(slide&&!slide.$spinner){slide.$spinner=$(self.opts.spinnerTpl).appendTo(slide.$slide)}},hideLoading:function(slide){var self=this;slide=slide||self.current;if(slide&&slide.$spinner){slide.$spinner.remove();delete slide.$spinner}},afterLoad:function(slide){var self=this;if(self.isClosing){return}
slide.isLoading=!1;slide.isLoaded=!0;self.trigger('afterLoad',slide);self.hideLoading(slide);if(slide.opts.smallBtn&&!slide.$smallBtn){slide.$smallBtn=$(self.translate(slide,slide.opts.btnTpl.smallBtn)).appendTo(slide.$content.filter('div,form').first())}
if(slide.opts.protect&&slide.$content&&!slide.hasError){slide.$content.on('contextmenu.fb',function(e){if(e.button==2){e.preventDefault()}
return!0});if(slide.type==='image'){$('<div class="fancybox-spaceball"></div>').appendTo(slide.$content)}}
self.revealContent(slide)},revealContent:function(slide){var self=this;var $slide=slide.$slide;var effect,effectClassName,duration,opacity,end,start=!1;effect=slide.opts[self.firstRun?'animationEffect':'transitionEffect'];duration=slide.opts[self.firstRun?'animationDuration':'transitionDuration'];duration=parseInt(slide.forcedDuration===undefined?duration:slide.forcedDuration,10);if(slide.isMoved||slide.pos!==self.currPos||!duration){effect=!1}
if(effect==='zoom'&&!(slide.pos===self.currPos&&duration&&slide.type==='image'&&!slide.hasError&&(start=self.getThumbPos(slide)))){effect='fade'}
if(effect==='zoom'){end=self.getFitPos(slide);end.scaleX=end.width/start.width;end.scaleY=end.height/start.height;delete end.width;delete end.height;opacity=slide.opts.zoomOpacity;if(opacity=='auto'){opacity=Math.abs(slide.width/slide.height-start.width/start.height)>0.1}
if(opacity){start.opacity=0.1;end.opacity=1}
$.fancybox.setTranslate(slide.$content.removeClass('fancybox-is-hidden'),start);forceRedraw(slide.$content);$.fancybox.animate(slide.$content,end,duration,function(){self.complete()});return}
self.updateSlide(slide);if(!effect){forceRedraw($slide);slide.$content.removeClass('fancybox-is-hidden');if(slide.pos===self.currPos){self.complete()}
return}
$.fancybox.stop($slide);effectClassName='fancybox-animated fancybox-slide--'+(slide.pos>=self.prevPos?'next':'previous')+' fancybox-fx-'+effect;$slide.removeAttr('style').removeClass('fancybox-slide--current fancybox-slide--next fancybox-slide--previous').addClass(effectClassName);slide.$content.removeClass('fancybox-is-hidden');forceRedraw($slide);$.fancybox.animate($slide,'fancybox-slide--current',duration,function(e){$slide.removeClass(effectClassName).removeAttr('style');if(slide.pos===self.currPos){self.complete()}},!0)},getThumbPos:function(slide){var self=this;var rez=!1;var isElementVisible=function($el){var element=$el[0];var elementRect=element.getBoundingClientRect();var parentRects=[];var visibleInAllParents;while(element.parentElement!==null){if($(element.parentElement).css('overflow')==='hidden'||$(element.parentElement).css('overflow')==='auto'){parentRects.push(element.parentElement.getBoundingClientRect())}
element=element.parentElement}
visibleInAllParents=parentRects.every(function(parentRect){var visiblePixelX=Math.min(elementRect.right,parentRect.right)-Math.max(elementRect.left,parentRect.left);var visiblePixelY=Math.min(elementRect.bottom,parentRect.bottom)-Math.max(elementRect.top,parentRect.top);return visiblePixelX>0&&visiblePixelY>0});return visibleInAllParents&&elementRect.bottom>0&&elementRect.right>0&&elementRect.left<$(window).width()&&elementRect.top<$(window).height()};var $thumb=slide.opts.$thumb;var thumbPos=$thumb?$thumb.offset():0;var slidePos;if(thumbPos&&$thumb[0].ownerDocument===document&&isElementVisible($thumb)){slidePos=self.$refs.stage.offset();rez={top:thumbPos.top-slidePos.top+parseFloat($thumb.css("border-top-width")||0),left:thumbPos.left-slidePos.left+parseFloat($thumb.css("border-left-width")||0),width:$thumb.width(),height:$thumb.height(),scaleX:1,scaleY:1}}
return rez},complete:function(){var self=this,current=self.current,slides={},promise;if(current.isMoved||!current.isLoaded||current.isComplete){return}
current.isComplete=!0;current.$slide.siblings().trigger('onReset');self.preload('inline');forceRedraw(current.$slide);current.$slide.addClass('fancybox-slide--complete');$.each(self.slides,function(key,slide){if(slide.pos>=self.currPos-1&&slide.pos<=self.currPos+1){slides[slide.pos]=slide}else if(slide){$.fancybox.stop(slide.$slide);slide.$slide.off().remove()}});self.slides=slides;self.updateCursor();self.trigger('afterShow');current.$slide.find('video,audio').first().trigger('play');if($(document.activeElement).is('[disabled]')||(current.opts.autoFocus&&!(current.type=='image'||current.type==='iframe'))){self.focus()}},preload:function(type){var self=this,next=self.slides[self.currPos+1],prev=self.slides[self.currPos-1];if(next&&next.type===type){self.loadSlide(next)}
if(prev&&prev.type===type){self.loadSlide(prev)}},focus:function(){var current=this.current;var $el;if(this.isClosing){return}
if(current&&current.isComplete){$el=current.$slide.find('input[autofocus]:enabled:visible:first');if(!$el.length){$el=current.$slide.find('button,:input,[tabindex],a').filter(':enabled:visible:first')}}
$el=$el&&$el.length?$el:this.$refs.container;$el.focus()},activate:function(){var self=this;$('.fancybox-container').each(function(){var instance=$(this).data('FancyBox');if(instance&&instance.id!==self.id&&!instance.isClosing){instance.trigger('onDeactivate');instance.removeEvents();instance.isVisible=!1}});self.isVisible=!0;if(self.current||self.isIdle){self.update();self.updateControls()}
self.trigger('onActivate');self.addEvents()},close:function(e,d){var self=this;var current=self.current;var effect,duration;var $what,opacity,start,end;var done=function(){self.cleanUp(e)};if(self.isClosing){return!1}
self.isClosing=!0;if(self.trigger('beforeClose',e)===!1){self.isClosing=!1;requestAFrame(function(){self.update()});return!1}
self.removeEvents();if(current.timouts){clearTimeout(current.timouts)}
$what=current.$content;effect=current.opts.animationEffect;duration=$.isNumeric(d)?d:(effect?current.opts.animationDuration:0);current.$slide.off(transitionEnd).removeClass('fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated');current.$slide.siblings().trigger('onReset').remove();if(duration){self.$refs.container.removeClass('fancybox-is-open').addClass('fancybox-is-closing')}
self.hideLoading(current);self.hideControls();self.updateCursor();if(effect==='zoom'&&!(e!==!0&&$what&&duration&&current.type==='image'&&!current.hasError&&(end=self.getThumbPos(current)))){effect='fade'}
if(effect==='zoom'){$.fancybox.stop($what);start=$.fancybox.getTranslate($what);start.width=start.width*start.scaleX;start.height=start.height*start.scaleY;opacity=current.opts.zoomOpacity;if(opacity=='auto'){opacity=Math.abs(current.width/current.height-end.width/end.height)>0.1}
if(opacity){end.opacity=0}
start.scaleX=start.width/end.width;start.scaleY=start.height/end.height;start.width=end.width;start.height=end.height;$.fancybox.setTranslate(current.$content,start);forceRedraw(current.$content);$.fancybox.animate(current.$content,end,duration,done);return!0}
if(effect&&duration){if(e===!0){setTimeout(done,duration)}else{$.fancybox.animate(current.$slide.removeClass('fancybox-slide--current'),'fancybox-animated fancybox-slide--previous fancybox-fx-'+effect,duration,done)}}else{done()}
return!0},cleanUp:function(e){var self=this,$body=$('body'),instance,offset;self.current.$slide.trigger('onReset');self.$refs.container.empty().remove();self.trigger('afterClose',e);if(self.$lastFocus&&!!self.current.opts.backFocus){self.$lastFocus.focus()}
self.current=null;instance=$.fancybox.getInstance();if(instance){instance.activate()}else{$W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft);$body.removeClass('fancybox-active compensate-for-scrollbar');if($body.hasClass('fancybox-iosfix')){offset=parseInt(document.body.style.top,10);$body.removeClass('fancybox-iosfix').css('top','').scrollTop(offset*-1)}
$('#fancybox-style-noscroll').remove()}},trigger:function(name,slide){var args=Array.prototype.slice.call(arguments,1),self=this,obj=slide&&slide.opts?slide:self.current,rez;if(obj){args.unshift(obj)}else{obj=self}
args.unshift(self);if($.isFunction(obj.opts[name])){rez=obj.opts[name].apply(obj,args)}
if(rez===!1){return rez}
if(name==='afterClose'||!self.$refs){$D.trigger(name+'.fb',args)}else{self.$refs.container.trigger(name+'.fb',args)}},updateControls:function(force){var self=this;var current=self.current,index=current.index,caption=current.opts.caption,$container=self.$refs.container,$caption=self.$refs.caption;current.$slide.trigger('refresh');self.$caption=caption&&caption.length?$caption.html(caption):null;if(!self.isHiddenControls&&!self.isIdle){self.showControls()}
$container.find('[data-fancybox-count]').html(self.group.length);$container.find('[data-fancybox-index]').html(index+1);$container.find('[data-fancybox-prev]').prop('disabled',(!current.opts.loop&&index<=0));$container.find('[data-fancybox-next]').prop('disabled',(!current.opts.loop&&index>=self.group.length-1));if(current.type==='image'){$container.find('[data-fancybox-download]').attr('href',current.opts.image.src||current.src).show()}else{$container.find('[data-fancybox-download],[data-fancybox-zoom]').hide()}},hideControls:function(){this.isHiddenControls=!0;this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav')},showControls:function(){var self=this;var opts=self.current?self.current.opts:self.opts;var $container=self.$refs.container;self.isHiddenControls=!1;self.idleSecondsCounter=0;$container.toggleClass('fancybox-show-toolbar',!!(opts.toolbar&&opts.buttons)).toggleClass('fancybox-show-infobar',!!(opts.infobar&&self.group.length>1)).toggleClass('fancybox-show-nav',!!(opts.arrows&&self.group.length>1)).toggleClass('fancybox-is-modal',!!opts.modal);if(self.$caption){$container.addClass('fancybox-show-caption ')}else{$container.removeClass('fancybox-show-caption')}},toggleControls:function(){if(this.isHiddenControls){this.showControls()}else{this.hideControls()}},});$.fancybox={version:"3.2.10",defaults:defaults,getInstance:function(command){var instance=$('.fancybox-container:not(".fancybox-is-closing"):last').data('FancyBox');var args=Array.prototype.slice.call(arguments,1);if(instance instanceof FancyBox){if($.type(command)==='string'){instance[command].apply(instance,args)}else if($.type(command)==='function'){command.apply(instance,args)}
return instance}
return!1},open:function(items,opts,index){return new FancyBox(items,opts,index)},close:function(all){var instance=this.getInstance();if(instance){instance.close();if(all===!0){this.close()}}},destroy:function(){this.close(!0);$D.off('click.fb-start')},isMobile:document.createTouch!==undefined&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:(function(){var div=document.createElement('div');return window.getComputedStyle&&window.getComputedStyle(div).getPropertyValue('transform')&&!(document.documentMode&&document.documentMode<11)}()),getTranslate:function($el){var matrix;if(!$el||!$el.length){return!1}
matrix=$el.eq(0).css('transform');if(matrix&&matrix.indexOf('matrix')!==-1){matrix=matrix.split('(')[1];matrix=matrix.split(')')[0];matrix=matrix.split(',')}else{matrix=[]}
if(matrix.length){if(matrix.length>10){matrix=[matrix[13],matrix[12],matrix[0],matrix[5]]}else{matrix=[matrix[5],matrix[4],matrix[0],matrix[3]]}
matrix=matrix.map(parseFloat)}else{matrix=[0,0,1,1];var transRegex=/\.*translate\((.*)px,(.*)px\)/i;var transRez=transRegex.exec($el.eq(0).attr('style'));if(transRez){matrix[0]=parseFloat(transRez[2]);matrix[1]=parseFloat(transRez[1])}}
return{top:matrix[0],left:matrix[1],scaleX:matrix[2],scaleY:matrix[3],opacity:parseFloat($el.css('opacity')),width:$el.width(),height:$el.height()}},setTranslate:function($el,props){var str='';var css={};if(!$el||!props){return}
if(props.left!==undefined||props.top!==undefined){str=(props.left===undefined?$el.position().left:props.left)+'px, '+(props.top===undefined?$el.position().top:props.top)+'px';if(this.use3d){str='translate3d('+str+', 0px)'}else{str='translate('+str+')'}}
if(props.scaleX!==undefined&&props.scaleY!==undefined){str=(str.length?str+' ':'')+'scale('+props.scaleX+', '+props.scaleY+')'}
if(str.length){css.transform=str}
if(props.opacity!==undefined){css.opacity=props.opacity}
if(props.width!==undefined){css.width=props.width}
if(props.height!==undefined){css.height=props.height}
return $el.css(css)},animate:function($el,to,duration,callback,leaveAnimationName){if($.isFunction(duration)){callback=duration;duration=null}
if(!$.isPlainObject(to)){$el.removeAttr('style')}
$el.on(transitionEnd,function(e){if(e&&e.originalEvent&&(!$el.is(e.originalEvent.target)||e.originalEvent.propertyName=='z-index')){return}
$.fancybox.stop($el);if($.isPlainObject(to)){if(to.scaleX!==undefined&&to.scaleY!==undefined){$el.css('transition-duration','');to.width=Math.round($el.width()*to.scaleX);to.height=Math.round($el.height()*to.scaleY);to.scaleX=1;to.scaleY=1;$.fancybox.setTranslate($el,to)}
if(leaveAnimationName===!1){$el.removeAttr('style')}}else if(leaveAnimationName!==!0){$el.removeClass(to)}
if($.isFunction(callback)){callback(e)}});if($.isNumeric(duration)){$el.css('transition-duration',duration+'ms')}
if($.isPlainObject(to)){$.fancybox.setTranslate($el,to)}else{$el.addClass(to)}
if(to.scaleX&&$el.hasClass('fancybox-image-wrap')){$el.parent().addClass('fancybox-is-scaling')}
$el.data("timer",setTimeout(function(){$el.trigger('transitionend')},duration+16))},stop:function($el){clearTimeout($el.data("timer"));$el.off('transitionend').css('transition-duration','');if($el.hasClass('fancybox-image-wrap')){$el.parent().removeClass('fancybox-is-scaling')}}};function _run(e){var $target=$(e.currentTarget),opts=e.data?e.data.options:{},value=$target.attr('data-fancybox')||'',index=0,items=[];if(e.isDefaultPrevented()){return}
e.preventDefault();if(value){items=opts.selector?$(opts.selector):(e.data?e.data.items:[]);items=items.length?items.filter('[data-fancybox="'+value+'"]'):$('[data-fancybox="'+value+'"]');index=items.index($target);if(index<0){index=0}}else{items=[$target]}
$.fancybox.open(items,opts,index)}
$.fn.fancybox=function(options){var selector;options=options||{};selector=options.selector||!1;if(selector){$('body').off('click.fb-start',selector).on('click.fb-start',selector,{options:options},_run)}else{this.off('click.fb-start').on('click.fb-start',{items:this,options:options},_run)}
return this};$D.on('click.fb-start','[data-fancybox]',_run)}(window,document,window.jQuery||jQuery));(function($){'use strict';var format=function(url,rez,params){if(!url){return}
params=params||'';if($.type(params)==="object"){params=$.param(params,!0)}
$.each(rez,function(key,value){url=url.replace('$'+key,value||'')});if(params.length){url+=(url.indexOf('?')>0?'&':'?')+params}
return url};var defaults={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:'transparent',enablejsapi:1,html5:1},paramPlace:8,type:'iframe',url:'//www.youtube.com/embed/$4',thumb:'//img.youtube.com/vi/$4/hqdefault.jpg'},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:'iframe',url:'//player.vimeo.com/video/$2'},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:'iframe',url:'//www.metacafe.com/embed/$1/?ap=1'},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:'iframe',url:'//www.dailymotion.com/embed/video/$1'},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:'iframe',url:'//vine.co/v/$1/embed/simple'},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:'image',url:'//$1/p/$2/media/?size=l'},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:'iframe',url:function(rez){return'//maps.google.'+rez[2]+'/?ll='+(rez[9]?rez[9]+'&z='+Math.floor(rez[10])+(rez[12]?rez[12].replace(/^\//,"&"):''):rez[12])+'&output='+(rez[12]&&rez[12].indexOf('layer=c')>0?'svembed':'embed')}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:'iframe',url:function(rez){return'//maps.google.'+rez[2]+'/maps?q='+rez[5].replace('query=','q=').replace('api=1','')+'&output=embed'}}};$(document).on('objectNeedsType.fb',function(e,instance,item){var url=item.src||'',type=!1,media,thumb,rez,params,urlParams,paramObj,provider;media=$.extend(!0,{},defaults,item.opts.media);$.each(media,function(providerName,providerOpts){rez=url.match(providerOpts.matcher);if(!rez){return}
type=providerOpts.type;paramObj={};if(providerOpts.paramPlace&&rez[providerOpts.paramPlace]){urlParams=rez[providerOpts.paramPlace];if(urlParams[0]=='?'){urlParams=urlParams.substring(1)}
urlParams=urlParams.split('&');for(var m=0;m<urlParams.length;++m){var p=urlParams[m].split('=',2);if(p.length==2){paramObj[p[0]]=decodeURIComponent(p[1].replace(/\+/g," "))}}}
params=$.extend(!0,{},providerOpts.params,item.opts[providerName],paramObj);url=$.type(providerOpts.url)==="function"?providerOpts.url.call(this,rez,params,item):format(providerOpts.url,rez,params);thumb=$.type(providerOpts.thumb)==="function"?providerOpts.thumb.call(this,rez,params,item):format(providerOpts.thumb,rez);if(providerName==='vimeo'){url=url.replace('&%23','#')}
return!1});if(type){item.src=url;item.type=type;if(!item.opts.thumb&&!(item.opts.$thumb&&item.opts.$thumb.length)){item.opts.thumb=thumb}
if(type==='iframe'){$.extend(!0,item.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}});item.contentProvider=provider;item.opts.slideClass+=' fancybox-slide--'+(provider=='gmap_place'||provider=='gmap_search'?'map':'video')}}else if(url){item.type=item.opts.defaultType}})}(window.jQuery||jQuery));(function(window,document,$){'use strict';var requestAFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60)}})();var cancelAFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(id){window.clearTimeout(id)}})();var pointers=function(e){var result=[];e=e.originalEvent||e||window.e;e=e.touches&&e.touches.length?e.touches:(e.changedTouches&&e.changedTouches.length?e.changedTouches:[e]);for(var key in e){if(e[key].pageX){result.push({x:e[key].pageX,y:e[key].pageY})}else if(e[key].clientX){result.push({x:e[key].clientX,y:e[key].clientY})}}
return result};var distance=function(point2,point1,what){if(!point1||!point2){return 0}
if(what==='x'){return point2.x-point1.x}else if(what==='y'){return point2.y-point1.y}
return Math.sqrt(Math.pow(point2.x-point1.x,2)+Math.pow(point2.y-point1.y,2))};var isClickable=function($el){if($el.is('a,area,button,[role="button"],input,label,select,summary,textarea')||$.isFunction($el.get(0).onclick)||$el.data('selectable')){return!0}
for(var i=0,atts=$el[0].attributes,n=atts.length;i<n;i++){if(atts[i].nodeName.substr(0,14)==='data-fancybox-'){return!0}}
return!1};var hasScrollbars=function(el){var overflowY=window.getComputedStyle(el)['overflow-y'];var overflowX=window.getComputedStyle(el)['overflow-x'];var vertical=(overflowY==='scroll'||overflowY==='auto')&&el.scrollHeight>el.clientHeight;var horizontal=(overflowX==='scroll'||overflowX==='auto')&&el.scrollWidth>el.clientWidth;return vertical||horizontal};var isScrollable=function($el){var rez=!1;while(!0){rez=hasScrollbars($el.get(0));if(rez){break}
$el=$el.parent();if(!$el.length||$el.hasClass('fancybox-stage')||$el.is('body')){break}}
return rez};var Guestures=function(instance){var self=this;self.instance=instance;self.$bg=instance.$refs.bg;self.$stage=instance.$refs.stage;self.$container=instance.$refs.container;self.destroy();self.$container.on('touchstart.fb.touch mousedown.fb.touch',$.proxy(self,'ontouchstart'))};Guestures.prototype.destroy=function(){this.$container.off('.fb.touch')};Guestures.prototype.ontouchstart=function(e){var self=this;var $target=$(e.target);var instance=self.instance;var current=instance.current;var $content=current.$content;var isTouchDevice=(e.type=='touchstart');if(isTouchDevice){self.$container.off('mousedown.fb.touch')}
if(e.originalEvent&&e.originalEvent.button==2){return}
if(!$target.length||isClickable($target)||isClickable($target.parent())){return}
if(!$target.is('img')&&e.originalEvent.clientX>$target[0].clientWidth+$target.offset().left){return}
if(!current||self.instance.isAnimating||self.instance.isClosing){e.stopPropagation();e.preventDefault();return}
self.realPoints=self.startPoints=pointers(e);if(!self.startPoints){return}
e.stopPropagation();self.startEvent=e;self.canTap=!0;self.$target=$target;self.$content=$content;self.opts=current.opts.touch;self.isPanning=!1;self.isSwiping=!1;self.isZooming=!1;self.isScrolling=!1;self.sliderStartPos=self.sliderLastPos||{top:0,left:0};self.contentStartPos=$.fancybox.getTranslate(self.$content);self.contentLastPos=null;self.startTime=new Date().getTime();self.distanceX=self.distanceY=self.distance=0;self.canvasWidth=Math.round(current.$slide[0].clientWidth);self.canvasHeight=Math.round(current.$slide[0].clientHeight);$(document).off('.fb.touch').on(isTouchDevice?'touchend.fb.touch touchcancel.fb.touch':'mouseup.fb.touch mouseleave.fb.touch',$.proxy(self,"ontouchend")).on(isTouchDevice?'touchmove.fb.touch':'mousemove.fb.touch',$.proxy(self,"ontouchmove"));if($.fancybox.isMobile){document.addEventListener('scroll',self.onscroll,!0)}
if(!(self.opts||instance.canPan())||!($target.is(self.$stage)||self.$stage.find($target).length)){if($target.is('img')){e.preventDefault()}
return}
if(!($.fancybox.isMobile&&(isScrollable($target)||isScrollable($target.parent())))){e.preventDefault()}
if(self.startPoints.length===1){if(current.type==='image'&&(self.contentStartPos.width>self.canvasWidth+1||self.contentStartPos.height>self.canvasHeight+1)){$.fancybox.stop(self.$content);self.$content.css('transition-duration','');self.isPanning=!0}else{self.isSwiping=!0}
self.$container.addClass('fancybox-controls--isGrabbing')}
if(self.startPoints.length===2&&!instance.isAnimating&&!current.hasError&&current.type==='image'&&(current.isLoaded||current.$ghost)){self.canTap=!1;self.isSwiping=!1;self.isPanning=!1;self.isZooming=!0;$.fancybox.stop(self.$content);self.$content.css('transition-duration','');self.centerPointStartX=((self.startPoints[0].x+self.startPoints[1].x)*0.5)-$(window).scrollLeft();self.centerPointStartY=((self.startPoints[0].y+self.startPoints[1].y)*0.5)-$(window).scrollTop();self.percentageOfImageAtPinchPointX=(self.centerPointStartX-self.contentStartPos.left)/self.contentStartPos.width;self.percentageOfImageAtPinchPointY=(self.centerPointStartY-self.contentStartPos.top)/self.contentStartPos.height;self.startDistanceBetweenFingers=distance(self.startPoints[0],self.startPoints[1])}};Guestures.prototype.onscroll=function(e){self.isScrolling=!0};Guestures.prototype.ontouchmove=function(e){var self=this,$target=$(e.target);if(self.isScrolling||!($target.is(self.$stage)||self.$stage.find($target).length)){self.canTap=!1;return}
self.newPoints=pointers(e);if(!(self.opts||self.instance.canPan())||!self.newPoints||!self.newPoints.length){return}
if(!(self.isSwiping&&self.isSwiping===!0)){e.preventDefault()}
self.distanceX=distance(self.newPoints[0],self.startPoints[0],'x');self.distanceY=distance(self.newPoints[0],self.startPoints[0],'y');self.distance=distance(self.newPoints[0],self.startPoints[0])
if(self.distance>0){if(self.isSwiping){self.onSwipe(e)}else if(self.isPanning){self.onPan()}else if(self.isZooming){self.onZoom()}}};Guestures.prototype.onSwipe=function(e){var self=this,swiping=self.isSwiping,left=self.sliderStartPos.left||0,angle;if(swiping===!0){if(Math.abs(self.distance)>10){self.canTap=!1;if(self.instance.group.length<2&&self.opts.vertical){self.isSwiping='y'}else if(self.instance.isDragging||self.opts.vertical===!1||(self.opts.vertical==='auto'&&$(window).width()>800)){self.isSwiping='x'}else{angle=Math.abs(Math.atan2(self.distanceY,self.distanceX)*180/Math.PI);self.isSwiping=(angle>45&&angle<135)?'y':'x'}
self.canTap=!1;if(self.isSwiping==='y'&&$.fancybox.isMobile&&(isScrollable(self.$target)||isScrollable(self.$target.parent()))){self.isScrolling=!0;return}
self.instance.isDragging=self.isSwiping;self.startPoints=self.newPoints;$.each(self.instance.slides,function(index,slide){$.fancybox.stop(slide.$slide);slide.$slide.css('transition-duration','');slide.inTransition=!1;if(slide.pos===self.instance.current.pos){self.sliderStartPos.left=$.fancybox.getTranslate(slide.$slide).left}});if(self.instance.SlideShow&&self.instance.SlideShow.isActive){self.instance.SlideShow.stop()}}
return}
if(swiping=='x'){if(self.distanceX>0&&(self.instance.group.length<2||(self.instance.current.index===0&&!self.instance.current.opts.loop))){left=left+Math.pow(self.distanceX,0.8)}else if(self.distanceX<0&&(self.instance.group.length<2||(self.instance.current.index===self.instance.group.length-1&&!self.instance.current.opts.loop))){left=left-Math.pow(-self.distanceX,0.8)}else{left=left+self.distanceX}}
self.sliderLastPos={top:swiping=='x'?0:self.sliderStartPos.top+self.distanceY,left:left};if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.requestId=requestAFrame(function(){if(self.sliderLastPos){$.each(self.instance.slides,function(index,slide){var pos=slide.pos-self.instance.currPos;$.fancybox.setTranslate(slide.$slide,{top:self.sliderLastPos.top,left:self.sliderLastPos.left+(pos*self.canvasWidth)+(pos*slide.opts.gutter)})});self.$container.addClass('fancybox-is-sliding')}})};Guestures.prototype.onPan=function(){var self=this;if(distance(self.newPoints[0],self.realPoints[0])<($.fancybox.isMobile?10:5)){self.startPoints=self.newPoints;return}
self.canTap=!1;self.contentLastPos=self.limitMovement();if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.requestId=requestAFrame(function(){$.fancybox.setTranslate(self.$content,self.contentLastPos)})};Guestures.prototype.limitMovement=function(){var self=this;var canvasWidth=self.canvasWidth;var canvasHeight=self.canvasHeight;var distanceX=self.distanceX;var distanceY=self.distanceY;var contentStartPos=self.contentStartPos;var currentOffsetX=contentStartPos.left;var currentOffsetY=contentStartPos.top;var currentWidth=contentStartPos.width;var currentHeight=contentStartPos.height;var minTranslateX,minTranslateY,maxTranslateX,maxTranslateY,newOffsetX,newOffsetY;if(currentWidth>canvasWidth){newOffsetX=currentOffsetX+distanceX}else{newOffsetX=currentOffsetX}
newOffsetY=currentOffsetY+distanceY;minTranslateX=Math.max(0,canvasWidth*0.5-currentWidth*0.5);minTranslateY=Math.max(0,canvasHeight*0.5-currentHeight*0.5);maxTranslateX=Math.min(canvasWidth-currentWidth,canvasWidth*0.5-currentWidth*0.5);maxTranslateY=Math.min(canvasHeight-currentHeight,canvasHeight*0.5-currentHeight*0.5);if(currentWidth>canvasWidth){if(distanceX>0&&newOffsetX>minTranslateX){newOffsetX=minTranslateX-1+Math.pow(-minTranslateX+currentOffsetX+distanceX,0.8)||0}
if(distanceX<0&&newOffsetX<maxTranslateX){newOffsetX=maxTranslateX+1-Math.pow(maxTranslateX-currentOffsetX-distanceX,0.8)||0}}
if(currentHeight>canvasHeight){if(distanceY>0&&newOffsetY>minTranslateY){newOffsetY=minTranslateY-1+Math.pow(-minTranslateY+currentOffsetY+distanceY,0.8)||0}
if(distanceY<0&&newOffsetY<maxTranslateY){newOffsetY=maxTranslateY+1-Math.pow(maxTranslateY-currentOffsetY-distanceY,0.8)||0}}
return{top:newOffsetY,left:newOffsetX,scaleX:contentStartPos.scaleX,scaleY:contentStartPos.scaleY}};Guestures.prototype.limitPosition=function(newOffsetX,newOffsetY,newWidth,newHeight){var self=this;var canvasWidth=self.canvasWidth;var canvasHeight=self.canvasHeight;if(newWidth>canvasWidth){newOffsetX=newOffsetX>0?0:newOffsetX;newOffsetX=newOffsetX<canvasWidth-newWidth?canvasWidth-newWidth:newOffsetX}else{newOffsetX=Math.max(0,canvasWidth/2-newWidth/2)}
if(newHeight>canvasHeight){newOffsetY=newOffsetY>0?0:newOffsetY;newOffsetY=newOffsetY<canvasHeight-newHeight?canvasHeight-newHeight:newOffsetY}else{newOffsetY=Math.max(0,canvasHeight/2-newHeight/2)}
return{top:newOffsetY,left:newOffsetX}};Guestures.prototype.onZoom=function(){var self=this;var currentWidth=self.contentStartPos.width;var currentHeight=self.contentStartPos.height;var currentOffsetX=self.contentStartPos.left;var currentOffsetY=self.contentStartPos.top;var endDistanceBetweenFingers=distance(self.newPoints[0],self.newPoints[1]);var pinchRatio=endDistanceBetweenFingers/self.startDistanceBetweenFingers;var newWidth=Math.floor(currentWidth*pinchRatio);var newHeight=Math.floor(currentHeight*pinchRatio);var translateFromZoomingX=(currentWidth-newWidth)*self.percentageOfImageAtPinchPointX;var translateFromZoomingY=(currentHeight-newHeight)*self.percentageOfImageAtPinchPointY;var centerPointEndX=((self.newPoints[0].x+self.newPoints[1].x)/2)-$(window).scrollLeft();var centerPointEndY=((self.newPoints[0].y+self.newPoints[1].y)/2)-$(window).scrollTop();var translateFromTranslatingX=centerPointEndX-self.centerPointStartX;var translateFromTranslatingY=centerPointEndY-self.centerPointStartY;var newOffsetX=currentOffsetX+(translateFromZoomingX+translateFromTranslatingX);var newOffsetY=currentOffsetY+(translateFromZoomingY+translateFromTranslatingY);var newPos={top:newOffsetY,left:newOffsetX,scaleX:self.contentStartPos.scaleX*pinchRatio,scaleY:self.contentStartPos.scaleY*pinchRatio};self.canTap=!1;self.newWidth=newWidth;self.newHeight=newHeight;self.contentLastPos=newPos;if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.requestId=requestAFrame(function(){$.fancybox.setTranslate(self.$content,self.contentLastPos)})};Guestures.prototype.ontouchend=function(e){var self=this;var dMs=Math.max((new Date().getTime())-self.startTime,1);var swiping=self.isSwiping;var panning=self.isPanning;var zooming=self.isZooming;var scrolling=self.isScrolling;self.endPoints=pointers(e);self.$container.removeClass('fancybox-controls--isGrabbing');$(document).off('.fb.touch');document.removeEventListener('scroll',self.onscroll,!0);if(self.requestId){cancelAFrame(self.requestId);self.requestId=null}
self.isSwiping=!1;self.isPanning=!1;self.isZooming=!1;self.isScrolling=!1;self.instance.isDragging=!1;if(self.canTap){return self.onTap(e)}
self.speed=366;self.velocityX=self.distanceX/dMs*0.5;self.velocityY=self.distanceY/dMs*0.5;self.speedX=Math.max(self.speed*0.5,Math.min(self.speed*1.5,(1/Math.abs(self.velocityX))*self.speed));if(panning){self.endPanning()}else if(zooming){self.endZooming()}else{self.endSwiping(swiping,scrolling)}
return};Guestures.prototype.endSwiping=function(swiping,scrolling){var self=this,ret=!1,len=self.instance.group.length;self.sliderLastPos=null;if(swiping=='y'&&!scrolling&&Math.abs(self.distanceY)>50){$.fancybox.animate(self.instance.current.$slide,{top:self.sliderStartPos.top+self.distanceY+(self.velocityY*150),opacity:0},150);ret=self.instance.close(!0,300)}else if(swiping=='x'&&self.distanceX>50&&len>1){ret=self.instance.previous(self.speedX)}else if(swiping=='x'&&self.distanceX<-50&&len>1){ret=self.instance.next(self.speedX)}
if(ret===!1&&(swiping=='x'||swiping=='y')){if(scrolling||len<2){self.instance.centerSlide(self.instance.current,150)}else{self.instance.jumpTo(self.instance.current.index)}}
self.$container.removeClass('fancybox-is-sliding')};Guestures.prototype.endPanning=function(){var self=this;var newOffsetX,newOffsetY,newPos;if(!self.contentLastPos){return}
if(self.opts.momentum===!1){newOffsetX=self.contentLastPos.left;newOffsetY=self.contentLastPos.top}else{newOffsetX=self.contentLastPos.left+(self.velocityX*self.speed);newOffsetY=self.contentLastPos.top+(self.velocityY*self.speed)}
newPos=self.limitPosition(newOffsetX,newOffsetY,self.contentStartPos.width,self.contentStartPos.height);newPos.width=self.contentStartPos.width;newPos.height=self.contentStartPos.height;$.fancybox.animate(self.$content,newPos,330)};Guestures.prototype.endZooming=function(){var self=this;var current=self.instance.current;var newOffsetX,newOffsetY,newPos,reset;var newWidth=self.newWidth;var newHeight=self.newHeight;if(!self.contentLastPos){return}
newOffsetX=self.contentLastPos.left;newOffsetY=self.contentLastPos.top;reset={top:newOffsetY,left:newOffsetX,width:newWidth,height:newHeight,scaleX:1,scaleY:1};$.fancybox.setTranslate(self.$content,reset);if(newWidth<self.canvasWidth&&newHeight<self.canvasHeight){self.instance.scaleToFit(150)}else if(newWidth>current.width||newHeight>current.height){self.instance.scaleToActual(self.centerPointStartX,self.centerPointStartY,150)}else{newPos=self.limitPosition(newOffsetX,newOffsetY,newWidth,newHeight);$.fancybox.setTranslate(self.content,$.fancybox.getTranslate(self.$content));$.fancybox.animate(self.$content,newPos,150)}};Guestures.prototype.onTap=function(e){var self=this;var $target=$(e.target);var instance=self.instance;var current=instance.current;var endPoints=(e&&pointers(e))||self.startPoints;var tapX=endPoints[0]?endPoints[0].x-self.$stage.offset().left:0;var tapY=endPoints[0]?endPoints[0].y-self.$stage.offset().top:0;var where;var process=function(prefix){var action=current.opts[prefix];if($.isFunction(action)){action=action.apply(instance,[current,e])}
if(!action){return}
switch(action){case "close":instance.close(self.startEvent);break;case "toggleControls":instance.toggleControls(!0);break;case "next":instance.next();break;case "nextOrClose":if(instance.group.length>1){instance.next()}else{instance.close(self.startEvent)}
break;case "zoom":if(current.type=='image'&&(current.isLoaded||current.$ghost)){if(instance.canPan()){instance.scaleToFit()}else if(instance.isScaledDown()){instance.scaleToActual(tapX,tapY)}else if(instance.group.length<2){instance.close(self.startEvent)}}
break}};if(e.originalEvent&&e.originalEvent.button==2){return}
if(!$target.is('img')&&tapX>$target[0].clientWidth+$target.offset().left){return}
if($target.is('.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container')){where='Outside'}else if($target.is('.fancybox-slide')){where='Slide'}else if(instance.current.$content&&instance.current.$content.find($target).addBack().filter($target).length){where='Content'}else{return}
if(self.tapped){clearTimeout(self.tapped);self.tapped=null;if(Math.abs(tapX-self.tapX)>50||Math.abs(tapY-self.tapY)>50){return this}
process('dblclick'+where)}else{self.tapX=tapX;self.tapY=tapY;if(current.opts['dblclick'+where]&&current.opts['dblclick'+where]!==current.opts['click'+where]){self.tapped=setTimeout(function(){self.tapped=null;process('click'+where)},500)}else{process('click'+where)}}
return this};$(document).on('onActivate.fb',function(e,instance){if(instance&&!instance.Guestures){instance.Guestures=new Guestures(instance)}})}(window,document,window.jQuery||jQuery));(function(document,$){'use strict';$.extend(!0,$.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M13,12 L27,20 L13,27 Z" />'+'<path d="M15,10 v19 M23,10 v19" />'+'</svg>'+'</button>'},slideShow:{autoStart:!1,speed:3000}});var SlideShow=function(instance){this.instance=instance;this.init()};$.extend(SlideShow.prototype,{timer:null,isActive:!1,$button:null,init:function(){var self=this;self.$button=self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click',function(){self.toggle()});if(self.instance.group.length<2||!self.instance.group[self.instance.currIndex].opts.slideShow){self.$button.hide()}},set:function(force){var self=this;if(self.instance&&self.instance.current&&(force===!0||self.instance.current.opts.loop||self.instance.currIndex<self.instance.group.length-1)){self.timer=setTimeout(function(){if(self.isActive){self.instance.jumpTo((self.instance.currIndex+1)%self.instance.group.length)}},self.instance.current.opts.slideShow.speed)}else{self.stop();self.instance.idleSecondsCounter=0;self.instance.showControls()}},clear:function(){var self=this;clearTimeout(self.timer);self.timer=null},start:function(){var self=this;var current=self.instance.current;if(current){self.isActive=!0;self.$button.attr('title',current.opts.i18n[current.opts.lang].PLAY_STOP).removeClass('fancybox-button--play').addClass('fancybox-button--pause');self.set(!0)}},stop:function(){var self=this;var current=self.instance.current;self.clear();self.$button.attr('title',current.opts.i18n[current.opts.lang].PLAY_START).removeClass('fancybox-button--pause').addClass('fancybox-button--play');self.isActive=!1},toggle:function(){var self=this;if(self.isActive){self.stop()}else{self.start()}}});$(document).on({'onInit.fb':function(e,instance){if(instance&&!instance.SlideShow){instance.SlideShow=new SlideShow(instance)}},'beforeShow.fb':function(e,instance,current,firstRun){var SlideShow=instance&&instance.SlideShow;if(firstRun){if(SlideShow&&current.opts.slideShow.autoStart){SlideShow.start()}}else if(SlideShow&&SlideShow.isActive){SlideShow.clear()}},'afterShow.fb':function(e,instance,current){var SlideShow=instance&&instance.SlideShow;if(SlideShow&&SlideShow.isActive){SlideShow.set()}},'afterKeydown.fb':function(e,instance,current,keypress,keycode){var SlideShow=instance&&instance.SlideShow;if(SlideShow&&current.opts.slideShow&&(keycode===80||keycode===32)&&!$(document.activeElement).is('button,a,input')){keypress.preventDefault();SlideShow.toggle()}},'beforeClose.fb onDeactivate.fb':function(e,instance){var SlideShow=instance&&instance.SlideShow;if(SlideShow){SlideShow.stop()}}});$(document).on("visibilitychange",function(){var instance=$.fancybox.getInstance();var SlideShow=instance&&instance.SlideShow;if(SlideShow&&SlideShow.isActive){if(document.hidden){SlideShow.clear()}else{SlideShow.set()}}})}(document,window.jQuery||jQuery));(function(document,$){'use strict';var fn=(function(){var fnMap=[['requestFullscreen','exitFullscreen','fullscreenElement','fullscreenEnabled','fullscreenchange','fullscreenerror'],['webkitRequestFullscreen','webkitExitFullscreen','webkitFullscreenElement','webkitFullscreenEnabled','webkitfullscreenchange','webkitfullscreenerror'],['webkitRequestFullScreen','webkitCancelFullScreen','webkitCurrentFullScreenElement','webkitCancelFullScreen','webkitfullscreenchange','webkitfullscreenerror'],['mozRequestFullScreen','mozCancelFullScreen','mozFullScreenElement','mozFullScreenEnabled','mozfullscreenchange','mozfullscreenerror'],['msRequestFullscreen','msExitFullscreen','msFullscreenElement','msFullscreenEnabled','MSFullscreenChange','MSFullscreenError']];var val;var ret={};var i,j;for(i=0;i<fnMap.length;i++){val=fnMap[i];if(val&&val[1]in document){for(j=0;j<val.length;j++){ret[fnMap[0][j]]=val[j]}
return ret}}
return!1})();if(!fn){if($&&$.fancybox){$.fancybox.defaults.btnTpl.fullScreen=!1}
return}
var FullScreen={request:function(elem){elem=elem||document.documentElement;elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT)},exit:function(){document[fn.exitFullscreen]()},toggle:function(elem){elem=elem||document.documentElement;if(this.isFullscreen()){this.exit()}else{this.request(elem)}},isFullscreen:function(){return Boolean(document[fn.fullscreenElement])},enabled:function(){return Boolean(document[fn.fullscreenEnabled])}};$.extend(!0,$.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" />'+'</svg>'+'</button>'},fullScreen:{autoStart:!1}});$(document).on({'onInit.fb':function(e,instance){var $container;if(instance&&instance.group[instance.currIndex].opts.fullScreen){$container=instance.$refs.container;$container.on('click.fb-fullscreen','[data-fancybox-fullscreen]',function(e){e.stopPropagation();e.preventDefault();FullScreen.toggle($container[0])});if(instance.opts.fullScreen&&instance.opts.fullScreen.autoStart===!0){FullScreen.request($container[0])}
instance.FullScreen=FullScreen}else if(instance){instance.$refs.toolbar.find('[data-fancybox-fullscreen]').hide()}},'afterKeydown.fb':function(e,instance,current,keypress,keycode){if(instance&&instance.FullScreen&&keycode===70){keypress.preventDefault();instance.FullScreen.toggle(instance.$refs.container[0])}},'beforeClose.fb':function(instance){if(instance&&instance.FullScreen){FullScreen.exit()}}});$(document).on(fn.fullscreenchange,function(){var isFullscreen=FullScreen.isFullscreen(),instance=$.fancybox.getInstance();if(instance){if(instance.current&&instance.current.type==='image'&&instance.isAnimating){instance.current.$content.css('transition','none');instance.isAnimating=!1;instance.update(!0,!0,0)}
instance.trigger('onFullscreenChange',isFullscreen);instance.$refs.container.toggleClass('fancybox-is-fullscreen',isFullscreen)}})}(document,window.jQuery||jQuery));(function(document,$){'use strict';$.fancybox.defaults=$.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">'+'<svg viewBox="0 0 120 120">'+'<path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" />'+'</svg>'+'</button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:'.fancybox-container',axis:'y'}},$.fancybox.defaults);var FancyThumbs=function(instance){this.init(instance)};$.extend(FancyThumbs.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(instance){var self=this;self.instance=instance;instance.Thumbs=self;var first=instance.group[0],second=instance.group[1];self.opts=instance.group[instance.currIndex].opts.thumbs;self.$button=instance.$refs.toolbar.find('[data-fancybox-thumbs]');if(self.opts&&first&&second&&((first.type=='image'||first.opts.thumb||first.opts.$thumb)&&(second.type=='image'||second.opts.thumb||second.opts.$thumb))){self.$button.show().on('click',function(){self.toggle()});self.isActive=!0}else{self.$button.hide()}},create:function(){var self=this,instance=self.instance,parentEl=self.opts.parentEl,list,src;self.$grid=$('<div class="fancybox-thumbs fancybox-thumbs-'+self.opts.axis+'"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl));list='<ul>';$.each(instance.group,function(i,item){src=item.opts.thumb||(item.opts.$thumb?item.opts.$thumb.attr('src'):null);if(!src&&item.type==='image'){src=item.src}
if(src&&src.length){list+='<li data-index="'+i+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+src+'" /></li>'}});list+='</ul>';self.$list=$(list).appendTo(self.$grid).on('click','li',function(){instance.jumpTo($(this).data('index'))});self.$list.find('img').hide().one('load',function(){var $parent=$(this).parent().removeClass('fancybox-thumbs-loading'),thumbWidth=$parent.outerWidth(),thumbHeight=$parent.outerHeight(),width,height,widthRatio,heightRatio;width=this.naturalWidth||this.width;height=this.naturalHeight||this.height;widthRatio=width/thumbWidth;heightRatio=height/thumbHeight;if(widthRatio>=1&&heightRatio>=1){if(widthRatio>heightRatio){width=width/heightRatio;height=thumbHeight}else{width=thumbWidth;height=height/widthRatio}}
$(this).css({width:Math.floor(width),height:Math.floor(height),'margin-top':height>thumbHeight?(Math.floor(thumbHeight*0.3-height*0.3)):Math.floor(thumbHeight*0.5-height*0.5),'margin-left':Math.floor(thumbWidth*0.5-width*0.5)}).show()}).each(function(){this.src=$(this).data('src')});if(self.opts.axis==='x'){self.$list.width(parseInt(self.$grid.css("padding-right"))+(instance.group.length*self.$list.children().eq(0).outerWidth(!0))+'px')}},focus:function(duration){var self=this,$list=self.$list,thumb,thumbPos;if(self.instance.current){thumb=$list.children().removeClass('fancybox-thumbs-active').filter('[data-index="'+self.instance.current.index+'"]').addClass('fancybox-thumbs-active');thumbPos=thumb.position();if(self.opts.axis==='y'&&(thumbPos.top<0||thumbPos.top>($list.height()-thumb.outerHeight()))){$list.stop().animate({'scrollTop':$list.scrollTop()+thumbPos.top},duration)}else if(self.opts.axis==='x'&&(thumbPos.left<$list.parent().scrollLeft()||thumbPos.left>($list.parent().scrollLeft()+($list.parent().width()-thumb.outerWidth())))){$list.parent().stop().animate({'scrollLeft':thumbPos.left},duration)}}},update:function(){this.instance.$refs.container.toggleClass('fancybox-show-thumbs',this.isVisible);if(this.isVisible){if(!this.$grid){this.create()}
this.instance.trigger('onThumbsShow');this.focus(0)}else if(this.$grid){this.instance.trigger('onThumbsHide')}
this.instance.update()},hide:function(){this.isVisible=!1;this.update()},show:function(){this.isVisible=!0;this.update()},toggle:function(){this.isVisible=!this.isVisible;this.update()}});$(document).on({'onInit.fb':function(e,instance){var Thumbs;if(instance&&!instance.Thumbs){Thumbs=new FancyThumbs(instance);if(Thumbs.isActive&&Thumbs.opts.autoStart===!0){Thumbs.show()}}},'beforeShow.fb':function(e,instance,item,firstRun){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isVisible){Thumbs.focus(firstRun?0:250)}},'afterKeydown.fb':function(e,instance,current,keypress,keycode){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isActive&&keycode===71){keypress.preventDefault();Thumbs.toggle()}},'beforeClose.fb':function(e,instance){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isVisible&&Thumbs.opts.hideOnClose!==!1){Thumbs.$grid.hide()}}})}(document,window.jQuery));(function(document,$){'use strict';$.extend(!0,$.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z">'+'</svg>'+'</button>'},share:{tpl:'<div class="fancybox-share">'+'<h1>{{SHARE}}</h1>'+'<p class="fancybox-share__links">'+'<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>'+'<span>Facebook</span>'+'</a>'+'<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>'+'<span>Pinterest</span>'+'</a>'+'<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>'+'<span>Twitter</span>'+'</a>'+'</p>'+'<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p>'+'</div>'}});function escapeHtml(string){var entityMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'};return String(string).replace(/[&<>"'`=\/]/g,function(s){return entityMap[s]})}
$(document).on('click','[data-fancybox-share]',function(){var f=$.fancybox.getInstance(),url,tpl;if(f){url=f.current.opts.hash===!1?f.current.src:window.location;tpl=f.current.opts.share.tpl.replace(/\{\{media\}\}/g,f.current.type==='image'?encodeURIComponent(f.current.src):'').replace(/\{\{url\}\}/g,encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g,escapeHtml(url)).replace(/\{\{descr\}\}/g,f.$caption?encodeURIComponent(f.$caption.text()):'');$.fancybox.open({src:f.translate(f,tpl),type:'html',opts:{animationEffect:"fade",animationDuration:250,afterLoad:function(instance,current){current.$content.find('.fancybox-share__links a').click(function(){window.open(this.href,"Share","width=550, height=450");return!1})}}})}})}(document,window.jQuery||jQuery));(function(document,window,$){'use strict';if(!$.escapeSelector){$.escapeSelector=function(sel){var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;var fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD"}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" "}
return"\\"+ch};return(sel+"").replace(rcssescape,fcssescape)}}
var shouldCreateHistory=!0;var currentHash=null;var timerID=null;function parseUrl(){var hash=window.location.hash.substr(1);var rez=hash.split('-');var index=rez.length>1&&/^\+?\d+$/.test(rez[rez.length-1])?parseInt(rez.pop(-1),10)||1:1;var gallery=rez.join('-');if(index<1){index=1}
return{hash:hash,index:index,gallery:gallery}}
function triggerFromUrl(url){var $el;if(url.gallery!==''){$el=$("[data-fancybox='"+$.escapeSelector(url.gallery)+"']").eq(url.index-1);if(!$el.length){$el=$("#"+$.escapeSelector(url.gallery)+"")}
if($el.length){shouldCreateHistory=!1;$el.trigger('click')}}}
function getGalleryID(instance){var opts;if(!instance){return!1}
opts=instance.current?instance.current.opts:instance.opts;return opts.hash||(opts.$orig?opts.$orig.data('fancybox'):'')}
$(function(){if($.fancybox.defaults.hash===!1){return}
$(document).on({'onInit.fb':function(e,instance){var url,gallery;if(instance.group[instance.currIndex].opts.hash===!1){return}
url=parseUrl();gallery=getGalleryID(instance);if(gallery&&url.gallery&&gallery==url.gallery){instance.currIndex=url.index-1}},'beforeShow.fb':function(e,instance,current){var gallery;if(!current||current.opts.hash===!1){return}
gallery=getGalleryID(instance);if(gallery&&gallery!==''){if(window.location.hash.indexOf(gallery)<0){instance.opts.origHash=window.location.hash}
currentHash=gallery+(instance.group.length>1?'-'+(current.index+1):'');if('replaceState' in window.history){if(timerID){clearTimeout(timerID)}
timerID=setTimeout(function(){window.history[shouldCreateHistory?'pushState':'replaceState']({},document.title,window.location.pathname+window.location.search+'#'+currentHash);timerID=null;shouldCreateHistory=!1},300)}else{window.location.hash=currentHash}}},'beforeClose.fb':function(e,instance,current){var gallery,origHash;if(timerID){clearTimeout(timerID)}
if(current.opts.hash===!1){return}
gallery=getGalleryID(instance);origHash=instance&&instance.opts.origHash?instance.opts.origHash:'';if(gallery&&gallery!==''){if('replaceState' in history){window.history.replaceState({},document.title,window.location.pathname+window.location.search+origHash)}else{window.location.hash=origHash;$(window).scrollTop(instance.scrollTop).scrollLeft(instance.scrollLeft)}}
currentHash=null}});$(window).on('hashchange.fb',function(){var url=parseUrl();if($.fancybox.getInstance()){if(currentHash&&currentHash!==url.gallery+'-'+url.index&&!(url.index===1&&currentHash==url.gallery)){currentHash=null;$.fancybox.close()}}else if(url.gallery!==''){triggerFromUrl(url)}});setTimeout(function(){triggerFromUrl(parseUrl())},50)})}(document,window,window.jQuery||jQuery));(function(document,$){'use strict';var prevTime=new Date().getTime();$(document).on({'onInit.fb':function(e,instance,current){instance.$refs.stage.on('mousewheel DOMMouseScroll wheel MozMousePixelScroll',function(e){var current=instance.current,currTime=new Date().getTime();if(instance.group.length<1||current.opts.wheel===!1||(current.opts.wheel==='auto'&&current.type!=='image')){return}
e.preventDefault();e.stopPropagation();if(current.$slide.hasClass('fancybox-animated')){return}
e=e.originalEvent||e;if(currTime-prevTime<250){return}
prevTime=currTime;instance[(-e.deltaY||-e.deltaX||e.wheelDelta||-e.detail)<0?'next':'previous']()})}})}(document,window.jQuery||jQuery));(function($){$.fn.appear=function(fn,options){var settings=$.extend({data:undefined,one:!0,accX:0,accY:0},options);return this.each(function(){var t=$(this);t.appeared=!1;if(!fn){t.trigger('appear',settings.data);return}
var w=$(window);var check=function(){if(!t.is(':visible')){t.appeared=!1;return}
var a=w.scrollLeft();var b=w.scrollTop();var o=t.offset();var x=o.left;var y=o.top;var ax=settings.accX;var ay=settings.accY;var th=t.height();var wh=w.height();var tw=t.width();var ww=w.width();if(y+th+ay>=b&&y<=b+wh+ay&&x+tw+ax>=a&&x<=a+ww+ax){if(!t.appeared)t.trigger('appear',settings.data)}else{t.appeared=!1}};var modifiedFn=function(){t.appeared=!0;if(settings.one){w.unbind('scroll',check);var i=$.inArray(check,$.fn.appear.checks);if(i>=0)$.fn.appear.checks.splice(i,1)}
fn.apply(this,arguments)};if(settings.one)t.one('appear',settings.data,modifiedFn);else t.bind('appear',settings.data,modifiedFn);w.scroll(check);$.fn.appear.checks.push(check);(check)()})};$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var length=$.fn.appear.checks.length;if(length>0)while(length--)($.fn.appear.checks[length])();},run:function(){if($.fn.appear.timeout)clearTimeout($.fn.appear.timeout);$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20)}});$.each(['append','prepend','after','before','attr','removeAttr','addClass','removeClass','toggleClass','remove','css','show','hide'],function(i,n){var old=$.fn[n];if(old){$.fn[n]=function(){var r=old.apply(this,arguments);$.fn.appear.run();return r}}})})(jQuery);!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(e){"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0,autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&V(t),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),S.call(this),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r.children())),n.overflowed=B.call(this),O.call(this),i.autoDraggerLength&&b.call(this),C.call(this),k.call(this);var s=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?l[0].height()>l[0].parent().height()?T.call(this):(Q(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(T.call(this),"y"===i.axis?M.call(this):"yx"===i.axis&&n.overflowed[1]&&Q(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?l[1].width()>l[1].parent().width()?T.call(this):(Q(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(T.call(this),"x"===i.axis?M.call(this):"yx"===i.axis&&n.overflowed[0]&&Q(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),X.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=j.call(this,c[0],"y"),c[1]=j.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",Q(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",Q(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&V(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){{o.data(a)}X.call(this,"remove"),M.call(this),t&&T.call(this),O.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),X.call(this,"remove"),M.call(this),T.call(this),n.removeData(a),Z(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),Z(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir="+n.langDir+" /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p.children())),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){return Math.max.apply(Math,t.map(function(){return e(this).outerWidth(!0)}).get())},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis&&i.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),position:"relative"}).unwrap()},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=te(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=t.css("max-height")||"none",r=-1!==i.indexOf("%"),l=t.css("box-sizing");if("none"!==i){var s=r?t.parent().height()*parseInt(i)/100:parseInt(i);"border-box"===l&&(s-=t.innerHeight()-t.height()+(t.outerHeight()-t.innerHeight())),n.css("max-height",Math.round(s))}},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},C=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},y=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},B=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1);return[r>n.height(),l>n.width()]},T=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(V(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),Q(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),Q(t,"_resetX")}},k=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(R.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),H.call(this),i.advanced.autoScrollOnFocus&&z.call(this),i.scrollButtons.enable&&U.call(this),i.keyboard.enable&&F.call(this),n.bindEvents=!0}},M=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),o.bindEvents&&(e(document).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),Z(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),Z(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),Z(s[0],"onCompleteTimeout"),o.bindEvents=!1)},O=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},I=function(e){var t=e.type;switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return e.target.ownerDocument!==document?[e.originalEvent.screenY,e.originalEvent.screenX,!1]:[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var o=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return e.target.ownerDocument!==document?[o.screenY,o.screenX,a>1]:[o.pageY,o.pageX,a>1];default:return[e.pageY,e.pageX,!1]}},R=function(){function t(e){var t=m.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function o(e,t,o,a){if(m[0].idleTimer=u.scrollInertia<233?250:0,n.attr("id")===h[1])var i="x",r=(n[0].offsetLeft-t+a)*d.scrollRatio.x;else var i="y",r=(n[0].offsetTop-e+o)*d.scrollRatio.y;Q(l,r.toString(),{dir:i,drag:!0})}var n,i,r,l=e(this),d=l.data(a),u=d.opt,f=a+"_"+d.idx,h=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],m=e("#mCSB_"+d.idx+"_container"),p=e("#"+h[0]+",#"+h[1]),g=u.advanced.releaseDraggableSelectors?p.add(e(u.advanced.releaseDraggableSelectors)):p;p.bind("mousedown."+f+" touchstart."+f+" pointerdown."+f+" MSPointerDown."+f,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),$(o)){c=!0,s&&(document.onselectstart=function(){return!1}),t(!1),V(l),n=e(this);var a=n.offset(),d=I(o)[0]-a.top,f=I(o)[1]-a.left,h=n.height()+a.top,m=n.width()+a.left;h>d&&d>0&&m>f&&f>0&&(i=d,r=f),y(n,"active",u.autoExpandScrollbar)}}).bind("touchmove."+f,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=n.offset(),a=I(e)[0]-t.top,l=I(e)[1]-t.left;o(i,r,a,l)}),e(document).bind("mousemove."+f+" pointermove."+f+" MSPointerMove."+f,function(e){if(n){var t=n.offset(),a=I(e)[0]-t.top,l=I(e)[1]-t.left;if(i===a)return;o(i,r,a,l)}}).add(g).bind("mouseup."+f+" touchend."+f+" pointerup."+f+" MSPointerUp."+f,function(e){n&&(y(n,"active",u.autoExpandScrollbar),n=null),c=!1,s&&(document.onselectstart=null),t(!0)})},D=function(){function o(e){if(!ee(e)||c||I(e)[2])return void(t=0);t=1,S=0,b=0,C.removeClass("mCS_touch_action");var o=M.offset();d=I(e)[0]-o.top,u=I(e)[1]-o.left,A=[I(e)[0],I(e)[1]]}function n(e){if(ee(e)&&!c&&!I(e)[2]&&(e.stopImmediatePropagation(),!b||S)){p=J();var t=k.offset(),o=I(e)[0]-t.top,a=I(e)[1]-t.left,n="mcsLinearOut";if(R.push(o),D.push(a),A[2]=Math.abs(I(e)[0]-A[0]),A[3]=Math.abs(I(e)[1]-A[1]),y.overflowed[0])var i=O[0].parent().height()-O[0].height(),r=d-o>0&&o-d>-(i*y.scrollRatio.y)&&(2*A[3]<A[2]||"yx"===B.axis);if(y.overflowed[1])var l=O[1].parent().width()-O[1].width(),f=u-a>0&&a-u>-(l*y.scrollRatio.x)&&(2*A[2]<A[3]||"yx"===B.axis);r||f?(e.preventDefault(),S=1):(b=1,C.addClass("mCS_touch_action")),_="yx"===B.axis?[d-o,u-a]:"x"===B.axis?[null,u-a]:[d-o,null],M[0].idleTimer=250,y.overflowed[0]&&s(_[0],E,n,"y","all",!0),y.overflowed[1]&&s(_[1],E,n,"x",W,!0)}}function i(e){if(!ee(e)||c||I(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),V(C),m=J();var o=k.offset();f=I(e)[0]-o.top,h=I(e)[1]-o.left,R=[],D=[]}function r(e){if(ee(e)&&!c&&!I(e)[2]){e.stopImmediatePropagation(),S=0,b=0,g=J();var t=k.offset(),o=I(e)[0]-t.top,a=I(e)[1]-t.left;if(!(g-p>30)){x=1e3/(g-m);var n="mcsEaseOut",i=2.5>x,r=i?[R[R.length-2],D[D.length-2]]:[0,0];v=i?[o-r[0],a-r[1]]:[o-f,a-h];var d=[Math.abs(v[0]),Math.abs(v[1])];x=i?[Math.abs(v[0]/4),Math.abs(v[1]/4)]:[x,x];var u=[Math.abs(M[0].offsetTop)-v[0]*l(d[0]/x[0],x[0]),Math.abs(M[0].offsetLeft)-v[1]*l(d[1]/x[1],x[1])];_="yx"===B.axis?[u[0],u[1]]:"x"===B.axis?[null,u[1]]:[u[0],null],w=[4*d[0]+B.scrollInertia,4*d[1]+B.scrollInertia];var C=parseInt(B.contentTouchScroll)||0;_[0]=d[0]>C?_[0]:0,_[1]=d[1]>C?_[1]:0,y.overflowed[0]&&s(_[0],w[0],n,"y",W,!1),y.overflowed[1]&&s(_[1],w[1],n,"x",W,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&Q(C,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C=e(this),y=C.data(a),B=y.opt,T=a+"_"+y.idx,k=e("#mCSB_"+y.idx),M=e("#mCSB_"+y.idx+"_container"),O=[e("#mCSB_"+y.idx+"_dragger_vertical"),e("#mCSB_"+y.idx+"_dragger_horizontal")],R=[],D=[],E=0,W="yx"===B.axis?"none":"all",A=[],P=M.find("iframe"),z=["touchstart."+T+" pointerdown."+T+" MSPointerDown."+T,"touchmove."+T+" pointermove."+T+" MSPointerMove."+T,"touchend."+T+" pointerup."+T+" MSPointerUp."+T];M.bind(z[0],function(e){o(e)}).bind(z[1],function(e){n(e)}),k.bind(z[0],function(e){i(e)}).bind(z[2],function(e){r(e)}),P.length&&P.each(function(){e(this).load(function(){L(this)&&e(this.contentDocument||this.contentWindow.document).bind(z[0],function(e){o(e),i(e)}).bind(z[1],function(e){n(e)}).bind(z[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,q(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(e){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=I(e)[0]-a.top+f[0].offsetTop,c=I(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u,function(e){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(V(o),!A(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100;if("x"===i.axis||"x"===i.mouseWheel.axis)var d="x",u=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],f="auto"!==i.mouseWheel.scrollAmount?u[1]:u[0]>=l.width()?.9*l.width():u[0],h=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),m=c[1][0].offsetLeft,p=c[1].parent().width()-c[1].width(),g=t.deltaX||t.deltaY||a;else var d="y",u=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],f="auto"!==i.mouseWheel.scrollAmount?u[1]:u[0]>=l.height()?.9*l.height():u[0],h=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),m=c[0][0].offsetTop,p=c[0].parent().height()-c[0].height(),g=t.deltaY||a;"y"===d&&!n.overflowed[0]||"x"===d&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(g=-g),i.mouseWheel.normalizeDelta&&(g=0>g?-1:1),(g>0&&0!==m||0>g&&m!==p||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),Q(o,(h-g*f).toString(),{dir:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).load(function(){L(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},L=function(e){var t=null;try{var o=e.contentDocument||e.contentWindow.document;t=o.body.innerHTML}catch(a){}return null!==t},A=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container"),r=i.parent(),l=e(".mCSB_"+o.idx+"_scrollbar ."+d[12]);l.bind("touchstart."+n+" pointerdown."+n+" MSPointerDown."+n,function(e){c=!0}).bind("touchend."+n+" pointerup."+n+" MSPointerUp."+n,function(e){c=!1}).bind("click."+n,function(a){if(e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail")){V(t);var n=e(this),l=n.find(".mCSB_dragger");if(n.parent(".mCSB_scrollTools_horizontal").length>0){if(!o.overflowed[1])return;var s="x",c=a.pageX>l.offset().left?-1:1,u=Math.abs(i[0].offsetLeft)-.9*c*r.width()}else{if(!o.overflowed[0])return;var s="y",c=a.pageY>l.offset().top?-1:1,u=Math.abs(i[0].offsetTop)-.9*c*r.height()}Q(t,u.toString(),{dir:s,scrollEasing:"mcsEaseInOut"})}})},z=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(o){var a=e(document.activeElement),i=r.find(".mCustomScrollBox").length,s=0;a.is(n.advanced.autoScrollOnFocus)&&(V(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?(s+17)*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[oe(a)[0],oe(a)[1]],o=[r[0].offsetTop,r[0].offsetLeft],i=[o[0]+e[0]>=0&&o[0]+e[0]<l.height()-a.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<l.width()-a.outerWidth(!1)],c="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||Q(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s}),"y"===n.axis||i[1]||Q(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s})},t[0]._focusTimer))})},H=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(t){(0!==i.scrollTop()||0!==i.scrollLeft())&&e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},U=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.snapAmount||n.scrollButtons.scrollAmount,q(t,e,o)}if(a.preventDefault(),$(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},F=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.snapAmount||i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||q(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){V(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-.9*f*d.width();else var h="y",m=Math.abs(c[0].offsetTop)-.9*f*d.height();Q(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;Q(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).load(function(){L(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},q=function(t,o,n,i,r){function l(e){var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],u="x"===f.dir[0]?s[1]+f.dir[1]*d[1]*n:s[0]+f.dir[1]*d[0]*n,m="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),v="auto"!==f.scrollAmount?m:u,x=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",_=e?!0:!1;return e&&17>a&&(v="x"===f.dir[0]?s[1]:s[0]),Q(t,v.toString(),{dir:f.dir[0],scrollEasing:x,dur:a,onComplete:_}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),Z(f,"step"),V(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type?!0:!1,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],V(t),te(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},j=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1):l.outerHeight(!1),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?oe(m)[1]:oe(m)[0];case"string":case"number":if(te(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&te(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?oe(m)[1]:oe(m)[0]}return e(t).length?"x"===o?oe(e(t))[1]:oe(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},X=function(t){function o(){return clearTimeout(h[0].autoUpdate),0===s.parents("html").length?void(s=null):void(h[0].autoUpdate=setTimeout(function(){return f.advanced.updateOnSelectorChange&&(m=r(),m!==w)?(l(3),void(w=m)):(f.advanced.updateOnContentResize&&(p=[h.outerHeight(!1),h.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],(p[0]!==S[0]||p[1]!==S[1]||p[2]!==S[2]||p[3]!==S[3]||p[4]!==S[4]||p[5]!==S[5])&&(l(p[0]!==S[0]||p[1]!==S[1]),S=p)),f.advanced.updateOnImageLoad&&(g=n(),g!==b&&(h.find("img").each(function(){i(this)}),b=g)),void((f.advanced.updateOnSelectorChange||f.advanced.updateOnContentResize||f.advanced.updateOnImageLoad)&&o()))},f.advanced.autoUpdateTimeout))}function n(){var e=0;return f.advanced.updateOnImageLoad&&(e=h.find("img").length),e}function i(t){function o(e,t){return function(){return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),l(2)}if(e(t).hasClass(d[2]))return void l();var n=new Image;n.onload=o(n,a),n.src=t.src}function r(){f.advanced.updateOnSelectorChange===!0&&(f.advanced.updateOnSelectorChange="*");var t=0,o=h.find(f.advanced.updateOnSelectorChange);return f.advanced.updateOnSelectorChange&&o.length>0&&o.each(function(){t+=e(this).height()+e(this).width()}),t}function l(e){clearTimeout(h[0].autoUpdate),u.update.call(null,s[0],e)}var s=e(this),c=s.data(a),f=c.opt,h=e("#mCSB_"+c.idx+"_container");if(t)return clearTimeout(h[0].autoUpdate),void Z(h[0],"autoUpdate");var m,p,g,v=h.parent(),x=[e("#mCSB_"+c.idx+"_scrollbar_vertical"),e("#mCSB_"+c.idx+"_scrollbar_horizontal")],_=function(){return[x[0].is(":visible")?x[0].outerHeight(!0):0,x[1].is(":visible")?x[1].outerWidth(!0):0]},w=r(),S=[h.outerHeight(!1),h.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],b=n();o()},N=function(e,t,o){return Math.round(e/t)*t-o},V=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){K.call(this)})},Q=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||_>=w[0]+b,c.callbacks.alwaysTriggerOffsets||-C>=_]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[v[0].offsetTop,v[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){switch(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount&&(o=N(o,c.snapAmount,c.snapOffset)),n.dir){case"x":var v=e("#mCSB_"+s.idx+"_dragger_horizontal"),x="left",_=h[0].offsetLeft,w=[f.width()-h.outerWidth(!1),v.parent().width()-v.width()],S=[o,0===o?0:o/s.scrollRatio.x],b=p[1],C=g[1],B=b>0?b/s.scrollRatio.x:0,T=C>0?C/s.scrollRatio.x:0;break;case"y":var v=e("#mCSB_"+s.idx+"_dragger_vertical"),x="top",_=h[0].offsetTop,w=[f.height()-h.outerHeight(!1),v.parent().height()-v.height()],S=[o,0===o?0:o/s.scrollRatio.y],b=p[0],C=g[0],B=b>0?b/s.scrollRatio.y:0,T=C>0?C/s.scrollRatio.y:0}S[1]<0||0===S[0]&&0===S[1]?S=[0,0]:S[1]>=w[1]?S=[w[0],w[1]]:S[0]=-S[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),(s.tweenRunning||!(0===_&&S[0]>=0||_===w[0]&&S[0]<=w[0]))&&(G(v[0],x,Math.round(S[1]),u[1],n.scrollEasing),G(h[0],x,Math.round(S[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,y(v),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&S[1]>=w[1]-B&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&S[1]<=T&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,y(v,"hide")},e)}}}))}},G=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=J()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=J(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},J=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},K=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},Z=function(e,t){try{delete e[t]}catch(o){e[t]=null}},$=function(e){return!(e.which&&1!==e.which)},ee=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},te=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},oe=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).load(function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+oe(n)[0]>=0&&a[0]+oe(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+oe(n)[1]>=0&&a[1]+oe(n)[1]<o.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});"use strict";jQuery,jQuery(document).ready(function(o){0<o(".offset-side-bar").length&&o(".offset-side-bar").on("click",function(e){e.preventDefault(),e.stopPropagation(),o(".cart-group").addClass("isActive")}),0<o(".close-side-widget").length&&o(".close-side-widget").on("click",function(e){e.preventDefault(),o(".cart-group").removeClass("isActive")}),0<o(".navSidebar-button").length&&o(".navSidebar-button").on("click",function(e){e.preventDefault(),e.stopPropagation(),o(".info-group").addClass("isActive")}),0<o(".close-side-widget").length&&o(".close-side-widget").on("click",function(e){e.preventDefault(),o(".info-group").removeClass("isActive")}),o("body").on("click",function(e){o(".info-group").removeClass("isActive"),o(".cart-group").removeClass("isActive")}),o(".xs-sidebar-widget").on("click",function(e){e.stopPropagation()}),0<o(".xs-modal-popup").length&&o(".xs-modal-popup").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!1,callbacks:{beforeOpen:function(){this.st.mainClass="my-mfp-slide-bottom xs-promo-popup"}}})});/*! jQuery UI - v1.11.4 - 2016-04-01
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, progressbar.js, selectmenu.js, slider.js, spinner.js, tabs.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}}(function($){
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
$.ui=$.ui||{};$.extend($.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});$.fn.extend({scrollParent:function(includeHidden){var position=this.css("position"),excludeStaticParent=position==="absolute",overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,scrollParent=this.parents().filter(function(){var parent=$(this);if(excludeStaticParent&&parent.css("position")==="static"){return!1}
return overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+parent.css("overflow-x"))}).eq(0);return position==="fixed"||!scrollParent.length?$(this[0].ownerDocument||document):scrollParent},uniqueId:(function(){var uuid=0;return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++uuid)}})}})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){$(this).removeAttr("id")}})}});function focusable(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return!1}
img=$("img[usemap='#"+mapName+"']")[0];return!!img&&visible(img)}
return(/^(input|select|textarea|button|object)$/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element)}
function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden"}).length}
$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName)}}):function(elem,i,match){return!!$.data(elem,match[3])},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")))},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN)}});if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0}
if(margin){size-=parseFloat($.css(elem,"margin"+this))||0}});return size}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this)}
return this.each(function(){$(this).css(type,reduce(this,size)+"px")})};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size)}
return this.each(function(){$(this).css(type,reduce(this,size,!0,margin)+"px")})}})}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}}
if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=(function(removeData){return function(key){if(arguments.length){return removeData.call(this,$.camelCase(key))}else{return removeData.call(this)}}})($.fn.removeData)}
$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());$.fn.extend({focus:(function(orig){return function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem)}},delay)}):orig.apply(this,arguments)}})($.fn.focus),disableSelection:(function(){var eventType="onselectstart" in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(eventType+".ui-disableSelection",function(event){event.preventDefault()})}})(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(zIndex){if(zIndex!==undefined){return this.css("zIndex",zIndex)}
if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value}}
elem=elem.parent()}}
return 0}});$.ui.plugin={add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]])}},call:function(instance,name,args,allowDisconnected){var i,set=instance.plugins[name];if(!set){return}
if(!allowDisconnected&&(!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11)){return}
for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args)}}}};
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
var widget_uuid=0,widget_slice=Array.prototype.slice;$.cleanData=(function(orig){return function(elems){var events,elem,i;for(i=0;(elem=elems[i])!=null;i++){try{events=$._data(elem,"events");if(events&&events.remove){$(elem).triggerHandler("remove")}}catch(e){}}
orig(elems)}})($.cleanData);$.widget=function(name,base,prototype){var fullName,existingConstructor,constructor,basePrototype,proxiedPrototype={},namespace=name.split(".")[0];name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget}
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName)};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this._createWidget){return new constructor(options,element)}
if(arguments.length){this._createWidget(options,element)}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return}
proxiedPrototype[prop]=(function(){var _super=function(){return base.prototype[prop].apply(this,arguments)},_superApply=function(args){return base.prototype[prop].apply(this,args)};return function(){var __super=this._super,__superApply=this._superApply,returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue}})()});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?(basePrototype.widgetEventPrefix||name):name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto)});delete existingConstructor._childConstructors}else{base._childConstructors.push(constructor)}
$.widget.bridge(name,constructor);return constructor};$.widget.extend=function(target){var input=widget_slice.call(arguments,1),inputIndex=0,inputLength=input.length,key,value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value)}else{target[key]=value}}}}
return target};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=widget_slice.call(arguments,1),returnValue=this;if(isMethodCall){this.each(function(){var methodValue,instance=$.data(this,fullName);if(options==="instance"){returnValue=instance;return!1}
if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'")}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance")}
methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return!1}})}else{if(args.length){options=$.widget.extend.apply(null,[options].concat(args))}
this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{});if(instance._init){instance._init()}}else{$.data(this,fullName,new object(options,this))}})}
return returnValue}};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=widget_uuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=$();this.hoverable=$();this.focusable=$();if(element!==this){$.data(element,this.widgetFullName,this);this._on(!0,this.element,{remove:function(event){if(event.target===element){this.destroy()}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow)}
this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:$.noop,widget:function(){return this.element},option:function(key,value){var options=key,parts,curOption,i;if(arguments.length===0){return $.widget.extend({},this.options)}
if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]]}
key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key]}
curOption[key]=value}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key]}
options[key]=value}}
this._setOptions(options);return this},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key])}
return this},_setOption:function(key,value){this.options[key]=value;if(key==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!value);if(value){this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}}
return this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(suppressDisabledCheck,element,handlers){var delegateElement,instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=!1}
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget()}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element)}
$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===!0||$(this).hasClass("ui-state-disabled"))){return}
return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments)}
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++}
var match=event.match(/^([\w:-]*)\s*(.*)$/),eventName=match[1]+instance.eventNamespace,selector=match[2];if(selector){delegateElement.delegate(selector,eventName,handlerProxy)}else{element.bind(eventName,handlerProxy)}})},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.unbind(eventName).undelegate(eventName);this.bindings=$(this.bindings.not(element).get());this.focusable=$(this.focusable.not(element).get());this.hoverable=$(this.hoverable.not(element).get())},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments)}
var instance=this;return setTimeout(handlerProxy,delay||0)},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){$(event.currentTarget).addClass("ui-state-hover")},mouseleave:function(event){$(event.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){$(event.currentTarget).addClass("ui-state-focus")},focusout:function(event){$(event.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(type,event,data){var prop,orig,callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop]}}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===!1||event.isDefaultPrevented())}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options}}
var hasOptions,effectName=!options?method:options===!0||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options}}
hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay)}
if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options)}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback)}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0])}
next()})}}});var widget=$.widget;
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
var mouseHandled=!1;$(document).mouseup(function(){mouseHandled=!1});var mouse=$.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var that=this;this.element.bind("mousedown."+this.widgetName,function(event){return that._mouseDown(event)}).bind("click."+this.widgetName,function(event){if(!0===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return!1}});this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(event){if(mouseHandled){return}
this._mouseMoved=!1;(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var that=this,btnIsLeft=(event.which===1),elIsCancel=(typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:!1);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return!0}
this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=!0},this.options.delay)}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==!1);if(!this._mouseStarted){event.preventDefault();return!0}}
if(!0===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent")}
this._mouseMoveDelegate=function(event){return that._mouseMove(event)};this._mouseUpDelegate=function(event){return that._mouseUp(event)};this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=!0;return!0},_mouseMove:function(event){if(this._mouseMoved){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event)}else if(!event.which){return this._mouseUp(event)}}
if(event.which||event.button){this._mouseMoved=!0}
if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault()}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==!1);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event))}
return!this._mouseStarted},_mouseUp:function(event){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=!1;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",!0)}
this._mouseStop(event)}
mouseHandled=!1;return!1},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance)},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function(){$.ui=$.ui||{};var cachedScrollbarWidth,supportsOffsetFractions,max=Math.max,abs=Math.abs,round=Math.round,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)]}
function parseCss(element,property){return parseInt($.css(element,property),10)||0}
function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}}}
if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}}}
if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}}}
return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()}}
$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth}
var w1,w2,div=$("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth}
div.remove();return(cachedScrollbarWidth=w1-w2)},getScrollInfo:function(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0}},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]),isDocument=!!withinElement[0]&&withinElement[0].nodeType===9;return{element:withinElement,isWindow:isWindow,isDocument:isDocument,offset:withinElement.offset()||{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:isWindow||isDocument?withinElement.width():withinElement.outerWidth(),height:isWindow||isDocument?withinElement.height():withinElement.outerHeight()}}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments)}
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top"}
targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"]}
pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]]});if(collision.length===1){collision[1]=collision[0]}
if(options.at[0]==="right"){basePosition.left+=targetWidth}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2}
atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth}else if(options.my[0]==="center"){position.left-=elemWidth/2}
if(options.my[1]==="bottom"){position.top-=elemHeight}else if(options.my[1]==="center"){position.top-=elemHeight/2}
position.left+=myOffset[0];position.top+=myOffset[1];if(!supportsOffsetFractions){position.left=round(position.left);position.top=round(position.top)}
collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem})}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center"}
if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle"}
if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal"}else{feedback.important="vertical"}
options.using.call(this,props,feedback)}}
elem.offset($.extend(position,{using:using}))})};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight}else if(overRight>0&&overLeft<=0){position.left=withinOffset}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth}else{position.left=withinOffset}}}else if(overLeft>0){position.left+=overLeft}else if(overRight>0){position.left-=overRight}else{position.left=max(position.left-collisionPosLeft,position.left)}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom}else if(overBottom>0&&overTop<=0){position.top=withinOffset}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight}else{position.top=withinOffset}}}else if(overTop>0){position.top+=overTop}else if(overBottom>0){position.top-=overBottom}else{position.top=max(position.top-collisionPosTop,position.top)}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop)){position.top+=myOffset+atOffset+offset}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom){position.top+=myOffset+atOffset+offset}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments)},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments)}}};(function(){var testElement,testElementParent,testElementStyle,offsetLeft,i,body=document.getElementsByTagName("body")[0],div=document.createElement("div");testElement=document.createElement(body?"div":"body");testElementStyle={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(body){$.extend(testElementStyle,{position:"absolute",left:"-1000px",top:"-1000px"})}
for(i in testElementStyle){testElement.style[i]=testElementStyle[i]}
testElement.appendChild(div);testElementParent=body||document.documentElement;testElementParent.insertBefore(testElement,testElementParent.firstChild);div.style.cssText="position: absolute; left: 10.7432222px;";offsetLeft=$(div).offset().left;supportsOffsetFractions=offsetLeft>10&&offsetLeft<11;testElement.innerHTML="";testElementParent.removeChild(testElement)})()})();var position=$.ui.position;
/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
$.widget("ui.draggable",$.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative()}
if(this.options.addClasses){this.element.addClass("ui-draggable")}
if(this.options.disabled){this.element.addClass("ui-draggable-disabled")}
this._setHandleClassName();this._mouseInit()},_setOption:function(key,value){this._super(key,value);if(key==="handle"){this._removeHandleClassName();this._setHandleClassName()}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=!0;return}
this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._removeHandleClassName();this._mouseDestroy()},_mouseCapture:function(event){var o=this.options;this._blurActiveElement(event);if(this.helper||o.disabled||$(event.target).closest(".ui-resizable-handle").length>0){return!1}
this.handle=this._getHandle(event);if(!this.handle){return!1}
this._blockFrames(o.iframeFix===!0?"iframe":o.iframeFix);return!0},_blockFrames:function(selector){this.iframeBlocks=this.document.find(selector).map(function(){var iframe=$(this);return $("<div>").css("position","absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks}},_blurActiveElement:function(event){var document=this.document[0];if(!this.handleElement.is(event.target)){return}
try{if(document.activeElement&&document.activeElement.nodeName.toLowerCase()!=="body"){$(document.activeElement).blur()}}catch(error){}},_mouseStart:function(event){var o=this.options;this.helper=this._createHelper(event);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if($.ui.ddmanager){$.ui.ddmanager.current=this}
this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent(!0);this.offsetParent=this.helper.offsetParent();this.hasFixedAncestor=this.helper.parents().filter(function(){return $(this).css("position")==="fixed"}).length>0;this.positionAbs=this.element.offset();this._refreshOffsets(event);this.originalPosition=this.position=this._generatePosition(event,!1);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this._setContainment();if(this._trigger("start",event)===!1){this._clear();return!1}
this._cacheHelperProportions();if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event)}
this._normalizeRightBottom();this._mouseDrag(event,!0);if($.ui.ddmanager){$.ui.ddmanager.dragStart(this,event)}
return!0},_refreshOffsets:function(event){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:event.pageX-this.offset.left,top:event.pageY-this.offset.top}},_mouseDrag:function(event,noPropagation){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset()}
this.position=this._generatePosition(event,!0);this.positionAbs=this._convertPositionTo("absolute");if(!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===!1){this._mouseUp({});return!1}
this.position=ui.position}
this.helper[0].style.left=this.position.left+"px";this.helper[0].style.top=this.position.top+"px";if($.ui.ddmanager){$.ui.ddmanager.drag(this,event)}
return!1},_mouseStop:function(event){var that=this,dropped=!1;if($.ui.ddmanager&&!this.options.dropBehaviour){dropped=$.ui.ddmanager.drop(this,event)}
if(this.dropped){dropped=this.dropped;this.dropped=!1}
if((this.options.revert==="invalid"&&!dropped)||(this.options.revert==="valid"&&dropped)||this.options.revert===!0||($.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped))){$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(that._trigger("stop",event)!==!1){that._clear()}})}else{if(this._trigger("stop",event)!==!1){this._clear()}}
return!1},_mouseUp:function(event){this._unblockFrames();if($.ui.ddmanager){$.ui.ddmanager.dragStop(this,event)}
if(this.handleElement.is(event.target)){this.element.focus()}
return $.ui.mouse.prototype._mouseUp.call(this,event)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}
return this},_getHandle:function(event){return this.options.handle?!!$(event.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(event){var o=this.options,helperIsFunction=$.isFunction(o.helper),helper=helperIsFunction?$(o.helper.apply(this.element[0],[event])):(o.helper==="clone"?this.element.clone().removeAttr("id"):this.element);if(!helper.parents("body").length){helper.appendTo((o.appendTo==="parent"?this.element[0].parentNode:o.appendTo))}
if(helperIsFunction&&helper[0]===this.element[0]){this._setPositionRelative()}
if(helper[0]!==this.element[0]&&!(/(fixed|absolute)/).test(helper.css("position"))){helper.css("position","absolute")}
return helper},_setPositionRelative:function(){if(!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ")}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0}}
if("left" in obj){this.offset.click.left=obj.left+this.margins.left}
if("right" in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left}
if("top" in obj){this.offset.click.top=obj.top+this.margins.top}
if("bottom" in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top}},_isRootNode:function(element){return(/(html|body)/i).test(element.tagName)||element===this.document[0]},_getParentOffset:function(){var po=this.offsetParent.offset(),document=this.document[0];if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop()}
if(this._isRootNode(this.offsetParent[0])){po={top:0,left:0}}
return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0}}
var p=this.element.position(),scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+(!scrollIsRootNode?this.scrollParent.scrollTop():0),left:p.left-(parseInt(this.helper.css("left"),10)||0)+(!scrollIsRootNode?this.scrollParent.scrollLeft():0)}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var isUserScrollable,c,ce,o=this.options,document=this.document[0];this.relativeContainer=null;if(!o.containment){this.containment=null;return}
if(o.containment==="window"){this.containment=[$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,$(window).scrollLeft()+$(window).width()-this.helperProportions.width-this.margins.left,$(window).scrollTop()+($(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}
if(o.containment==="document"){this.containment=[0,0,$(document).width()-this.helperProportions.width-this.margins.left,($(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}
if(o.containment.constructor===Array){this.containment=o.containment;return}
if(o.containment==="parent"){o.containment=this.helper[0].parentNode}
c=$(o.containment);ce=c[0];if(!ce){return}
isUserScrollable=/(scroll|auto)/.test(c.css("overflow"));this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(isUserScrollable?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(isUserScrollable?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relativeContainer=c},_convertPositionTo:function(d,pos){if(!pos){pos=this.position}
var mod=d==="absolute"?1:-1,scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:(pos.top+this.offset.relative.top*mod+this.offset.parent.top*mod-((this.cssPosition==="fixed"?-this.offset.scroll.top:(scrollIsRootNode?0:this.offset.scroll.top))*mod)),left:(pos.left+this.offset.relative.left*mod+this.offset.parent.left*mod-((this.cssPosition==="fixed"?-this.offset.scroll.left:(scrollIsRootNode?0:this.offset.scroll.left))*mod))}},_generatePosition:function(event,constrainPosition){var containment,co,top,left,o=this.options,scrollIsRootNode=this._isRootNode(this.scrollParent[0]),pageX=event.pageX,pageY=event.pageY;if(!scrollIsRootNode||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}}
if(constrainPosition){if(this.containment){if(this.relativeContainer){co=this.relativeContainer.offset();containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top]}else{containment=this.containment}
if(event.pageX-this.offset.click.left<containment[0]){pageX=containment[0]+this.offset.click.left}
if(event.pageY-this.offset.click.top<containment[1]){pageY=containment[1]+this.offset.click.top}
if(event.pageX-this.offset.click.left>containment[2]){pageX=containment[2]+this.offset.click.left}
if(event.pageY-this.offset.click.top>containment[3]){pageY=containment[3]+this.offset.click.top}}
if(o.grid){top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;pageY=containment?((top-this.offset.click.top>=containment[1]||top-this.offset.click.top>containment[3])?top:((top-this.offset.click.top>=containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;pageX=containment?((left-this.offset.click.left>=containment[0]||left-this.offset.click.left>containment[2])?left:((left-this.offset.click.left>=containment[0])?left-o.grid[0]:left+o.grid[0])):left}
if(o.axis==="y"){pageX=this.originalPageX}
if(o.axis==="x"){pageY=this.originalPageY}}
return{top:(pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:(scrollIsRootNode?0:this.offset.scroll.top))),left:(pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:(scrollIsRootNode?0:this.offset.scroll.left)))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}
this.helper=null;this.cancelHelperRemoval=!1;if(this.destroyOnClear){this.destroy()}},_normalizeRightBottom:function(){if(this.options.axis!=="y"&&this.helper.css("right")!=="auto"){this.helper.width(this.helper.width());this.helper.css("right","auto")}
if(this.options.axis!=="x"&&this.helper.css("bottom")!=="auto"){this.helper.height(this.helper.height());this.helper.css("bottom","auto")}},_trigger:function(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui,this],!0);if(/^(drag|start|stop)/.test(type)){this.positionAbs=this._convertPositionTo("absolute");ui.offset=this.positionAbs}
return $.Widget.prototype._trigger.call(this,type,event,ui)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.sortables=[];$(draggable.options.connectToSortable).each(function(){var sortable=$(this).sortable("instance");if(sortable&&!sortable.options.disabled){draggable.sortables.push(sortable);sortable.refreshPositions();sortable._trigger("activate",event,uiSortable)}})},stop:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.cancelHelperRemoval=!1;$.each(draggable.sortables,function(){var sortable=this;if(sortable.isOver){sortable.isOver=0;draggable.cancelHelperRemoval=!0;sortable.cancelHelperRemoval=!1;sortable._storedCSS={position:sortable.placeholder.css("position"),top:sortable.placeholder.css("top"),left:sortable.placeholder.css("left")};sortable._mouseStop(event);sortable.options.helper=sortable.options._helper}else{sortable.cancelHelperRemoval=!0;sortable._trigger("deactivate",event,uiSortable)}})},drag:function(event,ui,draggable){$.each(draggable.sortables,function(){var innermostIntersecting=!1,sortable=this;sortable.positionAbs=draggable.positionAbs;sortable.helperProportions=draggable.helperProportions;sortable.offset.click=draggable.offset.click;if(sortable._intersectsWith(sortable.containerCache)){innermostIntersecting=!0;$.each(draggable.sortables,function(){this.positionAbs=draggable.positionAbs;this.helperProportions=draggable.helperProportions;this.offset.click=draggable.offset.click;if(this!==sortable&&this._intersectsWith(this.containerCache)&&$.contains(sortable.element[0],this.element[0])){innermostIntersecting=!1}
return innermostIntersecting})}
if(innermostIntersecting){if(!sortable.isOver){sortable.isOver=1;draggable._parent=ui.helper.parent();sortable.currentItem=ui.helper.appendTo(sortable.element).data("ui-sortable-item",!0);sortable.options._helper=sortable.options.helper;sortable.options.helper=function(){return ui.helper[0]};event.target=sortable.currentItem[0];sortable._mouseCapture(event,!0);sortable._mouseStart(event,!0,!0);sortable.offset.click.top=draggable.offset.click.top;sortable.offset.click.left=draggable.offset.click.left;sortable.offset.parent.left-=draggable.offset.parent.left-sortable.offset.parent.left;sortable.offset.parent.top-=draggable.offset.parent.top-sortable.offset.parent.top;draggable._trigger("toSortable",event);draggable.dropped=sortable.element;$.each(draggable.sortables,function(){this.refreshPositions()});draggable.currentItem=draggable.element;sortable.fromOutside=draggable}
if(sortable.currentItem){sortable._mouseDrag(event);ui.position=sortable.position}}else{if(sortable.isOver){sortable.isOver=0;sortable.cancelHelperRemoval=!0;sortable.options._revert=sortable.options.revert;sortable.options.revert=!1;sortable._trigger("out",event,sortable._uiHash(sortable));sortable._mouseStop(event,!0);sortable.options.revert=sortable.options._revert;sortable.options.helper=sortable.options._helper;if(sortable.placeholder){sortable.placeholder.remove()}
ui.helper.appendTo(draggable._parent);draggable._refreshOffsets(event);ui.position=draggable._generatePosition(event,!0);draggable._trigger("fromSortable",event);draggable.dropped=!1;$.each(draggable.sortables,function(){this.refreshPositions()})}}})}});$.ui.plugin.add("draggable","cursor",{start:function(event,ui,instance){var t=$("body"),o=instance.options;if(t.css("cursor")){o._cursor=t.css("cursor")}
t.css("cursor",o.cursor)},stop:function(event,ui,instance){var o=instance.options;if(o._cursor){$("body").css("cursor",o._cursor)}}});$.ui.plugin.add("draggable","opacity",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("opacity")){o._opacity=t.css("opacity")}
t.css("opacity",o.opacity)},stop:function(event,ui,instance){var o=instance.options;if(o._opacity){$(ui.helper).css("opacity",o._opacity)}}});$.ui.plugin.add("draggable","scroll",{start:function(event,ui,i){if(!i.scrollParentNotHidden){i.scrollParentNotHidden=i.helper.scrollParent(!1)}
if(i.scrollParentNotHidden[0]!==i.document[0]&&i.scrollParentNotHidden[0].tagName!=="HTML"){i.overflowOffset=i.scrollParentNotHidden.offset()}},drag:function(event,ui,i){var o=i.options,scrolled=!1,scrollParent=i.scrollParentNotHidden[0],document=i.document[0];if(scrollParent!==document&&scrollParent.tagName!=="HTML"){if(!o.axis||o.axis!=="x"){if((i.overflowOffset.top+scrollParent.offsetHeight)-event.pageY<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop+o.scrollSpeed}else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop-o.scrollSpeed}}
if(!o.axis||o.axis!=="y"){if((i.overflowOffset.left+scrollParent.offsetWidth)-event.pageX<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft+o.scrollSpeed}else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft-o.scrollSpeed}}}else{if(!o.axis||o.axis!=="x"){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed)}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed)}}
if(!o.axis||o.axis!=="y"){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed)}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed)}}}
if(scrolled!==!1&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(i,event)}}});$.ui.plugin.add("draggable","snap",{start:function(event,ui,i){var o=i.options;i.snapElements=[];$(o.snap.constructor!==String?(o.snap.items||":data(ui-draggable)"):o.snap).each(function(){var $t=$(this),$o=$t.offset();if(this!==i.element[0]){i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left})}})},drag:function(event,ui,inst){var ts,bs,ls,rs,l,r,t,b,i,first,o=inst.options,d=o.snapTolerance,x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(i=inst.snapElements.length-1;i>=0;i--){l=inst.snapElements[i].left-inst.margins.left;r=l+inst.snapElements[i].width;t=inst.snapElements[i].top-inst.margins.top;b=t+inst.snapElements[i].height;if(x2<l-d||x1>r+d||y2<t-d||y1>b+d||!$.contains(inst.snapElements[i].item.ownerDocument,inst.snapElements[i].item)){if(inst.snapElements[i].snapping){(inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})))}
inst.snapElements[i].snapping=!1;continue}
if(o.snapMode!=="inner"){ts=Math.abs(t-y2)<=d;bs=Math.abs(b-y1)<=d;ls=Math.abs(l-x2)<=d;rs=Math.abs(r-x1)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top}
if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top}
if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left}
if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left}}
first=(ts||bs||ls||rs);if(o.snapMode!=="outer"){ts=Math.abs(t-y1)<=d;bs=Math.abs(b-y2)<=d;ls=Math.abs(l-x1)<=d;rs=Math.abs(r-x2)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top}
if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top}
if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left}
if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left}}
if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first)){(inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})))}
inst.snapElements[i].snapping=(ts||bs||ls||rs||first)}}});$.ui.plugin.add("draggable","stack",{start:function(event,ui,instance){var min,o=instance.options,group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0)});if(!group.length){return}
min=parseInt($(group[0]).css("zIndex"),10)||0;$(group).each(function(i){$(this).css("zIndex",min+i)});this.css("zIndex",(min+group.length))}});$.ui.plugin.add("draggable","zIndex",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("zIndex")){o._zIndex=t.css("zIndex")}
t.css("zIndex",o.zIndex)},stop:function(event,ui,instance){var o=instance.options;if(o._zIndex){$(ui.helper).css("zIndex",o._zIndex)}}});var draggable=$.ui.draggable;
/*!
 * jQuery UI Droppable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 */
$.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var proportions,o=this.options,accept=o.accept;this.isover=!1;this.isout=!0;this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept)};this.proportions=function(){if(arguments.length){proportions=arguments[0]}else{return proportions?proportions:proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}}};this._addToManager(o.scope);o.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(scope){$.ui.ddmanager.droppables[scope]=$.ui.ddmanager.droppables[scope]||[];$.ui.ddmanager.droppables[scope].push(this)},_splice:function(drop){var i=0;for(;i<drop.length;i++){if(drop[i]===this){drop.splice(i,1)}}},_destroy:function(){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(key,value){if(key==="accept"){this.accept=$.isFunction(value)?value:function(d){return d.is(value)}}else if(key==="scope"){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop);this._addToManager(value)}
this._super(key,value)},_activate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}
if(draggable){this._trigger("activate",event,this.ui(draggable))}},_deactivate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}
if(draggable){this._trigger("deactivate",event,this.ui(draggable))}},_over:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return}
if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}
this._trigger("over",event,this.ui(draggable))}},_out:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return}
if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}
this._trigger("out",event,this.ui(draggable))}},_drop:function(event,custom){var draggable=custom||$.ui.ddmanager.current,childrenIntersection=!1;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return!1}
this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var inst=$(this).droppable("instance");if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope===draggable.options.scope&&inst.accept.call(inst.element[0],(draggable.currentItem||draggable.element))&&$.ui.intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance,event)){childrenIntersection=!0;return!1}});if(childrenIntersection){return!1}
if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}
if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}
this._trigger("drop",event,this.ui(draggable));return this.element}
return!1},ui:function(c){return{draggable:(c.currentItem||c.element),helper:c.helper,position:c.position,offset:c.positionAbs}}});$.ui.intersect=(function(){function isOverAxis(x,reference,size){return(x>=reference)&&(x<(reference+size))}
return function(draggable,droppable,toleranceMode,event){if(!droppable.offset){return!1}
var x1=(draggable.positionAbs||draggable.position.absolute).left+draggable.margins.left,y1=(draggable.positionAbs||draggable.position.absolute).top+draggable.margins.top,x2=x1+draggable.helperProportions.width,y2=y1+draggable.helperProportions.height,l=droppable.offset.left,t=droppable.offset.top,r=l+droppable.proportions().width,b=t+droppable.proportions().height;switch(toleranceMode){case "fit":return(l<=x1&&x2<=r&&t<=y1&&y2<=b);case "intersect":return(l<x1+(draggable.helperProportions.width/2)&&x2-(draggable.helperProportions.width/2)<r&&t<y1+(draggable.helperProportions.height/2)&&y2-(draggable.helperProportions.height/2)<b);case "pointer":return isOverAxis(event.pageY,t,droppable.proportions().height)&&isOverAxis(event.pageX,l,droppable.proportions().width);case "touch":return((y1>=t&&y1<=b)||(y2>=t&&y2<=b)||(y1<t&&y2>b))&&((x1>=l&&x1<=r)||(x2>=l&&x2<=r)||(x1<l&&x2>r));default:return!1}}})();$.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,event){var i,j,m=$.ui.ddmanager.droppables[t.options.scope]||[],type=event?event.type:null,list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(i=0;i<m.length;i++){if(m[i].options.disabled||(t&&!m[i].accept.call(m[i].element[0],(t.currentItem||t.element)))){continue}
for(j=0;j<list.length;j++){if(list[j]===m[i].element[0]){m[i].proportions().height=0;continue droppablesLoop}}
m[i].visible=m[i].element.css("display")!=="none";if(!m[i].visible){continue}
if(type==="mousedown"){m[i]._activate.call(m[i],event)}
m[i].offset=m[i].element.offset();m[i].proportions({width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight})}},drop:function(draggable,event){var dropped=!1;$.each(($.ui.ddmanager.droppables[draggable.options.scope]||[]).slice(),function(){if(!this.options){return}
if(!this.options.disabled&&this.visible&&$.ui.intersect(draggable,this,this.options.tolerance,event)){dropped=this._drop.call(this,event)||dropped}
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this.isout=!0;this.isover=!1;this._deactivate.call(this,event)}});return dropped},dragStart:function(draggable,event){draggable.element.parentsUntil("body").bind("scroll.droppable",function(){if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event)}})},drag:function(draggable,event){if(draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event)}
$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}
var parentInstance,scope,parent,intersects=$.ui.intersect(draggable,this,this.options.tolerance,event),c=!intersects&&this.isover?"isout":(intersects&&!this.isover?"isover":null);if(!c){return}
if(this.options.greedy){scope=this.options.scope;parent=this.element.parents(":data(ui-droppable)").filter(function(){return $(this).droppable("instance").options.scope===scope});if(parent.length){parentInstance=$(parent[0]).droppable("instance");parentInstance.greedyChild=(c==="isover")}}
if(parentInstance&&c==="isover"){parentInstance.isover=!1;parentInstance.isout=!0;parentInstance._out.call(parentInstance,event)}
this[c]=!0;this[c==="isout"?"isover":"isout"]=!1;this[c==="isover"?"_over":"_out"].call(this,event);if(parentInstance&&c==="isout"){parentInstance.isout=!1;parentInstance.isover=!0;parentInstance._over.call(parentInstance,event)}})},dragStop:function(draggable,event){draggable.element.parentsUntil("body").unbind("scroll.droppable");if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event)}}};var droppable=$.ui.droppable;
/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */
$.widget("ui.resizable",$.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(value){return parseInt(value,10)||0},_isNumber:function(value){return!isNaN(parseInt(value,10))},_hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return!1}
var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=!1;if(el[scroll]>0){return!0}
el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has},_create:function(){var n,i,handle,axis,hname,that=this,o=this.options;this.element.addClass("ui-resizable");$.extend(this,{_aspectRatio:!!(o.aspectRatio),aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));this.elementIsWrapper=!0;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}
this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});this._handles=$();if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"}
n=this.handles.split(",");this.handles={};for(i=0;i<n.length;i++){handle=$.trim(n[i]);hname="ui-resizable-"+handle;axis=$("<div class='ui-resizable-handle "+hname+"'></div>");axis.css({zIndex:o.zIndex});if("se"===handle){axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}
this.handles[handle]=".ui-resizable-"+handle;this.element.append(axis)}}
this._renderAxis=function(target){var i,axis,padPos,padWrapper;target=target||this.element;for(i in this.handles){if(this.handles[i].constructor===String){this.handles[i]=this.element.children(this.handles[i]).first().show()}else if(this.handles[i].jquery||this.handles[i].nodeType){this.handles[i]=$(this.handles[i]);this._on(this.handles[i],{"mousedown":that._mouseDown})}
if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){axis=$(this.handles[i],this.element);padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");target.css(padPos,padWrapper);this._proportionallyResize()}
this._handles=this._handles.add(this.handles[i])}};this._renderAxis(this.element);this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));this._handles.disableSelection();this._handles.mouseover(function(){if(!that.resizing){if(this.className){axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}
that.axis=axis&&axis[1]?axis[1]:"se"}});if(o.autoHide){this._handles.hide();$(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(o.disabled){return}
$(this).removeClass("ui-resizable-autohide");that._handles.show()}).mouseleave(function(){if(o.disabled){return}
if(!that.resizing){$(this).addClass("ui-resizable-autohide");that._handles.hide()}})}
this._mouseInit()},_destroy:function(){this._mouseDestroy();var wrapper,_destroy=function(exp){$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){_destroy(this.element);wrapper=this.element;this.originalElement.css({position:wrapper.css("position"),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")}).insertAfter(wrapper);wrapper.remove()}
this.originalElement.css("resize",this.originalResizeStyle);_destroy(this.originalElement);return this},_mouseCapture:function(event){var i,handle,capture=!1;for(i in this.handles){handle=$(this.handles[i])[0];if(handle===event.target||$.contains(handle,event.target)){capture=!0}}
return!this.options.disabled&&capture},_mouseStart:function(event){var curleft,curtop,cursor,o=this.options,el=this.element;this.resizing=!0;this._renderProxy();curleft=this._num(this.helper.css("left"));curtop=this._num(this.helper.css("top"));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0}
this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalPosition={left:curleft,top:curtop};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=(typeof o.aspectRatio==="number")?o.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);cursor=$(".ui-resizable-"+this.axis).css("cursor");$("body").css("cursor",cursor==="auto"?this.axis+"-resize":cursor);el.addClass("ui-resizable-resizing");this._propagate("start",event);return!0},_mouseDrag:function(event){var data,props,smp=this.originalMousePosition,a=this.axis,dx=(event.pageX-smp.left)||0,dy=(event.pageY-smp.top)||0,trigger=this._change[a];this._updatePrevProperties();if(!trigger){return!1}
data=trigger.apply(this,[event,dx,dy]);this._updateVirtualBoundaries(event.shiftKey);if(this._aspectRatio||event.shiftKey){data=this._updateRatio(data,event)}
data=this._respectSize(data,event);this._updateCache(data);this._propagate("resize",event);props=this._applyChanges();if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}
if(!$.isEmptyObject(props)){this._updatePrevProperties();this._trigger("resize",event,this.ui());this._applyChanges()}
return!1},_mouseStop:function(event){this.resizing=!1;var pr,ista,soffseth,soffsetw,s,left,top,o=this.options,that=this;if(this._helper){pr=this._proportionallyResizeElements;ista=pr.length&&(/textarea/i).test(pr[0].nodeName);soffseth=ista&&this._hasScroll(pr[0],"left")?0:that.sizeDiff.height;soffsetw=ista?0:that.sizeDiff.width;s={width:(that.helper.width()-soffsetw),height:(that.helper.height()-soffseth)};left=(parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left))||null;top=(parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top))||null;if(!o.animate){this.element.css($.extend(s,{top:top,left:left}))}
that.helper.height(that.size.height);that.helper.width(that.size.width);if(this._helper&&!o.animate){this._proportionallyResize()}}
$("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper){this.helper.remove()}
return!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var props={};if(this.position.top!==this.prevPosition.top){props.top=this.position.top+"px"}
if(this.position.left!==this.prevPosition.left){props.left=this.position.left+"px"}
if(this.size.width!==this.prevSize.width){props.width=this.size.width+"px"}
if(this.size.height!==this.prevSize.height){props.height=this.size.height+"px"}
this.helper.css(props);return props},_updateVirtualBoundaries:function(forceAspectRatio){var pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b,o=this.options;b={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||forceAspectRatio){pMinWidth=b.minHeight*this.aspectRatio;pMinHeight=b.minWidth/this.aspectRatio;pMaxWidth=b.maxHeight*this.aspectRatio;pMaxHeight=b.maxWidth/this.aspectRatio;if(pMinWidth>b.minWidth){b.minWidth=pMinWidth}
if(pMinHeight>b.minHeight){b.minHeight=pMinHeight}
if(pMaxWidth<b.maxWidth){b.maxWidth=pMaxWidth}
if(pMaxHeight<b.maxHeight){b.maxHeight=pMaxHeight}}
this._vBoundaries=b},_updateCache:function(data){this.offset=this.helper.offset();if(this._isNumber(data.left)){this.position.left=data.left}
if(this._isNumber(data.top)){this.position.top=data.top}
if(this._isNumber(data.height)){this.size.height=data.height}
if(this._isNumber(data.width)){this.size.width=data.width}},_updateRatio:function(data){var cpos=this.position,csize=this.size,a=this.axis;if(this._isNumber(data.height)){data.width=(data.height*this.aspectRatio)}else if(this._isNumber(data.width)){data.height=(data.width/this.aspectRatio)}
if(a==="sw"){data.left=cpos.left+(csize.width-data.width);data.top=null}
if(a==="nw"){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width)}
return data},_respectSize:function(data){var o=this._vBoundaries,a=this.axis,ismaxw=this._isNumber(data.width)&&o.maxWidth&&(o.maxWidth<data.width),ismaxh=this._isNumber(data.height)&&o.maxHeight&&(o.maxHeight<data.height),isminw=this._isNumber(data.width)&&o.minWidth&&(o.minWidth>data.width),isminh=this._isNumber(data.height)&&o.minHeight&&(o.minHeight>data.height),dw=this.originalPosition.left+this.originalSize.width,dh=this.position.top+this.size.height,cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw){data.width=o.minWidth}
if(isminh){data.height=o.minHeight}
if(ismaxw){data.width=o.maxWidth}
if(ismaxh){data.height=o.maxHeight}
if(isminw&&cw){data.left=dw-o.minWidth}
if(ismaxw&&cw){data.left=dw-o.maxWidth}
if(isminh&&ch){data.top=dh-o.minHeight}
if(ismaxh&&ch){data.top=dh-o.maxHeight}
if(!data.width&&!data.height&&!data.left&&data.top){data.top=null}else if(!data.width&&!data.height&&!data.top&&data.left){data.left=null}
return data},_getPaddingPlusBorderDimensions:function(element){var i=0,widths=[],borders=[element.css("borderTopWidth"),element.css("borderRightWidth"),element.css("borderBottomWidth"),element.css("borderLeftWidth")],paddings=[element.css("paddingTop"),element.css("paddingRight"),element.css("paddingBottom"),element.css("paddingLeft")];for(;i<4;i++){widths[i]=(parseInt(borders[i],10)||0);widths[i]+=(parseInt(paddings[i],10)||0)}
return{height:widths[0]+widths[2],width:widths[1]+widths[3]}},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return}
var prel,i=0,element=this.helper||this.element;for(;i<this._proportionallyResizeElements.length;i++){prel=this._proportionallyResizeElements[i];if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(prel)}
prel.css({height:(element.height()-this.outerDimensions.height)||0,width:(element.width()-this.outerDimensions.width)||0})}},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$("<div style='overflow:hidden;'></div>");this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++o.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(event,dx){return{width:this.originalSize.width+dx}},w:function(event,dx){var cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx}},n:function(event,dx,dy){var cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy}},s:function(event,dx,dy){return{height:this.originalSize.height+dy}},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]))},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]))}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);(n!=="resize"&&this._trigger(n,event,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});$.ui.plugin.add("resizable","animate",{stop:function(event){var that=$(this).resizable("instance"),o=that.options,pr=that._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),soffseth=ista&&that._hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width,style={width:(that.size.width-soffsetw),height:(that.size.height-soffseth)},left=(parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left))||null,top=(parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top))||null;that.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseInt(that.element.css("width"),10),height:parseInt(that.element.css("height"),10),top:parseInt(that.element.css("top"),10),left:parseInt(that.element.css("left"),10)};if(pr&&pr.length){$(pr[0]).css({width:data.width,height:data.height})}
that._updateCache(data);that._propagate("resize",event)}})}});$.ui.plugin.add("resizable","containment",{start:function(){var element,p,co,ch,cw,width,height,that=$(this).resizable("instance"),o=that.options,el=that.element,oc=o.containment,ce=(oc instanceof $)?oc.get(0):(/parent/.test(oc))?el.parent().get(0):oc;if(!ce){return}
that.containerElement=$(ce);if(/document/.test(oc)||oc===document){that.containerOffset={left:0,top:0};that.containerPosition={left:0,top:0};that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight}}else{element=$(ce);p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=that._num(element.css("padding"+name))});that.containerOffset=element.offset();that.containerPosition=element.position();that.containerSize={height:(element.innerHeight()-p[3]),width:(element.innerWidth()-p[1])};co=that.containerOffset;ch=that.containerSize.height;cw=that.containerSize.width;width=(that._hasScroll(ce,"left")?ce.scrollWidth:cw);height=(that._hasScroll(ce)?ce.scrollHeight:ch);that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height}}},resize:function(event){var woset,hoset,isParent,isOffsetRelative,that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cp=that.position,pRatio=that._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=that.containerElement,continueResize=!0;if(ce[0]!==document&&(/static/).test(ce.css("position"))){cop=co}
if(cp.left<(that._helper?co.left:0)){that.size.width=that.size.width+(that._helper?(that.position.left-co.left):(that.position.left-cop.left));if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=!1}
that.position.left=o.helper?co.left:0}
if(cp.top<(that._helper?co.top:0)){that.size.height=that.size.height+(that._helper?(that.position.top-co.top):that.position.top);if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=!1}
that.position.top=that._helper?co.top:0}
isParent=that.containerElement.get(0)===that.element.parent().get(0);isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));if(isParent&&isOffsetRelative){that.offset.left=that.parentData.left+that.position.left;that.offset.top=that.parentData.top+that.position.top}else{that.offset.left=that.element.offset().left;that.offset.top=that.element.offset().top}
woset=Math.abs(that.sizeDiff.width+(that._helper?that.offset.left-cop.left:(that.offset.left-co.left)));hoset=Math.abs(that.sizeDiff.height+(that._helper?that.offset.top-cop.top:(that.offset.top-co.top)));if(woset+that.size.width>=that.parentData.width){that.size.width=that.parentData.width-woset;if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=!1}}
if(hoset+that.size.height>=that.parentData.height){that.size.height=that.parentData.height-hoset;if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=!1}}
if(!continueResize){that.position.left=that.prevPosition.left;that.position.top=that.prevPosition.top;that.size.width=that.prevSize.width;that.size.height=that.prevSize.height}},stop:function(){var that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cop=that.containerPosition,ce=that.containerElement,helper=$(that.helper),ho=helper.offset(),w=helper.outerWidth()-that.sizeDiff.width,h=helper.outerHeight()-that.sizeDiff.height;if(that._helper&&!o.animate&&(/relative/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h})}
if(that._helper&&!o.animate&&(/static/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h})}}});$.ui.plugin.add("resizable","alsoResize",{start:function(){var that=$(this).resizable("instance"),o=that.options;$(o.alsoResize).each(function(){var el=$(this);el.data("ui-resizable-alsoresize",{width:parseInt(el.width(),10),height:parseInt(el.height(),10),left:parseInt(el.css("left"),10),top:parseInt(el.css("top"),10)})})},resize:function(event,ui){var that=$(this).resizable("instance"),o=that.options,os=that.originalSize,op=that.originalPosition,delta={height:(that.size.height-os.height)||0,width:(that.size.width-os.width)||0,top:(that.position.top-op.top)||0,left:(that.position.left-op.left)||0};$(o.alsoResize).each(function(){var el=$(this),start=$(this).data("ui-resizable-alsoresize"),style={},css=el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0){style[prop]=sum||null}});el.css(style)})},stop:function(){$(this).removeData("resizable-alsoresize")}});$.ui.plugin.add("resizable","ghost",{start:function(){var that=$(this).resizable("instance"),o=that.options,cs=that.size;that.ghost=that.originalElement.clone();that.ghost.css({opacity:0.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof o.ghost==="string"?o.ghost:"");that.ghost.appendTo(that.helper)},resize:function(){var that=$(this).resizable("instance");if(that.ghost){that.ghost.css({position:"relative",height:that.size.height,width:that.size.width})}},stop:function(){var that=$(this).resizable("instance");if(that.ghost&&that.helper){that.helper.get(0).removeChild(that.ghost.get(0))}}});$.ui.plugin.add("resizable","grid",{resize:function(){var outerDimensions,that=$(this).resizable("instance"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,grid=typeof o.grid==="number"?[o.grid,o.grid]:o.grid,gridX=(grid[0]||1),gridY=(grid[1]||1),ox=Math.round((cs.width-os.width)/gridX)*gridX,oy=Math.round((cs.height-os.height)/gridY)*gridY,newWidth=os.width+ox,newHeight=os.height+oy,isMaxWidth=o.maxWidth&&(o.maxWidth<newWidth),isMaxHeight=o.maxHeight&&(o.maxHeight<newHeight),isMinWidth=o.minWidth&&(o.minWidth>newWidth),isMinHeight=o.minHeight&&(o.minHeight>newHeight);o.grid=grid;if(isMinWidth){newWidth+=gridX}
if(isMinHeight){newHeight+=gridY}
if(isMaxWidth){newWidth-=gridX}
if(isMaxHeight){newHeight-=gridY}
if(/^(se|s|e)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight}else if(/^(ne)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.top=op.top-oy}else if(/^(sw)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.left=op.left-ox}else{if(newHeight-gridY<=0||newWidth-gridX<=0){outerDimensions=that._getPaddingPlusBorderDimensions(this)}
if(newHeight-gridY>0){that.size.height=newHeight;that.position.top=op.top-oy}else{newHeight=gridY-outerDimensions.height;that.size.height=newHeight;that.position.top=op.top+os.height-newHeight}
if(newWidth-gridX>0){that.size.width=newWidth;that.position.left=op.left-ox}else{newWidth=gridX-outerDimensions.width;that.size.width=newWidth;that.position.left=op.left+os.width-newWidth}}}});var resizable=$.ui.resizable;
/*!
 * jQuery UI Selectable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectable/
 */
var selectable=$.widget("ui.selectable",$.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var selectees,that=this;this.element.addClass("ui-selectable");this.dragged=!1;this.refresh=function(){selectees=$(that.options.filter,that.element[0]);selectees.addClass("ui-selectee");selectees.each(function(){var $this=$(this),pos=$this.offset();$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:!1,selected:$this.hasClass("ui-selected"),selecting:$this.hasClass("ui-selecting"),unselecting:$this.hasClass("ui-unselecting")})})};this.refresh();this.selectees=selectees.addClass("ui-selectee");this._mouseInit();this.helper=$("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()},_mouseStart:function(event){var that=this,options=this.options;this.opos=[event.pageX,event.pageY];if(this.options.disabled){return}
this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);this.helper.css({"left":event.pageX,"top":event.pageY,"width":0,"height":0});if(options.autoRefresh){this.refresh()}
this.selectees.filter(".ui-selected").each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=!0;if(!event.metaKey&&!event.ctrlKey){selectee.$element.removeClass("ui-selected");selectee.selected=!1;selectee.$element.addClass("ui-unselecting");selectee.unselecting=!0;that._trigger("unselecting",event,{unselecting:selectee.element})}});$(event.target).parents().addBack().each(function(){var doSelect,selectee=$.data(this,"selectable-item");if(selectee){doSelect=(!event.metaKey&&!event.ctrlKey)||!selectee.$element.hasClass("ui-selected");selectee.$element.removeClass(doSelect?"ui-unselecting":"ui-selected").addClass(doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;if(doSelect){that._trigger("selecting",event,{selecting:selectee.element})}else{that._trigger("unselecting",event,{unselecting:selectee.element})}
return!1}})},_mouseDrag:function(event){this.dragged=!0;if(this.options.disabled){return}
var tmp,that=this,options=this.options,x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){tmp=x2;x2=x1;x1=tmp}
if(y1>y2){tmp=y2;y2=y1;y1=tmp}
this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item"),hit=!1;if(!selectee||selectee.element===that.element[0]){return}
if(options.tolerance==="touch"){hit=(!(selectee.left>x2||selectee.right<x1||selectee.top>y2||selectee.bottom<y1))}else if(options.tolerance==="fit"){hit=(selectee.left>x1&&selectee.right<x2&&selectee.top>y1&&selectee.bottom<y2)}
if(hit){if(selectee.selected){selectee.$element.removeClass("ui-selected");selectee.selected=!1}
if(selectee.unselecting){selectee.$element.removeClass("ui-unselecting");selectee.unselecting=!1}
if(!selectee.selecting){selectee.$element.addClass("ui-selecting");selectee.selecting=!0;that._trigger("selecting",event,{selecting:selectee.element})}}else{if(selectee.selecting){if((event.metaKey||event.ctrlKey)&&selectee.startselected){selectee.$element.removeClass("ui-selecting");selectee.selecting=!1;selectee.$element.addClass("ui-selected");selectee.selected=!0}else{selectee.$element.removeClass("ui-selecting");selectee.selecting=!1;if(selectee.startselected){selectee.$element.addClass("ui-unselecting");selectee.unselecting=!0}
that._trigger("unselecting",event,{unselecting:selectee.element})}}
if(selectee.selected){if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){selectee.$element.removeClass("ui-selected");selectee.selected=!1;selectee.$element.addClass("ui-unselecting");selectee.unselecting=!0;that._trigger("unselecting",event,{unselecting:selectee.element})}}}});return!1},_mouseStop:function(event){var that=this;this.dragged=!1;$(".ui-unselecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-unselecting");selectee.unselecting=!1;selectee.startselected=!1;that._trigger("unselected",event,{unselected:selectee.element})});$(".ui-selecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-selecting").addClass("ui-selected");selectee.selecting=!1;selectee.selected=!0;selectee.startselected=!0;that._trigger("selected",event,{selected:selectee.element})});this._trigger("stop",event);this.helper.remove();return!1}});
/*!
 * jQuery UI Sortable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */
var sortable=$.widget("ui.sortable",$.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(x,reference,size){return(x>=reference)&&(x<(reference+size))},_isFloating:function(item){return(/left|right/).test(item.css("float"))||(/inline|table-cell/).test(item.css("display"))},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.offset=this.element.offset();this._mouseInit();this._setHandleClassName();this.ready=!0},_setOption:function(key,value){this._super(key,value);if(key==="handle"){this._setHandleClassName()}},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");$.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--){this.items[i].item.removeData(this.widgetName+"-item")}
return this},_mouseCapture:function(event,overrideHandle){var currentItem=null,validHandle=!1,that=this;if(this.reverting){return!1}
if(this.options.disabled||this.options.type==="static"){return!1}
this._refreshItems(event);$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")===that){currentItem=$(this);return!1}});if($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target)}
if(!currentItem){return!1}
if(this.options.handle&&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if(this===event.target){validHandle=!0}});if(!validHandle){return!1}}
this.currentItem=currentItem;this._removeCurrentsFromItems();return!0},_mouseStart:function(event,overrideHandle,noActivation){var i,body,o=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()}
this._createPlaceholder();if(o.containment){this._setContainment()}
if(o.cursor&&o.cursor!=="auto"){body=this.document.find("body");this.storedCursor=body.css("cursor");body.css("cursor",o.cursor);this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body)}
if(o.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}
this.helper.css("opacity",o.opacity)}
if(o.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}
this.helper.css("zIndex",o.zIndex)}
if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()}
this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}
if(!noActivation){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this))}}
if($.ui.ddmanager){$.ui.ddmanager.current=this}
if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event)}
this.dragging=!0;this.helper.addClass("ui-sortable-helper");this._mouseDrag(event);return!0},_mouseDrag:function(event){var i,item,itemElement,intersection,o=this.options,scrolled=!1;this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}
if(this.options.scroll){if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed}
if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed}}else{if(event.pageY-this.document.scrollTop()<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed)}else if(this.window.height()-(event.pageY-this.document.scrollTop())<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)}
if(event.pageX-this.document.scrollLeft()<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed)}else if(this.window.width()-(event.pageX-this.document.scrollLeft())<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed)}}
if(scrolled!==!1&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event)}}
this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}
if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}
for(i=this.items.length-1;i>=0;i--){item=this.items[i];itemElement=item.item[0];intersection=this._intersectsWithPointer(item);if(!intersection){continue}
if(item.instance!==this.currentContainer){continue}
if(itemElement!==this.currentItem[0]&&this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],itemElement):!0)){this.direction=intersection===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item)}else{break}
this._trigger("change",event,this._uiHash());break}}
this._contactContainers(event);if($.ui.ddmanager){$.ui.ddmanager.drag(this,event)}
this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return!1},_mouseStop:function(event,noPropagation){if(!event){return}
if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event)}
if(this.options.revert){var that=this,cur=this.placeholder.offset(),axis=this.options.axis,animation={};if(!axis||axis==="x"){animation.left=cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)}
if(!axis||axis==="y"){animation.top=cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)}
this.reverting=!0;$(this.helper).animate(animation,parseInt(this.options.revert,10)||500,function(){that._clear(event)})}else{this._clear(event,noPropagation)}
return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}
for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0}}}
if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}
if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}
$.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem)}else{$(this.domPosition.parent).prepend(this.currentItem)}}
return this},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||(/(.+)[\-=_](.+)/));if(res){str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]))}});if(!str.length&&o.key){str.push(o.key+"=")}
return str.join("&")},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"")});return ret},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElementHeight=(this.options.axis==="x")||((y1+dyClick)>t&&(y1+dyClick)<b),isOverElementWidth=(this.options.axis==="y")||((x1+dxClick)>l&&(x1+dxClick)<r),isOverElement=isOverElementHeight&&isOverElementWidth;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"])){return isOverElement}else{return(l<x1+(this.helperProportions.width/2)&&x2-(this.helperProportions.width/2)<r&&t<y1+(this.helperProportions.height/2)&&y2-(this.helperProportions.height/2)<b)}},_intersectsWithPointer:function(item){var isOverElementHeight=(this.options.axis==="x")||this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=(this.options.axis==="y")||this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth,verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(!isOverElement){return!1}
return this.floating?(((horizontalDirection&&horizontalDirection==="right")||verticalDirection==="down")?2:1):(verticalDirection&&(verticalDirection==="down"?2:1))},_intersectsWithSides:function(item){var isOverBottomHalf=this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height/2),item.height),isOverRightHalf=this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width/2),item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return((horizontalDirection==="right"&&isOverRightHalf)||(horizontalDirection==="left"&&!isOverRightHalf))}else{return verticalDirection&&((verticalDirection==="down"&&isOverBottomHalf)||(verticalDirection==="up"&&!isOverBottomHalf))}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!==0&&(delta>0?"down":"up")},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!==0&&(delta>0?"right":"left")},refresh:function(event){this._refreshItems(event);this._setHandleClassName();this.refreshPositions();return this},_connectWith:function(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith},_getItemsAsjQuery:function(connected){var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst])}}}}
queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);function addItems(){items.push(this)}
for(i=queries.length-1;i>=0;i--){queries[i][0].each(addItems)}
return $(items)},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]===item.item[0]){return!1}}
return!0})},_refreshItems:function(event){this.items=[];this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();if(connectWith&&this.ready){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst)}}}}
for(i=queries.length-1;i>=0;i--){targetData=queries[i][1];_queries=queries[i][0];for(j=0,queriesLength=_queries.length;j<queriesLength;j++){item=$(_queries[j]);item.data(this.widgetName+"-item",targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0})}}},refreshPositions:function(fast){this.floating=this.items.length?this.options.axis==="x"||this._isFloating(this.items[0].item):!1;if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}
var i,item,t,p;for(i=this.items.length-1;i>=0;i--){item=this.items[i];if(item.instance!==this.currentContainer&&this.currentContainer&&item.item[0]!==this.currentItem[0]){continue}
t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight()}
p=t.offset();item.left=p.left;item.top=p.top}
if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(i=this.containers.length-1;i>=0;i--){p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight()}}
return this},_createPlaceholder:function(that){that=that||this;var className,o=that.options;if(!o.placeholder||o.placeholder.constructor===String){className=o.placeholder;o.placeholder={element:function(){var nodeName=that.currentItem[0].nodeName.toLowerCase(),element=$("<"+nodeName+">",that.document[0]).addClass(className||that.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");if(nodeName==="tbody"){that._createTrPlaceholder(that.currentItem.find("tr").eq(0),$("<tr>",that.document[0]).appendTo(element))}else if(nodeName==="tr"){that._createTrPlaceholder(that.currentItem,element)}else if(nodeName==="img"){element.attr("src",that.currentItem.attr("src"))}
if(!className){element.css("visibility","hidden")}
return element},update:function(container,p){if(className&&!o.forcePlaceholderSize){return}
if(!p.height()){p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10))}
if(!p.width()){p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10))}}}}
that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));that.currentItem.after(that.placeholder);o.placeholder.update(that,that.placeholder)},_createTrPlaceholder:function(sourceTr,targetTr){var that=this;sourceTr.children().each(function(){$("<td>&#160;</td>",that.document[0]).attr("colspan",$(this).attr("colspan")||1).appendTo(targetTr)})},_contactContainers:function(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,cur,nearBottom,floating,axis,innermostContainer=null,innermostIndex=null;for(i=this.containers.length-1;i>=0;i--){if($.contains(this.currentItem[0],this.containers[i].element[0])){continue}
if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0])){continue}
innermostContainer=this.containers[i];innermostIndex=i}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0}}}
if(!innermostContainer){return}
if(this.containers.length===1){if(!this.containers[innermostIndex].containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1}}else{dist=10000;itemWithLeastDistance=null;floating=innermostContainer.floating||this._isFloating(this.currentItem);posProperty=floating?"left":"top";sizeProperty=floating?"width":"height";axis=floating?"clientX":"clientY";for(j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])){continue}
if(this.items[j].item[0]===this.currentItem[0]){continue}
cur=this.items[j].item.offset()[posProperty];nearBottom=!1;if(event[axis]-cur>this.items[j][sizeProperty]/2){nearBottom=!0}
if(Math.abs(event[axis]-cur)<dist){dist=Math.abs(event[axis]-cur);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down"}}
if(!itemWithLeastDistance&&!this.options.dropOnEmpty){return}
if(this.currentContainer===this.containers[innermostIndex]){if(!this.currentContainer.containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash());this.currentContainer.containerCache.over=1}
return}
itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,!0):this._rearrange(event,null,this.containers[innermostIndex].element,!0);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.currentContainer=this.containers[innermostIndex];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1}},_createHelper:function(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper==="clone"?this.currentItem.clone():this.currentItem);if(!helper.parents("body").length){$(o.appendTo!=="parent"?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0])}
if(helper[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}
if(!helper[0].style.width||o.forceHelperSize){helper.width(this.currentItem.width())}
if(!helper[0].style.height||o.forceHelperSize){helper.height(this.currentItem.height())}
return helper},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ")}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0}}
if("left" in obj){this.offset.click.left=obj.left+this.margins.left}
if("right" in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left}
if("top" in obj){this.offset.click.top=obj.top+this.margins.top}
if("bottom" in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop()}
if(this.offsetParent[0]===this.document[0].body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie)){po={top:0,left:0}}
return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var ce,co,over,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode}
if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,o.containment==="document"?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,(o.containment==="document"?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}
if(!(/^(document|window|parent)$/).test(o.containment)){ce=$(o.containment)[0];co=$(o.containment).offset();over=($(ce).css("overflow")!=="hidden");this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(d,pos){if(!pos){pos=this.position}
var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top+this.offset.relative.top*mod+this.offset.parent.top*mod-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left+this.offset.relative.left*mod+this.offset.parent.left*mod-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))}},_generatePosition:function(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}
if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0]){pageX=this.containment[0]+this.offset.click.left}
if(event.pageY-this.offset.click.top<this.containment[1]){pageY=this.containment[1]+this.offset.click.top}
if(event.pageX-this.offset.click.left>this.containment[2]){pageX=this.containment[2]+this.offset.click.left}
if(event.pageY-this.offset.click.top>this.containment[3]){pageY=this.containment[3]+this.offset.click.top}}
if(o.grid){top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?((top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3])?top:((top-this.offset.click.top>=this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?((left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2])?left:((left-this.offset.click.left>=this.containment[0])?left-o.grid[0]:left+o.grid[0])):left}}
return{top:(pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))}},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?i.item[0]:i.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter===this.counter){this.refreshPositions(!hardRefresh)}})},_clear:function(event,noPropagation){this.reverting=!1;var i,delayedTriggers=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}
this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]=""}}
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}
if(this.fromOutside&&!noPropagation){delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside))})}
if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash())})}
if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash())});delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this))}}).call(this,this.currentContainer));delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this))}}).call(this,this.currentContainer))}}
function delayEvent(type,instance,container){return function(event){container._trigger(type,event,instance._uiHash(instance))}}
for(i=this.containers.length-1;i>=0;i--){if(!noPropagation){delayedTriggers.push(delayEvent("deactivate",this,this.containers[i]))}
if(this.containers[i].containerCache.over){delayedTriggers.push(delayEvent("out",this,this.containers[i]));this.containers[i].containerCache.over=0}}
if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove()}
if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}
if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)}
this.dragging=!1;if(!noPropagation){this._trigger("beforeStop",event,this._uiHash())}
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(!this.cancelHelperRemoval){if(this.helper[0]!==this.currentItem[0]){this.helper.remove()}
this.helper=null}
if(!noPropagation){for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event)}
this._trigger("stop",event,this._uiHash())}
this.fromOutside=!1;return!this.cancelHelperRemoval},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===!1){this.cancel()}},_uiHash:function(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null}}});
/*!
 * jQuery UI Accordion 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */
var accordion=$.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var options=this.options;this.prevShow=this.prevHide=$();this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");if(!options.collapsible&&(options.active===!1||options.active==null)){options.active=0}
this._processPanels();if(options.active<0){options.active+=this.headers.length}
this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?$():this.active.next()}},_createIcons:function(){var icons=this.options.icons;if(icons){$("<span>").addClass("ui-accordion-header-icon ui-icon "+icons.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(icons.header).addClass(icons.activeHeader);this.headers.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var contents;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default "+"ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();this._destroyIcons();contents=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom "+"ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();if(this.options.heightStyle!=="content"){contents.css("height","")}},_setOption:function(key,value){if(key==="active"){this._activate(value);return}
if(key==="event"){if(this.options.event){this._off(this.headers,this.options.event)}
this._setupEvents(value)}
this._super(key,value);if(key==="collapsible"&&!value&&this.options.active===!1){this._activate(0)}
if(key==="icons"){this._destroyIcons();if(value){this._createIcons()}}
if(key==="disabled"){this.element.toggleClass("ui-state-disabled",!!value).attr("aria-disabled",value);this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!value)}},_keydown:function(event){if(event.altKey||event.ctrlKey){return}
var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=!1;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);break;case keyCode.HOME:toFocus=this.headers[0];break;case keyCode.END:toFocus=this.headers[length-1];break}
if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);toFocus.focus();event.preventDefault()}},_panelKeyDown:function(event){if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){$(event.currentTarget).prev().focus()}},refresh:function(){var options=this.options;this._processPanels();if((options.active===!1&&options.collapsible===!0)||!this.headers.length){options.active=!1;this.active=$()}else if(options.active===!1){this._activate(0)}else if(this.active.length&&!$.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){options.active=!1;this.active=$()}else{this._activate(Math.max(0,options.active-1))}}else{options.active=this.headers.index(this.active)}
this._destroyIcons();this._refresh()},_processPanels:function(){var prevHeaders=this.headers,prevPanels=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();if(prevPanels){this._off(prevHeaders.not(this.headers));this._off(prevPanels.not(this.panels))}},_refresh:function(){var maxHeight,options=this.options,heightStyle=options.heightStyle,parent=this.element.parent();this.active=this._findActive(options.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");this.active.next().addClass("ui-accordion-content-active").show();this.headers.attr("role","tab").each(function(){var header=$(this),headerId=header.uniqueId().attr("id"),panel=header.next(),panelId=panel.uniqueId().attr("id");header.attr("aria-controls",panelId);panel.attr("aria-labelledby",headerId)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})}
this._createIcons();this._setupEvents(options.event);if(heightStyle==="fill"){maxHeight=parent.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return}
maxHeight-=elem.outerHeight(!0)});this.headers.each(function(){maxHeight-=$(this).outerHeight(!0)});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")}else if(heightStyle==="auto"){maxHeight=0;this.headers.next().each(function(){maxHeight=Math.max(maxHeight,$(this).css("height","").height())}).height(maxHeight)}},_activate:function(index){var active=this._findActive(index)[0];if(active===this.active[0]){return}
active=active||this.active[0];this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop})},_findActive:function(selector){return typeof selector==="number"?this.headers.eq(selector):$()},_setupEvents:function(event){var events={keydown:"_keydown"};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler"})}
this._off(this.headers.add(this.headers.next()));this._on(this.headers,events);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers)},_eventHandler:function(event){var options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing?$():clicked,newPanel:toShow};event.preventDefault();if((clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===!1)){return}
options.active=collapsing?!1:this.headers.index(clicked);this.active=clickedIsActive?$():clicked;this._toggle(eventData);active.removeClass("ui-accordion-header-active ui-state-active");if(options.icons){active.children(".ui-accordion-header-icon").removeClass(options.icons.activeHeader).addClass(options.icons.header)}
if(!clickedIsActive){clicked.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(options.icons){clicked.children(".ui-accordion-header-icon").removeClass(options.icons.header).addClass(options.icons.activeHeader)}
clicked.next().addClass("ui-accordion-content-active")}},_toggle:function(data){var toShow=data.newPanel,toHide=this.prevShow.length?this.prevShow:data.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0);this.prevShow=toShow;this.prevHide=toHide;if(this.options.animate){this._animate(toShow,toHide,data)}else{toHide.hide();toShow.show();this._toggleComplete(data)}
toHide.attr({"aria-hidden":"true"});toHide.prev().attr({"aria-selected":"false","aria-expanded":"false"});if(toShow.length&&toHide.length){toHide.prev().attr({"tabIndex":-1,"aria-expanded":"false"})}else if(toShow.length){this.headers.filter(function(){return parseInt($(this).attr("tabIndex"),10)===0}).attr("tabIndex",-1)}
toShow.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(toShow,toHide,data){var total,easing,duration,that=this,adjust=0,boxSizing=toShow.css("box-sizing"),down=toShow.length&&(!toHide.length||(toShow.index()<toHide.index())),animate=this.options.animate||{},options=down&&animate.down||animate,complete=function(){that._toggleComplete(data)};if(typeof options==="number"){duration=options}
if(typeof options==="string"){easing=options}
easing=easing||options.easing||animate.easing;duration=duration||options.duration||animate.duration;if(!toHide.length){return toShow.animate(this.showProps,duration,easing,complete)}
if(!toShow.length){return toHide.animate(this.hideProps,duration,easing,complete)}
total=toShow.show().outerHeight();toHide.animate(this.hideProps,{duration:duration,easing:easing,step:function(now,fx){fx.now=Math.round(now)}});toShow.hide().animate(this.showProps,{duration:duration,easing:easing,complete:complete,step:function(now,fx){fx.now=Math.round(now);if(fx.prop!=="height"){if(boxSizing==="content-box"){adjust+=fx.now}}else if(that.options.heightStyle!=="content"){fx.now=Math.round(total-toHide.outerHeight()-adjust);adjust=0}}})},_toggleComplete:function(data){var toHide=data.oldPanel;toHide.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");if(toHide.length){toHide.parent()[0].className=toHide.parent()[0].className}
this._trigger("activate",null,data)}});
/*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */
var menu=$.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=!1;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0});if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")}
this._on({"mousedown .ui-menu-item":function(event){event.preventDefault()},"click .ui-menu-item":function(event){var target=$(event.target);if(!this.mouseHandled&&target.not(".ui-state-disabled").length){this.select(event);if(!event.isPropagationStopped()){this.mouseHandled=!0}
if(target.has(".ui-menu").length){this.expand(event)}else if(!this.element.is(":focus")&&$(this.document[0].activeElement).closest(".ui-menu").length){this.element.trigger("focus",[!0]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}},"mouseenter .ui-menu-item":function(event){if(this.previousFilter){return}
var target=$(event.currentTarget);target.siblings(".ui-state-active").removeClass("ui-state-active");this.focus(event,target)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(event,keepActiveItem){var item=this.active||this.element.find(this.options.items).eq(0);if(!keepActiveItem){this.focus(event,item)}},blur:function(event){this._delay(function(){if(!$.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(event)}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(event){if(this._closeOnDocumentClick(event)){this.collapseAll(event)}
this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var elem=$(this);if(elem.data("ui-menu-submenu-carat")){elem.remove()}});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(event){var match,prev,character,skip,preventDefault=!0;switch(event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);break;case $.ui.keyCode.HOME:this._move("first","first",event);break;case $.ui.keyCode.END:this._move("last","last",event);break;case $.ui.keyCode.UP:this.previous(event);break;case $.ui.keyCode.DOWN:this.next(event);break;case $.ui.keyCode.LEFT:this.collapse(event);break;case $.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(event)}
break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=!1;prev=this.previousFilter||"";character=String.fromCharCode(event.keyCode);skip=!1;clearTimeout(this.filterTimer);if(character===prev){skip=!0}else{character=prev+character}
match=this._filterMenuItems(character);match=skip&&match.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):match;if(!match.length){character=String.fromCharCode(event.keyCode);match=this._filterMenuItems(character)}
if(match.length){this.focus(event,match);this.previousFilter=character;this.filterTimer=this._delay(function(){delete this.previousFilter},1000)}else{delete this.previousFilter}}
if(preventDefault){event.preventDefault()}},_activate:function(event){if(!this.active.is(".ui-state-disabled")){if(this.active.is("[aria-haspopup='true']")){this.expand(event)}else{this.select(event)}}},refresh:function(){var menus,items,that=this,icon=this.options.icons.submenu,submenus=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length);submenus.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var menu=$(this),item=menu.parent(),submenuCarat=$("<span>").addClass("ui-menu-icon ui-icon "+icon).data("ui-menu-submenu-carat",!0);item.attr("aria-haspopup","true").prepend(submenuCarat);menu.attr("aria-labelledby",item.attr("id"))});menus=submenus.add(this.element);items=menus.find(this.options.items);items.not(".ui-menu-item").each(function(){var item=$(this);if(that._isDivider(item)){item.addClass("ui-widget-content ui-menu-divider")}});items.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()});items.filter(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!$.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(key,value){if(key==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(value.submenu)}
if(key==="disabled"){this.element.toggleClass("ui-state-disabled",!!value).attr("aria-disabled",value)}
this._super(key,value)},focus:function(event,item){var nested,focused;this.blur(event,event&&event.type==="focus");this._scrollIntoView(item);this.active=item.first();focused=this.active.addClass("ui-state-focus").removeClass("ui-state-active");if(this.options.role){this.element.attr("aria-activedescendant",focused.attr("id"))}
this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");if(event&&event.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}
nested=item.children(".ui-menu");if(nested.length&&event&&(/^mouse/.test(event.type))){this._startOpening(nested)}
this.activeMenu=item.parent();this._trigger("focus",event,{item:item})},_scrollIntoView:function(item){var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;if(this._hasScroll()){borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0;paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0;offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop;scroll=this.activeMenu.scrollTop();elementHeight=this.activeMenu.height();itemHeight=item.outerHeight();if(offset<0){this.activeMenu.scrollTop(scroll+offset)}else if(offset+itemHeight>elementHeight){this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight)}}},blur:function(event,fromFocus){if(!fromFocus){clearTimeout(this.timer)}
if(!this.active){return}
this.active.removeClass("ui-state-focus");this.active=null;this._trigger("blur",event,{item:this.active})},_startOpening:function(submenu){clearTimeout(this.timer);if(submenu.attr("aria-hidden")!=="true"){return}
this.timer=this._delay(function(){this._close();this._open(submenu)},this.delay)},_open:function(submenu){var position=$.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden","true");submenu.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(position)},collapseAll:function(event,all){clearTimeout(this.timer);this.timer=this._delay(function(){var currentMenu=all?this.element:$(event&&event.target).closest(this.element.find(".ui-menu"));if(!currentMenu.length){currentMenu=this.element}
this._close(currentMenu);this.blur(event);this.activeMenu=currentMenu},this.delay)},_close:function(startMenu){if(!startMenu){startMenu=this.active?this.active.parent():this.element}
startMenu.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(event){return!$(event.target).closest(".ui-menu").length},_isDivider:function(item){return!/[^\-\u2014\u2013\s]/.test(item.text())},collapse:function(event){var newItem=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(newItem&&newItem.length){this._close();this.focus(event,newItem)}},expand:function(event){var newItem=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();if(newItem&&newItem.length){this._open(newItem.parent());this._delay(function(){this.focus(event,newItem)})}},next:function(event){this._move("next","first",event)},previous:function(event){this._move("prev","last",event)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(direction,filter,event){var next;if(this.active){if(direction==="first"||direction==="last"){next=this.active[direction==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{next=this.active[direction+"All"](".ui-menu-item").eq(0)}}
if(!next||!next.length||!this.active){next=this.activeMenu.find(this.options.items)[filter]()}
this.focus(event,next)},nextPage:function(event){var item,base,height;if(!this.active){this.next(event);return}
if(this.isLastItem()){return}
if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base-height<0});this.focus(event,item)}else{this.focus(event,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]())}},previousPage:function(event){var item,base,height;if(!this.active){this.next(event);return}
if(this.isFirstItem()){return}
if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base+height>0});this.focus(event,item)}else{this.focus(event,this.activeMenu.find(this.options.items).first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(event){this.active=this.active||$(event.target).closest(".ui-menu-item");var ui={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(event,!0)}
this._trigger("select",event,ui)},_filterMenuItems:function(character){var escapedCharacter=character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),regex=new RegExp("^"+escapedCharacter,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return regex.test($.trim($(this).text()))})}});
/*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
$.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var suppressKeyPress,suppressKeyPressRepeat,suppressInput,nodeName=this.element[0].nodeName.toLowerCase(),isTextarea=nodeName==="textarea",isInput=nodeName==="input";this.isMultiLine=isTextarea?!0:isInput?!1:this.element.prop("isContentEditable");this.valueMethod=this.element[isTextarea||isInput?"val":"text"];this.isNewMenu=!0;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(event){if(this.element.prop("readOnly")){suppressKeyPress=!0;suppressInput=!0;suppressKeyPressRepeat=!0;return}
suppressKeyPress=!1;suppressInput=!1;suppressKeyPressRepeat=!1;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=!0;this._move("previousPage",event);break;case keyCode.PAGE_DOWN:suppressKeyPress=!0;this._move("nextPage",event);break;case keyCode.UP:suppressKeyPress=!0;this._keyEvent("previous",event);break;case keyCode.DOWN:suppressKeyPress=!0;this._keyEvent("next",event);break;case keyCode.ENTER:if(this.menu.active){suppressKeyPress=!0;event.preventDefault();this.menu.select(event)}
break;case keyCode.TAB:if(this.menu.active){this.menu.select(event)}
break;case keyCode.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term)}
this.close(event);event.preventDefault()}
break;default:suppressKeyPressRepeat=!0;this._searchTimeout(event);break}},keypress:function(event){if(suppressKeyPress){suppressKeyPress=!1;if(!this.isMultiLine||this.menu.element.is(":visible")){event.preventDefault()}
return}
if(suppressKeyPressRepeat){return}
var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);break;case keyCode.PAGE_DOWN:this._move("nextPage",event);break;case keyCode.UP:this._keyEvent("previous",event);break;case keyCode.DOWN:this._keyEvent("next",event);break}},input:function(event){if(suppressInput){suppressInput=!1;event.preventDefault();return}
this._searchTimeout(event)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return}
clearTimeout(this.searching);this.close(event);this._change(event)}});this._initSource();this.menu=$("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");this._on(this.menu.element,{mousedown:function(event){event.preventDefault();this.cancelBlur=!0;this._delay(function(){delete this.cancelBlur});var menuElement=this.menu.element[0];if(!$(event.target).closest(".ui-menu-item").length){this._delay(function(){var that=this;this.document.one("mousedown",function(event){if(event.target!==that.element[0]&&event.target!==menuElement&&!$.contains(menuElement,event.target)){that.close()}})})}},menufocus:function(event,ui){var label,item;if(this.isNewMenu){this.isNewMenu=!1;if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){$(event.target).trigger(event.originalEvent)});return}}
item=ui.item.data("ui-autocomplete-item");if(!1!==this._trigger("focus",event,{item:item})){if(event.originalEvent&&/^key/.test(event.originalEvent.type)){this._value(item.value)}}
label=ui.item.attr("aria-label")||item.value;if(label&&$.trim(label).length){this.liveRegion.children().hide();$("<div>").text(label).appendTo(this.liveRegion)}},menuselect:function(event,ui){var item=ui.item.data("ui-autocomplete-item"),previous=this.previous;if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=previous;this._delay(function(){this.previous=previous;this.selectedItem=item})}
if(!1!==this._trigger("select",event,{item:item})){this._value(item.value)}
this.term=this._value();this.close(event);this.selectedItem=item}});this.liveRegion=$("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(key,value){this._super(key,value);if(key==="source"){this._initSource()}
if(key==="appendTo"){this.menu.element.appendTo(this._appendTo())}
if(key==="disabled"&&value&&this.xhr){this.xhr.abort()}},_appendTo:function(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0)}
if(!element||!element[0]){element=this.element.closest(".ui-front")}
if(!element.length){element=this.document[0].body}
return element},_initSource:function(){var array,url,that=this;if($.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term))}}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(that.xhr){that.xhr.abort()}
that.xhr=$.ajax({url:url,data:request,dataType:"json",success:function(data){response(data)},error:function(){response([])}})}}else{this.source=this.options.source}},_searchTimeout:function(event){clearTimeout(this.searching);this.searching=this._delay(function(){var equalValues=this.term===this._value(),menuVisible=this.menu.element.is(":visible"),modifierKey=event.altKey||event.ctrlKey||event.metaKey||event.shiftKey;if(!equalValues||(equalValues&&!menuVisible&&!modifierKey)){this.selectedItem=null;this.search(null,event)}},this.options.delay)},search:function(value,event){value=value!=null?value:this._value();this.term=this._value();if(value.length<this.options.minLength){return this.close(event)}
if(this._trigger("search",event)===!1){return}
return this._search(value)},_search:function(value){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=!1;this.source({term:value},this._response())},_response:function(){var index=++this.requestIndex;return $.proxy(function(content){if(index===this.requestIndex){this.__response(content)}
this.pending--;if(!this.pending){this.element.removeClass("ui-autocomplete-loading")}},this)},__response:function(content){if(content){content=this._normalize(content)}
this._trigger("response",null,{content:content});if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){this._suggest(content);this._trigger("open")}else{this._close()}},close:function(event){this.cancelSearch=!0;this._close(event)},_close:function(event){if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=!0;this._trigger("close",event)}},_change:function(event){if(this.previous!==this._value()){this._trigger("change",event,{item:this.selectedItem})}},_normalize:function(items){if(items.length&&items[0].label&&items[0].value){return items}
return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item}}
return $.extend({},item,{label:item.label||item.value,value:item.value||item.label})})},_suggest:function(items){var ul=this.menu.element.empty();this._renderMenu(ul,items);this.isNewMenu=!0;this.menu.refresh();ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var ul=this.menu.element;ul.outerWidth(Math.max(ul.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(ul,items){var that=this;$.each(items,function(index,item){that._renderItemData(ul,item)})},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-autocomplete-item",item)},_renderItem:function(ul,item){return $("<li>").text(item.label).appendTo(ul)},_move:function(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return}
if(this.menu.isFirstItem()&&/^previous/.test(direction)||this.menu.isLastItem()&&/^next/.test(direction)){if(!this.isMultiLine){this._value(this.term)}
this.menu.blur();return}
this.menu[direction](event)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(keyEvent,event){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(keyEvent,event);event.preventDefault()}}});$.extend($.ui.autocomplete,{escapeRegex:function(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value)})}});$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(amount){return amount+(amount>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(content){var message;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return}
if(content&&content.length){message=this.options.messages.results(content.length)}else{message=this.options.messages.noResults}
this.liveRegion.children().hide();$("<div>").text(message).appendTo(this.liveRegion)}});var autocomplete=$.ui.autocomplete;
/*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */
var lastActive,baseClasses="ui-button ui-widget ui-state-default ui-corner-all",typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",formResetHandler=function(){var form=$(this);setTimeout(function(){form.find(":ui-button").button("refresh")},1)},radioGroup=function(radio){var name=radio.name,form=radio.form,radios=$([]);if(name){name=name.replace(/'/g,"\\'");if(form){radios=$(form).find("[name='"+name+"'][type=radio]")}else{radios=$("[name='"+name+"'][type=radio]",radio.ownerDocument).filter(function(){return!this.form})}}
return radios};$.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,formResetHandler);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")}else{this.element.prop("disabled",this.options.disabled)}
this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var that=this,options=this.options,toggleButton=this.type==="checkbox"||this.type==="radio",activeClass=!toggleButton?"ui-state-active":"";if(options.label===null){options.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())}
this._hoverable(this.buttonElement);this.buttonElement.addClass(baseClasses).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(options.disabled){return}
if(this===lastActive){$(this).addClass("ui-state-active")}}).bind("mouseleave"+this.eventNamespace,function(){if(options.disabled){return}
$(this).removeClass(activeClass)}).bind("click"+this.eventNamespace,function(event){if(options.disabled){event.preventDefault();event.stopImmediatePropagation()}});this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}});if(toggleButton){this.element.bind("change"+this.eventNamespace,function(){that.refresh()})}
if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled){return!1}})}else if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled){return!1}
$(this).addClass("ui-state-active");that.buttonElement.attr("aria-pressed","true");var radio=that.element[0];radioGroup(radio).not(radio).map(function(){return $(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(options.disabled){return!1}
$(this).addClass("ui-state-active");lastActive=this;that.document.one("mouseup",function(){lastActive=null})}).bind("mouseup"+this.eventNamespace,function(){if(options.disabled){return!1}
$(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(event){if(options.disabled){return!1}
if(event.keyCode===$.ui.keyCode.SPACE||event.keyCode===$.ui.keyCode.ENTER){$(this).addClass("ui-state-active")}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){$(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(event){if(event.keyCode===$.ui.keyCode.SPACE){$(this).click()}})}}
this._setOption("disabled",options.disabled);this._resetButton()},_determineButtonType:function(){var ancestor,labelSelector,checked;if(this.element.is("[type=checkbox]")){this.type="checkbox"}else if(this.element.is("[type=radio]")){this.type="radio"}else if(this.element.is("input")){this.type="input"}else{this.type="button"}
if(this.type==="checkbox"||this.type==="radio"){ancestor=this.element.parents().last();labelSelector="label[for='"+this.element.attr("id")+"']";this.buttonElement=ancestor.find(labelSelector);if(!this.buttonElement.length){ancestor=ancestor.length?ancestor.siblings():this.element.siblings();this.buttonElement=ancestor.filter(labelSelector);if(!this.buttonElement.length){this.buttonElement=ancestor.find(labelSelector)}}
this.element.addClass("ui-helper-hidden-accessible");checked=this.element.is(":checked");if(checked){this.buttonElement.addClass("ui-state-active")}
this.buttonElement.prop("aria-pressed",checked)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(baseClasses+" ui-state-active "+typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}},_setOption:function(key,value){this._super(key,value);if(key==="disabled"){this.widget().toggleClass("ui-state-disabled",!!value);this.element.prop("disabled",!!value);if(value){if(this.type==="checkbox"||this.type==="radio"){this.buttonElement.removeClass("ui-state-focus")}else{this.buttonElement.removeClass("ui-state-focus ui-state-active")}}
return}
this._resetButton()},refresh:function(){var isDisabled=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(isDisabled!==this.options.disabled){this._setOption("disabled",isDisabled)}
if(this.type==="radio"){radioGroup(this.element[0]).each(function(){if($(this).is(":checked")){$(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}
return}
var buttonElement=this.buttonElement.removeClass(typeClasses),buttonText=$("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),icons=this.options.icons,multipleIcons=icons.primary&&icons.secondary,buttonClasses=[];if(icons.primary||icons.secondary){if(this.options.text){buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":(icons.primary?"-primary":"-secondary")))}
if(icons.primary){buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>")}
if(icons.secondary){buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>")}
if(!this.options.text){buttonClasses.push(multipleIcons?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){buttonElement.attr("title",$.trim(buttonText))}}}else{buttonClasses.push("ui-button-text-only")}
buttonElement.addClass(buttonClasses.join(" "))}});$.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(key,value){if(key==="disabled"){this.buttons.button("option",key,value)}
this._super(key,value)},refresh:function(){var rtl=this.element.css("direction")==="rtl",allButtons=this.element.find(this.options.items),existingButtons=allButtons.filter(":ui-button");allButtons.not(":ui-button").button();existingButtons.button("refresh");this.buttons=allButtons.map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(rtl?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(rtl?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}});var button=$.ui.button;
/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
$.extend($.ui,{datepicker:{version:"1.11.4"}});var datepicker_instActive;function datepicker_getZindex(elem){var position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value}}
elem=elem.parent()}
return 0}
function Datepicker(){this._curInst=null;this._keyEvent=!1;this._disabledInputs=[];this._datepickerShowing=!1;this._inDialog=!1;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1};$.extend(this._defaults,this.regional[""]);this.regional.en=$.extend(!0,{},this.regional[""]);this.regional["en-US"]=$.extend(!0,{},this.regional.en);this.dpDiv=datepicker_bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}
$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){datepicker_extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var nodeName,inline,inst;nodeName=target.nodeName.toLowerCase();inline=(nodeName==="div"||nodeName==="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}
inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{});if(nodeName==="input"){this._connectDatepicker(target,inst)}else if(inline){this._inlineDatepicker(target,inst)}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:datepicker_bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}
this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);this._autoSize(inst);$.data(target,"datepicker",inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var showOn,buttonText,buttonImage,appendText=this._get(inst,"appendText"),isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}
if(appendText){inst.append=$("<span class='"+this._appendClass+"'>"+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}
input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}
showOn=this._get(inst,"showOn");if(showOn==="focus"||showOn==="both"){input.focus(this._showDatepicker)}
if(showOn==="button"||showOn==="both"){buttonText=this._get(inst,"buttonText");buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]){$.datepicker._hideDatepicker()}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0])}else{$.datepicker._showDatepicker(input[0])}
return!1})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var findMax,max,maxI,i,date=new Date(2009,12-1,20),dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){findMax=function(names){max=0;maxI=0;for(i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}
return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}
inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}
divSpan.addClass(this.markerClassName).append(inst.dpDiv);$.data(target,"datepicker",inst);this._setDate(inst,this._getDefaultDate(inst),!0);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}
inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var id,browserWidth,browserHeight,scrollX,scrollY,inst=this._dialogInst;if(!inst){this.uuid+=1;id="dp"+this.uuid;this._dialogInput=$("<input type='text' id='"+id+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,!1);inst.settings={};$.data(this._dialogInput[0],"datepicker",inst)}
datepicker_extendRemove(inst.settings,settings||{});date=(date&&date.constructor===Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}
this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=!0;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}
$.data(this._dialogInput[0],"datepicker",inst);return this},_destroyDatepicker:function(target){var nodeName,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return}
nodeName=target.nodeName.toLowerCase();$.removeData(target,"datepicker");if(nodeName==="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(nodeName==="div"||nodeName==="span"){$target.removeClass(this.markerClassName).empty()}
if(datepicker_instActive===inst){datepicker_instActive=null}},_enableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return}
nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=!1;inst.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value)})},_disableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return}
nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=!0;inst.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return!1}
for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]===target){return!0}}
return!1},_getInst:function(target){try{return $.data(target,"datepicker")}catch(err){throw "Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var settings,date,minDate,maxDate,inst=this._getInst(target);if(arguments.length===2&&typeof name==="string"){return(name==="defaults"?$.extend({},$.datepicker._defaults):(inst?(name==="all"?$.extend({},inst.settings):this._get(inst,name)):null))}
settings=name||{};if(typeof name==="string"){settings={};settings[name]=value}
if(inst){if(this._curInst===inst){this._hideDatepicker()}
date=this._getDateDatepicker(target,!0);minDate=this._getMinMaxDate(inst,"min");maxDate=this._getMinMaxDate(inst,"max");datepicker_extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)}
if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)}
if("disabled" in settings){if(settings.disabled){this._disableDatepicker(target)}else{this._enableDatepicker(target)}}
this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}
return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var onSelect,dateStr,sel,inst=$.datepicker._getInst(event.target),handled=!0,isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=!0;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=!1;break;case 13:sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}
onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{$.datepicker._hideDatepicker()}
return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}
handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}
handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}
handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}
break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}
handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}
handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}
break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}
handled=event.ctrlKey||event.metaKey;break;default:handled=!1}}else if(event.keyCode===36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=!1}
if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var chars,chr,inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));chr=String.fromCharCode(event.charCode==null?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var date,inst=$.datepicker._getInst(event.target);if(inst.input.val()!==inst.lastVal){try{date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(err){}}
return!0},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!=="input"){input=$("input",input.parentNode)[0]}
if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){return}
var inst,beforeShow,beforeShowSettings,isFixed,offset,showAnim,duration;inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!==inst){$.datepicker._curInst.dpDiv.stop(!0,!0);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])}}
beforeShow=$.datepicker._get(inst,"beforeShow");beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===!1){return}
datepicker_extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}
if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}
isFixed=!1;$(input).parents().each(function(){isFixed|=$(this).css("position")==="fixed";return!isFixed});offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){showAnim=$.datepicker._get(inst,"showAnim");duration=$.datepicker._get(inst,"duration");inst.dpDiv.css("z-index",datepicker_getZindex($(input))+1);$.datepicker._datepickerShowing=!0;if($.effects&&$.effects.effect[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration)}else{inst.dpDiv[showAnim||"show"](showAnim?duration:null)}
if($.datepicker._shouldFocusInput(inst)){inst.input.focus()}
$.datepicker._curInst=inst}},_updateDatepicker:function(inst){this.maxRows=4;datepicker_instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var origyearshtml,numMonths=this._getNumberOfMonths(inst),cols=numMonths[1],width=17,activeCell=inst.dpDiv.find("."+this._dayOverClass+" a");if(activeCell.length>0){datepicker_handleMouseover.apply(activeCell.get(0))}
inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}
inst.dpDiv[(numMonths[0]!==1||numMonths[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)){inst.input.focus()}
if(inst.yearshtml){origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}
origyearshtml=inst.yearshtml=null},0)}},_shouldFocusInput:function(inst){return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus")},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth(),dpHeight=inst.dpDiv.outerHeight(),inputWidth=inst.input?inst.input.outerWidth():0,inputHeight=inst.input?inst.input.outerHeight():0,viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left===inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top===(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var position,inst=this._getInst(obj),isRTL=this._get(inst,"isRTL");while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}
position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var showAnim,duration,postProcess,onClose,inst=this._curInst;if(!inst||(input&&inst!==$.data(input,"datepicker"))){return}
if(this._datepickerShowing){showAnim=this._get(inst,"showAnim");duration=this._get(inst,"duration");postProcess=function(){$.datepicker._tidyDialog(inst)};if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim==="slideDown"?"slideUp":(showAnim==="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}
if(!showAnim){postProcess()}
this._datepickerShowing=!1;onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}
this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}
this._inDialog=!1}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}
var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!==$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length===0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id),inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}
this._adjustInstDate(inst,offset+(period==="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var date,target=$(id),inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}
this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id),inst=this._getInst(target[0]);inst["selected"+(period==="M"?"Month":"Year")]=inst["draw"+(period==="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var inst,target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}
inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);this._selectDate(target,"")},_selectDate:function(id,dateStr){var onSelect,target=$(id),inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}
this._updateAlternate(inst);onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else if(inst.input){inst.input.trigger("change")}
if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!=="object"){inst.input.focus()}
this._lastInput=null}},_updateAlternate:function(inst){var altFormat,date,dateStr,altField=this._get(inst,"altField");if(altField){altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var time,checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw "Invalid arguments"}
value=(typeof value==="object"?value.toString():value+"");if(value===""){return null}
var iFormat,dim,extra,iValue=0,shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,shortYearCutoff=(typeof shortYearCutoffTemp!=="string"?shortYearCutoffTemp:new Date().getFullYear()%100+parseInt(shortYearCutoffTemp,10)),dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,year=-1,month=-1,day=-1,doy=-1,literal=!1,date,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++}
return matches},getNumber=function(match){var isDoubled=lookAhead(match),size=(match==="@"?14:(match==="!"?20:(match==="y"&&isDoubled?4:(match==="o"?3:2)))),minSize=(match==="y"?size:1),digits=new RegExp("^\\d{"+minSize+","+size+"}"),num=value.substring(iValue).match(digits);if(!num){throw "Missing number at position "+iValue}
iValue+=num[0].length;return parseInt(num[0],10)},getName=function(match,shortNames,longNames){var index=-1,names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return-(a[1].length-b[1].length)});$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()){index=pair[0];iValue+=name.length;return!1}});if(index!==-1){return index+1}else{throw "Unknown name at position "+iValue}},checkLiteral=function(){if(value.charAt(iValue)!==format.charAt(iFormat)){throw "Unexpected literal at position "+iValue}
iValue++};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=!1}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case "d":day=getNumber("d");break;case "D":getName("D",dayNamesShort,dayNames);break;case "o":doy=getNumber("o");break;case "m":month=getNumber("m");break;case "M":month=getName("M",monthNamesShort,monthNames);break;case "y":year=getNumber("y");break;case "@":date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case "!":date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case "'":if(lookAhead("'")){checkLiteral()}else{literal=!0}
break;default:checkLiteral()}}}
if(iValue<value.length){extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw "Extra/unparsed characters found in date: "+extra}}
if(year===-1){year=new Date().getFullYear()}else if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}
if(doy>-1){month=1;day=doy;do{dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}
month++;day-=dim}while(!0);}
date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day){throw "Invalid date"}
return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}
var iFormat,dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++}
return matches},formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}
return num},formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])},output="",literal=!1;if(date){for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=!1}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case "d":output+=formatNumber("d",date.getDate(),2);break;case "D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case "o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case "m":output+=formatNumber("m",date.getMonth()+1,2);break;case "M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case "y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case "@":output+=date.getTime();break;case "!":output+=date.getTime()*10000+this._ticksTo1970;break;case "'":if(lookAhead("'")){output+="'"}else{literal=!0}
break;default:output+=format.charAt(iFormat)}}}}
return output},_possibleChars:function(format){var iFormat,chars="",literal=!1,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++}
return matches};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=!1}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case "d":case "m":case "y":case "@":chars+="0123456789";break;case "D":case "M":return null;case "'":if(lookAhead("'")){chars+="'"}else{literal=!0}
break;default:chars+=format.charAt(iFormat)}}}
return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()===inst.lastVal){return}
var dateFormat=this._get(inst,"dateFormat"),dates=inst.lastVal=inst.input?inst.input.val():null,defaultDate=this._getDefaultDate(inst),date=defaultDate,settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){dates=(noDefault?"":dates)}
inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date},offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}
var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date(),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case "d":case "D":day+=parseInt(matches[1],10);break;case "w":case "W":day+=parseInt(matches[1],10)*7;break;case "m":case "M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case "y":case "Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}
matches=pattern.exec(offset)}
return new Date(year,month,day)},newDate=(date==null||date===""?defaultDate:(typeof date==="string"?offsetString(date):(typeof date==="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()==="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}
return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date){return null}
date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date,origMonth=inst.selectedMonth,origYear=inst.selectedYear,newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){this._notifyChange(inst)}
this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()==="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths"),id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){$.datepicker._adjustDate(id,-stepMonths,"M")},next:function(){$.datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){$.datepicker._hideDatepicker()},today:function(){$.datepicker._gotoToday(id)},selectDay:function(){$.datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return!1},selectMonth:function(){$.datepicker._selectMonthYear(id,this,"M");return!1},selectYear:function(){$.datepicker._selectMonthYear(id,this,"Y");return!1}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},_generateHTML:function(inst){var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,monthNames,monthNamesShort,beforeShowDay,showOtherMonths,selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,printDate,dRow,tbody,daySettings,otherMonth,unselectable,tempDate=new Date(),today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),isRTL=this._get(inst,"isRTL"),showButtonPanel=this._get(inst,"showButtonPanel"),hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),numMonths=this._getNumberOfMonths(inst),showCurrentAtPos=this._get(inst,"showCurrentAtPos"),stepMonths=this._get(inst,"stepMonths"),isMultiMonth=(numMonths[0]!==1||numMonths[1]!==1),currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay))),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),drawMonth=inst.drawMonth-showCurrentAtPos,drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}
if(maxDate){maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}
inst.drawMonth=drawMonth;inst.drawYear=drawYear;prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>":(hideIfNoPrevNext?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>"));nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>":(hideIfNoPrevNext?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>"));currentText=this._get(inst,"currentText");gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));controls=(!inst.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(inst,"closeText")+"</button>":"");buttonPanel=(showButtonPanel)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);showWeek=this._get(inst,"showWeek");dayNames=this._get(inst,"dayNames");dayNamesMin=this._get(inst,"dayNamesMin");monthNames=this._get(inst,"monthNames");monthNamesShort=this._get(inst,"monthNamesShort");beforeShowDay=this._get(inst,"beforeShowDay");showOtherMonths=this._get(inst,"showOtherMonths");selectOtherMonths=this._get(inst,"selectOtherMonths");defaultDate=this._getDefaultDate(inst);html="";dow;for(row=0;row<numMonths[0];row++){group="";this.maxRows=4;for(col=0;col<numMonths[1];col++){selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));cornerClass=" ui-corner-all";calender="";if(isMultiMonth){calender+="<div class='ui-datepicker-group";if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}
calender+="'>"}
calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+(/all|left/.test(cornerClass)&&row===0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row===0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";thead=(showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"");for(dow=0;dow<7;dow++){day=(dow+firstDay)%7;thead+="<th scope='col'"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>"}
calender+=thead+"</tr></thead><tbody>";daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}
leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;curRows=Math.ceil((leadDays+daysInMonth)/7);numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(dRow=0;dRow<numRows;dRow++){calender+="<tr>";tbody=(!showWeek?"":"<td class='ui-datepicker-week-col'>"+this._get(inst,"calculateWeek")(printDate)+"</td>");for(dow=0;dow<7;dow++){daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[!0,""]);otherMonth=(printDate.getMonth()!==drawMonth);unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+="<td class='"+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+((!otherMonth||showOtherMonths)&&daySettings[2]?" title='"+daySettings[2].replace(/'/g,"&#39;")+"'":"")+(unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+(printDate.getTime()===today.getTime()?" ui-state-highlight":"")+(printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+"' href='#'>"+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}
calender+=tbody+"</tr>"}
drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}
calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col===numMonths[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");group+=calender}
html+=group}
html+=buttonPanel;inst._keyEvent=!1;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),html="<div class='ui-datepicker-title'>",monthHtml="";if(secondary||!changeMonth){monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>"}else{inMinYear=(minDate&&minDate.getFullYear()===drawYear);inMaxYear=(maxDate&&maxDate.getFullYear()===drawYear);monthHtml+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+="<option value='"+month+"'"+(month===drawMonth?" selected='selected'":"")+">"+monthNamesShort[month]+"</option>"}}
monthHtml+="</select>"}
if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}
if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+="<span class='ui-datepicker-year'>"+drawYear+"</span>"}else{years=this._get(inst,"yearRange").split(":");thisYear=new Date().getFullYear();determineYear=function(value){var year=(value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+\-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};year=determineYear(years[0]);endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;year<=endYear;year++){inst.yearshtml+="<option value='"+year+"'"+(year===drawYear?" selected='selected'":"")+">"+year+"</option>"}
inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}
html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}
html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period==="Y"?offset:0),month=inst.drawMonth+(period==="M"?offset:0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D"?offset:0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period==="M"||period==="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=(minDate&&date<minDate?minDate:date);return(maxDate&&newDate>maxDate?maxDate:newDate)},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths==="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}
return this._isInRange(inst,date)},_isInRange:function(inst,date){var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");if(years){yearSplit=years.split(":");currentYear=new Date().getFullYear();minYear=parseInt(yearSplit[0],10);maxYear=parseInt(yearSplit[1],10);if(yearSplit[0].match(/[+\-].*/)){minYear+=currentYear}
if(yearSplit[1].match(/[+\-].*/)){maxYear+=currentYear}}
return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())&&(!minYear||date.getFullYear()>=minYear)&&(!maxYear||date.getFullYear()<=maxYear))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!=="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}
var date=(day?(typeof day==="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function datepicker_bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).removeClass("ui-datepicker-prev-hover")}
if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).removeClass("ui-datepicker-next-hover")}}).delegate(selector,"mouseover",datepicker_handleMouseover)}
function datepicker_handleMouseover(){if(!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline?datepicker_instActive.dpDiv.parent()[0]:datepicker_instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).addClass("ui-datepicker-prev-hover")}
if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).addClass("ui-datepicker-next-hover")}}}
function datepicker_extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null){target[name]=props[name]}}
return target}
$.fn.datepicker=function(options){if(!this.length){return this}
if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick);$.datepicker.initialized=!0}
if($("#"+$.datepicker._mainDivId).length===0){$("body").append($.datepicker.dpDiv)}
var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}
if(options==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}
return this.each(function(){typeof options==="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=!1;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.11.4";var datepicker=$.datepicker;
/*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */
var dialog=$.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css("top",pos.top-topOffset)}}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");this.options.title=this.options.title||this.originalTitle;this._createWrapper();this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);this._createTitlebar();this._createButtonPane();if(this.options.draggable&&$.fn.draggable){this._makeDraggable()}
if(this.options.resizable&&$.fn.resizable){this._makeResizable()}
this._isOpen=!1;this._trackFocus()},_init:function(){if(this.options.autoOpen){this.open()}},_appendTo:function(){var element=this.options.appendTo;if(element&&(element.jquery||element.nodeType)){return $(element)}
return this.document.find(element||"body").eq(0)},_destroy:function(){var next,originalPosition=this.originalPosition;this._untrackInstance();this._destroyOverlay();this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();this.uiDialog.stop(!0,!0).remove();if(this.originalTitle){this.element.attr("title",this.originalTitle)}
next=originalPosition.parent.children().eq(originalPosition.index);if(next.length&&next[0]!==this.element[0]){next.before(this.element)}else{originalPosition.parent.append(this.element)}},widget:function(){return this.uiDialog},disable:$.noop,enable:$.noop,close:function(event){var activeElement,that=this;if(!this._isOpen||this._trigger("beforeClose",event)===!1){return}
this._isOpen=!1;this._focusedElement=null;this._destroyOverlay();this._untrackInstance();if(!this.opener.filter(":focusable").focus().length){try{activeElement=this.document[0].activeElement;if(activeElement&&activeElement.nodeName.toLowerCase()!=="body"){$(activeElement).blur()}}catch(error){}}
this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(event,silent){var moved=!1,zIndices=this.uiDialog.siblings(".ui-front:visible").map(function(){return+$(this).css("z-index")}).get(),zIndexMax=Math.max.apply(null,zIndices);if(zIndexMax>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",zIndexMax+1);moved=!0}
if(moved&&!silent){this._trigger("focus",event)}
return moved},open:function(){var that=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable()}
return}
this._isOpen=!0;this.opener=$(this.document[0].activeElement);this._size();this._position();this._createOverlay();this._moveToTop(null,!0);if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1)}
this._show(this.uiDialog,this.options.show,function(){that._focusTabbable();that._trigger("focus")});this._makeFocusTarget();this._trigger("open")},_focusTabbable:function(){var hasFocus=this._focusedElement;if(!hasFocus){hasFocus=this.element.find("[autofocus]")}
if(!hasFocus.length){hasFocus=this.element.find(":tabbable")}
if(!hasFocus.length){hasFocus=this.uiDialogButtonPane.find(":tabbable")}
if(!hasFocus.length){hasFocus=this.uiDialogTitlebarClose.filter(":tabbable")}
if(!hasFocus.length){hasFocus=this.uiDialog}
hasFocus.eq(0).focus()},_keepFocus:function(event){function checkFocus(){var activeElement=this.document[0].activeElement,isActive=this.uiDialog[0]===activeElement||$.contains(this.uiDialog[0],activeElement);if(!isActive){this._focusTabbable()}}
event.preventDefault();checkFocus.call(this);this._delay(checkFocus)},_createWrapper:function(){this.uiDialog=$("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._on(this.uiDialog,{keydown:function(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){event.preventDefault();this.close(event);return}
if(event.keyCode!==$.ui.keyCode.TAB||event.isDefaultPrevented()){return}
var tabbables=this.uiDialog.find(":tabbable"),first=tabbables.filter(":first"),last=tabbables.filter(":last");if((event.target===last[0]||event.target===this.uiDialog[0])&&!event.shiftKey){this._delay(function(){first.focus()});event.preventDefault()}else if((event.target===first[0]||event.target===this.uiDialog[0])&&event.shiftKey){this._delay(function(){last.focus()});event.preventDefault()}},mousedown:function(event){if(this._moveToTop(event)){this._focusTabbable()}}});if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})}},_createTitlebar:function(){var uiDialogTitle;this.uiDialogTitlebar=$("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);this._on(this.uiDialogTitlebar,{mousedown:function(event){if(!$(event.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()}}});this.uiDialogTitlebarClose=$("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);this._on(this.uiDialogTitlebarClose,{click:function(event){event.preventDefault();this.close(event)}});uiDialogTitle=$("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);this._title(uiDialogTitle);this.uiDialog.attr({"aria-labelledby":uiDialogTitle.attr("id")})},_title:function(title){if(!this.options.title){title.html("&#160;")}
title.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=$("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiButtonSet=$("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);this._createButtons()},_createButtons:function(){var that=this,buttons=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if($.isEmptyObject(buttons)||($.isArray(buttons)&&!buttons.length)){this.uiDialog.removeClass("ui-dialog-buttons");return}
$.each(buttons,function(name,props){var click,buttonOptions;props=$.isFunction(props)?{click:props,text:name}:props;props=$.extend({type:"button"},props);click=props.click;props.click=function(){click.apply(that.element[0],arguments)};buttonOptions={icons:props.icons,text:props.showText};delete props.icons;delete props.showText;$("<button></button>",props).button(buttonOptions).appendTo(that.uiButtonSet)});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){var that=this,options=this.options;function filteredUi(ui){return{position:ui.position,offset:ui.offset}}
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(event,ui){$(this).addClass("ui-dialog-dragging");that._blockFrames();that._trigger("dragStart",event,filteredUi(ui))},drag:function(event,ui){that._trigger("drag",event,filteredUi(ui))},stop:function(event,ui){var left=ui.offset.left-that.document.scrollLeft(),top=ui.offset.top-that.document.scrollTop();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};$(this).removeClass("ui-dialog-dragging");that._unblockFrames();that._trigger("dragStop",event,filteredUi(ui))}})},_makeResizable:function(){var that=this,options=this.options,handles=options.resizable,position=this.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size}}
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function(event,ui){$(this).addClass("ui-dialog-resizing");that._blockFrames();that._trigger("resizeStart",event,filteredUi(ui))},resize:function(event,ui){that._trigger("resize",event,filteredUi(ui))},stop:function(event,ui){var offset=that.uiDialog.offset(),left=offset.left-that.document.scrollLeft(),top=offset.top-that.document.scrollTop();options.height=that.uiDialog.height();options.width=that.uiDialog.width();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};$(this).removeClass("ui-dialog-resizing");that._unblockFrames();that._trigger("resizeStop",event,filteredUi(ui))}}).css("position",position)},_trackFocus:function(){this._on(this.widget(),{focusin:function(event){this._makeFocusTarget();this._focusedElement=$(event.target)}})},_makeFocusTarget:function(){this._untrackInstance();this._trackingInstances().unshift(this)},_untrackInstance:function(){var instances=this._trackingInstances(),exists=$.inArray(this,instances);if(exists!==-1){instances.splice(exists,1)}},_trackingInstances:function(){var instances=this.document.data("ui-dialog-instances");if(!instances){instances=[];this.document.data("ui-dialog-instances",instances)}
return instances},_minHeight:function(){var options=this.options;return options.height==="auto"?options.minHeight:Math.min(options.minHeight,options.height)},_position:function(){var isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show()}
this.uiDialog.position(this.options.position);if(!isVisible){this.uiDialog.hide()}},_setOptions:function(options){var that=this,resize=!1,resizableOptions={};$.each(options,function(key,value){that._setOption(key,value);if(key in that.sizeRelatedOptions){resize=!0}
if(key in that.resizableRelatedOptions){resizableOptions[key]=value}});if(resize){this._size();this._position()}
if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",resizableOptions)}},_setOption:function(key,value){var isDraggable,isResizable,uiDialog=this.uiDialog;if(key==="dialogClass"){uiDialog.removeClass(this.options.dialogClass).addClass(value)}
if(key==="disabled"){return}
this._super(key,value);if(key==="appendTo"){this.uiDialog.appendTo(this._appendTo())}
if(key==="buttons"){this._createButtons()}
if(key==="closeText"){this.uiDialogTitlebarClose.button({label:""+value})}
if(key==="draggable"){isDraggable=uiDialog.is(":data(ui-draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy")}
if(!isDraggable&&value){this._makeDraggable()}}
if(key==="position"){this._position()}
if(key==="resizable"){isResizable=uiDialog.is(":data(ui-resizable)");if(isResizable&&!value){uiDialog.resizable("destroy")}
if(isResizable&&typeof value==="string"){uiDialog.resizable("option","handles",value)}
if(!isResizable&&value!==!1){this._makeResizable()}}
if(key==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))}},_size:function(){var nonContentHeight,minContentHeight,maxContentHeight,options=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(options.minWidth>options.width){options.width=options.minWidth}
nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);maxContentHeight=typeof options.maxHeight==="number"?Math.max(0,options.maxHeight-nonContentHeight):"none";if(options.height==="auto"){this.element.css({minHeight:minContentHeight,maxHeight:maxContentHeight,height:"auto"})}else{this.element.height(Math.max(0,options.height-nonContentHeight))}
if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var iframe=$(this);return $("<div>").css({position:"absolute",width:iframe.outerWidth(),height:iframe.outerHeight()}).appendTo(iframe.parent()).offset(iframe.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks}},_allowInteraction:function(event){if($(event.target).closest(".ui-dialog").length){return!0}
return!!$(event.target).closest(".ui-datepicker").length},_createOverlay:function(){if(!this.options.modal){return}
var isOpening=!0;this._delay(function(){isOpening=!1});if(!this.document.data("ui-dialog-overlays")){this._on(this.document,{focusin:function(event){if(isOpening){return}
if(!this._allowInteraction(event)){event.preventDefault();this._trackingInstances()[0]._focusTabbable()}}})}
this.overlay=$("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());this._on(this.overlay,{mousedown:"_keepFocus"});this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)},_destroyOverlay:function(){if(!this.options.modal){return}
if(this.overlay){var overlays=this.document.data("ui-dialog-overlays")-1;if(!overlays){this.document.unbind("focusin").removeData("ui-dialog-overlays")}else{this.document.data("ui-dialog-overlays",overlays)}
this.overlay.remove();this.overlay=null}}});
/*!
 * jQuery UI Progressbar 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/progressbar/
 */
var progressbar=$.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});this.valueDiv=$("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(newValue){if(newValue===undefined){return this.options.value}
this.options.value=this._constrainedValue(newValue);this._refreshValue()},_constrainedValue:function(newValue){if(newValue===undefined){newValue=this.options.value}
this.indeterminate=newValue===!1;if(typeof newValue!=="number"){newValue=0}
return this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,newValue))},_setOptions:function(options){var value=options.value;delete options.value;this._super(options);this.options.value=this._constrainedValue(value);this._refreshValue()},_setOption:function(key,value){if(key==="max"){value=Math.max(this.min,value)}
if(key==="disabled"){this.element.toggleClass("ui-state-disabled",!!value).attr("aria-disabled",value)}
this._super(key,value)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var value=this.options.value,percentage=this._percentage();this.valueDiv.toggle(this.indeterminate||value>this.min).toggleClass("ui-corner-right",value===this.options.max).width(percentage.toFixed(0)+"%");this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=$("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":value});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null}}
if(this.oldValue!==value){this.oldValue=value;this._trigger("change")}
if(value===this.options.max){this._trigger("complete")}}});
/*!
 * jQuery UI Selectmenu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectmenu
 */
var selectmenu=$.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var selectmenuId=this.element.uniqueId().attr("id");this.ids={element:selectmenuId,button:selectmenuId+"-button",menu:selectmenuId+"-menu"};this._drawButton();this._drawMenu();if(this.options.disabled){this.disable()}},_drawButton:function(){var that=this;this.label=$("label[for='"+this.ids.element+"']").attr("for",this.ids.button);this._on(this.label,{click:function(event){this.button.focus();event.preventDefault()}});this.element.hide();this.button=$("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element);$("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button);this.buttonText=$("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button);this._setText(this.buttonText,this.element.find("option:selected").text());this._resizeButton();this._on(this.button,this._buttonEvents);this.button.one("focusin",function(){if(!that.menuItems){that._refreshMenu()}});this._hoverable(this.button);this._focusable(this.button)},_drawMenu:function(){var that=this;this.menu=$("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu});this.menuWrap=$("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo());this.menuInstance=this.menu.menu({role:"listbox",select:function(event,ui){event.preventDefault();that._setSelection();that._select(ui.item.data("ui-selectmenu-item"),event)},focus:function(event,ui){var item=ui.item.data("ui-selectmenu-item");if(that.focusIndex!=null&&item.index!==that.focusIndex){that._trigger("focus",event,{item:item});if(!that.isOpen){that._select(item,event)}}
that.focusIndex=item.index;that.button.attr("aria-activedescendant",that.menuItems.eq(item.index).attr("id"))}}).menu("instance");this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");this.menuInstance._off(this.menu,"mouseleave");this.menuInstance._closeOnDocumentClick=function(){return!1};this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu();this._setText(this.buttonText,this._getSelectedItem().text());if(!this.options.width){this._resizeButton()}},_refreshMenu:function(){this.menu.empty();var item,options=this.element.find("option");if(!options.length){return}
this._parseOptions(options);this._renderMenu(this.menu,this.items);this.menuInstance.refresh();this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup");item=this._getSelectedItem();this.menuInstance.focus(null,item);this._setAria(item.data("ui-selectmenu-item"));this._setOption("disabled",this.element.prop("disabled"))},open:function(event){if(this.options.disabled){return}
if(!this.menuItems){this._refreshMenu()}else{this.menu.find(".ui-state-focus").removeClass("ui-state-focus");this.menuInstance.focus(null,this._getSelectedItem())}
this.isOpen=!0;this._toggleAttr();this._resizeMenu();this._position();this._on(this.document,this._documentClick);this._trigger("open",event)},_position:function(){this.menuWrap.position($.extend({of:this.button},this.options.position))},close:function(event){if(!this.isOpen){return}
this.isOpen=!1;this._toggleAttr();this.range=null;this._off(this.document);this._trigger("close",event)},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(ul,items){var that=this,currentOptgroup="";$.each(items,function(index,item){if(item.optgroup!==currentOptgroup){$("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(item.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:item.optgroup}).appendTo(ul);currentOptgroup=item.optgroup}
that._renderItemData(ul,item)})},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-selectmenu-item",item)},_renderItem:function(ul,item){var li=$("<li>");if(item.disabled){li.addClass("ui-state-disabled")}
this._setText(li,item.label);return li.appendTo(ul)},_setText:function(element,value){if(value){element.text(value)}else{element.html("&#160;")}},_move:function(direction,event){var item,next,filter=".ui-menu-item";if(this.isOpen){item=this.menuItems.eq(this.focusIndex)}else{item=this.menuItems.eq(this.element[0].selectedIndex);filter+=":not(.ui-state-disabled)"}
if(direction==="first"||direction==="last"){next=item[direction==="first"?"prevAll":"nextAll"](filter).eq(-1)}else{next=item[direction+"All"](filter).eq(0)}
if(next.length){this.menuInstance.focus(event,next)}},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(event){this[this.isOpen?"close":"open"](event)},_setSelection:function(){var selection;if(!this.range){return}
if(window.getSelection){selection=window.getSelection();selection.removeAllRanges();selection.addRange(this.range)}else{this.range.select()}
this.button.focus()},_documentClick:{mousedown:function(event){if(!this.isOpen){return}
if(!$(event.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length){this.close(event)}}},_buttonEvents:{mousedown:function(){var selection;if(window.getSelection){selection=window.getSelection();if(selection.rangeCount){this.range=selection.getRangeAt(0)}}else{this.range=document.selection.createRange()}},click:function(event){this._setSelection();this._toggle(event)},keydown:function(event){var preventDefault=!0;switch(event.keyCode){case $.ui.keyCode.TAB:case $.ui.keyCode.ESCAPE:this.close(event);preventDefault=!1;break;case $.ui.keyCode.ENTER:if(this.isOpen){this._selectFocusedItem(event)}
break;case $.ui.keyCode.UP:if(event.altKey){this._toggle(event)}else{this._move("prev",event)}
break;case $.ui.keyCode.DOWN:if(event.altKey){this._toggle(event)}else{this._move("next",event)}
break;case $.ui.keyCode.SPACE:if(this.isOpen){this._selectFocusedItem(event)}else{this._toggle(event)}
break;case $.ui.keyCode.LEFT:this._move("prev",event);break;case $.ui.keyCode.RIGHT:this._move("next",event);break;case $.ui.keyCode.HOME:case $.ui.keyCode.PAGE_UP:this._move("first",event);break;case $.ui.keyCode.END:case $.ui.keyCode.PAGE_DOWN:this._move("last",event);break;default:this.menu.trigger(event);preventDefault=!1}
if(preventDefault){event.preventDefault()}}},_selectFocusedItem:function(event){var item=this.menuItems.eq(this.focusIndex);if(!item.hasClass("ui-state-disabled")){this._select(item.data("ui-selectmenu-item"),event)}},_select:function(item,event){var oldIndex=this.element[0].selectedIndex;this.element[0].selectedIndex=item.index;this._setText(this.buttonText,item.label);this._setAria(item);this._trigger("select",event,{item:item});if(item.index!==oldIndex){this._trigger("change",event,{item:item})}
this.close(event)},_setAria:function(item){var id=this.menuItems.eq(item.index).attr("id");this.button.attr({"aria-labelledby":id,"aria-activedescendant":id});this.menu.attr("aria-activedescendant",id)},_setOption:function(key,value){if(key==="icons"){this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(value.button)}
this._super(key,value);if(key==="appendTo"){this.menuWrap.appendTo(this._appendTo())}
if(key==="disabled"){this.menuInstance.option("disabled",value);this.button.toggleClass("ui-state-disabled",value).attr("aria-disabled",value);this.element.prop("disabled",value);if(value){this.button.attr("tabindex",-1);this.close()}else{this.button.attr("tabindex",0)}}
if(key==="width"){this._resizeButton()}},_appendTo:function(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0)}
if(!element||!element[0]){element=this.element.closest(".ui-front")}
if(!element.length){element=this.document[0].body}
return element},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen);this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen);this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var width=this.options.width;if(!width){width=this.element.show().outerWidth();this.element.hide()}
this.button.outerWidth(width)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(options){var data=[];options.each(function(index,item){var option=$(item),optgroup=option.parent("optgroup");data.push({element:option,index:index,value:option.val(),label:option.text(),optgroup:optgroup.attr("label")||"",disabled:optgroup.prop("disabled")||option.prop("disabled")})});this.items=data},_destroy:function(){this.menuWrap.remove();this.button.remove();this.element.show();this.element.removeUniqueId();this.label.attr("for",this.ids.element)}});
/*!
 * jQuery UI Slider 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slider/
 */
var slider=$.widget("ui.slider",$.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1;this._mouseSliding=!1;this._animateOff=!0;this._handleIndex=null;this._detectOrientation();this._mouseInit();this._calculateNewMax();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=!1},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue()},_createHandles:function(){var i,handleCount,options=this.options,existingHandles=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),handle="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",handles=[];handleCount=(options.values&&options.values.length)||1;if(existingHandles.length>handleCount){existingHandles.slice(handleCount).remove();existingHandles=existingHandles.slice(0,handleCount)}
for(i=existingHandles.length;i<handleCount;i++){handles.push(handle)}
this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.each(function(i){$(this).data("ui-slider-handle-index",i)})},_createRange:function(){var options=this.options,classes="";if(options.range){if(options.range===!0){if(!options.values){options.values=[this._valueMin(),this._valueMin()]}else if(options.values.length&&options.values.length!==2){options.values=[options.values[0],options.values[0]]}else if($.isArray(options.values)){options.values=options.values.slice(0)}}
if(!this.range||!this.range.length){this.range=$("<div></div>").appendTo(this.element);classes="ui-slider-range"+" ui-widget-header ui-corner-all"}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({"left":"","bottom":""})}
this.range.addClass(classes+((options.range==="min"||options.range==="max")?" ui-slider-range-"+options.range:""))}else{if(this.range){this.range.remove()}
this.range=null}},_setupEvents:function(){this._off(this.handles);this._on(this.handles,this._handleEvents);this._hoverable(this.handles);this._focusable(this.handles)},_destroy:function(){this.handles.remove();if(this.range){this.range.remove()}
this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._mouseDestroy()},_mouseCapture:function(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;if(o.disabled){return!1}
this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));if((distance>thisDistance)||(distance===thisDistance&&(i===that._lastChangedValue||that.values(i)===o.min))){distance=thisDistance;closestHandle=$(this);index=i}});allowed=this._start(event,index);if(allowed===!1){return!1}
this._mouseSliding=!0;this._handleIndex=index;closestHandle.addClass("ui-state-active").focus();offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-(closestHandle.width()/2),top:event.pageY-offset.top-(closestHandle.height()/2)-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue)}
this._animateOff=!0;return!0},_mouseStart:function(){return!0},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return!1},_mouseStop:function(event){this.handles.removeClass("ui-state-active");this._mouseSliding=!1;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=!1;return!1},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}
percentMouse=(pixelMouse/pixelTotal);if(percentMouse>1){percentMouse=1}
if(percentMouse<0){percentMouse=0}
if(this.orientation==="vertical"){percentMouse=1-percentMouse}
valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse)},_start:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values()}
return this._trigger("start",event,uiHash)},_slide:function(event,index,newVal){var otherVal,newValues,allowed;if(this.options.values&&this.options.values.length){otherVal=this.values(index?0:1);if((this.options.values.length===2&&this.options.range===!0)&&((index===0&&newVal>otherVal)||(index===1&&newVal<otherVal))){newVal=otherVal}
if(newVal!==this.values(index)){newValues=this.values();newValues[index]=newVal;allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal,values:newValues});otherVal=this.values(index?0:1);if(allowed!==!1){this.values(index,newVal)}}}else{if(newVal!==this.value()){allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal});if(allowed!==!1){this.value(newVal)}}}},_stop:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values()}
this._trigger("stop",event,uiHash)},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values()}
this._lastChangedValue=index;this._trigger("change",event,uiHash)}},value:function(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return}
return this._value()},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return}
if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i)}
this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(index)}else{return this.value()}}}else{return this._values()}},_setOption:function(key,value){var i,valsLength=0;if(key==="range"&&this.options.range===!0){if(value==="min"){this.options.value=this._values(0);this.options.values=null}else if(value==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null}}
if($.isArray(this.options.values)){valsLength=this.options.values.length}
if(key==="disabled"){this.element.toggleClass("ui-state-disabled",!!value)}
this._super(key,value);switch(key){case "orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();this.handles.css(value==="horizontal"?"bottom":"left","");break;case "value":this._animateOff=!0;this._refreshValue();this._change(null,0);this._animateOff=!1;break;case "values":this._animateOff=!0;this._refreshValue();for(i=0;i<valsLength;i+=1){this._change(null,i)}
this._animateOff=!1;break;case "step":case "min":case "max":this._animateOff=!0;this._calculateNewMax();this._refreshValue();this._animateOff=!1;break;case "range":this._animateOff=!0;this._refresh();this._animateOff=!1;break}},_value:function(){var val=this.options.value;val=this._trimAlignValue(val);return val},_values:function(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val}else if(this.options.values&&this.options.values.length){vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i])}
return vals}else{return[]}},_trimAlignValue:function(val){if(val<=this._valueMin()){return this._valueMin()}
if(val>=this._valueMax()){return this._valueMax()}
var step=(this.options.step>0)?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=(valModStep>0)?step:(-step)}
return parseFloat(alignValue.toFixed(5))},_calculateNewMax:function(){var max=this.options.max,min=this._valueMin(),step=this.options.step,aboveMin=Math.floor((+(max-min).toFixed(this._precision()))/step)*step;max=aboveMin+min;this.max=parseFloat(max.toFixed(this._precision()))},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min))}
return precision},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=(!this._animateOff)?o.animate:!1,_set={};if(this.options.values&&this.options.values.length){this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-that._valueMin())*100;_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(that.options.range===!0){if(that.orientation==="horizontal"){if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate)}
if(i===1){that.range[animate?"animate":"css"]({width:(valPercent-lastValPercent)+"%"},{queue:!1,duration:o.animate})}}else{if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({bottom:(valPercent)+"%"},o.animate)}
if(i===1){that.range[animate?"animate":"css"]({height:(valPercent-lastValPercent)+"%"},{queue:!1,duration:o.animate})}}}
lastValPercent=valPercent})}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=(valueMax!==valueMin)?(value-valueMin)/(valueMax-valueMin)*100:0;_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate)}
if(oRange==="max"&&this.orientation==="horizontal"){this.range[animate?"animate":"css"]({width:(100-valPercent)+"%"},{queue:!1,duration:o.animate})}
if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate)}
if(oRange==="max"&&this.orientation==="vertical"){this.range[animate?"animate":"css"]({height:(100-valPercent)+"%"},{queue:!1,duration:o.animate})}}},_handleEvents:{keydown:function(event){var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:event.preventDefault();if(!this._keySliding){this._keySliding=!0;$(event.target).addClass("ui-state-active");allowed=this._start(event,index);if(allowed===!1){return}}
break}
step=this.options.step;if(this.options.values&&this.options.values.length){curVal=newVal=this.values(index)}else{curVal=newVal=this.value()}
switch(event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+((this._valueMax()-this._valueMin())/this.numPages));break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-((this._valueMax()-this._valueMin())/this.numPages));break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax()){return}
newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin()){return}
newVal=this._trimAlignValue(curVal-step);break}
this._slide(event,index,newVal)},keyup:function(event){var index=$(event.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=!1;this._stop(event,index);this._change(event,index);$(event.target).removeClass("ui-state-active")}}}});
/*!
 * jQuery UI Spinner 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 */
function spinner_modifier(fn){return function(){var previous=this.element.val();fn.apply(this,arguments);this._refresh();if(previous!==this.element.val()){this._trigger("change")}}}
var spinner=$.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);if(this.value()!==""){this._value(this.element.val(),!0)}
this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var options={},element=this.element;$.each(["min","max","step"],function(i,option){var value=element.attr(option);if(value!==undefined&&value.length){options[option]=value}});return options},_events:{keydown:function(event){if(this._start(event)&&this._keydown(event)){event.preventDefault()}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return}
this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",event)}},mousewheel:function(event,delta){if(!delta){return}
if(!this.spinning&&!this._start(event)){return!1}
this._spin((delta>0?1:-1)*this.options.step,event);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(event)}},100);event.preventDefault()},"mousedown .ui-spinner-button":function(event){var previous;previous=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();function checkFocus(){var isActive=this.element[0]===this.document[0].activeElement;if(!isActive){this.element.focus();this.previous=previous;this._delay(function(){this.previous=previous})}}
event.preventDefault();checkFocus.call(this);this.cancelBlur=!0;this._delay(function(){delete this.cancelBlur;checkFocus.call(this)});if(this._start(event)===!1){return}
this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(event){if(!$(event.currentTarget).hasClass("ui-state-active")){return}
if(this._start(event)===!1){return!1}
this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var uiSpinner=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=uiSpinner.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");if(this.buttons.height()>Math.ceil(uiSpinner.height()*0.5)&&uiSpinner.height()>0){uiSpinner.height(uiSpinner.height())}
if(this.options.disabled){this.disable()}},_keydown:function(event){var options=this.options,keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.UP:this._repeat(null,1,event);return!0;case keyCode.DOWN:this._repeat(null,-1,event);return!0;case keyCode.PAGE_UP:this._repeat(null,options.page,event);return!0;case keyCode.PAGE_DOWN:this._repeat(null,-options.page,event);return!0}
return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return""+"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>"+"<span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(event){if(!this.spinning&&this._trigger("start",event)===!1){return!1}
if(!this.counter){this.counter=1}
this.spinning=!0;return!0},_repeat:function(i,steps,event){i=i||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,steps,event)},i);this._spin(steps*this.options.step,event)},_spin:function(step,event){var value=this.value()||0;if(!this.counter){this.counter=1}
value=this._adjustValue(value+step*this._increment(this.counter));if(!this.spinning||this._trigger("spin",event,{value:value})!==!1){this._value(value);this.counter++}},_increment:function(i){var incremental=this.options.incremental;if(incremental){return $.isFunction(incremental)?incremental(i):Math.floor(i*i*i/50000-i*i/500+17*i/200+1)}
return 1},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min))}
return precision},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1},_adjustValue:function(value){var base,aboveMin,options=this.options;base=options.min!==null?options.min:0;aboveMin=value-base;aboveMin=Math.round(aboveMin/options.step)*options.step;value=base+aboveMin;value=parseFloat(value.toFixed(this._precision()));if(options.max!==null&&value>options.max){return options.max}
if(options.min!==null&&value<options.min){return options.min}
return value},_stop:function(event){if(!this.spinning){return}
clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=!1;this._trigger("stop",event)},_setOption:function(key,value){if(key==="culture"||key==="numberFormat"){var prevValue=this._parse(this.element.val());this.options[key]=value;this.element.val(this._format(prevValue));return}
if(key==="max"||key==="min"||key==="step"){if(typeof value==="string"){value=this._parse(value)}}
if(key==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(value.up);this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(value.down)}
this._super(key,value);if(key==="disabled"){this.widget().toggleClass("ui-state-disabled",!!value);this.element.prop("disabled",!!value);this.buttons.button(value?"disable":"enable")}},_setOptions:spinner_modifier(function(options){this._super(options)}),_parse:function(val){if(typeof val==="string"&&val!==""){val=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(val,10,this.options.culture):+val}
return val===""||isNaN(val)?null:val},_format:function(value){if(value===""){return""}
return window.Globalize&&this.options.numberFormat?Globalize.format(value,this.options.numberFormat,this.options.culture):value},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var value=this.value();if(value===null){return!1}
return value===this._adjustValue(value)},_value:function(value,allowAny){var parsed;if(value!==""){parsed=this._parse(value);if(parsed!==null){if(!allowAny){parsed=this._adjustValue(parsed)}
value=this._format(parsed)}}
this.element.val(value);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:spinner_modifier(function(steps){this._stepUp(steps)}),_stepUp:function(steps){if(this._start()){this._spin((steps||1)*this.options.step);this._stop()}},stepDown:spinner_modifier(function(steps){this._stepDown(steps)}),_stepDown:function(steps){if(this._start()){this._spin((steps||1)*-this.options.step);this._stop()}},pageUp:spinner_modifier(function(pages){this._stepUp((pages||1)*this.options.page)}),pageDown:spinner_modifier(function(pages){this._stepDown((pages||1)*this.options.page)}),value:function(newVal){if(!arguments.length){return this._parse(this.element.val())}
spinner_modifier(this._value).call(this,newVal)},widget:function(){return this.uiSpinner}});
/*!
 * jQuery UI Tabs 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */
var tabs=$.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(function(){var rhash=/#.*$/;return function(anchor){var anchorUrl,locationUrl;anchor=anchor.cloneNode(!1);anchorUrl=anchor.href.replace(rhash,"");locationUrl=location.href.replace(rhash,"");try{anchorUrl=decodeURIComponent(anchorUrl)}catch(error){}
try{locationUrl=decodeURIComponent(locationUrl)}catch(error){}
return anchor.hash.length>1&&anchorUrl===locationUrl}})(),_create:function(){var that=this,options=this.options;this.running=!1;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",options.collapsible);this._processTabs();options.active=this._initialActive();if($.isArray(options.disabled)){options.disabled=$.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(li){return that.tabs.index(li)}))).sort()}
if(this.options.active!==!1&&this.anchors.length){this.active=this._findActive(options.active)}else{this.active=$()}
this._refresh();if(this.active.length){this.load(options.active)}},_initialActive:function(){var active=this.options.active,collapsible=this.options.collapsible,locationHash=location.hash.substring(1);if(active===null){if(locationHash){this.tabs.each(function(i,tab){if($(tab).attr("aria-controls")===locationHash){active=i;return!1}})}
if(active===null){active=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}
if(active===null||active===-1){active=this.tabs.length?0:!1}}
if(active!==!1){active=this.tabs.index(this.tabs.eq(active));if(active===-1){active=collapsible?!1:0}}
if(!collapsible&&active===!1&&this.anchors.length){active=0}
return active},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?$():this._getPanelForTab(this.active)}},_tabKeydown:function(event){var focusedTab=$(this.document[0].activeElement).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=!0;if(this._handlePageNav(event)){return}
switch(event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=!1;selectedIndex--;break;case $.ui.keyCode.END:selectedIndex=this.anchors.length-1;break;case $.ui.keyCode.HOME:selectedIndex=0;break;case $.ui.keyCode.SPACE:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex);return;case $.ui.keyCode.ENTER:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex===this.options.active?!1:selectedIndex);return;default:return}
event.preventDefault();clearTimeout(this.activating);selectedIndex=this._focusNextTab(selectedIndex,goingForward);if(!event.ctrlKey&&!event.metaKey){focusedTab.attr("aria-selected","false");this.tabs.eq(selectedIndex).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",selectedIndex)},this.delay)}},_panelKeydown:function(event){if(this._handlePageNav(event)){return}
if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){event.preventDefault();this.active.focus()}},_handlePageNav:function(event){if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,!1));return!0}
if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,!0));return!0}},_findNextTab:function(index,goingForward){var lastTabIndex=this.tabs.length-1;function constrain(){if(index>lastTabIndex){index=0}
if(index<0){index=lastTabIndex}
return index}
while($.inArray(constrain(),this.options.disabled)!==-1){index=goingForward?index+1:index-1}
return index},_focusNextTab:function(index,goingForward){index=this._findNextTab(index,goingForward);this.tabs.eq(index).focus();return index},_setOption:function(key,value){if(key==="active"){this._activate(value);return}
if(key==="disabled"){this._setupDisabled(value);return}
this._super(key,value);if(key==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",value);if(!value&&this.options.active===!1){this._activate(0)}}
if(key==="event"){this._setupEvents(value)}
if(key==="heightStyle"){this._setupHeightStyle(value)}},_sanitizeSelector:function(hash){return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var options=this.options,lis=this.tablist.children(":has(a[href])");options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab)});this._processTabs();if(options.active===!1||!this.anchors.length){options.active=!1;this.active=$()}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){if(this.tabs.length===options.disabled.length){options.active=!1;this.active=$()}else{this._activate(this._findNextTab(Math.max(0,options.active-1),!1))}}else{options.active=this.tabs.index(this.active)}
this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})}},_processTabs:function(){var that=this,prevTabs=this.tabs,prevAnchors=this.anchors,prevPanels=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(event){if($(this).is(".ui-state-disabled")){event.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur()}});this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return $("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=$();this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");if(that._isLocal(anchor)){selector=anchor.hash;panelId=selector.substring(1);panel=that.element.find(that._sanitizeSelector(selector))}else{panelId=tab.attr("aria-controls")||$({}).uniqueId()[0].id;selector="#"+panelId;panel=that.element.find(selector);if(!panel.length){panel=that._createPanel(panelId);panel.insertAfter(that.panels[i-1]||that.tablist)}
panel.attr("aria-live","polite")}
if(panel.length){that.panels=that.panels.add(panel)}
if(originalAriaControls){tab.data("ui-tabs-aria-controls",originalAriaControls)}
tab.attr({"aria-controls":panelId,"aria-labelledby":anchorId});panel.attr("aria-labelledby",anchorId)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel");if(prevTabs){this._off(prevTabs.not(this.tabs));this._off(prevAnchors.not(this.anchors));this._off(prevPanels.not(this.panels))}},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(id){return $("<div>").attr("id",id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(disabled){if($.isArray(disabled)){if(!disabled.length){disabled=!1}else if(disabled.length===this.anchors.length){disabled=!0}}
for(var i=0,li;(li=this.tabs[i]);i++){if(disabled===!0||$.inArray(i,disabled)!==-1){$(li).addClass("ui-state-disabled").attr("aria-disabled","true")}else{$(li).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}
this.options.disabled=disabled},_setupEvents:function(event){var events={};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler"})}
this._off(this.anchors.add(this.tabs).add(this.panels));this._on(!0,this.anchors,{click:function(event){event.preventDefault()}});this._on(this.anchors,events);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(heightStyle){var maxHeight,parent=this.element.parent();if(heightStyle==="fill"){maxHeight=parent.height();maxHeight-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return}
maxHeight-=elem.outerHeight(!0)});this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(!0)});this.panels.each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")}else if(heightStyle==="auto"){maxHeight=0;this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height())}).height(maxHeight)}},_eventHandler:function(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=!active.length?$():this._getPanelForTab(active),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault();if(tab.hasClass("ui-state-disabled")||tab.hasClass("ui-tabs-loading")||this.running||(clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===!1)){return}
options.active=collapsing?!1:this.tabs.index(tab);this.active=clickedIsActive?$():tab;if(this.xhr){this.xhr.abort()}
if(!toHide.length&&!toShow.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.")}
if(toShow.length){this.load(this.tabs.index(tab),event)}
this._toggle(event,eventData)},_toggle:function(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=!0;function complete(){that.running=!1;that._trigger("activate",event,eventData)}
function show(){eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(toShow.length&&that.options.show){that._show(toShow,that.options.show,complete)}else{toShow.show();complete()}}
if(toHide.length&&this.options.hide){this._hide(toHide,this.options.hide,function(){eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");show()})}else{eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");toHide.hide();show()}
toHide.attr("aria-hidden","true");eventData.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});if(toShow.length&&toHide.length){eventData.oldTab.attr("tabIndex",-1)}else if(toShow.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0}).attr("tabIndex",-1)}
toShow.attr("aria-hidden","false");eventData.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(index){var anchor,active=this._findActive(index);if(active[0]===this.active[0]){return}
if(!active.length){active=this.active}
anchor=active.find(".ui-tabs-anchor")[0];this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop})},_findActive:function(index){return index===!1?$():this.tabs.eq(index)},_getIndex:function(index){if(typeof index==="string"){index=this.anchors.index(this.anchors.filter("[href$='"+index+"']"))}
return index},_destroy:function(){if(this.xhr){this.xhr.abort()}
this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();this.tablist.unbind(this.eventNamespace);this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove()}else{$(this).removeClass("ui-state-default ui-state-active ui-state-disabled "+"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}});this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");if(prev){li.attr("aria-controls",prev).removeData("ui-tabs-aria-controls")}else{li.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(index){var disabled=this.options.disabled;if(disabled===!1){return}
if(index===undefined){disabled=!1}else{index=this._getIndex(index);if($.isArray(disabled)){disabled=$.map(disabled,function(num){return num!==index?num:null})}else{disabled=$.map(this.tabs,function(li,num){return num!==index?num:null})}}
this._setupDisabled(disabled)},disable:function(index){var disabled=this.options.disabled;if(disabled===!0){return}
if(index===undefined){disabled=!0}else{index=this._getIndex(index);if($.inArray(index,disabled)!==-1){return}
if($.isArray(disabled)){disabled=$.merge([index],disabled).sort()}else{disabled=[index]}}
this._setupDisabled(disabled)},load:function(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel},complete=function(jqXHR,status){if(status==="abort"){that.panels.stop(!1,!0)}
tab.removeClass("ui-tabs-loading");panel.removeAttr("aria-busy");if(jqXHR===that.xhr){delete that.xhr}};if(this._isLocal(anchor[0])){return}
this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));if(this.xhr&&this.xhr.statusText!=="canceled"){tab.addClass("ui-tabs-loading");panel.attr("aria-busy","true");this.xhr.done(function(response,status,jqXHR){setTimeout(function(){panel.html(response);that._trigger("load",event,eventData);complete(jqXHR,status)},1)}).fail(function(jqXHR,status){setTimeout(function(){complete(jqXHR,status)},1)})}},_ajaxSettings:function(anchor,event,eventData){var that=this;return{url:anchor.attr("href"),beforeSend:function(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData))}}},_getPanelForTab:function(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id))}});
/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
var dataSpace="ui-effects-",jQuery=$;$.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]]}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha)},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:!0,max:255},"percent":{max:1},"degrees":{mod:360,floor:!0}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1}});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return(allowEmpty||!prop.def)?null:prop.def}
value=type.floor?~~value:parseFloat(value);if(isNaN(value)){return prop.def}
if(type.mod){return(value+type.mod)%type.mod}
return 0>value?0:type.max<value?type.max:value}
function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;return!1}});if(rgba.length){if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent)}
return inst}
return colors[string]}
color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this}
if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined}
var inst=this,type=jQuery.type(red),rgba=this._rgba=[];if(green!==undefined){red=[red,green,blue,alpha];type="array"}
if(type==="string"){return this.parse(stringParse(red)||colors._default)}
if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop)});return this}
if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice()}})}else{each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null){return}
inst[cache]=space.to(inst._rgba)}
inst[cache][prop.idx]=clamp(red[key],prop,!0)});if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){inst[cache][3]=1;if(space.from){inst._rgba=space.from(inst[cache])}}})}
return this}},is:function(compare){var is=color(compare),same=!0,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=(isCache[prop.idx]===localCache[prop.idx]);return same}})}
return same});return same},_space:function(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName)}});return used.pop()},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};if(endValue===null){return}
if(startValue===null){result[index]=endValue}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod}else if(startValue-endValue>type.mod/2){startValue-=type.mod}}
result[index]=clamp((endValue-startValue)*distance+startValue,prop)}});return this[spaceName](result)},blend:function(opaque){if(this._rgba[3]===1){return this}
var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v}))},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?(i>2?1:0):v});if(rgba[3]===1){rgba.pop();prefix="rgb("}
return prefix+rgba.join()+")"},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0}
if(i&&i<3){v=Math.round(v*100)+"%"}
return v});if(hsla[3]===1){hsla.pop();prefix="hsl("}
return prefix+hsla.join()+")"},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255))}
return"#"+jQuery.map(rgba,function(v){v=(v||0).toString(16);return v.length===1?"0"+v:v}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6}
if(h*2<1){return q}
if(h*3<2){return p+(q-p)*((2/3)-h)*6}
return p}
spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]]}
var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0}else if(r===max){h=(60*(g-b)/diff)+360}else if(g===max){h=(60*(b-r)/diff)+120}else{h=(60*(r-g)/diff)+240}
if(diff===0){s=0}else if(l<=0.5){s=diff/add}else{s=diff/(2-add)}
return[Math.round(h)%360,s,l,a==null?1:a]};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]]}
var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+(1/3))*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-(1/3))*255),a]};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache]){this[cache]=to(this._rgba)}
if(value===undefined){return this[cache].slice()}
var ret,type=jQuery.type(value),arr=(type==="array"||type==="object")?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx]}
local[prop.idx]=clamp(val,prop)});if(from){ret=color(from(local));ret[cache]=local;return ret}else{return color(local)}};each(props,function(key,prop){if(color.fn[key]){return}
color.fn[key]=function(value){var vtype=jQuery.type(value),fn=(key==="alpha"?(this._hsla?"hsla":"rgba"):spaceName),local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined"){return cur}
if(vtype==="function"){value=value.call(this,cur);vtype=jQuery.type(value)}
if(value==null&&prop.empty){return this}
if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1)}}
local[prop.idx]=value;return this[fn](local)}})});color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode}catch(e){}}
value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default")}
value=value.toRgbaString()}
try{elem.style[hook]=value}catch(e){}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=!0}
jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos))}})};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value});return expanded}};colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=!0}}});function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){styles[$.camelCase(key)]=style[key]}}}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key]}}}
return styles}
function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value}}}}
return diff}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}}
$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)}});applyClassChange=function(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action])}})};applyClassChange();allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);this.diff=styleDifference(this.start,this.end);return this});animated.attr("class",baseClass);allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:!1,complete:function(){dfd.resolve(styleInfo)}});this.el.animate(this.diff,opts);return dfd.promise()});$.when.apply($,allAnimations.get()).done(function(){applyClassChange();$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"")})});o.complete.call(animated[0])})})};$.fn.extend({addClass:(function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments)}})($.fn.addClass),removeClass:(function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments)}})($.fn.removeClass),toggleClass:(function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){return orig.apply(this,arguments)}else{return $.effects.animateClass.call(this,(force?{add:classNames}:{remove:classNames}),speed,easing,callback)}}else{return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing)}}})($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback)}})})();(function(){$.extend($.effects,{version:"1.11.4",save:function(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]])}}},restore:function(element,set){var val,i;for(i=0;i<set.length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);if(val===undefined){val=""}
element.css(set[i],val)}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide"}
return mode},getBaseline:function(origin,original){var y,x;switch(origin[0]){case "top":y=0;break;case "middle":y=0.5;break;case "bottom":y=1;break;default:y=origin[0]/original.height}
switch(origin[1]){case "left":x=0;break;case "center":x=0.5;break;case "right":x=1;break;default:x=origin[1]/original.width}
return{x:x,y:y}},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent()}
var props={width:element.outerWidth(!0),height:element.outerHeight(!0),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;try{active.id}catch(e){active=document.body}
element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).focus()}
wrapper=element.parent();if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"})}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto"}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}
element.css(size);return wrapper.css(props).show()},removeWrapper:function(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).focus()}}
return element},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1]}});return value}});function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){options=effect;effect=effect.effect}
effect={effect:effect};if(options==null){options={}}
if($.isFunction(options)){callback=options;speed=null;options={}}
if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={}}
if($.isFunction(speed)){callback=speed;speed=null}
if(options){$.extend(effect,options)}
speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect}
function standardAnimationOption(option){if(!option||typeof option==="number"||$.fx.speeds[option]){return!0}
if(typeof option==="string"&&!$.effects.effect[option]){return!0}
if($.isFunction(option)){return!0}
if(typeof option==="object"&&!option.effect){return!0}
return!1}
$.fn.extend({effect:function(){var args=_normalizeArguments.apply(this,arguments),mode=args.mode,queue=args.queue,effectMethod=$.effects.effect[args.effect];if($.fx.off||!effectMethod){if(mode){return this[mode](args.duration,args.complete)}else{return this.each(function(){if(args.complete){args.complete.call(this)}})}}
function run(next){var elem=$(this),complete=args.complete,mode=args.mode;function done(){if($.isFunction(complete)){complete.call(elem[0])}
if($.isFunction(next)){next()}}
if(elem.is(":hidden")?mode==="hide":mode==="show"){elem[mode]();done()}else{effectMethod.call(elem[0],args,done)}}
return queue===!1?this.each(run):this.queue(queue||"fx",run)},show:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args)}}})($.fn.show),hide:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args)}}})($.fn.hide),toggle:(function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args)}}})($.fn.toggle),cssUnit:function(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit]}});return val}})})();(function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2)}});$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}
return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2)}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p)};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2}})})();var effect=$.effects;
/*!
 * jQuery UI Effects Blind 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 */
var effectBlind=$.effects.effect.blind=function(o,done){var el=$(this),rvertical=/up|down|vertical/,rpositivemotion=/up|left|vertical|horizontal/,props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),direction=o.direction||"up",vertical=rvertical.test(direction),ref=vertical?"height":"width",ref2=vertical?"top":"left",motion=rpositivemotion.test(direction),animation={},show=mode==="show",wrapper,distance,margin;if(el.parent().is(".ui-effects-wrapper")){$.effects.save(el.parent(),props)}else{$.effects.save(el,props)}
el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});distance=wrapper[ref]();margin=parseFloat(wrapper.css(ref2))||0;animation[ref]=show?distance:0;if(!motion){el.css(vertical?"bottom":"right",0).css(vertical?"top":"left","auto").css({position:"absolute"});animation[ref2]=show?margin:distance+margin}
if(show){wrapper.css(ref,0);if(!motion){wrapper.css(ref2,margin+distance)}}
wrapper.animate(animation,{duration:o.duration,easing:o.easing,queue:!1,complete:function(){if(mode==="hide"){el.hide()}
$.effects.restore(el,props);$.effects.removeWrapper(el);done()}})};
/*!
 * jQuery UI Effects Bounce 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 */
var effectBounce=$.effects.effect.bounce=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"effect"),hide=mode==="hide",show=mode==="show",direction=o.direction||"up",distance=o.distance,times=o.times||5,anims=times*2+(show||hide?1:0),speed=o.duration/anims,easing=o.easing,ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left"),i,upAnim,downAnim,queue=el.queue(),queuelen=queue.length;if(show||hide){props.push("opacity")}
$.effects.save(el,props);el.show();$.effects.createWrapper(el);if(!distance){distance=el[ref==="top"?"outerHeight":"outerWidth"]()/3}
if(show){downAnim={opacity:1};downAnim[ref]=0;el.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing)}
if(hide){distance=distance/Math.pow(2,times-1)}
downAnim={};downAnim[ref]=0;for(i=0;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance/2}
if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing)}
el.queue(function(){if(hide){el.hide()}
$.effects.restore(el,props);$.effects.removeWrapper(el);done()});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)))}
el.dequeue()};
/*!
 * jQuery UI Effects Clip 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 */
var effectClip=$.effects.effect.clip=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",direction=o.direction||"vertical",vert=direction==="vertical",size=vert?"height":"width",position=vert?"top":"left",animation={},wrapper,animate,distance;$.effects.save(el,props);el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});animate=(el[0].tagName==="IMG")?wrapper:el;distance=animate[size]();if(show){animate.css(size,0);animate.css(position,distance/2)}
animation[size]=show?distance:0;animation[position]=show?0:distance/2;animate.animate(animation,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){if(!show){el.hide()}
$.effects.restore(el,props);$.effects.removeWrapper(el);done()}})};
/*!
 * jQuery UI Effects Drop 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 */
var effectDrop=$.effects.effect.drop=function(o,done){var el=$(this),props=["position","top","bottom","left","right","opacity","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",direction=o.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left")?"pos":"neg",animation={opacity:show?1:0},distance;$.effects.save(el,props);el.show();$.effects.createWrapper(el);distance=o.distance||el[ref==="top"?"outerHeight":"outerWidth"](!0)/2;if(show){el.css("opacity",0).css(ref,motion==="pos"?-distance:distance)}
animation[ref]=(show?(motion==="pos"?"+=":"-="):(motion==="pos"?"-=":"+="))+distance;el.animate(animation,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){if(mode==="hide"){el.hide()}
$.effects.restore(el,props);$.effects.removeWrapper(el);done()}})};
/*!
 * jQuery UI Effects Explode 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 */
var effectExplode=$.effects.effect.explode=function(o,done){var rows=o.pieces?Math.round(Math.sqrt(o.pieces)):3,cells=rows,el=$(this),mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",offset=el.show().css("visibility","hidden").offset(),width=Math.ceil(el.outerWidth()/cells),height=Math.ceil(el.outerHeight()/rows),pieces=[],i,j,left,top,mx,my;function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete()}}
for(i=0;i<rows;i++){top=offset.top+i*height;my=i-(rows-1)/2;for(j=0;j<cells;j++){left=offset.left+j*width;mx=j-(cells-1)/2;el.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},o.duration||500,o.easing,childComplete)}}
function animComplete(){el.css({visibility:"visible"});$(pieces).remove();if(!show){el.hide()}
done()}};
/*!
 * jQuery UI Effects Fade 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 */
var effectFade=$.effects.effect.fade=function(o,done){var el=$(this),mode=$.effects.setMode(el,o.mode||"toggle");el.animate({opacity:mode},{queue:!1,duration:o.duration,easing:o.easing,complete:done})};
/*!
 * jQuery UI Effects Fold 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 */
var effectFold=$.effects.effect.fold=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",hide=mode==="hide",size=o.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!o.horizFirst,widthFirst=show!==horizFirst,ref=widthFirst?["width","height"]:["height","width"],duration=o.duration/2,wrapper,distance,animation1={},animation2={};$.effects.save(el,props);el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});distance=widthFirst?[wrapper.width(),wrapper.height()]:[wrapper.height(),wrapper.width()];if(percent){size=parseInt(percent[1],10)/100*distance[hide?0:1]}
if(show){wrapper.css(horizFirst?{height:0,width:size}:{height:size,width:0})}
animation1[ref[0]]=show?distance[0]:size;animation2[ref[1]]=show?distance[1]:0;wrapper.animate(animation1,duration,o.easing).animate(animation2,duration,o.easing,function(){if(hide){el.hide()}
$.effects.restore(el,props);$.effects.removeWrapper(el);done()})};
/*!
 * jQuery UI Effects Highlight 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 */
var effectHighlight=$.effects.effect.highlight=function(o,done){var elem=$(this),props=["backgroundImage","backgroundColor","opacity"],mode=$.effects.setMode(elem,o.mode||"show"),animation={backgroundColor:elem.css("backgroundColor")};if(mode==="hide"){animation.opacity=0}
$.effects.save(elem,props);elem.show().css({backgroundImage:"none",backgroundColor:o.color||"#ffff99"}).animate(animation,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){if(mode==="hide"){elem.hide()}
$.effects.restore(elem,props);done()}})};
/*!
 * jQuery UI Effects Size 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/size-effect/
 */
var effectSize=$.effects.effect.size=function(o,done){var original,baseline,factor,el=$(this),props0=["position","top","bottom","left","right","width","height","overflow","opacity"],props1=["position","top","bottom","left","right","overflow","opacity"],props2=["width","height","overflow"],cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],mode=$.effects.setMode(el,o.mode||"effect"),restore=o.restore||mode!=="effect",scale=o.scale||"both",origin=o.origin||["middle","center"],position=el.css("position"),props=restore?props0:props1,zero={height:0,width:0,outerHeight:0,outerWidth:0};if(mode==="show"){el.show()}
original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()};if(o.mode==="toggle"&&mode==="show"){el.from=o.to||zero;el.to=o.from||original}else{el.from=o.from||(mode==="show"?zero:original);el.to=o.to||(mode==="hide"?zero:original)}
factor={from:{y:el.from.height/original.height,x:el.from.width/original.width},to:{y:el.to.height/original.height,x:el.to.width/original.width}};if(scale==="box"||scale==="both"){if(factor.from.y!==factor.to.y){props=props.concat(vProps);el.from=$.effects.setTransition(el,vProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,vProps,factor.to.y,el.to)}
if(factor.from.x!==factor.to.x){props=props.concat(hProps);el.from=$.effects.setTransition(el,hProps,factor.from.x,el.from);el.to=$.effects.setTransition(el,hProps,factor.to.x,el.to)}}
if(scale==="content"||scale==="both"){if(factor.from.y!==factor.to.y){props=props.concat(cProps).concat(props2);el.from=$.effects.setTransition(el,cProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,cProps,factor.to.y,el.to)}}
$.effects.save(el,props);el.show();$.effects.createWrapper(el);el.css("overflow","hidden").css(el.from);if(origin){baseline=$.effects.getBaseline(origin,original);el.from.top=(original.outerHeight-el.outerHeight())*baseline.y;el.from.left=(original.outerWidth-el.outerWidth())*baseline.x;el.to.top=(original.outerHeight-el.to.outerHeight)*baseline.y;el.to.left=(original.outerWidth-el.to.outerWidth)*baseline.x}
el.css(el.from);if(scale==="content"||scale==="both"){vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);props2=props0.concat(vProps).concat(hProps);el.find("*[width]").each(function(){var child=$(this),c_original={height:child.height(),width:child.width(),outerHeight:child.outerHeight(),outerWidth:child.outerWidth()};if(restore){$.effects.save(child,props2)}
child.from={height:c_original.height*factor.from.y,width:c_original.width*factor.from.x,outerHeight:c_original.outerHeight*factor.from.y,outerWidth:c_original.outerWidth*factor.from.x};child.to={height:c_original.height*factor.to.y,width:c_original.width*factor.to.x,outerHeight:c_original.height*factor.to.y,outerWidth:c_original.width*factor.to.x};if(factor.from.y!==factor.to.y){child.from=$.effects.setTransition(child,vProps,factor.from.y,child.from);child.to=$.effects.setTransition(child,vProps,factor.to.y,child.to)}
if(factor.from.x!==factor.to.x){child.from=$.effects.setTransition(child,hProps,factor.from.x,child.from);child.to=$.effects.setTransition(child,hProps,factor.to.x,child.to)}
child.css(child.from);child.animate(child.to,o.duration,o.easing,function(){if(restore){$.effects.restore(child,props2)}})})}
el.animate(el.to,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){if(el.to.opacity===0){el.css("opacity",el.from.opacity)}
if(mode==="hide"){el.hide()}
$.effects.restore(el,props);if(!restore){if(position==="static"){el.css({position:"relative",top:el.to.top,left:el.to.left})}else{$.each(["top","left"],function(idx,pos){el.css(pos,function(_,str){var val=parseInt(str,10),toRef=idx?el.to.left:el.to.top;if(str==="auto"){return toRef+"px"}
return val+toRef+"px"})})}}
$.effects.removeWrapper(el);done()}})};
/*!
 * jQuery UI Effects Scale 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 */
var effectScale=$.effects.effect.scale=function(o,done){var el=$(this),options=$.extend(!0,{},o),mode=$.effects.setMode(el,o.mode||"effect"),percent=parseInt(o.percent,10)||(parseInt(o.percent,10)===0?0:(mode==="hide"?0:100)),direction=o.direction||"both",origin=o.origin,original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()},factor={y:direction!=="horizontal"?(percent/100):1,x:direction!=="vertical"?(percent/100):1};options.effect="size";options.queue=!1;options.complete=done;if(mode!=="effect"){options.origin=origin||["middle","center"];options.restore=!0}
options.from=o.from||(mode==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:original);options.to={height:original.height*factor.y,width:original.width*factor.x,outerHeight:original.outerHeight*factor.y,outerWidth:original.outerWidth*factor.x};if(options.fade){if(mode==="show"){options.from.opacity=0;options.to.opacity=1}
if(mode==="hide"){options.from.opacity=1;options.to.opacity=0}}
el.effect(options)};
/*!
 * jQuery UI Effects Puff 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/puff-effect/
 */
var effectPuff=$.effects.effect.puff=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"hide"),hide=mode==="hide",percent=parseInt(o.percent,10)||150,factor=percent/100,original={height:elem.height(),width:elem.width(),outerHeight:elem.outerHeight(),outerWidth:elem.outerWidth()};$.extend(o,{effect:"scale",queue:!1,fade:!0,mode:mode,complete:done,percent:hide?percent:100,from:hide?original:{height:original.height*factor,width:original.width*factor,outerHeight:original.outerHeight*factor,outerWidth:original.outerWidth*factor}});elem.effect(o)};
/*!
 * jQuery UI Effects Pulsate 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 */
var effectPulsate=$.effects.effect.pulsate=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"show"),show=mode==="show",hide=mode==="hide",showhide=(show||mode==="hide"),anims=((o.times||5)*2)+(showhide?1:0),duration=o.duration/anims,animateTo=0,queue=elem.queue(),queuelen=queue.length,i;if(show||!elem.is(":visible")){elem.css("opacity",0).show();animateTo=1}
for(i=1;i<anims;i++){elem.animate({opacity:animateTo},duration,o.easing);animateTo=1-animateTo}
elem.animate({opacity:animateTo},duration,o.easing);elem.queue(function(){if(hide){elem.hide()}
done()});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)))}
elem.dequeue()};
/*!
 * jQuery UI Effects Shake 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 */
var effectShake=$.effects.effect.shake=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"effect"),direction=o.direction||"left",distance=o.distance||20,times=o.times||3,anims=times*2+1,speed=Math.round(o.duration/anims),ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),animation={},animation1={},animation2={},i,queue=el.queue(),queuelen=queue.length;$.effects.save(el,props);el.show();$.effects.createWrapper(el);animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;el.animate(animation,speed,o.easing);for(i=1;i<times;i++){el.animate(animation1,speed,o.easing).animate(animation2,speed,o.easing)}
el.animate(animation1,speed,o.easing).animate(animation,speed/2,o.easing).queue(function(){if(mode==="hide"){el.hide()}
$.effects.restore(el,props);$.effects.removeWrapper(el);done()});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)))}
el.dequeue()};
/*!
 * jQuery UI Effects Slide 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 */
var effectSlide=$.effects.effect.slide=function(o,done){var el=$(this),props=["position","top","bottom","left","right","width","height"],mode=$.effects.setMode(el,o.mode||"show"),show=mode==="show",direction=o.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),distance,animation={};$.effects.save(el,props);el.show();distance=o.distance||el[ref==="top"?"outerHeight":"outerWidth"](!0);$.effects.createWrapper(el).css({overflow:"hidden"});if(show){el.css(ref,positiveMotion?(isNaN(distance)?"-"+distance:-distance):distance)}
animation[ref]=(show?(positiveMotion?"+=":"-="):(positiveMotion?"-=":"+="))+distance;el.animate(animation,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){if(mode==="hide"){el.hide()}
$.effects.restore(el,props);$.effects.removeWrapper(el);done()}})};
/*!
 * jQuery UI Effects Transfer 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 */
var effectTransfer=$.effects.effect.transfer=function(o,done){var elem=$(this),target=$(o.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=elem.offset(),transfer=$("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(o.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:elem.innerHeight(),width:elem.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,o.duration,o.easing,function(){transfer.remove();done()})}}));(function($){var plugin={};var defaults={mode:'horizontal',slideSelector:'',infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:'visible',responsive:!0,slideZIndex:50,wrapperClass:'bx-wrapper',touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:'full',pagerShortSeparator:' / ',pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:'Next',prevText:'Prev',nextSelector:null,prevSelector:null,autoControls:!1,startText:'Start',stopText:'Stop',autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4000,autoStart:!0,autoDirection:'next',autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}}
$.fn.bxSlider=function(options){if(this.length==0)return this;if(this.length>1){this.each(function(){$(this).bxSlider(options)});return this}
var slider={};var el=this;plugin.el=this;var windowWidth=$(window).width();var windowHeight=$(window).height();var init=function(){slider.settings=$.extend({},defaults,options);slider.settings.slideWidth=parseInt(slider.settings.slideWidth);slider.children=el.children(slider.settings.slideSelector);if(slider.children.length<slider.settings.minSlides)slider.settings.minSlides=slider.children.length;if(slider.children.length<slider.settings.maxSlides)slider.settings.maxSlides=slider.children.length;if(slider.settings.randomStart)slider.settings.startSlide=Math.floor(Math.random()*slider.children.length);slider.active={index:slider.settings.startSlide}
slider.carousel=slider.settings.minSlides>1||slider.settings.maxSlides>1;if(slider.carousel)slider.settings.preloadImages='all';slider.minThreshold=(slider.settings.minSlides*slider.settings.slideWidth)+((slider.settings.minSlides-1)*slider.settings.slideMargin);slider.maxThreshold=(slider.settings.maxSlides*slider.settings.slideWidth)+((slider.settings.maxSlides-1)*slider.settings.slideMargin);slider.working=!1;slider.controls={};slider.interval=null;slider.animProp=slider.settings.mode=='vertical'?'top':'left';slider.usingCSS=slider.settings.useCSS&&slider.settings.mode!='fade'&&(function(){var div=document.createElement('div');var props=['WebkitPerspective','MozPerspective','OPerspective','msPerspective'];for(var i in props){if(div.style[props[i]]!==undefined){slider.cssPrefix=props[i].replace('Perspective','').toLowerCase();slider.animProp='-'+slider.cssPrefix+'-transform';return!0}}
return!1}());if(slider.settings.mode=='vertical')slider.settings.maxSlides=slider.settings.minSlides;el.data("origStyle",el.attr("style"));el.children(slider.settings.slideSelector).each(function(){$(this).data("origStyle",$(this).attr("style"))});setup()}
var setup=function(){el.wrap('<div class="'+slider.settings.wrapperClass+'"><div class="bx-viewport"></div></div>');slider.viewport=el.parent();slider.loader=$('<div class="bx-loading" />');slider.viewport.prepend(slider.loader);el.css({width:slider.settings.mode=='horizontal'?(slider.children.length*100+215)+'%':'auto',position:'relative'});if(slider.usingCSS&&slider.settings.easing){el.css('-'+slider.cssPrefix+'-transition-timing-function',slider.settings.easing)}else if(!slider.settings.easing){slider.settings.easing='swing'}
var slidesShowing=getNumberSlidesShowing();slider.viewport.css({width:'100%',overflow:'hidden',position:'relative'});slider.viewport.parent().css({maxWidth:getViewportMaxWidth()});if(!slider.settings.pager){slider.viewport.parent().css({margin:'0 auto 0px'})}
slider.children.css({'float':slider.settings.mode=='horizontal'?'left':'none',listStyle:'none',position:'relative'});slider.children.css('width',getSlideWidth());if(slider.settings.mode=='horizontal'&&slider.settings.slideMargin>0)slider.children.css('marginRight',slider.settings.slideMargin);if(slider.settings.mode=='vertical'&&slider.settings.slideMargin>0)slider.children.css('marginBottom',slider.settings.slideMargin);if(slider.settings.mode=='fade'){slider.children.css({position:'absolute',zIndex:0,display:'none'});slider.children.eq(slider.settings.startSlide).css({zIndex:slider.settings.slideZIndex,display:'block'})}
slider.controls.el=$('<div class="bx-controls" />');if(slider.settings.captions)appendCaptions();slider.active.last=slider.settings.startSlide==getPagerQty()-1;if(slider.settings.video)el.fitVids();var preloadSelector=slider.children.eq(slider.settings.startSlide);if(slider.settings.preloadImages=="all")preloadSelector=slider.children;if(!slider.settings.ticker){if(slider.settings.pager)appendPager();if(slider.settings.controls)appendControls();if(slider.settings.auto&&slider.settings.autoControls)appendControlsAuto();if(slider.settings.controls||slider.settings.autoControls||slider.settings.pager)slider.viewport.after(slider.controls.el)}else{slider.settings.pager=!1}
loadElements(preloadSelector,start)}
var loadElements=function(selector,callback){var total=selector.find('img, iframe').length;if(total==0){callback();return}
var count=0;selector.find('img, iframe').each(function(){$(this).one('load',function(){if(++count==total)callback()}).each(function(){if(this.complete)$(this).load()})})}
var start=function(){if(slider.settings.infiniteLoop&&slider.settings.mode!='fade'&&!slider.settings.ticker){var slice=slider.settings.mode=='vertical'?slider.settings.minSlides:slider.settings.maxSlides;var sliceAppend=slider.children.slice(0,slice).clone().addClass('bx-clone');var slicePrepend=slider.children.slice(-slice).clone().addClass('bx-clone');el.append(sliceAppend).prepend(slicePrepend)}
slider.loader.remove();setSlidePosition();if(slider.settings.mode=='vertical')slider.settings.adaptiveHeight=!0;slider.viewport.height(getViewportHeight());el.redrawSlider();slider.settings.onSliderLoad(slider.active.index);slider.initialized=!0;if(slider.settings.responsive)$(window).bind('resize',resizeWindow);if(slider.settings.auto&&slider.settings.autoStart&&(getPagerQty()>1||slider.settings.autoSlideForOnePage))initAuto();if(slider.settings.ticker)initTicker();if(slider.settings.pager)updatePagerActive(slider.settings.startSlide);if(slider.settings.controls)updateDirectionControls();if(slider.settings.touchEnabled&&!slider.settings.ticker)initTouch()}
var getViewportHeight=function(){var height=0;var children=$();if(slider.settings.mode!='vertical'&&!slider.settings.adaptiveHeight){children=slider.children}else{if(!slider.carousel){children=slider.children.eq(slider.active.index)}else{var currentIndex=slider.settings.moveSlides==1?slider.active.index:slider.active.index*getMoveBy();children=slider.children.eq(currentIndex);for(i=1;i<=slider.settings.maxSlides-1;i++){if(currentIndex+i>=slider.children.length){children=children.add(slider.children.eq(i-1))}else{children=children.add(slider.children.eq(currentIndex+i))}}}}
if(slider.settings.mode=='vertical'){children.each(function(index){height+=$(this).outerHeight()});if(slider.settings.slideMargin>0){height+=slider.settings.slideMargin*(slider.settings.minSlides-1)}}else{height=Math.max.apply(Math,children.map(function(){return $(this).outerHeight(!1)}).get())}
if(slider.viewport.css('box-sizing')=='border-box'){height+=parseFloat(slider.viewport.css('padding-top'))+parseFloat(slider.viewport.css('padding-bottom'))+parseFloat(slider.viewport.css('border-top-width'))+parseFloat(slider.viewport.css('border-bottom-width'))}else if(slider.viewport.css('box-sizing')=='padding-box'){height+=parseFloat(slider.viewport.css('padding-top'))+parseFloat(slider.viewport.css('padding-bottom'))}
return height}
var getViewportMaxWidth=function(){var width='100%';if(slider.settings.slideWidth>0){if(slider.settings.mode=='horizontal'){width=(slider.settings.maxSlides*slider.settings.slideWidth)+((slider.settings.maxSlides-1)*slider.settings.slideMargin)}else{width=slider.settings.slideWidth}}
return width}
var getSlideWidth=function(){var newElWidth=slider.settings.slideWidth;var wrapWidth=slider.viewport.width();if(slider.settings.slideWidth==0||(slider.settings.slideWidth>wrapWidth&&!slider.carousel)||slider.settings.mode=='vertical'){newElWidth=wrapWidth}else if(slider.settings.maxSlides>1&&slider.settings.mode=='horizontal'){if(wrapWidth>slider.maxThreshold){}else if(wrapWidth<slider.minThreshold){newElWidth=(wrapWidth-(slider.settings.slideMargin*(slider.settings.minSlides-1)))/slider.settings.minSlides}}
return newElWidth}
var getNumberSlidesShowing=function(){var slidesShowing=1;if(slider.settings.mode=='horizontal'&&slider.settings.slideWidth>0){if(slider.viewport.width()<slider.minThreshold){slidesShowing=slider.settings.minSlides}else if(slider.viewport.width()>slider.maxThreshold){slidesShowing=slider.settings.maxSlides}else{var childWidth=slider.children.first().width()+slider.settings.slideMargin;slidesShowing=Math.floor((slider.viewport.width()+slider.settings.slideMargin)/childWidth)}}else if(slider.settings.mode=='vertical'){slidesShowing=slider.settings.minSlides}
return slidesShowing}
var getPagerQty=function(){var pagerQty=0;if(slider.settings.moveSlides>0){if(slider.settings.infiniteLoop){pagerQty=Math.ceil(slider.children.length/getMoveBy())}else{var breakPoint=0;var counter=0
while(breakPoint<slider.children.length){++pagerQty;breakPoint=counter+getNumberSlidesShowing();counter+=slider.settings.moveSlides<=getNumberSlidesShowing()?slider.settings.moveSlides:getNumberSlidesShowing()}}}else{pagerQty=Math.ceil(slider.children.length/getNumberSlidesShowing())}
return pagerQty}
var getMoveBy=function(){if(slider.settings.moveSlides>0&&slider.settings.moveSlides<=getNumberSlidesShowing()){return slider.settings.moveSlides}
return getNumberSlidesShowing()}
var setSlidePosition=function(){if(slider.children.length>slider.settings.maxSlides&&slider.active.last&&!slider.settings.infiniteLoop){if(slider.settings.mode=='horizontal'){var lastChild=slider.children.last();var position=lastChild.position();setPositionProperty(-(position.left-(slider.viewport.width()-lastChild.outerWidth())),'reset',0)}else if(slider.settings.mode=='vertical'){var lastShowingIndex=slider.children.length-slider.settings.minSlides;var position=slider.children.eq(lastShowingIndex).position();setPositionProperty(-position.top,'reset',0)}}else{var position=slider.children.eq(slider.active.index*getMoveBy()).position();if(slider.active.index==getPagerQty()-1)slider.active.last=!0;if(position!=undefined){if(slider.settings.mode=='horizontal')setPositionProperty(-position.left,'reset',0);else if(slider.settings.mode=='vertical')setPositionProperty(-position.top,'reset',0)}}}
var setPositionProperty=function(value,type,duration,params){if(slider.usingCSS){var propValue=slider.settings.mode=='vertical'?'translate3d(0, '+value+'px, 0)':'translate3d('+value+'px, 0, 0)';el.css('-'+slider.cssPrefix+'-transition-duration',duration/1000+'s');if(type=='slide'){el.css(slider.animProp,propValue);el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(){el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');updateAfterSlideTransition()})}else if(type=='reset'){el.css(slider.animProp,propValue)}else if(type=='ticker'){el.css('-'+slider.cssPrefix+'-transition-timing-function','linear');el.css(slider.animProp,propValue);el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(){el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');setPositionProperty(params.resetValue,'reset',0);tickerLoop()})}}else{var animateObj={};animateObj[slider.animProp]=value;if(type=='slide'){el.animate(animateObj,duration,slider.settings.easing,function(){updateAfterSlideTransition()})}else if(type=='reset'){el.css(slider.animProp,value)}else if(type=='ticker'){el.animate(animateObj,speed,'linear',function(){setPositionProperty(params.resetValue,'reset',0);tickerLoop()})}}}
var populatePager=function(){var pagerHtml='';var pagerQty=getPagerQty();for(var i=0;i<pagerQty;i++){var linkContent='';if(slider.settings.buildPager&&$.isFunction(slider.settings.buildPager)){linkContent=slider.settings.buildPager(i);slider.pagerEl.addClass('bx-custom-pager')}else{linkContent=i+1;slider.pagerEl.addClass('bx-default-pager')}
pagerHtml+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+linkContent+'</a></div>'};slider.pagerEl.html(pagerHtml)}
var appendPager=function(){if(!slider.settings.pagerCustom){slider.pagerEl=$('<div class="bx-pager" />');if(slider.settings.pagerSelector){$(slider.settings.pagerSelector).html(slider.pagerEl)}else{slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl)}
populatePager()}else{slider.pagerEl=$(slider.settings.pagerCustom)}
slider.pagerEl.on('click','a',clickPagerBind)}
var appendControls=function(){slider.controls.next=$('<a class="bx-next" href="">'+slider.settings.nextText+'</a>');slider.controls.prev=$('<a class="bx-prev" href="">'+slider.settings.prevText+'</a>');slider.controls.next.bind('click',clickNextBind);slider.controls.prev.bind('click',clickPrevBind);if(slider.settings.nextSelector){$(slider.settings.nextSelector).append(slider.controls.next)}
if(slider.settings.prevSelector){$(slider.settings.prevSelector).append(slider.controls.prev)}
if(!slider.settings.nextSelector&&!slider.settings.prevSelector){slider.controls.directionEl=$('<div class="bx-controls-direction" />');slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl)}}
var appendControlsAuto=function(){slider.controls.start=$('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+slider.settings.startText+'</a></div>');slider.controls.stop=$('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+slider.settings.stopText+'</a></div>');slider.controls.autoEl=$('<div class="bx-controls-auto" />');slider.controls.autoEl.on('click','.bx-start',clickStartBind);slider.controls.autoEl.on('click','.bx-stop',clickStopBind);if(slider.settings.autoControlsCombine){slider.controls.autoEl.append(slider.controls.start)}else{slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop)}
if(slider.settings.autoControlsSelector){$(slider.settings.autoControlsSelector).html(slider.controls.autoEl)}else{slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl)}
updateAutoControls(slider.settings.autoStart?'stop':'start')}
var appendCaptions=function(){slider.children.each(function(index){var title=$(this).find('img:first').attr('title');if(title!=undefined&&(''+title).length){$(this).append('<div class="bx-caption"><span>'+title+'</span></div>')}})}
var clickNextBind=function(e){if(slider.settings.auto)el.stopAuto();el.goToNextSlide();e.preventDefault()}
var clickPrevBind=function(e){if(slider.settings.auto)el.stopAuto();el.goToPrevSlide();e.preventDefault()}
var clickStartBind=function(e){el.startAuto();e.preventDefault()}
var clickStopBind=function(e){el.stopAuto();e.preventDefault()}
var clickPagerBind=function(e){if(slider.settings.auto)el.stopAuto();var pagerLink=$(e.currentTarget);if(pagerLink.attr('data-slide-index')!==undefined){var pagerIndex=parseInt(pagerLink.attr('data-slide-index'));if(pagerIndex!=slider.active.index)el.goToSlide(pagerIndex);e.preventDefault()}}
var updatePagerActive=function(slideIndex){var len=slider.children.length;if(slider.settings.pagerType=='short'){if(slider.settings.maxSlides>1){len=Math.ceil(slider.children.length/slider.settings.maxSlides)}
slider.pagerEl.html((slideIndex+1)+slider.settings.pagerShortSeparator+len);return}
slider.pagerEl.find('a').removeClass('active');slider.pagerEl.each(function(i,el){$(el).find('a').eq(slideIndex).addClass('active')})}
var updateAfterSlideTransition=function(){if(slider.settings.infiniteLoop){var position='';if(slider.active.index==0){position=slider.children.eq(0).position()}else if(slider.active.index==getPagerQty()-1&&slider.carousel){position=slider.children.eq((getPagerQty()-1)*getMoveBy()).position()}else if(slider.active.index==slider.children.length-1){position=slider.children.eq(slider.children.length-1).position()}
if(position){if(slider.settings.mode=='horizontal'){setPositionProperty(-position.left,'reset',0)}else if(slider.settings.mode=='vertical'){setPositionProperty(-position.top,'reset',0)}}}
slider.working=!1;slider.settings.onSlideAfter(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)}
var updateAutoControls=function(state){if(slider.settings.autoControlsCombine){slider.controls.autoEl.html(slider.controls[state])}else{slider.controls.autoEl.find('a').removeClass('active');slider.controls.autoEl.find('a:not(.bx-'+state+')').addClass('active')}}
var updateDirectionControls=function(){if(getPagerQty()==1){slider.controls.prev.addClass('disabled');slider.controls.next.addClass('disabled')}else if(!slider.settings.infiniteLoop&&slider.settings.hideControlOnEnd){if(slider.active.index==0){slider.controls.prev.addClass('disabled');slider.controls.next.removeClass('disabled')}else if(slider.active.index==getPagerQty()-1){slider.controls.next.addClass('disabled');slider.controls.prev.removeClass('disabled')}else{slider.controls.prev.removeClass('disabled');slider.controls.next.removeClass('disabled')}}}
var initAuto=function(){if(slider.settings.autoDelay>0){var timeout=setTimeout(el.startAuto,slider.settings.autoDelay)}else{el.startAuto()}
if(slider.settings.autoHover){el.hover(function(){if(slider.interval){el.stopAuto(!0);slider.autoPaused=!0}},function(){if(slider.autoPaused){el.startAuto(!0);slider.autoPaused=null}})}}
var initTicker=function(){var startPosition=0;if(slider.settings.autoDirection=='next'){el.append(slider.children.clone().addClass('bx-clone'))}else{el.prepend(slider.children.clone().addClass('bx-clone'));var position=slider.children.first().position();startPosition=slider.settings.mode=='horizontal'?-position.left:-position.top}
setPositionProperty(startPosition,'reset',0);slider.settings.pager=!1;slider.settings.controls=!1;slider.settings.autoControls=!1;if(slider.settings.tickerHover&&!slider.usingCSS){slider.viewport.hover(function(){el.stop()},function(){var totalDimens=0;slider.children.each(function(index){totalDimens+=slider.settings.mode=='horizontal'?$(this).outerWidth(!0):$(this).outerHeight(!0)});var ratio=slider.settings.speed/totalDimens;var property=slider.settings.mode=='horizontal'?'left':'top';var newSpeed=ratio*(totalDimens-(Math.abs(parseInt(el.css(property)))));tickerLoop(newSpeed)})}
tickerLoop()}
var tickerLoop=function(resumeSpeed){speed=resumeSpeed?resumeSpeed:slider.settings.speed;var position={left:0,top:0};var reset={left:0,top:0};if(slider.settings.autoDirection=='next'){position=el.find('.bx-clone').first().position()}else{reset=slider.children.first().position()}
var animateProperty=slider.settings.mode=='horizontal'?-position.left:-position.top;var resetValue=slider.settings.mode=='horizontal'?-reset.left:-reset.top;var params={resetValue:resetValue};setPositionProperty(animateProperty,'ticker',speed,params)}
var initTouch=function(){slider.touch={start:{x:0,y:0},end:{x:0,y:0}}
slider.viewport.bind('touchstart',onTouchStart)}
var onTouchStart=function(e){if(slider.working){e.preventDefault()}else{slider.touch.originalPos=el.position();var orig=e.originalEvent;slider.touch.start.x=orig.changedTouches[0].pageX;slider.touch.start.y=orig.changedTouches[0].pageY;slider.viewport.bind('touchmove',onTouchMove);slider.viewport.bind('touchend',onTouchEnd)}}
var onTouchMove=function(e){var orig=e.originalEvent;var xMovement=Math.abs(orig.changedTouches[0].pageX-slider.touch.start.x);var yMovement=Math.abs(orig.changedTouches[0].pageY-slider.touch.start.y);if((xMovement*3)>yMovement&&slider.settings.preventDefaultSwipeX){e.preventDefault()}else if((yMovement*3)>xMovement&&slider.settings.preventDefaultSwipeY){e.preventDefault()}
if(slider.settings.mode!='fade'&&slider.settings.oneToOneTouch){var value=0;if(slider.settings.mode=='horizontal'){var change=orig.changedTouches[0].pageX-slider.touch.start.x;value=slider.touch.originalPos.left+change}else{var change=orig.changedTouches[0].pageY-slider.touch.start.y;value=slider.touch.originalPos.top+change}
setPositionProperty(value,'reset',0)}}
var onTouchEnd=function(e){slider.viewport.unbind('touchmove',onTouchMove);var orig=e.originalEvent;var value=0;slider.touch.end.x=orig.changedTouches[0].pageX;slider.touch.end.y=orig.changedTouches[0].pageY;if(slider.settings.mode=='fade'){var distance=Math.abs(slider.touch.start.x-slider.touch.end.x);if(distance>=slider.settings.swipeThreshold){slider.touch.start.x>slider.touch.end.x?el.goToNextSlide():el.goToPrevSlide();el.stopAuto()}}else{var distance=0;if(slider.settings.mode=='horizontal'){distance=slider.touch.end.x-slider.touch.start.x;value=slider.touch.originalPos.left}else{distance=slider.touch.end.y-slider.touch.start.y;value=slider.touch.originalPos.top}
if(!slider.settings.infiniteLoop&&((slider.active.index==0&&distance>0)||(slider.active.last&&distance<0))){setPositionProperty(value,'reset',200)}else{if(Math.abs(distance)>=slider.settings.swipeThreshold){distance<0?el.goToNextSlide():el.goToPrevSlide();el.stopAuto()}else{setPositionProperty(value,'reset',200)}}}
slider.viewport.unbind('touchend',onTouchEnd)}
var resizeWindow=function(e){if(!slider.initialized)return;var windowWidthNew=$(window).width();var windowHeightNew=$(window).height();if(windowWidth!=windowWidthNew||windowHeight!=windowHeightNew){windowWidth=windowWidthNew;windowHeight=windowHeightNew;el.redrawSlider();slider.settings.onSliderResize.call(el,slider.active.index)}}
el.goToSlide=function(slideIndex,direction){if(slider.working||slider.active.index==slideIndex)return;slider.working=!0;slider.oldIndex=slider.active.index;if(slideIndex<0){slider.active.index=getPagerQty()-1}else if(slideIndex>=getPagerQty()){slider.active.index=0}else{slider.active.index=slideIndex}
slider.settings.onSlideBefore(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index);if(direction=='next'){slider.settings.onSlideNext(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)}else if(direction=='prev'){slider.settings.onSlidePrev(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)}
slider.active.last=slider.active.index>=getPagerQty()-1;if(slider.settings.pager)updatePagerActive(slider.active.index);if(slider.settings.controls)updateDirectionControls();if(slider.settings.mode=='fade'){if(slider.settings.adaptiveHeight&&slider.viewport.height()!=getViewportHeight()){slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed)}
slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex:0});slider.children.eq(slider.active.index).css('zIndex',slider.settings.slideZIndex+1).fadeIn(slider.settings.speed,function(){$(this).css('zIndex',slider.settings.slideZIndex);updateAfterSlideTransition()})}else{if(slider.settings.adaptiveHeight&&slider.viewport.height()!=getViewportHeight()){slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed)}
var moveBy=0;var position={left:0,top:0};if(!slider.settings.infiniteLoop&&slider.carousel&&slider.active.last){if(slider.settings.mode=='horizontal'){var lastChild=slider.children.eq(slider.children.length-1);position=lastChild.position();moveBy=slider.viewport.width()-lastChild.outerWidth()}else{var lastShowingIndex=slider.children.length-slider.settings.minSlides;position=slider.children.eq(lastShowingIndex).position()}}else if(slider.carousel&&slider.active.last&&direction=='prev'){var eq=slider.settings.moveSlides==1?slider.settings.maxSlides-getMoveBy():((getPagerQty()-1)*getMoveBy())-(slider.children.length-slider.settings.maxSlides);var lastChild=el.children('.bx-clone').eq(eq);position=lastChild.position()}else if(direction=='next'&&slider.active.index==0){position=el.find('> .bx-clone').eq(slider.settings.maxSlides).position();slider.active.last=!1}else if(slideIndex>=0){var requestEl=slideIndex*getMoveBy();position=slider.children.eq(requestEl).position()}
if("undefined"!==typeof(position)){var value=slider.settings.mode=='horizontal'?-(position.left-moveBy):-position.top;setPositionProperty(value,'slide',slider.settings.speed)}}}
el.goToNextSlide=function(){if(!slider.settings.infiniteLoop&&slider.active.last)return;var pagerIndex=parseInt(slider.active.index)+1;el.goToSlide(pagerIndex,'next')}
el.goToPrevSlide=function(){if(!slider.settings.infiniteLoop&&slider.active.index==0)return;var pagerIndex=parseInt(slider.active.index)-1;el.goToSlide(pagerIndex,'prev')}
el.startAuto=function(preventControlUpdate){if(slider.interval)return;slider.interval=setInterval(function(){slider.settings.autoDirection=='next'?el.goToNextSlide():el.goToPrevSlide()},slider.settings.pause);if(slider.settings.autoControls&&preventControlUpdate!=!0)updateAutoControls('stop')}
el.stopAuto=function(preventControlUpdate){if(!slider.interval)return;clearInterval(slider.interval);slider.interval=null;if(slider.settings.autoControls&&preventControlUpdate!=!0)updateAutoControls('start')}
el.getCurrentSlide=function(){return slider.active.index}
el.getCurrentSlideElement=function(){return slider.children.eq(slider.active.index)}
el.getSlideCount=function(){return slider.children.length}
el.redrawSlider=function(){slider.children.add(el.find('.bx-clone')).width(getSlideWidth());slider.viewport.css('height',getViewportHeight());if(!slider.settings.ticker)setSlidePosition();if(slider.active.last)slider.active.index=getPagerQty()-1;if(slider.active.index>=getPagerQty())slider.active.last=!0;if(slider.settings.pager&&!slider.settings.pagerCustom){populatePager();updatePagerActive(slider.active.index)}}
el.destroySlider=function(){if(!slider.initialized)return;slider.initialized=!1;$('.bx-clone',this).remove();slider.children.each(function(){$(this).data("origStyle")!=undefined?$(this).attr("style",$(this).data("origStyle")):$(this).removeAttr('style')});$(this).data("origStyle")!=undefined?this.attr("style",$(this).data("origStyle")):$(this).removeAttr('style');$(this).unwrap().unwrap();if(slider.controls.el)slider.controls.el.remove();if(slider.controls.next)slider.controls.next.remove();if(slider.controls.prev)slider.controls.prev.remove();if(slider.pagerEl&&slider.settings.controls)slider.pagerEl.remove();$('.bx-caption',this).remove();if(slider.controls.autoEl)slider.controls.autoEl.remove();clearInterval(slider.interval);if(slider.settings.responsive)$(window).unbind('resize',resizeWindow)}
el.reloadSlider=function(settings){if(settings!=undefined)options=settings;el.destroySlider();init()}
init();return this}})(jQuery);(function($){'use strict';var _currentSpinnerId=0;function _scopedEventName(name,id){return name+'.touchspin_'+id}
function _scopeEventNames(names,id){return $.map(names,function(name){return _scopedEventName(name,id)})}
$.fn.TouchSpin=function(options){if(options==='destroy'){this.each(function(){var originalinput=$(this),originalinput_data=originalinput.data();$(document).off(_scopeEventNames(['mouseup','touchend','touchcancel','mousemove','touchmove','scroll','scrollstart'],originalinput_data.spinnerid).join(' '))});return}
var defaults={min:0,max:100,initval:'',replacementval:'',step:1,decimals:0,stepinterval:100,forcestepdivisibility:'round',stepintervaldelay:500,verticalbuttons:!1,verticalupclass:'glyphicon glyphicon-chevron-up',verticaldownclass:'glyphicon glyphicon-chevron-down',prefix:'',postfix:'',prefix_extraclass:'',postfix_extraclass:'',booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:'btn btn-default',buttonup_class:'btn btn-default',buttondown_txt:'-',buttonup_txt:'+'};var attributeMap={min:'min',max:'max',initval:'init-val',replacementval:'replacement-val',step:'step',decimals:'decimals',stepinterval:'step-interval',verticalbuttons:'vertical-buttons',verticalupclass:'vertical-up-class',verticaldownclass:'vertical-down-class',forcestepdivisibility:'force-step-divisibility',stepintervaldelay:'step-interval-delay',prefix:'prefix',postfix:'postfix',prefix_extraclass:'prefix-extra-class',postfix_extraclass:'postfix-extra-class',booster:'booster',boostat:'boostat',maxboostedstep:'max-boosted-step',mousewheel:'mouse-wheel',buttondown_class:'button-down-class',buttonup_class:'button-up-class',buttondown_txt:'button-down-txt',buttonup_txt:'button-up-txt'};return this.each(function(){var settings,originalinput=$(this),originalinput_data=originalinput.data(),container,elements,value,downSpinTimer,upSpinTimer,downDelayTimeout,upDelayTimeout,spincount=0,spinning=!1;init();function init(){if(originalinput.data('alreadyinitialized')){return}
originalinput.data('alreadyinitialized',!0);_currentSpinnerId+=1;originalinput.data('spinnerid',_currentSpinnerId);if(!originalinput.is('input')){console.log('Must be an input.');return}
_initSettings();_setInitval();_checkValue();_buildHtml();_initElements();_hideEmptyPrefixPostfix();_bindEvents();_bindEventsInterface();elements.input.css('display','block')}
function _setInitval(){if(settings.initval!==''&&originalinput.val()===''){originalinput.val(settings.initval)}}
function changeSettings(newsettings){_updateSettings(newsettings);_checkValue();var value=elements.input.val();if(value!==''){value=Number(elements.input.val());elements.input.val(value.toFixed(settings.decimals))}}
function _initSettings(){settings=$.extend({},defaults,originalinput_data,_parseAttributes(),options)}
function _parseAttributes(){var data={};$.each(attributeMap,function(key,value){var attrName='bts-'+value+'';if(originalinput.is('[data-'+attrName+']')){data[key]=originalinput.data(attrName)}});return data}
function _updateSettings(newsettings){settings=$.extend({},settings,newsettings)}
function _buildHtml(){var initval=originalinput.val(),parentelement=originalinput.parent();if(initval!==''){initval=Number(initval).toFixed(settings.decimals)}
originalinput.data('initvalue',initval).val(initval);originalinput.addClass('form-control');if(parentelement.hasClass('input-group')){_advanceInputGroup(parentelement)}else{_buildInputGroup()}}
function _advanceInputGroup(parentelement){parentelement.addClass('bootstrap-touchspin');var prev=originalinput.prev(),next=originalinput.next();var downhtml,uphtml,prefixhtml='<span class="input-group-addon bootstrap-touchspin-prefix">'+settings.prefix+'</span>',postfixhtml='<span class="input-group-addon bootstrap-touchspin-postfix">'+settings.postfix+'</span>';if(prev.hasClass('input-group-btn')){downhtml='<button class="'+settings.buttondown_class+' bootstrap-touchspin-down" type="button">'+settings.buttondown_txt+'</button>';prev.append(downhtml)}else{downhtml='<span class="input-group-btn"><button class="'+settings.buttondown_class+' bootstrap-touchspin-down" type="button">'+settings.buttondown_txt+'</button></span>';$(downhtml).insertBefore(originalinput)}
if(next.hasClass('input-group-btn')){uphtml='<button class="'+settings.buttonup_class+' bootstrap-touchspin-up" type="button">'+settings.buttonup_txt+'</button>';next.prepend(uphtml)}else{uphtml='<span class="input-group-btn"><button class="'+settings.buttonup_class+' bootstrap-touchspin-up" type="button">'+settings.buttonup_txt+'</button></span>';$(uphtml).insertAfter(originalinput)}
$(prefixhtml).insertBefore(originalinput);$(postfixhtml).insertAfter(originalinput);container=parentelement}
function _buildInputGroup(){var html;if(settings.verticalbuttons){html='<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">'+settings.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+settings.postfix+'</span><span class="input-group-btn-vertical"><button class="'+settings.buttondown_class+' bootstrap-touchspin-up" type="button"><i class="'+settings.verticalupclass+'"></i></button><button class="'+settings.buttonup_class+' bootstrap-touchspin-down" type="button"><i class="'+settings.verticaldownclass+'"></i></button></span></div>'}else{html='<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="'+settings.buttondown_class+' bootstrap-touchspin-down" type="button">'+settings.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix">'+settings.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+settings.postfix+'</span><span class="input-group-btn"><button class="'+settings.buttonup_class+' bootstrap-touchspin-up" type="button">'+settings.buttonup_txt+'</button></span></div>'}
container=$(html).insertBefore(originalinput);$('.bootstrap-touchspin-prefix',container).after(originalinput);if(originalinput.hasClass('input-sm')){container.addClass('input-group-sm')}else if(originalinput.hasClass('input-lg')){container.addClass('input-group-lg')}}
function _initElements(){elements={down:$('.bootstrap-touchspin-down',container),up:$('.bootstrap-touchspin-up',container),input:$('input',container),prefix:$('.bootstrap-touchspin-prefix',container).addClass(settings.prefix_extraclass),postfix:$('.bootstrap-touchspin-postfix',container).addClass(settings.postfix_extraclass)}}
function _hideEmptyPrefixPostfix(){if(settings.prefix===''){elements.prefix.hide()}
if(settings.postfix===''){elements.postfix.hide()}}
function _bindEvents(){originalinput.on('keydown',function(ev){var code=ev.keyCode||ev.which;if(code===38){if(spinning!=='up'){upOnce();startUpSpin()}
ev.preventDefault()}else if(code===40){if(spinning!=='down'){downOnce();startDownSpin()}
ev.preventDefault()}});originalinput.on('keyup',function(ev){var code=ev.keyCode||ev.which;if(code===38){stopSpin()}else if(code===40){stopSpin()}});originalinput.on('blur',function(){_checkValue()});elements.down.on('keydown',function(ev){var code=ev.keyCode||ev.which;if(code===32||code===13){if(spinning!=='down'){downOnce();startDownSpin()}
ev.preventDefault()}});elements.down.on('keyup',function(ev){var code=ev.keyCode||ev.which;if(code===32||code===13){stopSpin()}});elements.up.on('keydown',function(ev){var code=ev.keyCode||ev.which;if(code===32||code===13){if(spinning!=='up'){upOnce();startUpSpin()}
ev.preventDefault()}});elements.up.on('keyup',function(ev){var code=ev.keyCode||ev.which;if(code===32||code===13){stopSpin()}});elements.down.on('mousedown.touchspin',function(ev){elements.down.off('touchstart.touchspin');if(originalinput.is(':disabled')){return}
downOnce();startDownSpin();ev.preventDefault();ev.stopPropagation()});elements.down.on('touchstart.touchspin',function(ev){elements.down.off('mousedown.touchspin');if(originalinput.is(':disabled')){return}
downOnce();startDownSpin();ev.preventDefault();ev.stopPropagation()});elements.up.on('mousedown.touchspin',function(ev){elements.up.off('touchstart.touchspin');if(originalinput.is(':disabled')){return}
upOnce();startUpSpin();ev.preventDefault();ev.stopPropagation()});elements.up.on('touchstart.touchspin',function(ev){elements.up.off('mousedown.touchspin');if(originalinput.is(':disabled')){return}
upOnce();startUpSpin();ev.preventDefault();ev.stopPropagation()});elements.up.on('mouseout touchleave touchend touchcancel',function(ev){if(!spinning){return}
ev.stopPropagation();stopSpin()});elements.down.on('mouseout touchleave touchend touchcancel',function(ev){if(!spinning){return}
ev.stopPropagation();stopSpin()});elements.down.on('mousemove touchmove',function(ev){if(!spinning){return}
ev.stopPropagation();ev.preventDefault()});elements.up.on('mousemove touchmove',function(ev){if(!spinning){return}
ev.stopPropagation();ev.preventDefault()});$(document).on(_scopeEventNames(['mouseup','touchend','touchcancel'],_currentSpinnerId).join(' '),function(ev){if(!spinning){return}
ev.preventDefault();stopSpin()});$(document).on(_scopeEventNames(['mousemove','touchmove','scroll','scrollstart'],_currentSpinnerId).join(' '),function(ev){if(!spinning){return}
ev.preventDefault();stopSpin()});originalinput.on('mousewheel DOMMouseScroll',function(ev){if(!settings.mousewheel||!originalinput.is(':focus')){return}
var delta=ev.originalEvent.wheelDelta||-ev.originalEvent.deltaY||-ev.originalEvent.detail;ev.stopPropagation();ev.preventDefault();if(delta<0){downOnce()}else{upOnce()}})}
function _bindEventsInterface(){originalinput.on('touchspin.uponce',function(){stopSpin();upOnce()});originalinput.on('touchspin.downonce',function(){stopSpin();downOnce()});originalinput.on('touchspin.startupspin',function(){startUpSpin()});originalinput.on('touchspin.startdownspin',function(){startDownSpin()});originalinput.on('touchspin.stopspin',function(){stopSpin()});originalinput.on('touchspin.updatesettings',function(e,newsettings){changeSettings(newsettings)})}
function _forcestepdivisibility(value){switch(settings.forcestepdivisibility){case 'round':return(Math.round(value/settings.step)*settings.step).toFixed(settings.decimals);case 'floor':return(Math.floor(value/settings.step)*settings.step).toFixed(settings.decimals);case 'ceil':return(Math.ceil(value/settings.step)*settings.step).toFixed(settings.decimals);default:return value}}
function _checkValue(){var val,parsedval,returnval;val=originalinput.val();if(val===''){if(settings.replacementval!==''){originalinput.val(settings.replacementval);originalinput.trigger('change')}
return}
if(settings.decimals>0&&val==='.'){return}
parsedval=parseFloat(val);if(isNaN(parsedval)){if(settings.replacementval!==''){parsedval=settings.replacementval}else{parsedval=0}}
returnval=parsedval;if(parsedval.toString()!==val){returnval=parsedval}
if(parsedval<settings.min){returnval=settings.min}
if(parsedval>settings.max){returnval=settings.max}
returnval=_forcestepdivisibility(returnval);if(Number(val).toString()!==returnval.toString()){originalinput.val(returnval);originalinput.trigger('change')}}
function _getBoostedStep(){if(!settings.booster){return settings.step}else{var boosted=Math.pow(2,Math.floor(spincount/settings.boostat))*settings.step;if(settings.maxboostedstep){if(boosted>settings.maxboostedstep){boosted=settings.maxboostedstep;value=Math.round((value/boosted))*boosted}}
return Math.max(settings.step,boosted)}}
function upOnce(){_checkValue();value=parseFloat(elements.input.val());if(isNaN(value)){value=0}
var initvalue=value,boostedstep=_getBoostedStep();value=value+boostedstep;if(value>settings.max){value=settings.max;originalinput.trigger('touchspin.on.max');stopSpin()}
elements.input.val(Number(value).toFixed(settings.decimals));if(initvalue!==value){originalinput.trigger('change')}}
function downOnce(){_checkValue();value=parseFloat(elements.input.val());if(isNaN(value)){value=0}
var initvalue=value,boostedstep=_getBoostedStep();value=value-boostedstep;if(value<settings.min){value=settings.min;originalinput.trigger('touchspin.on.min');stopSpin()}
elements.input.val(value.toFixed(settings.decimals));if(initvalue!==value){originalinput.trigger('change')}}
function startDownSpin(){stopSpin();spincount=0;spinning='down';originalinput.trigger('touchspin.on.startspin');originalinput.trigger('touchspin.on.startdownspin');downDelayTimeout=setTimeout(function(){downSpinTimer=setInterval(function(){spincount++;downOnce()},settings.stepinterval)},settings.stepintervaldelay)}
function startUpSpin(){stopSpin();spincount=0;spinning='up';originalinput.trigger('touchspin.on.startspin');originalinput.trigger('touchspin.on.startupspin');upDelayTimeout=setTimeout(function(){upSpinTimer=setInterval(function(){spincount++;upOnce()},settings.stepinterval)},settings.stepintervaldelay)}
function stopSpin(){clearTimeout(downDelayTimeout);clearTimeout(upDelayTimeout);clearInterval(downSpinTimer);clearInterval(upSpinTimer);switch(spinning){case 'up':originalinput.trigger('touchspin.on.stopupspin');originalinput.trigger('touchspin.on.stopspin');break;case 'down':originalinput.trigger('touchspin.on.stopdownspin');originalinput.trigger('touchspin.on.stopspin');break}
spincount=0;spinning=!1}})}})(jQuery);(function($,window,document,undefined){var OnePageNav=function(elem,options){this.elem=elem;this.$elem=$(elem);this.options=options;this.metadata=this.$elem.data('plugin-options');this.$win=$(window);this.sections={};this.didScroll=!1;this.$doc=$(document);this.docHeight=this.$doc.height()};OnePageNav.prototype={defaults:{navItems:'a',currentClass:'current',changeHash:!1,easing:'swing',filter:'',scrollSpeed:1500,scrollThreshold:0.5,begin:!1,end:!1,scrollChange:!1},init:function(){this.config=$.extend({},this.defaults,this.options,this.metadata);this.$nav=this.$elem.find(this.config.navItems);if(this.config.filter!==''){this.$nav=this.$nav.filter(this.config.filter)}
this.$nav.on('click.onePageNav',$.proxy(this.handleClick,this));this.getPositions();this.bindInterval();this.$win.on('resize.onePageNav',$.proxy(this.getPositions,this));return this},adjustNav:function(self,$parent){self.$elem.find('.'+self.config.currentClass).removeClass(self.config.currentClass);$parent.addClass(self.config.currentClass)},bindInterval:function(){var self=this;var docHeight;self.$win.on('scroll.onePageNav',function(){self.didScroll=!0});self.t=setInterval(function(){docHeight=self.$doc.height();if(self.didScroll){self.didScroll=!1;self.scrollChange()}
if(docHeight!==self.docHeight){self.docHeight=docHeight;self.getPositions()}},250)},getHash:function($link){return $link.attr('href').split('#')[1]},getPositions:function(){var self=this;var linkHref;var topPos;var $target;self.$nav.each(function(){linkHref=self.getHash($(this));$target=$('#'+linkHref);if($target.length){topPos=$target.offset().top;self.sections[linkHref]=Math.round(topPos)}})},getSection:function(windowPos){var returnValue=null;var windowHeight=Math.round(this.$win.height()*this.config.scrollThreshold);for(var section in this.sections){if((this.sections[section]-windowHeight)<windowPos){returnValue=section}}
return returnValue},handleClick:function(e){var self=this;var $link=$(e.currentTarget);var $parent=$link.parent();var newLoc='#'+self.getHash($link);if(!$parent.hasClass(self.config.currentClass)){if(self.config.begin){self.config.begin()}
self.adjustNav(self,$parent);self.unbindInterval();self.scrollTo(newLoc,function(){if(self.config.changeHash){window.location.hash=newLoc}
self.bindInterval();if(self.config.end){self.config.end()}})}
e.preventDefault()},scrollChange:function(){var windowTop=this.$win.scrollTop();var position=this.getSection(windowTop);var $parent;if(position!==null){$parent=this.$elem.find('a[href$="#'+position+'"]').parent();if(!$parent.hasClass(this.config.currentClass)){this.adjustNav(this,$parent);if(this.config.scrollChange){this.config.scrollChange($parent)}}}},scrollTo:function(target,callback){var offset=$(target).offset().top-70;$('html, body').animate({scrollTop:offset},this.config.scrollSpeed,this.config.easing,callback)},unbindInterval:function(){clearInterval(this.t);this.$win.unbind('scroll.onePageNav')}};OnePageNav.defaults=OnePageNav.prototype.defaults;$.fn.onePageNav=function(options){return this.each(function(){new OnePageNav(this,options).init()})}})(jQuery,window,document);(function($){"use strict";function headerStyle(){if($('.main-header').length){var windowpos=$(window).scrollTop();var siteHeader=$('.main-header');var scrollLink=$('.scroll-top');if(windowpos>=110){siteHeader.addClass('fixed-header');scrollLink.addClass('open')}else{siteHeader.removeClass('fixed-header');scrollLink.removeClass('open')}}}
headerStyle();if($('.main-header li.dropdown ul').length){$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>')}
if($('.mobile-menu').length){$('.mobile-menu .menu-box').mCustomScrollbar();var mobileMenuContent=$('.main-header .menu-area .main-menu').html();$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);$('.sticky-header .main-menu').append(mobileMenuContent);$('.mobile-menu li.dropdown .dropdown-btn').on('click',function(){$(this).toggleClass('open');$(this).prev('ul').slideToggle(500)});$('.mobile-menu li.dropdown .dropdown-btn').on('click',function(){$(this).prev('.megamenu').slideToggle(900)});$('.mobile-nav-toggler').on('click',function(){$('body').addClass('mobile-menu-visible')});$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click',function(){$('body').removeClass('mobile-menu-visible')})}
if($('.scroll-to-target').length){$(".scroll-to-target").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1000)})}
if($('.wow').length){var wow=new WOW({mobile:!1});wow.init()}
if($('.count-box').length){$('.count-box').appear(function(){var $t=$(this),n=$t.find(".count-text").attr("data-stop"),r=parseInt($t.find(".count-text").attr("data-speed"),10);if(!$t.hasClass("counted")){$t.addClass("counted");$({countNum:$t.find(".count-text").text()}).animate({countNum:n},{duration:r,easing:"linear",step:function(){$t.find(".count-text").text(Math.floor(this.countNum))},complete:function(){$t.find(".count-text").text(this.countNum)}})}},{accY:0})}
if($('.lightbox-image').length){$('.lightbox-image').fancybox({openEffect:'fade',closeEffect:'fade',helpers:{media:{}}})}
if($('.tabs-box').length){$('.tabs-box .tab-buttons .tab-btn').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));if($(target).is(':visible')){return!1}else{target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');$(this).addClass('active-btn');target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');$(target).fadeIn(300);$(target).addClass('active-tab')}})}
if($('.accordion-box').length){$(".accordion-box").on('click','.acc-btn',function(){var outerBox=$(this).parents('.accordion-box');var target=$(this).parents('.accordion');if($(this).hasClass('active')!==!0){$(outerBox).find('.accordion .acc-btn').removeClass('active')}
if($(this).next('.acc-content').is(':visible')){return!1}else{$(this).addClass('active');$(outerBox).children('.accordion').removeClass('active-block');$(outerBox).find('.accordion').children('.acc-content').slideUp(300);target.addClass('active-block');$(this).next('.acc-content').slideDown(300)}})}
if($('.single-item-carousel').length){$('.single-item-carousel').owlCarousel({loop:!0,margin:30,nav:!1,smartSpeed:500,autoplay:!0,navText:['<span class="flaticon-left"></span>','<span class="flaticon-right"></span>'],responsive:{0:{items:1},480:{items:1},600:{items:1},800:{items:1},1200:{items:1}}})}
if($('.scroll-nav').length){$('.scroll-nav').onePageNav()}
if($('#search-popup').length){$('.search-toggler').on('click',function(){$('#search-popup').addClass('popup-visible')});$(document).keydown(function(e){if(e.keyCode===27){$('#search-popup').removeClass('popup-visible')}});$('.close-search,.search-popup .overlay-layer').on('click',function(){$('#search-popup').removeClass('popup-visible')})}
if($('.price-range-slider').length){$(".price-range-slider").slider({range:!0,min:0,max:300,values:[50,250],slide:function(event,ui){$("input.property-amount").val(ui.values[0]+" - "+ui.values[1])}});$("input.property-amount").val($(".price-range-slider").slider("values",0)+" - $"+$(".price-range-slider").slider("values",1))}
if($('.product-details-content .bxslider').length){$('.product-details-content .bxslider').bxSlider({nextSelector:'.product-details-content #slider-next',prevSelector:'.product-details-content #slider-prev',nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>',mode:'fade',auto:'true',speed:'700',pagerCustom:'.product-details-content .slider-pager .thumb-box'})};if($('.quantity-spinner').length){$("input.quantity-spinner").TouchSpin({verticalbuttons:!0})}
function handlePreloader(){if($('.preloader').length){$('.preloader').delay(200).fadeOut(500)}}
function directionswitch(){if($('.page_direction').length){$('.direction_switch button').on('click',function(){$('body').toggleClass(function(){return $(this).is('.rtl, .ltr')?'rtl ltr':'rtl'})})}}
jQuery(document).on('ready',function(){(function($){directionswitch()})(jQuery)});$(window).on('scroll',function(){headerStyle()});$(window).on('load',function(){handlePreloader()})})(window.jQuery);(function($){"use strict";$('.nav-links .page-numbers li span').each(function(){$(this).replaceWith($('<a class="active" href="#">'+this.innerHTML+'</a>'))});$('.pagination .screen-reader-text').remove();$('.sidebar').addClass('default-sidebar');$('.widget_categories').addClass('category-widget');$('.widget_categories ul').addClass('category-list');$('.widget_product_categories').addClass('category-widget');$('ul.product-categories').addClass('category-list');$('.category-list li').append('<i class="flaticon-right"></i>');$('.widget_archive').addClass('sidebar-archives');$('.widget_archive .widget-content').each(function(){$(this).replaceWith($('<div class="widget-content"><div class="select-box">'+this.innerHTML+'</div></div>'))});$('.widget_tag_cloud').addClass('sidebar-tags');$('.widget_product_tag_cloud').addClass('sidebar-tags');$('.tag-cloud-link').removeAttr("style");$('.tagcloud').addClass('tags-list clearfix');$('.widget_carneshop_recent_blog_posts').addClass('sidebar-post')})(window.jQuery);/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1};C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);t=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return t}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(n=g(b.commentReplyTitleId))&&n.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),n=t&&t.firstChild.textContent,d=this,o=m(d,"belowelement"),i=m(d,"commentid"),r=m(d,"respondelement"),t=m(d,"postid"),n=m(d,"replyto")||n;o&&i&&r&&t&&!1===v.addComment.moveForm(o,i,r,t,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i=g(e);h=g(n);var r,l,a,m,c,s=g(b.parentIdFieldId),y=g(b.postIdFieldId),p=(c=g(b.commentReplyTitleId))&&c.firstChild,u=p&&p.nextSibling;if(i&&h&&s){void 0===o&&(o=p&&p.textContent),m=h,e=b.temporaryFormId,n=g(e),c=(c=g(b.commentReplyTitleId))?c.firstChild.textContent:"",n||((n=E.createElement("div")).id=e,n.style.display="none",n.textContent=c,m.parentNode.insertBefore(n,m)),d&&y&&(y.value=d),s.value=t,I.style.display="",i.parentNode.insertBefore(h,i.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(r=C.elements[f],l=!1,"getComputedStyle"in v?a=v.getComputedStyle(r):E.documentElement.currentStyle&&(a=r.currentStyle),(r.offsetWidth<=0&&r.offsetHeight<=0||"hidden"===a.visibility)&&(l=!0),"hidden"!==r.type&&!r.disabled&&!l){r.focus();break}}catch(e){}return!1}}}}(window);(function(e){var t,n={hasPreview:!0,defaultThemeId:"jssDefault-css",fullPath:"css/",cookie:{expires:30,isManagingLoad:!0}},r="jss_selected",i={};i={getItem:function(e){if(!e){return null}return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,n,r,i,s){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e)){return!1}var o="";if(n){switch(n.constructor){case Number:o=n===Infinity?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:o="; expires="+n;break;case Date:o="; expires="+n.toUTCString();break}}document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+o+(i?"; domain="+i:"")+(r?"; path="+r:"")+(s?"; secure":"");return!0},removeItem:function(e,t,n){if(!this.hasItem(e)){return!1}document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:"");return!0},hasItem:function(e){if(!e){return!1}return(new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)},keys:function(){var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/);for(var t=e.length,n=0;n<t;n++){e[n]=decodeURIComponent(e[n])}return e}};t=function(e,t){return this.init(e,t)};t.prototype={$root:null,config:{},$themeCss:null,defaultTheme:null,init:function(e,t){this.$root=e;this.config=t?t:{};this.setDefaultTheme();if(this.defaultTheme){if(this.config.cookie){this.checkCookie()}if(this.config.hasPreview){this.addHoverEvents()}this.addClickEvents()}else{this.$root.addClass("jssError error level0")}},setDefaultTheme:function(){this.$themeCss=e("link[id="+this.config.defaultThemeId+"]");if(this.$themeCss.length){this.defaultTheme=this.$themeCss.attr("href")}},resetStyle:function(){this.updateStyle(this.defaultTheme)},updateStyle:function(e){this.$themeCss.attr("href",e)},getFullAssetPath:function(e){return this.config.fullPath+e+".css"},checkCookie:function(){var e;if(this.config.cookie&&this.config.cookie.isManagingLoad){e=i.getItem(r);if(e){newStyle=this.getFullAssetPath(e);this.updateStyle(newStyle);this.defaultTheme=newStyle}}},addHoverEvents:function(){var t=this;this.$root.find("a").hover(function(){var n=e(this).data("theme"),r=t.getFullAssetPath(n);t.updateStyle(r)},function(){t.resetStyle()})},addClickEvents:function(){var t=this;this.$root.find("a").click(function(){var n=e(this).data("theme"),s=t.getFullAssetPath(n);t.updateStyle(s);t.defaultTheme=s;if(t.config.cookie){i.setItem(r,n,t.config.cookie.expires)}})}};e.fn.styleSwitcher=function(r){return new t(this,e.extend(!0,n,r))}})(jQuery);var color_ajax_object={"ajaxurl":"https:\/\/smartdemowp.com\/carneshop\/wp-admin\/admin-ajax.php","site_url":"https:\/\/smartdemowp.com\/carneshop"};(function($){var templateUrl=color_ajax_object.site_url;function swithcerMenu(){if($('.switch_menu').length){$('.switch_btn button').on('click',function(){$('.switch_menu').toggle(500)});$('#styleOptions').styleSwitcher({hasPreview:!0,fullPath:`${templateUrl}/wp-content/plugins/color-sds-picker/css/color/`,cookie:{expires:30,isManagingLoad:!0}})}}
swithcerMenu()})(jQuery);/*! This file is auto-generated */
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);/*! This file is auto-generated */
!function(){function t(){}var n=this,r=n._,e=Array.prototype,o=Object.prototype,u=Function.prototype,i=e.push,c=e.slice,l=o.toString,a=o.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=Object.create,v=function(n){return n instanceof v?n:this instanceof v?void(this._wrapped=n):new v(n)};"undefined"!=typeof exports?(exports="undefined"!=typeof module&&module.exports?module.exports=v:exports)._=v:n._=v,v.VERSION="1.8.3";var y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 2:return function(n,t){return u.call(i,n,t)};case 3:return function(n,t,r){return u.call(i,n,t,r)};case 4:return function(n,t,r,e){return u.call(i,n,t,r,e)}}return function(){return u.apply(i,arguments)}},d=function(n,t,r){return null==n?v.identity:v.isFunction(n)?y(n,t,r):v.isObject(n)?v.matcher(n):v.property(n)};v.iteratee=function(n,t){return d(n,t,1/0)};function g(n){return v.isObject(n)?h?h(n):(t.prototype=n,n=new t,t.prototype=null,n):{}}var m=function(c,f){return function(n){var t=arguments.length;if(t<2||null==n)return n;for(var r=1;r<t;r++)for(var e=arguments[r],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];f&&void 0!==n[a]||(n[a]=e[a])}return n}},b=function(t){return function(n){return null==n?void 0:n[t]}},x=Math.pow(2,53)-1,_=b("length"),j=function(n){n=_(n);return"number"==typeof n&&0<=n&&n<=x};function w(a){return function(n,t,r,e){t=y(t,e,4);var u=!j(n)&&v.keys(n),i=(u||n).length,o=0<a?0:i-1;return arguments.length<3&&(r=n[u?u[o]:o],o+=a),function(n,t,r,e,u,i){for(;0<=u&&u<i;u+=a){var o=e?e[u]:u;r=t(r,n[o],o,n)}return r}(n,t,r,u,o,i)}}v.each=v.forEach=function(n,t,r){if(t=y(t,r),j(n))for(u=0,i=n.length;u<i;u++)t(n[u],u,n);else for(var e=v.keys(n),u=0,i=e.length;u<i;u++)t(n[e[u]],e[u],n);return n},v.map=v.collect=function(n,t,r){t=d(t,r);for(var e=!j(n)&&v.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},v.reduce=v.foldl=v.inject=w(1),v.reduceRight=v.foldr=w(-1),v.find=v.detect=function(n,t,r){r=j(n)?v.findIndex(n,t,r):v.findKey(n,t,r);if(void 0!==r&&-1!==r)return n[r]},v.filter=v.select=function(n,e,t){var u=[];return e=d(e,t),v.each(n,function(n,t,r){e(n,t,r)&&u.push(n)}),u},v.reject=function(n,t,r){return v.filter(n,v.negate(d(t)),r)},v.every=v.all=function(n,t,r){t=d(t,r);for(var e=!j(n)&&v.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},v.some=v.any=function(n,t,r){t=d(t,r);for(var e=!j(n)&&v.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},v.contains=v.includes=v.include=function(n,t,r,e){return j(n)||(n=v.values(n)),0<=v.indexOf(n,t,r="number"!=typeof r||e?0:r)},v.invoke=function(n,r){var e=c.call(arguments,2),u=v.isFunction(r);return v.map(n,function(n){var t=u?r:n[r];return null==t?t:t.apply(n,e)})},v.pluck=function(n,t){return v.map(n,v.property(t))},v.where=function(n,t){return v.filter(n,v.matcher(t))},v.findWhere=function(n,t){return v.find(n,v.matcher(t))},v.max=function(n,e,t){var r,u,i=-1/0,o=-1/0;if(null==e&&null!=n)for(var a=0,c=(n=j(n)?n:v.values(n)).length;a<c;a++)r=n[a],i<r&&(i=r);else e=d(e,t),v.each(n,function(n,t,r){u=e(n,t,r),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},v.min=function(n,e,t){var r,u,i=1/0,o=1/0;if(null==e&&null!=n)for(var a=0,c=(n=j(n)?n:v.values(n)).length;a<c;a++)(r=n[a])<i&&(i=r);else e=d(e,t),v.each(n,function(n,t,r){((u=e(n,t,r))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},v.shuffle=function(n){for(var t,r=j(n)?n:v.values(n),e=r.length,u=Array(e),i=0;i<e;i++)(t=v.random(0,i))!==i&&(u[i]=u[t]),u[t]=r[i];return u},v.sample=function(n,t,r){return null==t||r?(n=!j(n)?v.values(n):n)[v.random(n.length-1)]:v.shuffle(n).slice(0,Math.max(0,t))},v.sortBy=function(n,e,t){return e=d(e,t),v.pluck(v.map(n,function(n,t,r){return{value:n,index:t,criteria:e(n,t,r)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(e<r||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")};u=function(i){return function(r,e,n){var u={};return e=d(e,n),v.each(r,function(n,t){t=e(n,t,r);i(u,n,t)}),u}};v.groupBy=u(function(n,t,r){v.has(n,r)?n[r].push(t):n[r]=[t]}),v.indexBy=u(function(n,t,r){n[r]=t}),v.countBy=u(function(n,t,r){v.has(n,r)?n[r]++:n[r]=1}),v.toArray=function(n){return n?v.isArray(n)?c.call(n):j(n)?v.map(n,v.identity):v.values(n):[]},v.size=function(n){return null==n?0:(j(n)?n:v.keys(n)).length},v.partition=function(n,e,t){e=d(e,t);var u=[],i=[];return v.each(n,function(n,t,r){(e(n,t,r)?u:i).push(n)}),[u,i]},v.first=v.head=v.take=function(n,t,r){if(null!=n)return null==t||r?n[0]:v.initial(n,n.length-t)},v.initial=function(n,t,r){return c.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},v.last=function(n,t,r){if(null!=n)return null==t||r?n[n.length-1]:v.rest(n,Math.max(0,n.length-t))},v.rest=v.tail=v.drop=function(n,t,r){return c.call(n,null==t||r?1:t)},v.compact=function(n){return v.filter(n,v.identity)};var A=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=_(n);o<a;o++){var c=n[o];if(j(c)&&(v.isArray(c)||v.isArguments(c))){var f=0,l=(c=!t?A(c,t,r):c).length;for(u.length+=l;f<l;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};function O(i){return function(n,t,r){t=d(t,r);for(var e=_(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(t(n[u],u,n))return u;return-1}}function k(i,o,a){return function(n,t,r){var e=0,u=_(n);if("number"==typeof r)0<i?e=0<=r?r:Math.max(r+u,e):u=0<=r?Math.min(r+1,u):r+u+1;else if(a&&r&&u)return n[r=a(n,t)]===t?r:-1;if(t!=t)return 0<=(r=o(c.call(n,e,u),v.isNaN))?r+e:-1;for(r=0<i?e:u-1;0<=r&&r<u;r+=i)if(n[r]===t)return r;return-1}}v.flatten=function(n,t){return A(n,t,!1)},v.without=function(n){return v.difference(n,c.call(arguments,1))},v.uniq=v.unique=function(n,t,r,e){v.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=d(r,e));for(var u=[],i=[],o=0,a=_(n);o<a;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?v.contains(i,f)||(i.push(f),u.push(c)):v.contains(u,c)||u.push(c)}return u},v.union=function(){return v.uniq(A(arguments,!0,!0))},v.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=_(n);e<u;e++){var i=n[e];if(!v.contains(t,i)){for(var o=1;o<r&&v.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},v.difference=function(n){var t=A(arguments,!0,!0,1);return v.filter(n,function(n){return!v.contains(t,n)})},v.zip=function(){return v.unzip(arguments)},v.unzip=function(n){for(var t=n&&v.max(n,_).length||0,r=Array(t),e=0;e<t;e++)r[e]=v.pluck(n,e);return r},v.object=function(n,t){for(var r={},e=0,u=_(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},v.findIndex=O(1),v.findLastIndex=O(-1),v.sortedIndex=function(n,t,r,e){for(var u=(r=d(r,e,1))(t),i=0,o=_(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},v.indexOf=k(1,v.findIndex,v.sortedIndex),v.lastIndexOf=k(-1,v.findLastIndex),v.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u};function F(n,t,r,e,u){return e instanceof t?(r=g(n.prototype),u=n.apply(r,u),v.isObject(u)?u:r):n.apply(r,u)}v.bind=function(n,t){if(p&&n.bind===p)return p.apply(n,c.call(arguments,1));if(!v.isFunction(n))throw new TypeError("Bind must be called on a function");var r=c.call(arguments,2),e=function(){return F(n,e,t,this,r.concat(c.call(arguments)))};return e},v.partial=function(u){var i=c.call(arguments,1),o=function(){for(var n=0,t=i.length,r=Array(t),e=0;e<t;e++)r[e]=i[e]===v?arguments[n++]:i[e];for(;n<arguments.length;)r.push(arguments[n++]);return F(u,o,this,this,r)};return o},v.bindAll=function(n){var t,r,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(t=1;t<e;t++)n[r=arguments[t]]=v.bind(n[r],n);return n},v.memoize=function(e,u){var i=function(n){var t=i.cache,r=""+(u?u.apply(this,arguments):n);return v.has(t,r)||(t[r]=e.apply(this,arguments)),t[r]};return i.cache={},i},v.delay=function(n,t){var r=c.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},v.defer=v.partial(v.delay,v,1),v.throttle=function(r,e,u){var i,o,a,c=null,f=0;u=u||{};function l(){f=!1===u.leading?0:v.now(),c=null,a=r.apply(i,o),c||(i=o=null)}return function(){var n=v.now();f||!1!==u.leading||(f=n);var t=e-(n-f);return i=this,o=arguments,t<=0||e<t?(c&&(clearTimeout(c),c=null),f=n,a=r.apply(i,o),c||(i=o=null)):c||!1===u.trailing||(c=setTimeout(l,t)),a}},v.debounce=function(t,r,e){var u,i,o,a,c,f=function(){var n=v.now()-a;n<r&&0<=n?u=setTimeout(f,r-n):(u=null,e||(c=t.apply(o,i),u||(o=i=null)))};return function(){o=this,i=arguments,a=v.now();var n=e&&!u;return u=u||setTimeout(f,r),n&&(c=t.apply(o,i),o=i=null),c}},v.wrap=function(n,t){return v.partial(t,n)},v.negate=function(n){return function(){return!n.apply(this,arguments)}},v.compose=function(){var r=arguments,e=r.length-1;return function(){for(var n=e,t=r[e].apply(this,arguments);n--;)t=r[n].call(this,t);return t}},v.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},v.before=function(n,t){var r;return function(){return 0<--n&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}},v.once=v.partial(v.before,2);var S=!{toString:null}.propertyIsEnumerable("toString"),E=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function M(n,t){var r=E.length,e=n.constructor,u=v.isFunction(e)&&e.prototype||o,i="constructor";for(v.has(n,i)&&!v.contains(t,i)&&t.push(i);r--;)(i=E[r])in n&&n[i]!==u[i]&&!v.contains(t,i)&&t.push(i)}v.keys=function(n){if(!v.isObject(n))return[];if(s)return s(n);var t,r=[];for(t in n)v.has(n,t)&&r.push(t);return S&&M(n,r),r},v.allKeys=function(n){if(!v.isObject(n))return[];var t,r=[];for(t in n)r.push(t);return S&&M(n,r),r},v.values=function(n){for(var t=v.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e},v.mapObject=function(n,t,r){t=d(t,r);for(var e,u=v.keys(n),i=u.length,o={},a=0;a<i;a++)o[e=u[a]]=t(n[e],e,n);return o},v.pairs=function(n){for(var t=v.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},v.invert=function(n){for(var t={},r=v.keys(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t},v.functions=v.methods=function(n){var t,r=[];for(t in n)v.isFunction(n[t])&&r.push(t);return r.sort()},v.extend=m(v.allKeys),v.extendOwn=v.assign=m(v.keys),v.findKey=function(n,t,r){t=d(t,r);for(var e,u=v.keys(n),i=0,o=u.length;i<o;i++)if(t(n[e=u[i]],e,n))return e},v.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;v.isFunction(t)?(u=v.allKeys(o),e=y(t,r)):(u=A(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;a<c;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},v.omit=function(n,t,r){var e;return t=v.isFunction(t)?v.negate(t):(e=v.map(A(arguments,!1,!1,1),String),function(n,t){return!v.contains(e,t)}),v.pick(n,t,r)},v.defaults=m(v.allKeys,!0),v.create=function(n,t){n=g(n);return t&&v.extendOwn(n,t),n},v.clone=function(n){return v.isObject(n)?v.isArray(n)?n.slice():v.extend({},n):n},v.tap=function(n,t){return t(n),n},v.isMatch=function(n,t){var r=v.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof v&&(n=n._wrapped),t instanceof v&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,u=t.constructor;if(o!==u&&!(v.isFunction(o)&&o instanceof o&&v.isFunction(u)&&u instanceof u)&&"constructor"in n&&"constructor"in t)return!1}e=e||[];for(var a=(r=r||[]).length;a--;)if(r[a]===n)return e[a]===t;if(r.push(n),e.push(t),i){if((a=n.length)!==t.length)return!1;for(;a--;)if(!I(n[a],t[a],r,e))return!1}else{var c,f=v.keys(n),a=f.length;if(v.keys(t).length!==a)return!1;for(;a--;)if(c=f[a],!v.has(t,c)||!I(n[c],t[c],r,e))return!1}return r.pop(),e.pop(),!0};v.isEqual=function(n,t){return I(n,t)},v.isEmpty=function(n){return null==n||(j(n)&&(v.isArray(n)||v.isString(n)||v.isArguments(n))?0===n.length:0===v.keys(n).length)},v.isElement=function(n){return!(!n||1!==n.nodeType)},v.isArray=f||function(n){return"[object Array]"===l.call(n)},v.isObject=function(n){var t=typeof n;return"function"==t||"object"==t&&!!n},v.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){v["is"+t]=function(n){return l.call(n)==="[object "+t+"]"}}),v.isArguments(arguments)||(v.isArguments=function(n){return v.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(v.isFunction=function(n){return"function"==typeof n||!1}),v.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},v.isNaN=function(n){return v.isNumber(n)&&n!==+n},v.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===l.call(n)},v.isNull=function(n){return null===n},v.isUndefined=function(n){return void 0===n},v.has=function(n,t){return null!=n&&a.call(n,t)},v.noConflict=function(){return n._=r,this},v.identity=function(n){return n},v.constant=function(n){return function(){return n}},v.noop=function(){},v.property=b,v.propertyOf=function(t){return null==t?function(){}:function(n){return t[n]}},v.matcher=v.matches=function(t){return t=v.extendOwn({},t),function(n){return v.isMatch(n,t)}},v.times=function(n,t,r){var e=Array(Math.max(0,n));t=y(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},v.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},v.now=Date.now||function(){return(new Date).getTime()};m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},f=v.invert(m),b=function(t){function r(n){return t[n]}var n="(?:"+v.keys(t).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,r):n}};v.escape=b(m),v.unescape=b(f),v.result=function(n,t,r){t=null==n?void 0:n[t];return v.isFunction(t=void 0===t?r:t)?t.call(n):t};var N=0;v.uniqueId=function(n){var t=++N+"";return n?n+t:t},v.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};function B(n){return"\\"+R[n]}var T=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},q=/\\|'|\r|\n|\u2028|\u2029/g;v.template=function(i,n,t){n=v.defaults({},n=!n&&t?t:n,v.templateSettings);var t=RegExp([(n.escape||T).source,(n.interpolate||T).source,(n.evaluate||T).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(t,function(n,t,r,e,u){return a+=i.slice(o,u).replace(q,B),o=u+n.length,t?a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+(a=!n.variable?"with(obj||{}){\n"+a+"}\n":a)+"return __p;\n";try{var r=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}t=function(n){return r.call(this,n,v)},n=n.variable||"obj";return t.source="function("+n+"){\n"+a+"}",t},v.chain=function(n){n=v(n);return n._chain=!0,n};function K(n,t){return n._chain?v(t).chain():t}v.mixin=function(r){v.each(v.functions(r),function(n){var t=v[n]=r[n];v.prototype[n]=function(){var n=[this._wrapped];return i.apply(n,arguments),K(this,t.apply(v,n))}})},v.mixin(v),v.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var r=e[t];v.prototype[t]=function(){var n=this._wrapped;return r.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0],K(this,n)}}),v.each(["concat","join","slice"],function(n){var t=e[n];v.prototype[n]=function(){return K(this,t.apply(this._wrapped,arguments))}}),v.prototype.value=function(){return this._wrapped},v.prototype.valueOf=v.prototype.toJSON=v.prototype.value,v.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return v})}.call(this);/*! This file is auto-generated */
window.wp=window.wp||{},function(i){var e="undefined"==typeof _wpUtilSettings?{}:_wpUtilSettings;wp.template=_.memoize(function(t){var n,s={evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"};return function(e){return(n=n||_.template(i("#tmpl-"+t).html(),s))(e)}}),wp.ajax={settings:e.ajax||{},post:function(e,t){return wp.ajax.send({data:_.isObject(e)?e:_.extend(t||{},{action:e})})},send:function(e,n){var t;return _.isObject(e)?n=e:(n=n||{}).data=_.extend(n.data||{},{action:e}),n=_.defaults(n||{},{type:"POST",url:wp.ajax.settings.url,context:this}),(e=(t=i.Deferred(function(t){n.success&&t.done(n.success),n.error&&t.fail(n.error),delete n.success,delete n.error,t.jqXHR=i.ajax(n).done(function(e){"1"!==e&&1!==e||(e={success:!0}),_.isObject(e)&&!_.isUndefined(e.success)?t[e.success?"resolveWith":"rejectWith"](this,[e.data]):t.rejectWith(this,[e])}).fail(function(){t.rejectWith(this,arguments)})})).promise()).abort=function(){return t.jqXHR.abort(),this},e}}}(jQuery);!function(y,c,i,n){var t=function(t){var a=this;a.$form=t,a.$attributeFields=t.find(".variations select"),a.$singleVariation=t.find(".single_variation"),a.$singleVariationWrap=t.find(".single_variation_wrap"),a.$resetVariations=t.find(".reset_variations"),a.$product=t.closest(".product"),a.variationData=t.data("product_variations"),a.useAjax=!1===a.variationData,a.xhr=!1,a.loading=!0,a.$singleVariationWrap.show(),a.$form.off(".wc-variation-form"),a.getChosenAttributes=a.getChosenAttributes.bind(a),a.findMatchingVariations=a.findMatchingVariations.bind(a),a.isMatch=a.isMatch.bind(a),a.toggleResetLink=a.toggleResetLink.bind(a),t.on("click.wc-variation-form",".reset_variations",{variationForm:a},a.onReset),t.on("reload_product_variations",{variationForm:a},a.onReload),t.on("hide_variation",{variationForm:a},a.onHide),t.on("show_variation",{variationForm:a},a.onShow),t.on("click",".single_add_to_cart_button",{variationForm:a},a.onAddToCart),t.on("reset_data",{variationForm:a},a.onResetDisplayedVariation),t.on("reset_image",{variationForm:a},a.onResetImage),t.on("change.wc-variation-form",".variations select",{variationForm:a},a.onChange),t.on("found_variation.wc-variation-form",{variationForm:a},a.onFoundVariation),t.on("check_variations.wc-variation-form",{variationForm:a},a.onFindVariation),t.on("update_variation_values.wc-variation-form",{variationForm:a},a.onUpdateAttributes),setTimeout(function(){t.trigger("check_variations"),t.trigger("wc_variation_form",a),a.loading=!1},100)};t.prototype.onReset=function(t){t.preventDefault(),t.data.variationForm.$attributeFields.val("").trigger("change"),t.data.variationForm.$form.trigger("reset_data")},t.prototype.onReload=function(t){t=t.data.variationForm;t.variationData=t.$form.data("product_variations"),t.useAjax=!1===t.variationData,t.$form.trigger("check_variations")},t.prototype.onHide=function(t){t.preventDefault(),t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-is-unavailable").addClass("disabled wc-variation-selection-needed"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")},t.prototype.onShow=function(t,a,i){t.preventDefault(),i?(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("disabled wc-variation-selection-needed wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-disabled").addClass("woocommerce-variation-add-to-cart-enabled")):(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-selection-needed").addClass("disabled wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")),wp.mediaelement&&t.data.variationForm.$form.find(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function(){return!y(this).parent().hasClass("mejs-mediaelement")}).mediaelementplayer(wp.mediaelement.settings)},t.prototype.onAddToCart=function(t){y(this).is(".disabled")&&(t.preventDefault(),y(this).is(".wc-variation-is-unavailable")?c.alert(wc_add_to_cart_variation_params.i18n_unavailable_text):y(this).is(".wc-variation-selection-needed")&&c.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))},t.prototype.onResetDisplayedVariation=function(t){t=t.data.variationForm;t.$product.find(".product_meta").find(".sku").wc_reset_content(),t.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value").wc_reset_content(),t.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value").wc_reset_content(),t.$form.trigger("reset_image"),t.$singleVariation.slideUp(200).trigger("hide_variation")},t.prototype.onResetImage=function(t){t.data.variationForm.$form.wc_variations_image_update(!1)},t.prototype.onFindVariation=function(t,a){var i=t.data.variationForm,e=void 0!==a?a:i.getChosenAttributes(),a=e.data;e.count&&e.count===e.chosenCount?i.useAjax?(i.xhr&&i.xhr.abort(),i.$form.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),a.product_id=parseInt(i.$form.data("product_id"),10),a.custom_data=i.$form.data("custom_data"),i.xhr=y.ajax({url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%","get_variation"),type:"POST",data:a,success:function(t){t?i.$form.trigger("found_variation",[t]):(i.$form.trigger("reset_data"),e.chosenCount=0,i.loading||(i.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),i.$form.find(".wc-no-matching-variations").slideDown(200)))},complete:function(){i.$form.unblock()}})):(i.$form.trigger("update_variation_values"),(a=i.findMatchingVariations(i.variationData,a).shift())?i.$form.trigger("found_variation",[a]):(i.$form.trigger("reset_data"),e.chosenCount=0,i.loading||(i.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),i.$form.find(".wc-no-matching-variations").slideDown(200)))):(i.$form.trigger("update_variation_values"),i.$form.trigger("reset_data")),i.toggleResetLink(0<e.chosenCount)},t.prototype.onFoundVariation=function(t,a){var i=t.data.variationForm,e=i.$product.find(".product_meta").find(".sku"),r=i.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value"),o=i.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value"),n=i.$singleVariationWrap.find(".quantity"),s=!0,c=!1,t="";a.sku?e.wc_set_content(a.sku):e.wc_reset_content(),a.weight?r.wc_set_content(a.weight_html):r.wc_reset_content(),a.dimensions?o.wc_set_content(y.parseHTML(a.dimensions_html)[0].data):o.wc_reset_content(),i.$form.wc_variations_image_update(a),a.variation_is_visible?(c=_("variation-template"),a.variation_id):c=_("unavailable-variation-template"),t=(t=(t=c({variation:a})).replace("/*<![CDATA[*/","")).replace("/*]]>*/",""),i.$singleVariation.html(t),i.$form.find('input[name="variation_id"], input.variation_id').val(a.variation_id).trigger("change"),"yes"===a.is_sold_individually?(n.find("input.qty").val("1").attr("min","1").attr("max","").trigger("change"),n.hide()):(c=n.find("input.qty"),t=parseFloat(c.val()),t=isNaN(t)||(t=t>parseFloat(a.max_qty)?a.max_qty:t)<parseFloat(a.min_qty)?a.min_qty:t,c.attr("min",a.min_qty).attr("max",a.max_qty).val(t).trigger("change"),n.show()),a.is_purchasable&&a.is_in_stock&&a.variation_is_visible||(s=!1),(i.$singleVariation.text().trim()?i.$singleVariation.slideDown(200):i.$singleVariation.show()).trigger("show_variation",[a,s])},t.prototype.onChange=function(t){t=t.data.variationForm;t.$form.find('input[name="variation_id"], input.variation_id').val("").trigger("change"),t.$form.find(".wc-no-matching-variations").remove(),t.useAjax||t.$form.trigger("woocommerce_variation_select_change"),t.$form.trigger("check_variations"),t.$form.trigger("woocommerce_variation_has_changed")},t.prototype.addSlashes=function(t){return t=(t=t.replace(/'/g,"\\'")).replace(/"/g,'\\"')},t.prototype.onUpdateAttributes=function(t){var b=t.data.variationForm,$=b.getChosenAttributes().data;b.useAjax||(b.$attributeFields.each(function(t,a){var i=y(a),e=i.data("attribute_name")||i.attr("name"),r=y(a).data("show_option_none"),o=":gt(0)",a=0,n=y("<select/>"),s=i.val()||"",c=!0;i.data("attribute_html")||((_=i.clone()).find("option").prop("disabled attached",!1).prop("selected",!1),i.data("attribute_options",_.find("option"+o).get()),i.data("attribute_html",_.html())),n.html(i.data("attribute_html"));var _=y.extend(!0,{},$);_[e]="";var d,m=b.findMatchingVariations(b.variationData,_);for(d in m)if("undefined"!=typeof m[d]){var l,v=m[d].attributes;for(l in v)if(v.hasOwnProperty(l)){var g=v[l],u="";if(l===e)if(m[d].variation_is_active&&(u="enabled"),g){g=y("<div/>").html(g).text();var f=n.find("option");if(f.length)for(var h=0,p=f.length;h<p;h++){var w=y(f[h]);if(g===w.val()){w.addClass("attached "+u);break}}}else n.find("option:gt(0)").addClass("attached "+u)}}a=n.find("option.attached").length,s&&(c=!1,0!==a&&n.find("option.attached.enabled").each(function(){var t=y(this).val();if(s===t)return!(c=!0)})),0<a&&s&&c&&"no"===r&&(n.find("option:first").remove(),o=""),n.find("option"+o+":not(.attached)").remove(),i.html(n.html()),i.find("option"+o+":not(.enabled)").prop("disabled",!0),s?c?i.val(s):i.val("").trigger("change"):i.val("")}),b.$form.trigger("woocommerce_update_variation_values"))},t.prototype.getChosenAttributes=function(){var i={},e=0,r=0;return this.$attributeFields.each(function(){var t=y(this).data("attribute_name")||y(this).attr("name"),a=y(this).val()||"";0<a.length&&r++,e++,i[t]=a}),{count:e,chosenCount:r,data:i}},t.prototype.findMatchingVariations=function(t,a){for(var i=[],e=0;e<t.length;e++){var r=t[e];this.isMatch(r.attributes,a)&&i.push(r)}return i},t.prototype.isMatch=function(t,a){var i,e,r,o=!0;for(i in t){t.hasOwnProperty(i)&&(e=t[i],r=a[i],e!==n&&r!==n&&0!==e.length&&0!==r.length&&e!==r&&(o=!1))}return o},t.prototype.toggleResetLink=function(t){t?"hidden"===this.$resetVariations.css("visibility")&&this.$resetVariations.css("visibility","visible").hide().fadeIn():this.$resetVariations.css("visibility","hidden")},y.fn.wc_variation_form=function(){return new t(this),this},y.fn.wc_set_content=function(t){n===this.attr("data-o_content")&&this.attr("data-o_content",this.text()),this.text(t)},y.fn.wc_reset_content=function(){n!==this.attr("data-o_content")&&this.text(this.attr("data-o_content"))},y.fn.wc_set_variation_attr=function(t,a){n===this.attr("data-o_"+t)&&this.attr("data-o_"+t,this.attr(t)?this.attr(t):""),!1===a?this.removeAttr(t):this.attr(t,a)},y.fn.wc_reset_variation_attr=function(t){n!==this.attr("data-o_"+t)&&this.attr(t,this.attr("data-o_"+t))},y.fn.wc_maybe_trigger_slide_position_reset=function(t){var a=y(this),i=a.closest(".product").find(".images"),e=!1,t=t&&t.image_id?t.image_id:"";a.attr("current-image")!==t&&(e=!0),a.attr("current-image",t),e&&i.trigger("woocommerce_gallery_reset_slide_position")},y.fn.wc_variations_image_update=function(t){var a=this,i=a.closest(".product"),e=i.find(".images"),r=i.find(".flex-control-nav"),o=r.find("li:eq(0) img"),n=e.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),s=n.find(".wp-post-image"),i=n.find("a").eq(0);if(t&&t.image&&t.image.src&&1<t.image.src.length){0<r.find('li img[data-o_src="'+t.image.gallery_thumbnail_src+'"]').length&&a.wc_variations_image_reset();r=r.find('li img[src="'+t.image.gallery_thumbnail_src+'"]');if(0<r.length)return r.trigger("click"),a.attr("current-image",t.image_id),void c.setTimeout(function(){y(c).trigger("resize"),e.trigger("woocommerce_gallery_init_zoom")},20);s.wc_set_variation_attr("src",t.image.src),s.wc_set_variation_attr("height",t.image.src_h),s.wc_set_variation_attr("width",t.image.src_w),s.wc_set_variation_attr("srcset",t.image.srcset),s.wc_set_variation_attr("sizes",t.image.sizes),s.wc_set_variation_attr("title",t.image.title),s.wc_set_variation_attr("data-caption",t.image.caption),s.wc_set_variation_attr("alt",t.image.alt),s.wc_set_variation_attr("data-src",t.image.full_src),s.wc_set_variation_attr("data-large_image",t.image.full_src),s.wc_set_variation_attr("data-large_image_width",t.image.full_src_w),s.wc_set_variation_attr("data-large_image_height",t.image.full_src_h),n.wc_set_variation_attr("data-thumb",t.image.src),o.wc_set_variation_attr("src",t.image.gallery_thumbnail_src),i.wc_set_variation_attr("href",t.image.full_src)}else a.wc_variations_image_reset();c.setTimeout(function(){y(c).trigger("resize"),a.wc_maybe_trigger_slide_position_reset(t),e.trigger("woocommerce_gallery_init_zoom")},20)},y.fn.wc_variations_image_reset=function(){var t=this.closest(".product"),a=t.find(".images"),i=t.find(".flex-control-nav").find("li:eq(0) img"),e=a.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),t=e.find(".wp-post-image"),a=e.find("a").eq(0);t.wc_reset_variation_attr("src"),t.wc_reset_variation_attr("width"),t.wc_reset_variation_attr("height"),t.wc_reset_variation_attr("srcset"),t.wc_reset_variation_attr("sizes"),t.wc_reset_variation_attr("title"),t.wc_reset_variation_attr("data-caption"),t.wc_reset_variation_attr("alt"),t.wc_reset_variation_attr("data-src"),t.wc_reset_variation_attr("data-large_image"),t.wc_reset_variation_attr("data-large_image_width"),t.wc_reset_variation_attr("data-large_image_height"),e.wc_reset_variation_attr("data-thumb"),i.wc_reset_variation_attr("src"),a.wc_reset_variation_attr("href")},y(function(){"undefined"!=typeof wc_add_to_cart_variation_params&&y(".variations_form").each(function(){y(this).wc_variation_form()})});var _=function(t){var a=i.getElementById("tmpl-"+t).textContent;return/<#\s?data\./.test(a)||/{{{?\s?data\.(?!variation\.).+}}}?/.test(a)||/{{{?\s?data\.variation\.[\w-]*[^\s}]/.test(a)?wp.template(t):function(t){var r=t.variation||{};return a.replace(/({{{?)\s?data\.variation\.([\w-]*)\s?(}}}?)/g,function(t,a,i,e){if(a.length!==e.length)return"";i=r[i]||"";return 2===a.length?c.escape(i):i})}}}(jQuery,window,document);/*! elementor - v3.2.4 - 26-05-2021 */
(()=>{"use strict";var e,r,_={},t={};function __webpack_require__(e){if(t[e])return t[e].exports;var r=t[e]={exports:{}};return _[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=_,__webpack_require__.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);__webpack_require__.r(_);var t={};if(2&r&&"object"==typeof e&&e)for(const r in e)t[r]=()=>e[r];return t.default=()=>e,__webpack_require__.d(_,t),_},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e,r),r)),[])),__webpack_require__.u=e=>637===e?"b97f47714e4b947a72df.bundle.min.js":723===e?"lightbox.2231a3a329cf455714aa.bundle.min.js":48===e?"text-path.4ba996cf50a07303b250.bundle.min.js":209===e?"accordion.8676521a2e6ad8c65c84.bundle.min.js":745===e?"alert.f4e7a6df1283698dea78.bundle.min.js":120===e?"counter.99f87b466b69ef909f39.bundle.min.js":192===e?"progress.2f915ff369cd52d14d21.bundle.min.js":520===e?"tabs.3cbd8fbb28141b6e445d.bundle.min.js":181===e?"toggle.b64b2f116c93ef441684.bundle.min.js":791===e?"video.2be65474f4a78954309a.bundle.min.js":268===e?"image-carousel.a219e39506aaca30e58d.bundle.min.js":357===e?"text-editor.aed713532404e88b2deb.bundle.min.js":{819:"frontend.min",882:"preloaded-modules.min"}[e]+".js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="elementor:",__webpack_require__.l=(_,t,a)=>{if(e[_])e[_].push(t);else{var i,n;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var o=u[c];if(o.getAttribute("src")==_||o.getAttribute("data-webpack")==r+a){i=o;break}}i||(n=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,__webpack_require__.nc&&i.setAttribute("nonce",__webpack_require__.nc),i.setAttribute("data-webpack",r+a),i.src=_),e[_]=[t];var onScriptComplete=(r,t)=>{i.onerror=i.onload=null,clearTimeout(b);var a=e[_];if(delete e[_],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(t))),r)return r(t)},b=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=onScriptComplete.bind(null,i.onerror),i.onload=onScriptComplete.bind(null,i.onload),n&&document.head.appendChild(i)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");_.length&&(e=_[_.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={162:0},r=[];__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else{var a=new Promise(((_,a)=>{t=e[r]=[_,a]}));_.push(t[2]=a);var i=__webpack_require__.p+__webpack_require__.u(r),n=new Error;__webpack_require__.l(i,(_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var a=_&&("load"===_.type?"missing":_.type),i=_&&_.target&&_.target.src;n.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",n.name="ChunkLoadError",n.type=a,n.request=i,t[1](n)}}),"chunk-"+r)}};var checkDeferredModules=()=>{};function checkDeferredModulesImpl(){for(var _,t=0;t<r.length;t++){for(var a=r[t],i=!0,n=1;n<a.length;n++){var u=a[n];0!==e[u]&&(i=!1)}i&&(r.splice(t--,1),_=__webpack_require__(__webpack_require__.s=a[0]))}return 0===r.length&&(__webpack_require__.x(),__webpack_require__.x=()=>{}),_}__webpack_require__.x=()=>{__webpack_require__.x=()=>{},_=_.slice();for(var e=0;e<_.length;e++)webpackJsonpCallback(_[e]);return(checkDeferredModules=checkDeferredModulesImpl)()};var webpackJsonpCallback=_=>{for(var a,i,[n,u,c,o]=_,b=0,p=[];b<n.length;b++)i=n[b],__webpack_require__.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(a in u)__webpack_require__.o(u,a)&&(__webpack_require__.m[a]=u[a]);for(c&&c(__webpack_require__),t(_);p.length;)p.shift()();return o&&r.push.apply(r,o),checkDeferredModules()},_=self.webpackChunkelementor=self.webpackChunkelementor||[],t=_.push.bind(_);_.push=webpackJsonpCallback})(),__webpack_require__.x()})();/*! elementor - v3.2.4 - 26-05-2021 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[354],{9396:(t,e,r)=>{t.exports=r(9862)},5091:(t,e,r)=>{t.exports=r(7060)},8401:(t,e,r)=>{t.exports=r(9043)},7394:(t,e,r)=>{t.exports=r(3679)},3587:(t,e,r)=>{t.exports=r(7092)},2055:(t,e,r)=>{t.exports=r(8473)},3452:(t,e,r)=>{t.exports=r(671)},8274:(t,e,r)=>{t.exports=r(7629)},3493:(t,e,r)=>{t.exports=r(3966)},4176:(t,e,r)=>{t.exports=r(4969)},5499:(t,e,r)=>{t.exports=r(990)},8282:(t,e,r)=>{t.exports=r(6760)},1281:(t,e,r)=>{t.exports=r(9280)},9363:(t,e,r)=>{t.exports=r(9551)},93:(t,e,r)=>{t.exports=r(2194)},8852:t=>{t.exports=function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},1959:t=>{t.exports=function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},846:(t,e,r)=>{var n=r(5499),o=r(6870),i=r(898);function _construct(e,r,s){return i()?t.exports=_construct=n:t.exports=_construct=function _construct(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&o(i,r.prototype),i},_construct.apply(null,arguments)}t.exports=_construct},9041:(t,e,r)=>{var n=r(7394);function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(t,o.key,o)}}t.exports=function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}},8537:(t,e,r)=>{var n=r(5499),o=r(4263),i=r(898),s=r(9771);t.exports=function _createSuper(t){var e=i();return function _createSuperInternal(){var r,i=o(t);if(e){var u=o(this).constructor;r=n(i,arguments,u)}else r=i.apply(this,arguments);return s(this,r)}}},6700:(t,e,r)=>{var n=r(3587),o=r(8282),i=r(9445);function _get(e,r,s){return"undefined"!=typeof Reflect&&o?t.exports=_get=o:t.exports=_get=function _get(t,e,r){var o=i(t,e);if(o){var s=n(o,e);return s.get?s.get.call(r):s.value}},_get(e,r,s||e)}t.exports=_get},4263:(t,e,r)=>{var n=r(2055),o=r(8274);function _getPrototypeOf(e){return t.exports=_getPrototypeOf=o?n:function _getPrototypeOf(t){return t.__proto__||n(t)},_getPrototypeOf(e)}t.exports=_getPrototypeOf},7371:(t,e,r)=>{var n=r(8401),o=r(6870);t.exports=function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=n(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},7971:t=>{t.exports=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}},653:t=>{t.exports=function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},898:(t,e,r)=>{var n=r(5499);t.exports=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],(function(){}))),!0}catch(t){return!1}}},9771:(t,e,r)=>{var n=r(4596),o=r(8852);t.exports=function _possibleConstructorReturn(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},6870:(t,e,r)=>{var n=r(8274);function _setPrototypeOf(e,r){return t.exports=_setPrototypeOf=n||function _setPrototypeOf(t,e){return t.__proto__=e,t},_setPrototypeOf(e,r)}t.exports=_setPrototypeOf},9445:(t,e,r)=>{var n=r(4263);t.exports=function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t}},4596:(t,e,r)=>{var n=r(93),o=r(1281);function _typeof(e){return t.exports=_typeof="function"==typeof o&&"symbol"==typeof n?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":typeof t},_typeof(e)}t.exports=_typeof},3629:(t,e,r)=>{var n=r(8401),o=r(5091),i=r(4263),s=r(6870),u=r(653),a=r(846);function _wrapNativeSuper(e){var r="function"==typeof o?new o:void 0;return t.exports=_wrapNativeSuper=function _wrapNativeSuper(t){if(null===t||!u(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,Wrapper)}function Wrapper(){return a(t,arguments,i(this).constructor)}return Wrapper.prototype=n(t.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),s(Wrapper,t)},_wrapNativeSuper(e)}t.exports=_wrapNativeSuper},9862:(t,e,r)=>{r(8588),t.exports=r(7252).Array.isArray},7060:(t,e,r)=>{r(8970),r(617),r(414),r(2844),r(9941),r(4926),r(4462),t.exports=r(7252).Map},9043:(t,e,r)=>{r(4713);var n=r(7252).Object;t.exports=function create(t,e){return n.create(t,e)}},3679:(t,e,r)=>{r(2328);var n=r(7252).Object;t.exports=function defineProperty(t,e,r){return n.defineProperty(t,e,r)}},7092:(t,e,r)=>{r(8869);var n=r(7252).Object;t.exports=function getOwnPropertyDescriptor(t,e){return n.getOwnPropertyDescriptor(t,e)}},8473:(t,e,r)=>{r(318),t.exports=r(7252).Object.getPrototypeOf},671:(t,e,r)=>{r(3219),t.exports=r(7252).Object.keys},7629:(t,e,r)=>{r(929),t.exports=r(7252).Object.setPrototypeOf},3966:(t,e,r)=>{r(2467),t.exports=r(7252).parseFloat},4969:(t,e,r)=>{r(5142),t.exports=r(7252).parseInt},990:(t,e,r)=>{r(7795),t.exports=r(7252).Reflect.construct},6760:(t,e,r)=>{r(7969),t.exports=r(7252).Reflect.get},9551:(t,e,r)=>{r(565),t.exports=r(451).f("hasInstance")},9280:(t,e,r)=>{r(5638),r(8970),r(51),r(80),t.exports=r(7252).Symbol},2194:(t,e,r)=>{r(617),r(414),t.exports=r(451).f("iterator")},7370:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},5855:t=>{t.exports=function(){}},944:t=>{t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},3451:(t,e,r)=>{var n=r(9110);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},1260:(t,e,r)=>{var n=r(2966);t.exports=function(t,e){var r=[];return n(t,!1,r.push,r,e),r}},8381:(t,e,r)=>{var n=r(394),o=r(3981),i=r(7568);t.exports=function(t){return function(e,r,s){var u,a=n(e),c=o(a.length),l=i(s,c);if(t&&r!=r){for(;c>l;)if((u=a[l++])!=u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===r)return t||l||0;return!t&&-1}}},7652:(t,e,r)=>{var n=r(9365),o=r(4409),i=r(5374),s=r(3981),u=r(9292);t.exports=function(t,e){var r=1==t,a=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f,v=e||u;return function(e,u,h){for(var d,g,y=i(e),m=o(y),x=n(u,h,3),S=s(m.length),_=0,b=r?v(e,S):a?v(e,0):void 0;S>_;_++)if((p||_ in m)&&(g=x(d=m[_],_,y),t))if(r)b[_]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return _;case 2:b.push(d)}else if(l)return!1;return f?-1:c||l?l:b}}},7425:(t,e,r)=>{var n=r(9110),o=r(5311),i=r(7861)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},9292:(t,e,r)=>{var n=r(7425);t.exports=function(t,e){return new(n(t))(e)}},7569:(t,e,r)=>{"use strict";var n=r(7370),o=r(9110),i=r(5808),s=[].slice,u={},construct=function(t,e,r){if(!(e in u)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";u[e]=Function("F,a","return new F("+n.join(",")+")")}return u[e](t,r)};t.exports=Function.bind||function bind(t){var e=n(this),r=s.call(arguments,1),bound=function(){var n=r.concat(s.call(arguments));return this instanceof bound?construct(e,n.length,n):i(e,n,t)};return o(e.prototype)&&(bound.prototype=e.prototype),bound}},8252:(t,e,r)=>{var n=r(1539),o=r(7861)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:i?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},1539:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},2765:(t,e,r)=>{"use strict";var n=r(109).f,o=r(3502),i=r(3991),s=r(9365),u=r(944),a=r(2966),c=r(6982),l=r(3907),f=r(4472),p=r(3752),v=r(9378).fastKey,h=r(714),d=p?"_s":"size",getEntry=function(t,e){var r,n=v(e);if("F"!==n)return t._i[n];for(r=t._f;r;r=r.n)if(r.k==e)return r};t.exports={getConstructor:function(t,e,r,c){var l=t((function(t,n){u(t,l,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,null!=n&&a(n,r,t[c],t)}));return i(l.prototype,{clear:function clear(){for(var t=h(this,e),r=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete r[n.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=h(this,e),n=getEntry(r,t);if(n){var o=n.n,i=n.p;delete r._i[n.i],n.r=!0,i&&(i.n=o),o&&(o.p=i),r._f==n&&(r._f=o),r._l==n&&(r._l=i),r[d]--}return!!n},forEach:function forEach(t){h(this,e);for(var r,n=s(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(n(r.v,r.k,this);r&&r.r;)r=r.p},has:function has(t){return!!getEntry(h(this,e),t)}}),p&&n(l.prototype,"size",{get:function(){return h(this,e)[d]}}),l},def:function(t,e,r){var n,o,i=getEntry(t,e);return i?i.v=r:(t._l=i={i:o=v(e,!0),k:e,v:r,p:n=t._l,n:void 0,r:!1},t._f||(t._f=i),n&&(n.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry,setStrong:function(t,e,r){c(t,e,(function(t,r){this._t=h(t,e),this._k=r,this._l=void 0}),(function(){for(var t=this,e=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?l(0,"keys"==e?r.k:"values"==e?r.v:[r.k,r.v]):(t._t=void 0,l(1))}),r?"entries":"values",!r,!0),f(e)}}},4255:(t,e,r)=>{var n=r(8252),o=r(1260);t.exports=function(t){return function toJSON(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},3213:(t,e,r)=>{"use strict";var n=r(3227),o=r(2570),i=r(9378),s=r(1785),u=r(2441),a=r(3991),c=r(2966),l=r(944),f=r(9110),p=r(2280),v=r(109).f,h=r(7652)(0),d=r(3752);t.exports=function(t,e,r,g,y,m){var x=n[t],S=x,_=y?"set":"add",b=S&&S.prototype,w={};return d&&"function"==typeof S&&(m||b.forEach&&!s((function(){(new S).entries().next()})))?(S=e((function(e,r){l(e,S,t,"_c"),e._c=new x,null!=r&&c(r,y,e[_],e)})),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),(function(t){var e="add"==t||"set"==t;!(t in b)||m&&"clear"==t||u(S.prototype,t,(function(r,n){if(l(this,S,t),!e&&m&&!f(r))return"get"==t&&void 0;var o=this._c[t](0===r?0:r,n);return e?this:o}))})),m||v(S.prototype,"size",{get:function(){return this._c.size}})):(S=g.getConstructor(e,t,y,_),a(S.prototype,r),i.NEED=!0),p(S,t),w[t]=S,o(o.G+o.W+o.F,w),m||g.setStrong(S,t,y),S}},7252:t=>{var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},9365:(t,e,r)=>{var n=r(7370);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},6776:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},3752:(t,e,r)=>{t.exports=!r(1785)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},2264:(t,e,r)=>{var n=r(9110),o=r(3227).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},3945:t=>{t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},1023:(t,e,r)=>{var n=r(1014),o=r(4529),i=r(3866);t.exports=function(t){var e=n(t),r=o.f;if(r)for(var s,u=r(t),a=i.f,c=0;u.length>c;)a.call(t,s=u[c++])&&e.push(s);return e}},2570:(t,e,r)=>{var n=r(3227),o=r(7252),i=r(9365),s=r(2441),u=r(3209),$export=function(t,e,r){var a,c,l,f=t&$export.F,p=t&$export.G,v=t&$export.S,h=t&$export.P,d=t&$export.B,g=t&$export.W,y=p?o:o[e]||(o[e]={}),m=y.prototype,x=p?n:v?n[e]:(n[e]||{}).prototype;for(a in p&&(r=e),r)(c=!f&&x&&void 0!==x[a])&&u(y,a)||(l=c?x[a]:r[a],y[a]=p&&"function"!=typeof x[a]?r[a]:d&&c?i(l,n):g&&x[a]==l?function(t){var F=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return F.prototype=t.prototype,F}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((y.virtual||(y.virtual={}))[a]=l,t&$export.R&&m&&!m[a]&&s(m,a,l)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,t.exports=$export},1785:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2966:(t,e,r)=>{var n=r(9365),o=r(5224),i=r(652),s=r(3451),u=r(3981),a=r(5937),c={},l={},f=t.exports=function(t,e,r,f,p){var v,h,d,g,y=p?function(){return t}:a(t),m=n(r,f,e?2:1),x=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(v=u(t.length);v>x;x++)if((g=e?m(s(h=t[x])[0],h[1]):m(t[x]))===c||g===l)return g}else for(d=y.call(t);!(h=d.next()).done;)if((g=o(d,m,h.value,e))===c||g===l)return g};f.BREAK=c,f.RETURN=l},3227:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},3209:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},2441:(t,e,r)=>{var n=r(109),o=r(7923);t.exports=r(3752)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},7955:(t,e,r)=>{var n=r(3227).document;t.exports=n&&n.documentElement},476:(t,e,r)=>{t.exports=!r(3752)&&!r(1785)((function(){return 7!=Object.defineProperty(r(2264)("div"),"a",{get:function(){return 7}}).a}))},5808:t=>{t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},4409:(t,e,r)=>{var n=r(1539);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},652:(t,e,r)=>{var n=r(8727),o=r(7861)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},5311:(t,e,r)=>{var n=r(1539);t.exports=Array.isArray||function isArray(t){return"Array"==n(t)}},9110:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},5224:(t,e,r)=>{var n=r(3451);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},3154:(t,e,r)=>{"use strict";var n=r(3502),o=r(7923),i=r(2280),s={};r(2441)(s,r(7861)("iterator"),(function(){return this})),t.exports=function(t,e,r){t.prototype=n(s,{next:o(1,r)}),i(t,e+" Iterator")}},6982:(t,e,r)=>{"use strict";var n=r(5401),o=r(2570),i=r(6931),s=r(2441),u=r(8727),a=r(3154),c=r(2280),l=r(4276),f=r(7861)("iterator"),p=!([].keys&&"next"in[].keys()),v="keys",h="values",returnThis=function(){return this};t.exports=function(t,e,r,d,g,y,m){a(r,e,d);var x,S,_,getMethod=function(t){if(!p&&t in E)return E[t];switch(t){case v:return function keys(){return new r(this,t)};case h:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},b=e+" Iterator",w=g==h,O=!1,E=t.prototype,I=E[f]||E["@@iterator"]||g&&E[g],P=I||getMethod(g),j=g?w?getMethod("entries"):P:void 0,T="Array"==e&&E.entries||I;if(T&&(_=l(T.call(new t)))!==Object.prototype&&_.next&&(c(_,b,!0),n||"function"==typeof _[f]||s(_,f,returnThis)),w&&I&&I.name!==h&&(O=!0,P=function values(){return I.call(this)}),n&&!m||!p&&!O&&E[f]||s(E,f,P),u[e]=P,u[b]=returnThis,g)if(x={values:w?P:getMethod(h),keys:y?P:getMethod(v),entries:j},m)for(S in x)S in E||i(E,S,x[S]);else o(o.P+o.F*(p||O),e,x);return x}},3907:t=>{t.exports=function(t,e){return{value:e,done:!!t}}},8727:t=>{t.exports={}},5401:t=>{t.exports=!0},9378:(t,e,r)=>{var n=r(1953)("meta"),o=r(9110),i=r(3209),s=r(109).f,u=0,a=Object.isExtensible||function(){return!0},c=!r(1785)((function(){return a(Object.preventExtensions({}))})),setMeta=function(t){s(t,n,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:n,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,n)){if(!a(t))return"F";if(!e)return"E";setMeta(t)}return t[n].i},getWeak:function(t,e){if(!i(t,n)){if(!a(t))return!0;if(!e)return!1;setMeta(t)}return t[n].w},onFreeze:function(t){return c&&l.NEED&&a(t)&&!i(t,n)&&setMeta(t),t}}},3502:(t,e,r)=>{var n=r(3451),o=r(5548),i=r(3945),s=r(1283)("IE_PROTO"),Empty=function(){},createDict=function(){var t,e=r(2264)("iframe"),n=i.length;for(e.style.display="none",r(7955).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),createDict=t.F;n--;)delete createDict.prototype[i[n]];return createDict()};t.exports=Object.create||function create(t,e){var r;return null!==t?(Empty.prototype=n(t),r=new Empty,Empty.prototype=null,r[s]=t):r=createDict(),void 0===e?r:o(r,e)}},109:(t,e,r)=>{var n=r(3451),o=r(476),i=r(5749),s=Object.defineProperty;e.f=r(3752)?Object.defineProperty:function defineProperty(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},5548:(t,e,r)=>{var n=r(109),o=r(3451),i=r(1014);t.exports=r(3752)?Object.defineProperties:function defineProperties(t,e){o(t);for(var r,s=i(e),u=s.length,a=0;u>a;)n.f(t,r=s[a++],e[r]);return t}},3282:(t,e,r)=>{var n=r(3866),o=r(7923),i=r(394),s=r(5749),u=r(3209),a=r(476),c=Object.getOwnPropertyDescriptor;e.f=r(3752)?c:function getOwnPropertyDescriptor(t,e){if(t=i(t),e=s(e,!0),a)try{return c(t,e)}catch(t){}if(u(t,e))return o(!n.f.call(t,e),t[e])}},2160:(t,e,r)=>{var n=r(394),o=r(3765).f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return s&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(n(t))}},3765:(t,e,r)=>{var n=r(4167),o=r(3945).concat("length","prototype");e.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return n(t,o)}},4529:(t,e)=>{e.f=Object.getOwnPropertySymbols},4276:(t,e,r)=>{var n=r(3209),o=r(5374),i=r(1283)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},4167:(t,e,r)=>{var n=r(3209),o=r(394),i=r(8381)(!1),s=r(1283)("IE_PROTO");t.exports=function(t,e){var r,u=o(t),a=0,c=[];for(r in u)r!=s&&n(u,r)&&c.push(r);for(;e.length>a;)n(u,r=e[a++])&&(~i(c,r)||c.push(r));return c}},1014:(t,e,r)=>{var n=r(4167),o=r(3945);t.exports=Object.keys||function keys(t){return n(t,o)}},3866:(t,e)=>{e.f={}.propertyIsEnumerable},8683:(t,e,r)=>{var n=r(2570),o=r(7252),i=r(1785);t.exports=function(t,e){var r=(o.Object||{})[t]||Object[t],s={};s[t]=e(r),n(n.S+n.F*i((function(){r(1)})),"Object",s)}},2395:(t,e,r)=>{var n=r(3227).parseFloat,o=r(9379).trim;t.exports=1/n(r(107)+"-0")!=-1/0?function parseFloat(t){var e=o(String(t),3),r=n(e);return 0===r&&"-"==e.charAt(0)?-0:r}:n},5111:(t,e,r)=>{var n=r(3227).parseInt,o=r(9379).trim,i=r(107),s=/^[-+]?0[xX]/;t.exports=8!==n(i+"08")||22!==n(i+"0x16")?function parseInt(t,e){var r=o(String(t),3);return n(r,e>>>0||(s.test(r)?16:10))}:n},7923:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},3991:(t,e,r)=>{var n=r(2441);t.exports=function(t,e,r){for(var o in e)r&&t[o]?t[o]=e[o]:n(t,o,e[o]);return t}},6931:(t,e,r)=>{t.exports=r(2441)},502:(t,e,r)=>{"use strict";var n=r(2570),o=r(7370),i=r(9365),s=r(2966);t.exports=function(t){n(n.S,t,{from:function from(t){var e,r,n,u,a=arguments[1];return o(this),(e=void 0!==a)&&o(a),null==t?new this:(r=[],e?(n=0,u=i(a,arguments[2],2),s(t,!1,(function(t){r.push(u(t,n++))}))):s(t,!1,r.push,r),new this(r))}})}},1559:(t,e,r)=>{"use strict";var n=r(2570);t.exports=function(t){n(n.S,t,{of:function of(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},4331:(t,e,r)=>{var n=r(9110),o=r(3451),check=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=r(9365)(Function.call,r(3282).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function setPrototypeOf(t,r){return check(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check}},4472:(t,e,r)=>{"use strict";var n=r(3227),o=r(7252),i=r(109),s=r(3752),u=r(7861)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:n[t];s&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},2280:(t,e,r)=>{var n=r(109).f,o=r(3209),i=r(7861)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},1283:(t,e,r)=>{var n=r(1279)("keys"),o=r(1953);t.exports=function(t){return n[t]||(n[t]=o(t))}},1279:(t,e,r)=>{var n=r(7252),o=r(3227),i="__core-js_shared__",s=o[i]||(o[i]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(5401)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},4581:(t,e,r)=>{var n=r(7907),o=r(6776);t.exports=function(t){return function(e,r){var i,s,u=String(o(e)),a=n(r),c=u.length;return a<0||a>=c?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):i:t?u.slice(a,a+2):s-56320+(i-55296<<10)+65536}}},9379:(t,e,r)=>{var n=r(2570),o=r(6776),i=r(1785),s=r(107),u="["+s+"]",a=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),exporter=function(t,e,r){var o={},u=i((function(){return!!s[t]()||"​"!="​"[t]()})),a=o[t]=u?e(l):s[t];r&&(o[r]=a),n(n.P+n.F*u,"String",o)},l=exporter.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(a,"")),2&e&&(t=t.replace(c,"")),t};t.exports=exporter},107:t=>{t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},7568:(t,e,r)=>{var n=r(7907),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},7907:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},394:(t,e,r)=>{var n=r(4409),o=r(6776);t.exports=function(t){return n(o(t))}},3981:(t,e,r)=>{var n=r(7907),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},5374:(t,e,r)=>{var n=r(6776);t.exports=function(t){return Object(n(t))}},5749:(t,e,r)=>{var n=r(9110);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1953:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},714:(t,e,r)=>{var n=r(9110);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},58:(t,e,r)=>{var n=r(3227),o=r(7252),i=r(5401),s=r(451),u=r(109).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:s.f(t)})}},451:(t,e,r)=>{e.f=r(7861)},7861:(t,e,r)=>{var n=r(1279)("wks"),o=r(1953),i=r(3227).Symbol,s="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=n},5937:(t,e,r)=>{var n=r(8252),o=r(7861)("iterator"),i=r(8727);t.exports=r(7252).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[n(t)]}},8588:(t,e,r)=>{var n=r(2570);n(n.S,"Array",{isArray:r(5311)})},4587:(t,e,r)=>{"use strict";var n=r(5855),o=r(3907),i=r(8727),s=r(394);t.exports=r(6982)(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])}),"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},565:(t,e,r)=>{"use strict";var n=r(9110),o=r(4276),i=r(7861)("hasInstance"),s=Function.prototype;i in s||r(109).f(s,i,{value:function(t){if("function"!=typeof this||!n(t))return!1;if(!n(this.prototype))return t instanceof this;for(;t=o(t);)if(this.prototype===t)return!0;return!1}})},2844:(t,e,r)=>{"use strict";var n=r(2765),o=r(714),i="Map";t.exports=r(3213)(i,(function(t){return function Map(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function get(t){var e=n.getEntry(o(this,i),t);return e&&e.v},set:function set(t,e){return n.def(o(this,i),0===t?0:t,e)}},n,!0)},4713:(t,e,r)=>{var n=r(2570);n(n.S,"Object",{create:r(3502)})},2328:(t,e,r)=>{var n=r(2570);n(n.S+n.F*!r(3752),"Object",{defineProperty:r(109).f})},8869:(t,e,r)=>{var n=r(394),o=r(3282).f;r(8683)("getOwnPropertyDescriptor",(function(){return function getOwnPropertyDescriptor(t,e){return o(n(t),e)}}))},318:(t,e,r)=>{var n=r(5374),o=r(4276);r(8683)("getPrototypeOf",(function(){return function getPrototypeOf(t){return o(n(t))}}))},3219:(t,e,r)=>{var n=r(5374),o=r(1014);r(8683)("keys",(function(){return function keys(t){return o(n(t))}}))},929:(t,e,r)=>{var n=r(2570);n(n.S,"Object",{setPrototypeOf:r(4331).set})},8970:()=>{},2467:(t,e,r)=>{var n=r(2570),o=r(2395);n(n.G+n.F*(parseFloat!=o),{parseFloat:o})},5142:(t,e,r)=>{var n=r(2570),o=r(5111);n(n.G+n.F*(parseInt!=o),{parseInt:o})},7795:(t,e,r)=>{var n=r(2570),o=r(3502),i=r(7370),s=r(3451),u=r(9110),a=r(1785),c=r(7569),l=(r(3227).Reflect||{}).construct,f=a((function(){function F(){}return!(l((function(){}),[],F)instanceof F)})),p=!a((function(){l((function(){}))}));n(n.S+n.F*(f||p),"Reflect",{construct:function construct(t,e){i(t),s(e);var r=arguments.length<3?t:i(arguments[2]);if(p&&!f)return l(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(c.apply(t,n))}var a=r.prototype,v=o(u(a)?a:Object.prototype),h=Function.apply.call(t,v,e);return u(h)?h:v}})},7969:(t,e,r)=>{var n=r(3282),o=r(4276),i=r(3209),s=r(2570),u=r(9110),a=r(3451);s(s.S,"Reflect",{get:function get(t,e){var r,s,c=arguments.length<3?t:arguments[2];return a(t)===c?t[e]:(r=n.f(t,e))?i(r,"value")?r.value:void 0!==r.get?r.get.call(c):void 0:u(s=o(t))?get(s,e,c):void 0}})},617:(t,e,r)=>{"use strict";var n=r(4581)(!0);r(6982)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})}))},5638:(t,e,r)=>{"use strict";var n=r(3227),o=r(3209),i=r(3752),s=r(2570),u=r(6931),a=r(9378).KEY,c=r(1785),l=r(1279),f=r(2280),p=r(1953),v=r(7861),h=r(451),d=r(58),g=r(1023),y=r(5311),m=r(3451),x=r(9110),S=r(5374),_=r(394),b=r(5749),w=r(7923),O=r(3502),E=r(2160),I=r(3282),P=r(4529),j=r(109),T=r(1014),M=I.f,k=j.f,A=E.f,C=n.Symbol,L=n.JSON,D=L&&L.stringify,N=v("_hidden"),R=v("toPrimitive"),$={}.propertyIsEnumerable,B=l("symbol-registry"),H=l("symbols"),W=l("op-symbols"),q=Object.prototype,V="function"==typeof C&&!!P.f,G=n.QObject,Q=!G||!G.prototype||!G.prototype.findChild,U=i&&c((function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=M(q,e);n&&delete q[e],k(t,e,r),n&&t!==q&&k(q,e,n)}:k,wrap=function(t){var e=H[t]=O(C.prototype);return e._k=t,e},z=V&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},J=function defineProperty(t,e,r){return t===q&&J(W,e,r),m(t),e=b(e,!0),m(r),o(H,e)?(r.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),r=O(r,{enumerable:w(0,!1)})):(o(t,N)||k(t,N,w(1,{})),t[N][e]=!0),U(t,e,r)):k(t,e,r)},K=function defineProperties(t,e){m(t);for(var r,n=g(e=_(e)),o=0,i=n.length;i>o;)J(t,r=n[o++],e[r]);return t},Y=function propertyIsEnumerable(t){var e=$.call(this,t=b(t,!0));return!(this===q&&o(H,t)&&!o(W,t))&&(!(e||!o(this,t)||!o(H,t)||o(this,N)&&this[N][t])||e)},X=function getOwnPropertyDescriptor(t,e){if(t=_(t),e=b(e,!0),t!==q||!o(H,e)||o(W,e)){var r=M(t,e);return!r||!o(H,e)||o(t,N)&&t[N][e]||(r.enumerable=!0),r}},Z=function getOwnPropertyNames(t){for(var e,r=A(_(t)),n=[],i=0;r.length>i;)o(H,e=r[i++])||e==N||e==a||n.push(e);return n},tt=function getOwnPropertySymbols(t){for(var e,r=t===q,n=A(r?W:_(t)),i=[],s=0;n.length>s;)!o(H,e=n[s++])||r&&!o(q,e)||i.push(H[e]);return i};V||(u((C=function Symbol(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),$set=function(e){this===q&&$set.call(W,e),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),U(this,t,w(1,e))};return i&&Q&&U(q,t,{configurable:!0,set:$set}),wrap(t)}).prototype,"toString",(function toString(){return this._k})),I.f=X,j.f=J,r(3765).f=E.f=Z,r(3866).f=Y,P.f=tt,i&&!r(5401)&&u(q,"propertyIsEnumerable",Y,!0),h.f=function(t){return wrap(v(t))}),s(s.G+s.W+s.F*!V,{Symbol:C});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)v(et[rt++]);for(var nt=T(v.store),ot=0;nt.length>ot;)d(nt[ot++]);s(s.S+s.F*!V,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=C(t)},keyFor:function keyFor(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),s(s.S+s.F*!V,"Object",{create:function create(t,e){return void 0===e?O(t):K(O(t),e)},defineProperty:J,defineProperties:K,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt});var it=c((function(){P.f(1)}));s(s.S+s.F*it,"Object",{getOwnPropertySymbols:function getOwnPropertySymbols(t){return P.f(S(t))}}),L&&s(s.S+s.F*(!V||c((function(){var t=C();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}))),"JSON",{stringify:function stringify(t){for(var e,r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e=n[1],(x(e)||void 0!==t)&&!z(t))return y(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!z(e))return e}),n[1]=e,D.apply(L,n)}}),C.prototype[R]||r(2441)(C.prototype,R,C.prototype.valueOf),f(C,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},4462:(t,e,r)=>{r(502)("Map")},4926:(t,e,r)=>{r(1559)("Map")},9941:(t,e,r)=>{var n=r(2570);n(n.P+n.R,"Map",{toJSON:r(4255)("Map")})},51:(t,e,r)=>{r(58)("asyncIterator")},80:(t,e,r)=>{r(58)("observable")},414:(t,e,r)=>{r(4587);for(var n=r(3227),o=r(2441),i=r(8727),s=r(7861)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var c=u[a],l=n[c],f=l&&l.prototype;f&&!f[s]&&o(f,s,c),i[c]=i.Array}},8135:(t,e,r)=>{"use strict";var n=r(7971);r(7394)(e,"__esModule",{value:!0}),e.default=void 0,r(1954);var o=n(r(1959)),i=n(r(9041)),s=n(r(6700)),u=n(r(4263)),a=n(r(7371)),c=n(r(8537)),l=function(t){(0,a.default)(_default,t);var e=(0,c.default)(_default);function _default(){return(0,o.default)(this,_default),e.apply(this,arguments)}return(0,i.default)(_default,[{key:"getDefaultSettings",value:function getDefaultSettings(){return{selectors:{elements:".elementor-element",nestedDocumentElements:".elementor .elementor-element"},classes:{editMode:"elementor-edit-mode"}}}},{key:"getDefaultElements",value:function getDefaultElements(){var t=this.getSettings("selectors");return{$elements:this.$element.find(t.elements).not(this.$element.find(t.nestedDocumentElements))}}},{key:"getDocumentSettings",value:function getDocumentSettings(t){var e;if(this.isEdit){e={};var r=elementor.settings.page.model;jQuery.each(r.getActiveControls(),(function(t){e[t]=r.attributes[t]}))}else e=this.$element.data("elementor-settings")||{};return this.getItems(e,t)}},{key:"runElementsHandlers",value:function runElementsHandlers(){this.elements.$elements.each((function(t,e){return elementorFrontend.elementsHandler.runReadyTrigger(e)}))}},{key:"onInit",value:function onInit(){var t=this;this.$element=this.getSettings("$element"),(0,s.default)((0,u.default)(_default.prototype),"onInit",this).call(this),this.isEdit=this.$element.hasClass(this.getSettings("classes.editMode")),this.isEdit?elementor.on("document:loaded",(function(){elementor.settings.page.model.on("change",t.onSettingsChange.bind(t))})):this.runElementsHandlers()}},{key:"onSettingsChange",value:function onSettingsChange(){}}]),_default}(elementorModules.ViewModule);e.default=l},2821:(t,e,r)=>{"use strict";var n=r(7971);r(7394)(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(1959)),i=n(r(9041)),s=n(r(7371)),u=n(r(8537)),a=function(t){(0,s.default)(SwiperHandlerBase,t);var e=(0,u.default)(SwiperHandlerBase);function SwiperHandlerBase(){return(0,o.default)(this,SwiperHandlerBase),e.apply(this,arguments)}return(0,i.default)(SwiperHandlerBase,[{key:"getInitialSlide",value:function getInitialSlide(){var t=this.getEditSettings();return t.activeItemIndex?t.activeItemIndex-1:0}},{key:"getSlidesCount",value:function getSlidesCount(){return this.elements.$slides.length}},{key:"togglePauseOnHover",value:function togglePauseOnHover(t){var e=this;t?this.elements.$swiperContainer.on({mouseenter:function mouseenter(){e.swiper.autoplay.stop()},mouseleave:function mouseleave(){e.swiper.autoplay.start()}}):this.elements.$swiperContainer.off("mouseenter mouseleave")}},{key:"handleKenBurns",value:function handleKenBurns(){var t=this.getSettings();this.$activeImageBg&&this.$activeImageBg.removeClass(t.classes.kenBurnsActive),this.activeItemIndex=this.swiper?this.swiper.activeIndex:this.getInitialSlide(),this.swiper?this.$activeImageBg=jQuery(this.swiper.slides[this.activeItemIndex]).children("."+t.classes.slideBackground):this.$activeImageBg=jQuery(this.elements.$slides[0]).children("."+t.classes.slideBackground),this.$activeImageBg.addClass(t.classes.kenBurnsActive)}}]),SwiperHandlerBase}(n(r(3090)).default);e.default=a},3090:(t,e,r)=>{"use strict";var n=r(7971);r(3085),r(2897),r(6139),r(9236);var o=n(r(3452));r(1954),t.exports=elementorModules.ViewModule.extend({$element:null,editorListeners:null,onElementChange:null,onEditSettingsChange:null,onPageSettingsChange:null,isEdit:null,__construct:function __construct(t){this.isActive(t)&&(this.$element=t.$element,this.isEdit=this.$element.hasClass("elementor-element-edit-mode"),this.isEdit&&this.addEditorListeners())},isActive:function isActive(){return!0},findElement:function findElement(t){var e=this.$element;return e.find(t).filter((function(){return jQuery(this).closest(".elementor-element").is(e)}))},getUniqueHandlerID:function getUniqueHandlerID(t,e){return t||(t=this.getModelCID()),e||(e=this.$element),t+e.attr("data-element_type")+this.getConstructorID()},initEditorListeners:function initEditorListeners(){var t=this;if(t.editorListeners=[{event:"element:destroy",to:elementor.channels.data,callback:function callback(e){e.cid===t.getModelCID()&&t.onDestroy()}}],t.onElementChange){var e=t.getWidgetType()||t.getElementType(),r="change";"global"!==e&&(r+=":"+e),t.editorListeners.push({event:r,to:elementor.channels.editor,callback:function callback(e,r){t.getUniqueHandlerID(r.model.cid,r.$el)===t.getUniqueHandlerID()&&t.onElementChange(e.model.get("name"),e,r)}})}t.onEditSettingsChange&&t.editorListeners.push({event:"change:editSettings",to:elementor.channels.editor,callback:function callback(e,r){r.model.cid===t.getModelCID()&&t.onEditSettingsChange((0,o.default)(e.changed)[0])}}),["page"].forEach((function(e){var r="on"+e[0].toUpperCase()+e.slice(1)+"SettingsChange";t[r]&&t.editorListeners.push({event:"change",to:elementor.settings[e].model,callback:function callback(e){t[r](e.changed)}})}))},getEditorListeners:function getEditorListeners(){return this.editorListeners||this.initEditorListeners(),this.editorListeners},addEditorListeners:function addEditorListeners(){var t=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(e){elementorFrontend.addListenerOnce(t,e.event,e.callback,e.to)}))},removeEditorListeners:function removeEditorListeners(){var t=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(e){elementorFrontend.removeListeners(t,e.event,null,e.to)}))},getElementType:function getElementType(){return this.$element.data("element_type")},getWidgetType:function getWidgetType(){var t=this.$element.data("widget_type");if(t)return t.split(".")[0]},getID:function getID(){return this.$element.data("id")},getModelCID:function getModelCID(){return this.$element.data("model-cid")},getElementSettings:function getElementSettings(t){var e={},r=this.getModelCID();if(this.isEdit&&r){var n=elementorFrontend.config.elements.data[r],o=n.attributes,i=o.widgetType||o.elType;o.isInner&&(i="inner-"+i);var s=elementorFrontend.config.elements.keys[i];s||(s=elementorFrontend.config.elements.keys[i]=[],jQuery.each(n.controls,(function(t,e){e.frontend_available&&s.push(t)}))),jQuery.each(n.getActiveControls(),(function(t){if(-1!==s.indexOf(t)){var r=o[t];r.toJSON&&(r=r.toJSON()),e[t]=r}}))}else e=this.$element.data("settings")||{};return this.getItems(e,t)},getEditSettings:function getEditSettings(t){var e={};return this.isEdit&&(e=elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),this.getItems(e,t)},getCurrentDeviceSetting:function getCurrentDeviceSetting(t){return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),t)},onInit:function onInit(){this.isActive(this.getSettings())&&elementorModules.ViewModule.prototype.onInit.apply(this,arguments)},onDestroy:function onDestroy(){this.isEdit&&this.removeEditorListeners(),this.unbindEvents&&this.unbindEvents()}})},6412:(t,e,r)=>{"use strict";var n=r(7971),o=n(r(5955)),i=n(r(8135)),s=n(r(5658)),u=n(r(3090)),a=n(r(2821));o.default.frontend={Document:i.default,tools:{StretchElement:s.default},handlers:{Base:u.default,SwiperBase:a.default}}},5658:t=>{"use strict";t.exports=elementorModules.ViewModule.extend({getDefaultSettings:function getDefaultSettings(){return{element:null,direction:elementorFrontend.config.is_rtl?"right":"left",selectors:{container:window}}},getDefaultElements:function getDefaultElements(){return{$element:jQuery(this.getSettings("element"))}},stretch:function stretch(){var t,e=this.getSettings("selectors.container");try{t=jQuery(e)}catch(t){}t&&t.length||(t=jQuery(this.getDefaultSettings().selectors.container)),this.reset();var r=this.elements.$element,n=t.innerWidth(),o=r.offset().left,i="fixed"===r.css("position"),s=i?0:o;if(window!==t[0]){var u=t.offset().left;i&&(s=u),o>u&&(s=o-u)}i||(elementorFrontend.config.is_rtl&&(s=n-(r.outerWidth()+s)),s=-s);var a={};a.width=n+"px",a[this.getSettings("direction")]=s+"px",r.css(a)},reset:function reset(){var t={width:""};t[this.getSettings("direction")]="",this.elements.$element.css(t)}})},2618:(t,e,r)=>{"use strict";var n=r(7971);r(7394)(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(4596)),i=n(r(1959)),s=n(r(9041)),u=n(r(7371)),a=n(r(8537)),c=function(t){(0,u.default)(ArgsObject,t);var e=(0,a.default)(ArgsObject);function ArgsObject(t){var r;return(0,i.default)(this,ArgsObject),(r=e.call(this)).args=t,r}return(0,s.default)(ArgsObject,null,[{key:"getInstanceType",value:function getInstanceType(){return"ArgsObject"}}]),(0,s.default)(ArgsObject,[{key:"requireArgument",value:function requireArgument(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.args;if(!e.hasOwnProperty(t))throw Error("".concat(t," is required."))}},{key:"requireArgumentType",value:function requireArgumentType(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(t,r),(0,o.default)(r[t])!==e)throw Error("".concat(t," invalid type: ").concat(e,"."))}},{key:"requireArgumentInstance",value:function requireArgumentInstance(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(t,r),!(r[t]instanceof e))throw Error("".concat(t," invalid instance."))}},{key:"requireArgumentConstructor",value:function requireArgumentConstructor(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(t,r),r[t].constructor!==e)throw Error("".concat(t," invalid constructor type."))}}]),ArgsObject}(n(r(7597)).default);e.default=c},869:(t,e,r)=>{"use strict";var n=r(7971);r(7394)(e,"__esModule",{value:!0}),e.default=e.ForceMethodImplementation=void 0,r(8081),r(3777),r(5942),r(9236);var o=n(r(1959)),i=n(r(8852)),s=n(r(7371)),u=n(r(8537)),a=function(t){(0,s.default)(ForceMethodImplementation,t);var e=(0,u.default)(ForceMethodImplementation);function ForceMethodImplementation(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.default)(this,ForceMethodImplementation),t=e.call(this,"".concat(r.isStatic?"static ":"").concat(r.fullName,"() should be implemented, please provide '").concat(r.functionName||r.fullName,"' functionality.")),Error.captureStackTrace((0,i.default)(t),ForceMethodImplementation),t}return ForceMethodImplementation}((0,n(r(3629)).default)(Error));e.ForceMethodImplementation=a;e.default=function _default(){var t=Error().stack.split("\n")[2].trim(),e=t.startsWith("at new")?"constructor":t.split(" ")[1],r={};if(r.functionName=e,r.fullName=e,r.functionName.includes(".")){var n=r.functionName.split(".");r.className=n[0],r.functionName=n[1]}else r.isStatic=!0;throw new a(r)}},7597:(t,e,r)=>{"use strict";var n=r(7971);r(7394)(e,"__esModule",{value:!0}),e.default=void 0,r(9745);var o=n(r(9396)),i=n(r(9363)),s=n(r(1959)),u=n(r(9041)),a=n(r(6700)),c=n(r(4263)),l=function(){function InstanceType(){var t=this;(0,s.default)(this,InstanceType);for(var e=this instanceof InstanceType?this.constructor:void 0,r=[];e.__proto__&&e.__proto__.name;)r.push(e.__proto__),e=e.__proto__;r.reverse().forEach((function(e){return t instanceof e}))}return(0,u.default)(InstanceType,null,[{key:i.default,value:function value(t){var e=(0,a.default)((0,c.default)(InstanceType),i.default,this).call(this,t);if(t&&!t.constructor.getInstanceType)return e;if(t&&(t.instanceTypes||(t.instanceTypes=[]),e||this.getInstanceType()===t.constructor.getInstanceType()&&(e=!0),e)){var r=this.getInstanceType===InstanceType.getInstanceType?"BaseInstanceType":this.getInstanceType();-1===t.instanceTypes.indexOf(r)&&t.instanceTypes.push(r)}return!e&&t&&(e=t.instanceTypes&&(0,o.default)(t.instanceTypes)&&-1!==t.instanceTypes.indexOf(this.getInstanceType())),e}}]),(0,u.default)(InstanceType,null,[{key:"getInstanceType",value:function getInstanceType(){elementorModules.ForceMethodImplementation()}}]),InstanceType}();e.default=l},1192:(t,e,r)=>{"use strict";var n=r(7971),o=n(r(8401));r(9745);var i=n(r(4596));r(9236);var s=function Module(){var t,e=jQuery,r=arguments,n=this,o={},s=function ensureClosureMethods(){e.each(n,(function(t){var e=n[t];"function"==typeof e&&(n[t]=function(){return e.apply(n,arguments)})}))},u=function initSettings(){t=n.getDefaultSettings();var o=r[0];o&&e.extend(!0,t,o)},a=function init(){n.__construct.apply(n,r),s(),u(),n.trigger("init")};this.getItems=function(t,e){if(e){var r=e.split("."),n=r.splice(0,1);if(!r.length)return t[n];if(!t[n])return;return this.getItems(t[n],r.join("."))}return t},this.getSettings=function(e){return this.getItems(t,e)},this.setSettings=function(r,o,s){if(s||(s=t),"object"===(0,i.default)(r))return e.extend(s,r),n;var u=r.split("."),a=u.splice(0,1);return u.length?(s[a]||(s[a]={}),n.setSettings(u.join("."),o,s[a])):(s[a]=o,n)},this.getErrorMessage=function(t,e){var r;switch(t){case"forceMethodImplementation":r="The method '".concat(e,"' must to be implemented in the inheritor child.");break;default:r="An error occurs"}return r},this.forceMethodImplementation=function(t){throw new Error(this.getErrorMessage("forceMethodImplementation",t))},this.on=function(t,r){return"object"===(0,i.default)(t)?(e.each(t,(function(t){n.on(t,this)})),n):(t.split(" ").forEach((function(t){o[t]||(o[t]=[]),o[t].push(r)})),n)},this.off=function(t,e){if(!o[t])return n;if(!e)return delete o[t],n;var r=o[t].indexOf(e);return-1!==r&&(delete o[t][r],o[t]=o[t].filter((function(t){return t}))),n},this.trigger=function(t){var r="on"+t[0].toUpperCase()+t.slice(1),i=Array.prototype.slice.call(arguments,1);n[r]&&n[r].apply(n,i);var s=o[t];return s?(e.each(s,(function(t,e){e.apply(n,i)})),n):n},a()};s.prototype.__construct=function(){},s.prototype.getDefaultSettings=function(){return{}},s.prototype.getConstructorID=function(){return this.constructor.name},s.extend=function(t){var e=jQuery,r=this,n=function child(){return r.apply(this,arguments)};return e.extend(n,r),(n.prototype=(0,o.default)(e.extend({},r.prototype,t))).constructor=n,n.__super__=r.prototype,n},t.exports=s},6516:(t,e,r)=>{"use strict";var n=r(7971),o=n(r(4176)),i=n(r(2640));t.exports=i.default.extend({getDefaultSettings:function getDefaultSettings(){return{container:null,items:null,columnsCount:3,verticalSpaceBetween:30}},getDefaultElements:function getDefaultElements(){return{$container:jQuery(this.getSettings("container")),$items:jQuery(this.getSettings("items"))}},run:function run(){var t=[],e=this.elements.$container.position().top,r=this.getSettings(),n=r.columnsCount;e+=(0,o.default)(this.elements.$container.css("margin-top"),10),this.elements.$items.each((function(i){var s=Math.floor(i/n),u=jQuery(this),a=u[0].getBoundingClientRect().height+r.verticalSpaceBetween;if(s){var c=u.position(),l=i%n,f=c.top-e-t[l];f-=(0,o.default)(u.css("margin-top"),10),f*=-1,u.css("margin-top",f+"px"),t[l]+=a}else t.push(a)}))}})},400:(t,e,r)=>{"use strict";var n=r(7971);r(7394)(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(3493)),i=n(r(1959)),s=n(r(9041)),u=function(){function Scroll(){(0,i.default)(this,Scroll)}return(0,s.default)(Scroll,null,[{key:"scrollObserver",value:function scrollObserver(t){var e=0,r={root:t.root||null,rootMargin:t.offset||"0px",threshold:function buildThreshholds(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=[];if(t>0&&t<=100)for(var r=100/t,n=0;n<=100;n+=r)e.push(n/100);else e.push(0);return e}(t.sensitivity)};return new IntersectionObserver((function handleIntersect(r,n){var i=r[0].boundingClientRect.y,s=r[0].isIntersecting,u=i<e?"down":"up",a=Math.abs((0,o.default)((100*r[0].intersectionRatio).toFixed(2)));t.callback({sensitivity:t.sensitivity,isInViewport:s,scrollPercentage:a,intersectionScrollDirection:u}),e=i}),r)}},{key:"getElementViewportPercentage",value:function getElementViewportPercentage(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t[0].getBoundingClientRect(),n=e.start||0,i=e.end||0,s=window.innerHeight*n/100,u=window.innerHeight*i/100,a=r.top-window.innerHeight,c=r.top+s+t.height(),l=0-a+s,f=c-a+u,p=Math.max(0,Math.min(l/f,1));return(0,o.default)((100*p).toFixed(2))}},{key:"getPageScrollPercentage",value:function getPageScrollPercentage(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=t.start||0,n=t.end||0,o=e||document.documentElement.scrollHeight-document.documentElement.clientHeight,i=o*r/100,s=o+i+o*n/100,u=document.documentElement.scrollTop+document.body.scrollTop+i;return u/s*100}}]),Scroll}();e.default=u},2640:(t,e,r)=>{"use strict";var n=r(7971)(r(1192));t.exports=n.default.extend({elements:null,getDefaultElements:function getDefaultElements(){return{}},bindEvents:function bindEvents(){},onInit:function onInit(){this.initElements(),this.bindEvents()},initElements:function initElements(){this.elements=this.getDefaultElements()}})},5955:(t,e,r)=>{"use strict";var n=r(7971);r(7394)(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(1192)),i=n(r(2640)),s=n(r(2618)),u=n(r(6516)),a=n(r(400)),c=n(r(869)),l=window.elementorModules={Module:o.default,ViewModule:i.default,ArgsObject:s.default,ForceMethodImplementation:c.default,utils:{Masonry:u.default,Scroll:a.default}};e.default=l},2761:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},2094:(t,e,r)=>{var n=r(2190)("unscopables"),o=Array.prototype;null==o[n]&&r(4216)(o,n,{}),t.exports=function(t){o[n][t]=!0}},8492:(t,e,r)=>{"use strict";var n=r(2070)(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},6365:(t,e,r)=>{var n=r(7334);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},9021:(t,e,r)=>{var n=r(5703),o=r(6078),i=r(8615);t.exports=function(t){return function(e,r,s){var u,a=n(e),c=o(a.length),l=i(s,c);if(t&&r!=r){for(;c>l;)if((u=a[l++])!=u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===r)return t||l||0;return!t&&-1}}},8309:(t,e,r)=>{var n=r(1528),o=r(8467),i=r(6033),s=r(6078),u=r(3531);t.exports=function(t,e){var r=1==t,a=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f,v=e||u;return function(e,u,h){for(var d,g,y=i(e),m=o(y),x=n(u,h,3),S=s(m.length),_=0,b=r?v(e,S):a?v(e,0):void 0;S>_;_++)if((p||_ in m)&&(g=x(d=m[_],_,y),t))if(r)b[_]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return _;case 2:b.push(d)}else if(l)return!1;return f?-1:c||l?l:b}}},1071:(t,e,r)=>{var n=r(7334),o=r(9141),i=r(2190)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},3531:(t,e,r)=>{var n=r(1071);t.exports=function(t,e){return new(n(t))(e)}},106:(t,e,r)=>{var n=r(6688),o=r(2190)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:i?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},6688:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},66:t=>{var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},1528:(t,e,r)=>{var n=r(2761);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},1622:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},6628:(t,e,r)=>{t.exports=!r(8625)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},5050:(t,e,r)=>{var n=r(7334),o=r(8113).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},3603:t=>{t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},5772:(t,e,r)=>{var n=r(8113),o=r(66),i=r(4216),s=r(7738),u=r(1528),$export=function(t,e,r){var a,c,l,f,p=t&$export.F,v=t&$export.G,h=t&$export.S,d=t&$export.P,g=t&$export.B,y=v?n:h?n[e]||(n[e]={}):(n[e]||{}).prototype,m=v?o:o[e]||(o[e]={}),x=m.prototype||(m.prototype={});for(a in v&&(r=e),r)l=((c=!p&&y&&void 0!==y[a])?y:r)[a],f=g&&c?u(l,n):d&&"function"==typeof l?u(Function.call,l):l,y&&s(y,a,l,t&$export.U),m[a]!=l&&i(m,a,f),d&&x[a]!=l&&(x[a]=l)};n.core=o,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,t.exports=$export},6570:(t,e,r)=>{var n=r(2190)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},8625:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},8897:(t,e,r)=>{"use strict";r(5846);var n=r(7738),o=r(4216),i=r(8625),s=r(1622),u=r(2190),a=r(3288),c=u("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var p=u(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=v?!i((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[c]=function(){return r}),r[p](""),!e})):void 0;if(!v||!h||"replace"===t&&!l||"split"===t&&!f){var d=/./[p],g=r(s,p,""[t],(function maybeCallNative(t,e,r,n,o){return e.exec===a?v&&!o?{done:!0,value:d.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),y=g[0],m=g[1];n(String.prototype,t,y),o(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},4859:(t,e,r)=>{"use strict";var n=r(6365);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},646:(t,e,r)=>{t.exports=r(8655)("native-function-to-string",Function.toString)},8113:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},4040:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},4216:(t,e,r)=>{var n=r(8558),o=r(6061);t.exports=r(6628)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},8954:(t,e,r)=>{var n=r(8113).document;t.exports=n&&n.documentElement},5100:(t,e,r)=>{t.exports=!r(6628)&&!r(8625)((function(){return 7!=Object.defineProperty(r(5050)("div"),"a",{get:function(){return 7}}).a}))},8467:(t,e,r)=>{var n=r(6688);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},9141:(t,e,r)=>{var n=r(6688);t.exports=Array.isArray||function isArray(t){return"Array"==n(t)}},7334:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},6841:(t,e,r)=>{var n=r(7334),o=r(6688),i=r(2190)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},6445:(t,e,r)=>{"use strict";var n=r(5872),o=r(6061),i=r(5727),s={};r(4216)(s,r(2190)("iterator"),(function(){return this})),t.exports=function(t,e,r){t.prototype=n(s,{next:o(1,r)}),i(t,e+" Iterator")}},1195:(t,e,r)=>{"use strict";var n=r(1422),o=r(5772),i=r(7738),s=r(4216),u=r(3988),a=r(6445),c=r(5727),l=r(9002),f=r(2190)("iterator"),p=!([].keys&&"next"in[].keys()),v="keys",h="values",returnThis=function(){return this};t.exports=function(t,e,r,d,g,y,m){a(r,e,d);var x,S,_,getMethod=function(t){if(!p&&t in E)return E[t];switch(t){case v:return function keys(){return new r(this,t)};case h:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},b=e+" Iterator",w=g==h,O=!1,E=t.prototype,I=E[f]||E["@@iterator"]||g&&E[g],P=I||getMethod(g),j=g?w?getMethod("entries"):P:void 0,T="Array"==e&&E.entries||I;if(T&&(_=l(T.call(new t)))!==Object.prototype&&_.next&&(c(_,b,!0),n||"function"==typeof _[f]||s(_,f,returnThis)),w&&I&&I.name!==h&&(O=!0,P=function values(){return I.call(this)}),n&&!m||!p&&!O&&E[f]||s(E,f,P),u[e]=P,u[b]=returnThis,g)if(x={values:w?P:getMethod(h),keys:y?P:getMethod(v),entries:j},m)for(S in x)S in E||i(E,S,x[S]);else o(o.P+o.F*(p||O),e,x);return x}},5038:t=>{t.exports=function(t,e){return{value:e,done:!!t}}},3988:t=>{t.exports={}},1422:t=>{t.exports=!1},5872:(t,e,r)=>{var n=r(6365),o=r(7331),i=r(3603),s=r(8034)("IE_PROTO"),Empty=function(){},createDict=function(){var t,e=r(5050)("iframe"),n=i.length;for(e.style.display="none",r(8954).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),createDict=t.F;n--;)delete createDict.prototype[i[n]];return createDict()};t.exports=Object.create||function create(t,e){var r;return null!==t?(Empty.prototype=n(t),r=new Empty,Empty.prototype=null,r[s]=t):r=createDict(),void 0===e?r:o(r,e)}},8558:(t,e,r)=>{var n=r(6365),o=r(5100),i=r(1382),s=Object.defineProperty;e.f=r(6628)?Object.defineProperty:function defineProperty(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},7331:(t,e,r)=>{var n=r(8558),o=r(6365),i=r(2912);t.exports=r(6628)?Object.defineProperties:function defineProperties(t,e){o(t);for(var r,s=i(e),u=s.length,a=0;u>a;)n.f(t,r=s[a++],e[r]);return t}},9002:(t,e,r)=>{var n=r(4040),o=r(6033),i=r(8034)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},5547:(t,e,r)=>{var n=r(4040),o=r(5703),i=r(9021)(!1),s=r(8034)("IE_PROTO");t.exports=function(t,e){var r,u=o(t),a=0,c=[];for(r in u)r!=s&&n(u,r)&&c.push(r);for(;e.length>a;)n(u,r=e[a++])&&(~i(c,r)||c.push(r));return c}},2912:(t,e,r)=>{var n=r(5547),o=r(3603);t.exports=Object.keys||function keys(t){return n(t,o)}},6061:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7738:(t,e,r)=>{var n=r(8113),o=r(4216),i=r(4040),s=r(5078)("src"),u=r(646),a="toString",c=(""+u).split(a);r(66).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,r,u){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",e)),t[e]!==r&&(a&&(i(r,s)||o(r,s,t[e]?""+t[e]:c.join(String(e)))),t===n?t[e]=r:u?t[e]?t[e]=r:o(t,e,r):(delete t[e],o(t,e,r)))})(Function.prototype,a,(function toString(){return"function"==typeof this&&this[s]||u.call(this)}))},2404:(t,e,r)=>{"use strict";var n=r(106),o=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var i=r.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},3288:(t,e,r)=>{"use strict";var n,o,i=r(4859),s=RegExp.prototype.exec,u=String.prototype.replace,a=s,c=(n=/a/,o=/b*/g,s.call(n,"a"),s.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(c||l)&&(a=function exec(t){var e,r,n,o,a=this;return l&&(r=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),c&&(e=a.lastIndex),n=s.call(a,t),c&&n&&(a.lastIndex=a.global?n.index+n[0].length:e),l&&n&&n.length>1&&u.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=a},5727:(t,e,r)=>{var n=r(8558).f,o=r(4040),i=r(2190)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},8034:(t,e,r)=>{var n=r(8655)("keys"),o=r(5078);t.exports=function(t){return n[t]||(n[t]=o(t))}},8655:(t,e,r)=>{var n=r(66),o=r(8113),i="__core-js_shared__",s=o[i]||(o[i]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(1422)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},1987:(t,e,r)=>{var n=r(6365),o=r(2761),i=r(2190)("species");t.exports=function(t,e){var r,s=n(t).constructor;return void 0===s||null==(r=n(s)[i])?e:o(r)}},2070:(t,e,r)=>{var n=r(3338),o=r(1622);t.exports=function(t){return function(e,r){var i,s,u=String(o(e)),a=n(r),c=u.length;return a<0||a>=c?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):i:t?u.slice(a,a+2):s-56320+(i-55296<<10)+65536}}},465:(t,e,r)=>{var n=r(6841),o=r(1622);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},8615:(t,e,r)=>{var n=r(3338),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},3338:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},5703:(t,e,r)=>{var n=r(8467),o=r(1622);t.exports=function(t){return n(o(t))}},6078:(t,e,r)=>{var n=r(3338),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},6033:(t,e,r)=>{var n=r(1622);t.exports=function(t){return Object(n(t))}},1382:(t,e,r)=>{var n=r(7334);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},5078:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},2190:(t,e,r)=>{var n=r(8655)("wks"),o=r(5078),i=r(8113).Symbol,s="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=n},1954:(t,e,r)=>{"use strict";var n=r(5772),o=r(8309)(5),i="find",s=!0;i in[]&&Array(1).find((function(){s=!1})),n(n.P+n.F*s,"Array",{find:function find(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(2094)(i)},2897:(t,e,r)=>{"use strict";var n=r(2094),o=r(5038),i=r(3988),s=r(5703);t.exports=r(1195)(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])}),"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},9745:(t,e,r)=>{var n=r(8558).f,o=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in o||r(6628)&&n(o,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},6139:(t,e,r)=>{"use strict";var n=r(106),o={};o[r(2190)("toStringTag")]="z",o+""!="[object z]"&&r(7738)(Object.prototype,"toString",(function toString(){return"[object "+n(this)+"]"}),!0)},5846:(t,e,r)=>{"use strict";var n=r(3288);r(5772)({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},9236:(t,e,r)=>{"use strict";var n=r(6841),o=r(6365),i=r(1987),s=r(8492),u=r(6078),a=r(2404),c=r(3288),l=r(8625),f=Math.min,p=[].push,v=4294967295,h=!l((function(){RegExp(v,"y")}));r(8897)("split",2,(function(t,e,r,l){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(o,t,e);for(var i,s,u,a=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?v:e>>>0,d=new RegExp(t.source,l+"g");(i=c.call(d,o))&&!((s=d.lastIndex)>f&&(a.push(o.slice(f,i.index)),i.length>1&&i.index<o.length&&p.apply(a,i.slice(1)),u=i[0].length,f=s,a.length>=h));)d.lastIndex===i.index&&d.lastIndex++;return f===o.length?!u&&d.test("")||a.push(""):a.push(o.slice(f)),a.length>h?a.slice(0,h):a}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function split(r,n){var o=t(this),i=null==r?void 0:r[e];return void 0!==i?i.call(r,o,n):d.call(String(o),r,n)},function(t,e){var n=l(d,t,this,e,d!==r);if(n.done)return n.value;var c=o(t),p=String(this),g=i(c,RegExp),y=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),x=new g(h?c:"^(?:"+c.source+")",m),S=void 0===e?v:e>>>0;if(0===S)return[];if(0===p.length)return null===a(x,p)?[p]:[];for(var _=0,b=0,w=[];b<p.length;){x.lastIndex=h?b:0;var O,E=a(x,h?p:p.slice(b));if(null===E||(O=f(u(x.lastIndex+(h?0:b)),p.length))===_)b=s(p,b,y);else{if(w.push(p.slice(_,b)),w.length===S)return w;for(var I=1;I<=E.length-1;I++)if(w.push(E[I]),w.length===S)return w;b=_=O}}return w.push(p.slice(_)),w}]}))},3777:(t,e,r)=>{"use strict";var n=r(5772),o=r(465),i="includes";n(n.P+n.F*r(6570)(i),"String",{includes:function includes(t){return!!~o(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5942:(t,e,r)=>{"use strict";var n=r(5772),o=r(6078),i=r(465),s="startsWith",u="".startsWith;n(n.P+n.F*r(6570)(s),"String",{startsWith:function startsWith(t){var e=i(this,t,s),r=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return u?u.call(e,n,r):e.slice(r,r+n.length)===n}})},8081:(t,e,r)=>{"use strict";var n=r(5772),o=r(9021)(!0);n(n.P,"Array",{includes:function includes(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(2094)("includes")},3085:(t,e,r)=>{for(var n=r(2897),o=r(2912),i=r(7738),s=r(8113),u=r(4216),a=r(3988),c=r(2190),l=c("iterator"),f=c("toStringTag"),p=a.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(v),d=0;d<h.length;d++){var g,y=h[d],m=v[y],x=s[y],S=x&&x.prototype;if(S&&(S[l]||u(S,l,p),S[f]||u(S,f,y),a[y]=p,m))for(g in n)S[g]||i(S,g,n[g],!0)}}},0,[[6412,162]]]);;!function(){"use strict";function Waypoint(options){if(!options)throw new Error("No options passed to Waypoint constructor");if(!options.element)throw new Error("No element option passed to Waypoint constructor");if(!options.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+keyCounter,this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options),this.element=this.options.element,this.adapter=new Waypoint.Adapter(this.element),this.callback=options.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=Waypoint.Context.findOrCreateByElement(this.options.context),Waypoint.offsetAliases[this.options.offset]&&(this.options.offset=Waypoint.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),allWaypoints[this.key]=this,keyCounter+=1}var keyCounter=0,allWaypoints={};Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)},Waypoint.prototype.trigger=function(args){this.enabled&&this.callback&&this.callback.apply(this,args)},Waypoint.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete allWaypoints[this.key]},Waypoint.prototype.disable=function(){return this.enabled=!1,this},Waypoint.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},Waypoint.prototype.next=function(){return this.group.next(this)},Waypoint.prototype.previous=function(){return this.group.previous(this)},Waypoint.invokeAll=function(method){var allWaypointsArray=[];for(var waypointKey in allWaypoints)allWaypointsArray.push(allWaypoints[waypointKey]);for(var i=0,end=allWaypointsArray.length;i<end;i++)allWaypointsArray[i][method]()},Waypoint.destroyAll=function(){Waypoint.invokeAll("destroy")},Waypoint.disableAll=function(){Waypoint.invokeAll("disable")},Waypoint.enableAll=function(){Waypoint.Context.refreshAll();for(var waypointKey in allWaypoints)allWaypoints[waypointKey].enabled=!0;return this},Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()},Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},Waypoint.viewportWidth=function(){return document.documentElement.clientWidth},Waypoint.adapters=[],Waypoint.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},Waypoint.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=Waypoint}(),function(){"use strict";function requestAnimationFrameShim(callback){window.setTimeout(callback,1e3/60)}function Context(element){this.element=element,this.Adapter=Waypoint.Adapter,this.adapter=new this.Adapter(element),this.key="waypoint-context-"+keyCounter,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},element.waypointContextKey=this.key,contexts[element.waypointContextKey]=this,keyCounter+=1,Waypoint.windowContext||(Waypoint.windowContext=!0,Waypoint.windowContext=new Context(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var keyCounter=0,contexts={},Waypoint=window.Waypoint,oldWindowLoad=window.onload;Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?"horizontal":"vertical";this.waypoints[axis][waypoint.key]=waypoint,this.refresh()},Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal),verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical),isWindow=this.element==this.element.window;horizontalEmpty&&verticalEmpty&&!isWindow&&(this.adapter.off(".waypoints"),delete contexts[this.key])},Context.prototype.createThrottledResizeHandler=function(){function resizeHandler(){self.handleResize(),self.didResize=!1}var self=this;this.adapter.on("resize.waypoints",function(){self.didResize||(self.didResize=!0,Waypoint.requestAnimationFrame(resizeHandler))})},Context.prototype.createThrottledScrollHandler=function(){function scrollHandler(){self.handleScroll(),self.didScroll=!1}var self=this;this.adapter.on("scroll.waypoints",function(){self.didScroll&&!Waypoint.isTouch||(self.didScroll=!0,Waypoint.requestAnimationFrame(scrollHandler))})},Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()},Context.prototype.handleScroll=function(){var triggeredGroups={},axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var axisKey in axes){var axis=axes[axisKey],isForward=axis.newScroll>axis.oldScroll,direction=isForward?axis.forward:axis.backward;for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];if(null!==waypoint.triggerPoint){var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint,nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint,crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint,crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint;(crossedForward||crossedBackward)&&(waypoint.queueTrigger(direction),triggeredGroups[waypoint.group.id]=waypoint.group)}}}for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers();this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}},Context.prototype.innerHeight=function(){return this.element==this.element.window?Waypoint.viewportHeight():this.adapter.innerHeight()},Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key],this.checkEmpty()},Context.prototype.innerWidth=function(){return this.element==this.element.window?Waypoint.viewportWidth():this.adapter.innerWidth()},Context.prototype.destroy=function(){var allWaypoints=[];for(var axis in this.waypoints)for(var waypointKey in this.waypoints[axis])allWaypoints.push(this.waypoints[axis][waypointKey]);for(var i=0,end=allWaypoints.length;i<end;i++)allWaypoints[i].destroy()},Context.prototype.refresh=function(){var axes,isWindow=this.element==this.element.window,contextOffset=isWindow?void 0:this.adapter.offset(),triggeredGroups={};this.handleScroll(),axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var axisKey in axes){var axis=axes[axisKey];for(var waypointKey in this.waypoints[axisKey]){var contextModifier,wasBeforeScroll,nowAfterScroll,triggeredBackward,triggeredForward,waypoint=this.waypoints[axisKey][waypointKey],adjustment=waypoint.options.offset,oldTriggerPoint=waypoint.triggerPoint,elementOffset=0,freshWaypoint=null==oldTriggerPoint;waypoint.element!==waypoint.element.window&&(elementOffset=waypoint.adapter.offset()[axis.offsetProp]),"function"==typeof adjustment?adjustment=adjustment.apply(waypoint):"string"==typeof adjustment&&(adjustment=parseFloat(adjustment),waypoint.options.offset.indexOf("%")>-1&&(adjustment=Math.ceil(axis.contextDimension*adjustment/100))),contextModifier=axis.contextScroll-axis.contextOffset,waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment),wasBeforeScroll=oldTriggerPoint<axis.oldScroll,nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll,triggeredBackward=wasBeforeScroll&&nowAfterScroll,triggeredForward=!wasBeforeScroll&&!nowAfterScroll,!freshWaypoint&&triggeredBackward?(waypoint.queueTrigger(axis.backward),triggeredGroups[waypoint.group.id]=waypoint.group):!freshWaypoint&&triggeredForward?(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group):freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint&&(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group)}}return Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers()}),this},Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)},Context.refreshAll=function(){for(var contextId in contexts)contexts[contextId].refresh()},Context.findByElement=function(element){return contexts[element.waypointContextKey]},window.onload=function(){oldWindowLoad&&oldWindowLoad(),Context.refreshAll()},Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim;requestFn.call(window,callback)},Waypoint.Context=Context}(),function(){"use strict";function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}function Group(options){this.name=options.name,this.axis=options.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),groups[this.axis][this.name]=this}var groups={vertical:{},horizontal:{}},Waypoint=window.Waypoint;Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)},Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction],reverse="up"===direction||"left"===direction;waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint);for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i];(waypoint.options.continuous||i===waypoints.length-1)&&waypoint.trigger([direction])}}this.clearTriggerQueues()},Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints),isLast=index===this.waypoints.length-1;return isLast?null:this.waypoints[index+1]},Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);return index?this.waypoints[index-1]:null},Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)},Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);index>-1&&this.waypoints.splice(index,1)},Group.prototype.first=function(){return this.waypoints[0]},Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)},Waypoint.Group=Group}(),function(){"use strict";function JQueryAdapter(element){this.$element=$(element)}var $=window.jQuery,Waypoint=window.Waypoint;$.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments);return this.$element[method].apply(this.$element,args)}}),$.each(["extend","inArray","isEmptyObject"],function(i,method){JQueryAdapter[method]=$[method]}),Waypoint.adapters.push({name:"jquery",Adapter:JQueryAdapter}),Waypoint.Adapter=JQueryAdapter}(),function(){"use strict";function createExtension(framework){return function(){var waypoints=[],overrides=arguments[0];return framework.isFunction(arguments[0])&&(overrides=framework.extend({},arguments[1]),overrides.handler=arguments[0]),this.each(function(){var options=framework.extend({},overrides,{element:this});"string"==typeof options.context&&(options.context=framework(this).closest(options.context)[0]),waypoints.push(new Waypoint(options))}),waypoints}}var Waypoint=window.Waypoint;window.jQuery&&(window.jQuery.fn.elementorWaypoint=createExtension(window.jQuery)),window.Zepto&&(window.Zepto.fn.elementorWaypoint=createExtension(window.Zepto))}();/*! jQuery UI - v1.12.1 - 2020-09-25
* http://jqueryui.com
* Includes: data.js, disable-selection.js, escape-selector.js, focusable.js, form-reset-mixin.js, form.js, ie.js, jquery-1-7.js, keycode.js, labels.js, plugin.js, position.js, safe-active-element.js, safe-blur.js, scroll-parent.js, tabbable.js, unique-id.js, version.js, widget.js
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){var t,e,n,W,C,o,s,r,l,a,i,h;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function H(t,e){return parseInt(x.css(t,e),10)||0}x.ui=x.ui||{},x.ui.version="1.12.1",
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr[":"],{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),x.ui.escapeSelector=(e=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(t){return t.replace(e,"\\$1")}),
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s,r=t.nodeName.toLowerCase();return"area"===r?(n=(i=t.parentNode).name,!(!t.href||!n||"map"!==i.nodeName.toLowerCase())&&(0<(n=x("img[usemap='#"+n+"']")).length&&n.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(r)?(o=!t.disabled)&&(s=x(t).closest("fieldset")[0])&&(o=!s.disabled):o="a"===r&&t.href||e,o&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}(x(t)))},x.extend(x.expr[":"],{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element.form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
"1.7"===x.fn.jquery.substring(0,3)&&(x.each(["Width","Height"],function(t,i){var o="Width"===i?["Left","Right"]:["Top","Bottom"],n=i.toLowerCase(),s={innerWidth:x.fn.innerWidth,innerHeight:x.fn.innerHeight,outerWidth:x.fn.outerWidth,outerHeight:x.fn.outerHeight};function r(t,e,i,n){return x.each(o,function(){e-=parseFloat(x.css(t,"padding"+this))||0,i&&(e-=parseFloat(x.css(t,"border"+this+"Width"))||0),n&&(e-=parseFloat(x.css(t,"margin"+this))||0)}),e}x.fn["inner"+i]=function(t){return void 0===t?s["inner"+i].call(this):this.each(function(){x(this).css(n,r(this,t)+"px")})},x.fn["outer"+i]=function(t,e){return"number"!=typeof t?s["outer"+i].call(this,t):this.each(function(){x(this).css(n,r(this,t,!0,e)+"px")})}}),x.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.ui.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e))},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,i=x.fn.position,x.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,e=x("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),i=e.children()[0];return x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=x.isWindow(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){if(!f||!f.of)return i.apply(this,arguments);f=x.extend({},f);var u,d,p,g,m,t,v=x(f.of),b=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(b),y=(f.collision||"flip").split(" "),_={},e=9===(t=(e=v)[0]).nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:x.isWindow(t)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:t.preventDefault?{width:0,height:0,offset:{top:t.pageY,left:t.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()};return v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),u=E(_.at,d,p),m.left+=u[0],m.top+=u[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=H(this,"marginLeft"),n=H(this,"marginTop"),o=l+e+H(this,"marginRight")+w.width,s=a+n+H(this,"marginBottom")+w.height,h=x.extend({},m),c=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=c[0],h.top+=c[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[y[t]]&&x.ui.position[y[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[u[0]+c[0],u[1]+c[1]],my:f.my,at:f.at,within:b,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})},x.ui.position={fit:{left:function(t,e){var i=e.within,n=i.isWindow?i.scrollLeft:i.offset.left,o=i.width,s=t.left-e.collisionPosition.marginLeft,r=n-s,l=s+e.collisionWidth-o-n;e.collisionWidth>o?0<r&&l<=0?(i=t.left+r+e.collisionWidth-o-n,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?n+o-e.collisionWidth:n:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i=e.within,n=i.isWindow?i.scrollTop:i.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;e.collisionHeight>o?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,s=i.isWindow?i.scrollLeft:i.offset.left,r=t.left-e.collisionPosition.marginLeft,l=r-s,a=r+e.collisionWidth-o-s,h="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,i="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,r=-2*e.offset[0];l<0?((n=t.left+h+i+r+e.collisionWidth-o-n)<0||n<C(l))&&(t.left+=h+i+r):0<a&&(0<(s=t.left-e.collisionPosition.marginLeft+h+i+r-s)||C(s)<a)&&(t.left+=h+i+r)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,s=i.isWindow?i.scrollTop:i.offset.top,r=t.top-e.collisionPosition.marginTop,l=r-s,a=r+e.collisionHeight-o-s,h="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,i="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,r=-2*e.offset[1];l<0?((n=t.top+h+i+r+e.collisionHeight-o-n)<0||n<C(l))&&(t.top+=h+i+r):0<a&&(0<(s=t.top-e.collisionPosition.marginTop+h+i+r-s)||C(s)<a)&&(t.top+=h+i+r)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=!(i=i||e.body).nodeName?e.body:i},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr[":"],{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({uniqueId:(h=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++h)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
 2020-08-17 18:55 */
!function(a,b){"use strict";var c={widgetsTypes:{},createWidgetType:function(b,d,e){e||(e=this.Widget);var f=function(){e.apply(this,arguments)},g=f.prototype=new e(b);return g.types=g.types.concat([b]),a.extend(g,d),g.constructor=f,f.extend=function(a,b){return c.createWidgetType(a,b,f)},f},addWidgetType:function(a,b,c){return b&&b.prototype instanceof this.Widget?this.widgetsTypes[a]=b:this.widgetsTypes[a]=this.createWidgetType(a,b,c)},getWidgetType:function(a){return this.widgetsTypes[a]}};c.Instance=function(){var b=this,d={},e={},f=function(){d.body=a("body")},g=function(b){var c={classPrefix:"dialog",effects:{show:"fadeIn",hide:"fadeOut"}};a.extend(e,c,b)};this.createWidget=function(a,d){var e=c.getWidgetType(a),f=new e(a);return d=d||{},f.init(b,d),f},this.getSettings=function(a){return a?e[a]:Object.create(e)},this.init=function(a){return g(a),f(),b},b.init()},c.Widget=function(b){var d=this,e={},f={},g={},h=0,i=["refreshPosition"],j=function(){var a=[g.window];g.iframe&&a.push(jQuery(g.iframe[0].contentWindow)),a.forEach(function(a){e.hide.onEscKeyPress&&a.on("keyup",v),e.hide.onOutsideClick&&a[0].addEventListener("click",p,!0),e.hide.onOutsideContextMenu&&a[0].addEventListener("contextmenu",p,!0),e.position.autoRefresh&&a.on("resize",d.refreshPosition)}),(e.hide.onClick||e.hide.onBackgroundClick)&&g.widget.on("click",n)},k=function(b,c){var d=e.effects[b],f=g.widget;if(a.isFunction(d))d.apply(f,c);else{if(!f[d])throw"Reference Error: The effect "+d+" not found";f[d].apply(f,c)}},l=function(){var b=i.concat(d.getClosureMethods());a.each(b,function(){var a=this,b=d[a];d[a]=function(){b.apply(d,arguments)}})},m=function(a){if(a.my){var b=/left|right/,c=/([+-]\d+)?$/,d=g.iframe.offset(),e=g.iframe[0].contentWindow,f=a.my.split(" "),h=[];1===f.length&&(b.test(f[0])?f.push("center"):f.unshift("center")),f.forEach(function(a,b){var f=a.replace(c,function(a){return a=+a||0,a+=b?d.top-e.scrollY:d.left-e.scrollX,a>=0&&(a="+"+a),a});h.push(f)}),a.my=h.join(" ")}},n=function(b){if(!t(b)){if(e.hide.onClick){if(a(b.target).closest(e.selectors.preventClose).length)return}else if(b.target!==this)return;d.hide()}},o=function(b){return!!e.hide.ignore&&!!a(b.target).closest(e.hide.ignore).length},p=function(b){t(b)||a(b.target).closest(g.widget).length||o(b)||d.hide()},q=function(){if(d.addElement("widget"),d.addElement("header"),d.addElement("message"),d.addElement("window",window),d.addElement("body",document.body),d.addElement("container",e.container),e.iframe&&d.addElement("iframe",e.iframe),e.closeButton){e.closeButtonClass&&(e.closeButtonOptions.iconClass=e.closeButtonClass);const b=a("<div>",e.closeButtonOptions.attributes),c=a("<i>",{"class":e.closeButtonOptions.iconClass});b.append(c),d.addElement("closeButton",b)}var f=d.getSettings("id");f&&d.setID(f);var h=[];a.each(d.types,function(){h.push(e.classes.globalPrefix+"-type-"+this)}),h.push(d.getSettings("className")),g.widget.addClass(h.join(" "))},r=function(c,f){var g=a.extend(!0,{},c.getSettings());e={headerMessage:"",message:"",effects:g.effects,classes:{globalPrefix:g.classPrefix,prefix:g.classPrefix+"-"+b,preventScroll:g.classPrefix+"-prevent-scroll"},selectors:{preventClose:"."+g.classPrefix+"-prevent-close"},container:"body",preventScroll:!1,iframe:null,closeButton:!1,closeButtonOptions:{iconClass:g.classPrefix+"-close-button-icon",attributes:{}},position:{element:"widget",my:"center",at:"center",enable:!0,autoRefresh:!1},hide:{auto:!1,autoDelay:5e3,onClick:!1,onOutsideClick:!0,onOutsideContextMenu:!1,onBackgroundClick:!0,onEscKeyPress:!0,ignore:""}},a.extend(!0,e,d.getDefaultSettings(),f),s()},s=function(){a.each(e,function(a){var b=a.match(/^on([A-Z].*)/);b&&(b=b[1].charAt(0).toLowerCase()+b[1].slice(1),d.on(b,this))})},t=function(a){return"click"===a.type&&2===a.button},u=function(a){return a.replace(/([a-z])([A-Z])/g,function(){return arguments[1]+"-"+arguments[2].toLowerCase()})},v=function(a){var b=27,c=a.which;b===c&&d.hide()},w=function(){var a=[g.window];g.iframe&&a.push(jQuery(g.iframe[0].contentWindow)),a.forEach(function(a){e.hide.onEscKeyPress&&a.off("keyup",v),e.hide.onOutsideClick&&a[0].removeEventListener("click",p,!0),e.hide.onOutsideContextMenu&&a[0].removeEventListener("contextmenu",p,!0),e.position.autoRefresh&&a.off("resize",d.refreshPosition)}),(e.hide.onClick||e.hide.onBackgroundClick)&&g.widget.off("click",n)};this.addElement=function(b,c,d){var f=g[b]=a(c||"<div>"),h=u(b);return d=d?d+" ":"",d+=e.classes.globalPrefix+"-"+h,d+=" "+e.classes.prefix+"-"+h,f.addClass(d),f},this.destroy=function(){return w(),g.widget.remove(),d.trigger("destroy"),d},this.getElements=function(a){return a?g[a]:g},this.getSettings=function(a){var b=Object.create(e);return a?b[a]:b},this.hide=function(){if(d.isVisible())return clearTimeout(h),k("hide",arguments),w(),e.preventScroll&&d.getElements("body").removeClass(e.classes.preventScroll),d.trigger("hide"),d},this.init=function(a,b){if(!(a instanceof c.Instance))throw"The "+d.widgetName+" must to be initialized from an instance of DialogsManager.Instance";return l(),d.trigger("init",b),r(a,b),q(),d.buildWidget(),d.attachEvents(),d.trigger("ready"),d},this.isVisible=function(){return g.widget.is(":visible")},this.on=function(b,c){if("object"==typeof b)return a.each(b,function(a){d.on(a,this)}),d;var e=b.split(" ");return e.forEach(function(a){f[a]||(f[a]=[]),f[a].push(c)}),d},this.off=function(a,b){if(!f[a])return d;if(!b)return delete f[a],d;var c=f[a].indexOf(b);return-1!==c&&f[a].splice(c,1),d},this.refreshPosition=function(){if(e.position.enable){var b=a.extend({},e.position);g[b.of]&&(b.of=g[b.of]),b.of||(b.of=window),e.iframe&&m(b),g[b.element].position(b)}},this.setID=function(a){return g.widget.attr("id",a),d},this.setHeaderMessage=function(a){return d.getElements("header").html(a),d},this.setMessage=function(a){return g.message.html(a),d},this.setSettings=function(b,c){return jQuery.isPlainObject(c)?a.extend(!0,e[b],c):e[b]=c,d},this.show=function(){return clearTimeout(h),g.widget.appendTo(g.container).hide(),k("show",arguments),d.refreshPosition(),e.hide.auto&&(h=setTimeout(d.hide,e.hide.autoDelay)),j(),e.preventScroll&&d.getElements("body").addClass(e.classes.preventScroll),d.trigger("show"),d},this.trigger=function(b,c){var e="on"+b[0].toUpperCase()+b.slice(1);d[e]&&d[e](c);var g=f[b];if(g)return a.each(g,function(a,b){b.call(d,c)}),d}},c.Widget.prototype.types=[],c.Widget.prototype.buildWidget=function(){var a=this.getElements(),b=this.getSettings();a.widget.append(a.header,a.message),this.setHeaderMessage(b.headerMessage),this.setMessage(b.message),this.getSettings("closeButton")&&a.widget.prepend(a.closeButton)},c.Widget.prototype.attachEvents=function(){var a=this;a.getSettings("closeButton")&&a.getElements("closeButton").on("click",function(){a.hide()})},c.Widget.prototype.getDefaultSettings=function(){return{}},c.Widget.prototype.getClosureMethods=function(){return[]},c.Widget.prototype.onHide=function(){},c.Widget.prototype.onShow=function(){},c.Widget.prototype.onInit=function(){},c.Widget.prototype.onReady=function(){},c.widgetsTypes.simple=c.Widget,c.addWidgetType("buttons",{activeKeyUp:function(a){var b=9;a.which===b&&a.preventDefault(),this.hotKeys[a.which]&&this.hotKeys[a.which](this)},activeKeyDown:function(a){if(this.focusedButton){var b=9;if(a.which===b){a.preventDefault();var c,d=this.focusedButton.index();a.shiftKey?(c=d-1,c<0&&(c=this.buttons.length-1)):(c=d+1,c>=this.buttons.length&&(c=0)),this.focusedButton=this.buttons[c].focus()}}},addButton:function(b){var c=this,d=c.getSettings(),e=jQuery.extend(d.button,b),f=b.classes?b.classes+" ":"";f+=d.classes.globalPrefix+"-button";var g=c.addElement(b.name,a("<"+e.tag+">").html(b.text),f);c.buttons.push(g);var h=function(){d.hide.onButtonClick&&c.hide(),a.isFunction(b.callback)&&b.callback.call(this,c)};return g.on("click",h),b.hotKey&&(this.hotKeys[b.hotKey]=h),this.getElements("buttonsWrapper").append(g),b.focus&&(this.focusedButton=g),c},bindHotKeys:function(){this.getElements("window").on({keyup:this.activeKeyUp,keydown:this.activeKeyDown})},buildWidget:function(){c.Widget.prototype.buildWidget.apply(this,arguments);var a=this.addElement("buttonsWrapper");this.getElements("widget").append(a)},getClosureMethods:function(){return["activeKeyUp","activeKeyDown"]},getDefaultSettings:function(){return{hide:{onButtonClick:!0},button:{tag:"button"}}},onHide:function(){this.unbindHotKeys()},onInit:function(){this.buttons=[],this.hotKeys={},this.focusedButton=null},onShow:function(){this.bindHotKeys(),this.focusedButton||(this.focusedButton=this.buttons[0]),this.focusedButton&&this.focusedButton.focus()},unbindHotKeys:function(){this.getElements("window").off({keyup:this.activeKeyUp,keydown:this.activeKeyDown})}}),c.addWidgetType("lightbox",c.getWidgetType("buttons").extend("lightbox",{getDefaultSettings:function(){var b=c.getWidgetType("buttons").prototype.getDefaultSettings.apply(this,arguments);return a.extend(!0,b,{contentWidth:"auto",contentHeight:"auto",position:{element:"widgetContent",of:"widget",autoRefresh:!0}})},buildWidget:function(){c.getWidgetType("buttons").prototype.buildWidget.apply(this,arguments);var a=this.addElement("widgetContent"),b=this.getElements();a.append(b.header,b.message,b.buttonsWrapper),b.widget.html(a),b.closeButton&&a.prepend(b.closeButton)},onReady:function(){var a=this.getElements(),b=this.getSettings();"auto"!==b.contentWidth&&a.message.width(b.contentWidth),"auto"!==b.contentHeight&&a.message.height(b.contentHeight)}})),c.addWidgetType("confirm",c.getWidgetType("lightbox").extend("confirm",{onReady:function(){c.getWidgetType("lightbox").prototype.onReady.apply(this,arguments);var a=this.getSettings("strings"),b="cancel"===this.getSettings("defaultOption");this.addButton({name:"cancel",text:a.cancel,callback:function(a){a.trigger("cancel")},focus:b}),this.addButton({name:"ok",text:a.confirm,callback:function(a){a.trigger("confirm")},focus:!b})},getDefaultSettings:function(){var a=c.getWidgetType("lightbox").prototype.getDefaultSettings.apply(this,arguments);return a.strings={confirm:"OK",cancel:"Cancel"},a.defaultOption="cancel",a}})),c.addWidgetType("alert",c.getWidgetType("lightbox").extend("alert",{onReady:function(){c.getWidgetType("lightbox").prototype.onReady.apply(this,arguments);var a=this.getSettings("strings");this.addButton({name:"ok",text:a.confirm,callback:function(a){a.trigger("confirm")}})},getDefaultSettings:function(){var a=c.getWidgetType("lightbox").prototype.getDefaultSettings.apply(this,arguments);return a.strings={confirm:"OK"},a}})),b.DialogsManager=c}("undefined"!=typeof jQuery?jQuery:"function"==typeof require&&require("jquery"),"undefined"!=typeof module?module.exports:window);/*! elementor - v3.2.4 - 26-05-2021 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[819,637],{5453:(e,t,n)=>{e.exports=n(6802)},4680:(e,t,n)=>{e.exports=n(1792)},1888:(e,t,n)=>{e.exports=n(2555)},2009:(e,t,n)=>{e.exports=n(2771)},8923:(e,t,n)=>{e.exports=n(5948)},5657:(e,t,n)=>{e.exports=n(1995)},3220:(e,t,n)=>{e.exports=n(9485)},2292:e=>{e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},9479:(e,t,n)=>{var r=n(9396);e.exports=function _arrayWithHoles(e){if(r(e))return e}},9117:(e,t,n)=>{var r=n(3220);function asyncGeneratorStep(e,t,n,i,o,a,s){try{var l=e[a](s),u=l.value}catch(e){return void n(e)}l.done?t(u):r.resolve(u).then(i,o)}e.exports=function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new r((function(r,i){var o=e.apply(t,n);function _next(e){asyncGeneratorStep(o,r,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,r,i,_next,_throw,"throw",e)}_next(void 0)}))}}},9968:(e,t,n)=>{var r=n(4680),i=n(1888),o=n(1281);e.exports=function _iterableToArrayLimit(e,t){if(void 0!==o&&i(Object(e))){var n=[],a=!0,s=!1,l=void 0;try{for(var u,d=r(e);!(a=(u=d.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){s=!0,l=e}finally{try{a||null==d.return||d.return()}finally{if(s)throw l}}return n}}},9198:e=>{e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7834:(e,t,n)=>{var r=n(9479),i=n(9968),o=n(4594),a=n(9198);e.exports=function _slicedToArray(e,t){return r(e)||i(e,t)||o(e,t)||a()}},4594:(e,t,n)=>{var r=n(5453),i=n(2292);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?r(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}},6802:(e,t,n)=>{n(617),n(4494),e.exports=n(7252).Array.from},1792:(e,t,n)=>{n(414),n(617),e.exports=n(6055)},2555:(e,t,n)=>{n(414),n(617),e.exports=n(6887)},2771:(e,t,n)=>{var r=n(7252),i=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function stringify(e){return i.stringify.apply(i,arguments)}},5948:(e,t,n)=>{n(8061),e.exports=n(7252).Object.entries},1995:(e,t,n)=>{n(9762),e.exports=n(7252).Object.values},9485:(e,t,n)=>{n(8970),n(617),n(414),n(8949),n(8533),n(9838),e.exports=n(7252).Promise},2270:(e,t,n)=>{"use strict";var r=n(109),i=n(7923);e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},694:(e,t,n)=>{var r=n(7861)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},e(o)}catch(e){}return n}},7470:(e,t,n)=>{var r=n(3227),i=n(1982).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,l="process"==n(1539)(a);e.exports=function(){var e,t,n,flush=function(){var r,i;for(l&&(r=a.domain)&&r.exit();e;){i=e.fn,e=e.next;try{i()}catch(r){throw e?n():t=void 0,r}}t=void 0,r&&r.enter()};if(l)n=function(){a.nextTick(flush)};else if(!o||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(flush)}}else n=function(){i.call(r,flush)};else{var d=!0,c=document.createTextNode("");new o(flush).observe(c,{characterData:!0}),n=function(){c.data=d=!d}}return function(r){var i={fn:r,next:void 0};t&&(t.next=i),e||(e=i,n()),t=i}}},5e3:(e,t,n)=>{"use strict";var r=n(7370);function PromiseCapability(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)}e.exports.f=function(e){return new PromiseCapability(e)}},6786:(e,t,n)=>{var r=n(3752),i=n(1014),o=n(394),a=n(3866).f;e.exports=function(e){return function(t){for(var n,s=o(t),l=i(s),u=l.length,d=0,c=[];u>d;)n=l[d++],r&&!a.call(s,n)||c.push(e?[n,s[n]]:s[n]);return c}}},4754:e=>{e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},7338:(e,t,n)=>{var r=n(3451),i=n(9110),o=n(5e3);e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e);return(0,n.resolve)(t),n.promise}},6575:(e,t,n)=>{var r=n(3451),i=n(7370),o=n(7861)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[o])?t:i(n)}},1982:(e,t,n)=>{var r,i,o,a=n(9365),s=n(5808),l=n(7955),u=n(2264),d=n(3227),c=d.process,f=d.setImmediate,h=d.clearImmediate,v=d.MessageChannel,g=d.Dispatch,p=0,m={},y="onreadystatechange",run=function(){var e=+this;if(m.hasOwnProperty(e)){var t=m[e];delete m[e],t()}},listener=function(e){run.call(e.data)};f&&h||(f=function setImmediate(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return m[++p]=function(){s("function"==typeof e?e:Function(e),t)},r(p),p},h=function clearImmediate(e){delete m[e]},"process"==n(1539)(c)?r=function(e){c.nextTick(a(run,e,1))}:g&&g.now?r=function(e){g.now(a(run,e,1))}:v?(o=(i=new v).port2,i.port1.onmessage=listener,r=a(o.postMessage,o,1)):d.addEventListener&&"function"==typeof postMessage&&!d.importScripts?(r=function(e){d.postMessage(e+"","*")},d.addEventListener("message",listener,!1)):r=y in u("script")?function(e){l.appendChild(u("script")).onreadystatechange=function(){l.removeChild(this),run.call(e)}}:function(e){setTimeout(a(run,e,1),0)}),e.exports={set:f,clear:h}},1344:(e,t,n)=>{var r=n(3227).navigator;e.exports=r&&r.userAgent||""},6055:(e,t,n)=>{var r=n(3451),i=n(5937);e.exports=n(7252).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},6887:(e,t,n)=>{var r=n(8252),i=n(7861)("iterator"),o=n(8727);e.exports=n(7252).isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||o.hasOwnProperty(r(t))}},4494:(e,t,n)=>{"use strict";var r=n(9365),i=n(2570),o=n(5374),a=n(5224),s=n(652),l=n(3981),u=n(2270),d=n(5937);i(i.S+i.F*!n(694)((function(e){Array.from(e)})),"Array",{from:function from(e){var t,n,i,c,f=o(e),h="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,p=void 0!==g,m=0,y=d(f);if(p&&(g=r(g,v>2?arguments[2]:void 0,2)),null==y||h==Array&&s(y))for(n=new h(t=l(f.length));t>m;m++)u(n,m,p?g(f[m],m):f[m]);else for(c=y.call(f),n=new h;!(i=c.next()).done;m++)u(n,m,p?a(c,g,[i.value,m],!0):i.value);return n.length=m,n}})},8949:(e,t,n)=>{"use strict";var r,i,o,a,s=n(5401),l=n(3227),u=n(9365),d=n(8252),c=n(2570),f=n(9110),h=n(7370),v=n(944),g=n(2966),p=n(6575),m=n(1982).set,y=n(7470)(),k=n(5e3),b=n(4754),_=n(1344),w=n(7338),S="Promise",x=l.TypeError,C=l.process,E=C&&C.versions,L=E&&E.v8||"",A=l.Promise,M="process"==d(C),empty=function(){},D=i=k.f,F=!!function(){try{var e=A.resolve(1),t=(e.constructor={})[n(7861)("species")]=function(e){e(empty,empty)};return(M||"function"==typeof PromiseRejectionEvent)&&e.then(empty)instanceof t&&0!==L.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(e){}}(),isThenable=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},notify=function(e,t){if(!e._n){e._n=!0;var n=e._c;y((function(){for(var r=e._v,i=1==e._s,o=0,run=function(t){var n,o,a,s=i?t.ok:t.fail,l=t.resolve,u=t.reject,d=t.domain;try{s?(i||(2==e._h&&onHandleUnhandled(e),e._h=1),!0===s?n=r:(d&&d.enter(),n=s(r),d&&(d.exit(),a=!0)),n===t.promise?u(x("Promise-chain cycle")):(o=isThenable(n))?o.call(n,l,u):l(n)):u(r)}catch(e){d&&!a&&d.exit(),u(e)}};n.length>o;)run(n[o++]);e._c=[],e._n=!1,t&&!e._h&&onUnhandled(e)}))}},onUnhandled=function(e){m.call(l,(function(){var t,n,r,i=e._v,o=isUnhandled(e);if(o&&(t=b((function(){M?C.emit("unhandledRejection",i,e):(n=l.onunhandledrejection)?n({promise:e,reason:i}):(r=l.console)&&r.error&&r.error("Unhandled promise rejection",i)})),e._h=M||isUnhandled(e)?2:1),e._a=void 0,o&&t.e)throw t.v}))},isUnhandled=function(e){return 1!==e._h&&0===(e._a||e._c).length},onHandleUnhandled=function(e){m.call(l,(function(){var t;M?C.emit("rejectionHandled",e):(t=l.onrejectionhandled)&&t({promise:e,reason:e._v})}))},$reject=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),notify(t,!0))},$resolve=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw x("Promise can't be resolved itself");(t=isThenable(e))?y((function(){var r={_w:n,_d:!1};try{t.call(e,u($resolve,r,1),u($reject,r,1))}catch(e){$reject.call(r,e)}})):(n._v=e,n._s=1,notify(n,!1))}catch(e){$reject.call({_w:n,_d:!1},e)}}};F||(A=function Promise(e){v(this,A,S,"_h"),h(e),r.call(this);try{e(u($resolve,this,1),u($reject,this,1))}catch(e){$reject.call(this,e)}},(r=function Promise(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(3991)(A.prototype,{then:function then(e,t){var n=D(p(this,A));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=M?C.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&notify(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r;this.promise=e,this.resolve=u($resolve,e,1),this.reject=u($reject,e,1)},k.f=D=function(e){return e===A||e===a?new o(e):i(e)}),c(c.G+c.W+c.F*!F,{Promise:A}),n(2280)(A,S),n(4472)(S),a=n(7252).Promise,c(c.S+c.F*!F,S,{reject:function reject(e){var t=D(this);return(0,t.reject)(e),t.promise}}),c(c.S+c.F*(s||!F),S,{resolve:function resolve(e){return w(s&&this===a?A:this,e)}}),c(c.S+c.F*!(F&&n(694)((function(e){A.all(e).catch(empty)}))),S,{all:function all(e){var t=this,n=D(t),r=n.resolve,i=n.reject,o=b((function(){var n=[],o=0,a=1;g(e,!1,(function(e){var s=o++,l=!1;n.push(void 0),a++,t.resolve(e).then((function(e){l||(l=!0,n[s]=e,--a||r(n))}),i)})),--a||r(n)}));return o.e&&i(o.v),n.promise},race:function race(e){var t=this,n=D(t),r=n.reject,i=b((function(){g(e,!1,(function(e){t.resolve(e).then(n.resolve,r)}))}));return i.e&&r(i.v),n.promise}})},8061:(e,t,n)=>{var r=n(2570),i=n(6786)(!0);r(r.S,"Object",{entries:function entries(e){return i(e)}})},9762:(e,t,n)=>{var r=n(2570),i=n(6786)(!1);r(r.S,"Object",{values:function values(e){return i(e)}})},8533:(e,t,n)=>{"use strict";var r=n(2570),i=n(7252),o=n(3227),a=n(6575),s=n(7338);r(r.P+r.R,"Promise",{finally:function(e){var t=a(this,i.Promise||o.Promise),n="function"==typeof e;return this.then(n?function(n){return s(t,e()).then((function(){return n}))}:e,n?function(n){return s(t,e()).then((function(){throw n}))}:e)}})},9838:(e,t,n)=>{"use strict";var r=n(2570),i=n(5e3),o=n(4754);r(r.S,"Promise",{try:function(e){var t=i.f(this),n=o(e);return(n.e?t.reject:t.resolve)(n.v),t.promise}})},7135:(e,t,n)=>{e.exports=n(6248)},9220:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1959)),o=r(n(9041)),a=r(n(7371)),s=r(n(8537)),l=r(n(8135)),u=function(e){(0,a.default)(_default,e);var t=(0,s.default)(_default);function _default(){var e;(0,i.default)(this,_default);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).documents={},e.initDocumentClasses(),e.attachDocumentsClasses(),e}return(0,o.default)(_default,[{key:"getDefaultSettings",value:function getDefaultSettings(){return{selectors:{document:".elementor"}}}},{key:"getDefaultElements",value:function getDefaultElements(){var e=this.getSettings("selectors");return{$documents:jQuery(e.document)}}},{key:"initDocumentClasses",value:function initDocumentClasses(){this.documentClasses={base:l.default},elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes",this)}},{key:"addDocumentClass",value:function addDocumentClass(e,t){this.documentClasses[e]=t}},{key:"attachDocumentsClasses",value:function attachDocumentsClasses(){var e=this;this.elements.$documents.each((function(t,n){return e.attachDocumentClass(jQuery(n))}))}},{key:"attachDocumentClass",value:function attachDocumentClass(e){var t=e.data(),n=t.elementorId,r=t.elementorType,i=this.documentClasses[r]||this.documentClasses.base;this.documents[n]=new i({$element:e,id:n})}}]),_default}(elementorModules.ViewModule);t.default=u},9804:(e,t,n)=>{"use strict";var r=n(7971),i=r(n(9396)),o=r(n(3220));n(9236);var a=r(n(6397)),s=r(n(9320)),l=r(n(7537));e.exports=function(e){var t=this,r={};this.elementsHandlers={"accordion.default":function accordionDefault(){return n.e(209).then(n.t.bind(n,8470,7))},"alert.default":function alertDefault(){return n.e(745).then(n.t.bind(n,9269,7))},"counter.default":function counterDefault(){return n.e(120).then(n.t.bind(n,7884,7))},"progress.default":function progressDefault(){return n.e(192).then(n.t.bind(n,1351,7))},"tabs.default":function tabsDefault(){return n.e(520).then(n.t.bind(n,9459,7))},"toggle.default":function toggleDefault(){return n.e(181).then(n.t.bind(n,2,7))},"video.default":function videoDefault(){return Promise.all([n.e(637),n.e(791)]).then(n.t.bind(n,5363,7))},"image-carousel.default":function imageCarouselDefault(){return Promise.all([n.e(637),n.e(268)]).then(n.t.bind(n,5914,7))},"text-editor.default":function textEditorDefault(){return n.e(357).then(n.t.bind(n,1327,7))}};var u=function isClassHandler(e){return e.prototype.getUniqueHandlerID};this.addHandler=function(e,t){var n,i=t.$element.data("model-cid");if(i){n=e.prototype.getConstructorID(),r[i]||(r[i]={});var o=r[i][n];o&&o.onDestroy()}var a=new e(t);i&&(r[i][n]=a)},this.attachHandler=function(e,n,r){(0,i.default)(n)||(n=[n]),n.forEach((function(n){return function addHandlerWithHook(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";r=r?"."+r:"",elementorFrontend.hooks.addAction("frontend/element_ready/".concat(e).concat(r),(function(e){if(u(n))t.addHandler(n,{$element:e},!0);else{var r=n();r instanceof o.default?r.then((function(n){var r=n.default;t.addHandler(r,{$element:e},!0)})):t.addHandler(r,{$element:e},!0)}}))}(e,n,r)}))},this.getHandler=function(e){if(e){var t=this.elementsHandlers[e];return u(t)?t:new o.default((function(e){t().then((function(t){var n=t.default;e(n)}))}))}},this.getHandlers=function(e){return elementorCommon.helpers.softDeprecated("getHandlers","3.1.0","elementorFrontend.elementsHandler.getHandler"),e?this.getHandler(e):this.elementsHandlers},this.runReadyTrigger=function(t){if(!elementorFrontend.config.is_static){var n=jQuery(t),r=n.attr("data-element_type");r&&(elementorFrontend.hooks.doAction("frontend/element_ready/global",n,e),elementorFrontend.hooks.doAction("frontend/element_ready/"+r,n,e),"widget"===r&&elementorFrontend.hooks.doAction("frontend/element_ready/"+n.attr("data-widget_type"),n,e))}},this.init=function(){!function addGlobalHandlers(){elementorFrontend.hooks.addAction("frontend/element_ready/global",a.default)}(),function addElementsHandlers(){t.elementsHandlers.section=s.default,t.elementsHandlers.column=l.default,e.each(t.elementsHandlers,(function(e,n){var r=e.split(".");e=r[0];var i=r[1]||null;t.attachHandler(e,n,i)}))}()}}},5654:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(7834)),o=r(n(8923));n(1954),n(4208);var a=r(n(1959)),s=r(n(9041)),l=r(n(7371)),u=r(n(8537));n(59);var d=r(n(9220)),c=r(n(5107)),f=r(n(3308)),h=r(n(1604)),v=r(n(1911)),g=r(n(2064)),p=r(n(7139)),m=r(n(8646)),y=r(n(6866)),k=r(n(6046)),b=n(9469),_=n(9804),w=n(3346),S=function(e){(0,l.default)(Frontend,e);var t=(0,u.default)(Frontend);function Frontend(){var e;(0,a.default)(this,Frontend);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).config=elementorFrontendConfig,e.config.legacyMode={get elementWrappers(){return elementorFrontend.isEditMode()&&elementorCommon.helpers.hardDeprecated("elementorFrontend.config.legacyMode.elementWrappers","3.1.0","elementorFrontend.config.experimentalFeatures.e_dom_optimization"),!elementorFrontend.config.experimentalFeatures.e_dom_optimization}},e.populateActiveBreakpointsConfig(),e}return(0,s.default)(Frontend,[{key:"getDefaultSettings",value:function getDefaultSettings(){return{selectors:{elementor:".elementor",adminBar:"#wpadminbar"},classes:{ie:"elementor-msie"}}}},{key:"getDefaultElements",value:function getDefaultElements(){var e={window,$window:jQuery(window),$document:jQuery(document),$head:jQuery(document.head),$body:jQuery(document.body),$deviceMode:jQuery("<span>",{id:"elementor-device-mode",class:"elementor-screen-only"})};return e.$body.append(e.$deviceMode),e}},{key:"bindEvents",value:function bindEvents(){var e=this;this.elements.$window.on("resize",(function(){return e.setDeviceModeData()}))}},{key:"getElements",value:function getElements(e){return this.getItems(this.elements,e)}},{key:"getPageSettings",value:function getPageSettings(e){var t=this.isEditMode()?elementor.settings.page.model.attributes:this.config.settings.page;return this.getItems(t,e)}},{key:"getGeneralSettings",value:function getGeneralSettings(e){return this.isEditMode()&&parent.elementorCommon.helpers.softDeprecated("getGeneralSettings","3.0.0","getKitSettings and remove the `elementor_` prefix"),this.getKitSettings("elementor_".concat(e))}},{key:"getKitSettings",value:function getKitSettings(e){return this.getItems(this.config.kit,e)}},{key:"getCurrentDeviceMode",value:function getCurrentDeviceMode(){return getComputedStyle(this.elements.$deviceMode[0],":after").content.replace(/"/g,"")}},{key:"getDeviceSetting",value:function getDeviceSetting(e,t,n){for(var r=["desktop","tablet","mobile"],i=r.indexOf(e);i>0;){var o=t[n+"_"+r[i]];if(o)return o;i--}return t[n]}},{key:"getCurrentDeviceSetting",value:function getCurrentDeviceSetting(e,t){return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(),e,t)}},{key:"isEditMode",value:function isEditMode(){return this.config.environmentMode.edit}},{key:"isWPPreviewMode",value:function isWPPreviewMode(){return this.config.environmentMode.wpPreview}},{key:"initDialogsManager",value:function initDialogsManager(){var e;this.getDialogsManager=function(){return e||(e=new DialogsManager.Instance),e}}},{key:"initOnReadyComponents",value:function initOnReadyComponents(){var e=this;this.utils={youtube:new h.default,vimeo:new v.default,anchors:new w,get lightbox(){return m.default.getLightbox()},urlActions:new g.default,swiper:p.default,environment:f.default,assetsLoader:new y.default},this.modules={StretchElement:elementorModules.frontend.tools.StretchElement,Masonry:elementorModules.utils.Masonry},this.elementsHandler.init(),this.isEditMode()?elementor.once("document:loaded",(function(){return e.onDocumentLoaded()})):this.onDocumentLoaded()}},{key:"initOnReadyElements",value:function initOnReadyElements(){this.elements.$wpAdminBar=this.elements.$document.find(this.getSettings("selectors.adminBar"))}},{key:"addUserAgentClasses",value:function addUserAgentClasses(){for(var e=0,t=(0,o.default)(f.default);e<t.length;e++){var n=(0,i.default)(t[e],2),r=n[0];n[1]&&this.elements.$body.addClass("e--ua-"+r)}}},{key:"addIeCompatibility",value:function addIeCompatibility(){var e="string"==typeof document.createElement("div").style.grid;if(f.default.ie||!e){this.elements.$body.addClass(this.getSettings("classes.ie"));var t='<link rel="stylesheet" id="elementor-frontend-css-msie" href="'+this.config.urls.assets+"css/frontend-msie.min.css?"+this.config.version+'" type="text/css" />';this.elements.$body.append(t)}}},{key:"setDeviceModeData",value:function setDeviceModeData(){this.elements.$body.attr("data-elementor-device-mode",this.getCurrentDeviceMode())}},{key:"addListenerOnce",value:function addListenerOnce(e,t,n,r){if(r||(r=this.elements.$window),this.isEditMode())if(this.removeListeners(e,t,r),r instanceof jQuery){var i=t+"."+e;r.on(i,n)}else r.on(t,n,e);else r.on(t,n)}},{key:"removeListeners",value:function removeListeners(e,t,n,r){if(r||(r=this.elements.$window),r instanceof jQuery){var i=t+"."+e;r.off(i,n)}else r.off(t,n,e)}},{key:"debounce",value:function debounce(e,t){var n;return function(){var r=this,i=arguments,o=function later(){n=null,e.apply(r,i)},a=!n;clearTimeout(n),n=setTimeout(o,t),a&&e.apply(r,i)}}},{key:"waypoint",value:function waypoint(e,t,n){n=jQuery.extend({offset:"100%",triggerOnce:!0},n);return e.elementorWaypoint((function correctCallback(){var e=this.element||this,r=t.apply(e,arguments);return n.triggerOnce&&this.destroy&&this.destroy(),r}),n)}},{key:"muteMigrationTraces",value:function muteMigrationTraces(){jQuery.migrateMute=!0,jQuery.migrateTrace=!1}},{key:"initModules",value:function initModules(){var e=this,t={shapes:k.default};elementorFrontend.trigger("elementor/modules/init:before"),(0,o.default)(t).forEach((function(t){var n=(0,i.default)(t,2),r=n[0],o=n[1];e.modulesHandlers[r]=new o}))}},{key:"populateActiveBreakpointsConfig",value:function populateActiveBreakpointsConfig(){var e=this;this.config.responsive.activeBreakpoints={},(0,o.default)(this.config.responsive.breakpoints).forEach((function(t){var n=(0,i.default)(t,2),r=n[0],o=n[1];o.is_enabled&&(e.config.responsive.activeBreakpoints[r]=o)}))}},{key:"init",value:function init(){this.hooks=new b,this.storage=new c.default,this.elementsHandler=new _(jQuery),this.modulesHandlers={},this.addUserAgentClasses(),this.addIeCompatibility(),this.setDeviceModeData(),this.initDialogsManager(),this.isEditMode()&&this.muteMigrationTraces(),this.elements.$window.trigger("elementor/frontend/init"),this.initModules(),this.initOnReadyElements(),this.initOnReadyComponents()}},{key:"onDocumentLoaded",value:function onDocumentLoaded(){this.documentsManager=new d.default,this.trigger("components:init"),new m.default}},{key:"Module",get:function get(){return this.isEditMode()&&parent.elementorCommon.helpers.hardDeprecated("elementorFrontend.Module","2.5.0","elementorModules.frontend.handlers.Base"),elementorModules.frontend.handlers.Base}}]),Frontend}(elementorModules.ViewModule);t.default=S,window.elementorFrontend=new S,elementorFrontend.isEditMode()||jQuery((function(){return elementorFrontend.init()}))},4058:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(7135));n(6248);var o=r(n(9117)),a=r(n(1959)),s=r(n(9041)),l=r(n(6700)),u=r(n(4263)),d=r(n(7371)),c=r(n(8537)),f=function(e){(0,d.default)(BackgroundSlideshow,e);var t,n=(0,c.default)(BackgroundSlideshow);function BackgroundSlideshow(){return(0,a.default)(this,BackgroundSlideshow),n.apply(this,arguments)}return(0,s.default)(BackgroundSlideshow,[{key:"getDefaultSettings",value:function getDefaultSettings(){return{classes:{swiperContainer:"elementor-background-slideshow swiper-container",swiperWrapper:"swiper-wrapper",swiperSlide:"elementor-background-slideshow__slide swiper-slide",slideBackground:"elementor-background-slideshow__slide__image",kenBurns:"elementor-ken-burns",kenBurnsActive:"elementor-ken-burns--active",kenBurnsIn:"elementor-ken-burns--in",kenBurnsOut:"elementor-ken-burns--out"}}}},{key:"getSwiperOptions",value:function getSwiperOptions(){var e=this,t=this.getElementSettings(),n={grabCursor:!1,slidesPerView:1,slidesPerGroup:1,loop:"yes"===t.background_slideshow_loop,speed:t.background_slideshow_transition_duration,autoplay:{delay:t.background_slideshow_slide_duration,stopOnLastSlide:!t.background_slideshow_loop},handleElementorBreakpoints:!0,on:{slideChange:function slideChange(){t.background_slideshow_ken_burns&&e.handleKenBurns()}}};switch("yes"===t.background_slideshow_loop&&(n.loopedSlides=this.getSlidesCount()),t.background_slideshow_slide_transition){case"fade":n.effect="fade",n.fadeEffect={crossFade:!0};break;case"slide_down":n.autoplay.reverseDirection=!0;case"slide_up":n.direction="vertical"}return n}},{key:"buildSwiperElements",value:function buildSwiperElements(){var e=this,t=this.getSettings("classes"),n=this.getElementSettings(),r="slide_left"===n.background_slideshow_slide_transition?"ltr":"rtl",i=jQuery("<div>",{class:t.swiperContainer,dir:r}),o=jQuery("<div>",{class:t.swiperWrapper}),a=n.background_slideshow_ken_burns,s=t.slideBackground;if(a){s+=" "+t.kenBurns;var l="in"===n.background_slideshow_ken_burns_zoom_direction?"kenBurnsIn":"kenBurnsOut";s+=" "+t[l]}this.elements.$slides=jQuery(),n.background_slideshow_gallery.forEach((function(n){var r=jQuery("<div>",{class:t.swiperSlide}),i=jQuery("<div>",{class:s,style:'background-image: url("'+n.url+'");'});r.append(i),o.append(r),e.elements.$slides=e.elements.$slides.add(r)})),i.append(o),this.$element.prepend(i),this.elements.$backgroundSlideShowContainer=i}},{key:"initSlider",value:(t=(0,o.default)(i.default.mark((function _callee(){var e,t;return i.default.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(!(1>=this.getSlidesCount())){n.next=2;break}return n.abrupt("return");case 2:return e=this.getElementSettings(),t=elementorFrontend.utils.swiper,n.next=6,new t(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions());case 6:this.swiper=n.sent,this.elements.$backgroundSlideShowContainer.data("swiper",this.swiper),e.background_slideshow_ken_burns&&this.handleKenBurns();case 9:case"end":return n.stop()}}),_callee,this)}))),function initSlider(){return t.apply(this,arguments)})},{key:"activate",value:function activate(){this.buildSwiperElements(),this.initSlider()}},{key:"deactivate",value:function deactivate(){this.swiper&&(this.swiper.destroy(),this.elements.$backgroundSlideShowContainer.remove())}},{key:"run",value:function run(){"slideshow"===this.getElementSettings("background_background")?this.activate():this.deactivate()}},{key:"onInit",value:function onInit(){(0,l.default)((0,u.default)(BackgroundSlideshow.prototype),"onInit",this).call(this),this.getElementSettings("background_slideshow_gallery")&&this.run()}},{key:"onDestroy",value:function onDestroy(){(0,l.default)((0,u.default)(BackgroundSlideshow.prototype),"onDestroy",this).call(this),this.deactivate()}},{key:"onElementChange",value:function onElementChange(e){"background_background"===e&&this.run()}}]),BackgroundSlideshow}(elementorModules.frontend.handlers.SwiperBase);t.default=f},7537:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=[r(n(4058)).default];t.default=i},6397:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1959)),o=r(n(9041)),a=r(n(6700)),s=r(n(4263)),l=r(n(7371)),u=r(n(8537)),d=function(e){(0,l.default)(GlobalHandler,e);var t=(0,u.default)(GlobalHandler);function GlobalHandler(){return(0,i.default)(this,GlobalHandler),t.apply(this,arguments)}return(0,o.default)(GlobalHandler,[{key:"getWidgetType",value:function getWidgetType(){return"global"}},{key:"animate",value:function animate(){var e=this.$element,t=this.getAnimation();if("none"!==t){var n=this.getElementSettings(),r=n._animation_delay||n.animation_delay||0;e.removeClass(t),this.currentAnimation&&e.removeClass(this.currentAnimation),this.currentAnimation=t,setTimeout((function(){e.removeClass("elementor-invisible").addClass("animated "+t)}),r)}else e.removeClass("elementor-invisible")}},{key:"getAnimation",value:function getAnimation(){return this.getCurrentDeviceSetting("animation")||this.getCurrentDeviceSetting("_animation")}},{key:"onInit",value:function onInit(){for(var e,t=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];(e=(0,a.default)((0,s.default)(GlobalHandler.prototype),"onInit",this)).call.apply(e,[this].concat(r)),this.getAnimation()&&elementorFrontend.waypoint(this.$element,(function(){return t.animate()}))}},{key:"onElementChange",value:function onElementChange(e){/^_?animation/.test(e)&&this.animate()}}]),GlobalHandler}(elementorModules.frontend.handlers.Base);t.default=function _default(e){elementorFrontend.elementsHandler.addHandler(d,{$element:e})}},2987:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0,n(4828),n(9236),n(1954);var i=r(n(1959)),o=r(n(9041)),a=r(n(6700)),s=r(n(4263)),l=r(n(7371)),u=r(n(8537)),d=function(e){(0,l.default)(BackgroundVideo,e);var t=(0,u.default)(BackgroundVideo);function BackgroundVideo(){return(0,i.default)(this,BackgroundVideo),t.apply(this,arguments)}return(0,o.default)(BackgroundVideo,[{key:"getDefaultSettings",value:function getDefaultSettings(){return{selectors:{backgroundVideoContainer:".elementor-background-video-container",backgroundVideoEmbed:".elementor-background-video-embed",backgroundVideoHosted:".elementor-background-video-hosted"}}}},{key:"getDefaultElements",value:function getDefaultElements(){var e=this.getSettings("selectors"),t={$backgroundVideoContainer:this.$element.find(e.backgroundVideoContainer)};return t.$backgroundVideoEmbed=t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),t.$backgroundVideoHosted=t.$backgroundVideoContainer.children(e.backgroundVideoHosted),t}},{key:"calcVideosSize",value:function calcVideosSize(e){var t="16:9";"vimeo"===this.videoType&&(t=e[0].width+":"+e[0].height);var n=this.elements.$backgroundVideoContainer.outerWidth(),r=this.elements.$backgroundVideoContainer.outerHeight(),i=t.split(":"),o=i[0]/i[1],a=n/r>o;return{width:a?n:r*o,height:a?n/o:r}}},{key:"changeVideoSize",value:function changeVideoSize(){var e;if(("hosted"===this.videoType||this.player)&&("youtube"===this.videoType?e=jQuery(this.player.getIframe()):"vimeo"===this.videoType?e=jQuery(this.player.element):"hosted"===this.videoType&&(e=this.elements.$backgroundVideoHosted),e)){var t=this.calcVideosSize(e);e.width(t.width).height(t.height)}}},{key:"startVideoLoop",value:function startVideoLoop(e){var t=this;if(this.player.getIframe().contentWindow){var n=this.getElementSettings(),r=n.background_video_start||0,i=n.background_video_end;if(!n.background_play_once||e){if(this.player.seekTo(r),i)setTimeout((function(){t.startVideoLoop(!1)}),1e3*(i-r+1))}else this.player.stopVideo()}}},{key:"prepareVimeoVideo",value:function prepareVimeoVideo(e,t){var n=this,r=this.getElementSettings(),i=(r.background_video_start&&r.background_video_start,{id:t,width:this.elements.$backgroundVideoContainer.outerWidth().width,autoplay:!0,loop:!r.background_play_once,transparent:!1,background:!0,muted:!0});this.player=new e.Player(this.elements.$backgroundVideoContainer,i),this.handleVimeoStartEndTimes(r),this.player.ready().then((function(){jQuery(n.player.element).addClass("elementor-background-video-embed"),n.changeVideoSize()}))}},{key:"handleVimeoStartEndTimes",value:function handleVimeoStartEndTimes(e){var t=this;e.background_video_start&&this.player.on("play",(function(n){0===n.seconds&&t.player.setCurrentTime(e.background_video_start)})),this.player.on("timeupdate",(function(n){e.background_video_end&&e.background_video_end<n.seconds&&(e.background_play_once?t.player.pause():t.player.setCurrentTime(e.background_video_start)),t.player.getDuration().then((function(r){e.background_video_start&&!e.background_video_end&&n.seconds>r-.5&&t.player.setCurrentTime(e.background_video_start)}))}))}},{key:"prepareYTVideo",value:function prepareYTVideo(e,t){var n=this,r=this.elements.$backgroundVideoContainer,i=this.getElementSettings(),o=e.PlayerState.PLAYING;window.chrome&&(o=e.PlayerState.UNSTARTED);var a={videoId:t,events:{onReady:function onReady(){n.player.mute(),n.changeVideoSize(),n.startVideoLoop(!0),n.player.playVideo()},onStateChange:function onStateChange(t){switch(t.data){case o:r.removeClass("elementor-invisible elementor-loading");break;case e.PlayerState.ENDED:n.player.seekTo(i.background_video_start||0),i.background_play_once&&n.player.destroy()}}},playerVars:{controls:0,rel:0,playsinline:1}};i.background_privacy_mode&&(a.host="https://www.youtube-nocookie.com",a.origin=window.location.hostname),r.addClass("elementor-loading elementor-invisible"),this.player=new e.Player(this.elements.$backgroundVideoEmbed[0],a)}},{key:"activate",value:function activate(){var e,t=this,n=this.getElementSettings("background_video_link"),r=this.getElementSettings("background_play_once");if(-1!==n.indexOf("vimeo.com")?(this.videoType="vimeo",this.apiProvider=elementorFrontend.utils.vimeo):n.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)&&(this.videoType="youtube",this.apiProvider=elementorFrontend.utils.youtube),this.apiProvider)e=this.apiProvider.getVideoIDFromURL(n),this.apiProvider.onApiReady((function(n){"youtube"===t.videoType&&t.prepareYTVideo(n,e),"vimeo"===t.videoType&&t.prepareVimeoVideo(n,e)}));else{this.videoType="hosted";var i=this.getElementSettings("background_video_start"),o=this.getElementSettings("background_video_end");(i||o)&&(n+="#t="+(i||0)+(o?","+o:"")),this.elements.$backgroundVideoHosted.attr("src",n).one("canplay",this.changeVideoSize.bind(this)),r&&this.elements.$backgroundVideoHosted.on("ended",(function(){t.elements.$backgroundVideoHosted.hide()}))}elementorFrontend.elements.$window.on("resize",this.changeVideoSize)}},{key:"deactivate",value:function deactivate(){"youtube"===this.videoType&&this.player.getIframe()||"vimeo"===this.videoType?this.player.destroy():this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),elementorFrontend.elements.$window.off("resize",this.changeVideoSize)}},{key:"run",value:function run(){var e=this.getElementSettings();(e.background_play_on_mobile||"mobile"!==elementorFrontend.getCurrentDeviceMode())&&("video"===e.background_background&&e.background_video_link?this.activate():this.deactivate())}},{key:"onInit",value:function onInit(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=(0,a.default)((0,s.default)(BackgroundVideo.prototype),"onInit",this)).call.apply(e,[this].concat(n)),this.changeVideoSize=this.changeVideoSize.bind(this),this.run()}},{key:"onElementChange",value:function onElementChange(e){"background_background"===e&&this.run()}}]),BackgroundVideo}(elementorModules.frontend.handlers.Base);t.default=d},355:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0,n(1954);var i=r(n(1959)),o=r(n(9041)),a=r(n(7371)),s=r(n(8537)),l=function(e){(0,a.default)(HandlesPosition,e);var t=(0,s.default)(HandlesPosition);function HandlesPosition(){return(0,i.default)(this,HandlesPosition),t.apply(this,arguments)}return(0,o.default)(HandlesPosition,[{key:"isActive",value:function isActive(){return elementorFrontend.isEditMode()}},{key:"isFirstSection",value:function isFirstSection(){return this.$element[0]===document.querySelector(".elementor-edit-mode .elementor-top-section")}},{key:"isOverflowHidden",value:function isOverflowHidden(){return"hidden"===this.$element.css("overflow")}},{key:"getOffset",value:function getOffset(){if("body"===elementor.config.document.container)return this.$element.offset().top;var e=jQuery(elementor.config.document.container);return this.$element.offset().top-e.offset().top}},{key:"setHandlesPosition",value:function setHandlesPosition(){var e=elementor.documents.getCurrent();if(e&&e.container.isEditable()){var t=this.isOverflowHidden();if(t||this.isFirstSection()){var n=t?0:this.getOffset(),r=this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings"),i="elementor-section--handles-inside";n<25?(this.$element.addClass(i),n<-5?r.css("top",-n):r.css("top","")):this.$element.removeClass(i)}}}},{key:"onInit",value:function onInit(){this.isActive()&&(this.setHandlesPosition(),this.$element.on("mouseenter",this.setHandlesPosition.bind(this)))}}]),HandlesPosition}(elementorModules.frontend.handlers.Base);t.default=l},9320:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(4058)),o=r(n(2987)),a=r(n(355)),s=r(n(2804)),l=r(n(3384)),u=[s.default,i.default,o.default,a.default,l.default];t.default=u},3384:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0,n(4828),n(4208),n(1954);var i=r(n(1959)),o=r(n(9041)),a=r(n(6700)),s=r(n(4263)),l=r(n(7371)),u=r(n(8537)),d=function(e){(0,l.default)(Shapes,e);var t=(0,u.default)(Shapes);function Shapes(){return(0,i.default)(this,Shapes),t.apply(this,arguments)}return(0,o.default)(Shapes,[{key:"getDefaultSettings",value:function getDefaultSettings(){return{selectors:{container:"> .elementor-shape-%s"},svgURL:elementorFrontend.config.urls.assets+"shapes/"}}},{key:"getDefaultElements",value:function getDefaultElements(){var e={},t=this.getSettings("selectors");return e.$topContainer=this.$element.find(t.container.replace("%s","top")),e.$bottomContainer=this.$element.find(t.container.replace("%s","bottom")),e}},{key:"isActive",value:function isActive(){return elementorFrontend.isEditMode()}},{key:"getSvgURL",value:function getSvgURL(e,t){var n=this.getSettings("svgURL")+t+".svg";return elementor.config.additional_shapes&&e in elementor.config.additional_shapes&&(n=elementor.config.additional_shapes[e],-1<t.indexOf("-negative")&&(n=n.replace(".svg","-negative.svg"))),n}},{key:"buildSVG",value:function buildSVG(e){var t="shape_divider_"+e,n=this.getElementSettings(t),r=this.elements["$"+e+"Container"];if(r.attr("data-shape",n),n){var i=n;this.getElementSettings(t+"_negative")&&(i+="-negative");var o=this.getSvgURL(n,i);jQuery.get(o,(function(e){r.empty().append(e.childNodes[0])})),this.setNegative(e)}else r.empty()}},{key:"setNegative",value:function setNegative(e){this.elements["$"+e+"Container"].attr("data-negative",!!this.getElementSettings("shape_divider_"+e+"_negative"))}},{key:"onInit",value:function onInit(){var e,t=this;if(this.isActive(this.getSettings())){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];(e=(0,a.default)((0,s.default)(Shapes.prototype),"onInit",this)).call.apply(e,[this].concat(r)),["top","bottom"].forEach((function(e){t.getElementSettings("shape_divider_"+e)&&t.buildSVG(e)}))}}},{key:"onElementChange",value:function onElementChange(e){var t=e.match(/^shape_divider_(top|bottom)$/);if(t)this.buildSVG(t[1]);else{var n=e.match(/^shape_divider_(top|bottom)_negative$/);n&&(this.buildSVG(n[1]),this.setNegative(n[1]))}}}]),Shapes}(elementorModules.frontend.handlers.Base);t.default=d},2804:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1959)),o=r(n(9041)),a=r(n(6700)),s=r(n(4263)),l=r(n(7371)),u=r(n(8537)),d=function(e){(0,l.default)(StretchedSection,e);var t=(0,u.default)(StretchedSection);function StretchedSection(){return(0,i.default)(this,StretchedSection),t.apply(this,arguments)}return(0,o.default)(StretchedSection,[{key:"bindEvents",value:function bindEvents(){var e=this.getUniqueHandlerID();elementorFrontend.addListenerOnce(e,"resize",this.stretch),elementorFrontend.addListenerOnce(e,"sticky:stick",this.stretch,this.$element),elementorFrontend.addListenerOnce(e,"sticky:unstick",this.stretch,this.$element),elementorFrontend.isEditMode()&&(this.onKitChangeStretchContainerChange=this.onKitChangeStretchContainerChange.bind(this),elementor.channels.editor.on("kit:change:stretchContainer",this.onKitChangeStretchContainerChange))}},{key:"unbindEvents",value:function unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID(),"resize",this.stretch),elementorFrontend.isEditMode()&&elementor.channels.editor.off("kit:change:stretchContainer",this.onKitChangeStretchContainerChange)}},{key:"isActive",value:function isActive(e){return elementorFrontend.isEditMode()||e.$element.hasClass("elementor-section-stretched")}},{key:"initStretch",value:function initStretch(){this.stretch=this.stretch.bind(this),this.stretchElement=new elementorModules.frontend.tools.StretchElement({element:this.$element,selectors:{container:this.getStretchContainer()}})}},{key:"getStretchContainer",value:function getStretchContainer(){return elementorFrontend.getKitSettings("stretched_section_container")||window}},{key:"stretch",value:function stretch(){this.getElementSettings("stretch_section")&&this.stretchElement.stretch()}},{key:"onInit",value:function onInit(){var e;if(this.isActive(this.getSettings())){this.initStretch();for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=(0,a.default)((0,s.default)(StretchedSection.prototype),"onInit",this)).call.apply(e,[this].concat(n)),this.stretch()}}},{key:"onElementChange",value:function onElementChange(e){"stretch_section"===e&&(this.getElementSettings("stretch_section")?this.stretch():this.stretchElement.reset())}},{key:"onKitChangeStretchContainerChange",value:function onKitChangeStretchContainerChange(){this.stretchElement.setSettings("selectors.container",this.getStretchContainer()),this.stretch()}}]),StretchedSection}(elementorModules.frontend.handlers.Base);t.default=d},3346:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({getDefaultSettings:function getDefaultSettings(){return{scrollDuration:500,selectors:{links:'a[href*="#"]',targets:".elementor-element, .elementor-menu-anchor",scrollable:"html, body"}}},getDefaultElements:function getDefaultElements(){return{$scrollable:jQuery(this.getSettings("selectors").scrollable)}},bindEvents:function bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.handleAnchorLinks)},handleAnchorLinks:function handleAnchorLinks(e){var t,n=e.currentTarget,r=location.pathname===n.pathname;if(location.hostname===n.hostname&&r&&!(n.hash.length<2)){try{t=jQuery(n.hash).filter(this.getSettings("selectors.targets"))}catch(e){return}if(t.length){var i=t.offset().top,o=elementorFrontend.elements.$wpAdminBar,a=jQuery(".elementor-section.elementor-sticky--active:visible");o.length>0&&(i-=o.height()),a.length>0&&(i-=Math.max.apply(null,a.map((function(){return jQuery(this).outerHeight()})).get())),e.preventDefault(),i=elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance",i),this.elements.$scrollable.animate({scrollTop:i},this.getSettings("scrollDuration"),"linear")}}},onInit:function onInit(){elementorModules.ViewModule.prototype.onInit.apply(this,arguments),this.bindEvents()}})},6866:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(3220)),o=r(n(1959)),a=r(n(9041)),s=function(){function AssetsLoader(){(0,o.default)(this,AssetsLoader)}return(0,a.default)(AssetsLoader,[{key:"getScriptElement",value:function getScriptElement(e){var t=document.createElement("script");return t.src=e,t}},{key:"getStyleElement",value:function getStyleElement(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}},{key:"load",value:function load(e,t){var n=this,r=AssetsLoader.assets[e][t];return r.loader||(r.loader=new i.default((function(t){var i="style"===e?n.getStyleElement(r.src):n.getScriptElement(r.src);i.onload=function(){return t(!0)};var o="head"===r.parent?r.parent:"body";document[o].appendChild(i)}))),r.loader}}]),AssetsLoader}();t.default=s;var l=elementorFrontendConfig.environmentMode.isScriptDebug?"":".min";s.assets={script:{dialog:{src:"".concat(elementorFrontendConfig.urls.assets,"lib/dialog/dialog").concat(l,".js?ver=4.8.1")},"share-link":{src:"".concat(elementorFrontendConfig.urls.assets,"lib/share-link/share-link").concat(l,".js?ver=").concat(elementorFrontendConfig.version)},swiper:{src:"".concat(elementorFrontendConfig.urls.assets,"lib/swiper/swiper").concat(l,".js?ver=5.3.6")}},style:{}}},8646:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0,n(3085),n(2897),n(6139),n(7472);var i=r(n(3220)),o=r(n(7135));n(6248);var a=r(n(9117)),s=r(n(1959)),l=r(n(9041)),u=r(n(6700)),d=r(n(4263)),c=r(n(7371)),f=r(n(8537)),h=function(e){(0,c.default)(LightboxManager,e);var t,r=(0,f.default)(LightboxManager);function LightboxManager(){return(0,s.default)(this,LightboxManager),r.apply(this,arguments)}return(0,l.default)(LightboxManager,[{key:"getDefaultSettings",value:function getDefaultSettings(){return{selectors:{links:"a, [data-elementor-lightbox]"}}}},{key:"getDefaultElements",value:function getDefaultElements(){return{$links:jQuery(this.getSettings("selectors.links"))}}},{key:"isLightboxLink",value:function isLightboxLink(e){if("a"===e.tagName.toLowerCase()&&(e.hasAttribute("download")||!/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)))return!1;var t=elementorFrontend.getKitSettings("global_image_lightbox"),n=e.dataset.elementorOpenLightbox;return"yes"===n||t&&"no"!==n}},{key:"onLinkClick",value:(t=(0,a.default)(o.default.mark((function _callee(e){var t,n,r,i;return o.default.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(t=e.currentTarget,n=jQuery(e.target),r=elementorFrontend.isEditMode(),i=!!n.closest(".elementor-edit-area").length,this.isLightboxLink(t)){o.next=4;break}return r&&i&&e.preventDefault(),o.abrupt("return");case 4:if(e.preventDefault(),!r||elementor.getPreferences("lightbox_in_editor")){o.next=7;break}return o.abrupt("return");case 7:if(!this.isOptimizedAssetsLoading()){o.next=13;break}return o.next=10,LightboxManager.getLightbox();case 10:o.t0=o.sent,o.next=14;break;case 13:o.t0=elementorFrontend.utils.lightbox;case 14:o.t0.createLightbox(t);case 16:case"end":return o.stop()}}),_callee,this)}))),function onLinkClick(e){return t.apply(this,arguments)})},{key:"isOptimizedAssetsLoading",value:function isOptimizedAssetsLoading(){return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading}},{key:"bindEvents",value:function bindEvents(){var e=this;elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),(function(t){return e.onLinkClick(t)}))}},{key:"onInit",value:function onInit(){for(var e,t=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];(e=(0,u.default)((0,d.default)(LightboxManager.prototype),"onInit",this)).call.apply(e,[this].concat(r)),this.isOptimizedAssetsLoading()&&!elementorFrontend.isEditMode()&&this.elements.$links.each((function(e,n){if(t.isLightboxLink(n))return LightboxManager.getLightbox(),!1}))}}],[{key:"getLightbox",value:function getLightbox(){var e=new i.default((function(e){Promise.all([n.e(637),n.e(723)]).then(n.t.bind(n,3896,7)).then((function(t){var n=t.default;return e(new n)}))})),t=elementorFrontend.utils.assetsLoader.load("script","dialog"),r=elementorFrontend.utils.assetsLoader.load("script","share-link");return i.default.all([e,t,r]).then((function(){return e}))}}]),LightboxManager}(elementorModules.ViewModule);t.default=h},7139:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0,n(8703);var i=r(n(4176)),o=r(n(3452)),a=r(n(5657)),s=r(n(3220)),l=r(n(1959)),u=r(n(9041)),d=function(){function SwiperBC(e,t){var n=this;return(0,l.default)(this,SwiperBC),this.config=t,this.config.breakpoints&&(this.config=this.adjustConfig(t)),t.legacy?this.createSwiperInstance(e,this.config):new s.default((function(t){if(!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)return t(n.createSwiperInstance(e,n.config));elementorFrontend.utils.assetsLoader.load("script","swiper").then((function(){return t(n.createSwiperInstance(e,n.config))}))}))}return(0,u.default)(SwiperBC,[{key:"createSwiperInstance",value:function createSwiperInstance(e,t){return!SwiperBC.isSwiperLoaded&&elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading&&(c=window.Swiper,SwiperBC.isSwiperLoaded=!0,legacySwiper()),c.prototype.adjustConfig=this.adjustConfig,new c(e,t)}},{key:"getElementorBreakpointValues",value:function getElementorBreakpointValues(){var e=elementorFrontend.config.responsive.activeBreakpoints,t=[];return(0,a.default)(e).forEach((function(e){t.push(e.value)})),t}},{key:"adjustConfig",value:function adjustConfig(e){if(!e.handleElementorBreakpoints)return e;var t=elementorFrontend.config.responsive.activeBreakpoints,n=this.getElementorBreakpointValues();return(0,o.default)(e.breakpoints).forEach((function(r){var o,a=(0,i.default)(r);if(a===t.mobile.value||a+1===t.mobile.value)o=0;else if(!t.widescreen||a!==t.widescreen.value&&a+1!==t.widescreen.value){var s=n.findIndex((function(e){return a===e||a+1===e}));o=n[s-1]}else o=a;e.breakpoints[o]=e.breakpoints[r],e.breakpoints[r]={slidesPerView:e.slidesPerView,slidesPerGroup:e.slidesPerGroup?e.slidesPerGroup:1}})),e}}]),SwiperBC}();function legacySwiper(){window.Swiper=function(){return function _class(e,t){return(0,l.default)(this,_class),t.legacy=!0,new d(e,t)}}()}t.default=d,d.isSwiperLoaded=!1;var c=window.Swiper;c&&legacySwiper()},2064:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(2009));n(4828);var o=r(n(7135));n(6248);var a=r(n(9117)),s=r(n(1959)),l=r(n(9041)),u=r(n(6700)),d=r(n(4263)),c=r(n(7371)),f=r(n(8537)),h=function(e){(0,c.default)(_default,e);var t=(0,f.default)(_default);function _default(){return(0,s.default)(this,_default),t.apply(this,arguments)}return(0,l.default)(_default,[{key:"getDefaultSettings",value:function getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}}},{key:"bindEvents",value:function bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.runLinkAction.bind(this))}},{key:"initActions",value:function initActions(){var e;this.actions={lightbox:(e=(0,a.default)(o.default.mark((function _callee(e){var t;return o.default.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,elementorFrontend.utils.lightbox;case 2:t=n.sent,e.id?t.openSlideshow(e.id,e.url):t.showModal(e);case 4:case"end":return n.stop()}}),_callee)}))),function lightbox(t){return e.apply(this,arguments)})}}},{key:"addAction",value:function addAction(e,t){this.actions[e]=t}},{key:"runAction",value:function runAction(e){var t=(e=decodeURIComponent(e)).match(/action=(.+?)&/),n=e.match(/settings=(.+)/);if(t){var r=this.actions[t[1]];if(r){var i={};n&&(i=JSON.parse(atob(n[1])));for(var o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];r.apply(void 0,[i].concat(a))}}}},{key:"runLinkAction",value:function runLinkAction(e){e.preventDefault(),this.runAction(jQuery(e.currentTarget).attr("href"),e)}},{key:"runHashAction",value:function runHashAction(){location.hash&&this.runAction(location.hash)}},{key:"createActionHash",value:function createActionHash(e,t){return encodeURIComponent("#elementor-action:action=".concat(e,"&settings=").concat(btoa((0,i.default)(t))))}},{key:"onInit",value:function onInit(){(0,u.default)((0,d.default)(_default.prototype),"onInit",this).call(this),this.initActions(),elementorFrontend.on("components:init",this.runHashAction.bind(this))}}]),_default}(elementorModules.ViewModule);t.default=h},4773:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0,n(4828);var i=r(n(1959)),o=r(n(9041)),a=r(n(7371)),s=r(n(8537)),l=function(e){(0,a.default)(BaseLoader,e);var t=(0,s.default)(BaseLoader);function BaseLoader(){return(0,i.default)(this,BaseLoader),t.apply(this,arguments)}return(0,o.default)(BaseLoader,[{key:"getDefaultSettings",value:function getDefaultSettings(){return{isInserted:!1,selectors:{firstScript:"script:first"}}}},{key:"getDefaultElements",value:function getDefaultElements(){return{$firstScript:jQuery(this.getSettings("selectors.firstScript"))}}},{key:"insertAPI",value:function insertAPI(){this.elements.$firstScript.before(jQuery("<script>",{src:this.getApiURL()})),this.setSettings("isInserted",!0)}},{key:"getVideoIDFromURL",value:function getVideoIDFromURL(e){var t=e.match(this.getURLRegex());return t&&t[1]}},{key:"onApiReady",value:function onApiReady(e){var t=this;this.getSettings("isInserted")||this.insertAPI(),this.isApiLoaded()?e(this.getApiObject()):setTimeout((function(){t.onApiReady(e)}),350)}}]),BaseLoader}(elementorModules.ViewModule);t.default=l},1911:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1959)),o=r(n(9041)),a=r(n(7371)),s=r(n(8537)),l=function(e){(0,a.default)(VimeoLoader,e);var t=(0,s.default)(VimeoLoader);function VimeoLoader(){return(0,i.default)(this,VimeoLoader),t.apply(this,arguments)}return(0,o.default)(VimeoLoader,[{key:"getApiURL",value:function getApiURL(){return"https://player.vimeo.com/api/player.js"}},{key:"getURLRegex",value:function getURLRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}},{key:"isApiLoaded",value:function isApiLoaded(){return window.Vimeo}},{key:"getApiObject",value:function getApiObject(){return Vimeo}}]),VimeoLoader}(r(n(4773)).default);t.default=l},1604:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1959)),o=r(n(9041)),a=r(n(7371)),s=r(n(8537)),l=function(e){(0,a.default)(YoutubeLoader,e);var t=(0,s.default)(YoutubeLoader);function YoutubeLoader(){return(0,i.default)(this,YoutubeLoader),t.apply(this,arguments)}return(0,o.default)(YoutubeLoader,[{key:"getApiURL",value:function getApiURL(){return"https://www.youtube.com/iframe_api"}},{key:"getURLRegex",value:function getURLRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/}},{key:"isApiLoaded",value:function isApiLoaded(){return window.YT&&YT.loaded}},{key:"getApiObject",value:function getApiObject(){return YT}}]),YoutubeLoader}(r(n(4773)).default);t.default=l},59:(e,t,n)=>{"use strict";n.p=elementorFrontendConfig.urls.assets+"js/"},9469:(e,t,n)=>{"use strict";var r=n(7971)(n(4176));e.exports=function EventManager(){var e,t=Array.prototype.slice,n={actions:{},filters:{}};function _removeHook(e,t,r,i){var o,a,s;if(n[e][t])if(r)if(o=n[e][t],i)for(s=o.length;s--;)(a=o[s]).callback===r&&a.context===i&&o.splice(s,1);else for(s=o.length;s--;)o[s].callback===r&&o.splice(s,1);else n[e][t]=[]}function _addHook(e,t,r,i,o){var a={callback:r,priority:i,context:o},s=n[e][t];if(s){var l=!1;if(jQuery.each(s,(function(){if(this.callback===r)return l=!0,!1})),l)return;s.push(a),s=function _hookInsertSort(e){for(var t,n,r,i=1,o=e.length;i<o;i++){for(t=e[i],n=i;(r=e[n-1])&&r.priority>t.priority;)e[n]=e[n-1],--n;e[n]=t}return e}(s)}else s=[a];n[e][t]=s}function _runHook(e,t,r){var i,o,a=n[e][t];if(!a)return"filters"===e&&r[0];if(o=a.length,"filters"===e)for(i=0;i<o;i++)r[0]=a[i].callback.apply(a[i].context,r);else for(i=0;i<o;i++)a[i].callback.apply(a[i].context,r);return"filters"!==e||r[0]}return e={removeFilter:function removeFilter(t,n){return"string"==typeof t&&_removeHook("filters",t,n),e},applyFilters:function applyFilters(){var n=t.call(arguments),r=n.shift();return"string"==typeof r?_runHook("filters",r,n):e},addFilter:function addFilter(t,n,i,o){return"string"==typeof t&&"function"==typeof n&&_addHook("filters",t,n,i=(0,r.default)(i||10,10),o),e},removeAction:function removeAction(t,n){return"string"==typeof t&&_removeHook("actions",t,n),e},doAction:function doAction(){var n=t.call(arguments),r=n.shift();return"string"==typeof r&&_runHook("actions",r,n),e},addAction:function addAction(t,n,i,o){return"string"==typeof t&&"function"==typeof n&&_addHook("actions",t,n,i=(0,r.default)(i||10,10),o),e}}}},3308:(e,t,n)=>{"use strict";n(7394)(t,"__esModule",{value:!0}),t.default=void 0,n(4321),n(6139);var r=function matchUserAgent(e){return i.indexOf(e)>=0},i=navigator.userAgent,o=!!window.opr&&!!opr.addons||!!window.opera||r(" OPR/"),a=r("Firefox"),s=/^((?!chrome|android).)*safari/i.test(i)||/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),l=/Trident|MSIE/.test(i)&&!!document.documentMode,u=!l&&!!window.StyleMedia||r("Edg"),d=!!window.chrome&&r("Chrome")&&!(u||o),c=r("Chrome")&&!!window.CSS,f={appleWebkit:r("AppleWebKit")&&!c,blink:c,chrome:d,edge:u,firefox:a,ie:l,mac:r("Macintosh"),opera:o,safari:s,webkit:r("AppleWebKit")};t.default=f},5107:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(2009)),o=r(n(3452)),a=r(n(1959)),s=r(n(9041)),l=r(n(7371)),u=r(n(8537)),d=function(e){(0,l.default)(_default,e);var t=(0,u.default)(_default);function _default(){return(0,a.default)(this,_default),t.apply(this,arguments)}return(0,s.default)(_default,[{key:"get",value:function get(e,t){var n;t=t||{};try{n=t.session?sessionStorage:localStorage}catch(t){return e?void 0:{}}var r=n.getItem("elementor");(r=r?JSON.parse(r):{}).__expiration||(r.__expiration={});var i=r.__expiration,a=[];e?i[e]&&(a=[e]):a=(0,o.default)(i);var s=!1;return a.forEach((function(e){new Date(i[e])<new Date&&(delete r[e],delete i[e],s=!0)})),s&&this.save(r,t.session),e?r[e]:r}},{key:"set",value:function set(e,t,n){n=n||{};var r=this.get(null,n);if(r[e]=t,n.lifetimeInSeconds){var i=new Date;i.setTime(i.getTime()+1e3*n.lifetimeInSeconds),r.__expiration[e]=i.getTime()}this.save(r,n.session)}},{key:"save",value:function save(e,t){var n;try{n=t?sessionStorage:localStorage}catch(e){return}n.setItem("elementor",(0,i.default)(e))}}]),_default}(elementorModules.Module);t.default=d},6046:(e,t,n)=>{"use strict";var r=n(7971);n(7394)(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1959)),o=r(n(7371)),a=r(n(8537)),s=function(e){(0,o.default)(_default,e);var t=(0,a.default)(_default);function _default(){var e;return(0,i.default)(this,_default),e=t.call(this),elementorFrontend.elementsHandler.attachHandler("text-path",(function(){return n.e(48).then(n.t.bind(n,6468,7))})),e}return _default}(elementorModules.Module);t.default=s},8703:(e,t,n)=>{"use strict";var r=n(5772),i=n(8309)(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function findIndex(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n(2094)(o)},751:(e,t,n)=>{n(6628)&&"g"!=/./g.flags&&n(8558).f(RegExp.prototype,"flags",{configurable:!0,get:n(4859)})},4828:(e,t,n)=>{"use strict";var r=n(6365),i=n(6078),o=n(8492),a=n(2404);n(8897)("match",1,(function(e,t,n,s){return[function match(n){var r=e(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=s(n,e,this);if(t.done)return t.value;var l=r(e),u=String(this);if(!l.global)return a(l,u);var d=l.unicode;l.lastIndex=0;for(var c,f=[],h=0;null!==(c=a(l,u));){var v=String(c[0]);f[h]=v,""===v&&(l.lastIndex=o(u,i(l.lastIndex),d)),h++}return 0===h?null:f}]}))},4208:(e,t,n)=>{"use strict";var r=n(6365),i=n(6033),o=n(6078),a=n(3338),s=n(8492),l=n(2404),u=Math.max,d=Math.min,c=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(8897)("replace",2,(function(e,t,n,v){return[function replace(r,i){var o=e(this),a=null==r?void 0:r[t];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},function(e,t){var i=v(n,e,this,t);if(i.done)return i.value;var c=r(e),f=String(this),h="function"==typeof t;h||(t=String(t));var g=c.global;if(g){var p=c.unicode;c.lastIndex=0}for(var m=[];;){var y=l(c,f);if(null===y)break;if(m.push(y),!g)break;""===String(y[0])&&(c.lastIndex=s(f,o(c.lastIndex),p))}for(var k,b="",_=0,w=0;w<m.length;w++){y=m[w];for(var S=String(y[0]),x=u(d(a(y.index),f.length),0),C=[],E=1;E<y.length;E++)C.push(void 0===(k=y[E])?k:String(k));var L=y.groups;if(h){var A=[S].concat(C,x,f);void 0!==L&&A.push(L);var M=String(t.apply(void 0,A))}else M=getSubstitution(S,f,x,C,L,t);x>=_&&(b+=f.slice(_,x)+M,_=x+S.length)}return b+f.slice(_)}];function getSubstitution(e,t,r,o,a,s){var l=r+e.length,u=o.length,d=h;return void 0!==a&&(a=i(a),d=f),n.call(s,d,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":s=a[i.slice(1,-1)];break;default:var d=+i;if(0===d)return n;if(d>u){var f=c(d/10);return 0===f?n:f<=u?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):n}s=o[d-1]}return void 0===s?"":s}))}}))},4321:(e,t,n)=>{"use strict";n(751);var r=n(6365),i=n(4859),o=n(6628),a="toString",s=/./.toString,define=function(e){n(7738)(RegExp.prototype,a,e,!0)};n(8625)((function(){return"/a/b"!=s.call({source:"a",flags:"b"})}))?define((function toString(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?i.call(e):void 0)})):s.name!=a&&define((function toString(){return s.call(this)}))},7472:(e,t,n)=>{"use strict";var r=n(2070)(!0);n(1195)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})}))},6248:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function define(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(e){define=function(e,t,n){return e[t]=n}}function wrap(e,t,n,r){var i=t&&t.prototype instanceof Generator?t:Generator,o=Object.create(i.prototype),a=new Context(r||[]);return o._invoke=function makeInvokeMethod(e,t,n){var r=l;return function invoke(i,o){if(r===d)throw new Error("Generator is already running");if(r===c){if("throw"===i)throw o;return doneResult()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=maybeInvokeDelegate(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=c,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var h=tryCatch(e,t,n);if("normal"===h.type){if(r=n.done?c:u,h.arg===f)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(r=c,n.method="throw",n.arg=h.arg)}}}(e,n,a),o}function tryCatch(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=wrap;var l="suspendedStart",u="suspendedYield",d="executing",c="completed",f={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var h={};h[o]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(values([])));g&&g!==n&&r.call(g,o)&&(h=g);var p=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(h);function defineIteratorMethods(e){["next","throw","return"].forEach((function(t){define(e,t,(function(e){return this._invoke(t,e)}))}))}function AsyncIterator(e,t){function invoke(n,i,o,a){var s=tryCatch(e[n],e,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){invoke("next",e,o,a)}),(function(e){invoke("throw",e,o,a)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return invoke("throw",e,o,a)}))}a(s.arg)}var n;this._invoke=function enqueue(e,r){function callInvokeWithMethodAndArg(){return new t((function(t,n){invoke(e,r,t,n)}))}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,maybeInvokeDelegate(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var i=tryCatch(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,f;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function pushTryEntry(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function next(){for(;++i<e.length;)if(r.call(e,i))return next.value=e[i],next.done=!1,next;return next.value=t,next.done=!0,next};return a.next=a}}return{next:doneResult}}function doneResult(){return{value:t,done:!0}}return GeneratorFunction.prototype=p.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunction.displayName=define(GeneratorFunctionPrototype,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,s,"GeneratorFunction")),e.prototype=Object.create(p),e},e.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[a]=function(){return this},e.AsyncIterator=AsyncIterator,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new AsyncIterator(wrap(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},defineIteratorMethods(p),define(p,s,"Generator"),p[o]=function(){return this},p.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function next(){for(;t.length;){var n=t.pop();if(n in e)return next.value=n,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function handle(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),resetTryEntry(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;resetTryEntry(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:values(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}},0,[[5654,162,354]]]);/*! elementor - v3.2.4 - 26-05-2021 */