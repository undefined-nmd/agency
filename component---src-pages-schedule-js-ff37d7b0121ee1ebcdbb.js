(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,s=r(a("PJYZ")),n=r(a("VbXa")),l=r(a("8OQS")),d=r(a("pVnL")),c=r(a("q1tI")),o=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),c.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+n+l+a+r+t+s+i+d+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=c.default.createElement(C,(0,d.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),s):s},C=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,o=e.onError,u=e.onClick,f=e.loading,m=e.draggable,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return c.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},p,{onLoad:n,onError:o,onClick:u,ref:t,loading:f,draggable:m,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));C.propTypes={style:o.default.object,onError:o.default.func,onClick:o.default.func,onLoad:o.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,o=e.placeholderStyle,f=void 0===o?{}:o,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,w=e.loading,z=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,d.default)({opacity:R?1:0,transition:O?"opacity "+b+"ms":"none"},l),V="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&T,{},l,{},f),x={title:t,alt:this.state.isVisible?"":a,style:k,className:m,itemProp:y};if(p){var W=p,q=W[0];return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),V&&c.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&T)}),q.base64&&c.default.createElement(I,{src:q.base64,spreadProps:x,imageVariants:W,generateSources:N}),q.tracedSVG&&c.default.createElement(I,{src:q.tracedSVG,spreadProps:x,imageVariants:W,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(W),c.default.createElement(C,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:w,draggable:z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:w},q,{imageVariants:W}))}}))}if(g){var M=g,P=M[0],j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},s);return"inherit"===s.display&&delete j.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},V&&c.default.createElement(v,{title:t,style:(0,d.default)({backgroundColor:V,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},O&&T)}),P.base64&&c.default.createElement(I,{src:P.base64,spreadProps:x,imageVariants:M,generateSources:N}),P.tracedSVG&&c.default.createElement(I,{src:P.tracedSVG,spreadProps:x,imageVariants:M,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(M),c.default.createElement(C,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:y,loading:w,draggable:z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:w},P,{imageVariants:M}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),A=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string});R.propTypes={resolutions:O,sizes:A,fixed:o.default.oneOfType([O,o.default.arrayOf(O)]),fluid:o.default.oneOfType([A,o.default.arrayOf(A)]),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onClick:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var V=R;t.default=V},FBU5:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),s=(a("Wbzz"),a("Bl7J")),n=(a("ezAz"),a("9eSz"),a("y1TK"),a("wmEu"),a("vrFN"));var l=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={trigger:!0},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement(s.a,null,i.a.createElement(n.a,{title:"Schedule"}),i.a.createElement("div",{className:"hero-img-detail"},i.a.createElement("h1",{className:"project-title"},"Schedule"),i.a.createElement("div",{className:"subtitles-detail"},i.a.createElement("h5",{className:"subtitle-text-detail"},"By undefined"),i.a.createElement("div",{className:"line-detail"}),i.a.createElement("h5",{className:"date-text-detail"},"2019"))),i.a.createElement("div",{className:"content-div-detail"},i.a.createElement("div",{className:"schedule-parent"},i.a.createElement("div",{className:"schedule-day-div"},i.a.createElement("h3",{className:"schedule-day-name"},"Monday"),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"Web of Things"),i.a.createElement("p",null,"8:45 - 13:00")),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"Lunch break"),i.a.createElement("p",null,"13:00 - 14:00")),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"Web of Things"),i.a.createElement("p",null,"14:00 - 16:00"))),i.a.createElement("div",{className:"schedule-day-div"},i.a.createElement("h3",{className:"schedule-day-name"},"Tuesday"),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"CMS Development"),i.a.createElement("p",null,"8:45 - 12:00"))),i.a.createElement("div",{className:"schedule-day-div"},i.a.createElement("h3",{className:"schedule-day-name"},"Wednesday"),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"CMS Development"),i.a.createElement("p",null,"9:45 - 12:00")),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"Lunch break"),i.a.createElement("p",null,"12:00 - 13:00")),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"IBD-III"),i.a.createElement("p",null,"13:00 - 16:00"))),i.a.createElement("div",{className:"schedule-day-div"},i.a.createElement("h3",{className:"schedule-day-name"},"Thursday"),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"Crossmedial project"),i.a.createElement("p",null,"13:00 - 16:00"))),i.a.createElement("div",{className:"schedule-day-div"},i.a.createElement("h3",{className:"schedule-day-name"},"Friday"),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"RZL & PROCOM"),i.a.createElement("p",null,"9:45 - 12:00")),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"Lunch break"),i.a.createElement("p",null,"12:00 - 13:00")),i.a.createElement("div",{className:"class-div"},i.a.createElement("h5",null,"Mixed Reality"),i.a.createElement("p",null,"13:00 - 16:00"))))))},r}(r.Component);t.default=l},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),s=a("ap2Z"),n=/"/g,l=function(e,t,a,r){var i=String(s(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(n,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-schedule-js-ff37d7b0121ee1ebcdbb.js.map