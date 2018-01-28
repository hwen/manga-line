!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueLightTimeline=t():e.vueLightTimeline=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(e,t,n,r,i,o){var s,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,a=e.default);var c,u="function"==typeof a?a.options:a;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=r),c){var f=u.functional,d=f?u.render:u.beforeCreate;f?(u._injectStyles=c,u.render=function(e,t){return c.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:s,exports:a,options:u}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(10);var r,i=n(11),o=(r=i)&&r.__esModule?r:{default:r};t.default={name:"light-timeline",components:{Star:o.default},props:{items:{type:Array}},data:function(){return{presetReg:/purple|orange|yellow/}},created:function(){},methods:{getColorClass:function(e){return this.presetReg.test(e)?e:""},getStyle:function(e){var t=e.color;return this.presetReg.test(t)?{}:"star"===e.type?this.makeStarColor(t):this.makeCircleColor(t)},makeCircleColor:function(e){return console.log("make circle: "+e),{border:"2px solid "+e}},makeStarColor:function(e){return{stroke:e}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"svgStar",props:{pathStyle:{type:Object,default:function(){return{}}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Timeline=void 0;var r,i=n(4),o=(r=i)&&r.__esModule?r:{default:r};t.default={install:function(e,t){e.component("light-timeline",o.default)}},t.Timeline=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var s=n(13),a=!1;var l=function(e){a||n(5)},c=n(0)(i.a,s.a,!1,l,null,null);c.options.__file="src\\core\\Timeline.vue",t.default=c.exports},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("758c8431",r,!1,{})},function(e,t,n){(e.exports=n(7)(!1)).push([e.i,'\n:root {\n  --purple: #8b80f9;\n  --orange: #ed9153;\n  --yellow: #fbd157;\n}\n.line-container {\n  color: #606c76;\n  font-size: 14px;\n  font-family: "Helvetica Neue For Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  box-sizing: border-box;\n  position: relative;\n  list-style: none;\n  margin: .5rem;\n  padding-left: 6rem;\n}\n.line-container::after {\n    position: absolute;\n    content: "";\n    left: 5rem;\n    top: 0;\n    width: 1px;\n    height: 100%;\n    background-color: #e4e1fe;\n}\n.line-container .line-item {\n    padding: 1rem;\n    position: relative;\n}\n.line-container .item-circle {\n    box-sizing: border-box;\n    position: absolute;\n    left: -1rem;\n    margin-left: -7px;\n    z-index: 1;\n    width: 16px;\n    height: 16px;\n    border-radius: 10px;\n    background: white;\n    border: 2px solid #8b80f9;\n}\n.line-container .item-circle.purple {\n      border: 2px solid #8b80f9;\n}\n.line-container .item-circle.orange {\n      border: 2px solid #ed9153;\n}\n.line-container .item-circle.yellow {\n      border: 2px solid #fbd157;\n}\n.line-container .item-star {\n    box-sizing: border-box;\n    position: absolute;\n    left: -1rem;\n    margin-left: -11px;\n    z-index: 1;\n    width: 24px;\n    height: 24px;\n    margin-top: -4px;\n}\n.line-container .item-star path {\n      stroke: #8b80f9;\n      stroke-width: 4px;\n      fill: white;\n}\n.line-container .item-star.purple path {\n      stroke: #8b80f9;\n}\n.line-container .item-star.orange path {\n      stroke: #ed9153;\n}\n.line-container .item-star.yellow path {\n      stroke: #fbd157;\n}\n.line-container .item-tag {\n    position: absolute;\n    left: -5rem;\n    margin-left: -0.9rem;\n    color: #949fa8;\n    font-size: 11.66667px;\n}\n.line-container .item-content {\n    cursor: crosshair;\n}\n.line-container .item-content.star {\n      font-weight: bold;\n      font-size: 15.4px;\n}\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(9),o={},s=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,c=!1,u=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(h(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(h(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function h(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(p){var i=l++;r=a||(a=v()),t=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=v(),t=function(e,t){var n=t.css,r=t.media,i=t.sourceMap;r&&e.setAttribute("media",r);f.ssrId&&e.setAttribute(ssridKey,t.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){c=n,f=r||{};var s=i(e,t);return m(s),function(t){for(var n=[],r=0;r<s.length;r++){var a=s[r];(l=o[a.id]).refs--,n.push(l)}t?m(s=i(e,t)):s=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}};var g,b=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function y(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var s=n(12),a=n(0)(i.a,s.a,!1,null,null,null);a.options.__file="src\\base\\star.vue",t.default=a.exports},function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{id:"star",viewBox:"0 0 50 50"}},[t("path",{style:this.pathStyle,attrs:{d:"M37.727,33.037l2.067,12.057\nc0.104,0.607-0.132,1.188-0.63,1.549c-0.5,0.361-1.121,0.406-1.667,0.121L26.669,41.07c-0.521-0.273-1.097-0.412-1.669-0.412\nc-0.573,0-1.146,0.139-1.669,0.413l-10.826,5.692c-0.547,0.285-1.169,0.24-1.668-0.121s-0.733-0.941-0.63-1.549l2.068-12.057\nc0.199-1.163-0.187-2.35-1.031-3.174l-8.761-8.539c-0.441-0.431-0.592-1.038-0.4-1.623c0.19-0.587,0.668-0.989,1.277-1.078\nl12.105-1.759c1.168-0.169,2.179-0.902,2.701-1.961l5.413-10.97c0.272-0.553,0.804-0.882,1.42-0.882\nc0.616,0,1.147,0.329,1.421,0.882l5.413,10.97c0.522,1.059,1.531,1.792,2.699,1.961l12.106,1.759\nc0.609,0.089,1.088,0.491,1.277,1.078c0.191,0.585,0.041,1.192-0.4,1.623l-8.76,8.539C37.912,30.688,37.525,31.873,37.727,33.037z"}})])};r._withStripped=!0;var i={render:r,staticRenderFns:[]};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"line-container"},e._l(e.items,function(t){return n("li",{staticClass:"line-item"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"circle"===t.type,expression:'item.type==="circle"'}],staticClass:"item-circle",class:e.getColorClass(t.color),style:e.getStyle(t)}),n("star",{directives:[{name:"show",rawName:"v-show",value:"star"===t.type,expression:'item.type==="star"'}],staticClass:"item-star",class:e.getColorClass(t.color),attrs:{"path-style":e.getStyle(t)}}),n("div",{staticClass:"item-tag"},[e._v(e._s(t.tag))]),n("div",{staticClass:"item-content",class:t.type},[e._v(e._s(t.content))])],1)}))};r._withStripped=!0;var i={render:r,staticRenderFns:[]};t.a=i}])});