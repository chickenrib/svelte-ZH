import{_ as e}from"./slicedToArray.a2759e85.js";function t(t){return t.map(function(t){var p=t.name.split("."),n=e(p,2);return{name:n[0],type:n[1],source:t.source}}).sort(function(e,t){return"App"===e.name&&"svelte"===e.type?-1:"App"===t.name&&"svelte"===t.type?1:e.type===t.type?e.name<t.name?-1:1:"svelte"===e.type?-1:"svelte"===t.type?1:void 0})}export{t as p};
