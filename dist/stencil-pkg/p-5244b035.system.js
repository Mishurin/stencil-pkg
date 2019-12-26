var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="stencil-pkg";var a=0;var i=false;var s;var o;var l=typeof window!=="undefined"?window:{};var f=l.document||{head:{}};var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var c=function(){return!!f.head.attachShadow}();var $=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var v=new WeakMap;var h=function(e){return v.get(e)};var d=e("r",(function(e,r){return v.set(r.$lazyInstance$=e,r)}));var m=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return v.set(e,r)};var p=function(e){return console.error(e)};var g=new Map;var y=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=g.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{g.set(i,e)}return e[a]}),p)};var w=new Map;var b=[];var _=[];var S=[];var R=function(e,r){return function(t){e.push(t);if(!i){i=true;if(r&&u.$flags$&4){E(C)}else{u.raf(C)}}}};var x=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){p(t)}}e.length=0};var j=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){p(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var C=function(){a++;x(b);var e=(u.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(_,e);j(S,e);if(_.length>0){S.push.apply(S,_);_.length=0}if(i=b.length+_.length+S.length>0){u.raf(C)}else{a=0}};var E=function(e){return Promise.resolve().then(e)};var N=R(_,true);var L=function(e){return e!=null};var U=function(e){e=typeof e;return e==="object"||e==="function"};var O=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var P=e("a",(function(){if(!(l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){u.$cssShim$=l.__stencil_cssshim;if(u.$cssShim$){return u.$cssShim$.initShim()}}))}return Promise.resolve()}));var k=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{u.$cssShim$=l.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(f.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,l.location.href));A(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-7f10eb01.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var A=function(e){var r=O(n);try{l[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var t=new Map;l[r]=function(n){var a=new URL(n,e).href;var i=t.get(a);if(!i){var s=f.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(l[r].m);s.remove()}}));t.set(a,i);f.head.appendChild(s)}return i}}};var M=function(e,r){if(e!=null&&!U(e)){if(r&1){return String(e)}return e}return e};var B="hydrated";var I=function(e,r){if(r===void 0){r=""}{return function(){return}}};var T=function(e,r){{return function(){return}}};var H=new WeakMap;var z=function(e,r,t){var n=w.get(e);if($&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}w.set(e,n)};var q=function(e,r,t,n){var a=F(r.$tagName$);var i=w.get(a);e=e.nodeType===11?e:f;if(i){if(typeof i==="string"){e=e.head||e;var s=H.get(e);var o=void 0;if(!s){H.set(e,s=new Set)}if(!s.has(a)){{if(u.$cssShim$){o=u.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=f.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var V=function(e,r,t){var n=I("attachStyles",r.$tagName$);var a=q(c&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var F=function(e,r){return"sc-"+e};var W=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o=[];var l=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!U(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?G(null,a):a)}s=i}}};l(t);var f=G(e,null);f.$attrs$=r;if(o.length>0){f.$children$=o}return f}));var G=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};return t};var Q={};var D=function(e){return e&&e.$tag$===Q};var J=function(e,r,t,n){var a=r.$children$[t];var i=0;var o;var l;if(a.$text$!==null){o=a.$elm$=f.createTextNode(a.$text$)}else{o=a.$elm$=f.createElement(a.$tag$);if(L(s)&&o["s-si"]!==s){o.classList.add(o["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=J(e,a,i);if(l){o.appendChild(l)}}}}return o};var K=function(e,r,t,n,a,i){var s=e;var l;if(s.shadowRoot&&s.tagName===o){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){l=J(null,t,a);if(l){n[a].$elm$=l;s.insertBefore(l,r)}}}};var X=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;a.remove()}}};var Y=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=n.length-1;var u=n[0];var c=n[f];var $;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if(u==null){u=n[++i]}else if(c==null){c=n[--f]}else if(Z(o,u)){ee(o,u);o=r[++a];u=n[++i]}else if(Z(l,c)){ee(l,c);l=r[--s];c=n[--f]}else if(Z(o,c)){ee(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];c=n[--f]}else if(Z(l,u)){ee(l,u);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];u=n[++i]}else{{$=J(r&&r[i],t,i);u=n[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){K(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){X(r,a,s)}};var Z=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var ee=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;if(r.$text$===null){if(n!==null&&a!==null){Y(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}K(t,null,r,a,0,a.length-1)}else if(n!==null){X(n,0,n.length-1)}}else if(e.$text$!==r.$text$){t.data=r.$text$}};var re=function(e,r,t,n){o=e.tagName;var a=r.$vnode$||G(null,null);var i=D(n)?n:W(null,null,n);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}ee(a,i)};var te=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ne=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=I("scheduleUpdate",t.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var o=function(){return ae(e,r,t,s,n)};te(r,i);var l;a();return fe(l,(function(){return N(o)}))};var ae=function(e,r,t,n,a){var i=I("update",t.$tagName$);var s=e["s-rc"];if(a){V(e,t,r.$modeName$)}var o=I("render",t.$tagName$);{{re(e,r,t,ie(n))}}if(u.$cssShim$){u.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var f=function(){return se(e,r,t)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var ie=function(e,r){try{e=e.render()}catch(t){p(t)}return e};var se=function(e,r,t){var n=I("postUpdate",t.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(B)}n();{r.$onReadyResolve$(e);if(!a){le()}}}else{n()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){E((function(){return ne(e,r,t,false)}))}r.$flags$&=~(4|512)}};var oe=function(e,r){{var t=h(e);var n=t.$hostElement$.isConnected;if(n&&(t.$flags$&(2|16))===2){ne(e,t,r,false)}return n}};var le=function(e){{f.documentElement.classList.add(B)}{u.$flags$|=2}};var fe=function(e,r){return e&&e.then?e.then(r):r()};var ue=function(e,r){return h(e).$instanceValues$.get(r)};var ce=function(e,r,t,n){var a=h(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var o=a.$flags$;var l=a.$lazyInstance$;t=M(t,n.$members$[r][0]);if(t!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(r,t);if(l){if((o&(2|16))===2){ne(i,a,n,false)}}}};var $e=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return ue(this,n)},set:function(e){ce(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;u.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var ve=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var t,i,o,l,f,u,c;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=y(a);if(!s.then)return[3,2];t=T();return[4,s];case 1:s=$.sent();t();$.label=2;case 2:if(!s.isProxied){$e(s,a,2);s.isProxied=true}i=I("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){p(v)}{n.$flags$&=~8}i();o=F(a.$tagName$);if(!(!w.has(o)&&s.style))return[3,5];l=I("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,o,false)}))];case 3:f=$.sent();$.label=4;case 4:z(o,f,!!(a.$flags$&1));l();$.label=5;case 5:u=n.$ancestorComponent$;c=function(){return ne(e,n,a,true)};if(u&&u["s-rc"]){u["s-rc"].push(c)}else{c()}return[2]}}))}))};var he=function(e,r){if((u.$flags$&1)===0){var t=I("connectedCallback",r.$tagName$);var n=h(e);if(!(n.$flags$&1)){n.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){te(n,n.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{E((function(){return ve(e,n,r)}))}}t()}};var de=function(e){if((u.$flags$&1)===0){var r=h(e);if(u.$cssShim$){u.$cssShim$.removeHost(e)}}};var me=e("b",(function(e,r){if(r===void 0){r={}}var t=I();var n=[];var a=r.exclude||[];var i=f.head;var s=l.customElements;var o=i.querySelector("meta[charset]");var $=f.createElement("style");var v=[];var d;var p=true;Object.assign(u,r);u.$resourcesUrl$=new URL(r.resourcesUrl||"./",f.baseURI).href;if(r.syncQueue){u.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}if(!c&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;m(r);if(t.$flags$&1){if(c){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(d){clearTimeout(d);d=null}if(p){v.push(this)}else{u.jmp((function(){return he(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return de(e)}))};r.prototype.forceUpdate=function(){oe(this,t)};r.prototype.componentOnReady=function(){return h(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,$e(o,t,1))}}))}));$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";$.setAttribute("data-styles","");i.insertBefore($,o?o.nextSibling:i.firstChild);p=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{u.jmp((function(){return d=setTimeout(le,30,"timeout")}))}t()}))}}}));