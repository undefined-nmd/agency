(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{220:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(210),i=n(211),s=(n(254),n(209)),c=n(230),u=n.n(c);n(255);var l=function(e){var t,r;function c(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={navActive:!1},t.getNavState=function(){t.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},t}return r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,c.prototype.render=function(){return a.a.createElement(o.a,null,a.a.createElement(s.a,{title:"Assignments"}),a.a.createElement(i.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),a.a.createElement("div",{className:"fixed-div"},a.a.createElement("div",{className:"toggle-nav reduce-width-float",onClick:this.getNavState},a.a.createElement("div",{className:"nav-line-top"}),a.a.createElement("div",{className:"nav-line-bottom"}))),a.a.createElement("div",{className:"header-container"},a.a.createElement("div",{className:"hero-img-detail"},a.a.createElement("h1",{className:"project-title-detail"},"Snak the museum"),a.a.createElement("div",{className:"subtitles-detail"},a.a.createElement("h5",{className:"subtitle-text-detail"},"By undefined"),a.a.createElement("div",{className:"line-detail"}),a.a.createElement("h5",{className:"date-text-detail"},"2019"))),a.a.createElement("nav",null,a.a.createElement("a",{href:"/team"},"Team"),a.a.createElement("a",{href:"/contact"},"Contact"),a.a.createElement("a",{href:"/about"},"About"),a.a.createElement("a",{href:"/projectspage"},"Projects"))),a.a.createElement("div",{className:"main-container"},a.a.createElement("p",{className:"project-intro"},"A brief intro about the project comes here. A brief intro about the project comes here. A brief intro about the project comes here."),a.a.createElement("div",{className:"content-box"},a.a.createElement("h3",{className:"project-subtitle"},"Visual identity"),a.a.createElement("p",{className:"project-text"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text."))),a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:n(251),alt:"",className:"project-image-sm"}),a.a.createElement("img",{src:n(251),alt:"",className:"project-image-sm"}),a.a.createElement("img",{src:n(251),alt:"",className:"project-image-sm"}),a.a.createElement("img",{src:n(251),alt:"",className:"project-image-sm"})),a.a.createElement("div",{className:"main-container"},a.a.createElement("div",{className:"content-box"},a.a.createElement("h3",{className:"project-subtitle"},"Services"),a.a.createElement("ul",{className:"project-text"},a.a.createElement("li",null,"Brand identity"),a.a.createElement("li",null,"UI / UX design"),a.a.createElement("li",null,"Visual design"),a.a.createElement("li",null,"Development"))),a.a.createElement("div",{className:"contact-action"},a.a.createElement("p",{className:"action-title"},"Let us define your next project"),a.a.createElement("a",{href:"",className:"action-button"},"Contact us")),a.a.createElement("footer",null,a.a.createElement("div",{className:"footer-container-left"},a.a.createElement("ul",null,a.a.createElement("li",null,"Contact"),a.a.createElement("li",null,"Social"))),a.a.createElement("ul",{className:"footer-container-center"},a.a.createElement("li",{className:"footer-info-general"},a.a.createElement("span",{className:"footer-info-general"},"info@arteveldehs.be / 09 234 86 00")),a.a.createElement("li",{className:"footer-info-general"},a.a.createElement("span",{className:"footer-info-general"},"Instagram / Facebook / LinkedIn / Twitter")),a.a.createElement("li",{className:"footer-info-general"},"Hoogpoort 15"),a.a.createElement("li",{className:"footer-info-general"},"9000 Gent"),a.a.createElement("li",{className:"footer-info-general"},"ONnr: 0474.120.360"),a.a.createElement("li",{className:"footer-info-general"},"BTWnr: BTW BE 0474.120.360")),a.a.createElement("div",{className:"blank"}),a.a.createElement("div",{className:"undefined-copyright"},"_defined"))))},c}(r.Component);var f=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={navActive:!1,projects:[],id:null},t.setStateId=function(e){t.setState({id:e})},t.getNavState=function(){t.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=r.prototype;return c.componentDidMount=function(){var e=this;u.a.get("https://undefined-baas.firebaseapp.com/api/projects").then((function(t){console.log(t.data.data),e.setState({projects:t.data.data})}))},c.render=function(){var e=this;return null==this.state.id?a.a.createElement(o.a,null,a.a.createElement(s.a,{title:"Home"}),a.a.createElement(i.a,{menustate:this.state.navActive,toggleNav:this.getNavState}),a.a.createElement("div",{className:"main-container-project-list"},a.a.createElement("div",{className:"toggle-nav reduce-width-float",onClick:this.getNavState},a.a.createElement("div",{className:"nav-line-top"}),a.a.createElement("div",{className:"nav-line-bottom"})),this.state&&this.state.projects&&this.state.projects.map((function(t,n){return a.a.createElement("div",{className:"project-list-container",key:n},a.a.createElement("h2",{className:"project-list-title"},t.data.title),a.a.createElement("div",{className:"project-list-row"},a.a.createElement("img",{src:t.data.pictures.reference_md?t.data.pictures.reference_md:"https://firebasestorage.googleapis.com/v0/b/undefined-baas.appspot.com/o/resized%2Ftumblr_n7jz4u5Fgd1ql2g28o1_500_1280x1280.jpg?alt=media&token=16672718-2b3c-493f-a1f0-f6cab1d8eaaa",className:"project-list-image"}),a.a.createElement("a",{href:"/",className:"action-button edit-height",onClick:function(){return e.setStateId(t.id)}},"View project")),a.a.createElement("p",{className:"project-list-slug"},t.data.synopsis?t.data.synopsis:""))})))):a.a.createElement(l,null)},r}(r.Component);t.default=f},221:function(e,t,n){"use strict";n(17),n(46),n(75),n(5);var r=n(222),a=n(232),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},222:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},223:function(e,t,n){"use strict";n(21),n(234),n(28),n(46),n(75),n(5),n(17);var r=n(221);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))})))})),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},224:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},225:function(e,t,n){"use strict";(function(t){n(28),n(46),n(75),n(5);var r=n(221),a=n(240),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?s=n(226):"undefined"!=typeof XMLHttpRequest&&(s=n(226)),s),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n(239))},226:function(e,t,n){"use strict";n(28),n(21),n(45),n(5);var r=n(221),a=n(241),o=n(223),i=n(244),s=n(245),c=n(227);e.exports=function(e){return new Promise((function(t,u){var l=e.data,f=e.headers;r.isFormData(l)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",d=e.auth.password||"";f.Authorization="Basic "+btoa(m+":"+d)}if(p.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};a(t,u,r),p=null}},p.onabort=function(){p&&(u(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){u(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var h=n(246),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(f,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),u(e),p=null)})),void 0===l&&(l=null),p.send(l)}))}},227:function(e,t,n){"use strict";var r=n(242);e.exports=function(e,t,n,a,o){var i=new Error(e);return r(i,t,n,a,o)}},228:function(e,t,n){"use strict";n(28);var r=n(221);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(["headers","auth","proxy"],(function(a){r.isObject(t[a])?n[a]=r.deepMerge(e[a],t[a]):void 0!==t[a]?n[a]=t[a]:r.isObject(e[a])?n[a]=r.deepMerge(e[a]):void 0!==e[a]&&(n[a]=e[a])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},229:function(e,t,n){"use strict";function r(e){this.message=e}n(46),n(75),n(5),r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},230:function(e,t,n){e.exports=n(231)},231:function(e,t,n){"use strict";n(45),n(16),n(12),n(5),n(76);var r=n(221),a=n(222),o=n(233),i=n(228);function s(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=s(n(225));c.Axios=o,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n(229),c.CancelToken=n(249),c.isCancel=n(224),c.all=function(e){return Promise.all(e)},c.spread=n(250),e.exports=c,e.exports.default=c},232:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},233:function(e,t,n){"use strict";n(17),n(28),n(45),n(5);var r=n(221),a=n(223),o=n(236),i=n(237),s=n(228);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,a){return this.request(r.merge(a||{},{method:e,url:t,data:n}))}})),e.exports=c},234:function(e,t,n){var r=n(1),a=n(235);r(r.P+r.F*(Date.prototype.toISOString!==a),"Date",{toISOString:a})},235:function(e,t,n){"use strict";var r=n(9),a=Date.prototype.getTime,o=Date.prototype.toISOString,i=function(e){return e>9?e:"0"+e};e.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(a.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+i(e.getUTCMonth()+1)+"-"+i(e.getUTCDate())+"T"+i(e.getUTCHours())+":"+i(e.getUTCMinutes())+":"+i(e.getUTCSeconds())+"."+(n>99?n:"0"+i(n))+"Z"}:o},236:function(e,t,n){"use strict";n(28);var r=n(221);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},237:function(e,t,n){"use strict";n(45),n(5),n(28);var r=n(221),a=n(238),o=n(224),i=n(225),s=n(247),c=n(248);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return u(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(u(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},238:function(e,t,n){"use strict";n(28);var r=n(221);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},239:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&m())}function m(){if(!l){var e=s(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||s(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},240:function(e,t,n){"use strict";n(28);var r=n(221);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},241:function(e,t,n){"use strict";var r=n(227);e.exports=function(e,t,n){var a=n.config.validateStatus;!a||a(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},242:function(e,t,n){"use strict";n(47),n(243),e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},243:function(e,t,n){"use strict";var r=n(1),a=n(22),o=n(77);r(r.P+r.F*n(9)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=a(this),n=o(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},244:function(e,t,n){"use strict";n(143),n(21),n(37),n(28);var r=n(221),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},245:function(e,t,n){"use strict";n(142),n(17);var r=n(221);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},246:function(e,t,n){"use strict";n(57),n(144),n(107);var r=n(221);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},247:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},248:function(e,t,n){"use strict";n(17),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},249:function(e,t,n){"use strict";n(45),n(5);var r=n(229);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},250:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},251:function(e,t,n){e.exports=n.p+"static/tumblr_n7jz4u5Fgd1ql2g28o1_500-7f153ace738718b92c148144c97160ca.jpg"}}]);
//# sourceMappingURL=component---src-pages-projectspage-js-f9fb33be61879ac26e89.js.map