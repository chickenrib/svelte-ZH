import{S as e,i as t,s,e as n,j as a,c,a as o,d as i,l as r,b as m,h as d,g as h,m as p,t as f,p as l,q as u}from"./index.502c1ca4.js";import"./index.1637ca2d.js";import{D as $}from"./index.5bd105b7.js";function b(e){var t,s,b,j,w,x=new $({props:{sections:e.sections}});return{c(){t=n("meta"),s=n("meta"),b=n("meta"),j=a(),x.$$.fragment.c(),this.h()},l(e){t=c(e,"META",{name:!0,content:!0},!1),o(t).forEach(i),s=c(e,"META",{name:!0,content:!0},!1),o(s).forEach(i),b=c(e,"META",{name:!0,content:!0},!1),o(b).forEach(i),j=r(e),x.$$.fragment.l(e),this.h()},h(){document.title="API Docs • Svelte",m(t,"name","twitter:title"),m(t,"content","Svelte API docs"),m(s,"name","twitter:description"),m(s,"content","Cybernetically enhanced web apps"),m(b,"name","Description"),m(b,"content","Cybernetically enhanced web apps")},m(e,n){d(document.head,t),d(document.head,s),d(document.head,b),h(e,j,n),p(x,e,n),w=!0},p(e,t){var s={};e.sections&&(s.sections=t.sections),x.$set(s)},i(e){w||(f(x.$$.fragment,e),w=!0)},o(e){l(x.$$.fragment,e),w=!1},d(e){i(t),i(s),i(b),e&&i(j),u(x,e)}}}async function j(){return{sections:await this.fetch("docs.json").then(e=>e.json())}}function w(e,t,s){let{sections:n}=t;return e.$set=e=>{"sections"in e&&s("sections",n=e.sections)},{sections:n}}export default class extends e{constructor(e){super(),t(this,e,w,b,s,["sections"])}}export{j as preload};
