(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";n("sC2a"),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"9rSQ":function(e,t,n){"use strict";n("JHok");var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},CgaS:function(e,t,n){"use strict";n("sC2a"),n("JHok"),n("6kNP"),n("8npG");var r=n("xTJ+"),o=n("MLWZ"),i=n("9rSQ"),a=n("UnBK"),s=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},J6QO:function(e,t,n){"use strict";var r=n("96qb"),o=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(e){return e>9?e:"0"+e};e.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-5e13-1))}))||!r((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+a(e.getUTCMonth()+1)+"-"+a(e.getUTCDate())+"T"+a(e.getUTCHours())+":"+a(e.getUTCMinutes())+":"+a(e.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:i},JEQr:function(e,t,n){"use strict";(function(t){n("JHok"),n("q8oJ"),n("C9fy"),n("8npG");var r=n("xTJ+"),o=n("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?s=n("tQ2B"):"undefined"!=typeof XMLHttpRequest&&(s=n("tQ2B")),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n("KCCg"))},KCCg:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],p=!1,f=-1;function l(){p&&c&&(p=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!p){var e=s(l);p=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,p=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||p||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},LCHV:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi4xMjEiIGhlaWdodD0iNTcuODExIiB2aWV3Qm94PSIwIDAgMjYuMTIxIDU3LjgxMSI+CiAgPGcgaWQ9Ikdyb3VwXzI3IiBkYXRhLW5hbWU9Ikdyb3VwIDI3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5Ny45MzkgLTQwNS45MzkpIj4KICAgIDxsaW5lIGlkPSJMaW5lXzExIiBkYXRhLW5hbWU9IkxpbmUgMTEiIHgyPSI1NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTExMSA0NjMpIHJvdGF0ZSgtOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiMyYzNjZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzEyIiBkYXRhLW5hbWU9IkxpbmUgMTIiIHgyPSIxMiIgeTI9IjEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDk5IDQxOSkgcm90YXRlKC05MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJjM2NmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPGxpbmUgaWQ9IkxpbmVfMTMiIGRhdGEtbmFtZT0iTGluZSAxMyIgeDI9IjEyIiB5Mj0iMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMTEgNDA3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmMzY2ZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPC9nPgo8L3N2Zz4K"},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";n("sc67"),n("pQ2P"),n("JHok"),n("q8oJ"),n("C9fy"),n("8npG"),n("sC2a");var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},OH9c:function(e,t,n){"use strict";n("pJf4"),n("nMRu"),e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";n("sPse"),n("sC2a");var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SG0x:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("LCHV"),a=n.n(i),s=n("jYam"),c=n("Bl7J"),u=(n("/E2i"),n("vrFN")),p=n("vDqi"),f=n.n(p);function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).getNavState=function(){n.setState((function(e){return{navActive:!e.navActive}})),console.log("State change ! ! ! ")},n.state={people:[],trigger:!0,navActive:!1,showNav:"show-nav",hideNav:"hide-nav"},n.peIndex=0,n.nextPerson=n.nextPerson.bind(l(n)),n.prevPerson=n.prevPerson.bind(l(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.nextPerson=function(){console.log(this.peIndex),this.peIndex<this.state.people.length-1&&(this.peIndex++,this.setState({trigger:!0}),console.log(this.state.people[this.peIndex]),console.log(this.peIndex))},i.prevPerson=function(){console.log(this.peIndex),this.peIndex>0&&(this.peIndex--,this.setState({trigger:!0}),console.log(this.state.people[this.peIndex]),console.log(this.peIndex))},i.componentDidMount=function(){var e=this;f.a.get("https://undefined-baas.firebaseapp.com/api/team").then((function(t){e.setState({people:t.data.data}),console.log(t.data.data)}))},i.render=function(){return o.a.createElement(c.a,null,o.a.createElement(u.a,{title:"Assignments"}),o.a.createElement("div",{className:"col team-col"},o.a.createElement("div",{className:"margin-fix"},o.a.createElement(s.a,{menustate:this.state.navActive,toggleNav:this.getNavState})),o.a.createElement("div",{className:"row top-row"},o.a.createElement("div",{className:"toggle-nav reduce-width",onClick:this.getNavState},o.a.createElement("div",{className:"nav-line-top"}),o.a.createElement("div",{className:"nav-line-bottom"}))),o.a.createElement("div",{className:"row center-row"},o.a.createElement("img",{src:this.state.people[this.peIndex]?this.state.people[this.peIndex].data.picture.reference_md:"http://stasseynsjonas.be/api/profiles/placeholder.jpg",className:"person-image persone-image-top swap-on-hover__front-image"}),o.a.createElement("img",{src:this.state.people[this.peIndex]?this.state.people[this.peIndex].data.picture_hoover.reference_md:"http://stasseynsjonas.be/api/profiles/placeholder.jpg",className:"person-image persone-image-top swap-on-hover__back-image"}),o.a.createElement("a",{className:"person-action-btn",onClick:this.prevPerson},o.a.createElement("img",{src:a.a,alt:"arrow"})),o.a.createElement("div",{className:"person-data-div"},o.a.createElement("h1",{className:"person-name"},this.state.people[this.peIndex]?this.state.people[this.peIndex].data.firstName+" "+this.state.people[this.peIndex].data.lastName:"Rendering..."),o.a.createElement("div",{className:"person-bar"}),o.a.createElement("h3",{className:"person-title"},this.state.people[this.peIndex]?this.state.people[this.peIndex].data.jobTitle.title:"Rendering..."))),o.a.createElement("div",{className:"row bottom-row"},o.a.createElement("img",{src:this.state.people[this.peIndex+1]?this.state.people[this.peIndex+1].data.picture.reference_md:"http://stasseynsjonas.be/api/profiles/placeholder.jpg",className:"person-image"}),o.a.createElement("a",{className:"person-action-btn",onClick:this.nextPerson},o.a.createElement("img",{src:a.a,alt:"arrow",className:"flip-arrow"})),o.a.createElement("div",{className:"person-data-div"}))))},r}(r.Component);t.default=d},SntB:function(e,t,n){"use strict";n("JHok");var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(["headers","auth","proxy"],(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},UnBK:function(e,t,n){"use strict";n("6kNP"),n("8npG"),n("JHok");var r=n("xTJ+"),o=n("xAGQ"),i=n("Lmem"),a=n("JEQr"),s=n("2SVd"),c=n("5oMp");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},endd:function(e,t,n){"use strict";function r(e){this.message=e}n("q8oJ"),n("C9fy"),n("8npG"),r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";n("1dPr"),n("klQ5"),n("Ll4R");var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(e,t,n){"use strict";n("6kNP"),n("8npG");var r=n("endd");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},nMRu:function(e,t,n){"use strict";var r=n("P8UN"),o=n("DFzH"),i=n("kxs/");r(r.P+r.F*n("96qb")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=o(this),n=i(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},pQ2P:function(e,t,n){var r=n("P8UN"),o=n("J6QO");r(r.P+r.F*(Date.prototype.toISOString!==o),"Date",{toISOString:o})},tQ2B:function(e,t,n){"use strict";n("JHok"),n("sc67"),n("6kNP"),n("8npG");var r=n("xTJ+"),o=n("Rn+g"),i=n("MLWZ"),a=n("w0Vi"),s=n("OTTw"),c=n("LYNF");e.exports=function(e){return new Promise((function(t,u){var p=e.data,f=e.headers;r.isFormData(p)&&delete f["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";f.Authorization="Basic "+btoa(d+":"+h)}if(l.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};o(t,u,r),l=null}},l.onabort=function(){l&&(u(c("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){u(c("Network Error",e,null,l)),l=null},l.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var m=n("eqyj"),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in l&&r.forEach(f,(function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete f[t]:l.setRequestHeader(t,e)})),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){l&&(l.abort(),u(e),l=null)})),void 0===p&&(p=null),l.send(p)}))}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";n("HXzo"),n("sc67"),n("HQhv"),n("JHok");var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,n){"use strict";n("JHok");var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";n("sC2a"),n("q8oJ"),n("C9fy"),n("8npG");var r=n("HSsa"),o=n("x86X"),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";n("JHok");var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},zuR4:function(e,t,n){"use strict";n("6kNP"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK");var r=n("xTJ+"),o=n("HSsa"),i=n("CgaS"),a=n("SntB");function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n("JEQr"));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=component---src-pages-team-page-js-06c79bc5074355696cdf.js.map