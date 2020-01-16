'use strict';

var index = require('./index-88dc87fc.js');

/* src\routes\blog\[slug].svelte generated by Svelte v3.12.0 */

const css = {
	code: ".post.svelte-s4jvel{padding:var(--top-offset) var(--side-nav) 6rem var(--side-nav);max-width:var(--main-width);margin:0 auto}h1.svelte-s4jvel{font-size:4rem;font-weight:400}.standfirst.svelte-s4jvel{font-size:var(--h4);color:var(--second);margin:0 0 1em 0}.byline.svelte-s4jvel{margin:0 0 6rem 0;padding:1.6rem 0 0 0;border-top:var(--border-w) solid #6767785b;font-size:var(--h6);text-transform:uppercase}.byline.svelte-s4jvel a.svelte-s4jvel{}.byline.svelte-s4jvel a.svelte-s4jvel:hover{}.post.svelte-s4jvel h1.svelte-s4jvel{color:var(--second);max-width:20em;margin:0 0 .8rem 0}.post.svelte-s4jvel h2{margin:2em 0 0.5em 0;color:var(--text);font-size:var(--h3);font-weight:300}.post.svelte-s4jvel figure{margin:1.6rem 0 3.2rem 0}.post.svelte-s4jvel figure img{max-width:100%}.post.svelte-s4jvel figcaption{color:var(--second);text-align:left}.post.svelte-s4jvel video{width:100%}.post.svelte-s4jvel blockquote{max-width:none;border-left:4px solid #eee;background:#f9f9f9;border-radius:0 var(--border-r) var(--border-r) 0}.post.svelte-s4jvel code{padding:.3rem .8rem .3rem;margin:0 0.2rem;top:-.1rem;background:var(--back-api)}.post.svelte-s4jvel pre code{padding:0;margin:0;top:0;background:transparent}.post.svelte-s4jvel aside{float:right;margin:0 0 1em 1em;width:16rem;color:var(--second);z-index:2}.post.svelte-s4jvel .max{width:100%}.post.svelte-s4jvel iframe{width:100%;height:420px;margin:2em 0;border-radius:var(--border-r);border:0.8rem solid var(--second)}.post.svelte-s4jvel .offset-anchor{position:relative;display:block;top:calc(-1 * (var(--nav-h) + var(--top-offset) - 1rem));width:0;height:0}.post.svelte-s4jvel .anchor{position:absolute;display:block;background:url(/icons/link.svg) 0 50% no-repeat;background-size:1em 1em;width:1.4em;height:1em;top:calc((var(--h3) - 24px) / 2);left:-1.4em;opacity:0;transition:opacity 0.2s;border:none !important}.post.svelte-s4jvel h2:hover .anchor,.post.svelte-s4jvel h3:hover .anchor,.post.svelte-s4jvel h4:hover .anchor,.post.svelte-s4jvel h5:hover .anchor,.post.svelte-s4jvel h6:hover .anchor{opacity:1}@media(max-width: 768px){.post.svelte-s4jvel .anchor{transform:scale(0.6);opacity:1;top:calc((1em - 0.6 * 24px) / 2);left:-1.0em}}@media(min-width: 910px){.post.svelte-s4jvel .max{width:calc(100vw - 2 * var(--side-nav));margin:0 calc(var(--main-width) / 2 - 50vw);text-align:center}.post.svelte-s4jvel .max>*{width:100%;max-width:1200px}.post.svelte-s4jvel iframe{width:100%;max-width:1100px;margin:2em auto}}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport async function preload({ params }) {\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\n\\t\\treturn res.ok ? { post: await res.json() } : this.error(404, 'Not found');\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let post;\\n</script>\\n\\n<svelte:head>\\n\\t<title>{post.metadata.title}</title>\\n\\n\\t<meta name=\\\"twitter:title\\\" content={post.metadata.title}>\\n\\t<meta name=\\\"twitter:description\\\" content={post.metadata.description}>\\n\\t<meta name=\\\"Description\\\" content={post.metadata.description}>\\n</svelte:head>\\n\\n<article class='post listify'>\\n\\t<h1>{post.metadata.title}</h1>\\n\\t<p class='standfirst'>{post.metadata.description}</p>\\n\\n\\t<p class='byline'><a href='{post.metadata.authorURL}'>{post.metadata.author}</a> <time datetime='{post.metadata.pubdate}'>{post.metadata.dateString}</time></p>\\n\\n\\t{@html post.html}\\n</article>\\n\\n<style>\\n\\t.post {\\n\\t\\tpadding: var(--top-offset) var(--side-nav) 6rem var(--side-nav);\\n\\t\\tmax-width: var(--main-width);\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 4rem;\\n\\t\\tfont-weight: 400;\\n\\t}\\n\\n\\t.standfirst {\\n\\t\\tfont-size: var(--h4);\\n\\t\\tcolor: var(--second);\\n\\t\\tmargin: 0 0 1em 0;\\n\\t}\\n\\n\\t.byline {\\n\\t\\tmargin: 0 0 6rem 0;\\n\\t\\tpadding: 1.6rem 0 0 0;\\n\\t\\tborder-top: var(--border-w) solid #6767785b;\\n\\t\\tfont-size: var(--h6);\\n\\t\\ttext-transform: uppercase;\\n\\t}\\n\\n\\t.byline a {\\n\\t\\t/* border-bottom: none; */\\n\\t\\t/* font-weight: 600; */\\n\\t}\\n\\n\\t.byline a:hover {\\n\\t\\t/* border-bottom: 2px solid var(--prime); */\\n\\t}\\n\\n\\t.post h1 {\\n\\t\\tcolor: var(--second);\\n\\t\\tmax-width: 20em;\\n\\t\\tmargin: 0 0 .8rem 0;\\n\\t}\\n\\n\\t.post :global(h2) {\\n\\t\\tmargin: 2em 0 0.5em 0;\\n\\t\\t/* color: var(--second); */\\n\\t\\tcolor: var(--text);\\n\\t\\tfont-size: var(--h3);\\n\\t\\tfont-weight: 300;\\n\\t}\\n\\n\\t.post :global(figure) {\\n\\t\\tmargin: 1.6rem 0 3.2rem 0;\\n\\t}\\n\\n\\t.post :global(figure) :global(img) {\\n\\t\\tmax-width: 100%;\\n\\t}\\n\\n\\t.post :global(figcaption) {\\n\\t\\tcolor: var(--second);\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t.post :global(video) {\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.post :global(blockquote) {\\n\\t\\tmax-width: none;\\n\\t\\tborder-left: 4px solid #eee;\\n\\t\\tbackground: #f9f9f9;\\n\\t\\tborder-radius: 0 var(--border-r) var(--border-r) 0;\\n\\t}\\n\\n\\t.post :global(code) {\\n\\t\\tpadding: .3rem .8rem .3rem;\\n\\t\\tmargin: 0 0.2rem;\\n\\t\\ttop: -.1rem;\\n\\t\\tbackground: var(--back-api);\\n\\t}\\n\\n\\t.post :global(pre) :global(code) {\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\ttop: 0;\\n\\t\\tbackground: transparent;\\n\\t}\\n\\n\\t.post :global(aside) {\\n\\t\\tfloat: right;\\n\\t\\tmargin: 0 0 1em 1em;\\n\\t\\twidth: 16rem;\\n\\t\\tcolor: var(--second);\\n\\t\\tz-index: 2;\\n\\t}\\n\\n\\t.post :global(.max) {\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.post :global(iframe) {\\n\\t\\twidth: 100%;\\n\\t\\theight: 420px;\\n\\t\\tmargin: 2em 0;\\n\\t\\tborder-radius: var(--border-r);\\n\\t\\tborder: 0.8rem solid var(--second);\\n\\t}\\n\\n\\t/* headers anchors */\\n\\n\\t.post :global(.offset-anchor) {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: block;\\n\\t\\ttop: calc(-1 * (var(--nav-h) + var(--top-offset) - 1rem));\\n\\t\\twidth: 0;\\n\\t\\theight: 0;\\n\\t}\\n\\n\\t.post :global(.anchor) {\\n\\t\\tposition: absolute;\\n\\t\\tdisplay: block;\\n\\t\\tbackground: url(/icons/link.svg) 0 50% no-repeat;\\n\\t\\tbackground-size: 1em 1em;\\n\\t\\twidth: 1.4em;\\n\\t\\theight: 1em;\\n\\t\\ttop: calc((var(--h3) - 24px) / 2);\\n\\t\\tleft: -1.4em;\\n\\t\\topacity: 0;\\n\\t\\ttransition: opacity 0.2s;\\n\\t\\tborder: none !important; /* TODO get rid of linkify */\\n\\t}\\n\\n\\t.post :global(h2):hover :global(.anchor),\\n\\t.post :global(h3):hover :global(.anchor),\\n\\t.post :global(h4):hover :global(.anchor),\\n\\t.post :global(h5):hover :global(.anchor),\\n\\t.post :global(h6):hover :global(.anchor) {\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\n\\t@media (max-width: 768px) {\\n\\t\\t.post :global(.anchor) {\\n\\t\\t\\ttransform: scale(0.6);\\n\\t\\t\\topacity: 1;\\n\\t\\t\\ttop: calc((1em - 0.6 * 24px) / 2);\\n\\t\\t\\tleft: -1.0em;\\n\\t\\t}\\n\\t}\\n\\n\\t@media (min-width: 910px) {\\n\\t\\t.post :global(.max) {\\n\\t\\t\\twidth: calc(100vw - 2 * var(--side-nav));\\n\\t\\t\\tmargin: 0 calc(var(--main-width) / 2 - 50vw);\\n\\t\\t\\ttext-align: center;\\n\\t\\t}\\n\\n\\t\\t.post :global(.max) > :global(*) {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tmax-width: 1200px;\\n\\t\\t}\\n\\n\\t\\t.post :global(iframe) {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tmax-width: 1100px;\\n\\t\\t\\tmargin: 2em auto;\\n\\t\\t}\\n\\t}\\n\\n\\t/* @media (min-width: 1460px) {\\n\\t\\t.post :global(iframe) {\\n\\t\\t\\twidth: 1360px;\\n\\t\\t\\tmargin: 2em -280px;\\n\\t\\t}\\n\\t}\\n\\n\\t@media (min-height: 800px) {\\n\\t\\t.post :global(iframe) {\\n\\t\\t\\theight: 640px;\\n\\t\\t}\\n\\t} */\\n</style>\\n\"],\"names\":[],\"mappings\":\"AA6BC,KAAK,cAAC,CAAC,AACN,OAAO,CAAE,IAAI,YAAY,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,IAAI,CAAC,IAAI,UAAU,CAAC,CAC/D,SAAS,CAAE,IAAI,YAAY,CAAC,CAC5B,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,WAAW,cAAC,CAAC,AACZ,SAAS,CAAE,IAAI,IAAI,CAAC,CACpB,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AAClB,CAAC,AAED,OAAO,cAAC,CAAC,AACR,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAClB,OAAO,CAAE,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACrB,UAAU,CAAE,IAAI,UAAU,CAAC,CAAC,KAAK,CAAC,SAAS,CAC3C,SAAS,CAAE,IAAI,IAAI,CAAC,CACpB,cAAc,CAAE,SAAS,AAC1B,CAAC,AAED,qBAAO,CAAC,CAAC,cAAC,CAAC,AAGX,CAAC,AAED,qBAAO,CAAC,eAAC,MAAM,AAAC,CAAC,AAEjB,CAAC,AAED,mBAAK,CAAC,EAAE,cAAC,CAAC,AACT,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,mBAAK,CAAC,AAAQ,EAAE,AAAE,CAAC,AAClB,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAErB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,SAAS,CAAE,IAAI,IAAI,CAAC,CACpB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,mBAAK,CAAC,AAAQ,MAAM,AAAE,CAAC,AACtB,MAAM,CAAE,MAAM,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,AAC1B,CAAC,AAED,mBAAK,CAAC,AAAQ,MAAM,AAAC,CAAC,AAAQ,GAAG,AAAE,CAAC,AACnC,SAAS,CAAE,IAAI,AAChB,CAAC,AAED,mBAAK,CAAC,AAAQ,UAAU,AAAE,CAAC,AAC1B,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,mBAAK,CAAC,AAAQ,KAAK,AAAE,CAAC,AACrB,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,mBAAK,CAAC,AAAQ,UAAU,AAAE,CAAC,AAC1B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC3B,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,CAAC,AACnD,CAAC,AAED,mBAAK,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpB,OAAO,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAC1B,MAAM,CAAE,CAAC,CAAC,MAAM,CAChB,GAAG,CAAE,MAAM,CACX,UAAU,CAAE,IAAI,UAAU,CAAC,AAC5B,CAAC,AAED,mBAAK,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACjC,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,GAAG,CAAE,CAAC,CACN,UAAU,CAAE,WAAW,AACxB,CAAC,AAED,mBAAK,CAAC,AAAQ,KAAK,AAAE,CAAC,AACrB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CACnB,KAAK,CAAE,KAAK,CACZ,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,OAAO,CAAE,CAAC,AACX,CAAC,AAED,mBAAK,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpB,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,mBAAK,CAAC,AAAQ,MAAM,AAAE,CAAC,AACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,GAAG,CAAC,CAAC,CACb,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,MAAM,CAAE,MAAM,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,AACnC,CAAC,AAID,mBAAK,CAAC,AAAQ,cAAc,AAAE,CAAC,AAC9B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAAK,CACd,GAAG,CAAE,KAAK,EAAE,CAAC,CAAC,CAAC,CAAC,IAAI,OAAO,CAAC,CAAC,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACzD,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,AACV,CAAC,AAED,mBAAK,CAAC,AAAQ,OAAO,AAAE,CAAC,AACvB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,IAAI,eAAe,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,SAAS,CAChD,eAAe,CAAE,GAAG,CAAC,GAAG,CACxB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CACX,GAAG,CAAE,KAAK,CAAC,IAAI,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjC,IAAI,CAAE,MAAM,CACZ,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IAAI,CACxB,MAAM,CAAE,IAAI,CAAC,UAAU,AACxB,CAAC,AAED,mBAAK,CAAC,AAAQ,EAAE,AAAC,MAAM,CAAC,AAAQ,OAAO,AAAC,CACxC,mBAAK,CAAC,AAAQ,EAAE,AAAC,MAAM,CAAC,AAAQ,OAAO,AAAC,CACxC,mBAAK,CAAC,AAAQ,EAAE,AAAC,MAAM,CAAC,AAAQ,OAAO,AAAC,CACxC,mBAAK,CAAC,AAAQ,EAAE,AAAC,MAAM,CAAC,AAAQ,OAAO,AAAC,CACxC,mBAAK,CAAC,AAAQ,EAAE,AAAC,MAAM,CAAC,AAAQ,OAAO,AAAE,CAAC,AACzC,OAAO,CAAE,CAAC,AACX,CAAC,AAGD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,mBAAK,CAAC,AAAQ,OAAO,AAAE,CAAC,AACvB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,CAAC,CACV,GAAG,CAAE,KAAK,CAAC,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjC,IAAI,CAAE,MAAM,AACb,CAAC,AACF,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,mBAAK,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpB,KAAK,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,CACxC,MAAM,CAAE,CAAC,CAAC,KAAK,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5C,UAAU,CAAE,MAAM,AACnB,CAAC,AAED,mBAAK,CAAC,AAAQ,IAAI,AAAC,CAAW,CAAC,AAAE,CAAC,AACjC,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,AAClB,CAAC,AAED,mBAAK,CAAC,AAAQ,MAAM,AAAE,CAAC,AACtB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AACF,CAAC\"}"
};

async function preload({ params }) {
	const res = await this.fetch(`blog/${params.slug}.json`);
	return res.ok ? { post: await res.json() } : this.error(404, 'Not found');
}

const Slug = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;

	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);

	$$result.css.add(css);

	return `${($$result.head += `<title>${index.escape(post.metadata.title)}</title><meta name="twitter:title"${index.add_attribute("content", post.metadata.title, 0)}><meta name="twitter:description"${index.add_attribute("content", post.metadata.description, 0)}><meta name="Description"${index.add_attribute("content", post.metadata.description, 0)}>`, "")}

	<article class="post listify svelte-s4jvel">
		<h1 class="svelte-s4jvel">${index.escape(post.metadata.title)}</h1>
		<p class="standfirst svelte-s4jvel">${index.escape(post.metadata.description)}</p>

		<p class="byline svelte-s4jvel"><a${index.add_attribute("href", post.metadata.authorURL, 0)} class="svelte-s4jvel">${index.escape(post.metadata.author)}</a> <time${index.add_attribute("datetime", post.metadata.pubdate, 0)}>${index.escape(post.metadata.dateString)}</time></p>

		${post.html}
	</article>`;
});

exports.default = Slug;
exports.preload = preload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLWFlYjU5M2EzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMgfSkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGJsb2cvJHtwYXJhbXMuc2x1Z30uanNvbmApO1xuXHRcdHJldHVybiByZXMub2sgPyB7IHBvc3Q6IGF3YWl0IHJlcy5qc29uKCkgfSA6IHRoaXMuZXJyb3IoNDA0LCAnTm90IGZvdW5kJyk7XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IHBvc3Q7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+e3Bvc3QubWV0YWRhdGEudGl0bGV9PC90aXRsZT5cblxuXHQ8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3Bvc3QubWV0YWRhdGEudGl0bGV9PlxuXHQ8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QubWV0YWRhdGEuZGVzY3JpcHRpb259PlxuXHQ8bWV0YSBuYW1lPVwiRGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0Lm1ldGFkYXRhLmRlc2NyaXB0aW9ufT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxhcnRpY2xlIGNsYXNzPSdwb3N0IGxpc3RpZnknPlxuXHQ8aDE+e3Bvc3QubWV0YWRhdGEudGl0bGV9PC9oMT5cblx0PHAgY2xhc3M9J3N0YW5kZmlyc3QnPntwb3N0Lm1ldGFkYXRhLmRlc2NyaXB0aW9ufTwvcD5cblxuXHQ8cCBjbGFzcz0nYnlsaW5lJz48YSBocmVmPSd7cG9zdC5tZXRhZGF0YS5hdXRob3JVUkx9Jz57cG9zdC5tZXRhZGF0YS5hdXRob3J9PC9hPiA8dGltZSBkYXRldGltZT0ne3Bvc3QubWV0YWRhdGEucHViZGF0ZX0nPntwb3N0Lm1ldGFkYXRhLmRhdGVTdHJpbmd9PC90aW1lPjwvcD5cblxuXHR7QGh0bWwgcG9zdC5odG1sfVxuPC9hcnRpY2xlPlxuXG48c3R5bGU+XG5cdC5wb3N0IHtcblx0XHRwYWRkaW5nOiB2YXIoLS10b3Atb2Zmc2V0KSB2YXIoLS1zaWRlLW5hdikgNnJlbSB2YXIoLS1zaWRlLW5hdik7XG5cdFx0bWF4LXdpZHRoOiB2YXIoLS1tYWluLXdpZHRoKTtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDRyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0fVxuXG5cdC5zdGFuZGZpcnN0IHtcblx0XHRmb250LXNpemU6IHZhcigtLWg0KTtcblx0XHRjb2xvcjogdmFyKC0tc2Vjb25kKTtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdC5ieWxpbmUge1xuXHRcdG1hcmdpbjogMCAwIDZyZW0gMDtcblx0XHRwYWRkaW5nOiAxLjZyZW0gMCAwIDA7XG5cdFx0Ym9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLXcpIHNvbGlkICM2NzY3Nzg1Yjtcblx0XHRmb250LXNpemU6IHZhcigtLWg2KTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHR9XG5cblx0LmJ5bGluZSBhIHtcblx0XHQvKiBib3JkZXItYm90dG9tOiBub25lOyAqL1xuXHRcdC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXG5cdH1cblxuXHQuYnlsaW5lIGE6aG92ZXIge1xuXHRcdC8qIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltZSk7ICovXG5cdH1cblxuXHQucG9zdCBoMSB7XG5cdFx0Y29sb3I6IHZhcigtLXNlY29uZCk7XG5cdFx0bWF4LXdpZHRoOiAyMGVtO1xuXHRcdG1hcmdpbjogMCAwIC44cmVtIDA7XG5cdH1cblxuXHQucG9zdCA6Z2xvYmFsKGgyKSB7XG5cdFx0bWFyZ2luOiAyZW0gMCAwLjVlbSAwO1xuXHRcdC8qIGNvbG9yOiB2YXIoLS1zZWNvbmQpOyAqL1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0KTtcblx0XHRmb250LXNpemU6IHZhcigtLWgzKTtcblx0XHRmb250LXdlaWdodDogMzAwO1xuXHR9XG5cblx0LnBvc3QgOmdsb2JhbChmaWd1cmUpIHtcblx0XHRtYXJnaW46IDEuNnJlbSAwIDMuMnJlbSAwO1xuXHR9XG5cblx0LnBvc3QgOmdsb2JhbChmaWd1cmUpIDpnbG9iYWwoaW1nKSB7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHR9XG5cblx0LnBvc3QgOmdsb2JhbChmaWdjYXB0aW9uKSB7XG5cdFx0Y29sb3I6IHZhcigtLXNlY29uZCk7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxuXG5cdC5wb3N0IDpnbG9iYWwodmlkZW8pIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXG5cdC5wb3N0IDpnbG9iYWwoYmxvY2txdW90ZSkge1xuXHRcdG1heC13aWR0aDogbm9uZTtcblx0XHRib3JkZXItbGVmdDogNHB4IHNvbGlkICNlZWU7XG5cdFx0YmFja2dyb3VuZDogI2Y5ZjlmOTtcblx0XHRib3JkZXItcmFkaXVzOiAwIHZhcigtLWJvcmRlci1yKSB2YXIoLS1ib3JkZXItcikgMDtcblx0fVxuXG5cdC5wb3N0IDpnbG9iYWwoY29kZSkge1xuXHRcdHBhZGRpbmc6IC4zcmVtIC44cmVtIC4zcmVtO1xuXHRcdG1hcmdpbjogMCAwLjJyZW07XG5cdFx0dG9wOiAtLjFyZW07XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tYmFjay1hcGkpO1xuXHR9XG5cblx0LnBvc3QgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHRvcDogMDtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0fVxuXG5cdC5wb3N0IDpnbG9iYWwoYXNpZGUpIHtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDFlbTtcblx0XHR3aWR0aDogMTZyZW07XG5cdFx0Y29sb3I6IHZhcigtLXNlY29uZCk7XG5cdFx0ei1pbmRleDogMjtcblx0fVxuXG5cdC5wb3N0IDpnbG9iYWwoLm1heCkge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cblx0LnBvc3QgOmdsb2JhbChpZnJhbWUpIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDQyMHB4O1xuXHRcdG1hcmdpbjogMmVtIDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXIpO1xuXHRcdGJvcmRlcjogMC44cmVtIHNvbGlkIHZhcigtLXNlY29uZCk7XG5cdH1cblxuXHQvKiBoZWFkZXJzIGFuY2hvcnMgKi9cblxuXHQucG9zdCA6Z2xvYmFsKC5vZmZzZXQtYW5jaG9yKSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHRvcDogY2FsYygtMSAqICh2YXIoLS1uYXYtaCkgKyB2YXIoLS10b3Atb2Zmc2V0KSAtIDFyZW0pKTtcblx0XHR3aWR0aDogMDtcblx0XHRoZWlnaHQ6IDA7XG5cdH1cblxuXHQucG9zdCA6Z2xvYmFsKC5hbmNob3IpIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0YmFja2dyb3VuZDogdXJsKC9pY29ucy9saW5rLnN2ZykgMCA1MCUgbm8tcmVwZWF0O1xuXHRcdGJhY2tncm91bmQtc2l6ZTogMWVtIDFlbTtcblx0XHR3aWR0aDogMS40ZW07XG5cdFx0aGVpZ2h0OiAxZW07XG5cdFx0dG9wOiBjYWxjKCh2YXIoLS1oMykgLSAyNHB4KSAvIDIpO1xuXHRcdGxlZnQ6IC0xLjRlbTtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcblx0XHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgLyogVE9ETyBnZXQgcmlkIG9mIGxpbmtpZnkgKi9cblx0fVxuXG5cdC5wb3N0IDpnbG9iYWwoaDIpOmhvdmVyIDpnbG9iYWwoLmFuY2hvciksXG5cdC5wb3N0IDpnbG9iYWwoaDMpOmhvdmVyIDpnbG9iYWwoLmFuY2hvciksXG5cdC5wb3N0IDpnbG9iYWwoaDQpOmhvdmVyIDpnbG9iYWwoLmFuY2hvciksXG5cdC5wb3N0IDpnbG9iYWwoaDUpOmhvdmVyIDpnbG9iYWwoLmFuY2hvciksXG5cdC5wb3N0IDpnbG9iYWwoaDYpOmhvdmVyIDpnbG9iYWwoLmFuY2hvcikge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXG5cdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHRcdC5wb3N0IDpnbG9iYWwoLmFuY2hvcikge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuXHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdHRvcDogY2FsYygoMWVtIC0gMC42ICogMjRweCkgLyAyKTtcblx0XHRcdGxlZnQ6IC0xLjBlbTtcblx0XHR9XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogOTEwcHgpIHtcblx0XHQucG9zdCA6Z2xvYmFsKC5tYXgpIHtcblx0XHRcdHdpZHRoOiBjYWxjKDEwMHZ3IC0gMiAqIHZhcigtLXNpZGUtbmF2KSk7XG5cdFx0XHRtYXJnaW46IDAgY2FsYyh2YXIoLS1tYWluLXdpZHRoKSAvIDIgLSA1MHZ3KTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHQucG9zdCA6Z2xvYmFsKC5tYXgpID4gOmdsb2JhbCgqKSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdG1heC13aWR0aDogMTIwMHB4O1xuXHRcdH1cblxuXHRcdC5wb3N0IDpnbG9iYWwoaWZyYW1lKSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdG1heC13aWR0aDogMTEwMHB4O1xuXHRcdFx0bWFyZ2luOiAyZW0gYXV0bztcblx0XHR9XG5cdH1cblxuXHQvKiBAbWVkaWEgKG1pbi13aWR0aDogMTQ2MHB4KSB7XG5cdFx0LnBvc3QgOmdsb2JhbChpZnJhbWUpIHtcblx0XHRcdHdpZHRoOiAxMzYwcHg7XG5cdFx0XHRtYXJnaW46IDJlbSAtMjgwcHg7XG5cdFx0fVxuXHR9XG5cblx0QG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkge1xuXHRcdC5wb3N0IDpnbG9iYWwoaWZyYW1lKSB7XG5cdFx0XHRoZWlnaHQ6IDY0MHB4O1xuXHRcdH1cblx0fSAqL1xuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNRLGVBQWUsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUU7Q0FDekMsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUN6RCxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztDQUMxRTs7O0NBSU0sTUFBSSxnQkFBSSxDQUFDOzs7Ozs7b0RBSVIsbUJBQW1CLHFFQUVTLG1CQUFtQix1RUFDYix5QkFBeUIsK0RBQ2pDLHlCQUF5Qjs7OzJDQUl0RCxtQkFBbUI7cURBQ0QseUJBQXlCOztrRUFFcEIsdUJBQXVCLDJDQUFJLG9CQUFvQiw4Q0FBdUIscUJBQXFCLHFCQUFJLHdCQUF3Qjs7SUFFNUksU0FBUzs7Ozs7OzsifQ==
