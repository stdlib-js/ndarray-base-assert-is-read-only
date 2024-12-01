// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),r.alternate&&(t=p.call(t,y,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var S=String.fromCharCode,O=Array.isArray;function E(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,u,f,l,s,p,g,d,y;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+j(y):j(y)+p)),u+=n.arg||"",f+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var V,P=Object.prototype,F=P.toString,N=P.__defineGetter__,$=P.__defineSetter__,C=P.__lookupGetter__,L=P.__lookupSetter__;V=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var B=V;function R(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;function M(r,e){return null!=r&&Z.call(r,e)}var U="function"==typeof Symbol?Symbol:void 0,D="function"==typeof U?U.toStringTag:"";var H=X()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[D],e=M(r,D);try{r[D]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[D]=t:delete r[D],n}:function(r){return Y.call(r)},z=Boolean,q=Boolean.prototype.toString;var J=X();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Q(r){return G(r)||K(r)}R(Q,"isPrimitive",G),R(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof tr?tr:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!G(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(er)return er;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr,lr=/^\s*function\s*([^(]*)/i;R(cr,"REGEXP",lr),fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var sr=fr;function pr(r){return null!==r&&"object"==typeof r}var gr=function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr);function dr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return pr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}R(pr,"isObjectLikeArray",gr);var yr="function"==typeof r||"object"==typeof ur||"function"==typeof ar?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};var hr,br=(hr=Object.assign,"function"===yr(hr)),vr=Object.assign;function wr(r){return Object.keys(Object(r))}var mr=void 0!==Object.keys;function jr(r){return"[object Arguments]"===H(r)}var Sr=function(){return jr(arguments)}();function Or(r){return"string"==typeof r}var Er=String.prototype.valueOf;var _r=X();function kr(r){return"object"==typeof r&&(r instanceof String||(_r?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Tr(r){return Or(r)||kr(r)}function xr(r){return"number"==typeof r}R(Tr,"isPrimitive",Or),R(Tr,"isObject",kr);var Ir=Number,Ar=Ir.prototype.toString;var Vr=X();function Pr(r){return"object"==typeof r&&(r instanceof Ir||(Vr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Fr(r){return xr(r)||Pr(r)}function Nr(r){return r!=r}function $r(r){return xr(r)&&Nr(r)}function Cr(r){return Pr(r)&&Nr(r.valueOf())}function Lr(r){return $r(r)||Cr(r)}R(Fr,"isPrimitive",xr),R(Fr,"isObject",Pr),R(Lr,"isPrimitive",$r),R(Lr,"isObject",Cr);var Br=Number.POSITIVE_INFINITY,Rr=Ir.NEGATIVE_INFINITY,Gr=Math.floor;function Wr(r){return Gr(r)===r}function Xr(r){return r<Br&&r>Rr&&Wr(r)}function Yr(r){return xr(r)&&Xr(r)}function Zr(r){return Pr(r)&&Xr(r.valueOf())}function Mr(r){return Yr(r)||Zr(r)}R(Mr,"isPrimitive",Yr),R(Mr,"isObject",Zr);var Ur=Object.prototype.propertyIsEnumerable;var Dr=!Ur.call("beep","0");function Hr(r,e){var t;return null!=r&&(!(t=Ur.call(r,e))&&Dr&&Tr(r)?!$r(e=+e)&&Yr(e)&&e>=0&&e<r.length:t)}var zr;zr=Sr?jr:function(r){return null!==r&&"object"==typeof r&&!sr(r)&&"number"==typeof r.length&&Wr(r.length)&&r.length>=0&&r.length<=4294967295&&M(r,"callee")&&!Hr(r,"callee")};var qr=zr,Jr=Array.prototype.slice;var Kr=Hr((function(){}),"prototype"),Qr=!Hr({toString:null},"toString"),re=9007199254740991;function ee(r,e,t){var n,i;if(!function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Wr(r.length)&&r.length>=0&&r.length<=re}(r)&&!Or(r))throw new TypeError(A("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Yr(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Lr(e)){for(;i<n;i++)if(Lr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function te(r){return r.constructor&&r.constructor.prototype===r}var ne=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ie="undefined"==typeof window?void 0:window;var oe=function(){var r;if("undefined"===yr(ie))return!1;for(r in ie)try{-1===ee(ne,r)&&M(ie,r)&&null!==ie[r]&&"object"===yr(ie[r])&&te(ie[r])}catch(r){return!0}return!1}(),ae="undefined"!=typeof window;var ue,ce=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ue=mr?function(){return 2!==(wr(arguments)||"").length}(1,2)?function(r){return qr(r)?wr(Jr.call(r)):wr(r)}:wr:function(r){var e,t,n,i,o,a,u;if(i=[],qr(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!M(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!pr(r))return i;t=Kr&&n}for(o in r)t&&"prototype"===o||!M(r,o)||i.push(String(o));if(Qr)for(e=function(r){if(!1===ae&&!oe)return te(r);try{return te(r)}catch(r){return!1}}(r),u=0;u<ce.length;u++)a=ce[u],e&&"constructor"===a||!M(r,a)||i.push(String(a));return i};var fe,le=ue,se=void 0!==Object.getOwnPropertySymbols,pe=Object,ge=pe.getOwnPropertySymbols;fe=se?function(r){return ge(pe(r))}:function(){return[]};var de,ye=fe;function he(r){var e,t,n;for(e=le(r),t=ye(r),n=0;n<t.length;n++)Hr(r,t[n])&&e.push(t[n]);return e}de=br?vr:function(r){var e,t,n,i,o,a,u;if(null==r)throw new TypeError(A("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(o=pe(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(i=(t=he(pe(e))).length,u=0;u<i;u++)o[n=t[u]]=e[n];return o};var be=de;function ve(r,e){return function(r,e){var t=r.flags;return"object"!=typeof t||null===t?{}:e?be({},t):t}(r,!1)[e]}function we(r){return!0===ve(r,"READONLY")}export{we as default};
//# sourceMappingURL=mod.js.map
