!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){let n=document.createElement("div"),r=document.createElement("h2");r.innerText=e;let i=document.createElement("p");return i.innerText=t,n.appendChild(r),n.appendChild(i),n}n.r(t);const i=[{title:"Article 1",description:"Lorem ipsum1"},{title:"Article 2",description:"Lorem ipsum2"},{title:"Article 3",description:"Lorem ipsum3"},{title:"Article 4",description:"Lorem ipsum4"},{title:"Article 5",description:"Lorem ipsum5"},{title:"Article 6",description:"Lorem ipsum6"},{title:"Article 7",description:"Lorem ipsum7"},{title:"Article 8",description:"Lorem ipsum8"}];window.onload=function(){const e=document.createElement("h1");e.innerText="Welcome",document.body.appendChild(e);const t=r("My first news","Hello blablabla");let n,o;document.body.appendChild(t);for(let e=0;e<i.length;e++)n=r(i[e].title,i[e].description),o=document.getElementById("div"),o.appendChild(n)}}]);