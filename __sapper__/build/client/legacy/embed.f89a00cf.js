import"./typeof.15db5c64.js";import"./slicedToArray.a2759e85.js";import"./_commonjsHelpers.7baa5521.js";import"./asyncToGenerator.66a36f43.js";import{_ as e,a as t,b as n,c as i,i as a,s,d as o,S as r,t as c,u as m,v as p,w as l,e as u,o as f,f as v,g as d,h as g,q as x,j as h,m as j,l as $}from"./index.a0792a5e.js";import"./index.510d187e.js";import"./Repl.2f644460.js";import"./examples.7e162774.js";import"./InputOutputToggle.1722f5cc.js";import{R as E}from"./ReplWidget.ab2d4239.js";function b(e){var t,n,i,a,s,o,r=function(e){var t,n=new E({props:{version:e.version,gist:e.gist,example:e.example,embedded:!0}});return{c:function(){n.$$.fragment.c()},l:function(e){n.$$.fragment.l(e)},m:function(e,i){c(n,e,i),t=!0},p:function(e,t){var i={};e.version&&(i.version=t.version),e.gist&&(i.gist=t.gist),e.example&&(i.example=t.example),n.$set(i)},i:function(e){t||(m(n.$$.fragment,e),t=!0)},o:function(e){p(n.$$.fragment,e),t=!1},d:function(e){l(n,e)}}}(e);return{c:function(){t=u("meta"),n=u("meta"),i=u("meta"),a=f(),s=u("div"),r&&r.c(),this.h()},l:function(e){t=v(e,"META",{name:!0,content:!0},!1),d(t).forEach(g),n=v(e,"META",{name:!0,content:!0},!1),d(n).forEach(g),i=v(e,"META",{name:!0,content:!0},!1),d(i).forEach(g),a=x(e),s=v(e,"DIV",{class:!0},!1);var o=d(s);r&&r.l(o),o.forEach(g),this.h()},h:function(){document.title="REPL • Svelte",h(t,"name","twitter:title"),h(t,"content","Svelte REPL"),h(n,"name","twitter:description"),h(n,"content","Cybernetically enhanced web apps"),h(i,"name","Description"),h(i,"content","Interactive Svelte playground"),h(s,"class","repl-outer svelte-b43nxq")},m:function(e,c){j(document.head,t),j(document.head,n),j(document.head,i),$(e,a,c),$(e,s,c),r&&r.m(s,null),o=!0},p:function(e,t){r.p(e,t)},i:function(e){o||(m(r),o=!0)},o:function(e){p(r),o=!1},d:function(e){g(t),g(n),g(i),e&&(g(a),g(s)),r&&r.d()}}}function y(e){var t=e.query;return{version:t.version,gist:t.gist,example:t.example}}function T(e,t,n){var i=t.version,a=void 0===i?"3":i,s=t.gist,o=t.example;return e.$set=function(e){"version"in e&&n("version",a=e.version),"gist"in e&&n("gist",s=e.gist),"example"in e&&n("example",o=e.example)},{version:a,gist:s,example:o}}var w=function(c){function m(e){var r;return t(this,m),r=n(this,i(m).call(this)),a(o(r),e,T,b,s,["version","gist","example"]),r}return e(m,r),m}();export default w;export{y as preload};
