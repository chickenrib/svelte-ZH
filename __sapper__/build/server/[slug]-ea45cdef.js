'use strict';

var index = require('./index-eb65fe33.js');

/* src\routes\blog\[slug].svelte generated by Svelte v3.12.0 */

const css = {
	code: ".post.svelte-ih1crn{padding:var(--top-offset) var(--side-nav) 6rem var(--side-nav);max-width:var(--main-width);margin:0 auto}h1.svelte-ih1crn{font-size:4rem;font-weight:400}.standfirst.svelte-ih1crn{font-size:var(--h4);color:var(--second);margin:0 0 1em 0}.byline.svelte-ih1crn{margin:0 0 6rem 0;padding:1.6rem 0 0 0;border-top:var(--border-w) solid #6767785b;font-size:var(--h6);text-transform:uppercase}.post.svelte-ih1crn h1.svelte-ih1crn{color:var(--second);max-width:20em;margin:0 0 .8rem 0}.post.svelte-ih1crn h2{margin:2em 0 0.5em 0;color:var(--text);font-size:var(--h3);font-weight:300}.post.svelte-ih1crn figure{margin:1.6rem 0 3.2rem 0}.post.svelte-ih1crn figure img{max-width:100%}.post.svelte-ih1crn figcaption{color:var(--second);text-align:left}.post.svelte-ih1crn video{width:100%}.post.svelte-ih1crn blockquote{max-width:none;border-left:4px solid #eee;background:#f9f9f9;border-radius:0 var(--border-r) var(--border-r) 0}.post.svelte-ih1crn code{padding:.3rem .8rem .3rem;margin:0 0.2rem;top:-.1rem;background:var(--back-api)}.post.svelte-ih1crn pre code{padding:0;margin:0;top:0;background:transparent}.post.svelte-ih1crn aside{float:right;margin:0 0 1em 1em;width:16rem;color:var(--second);z-index:2}.post.svelte-ih1crn .max{width:100%}.post.svelte-ih1crn iframe{width:100%;height:420px;margin:2em 0;border-radius:var(--border-r);border:0.8rem solid var(--second)}.post.svelte-ih1crn .offset-anchor{position:relative;display:block;top:calc(-1 * (var(--nav-h) + var(--top-offset) - 1rem));width:0;height:0}.post.svelte-ih1crn .anchor{position:absolute;display:block;background:url(/icons/link.svg) 0 50% no-repeat;background-size:1em 1em;width:1.4em;height:1em;top:calc((var(--h3) - 24px) / 2);left:-1.4em;opacity:0;transition:opacity 0.2s;border:none !important}.post.svelte-ih1crn h2:hover .anchor,.post.svelte-ih1crn h3:hover .anchor,.post.svelte-ih1crn h4:hover .anchor,.post.svelte-ih1crn h5:hover .anchor,.post.svelte-ih1crn h6:hover .anchor{opacity:1}@media(max-width: 768px){.post.svelte-ih1crn .anchor{transform:scale(0.6);opacity:1;top:calc((1em - 0.6 * 24px) / 2);left:-1.0em}}@media(min-width: 910px){.post.svelte-ih1crn .max{width:calc(100vw - 2 * var(--side-nav));margin:0 calc(var(--main-width) / 2 - 50vw);text-align:center}.post.svelte-ih1crn .max>*{width:100%;max-width:1200px}.post.svelte-ih1crn iframe{width:100%;max-width:1100px;margin:2em auto}}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\r\\n\\texport async function preload({ params }) {\\r\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\r\\n\\t\\treturn res.ok ? { post: await res.json() } : this.error(404, 'Not found');\\r\\n\\t}\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n\\texport let post;\\r\\n</script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{post.metadata.title}</title>\\r\\n\\r\\n\\t<meta name=\\\"twitter:title\\\" content={post.metadata.title}>\\r\\n\\t<meta name=\\\"twitter:description\\\" content={post.metadata.description}>\\r\\n\\t<meta name=\\\"Description\\\" content={post.metadata.description}>\\r\\n</svelte:head>\\r\\n\\r\\n<article class='post listify'>\\r\\n\\t<h1>{post.metadata.title}</h1>\\r\\n\\t<p class='standfirst'>{post.metadata.description}</p>\\r\\n\\r\\n\\t<p class='byline'><a href='{post.metadata.authorURL}'>{post.metadata.author}</a> <time datetime='{post.metadata.pubdate}'>{post.metadata.dateString}</time></p>\\r\\n\\r\\n\\t{@html post.html}\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\t.post {\\r\\n\\t\\tpadding: var(--top-offset) var(--side-nav) 6rem var(--side-nav);\\r\\n\\t\\tmax-width: var(--main-width);\\r\\n\\t\\tmargin: 0 auto;\\r\\n\\t}\\r\\n\\r\\n\\th1 {\\r\\n\\t\\tfont-size: 4rem;\\r\\n\\t\\tfont-weight: 400;\\r\\n\\t}\\r\\n\\r\\n\\t.standfirst {\\r\\n\\t\\tfont-size: var(--h4);\\r\\n\\t\\tcolor: var(--second);\\r\\n\\t\\tmargin: 0 0 1em 0;\\r\\n\\t}\\r\\n\\r\\n\\t.byline {\\r\\n\\t\\tmargin: 0 0 6rem 0;\\r\\n\\t\\tpadding: 1.6rem 0 0 0;\\r\\n\\t\\tborder-top: var(--border-w) solid #6767785b;\\r\\n\\t\\tfont-size: var(--h6);\\r\\n\\t\\ttext-transform: uppercase;\\r\\n\\t}\\r\\n\\r\\n\\t.byline a {\\r\\n\\t\\t/* border-bottom: none; */\\r\\n\\t\\t/* font-weight: 600; */\\r\\n\\t}\\r\\n\\r\\n\\t.byline a:hover {\\r\\n\\t\\t/* border-bottom: 2px solid var(--prime); */\\r\\n\\t}\\r\\n\\r\\n\\t.post h1 {\\r\\n\\t\\tcolor: var(--second);\\r\\n\\t\\tmax-width: 20em;\\r\\n\\t\\tmargin: 0 0 .8rem 0;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(h2) {\\r\\n\\t\\tmargin: 2em 0 0.5em 0;\\r\\n\\t\\t/* color: var(--second); */\\r\\n\\t\\tcolor: var(--text);\\r\\n\\t\\tfont-size: var(--h3);\\r\\n\\t\\tfont-weight: 300;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(figure) {\\r\\n\\t\\tmargin: 1.6rem 0 3.2rem 0;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(figure) :global(img) {\\r\\n\\t\\tmax-width: 100%;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(figcaption) {\\r\\n\\t\\tcolor: var(--second);\\r\\n\\t\\ttext-align: left;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(video) {\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(blockquote) {\\r\\n\\t\\tmax-width: none;\\r\\n\\t\\tborder-left: 4px solid #eee;\\r\\n\\t\\tbackground: #f9f9f9;\\r\\n\\t\\tborder-radius: 0 var(--border-r) var(--border-r) 0;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(code) {\\r\\n\\t\\tpadding: .3rem .8rem .3rem;\\r\\n\\t\\tmargin: 0 0.2rem;\\r\\n\\t\\ttop: -.1rem;\\r\\n\\t\\tbackground: var(--back-api);\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(pre) :global(code) {\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tmargin: 0;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tbackground: transparent;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(aside) {\\r\\n\\t\\tfloat: right;\\r\\n\\t\\tmargin: 0 0 1em 1em;\\r\\n\\t\\twidth: 16rem;\\r\\n\\t\\tcolor: var(--second);\\r\\n\\t\\tz-index: 2;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(.max) {\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(iframe) {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 420px;\\r\\n\\t\\tmargin: 2em 0;\\r\\n\\t\\tborder-radius: var(--border-r);\\r\\n\\t\\tborder: 0.8rem solid var(--second);\\r\\n\\t}\\r\\n\\r\\n\\t/* headers anchors */\\r\\n\\r\\n\\t.post :global(.offset-anchor) {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\ttop: calc(-1 * (var(--nav-h) + var(--top-offset) - 1rem));\\r\\n\\t\\twidth: 0;\\r\\n\\t\\theight: 0;\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(.anchor) {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tbackground: url(/icons/link.svg) 0 50% no-repeat;\\r\\n\\t\\tbackground-size: 1em 1em;\\r\\n\\t\\twidth: 1.4em;\\r\\n\\t\\theight: 1em;\\r\\n\\t\\ttop: calc((var(--h3) - 24px) / 2);\\r\\n\\t\\tleft: -1.4em;\\r\\n\\t\\topacity: 0;\\r\\n\\t\\ttransition: opacity 0.2s;\\r\\n\\t\\tborder: none !important; /* TODO get rid of linkify */\\r\\n\\t}\\r\\n\\r\\n\\t.post :global(h2):hover :global(.anchor),\\r\\n\\t.post :global(h3):hover :global(.anchor),\\r\\n\\t.post :global(h4):hover :global(.anchor),\\r\\n\\t.post :global(h5):hover :global(.anchor),\\r\\n\\t.post :global(h6):hover :global(.anchor) {\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\r\\n\\r\\n\\t@media (max-width: 768px) {\\r\\n\\t\\t.post :global(.anchor) {\\r\\n\\t\\t\\ttransform: scale(0.6);\\r\\n\\t\\t\\topacity: 1;\\r\\n\\t\\t\\ttop: calc((1em - 0.6 * 24px) / 2);\\r\\n\\t\\t\\tleft: -1.0em;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@media (min-width: 910px) {\\r\\n\\t\\t.post :global(.max) {\\r\\n\\t\\t\\twidth: calc(100vw - 2 * var(--side-nav));\\r\\n\\t\\t\\tmargin: 0 calc(var(--main-width) / 2 - 50vw);\\r\\n\\t\\t\\ttext-align: center;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t.post :global(.max) > :global(*) {\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\tmax-width: 1200px;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t.post :global(iframe) {\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\tmax-width: 1100px;\\r\\n\\t\\t\\tmargin: 2em auto;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t/* @media (min-width: 1460px) {\\r\\n\\t\\t.post :global(iframe) {\\r\\n\\t\\t\\twidth: 1360px;\\r\\n\\t\\t\\tmargin: 2em -280px;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@media (min-height: 800px) {\\r\\n\\t\\t.post :global(iframe) {\\r\\n\\t\\t\\theight: 640px;\\r\\n\\t\\t}\\r\\n\\t} */\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"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\"}"
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

	<article class="post listify svelte-ih1crn">
		<h1 class="svelte-ih1crn">${index.escape(post.metadata.title)}</h1>
		<p class="standfirst svelte-ih1crn">${index.escape(post.metadata.description)}</p>

		<p class="byline svelte-ih1crn"><a${index.add_attribute("href", post.metadata.authorURL, 0)} class="svelte-ih1crn">${index.escape(post.metadata.author)}</a> <time${index.add_attribute("datetime", post.metadata.pubdate, 0)}>${index.escape(post.metadata.dateString)}</time></p>

		${post.html}
	</article>`;
});

exports.default = Slug;
exports.preload = preload;
