(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Preview"],{"0cb2":function(e,t,n){var r=n("7b0b"),o=Math.floor,i="".replace,a=/\$([$&'`]|\d\d?|<[^>]*>)/g,c=/\$([$&'`]|\d\d?)/g;e.exports=function(e,t,n,u,s,l){var f=n+e.length,d=u.length,p=c;return void 0!==s&&(s=r(s),p=a),i.call(l,p,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":a=s[i.slice(1,-1)];break;default:var c=+i;if(0===c)return r;if(c>d){var l=o(c/10);return 0===l?r:l<=d?void 0===u[l-1]?i.charAt(1):u[l-1]+i.charAt(1):r}a=u[c-1]}return void 0===a?"":a}))}},"14c3":function(e,t,n){var r=n("c6b6"),o=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"21a6":function(e,t,n){(function(n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){u(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,c=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var c=a.URL||a.webkitURL,u=document.createElement("a");t=t||e.name||"download",u.download=t,u.rel="noopener","string"==typeof e?(u.href=e,u.origin===location.origin?i(u):o(u.href)?r(e,t,n):i(u,u.target="_blank")):(u.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(u.href)}),4e4),setTimeout((function(){i(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(o(e))r(e,n,a);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){i(c)}))}}:function(e,t,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var i="application/octet-stream"===e.type,u=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&u||c)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},l.readAsDataURL(e)}else{var f=a.URL||a.webkitURL,d=f.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});a.saveAs=u.saveAs=u,e.exports=u}))}).call(this,n("c8ba"))},"265e":function(e,t,n){"use strict";n("e886")},"3de5":function(e,t,n){"use strict";n("d07c")},5319:function(e,t,n){"use strict";var r=n("d784"),o=n("825a"),i=n("50c4"),a=n("a691"),c=n("1d80"),u=n("8aa5"),s=n("0cb2"),l=n("14c3"),f=Math.max,d=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,v=h?"$":"$0";return[function(n,r){var o=c(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!h&&g||"string"===typeof r&&-1===r.indexOf(v)){var c=n(t,e,this,r);if(c.done)return c.value}var m=o(e),w=String(this),y="function"===typeof r;y||(r=String(r));var b=m.global;if(b){var x=m.unicode;m.lastIndex=0}var E=[];while(1){var P=l(m,w);if(null===P)break;if(E.push(P),!b)break;var R=String(P[0]);""===R&&(m.lastIndex=u(w,i(m.lastIndex),x))}for(var A="",S=0,T=0;T<E.length;T++){P=E[T];for(var C=String(P[0]),I=f(d(a(P.index),w.length),0),U=[],L=1;L<P.length;L++)U.push(p(P[L]));var _=P.groups;if(y){var j=[C].concat(U,I,w);void 0!==_&&j.push(_);var O=String(r.apply(void 0,j))}else O=s(C,w,I,U,_,r);I>=S&&(A+=w.slice(S,I)+O,S=I+C.length)}return A+w.slice(S)}]}))},"5b0b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview"},[n("section",{staticClass:"section__left"},[n("div",{staticClass:"toolbar"},[n("p",{staticClass:"logo"},[e._v("Jigsaw-H5")]),n("p",{staticClass:"slogan"},[e._v("让页面搭建如拼凑拼图般简单")]),n("div",{staticClass:"btn-group"},[n("el-button",{attrs:{type:"info",round:""},on:{click:e.goback}},[e._v("返 回")]),n("el-button",{attrs:{type:"success",round:""},on:{click:e.generatePoster}},[e._v(" 生成海报 ")])],1),n("div",{staticClass:"scan-qrcode"},[n("p",{staticClass:"tip"},[e._v("🔖 手机扫码体验一下")]),n("img",{staticClass:"qrcode",attrs:{src:e.qrcode,draggable:"false"}})])])]),n("section",{staticClass:"section__right"},[n("simulation-phone")],1)])},o=[],i=(n("99af"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),a=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"simulation-phone"},[n("div",{staticClass:"viewport",style:{width:e.viewportWidth+"px",height:e.viewportHeight+"px"},attrs:{id:"viewport"}},[n("renderer",{attrs:{page:e.page}})],1)])},u=[],s=n("8336"),l=n("2f62"),f={name:"SimulationPhone",components:{Renderer:s["a"]},computed:Object(a["a"])({},Object(l["c"])({page:function(e){return e.editor.page},viewportWidth:function(e){return e.editor.viewportWidth},viewportHeight:function(e){return e.editor.viewportHeight}}))},d=f,p=(n("265e"),n("2877")),h=Object(p["a"])(d,c,u,!1,null,"78cd1517",null),g=h.exports,v=n("70b0"),m=n.n(v),w=n("d055"),y=n.n(w),b=n("21a6"),x=n("45a2"),E={name:"Preview",components:{SimulationPhone:g},data:function(){return{pageId:null,qrcode:null}},created:function(){var e=this;this.pageId=this.$route.query.id,this.pageId||this.$message({message:"预览失败,2S后将自动跳转至首页",type:"error",duration:2e3,onClose:function(){e.$router.replace({name:"Dashboard"})}}),this.fetchPage(this.pageId),this.generateQR()},methods:Object(a["a"])(Object(a["a"])({},Object(l["b"])(["setPage","setPageId"])),{},{fetchPage:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(x["e"])(e);case 2:r=n.sent,o=r.data,t.setPage(JSON.parse(o.page)),t.setPageId(e);case 6:case"end":return n.stop()}}),n)})))()},goback:function(){this.$router.push({name:"OperatingFloor",query:{id:this.pageId}})},generatePoster:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=document.getElementById("page"),m.a.toBlob(t).then((function(e){return Object(b["saveAs"])(e,"poster.png")}));case 2:case"end":return e.stop()}}),e)})))()},generateQR:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=window.location.host,r="http://".concat(n,"/#/page?id=").concat(e.pageId),o={color:{dark:"#000000",light:"#f7f8fa"}},t.prev=3,t.next=6,y.a.toDataURL(r,o);case 6:e.qrcode=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),e.$message.error("二维码生成失败");case 12:case"end":return t.stop()}}),t,null,[[3,9]])})))()}})},P=E,R=(n("3de5"),Object(p["a"])(P,r,o,!1,null,"4264889c",null));t["default"]=R.exports},"70b0":function(e,t,n){(function(t){"use strict";var n=y(),r=b(),o=x(),i=E(),a={imagePlaceholder:void 0,cacheBust:!1},c={toSvg:u,toPng:l,toJpeg:f,toBlob:d,toPixelData:s,impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function u(e,t){return t=t||{},p(t),Promise.resolve(e).then((function(e){return g(e,t.filter,!0)})).then(v).then(m).then(r).then((function(r){return w(r,t.width||n.width(e),t.height||n.height(e))}));function r(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]})),e}}function s(e,t){return h(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))}function l(e,t){return h(e,t||{}).then((function(e){return e.toDataURL()}))}function f(e,t){return t=t||{},h(e,t).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))}function d(e,t){return h(e,t||{}).then(n.canvasToBlob)}function p(e){"undefined"===typeof e.imagePlaceholder?c.impl.options.imagePlaceholder=a.imagePlaceholder:c.impl.options.imagePlaceholder=e.imagePlaceholder,"undefined"===typeof e.cacheBust?c.impl.options.cacheBust=a.cacheBust:c.impl.options.cacheBust=e.cacheBust}function h(e,t){return u(e,t).then(n.makeImage).then(n.delay(100)).then((function(t){var n=r(e);return n.getContext("2d").drawImage(t,0,0),n}));function r(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}}function g(e,t,r){return r||!t||t(e)?Promise.resolve(e).then(o).then((function(n){return i(e,n,t)})).then((function(t){return a(e,t)})):Promise.resolve();function o(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)}function i(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):i(t,n.asArray(o),r).then((function(){return t}));function i(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return g(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}}function a(e,t){return t instanceof Element?Promise.resolve().then(r).then(o).then(i).then(a).then((function(){return t})):t;function r(){function r(e,t){function r(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}e.cssText?t.cssText=e.cssText:r(e,t)}r(window.getComputedStyle(e),t.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=n.uid();t.className=t.className+" "+a;var c=document.createElement("style");c.appendChild(u(a,r,o)),t.appendChild(c)}function u(e,t,r){var o="."+e+":"+t,i=r.cssText?a(r):c(r);return document.createTextNode(o+"{"+i+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function c(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){r(e)}))}function i(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function a(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))}}}function v(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function m(e){return i.inlineAll(e).then((function(){return e}))}function w(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}function y(){return{escape:d,parseExtension:t,mimeType:n,dataAsUrl:f,isDataUrl:r,canvasToBlob:i,resolveUrl:a,getAndEncode:l,uid:u(),delay:p,asArray:h,escapeXhtml:g,makeImage:s,width:v,height:m};function e(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(n){var r=t(n).toLowerCase();return e()[r]||""}function r(e){return-1!==e.search(/^(data:)/)}function o(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}function i(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):o(e)}function a(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href}function u(){var e=0;return function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function s(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))}function l(e){var t=3e4;return c.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=a,o.ontimeout=u,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),c.impl.options.imagePlaceholder){var i=c.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)}else r?n(r):s("cannot fetch resource: "+e+", status: "+o.status)}function u(){r?n(r):s("timeout of "+t+"ms occured while fetching resource: "+e)}function s(e){console.error(e),n("")}}))}function f(e,t){return"data:"+t+";base64,"+e}function d(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function p(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}}function h(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}function g(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")}function v(e){var t=w(e,"border-left-width"),n=w(e,"border-right-width");return e.scrollWidth+t+n}function m(e){var t=w(e,"border-top-width"),n=w(e,"border-bottom-width");return e.scrollHeight+t+n}function w(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}function b(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:i,shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){var r,o=[];while(null!==(r=e.exec(t)))o.push(r[1]);return o.filter((function(e){return!n.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(n){return e.replace(i(t),"$1"+n+"$3")}));function i(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}}function i(e,n,i){return a()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,n,i)}))})),r}));function a(){return!t(e)}}}function x(){return{resolveAll:e,impl:{readAll:t}};function e(){return t(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))}function t(){return Promise.resolve(n.asArray(document.styleSheets)).then(t).then(e).then((function(e){return e.map(o)}));function e(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))}function t(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(r){console.log("Error while reading CSS rules from "+e.href,r.toString())}})),t}function o(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}function E(){return{inlineAll:t,impl:{newImage:e}};function e(e){return{inline:t};function t(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}function t(o){return o instanceof Element?i(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o);function i(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}}}e.exports=c})()},"768e":function(e,t,n){"use strict";n("fe61")},8336:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("grid-layout",{staticClass:"page",attrs:{id:"page",layout:e.page,"col-num":24,"row-height":1,"is-draggable":!1,"is-resizable":!1,"is-mirrored":!1,"vertical-compact":!0,margin:[0,0]},on:{"update:layout":function(t){e.page=t}}},e._l(e.page,(function(e){return n("grid-item",{key:e.i,staticClass:"item",attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i}},[n("layout-item",{attrs:{material:e}})],1)})),1)},o=[],i=n("7be8"),a=n("5807"),c={name:"LayoutEdit",components:{GridLayout:i["GridLayout"],GridItem:i["GridItem"],LayoutItem:a["a"]},props:{page:{type:Array,require:!0}}},u=c,s=(n("768e"),n("2877")),l=Object(s["a"])(u,r,o,!1,null,"a8e71646",null);t["a"]=l.exports},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),o=n("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,u=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||s;f&&(c=function(e){var t,n,o,c,f=this,d=s&&f.sticky,p=r.call(f),h=f.source,g=0,v=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),n=new RegExp("^(?:"+h+")",p)),l&&(n=new RegExp("^"+h+"$(?!\\s)",p)),u&&(t=f.lastIndex),o=i.call(d?n:f,v),d?o?(o.input=o.input.slice(g),o[0]=o[0].slice(g),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:u&&o&&(f.lastIndex=f.global?o.index+o[0].length:t),l&&o&&o.length>1&&a.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),e.exports=c},"9f7f":function(e,t,n){"use strict";var r=n("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},d07c:function(e,t,n){},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),i=n("b622"),a=n("9263"),c=n("9112"),u=i("species"),s=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var h=i(e),g=!o((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),v=g&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!g||!v||"replace"===e&&(!s||!l||d)||"split"===e&&!p){var m=/./[h],w=n(h,""[e],(function(e,t,n,r,o){return t.exec===a?g&&!o?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=w[0],b=w[1];r(String.prototype,e,y),r(RegExp.prototype,h,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}f&&c(RegExp.prototype[h],"sham",!0)}},e886:function(e,t,n){},fe61:function(e,t,n){}}]);
//# sourceMappingURL=Preview.c55d511a.js.map