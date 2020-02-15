(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1581669208656;

	const files = [
		"service-worker-index.html",
		"examples/thumbnails/7guis-circles.jpg",
		"examples/thumbnails/7guis-counter.jpg",
		"examples/thumbnails/7guis-crud.jpg",
		"examples/thumbnails/7guis-flight-booker.jpg",
		"examples/thumbnails/7guis-temperature.jpg",
		"examples/thumbnails/7guis-timer.jpg",
		"examples/thumbnails/actions.jpg",
		"examples/thumbnails/adding-parameters-to-actions.jpg",
		"examples/thumbnails/adding-parameters-to-transitions.jpg",
		"examples/thumbnails/animate.jpg",
		"examples/thumbnails/area-chart.jpg",
		"examples/thumbnails/auto-subscriptions.jpg",
		"examples/thumbnails/await-blocks.jpg",
		"examples/thumbnails/bar-chart.jpg",
		"examples/thumbnails/bind-this.jpg",
		"examples/thumbnails/checkbox-inputs.jpg",
		"examples/thumbnails/class-shorthand.jpg",
		"examples/thumbnails/classes.jpg",
		"examples/thumbnails/clock.jpg",
		"examples/thumbnails/component-bindings.jpg",
		"examples/thumbnails/component-events.jpg",
		"examples/thumbnails/context-api.jpg",
		"examples/thumbnails/custom-css-transitions.jpg",
		"examples/thumbnails/custom-js-transitions.jpg",
		"examples/thumbnails/custom-stores.jpg",
		"examples/thumbnails/debug.jpg",
		"examples/thumbnails/declaring-props.jpg",
		"examples/thumbnails/default-values.jpg",
		"examples/thumbnails/deferred-transitions.jpg",
		"examples/thumbnails/derived-stores.jpg",
		"examples/thumbnails/dimensions.jpg",
		"examples/thumbnails/dom-event-forwarding.jpg",
		"examples/thumbnails/dom-events.jpg",
		"examples/thumbnails/dynamic-attributes.jpg",
		"examples/thumbnails/each-block-bindings.jpg",
		"examples/thumbnails/each-blocks.jpg",
		"examples/thumbnails/easing.jpg",
		"examples/thumbnails/else-blocks.jpg",
		"examples/thumbnails/else-if-blocks.jpg",
		"examples/thumbnails/event-forwarding.jpg",
		"examples/thumbnails/event-modifiers.jpg",
		"examples/thumbnails/group-inputs.jpg",
		"examples/thumbnails/hacker-news.jpg",
		"examples/thumbnails/hello-world.jpg",
		"examples/thumbnails/html-tags.jpg",
		"examples/thumbnails/if-blocks.jpg",
		"examples/thumbnails/immutable-data.jpg",
		"examples/thumbnails/in-and-out.jpg",
		"examples/thumbnails/inline-handlers.jpg",
		"examples/thumbnails/keyed-each-blocks.jpg",
		"examples/thumbnails/media-elements.jpg",
		"examples/thumbnails/modal.jpg",
		"examples/thumbnails/module-exports.jpg",
		"examples/thumbnails/multiple-select-bindings.jpg",
		"examples/thumbnails/named-slots.jpg",
		"examples/thumbnails/nested-components.jpg",
		"examples/thumbnails/numeric-inputs.jpg",
		"examples/thumbnails/ondestroy.jpg",
		"examples/thumbnails/onmount.jpg",
		"examples/thumbnails/reactive-assignments.jpg",
		"examples/thumbnails/reactive-declarations.jpg",
		"examples/thumbnails/reactive-statements.jpg",
		"examples/thumbnails/readable-stores.jpg",
		"examples/thumbnails/scatterplot.jpg",
		"examples/thumbnails/select-bindings.jpg",
		"examples/thumbnails/sharing-code.jpg",
		"examples/thumbnails/slot-fallbacks.jpg",
		"examples/thumbnails/slot-props.jpg",
		"examples/thumbnails/slots.jpg",
		"examples/thumbnails/spread-props.jpg",
		"examples/thumbnails/spring.jpg",
		"examples/thumbnails/styling.jpg",
		"examples/thumbnails/svelte-body.jpg",
		"examples/thumbnails/svelte-component.jpg",
		"examples/thumbnails/svelte-head.jpg",
		"examples/thumbnails/svelte-self.jpg",
		"examples/thumbnails/svelte-window-bindings.jpg",
		"examples/thumbnails/svelte-window.jpg",
		"examples/thumbnails/svg-transitions.jpg",
		"examples/thumbnails/text-inputs.jpg",
		"examples/thumbnails/textarea-inputs.jpg",
		"examples/thumbnails/tick.jpg",
		"examples/thumbnails/transition-events.jpg",
		"examples/thumbnails/transition.jpg",
		"examples/thumbnails/tweened.jpg",
		"examples/thumbnails/update.jpg",
		"examples/thumbnails/writable-stores.jpg",
		"favicon.ico",
		"favicon.png",
		"fonts/fira-mono/fira-mono-latin-400.woff2",
		"fonts/overpass/overpass-latin-100.woff2",
		"fonts/overpass/overpass-latin-300.woff2",
		"fonts/overpass/overpass-latin-400.woff2",
		"fonts/overpass/overpass-latin-600.woff2",
		"fonts/overpass/overpass-latin-700.woff2",
		"fonts/roboto/roboto-latin-400.woff2",
		"fonts/roboto/roboto-latin-400italic.woff2",
		"fonts/roboto/roboto-latin-500.woff2",
		"fonts/roboto/roboto-latin-500italic.woff2",
		"global.css",
		"icons/arrow-right.svg",
		"icons/check.svg",
		"icons/chevron.svg",
		"icons/collapse.svg",
		"icons/download.svg",
		"icons/dropdown.svg",
		"icons/edit.svg",
		"icons/expand.svg",
		"icons/flip.svg",
		"icons/fork.svg",
		"icons/link.svg",
		"icons/loading.svg",
		"icons/save.svg",
		"images/svelte-android-chrome-192.png",
		"images/svelte-android-chrome-512.png",
		"images/svelte-apple-touch-icon.png",
		"images/svelte-mstile-150.png",
		"images/twitter-card.png",
		"manifest.json",
		"media/rethinking-best-practices.jpg",
		"organisations/1password.png",
		"organisations/ablab.svg",
		"organisations/absoluteweb.svg",
		"organisations/bekchy.png",
		"organisations/beyonk.svg",
		"organisations/buydotstar.svg",
		"organisations/cashfree.svg",
		"organisations/chess.svg",
		"organisations/comigo.svg",
		"organisations/datawrapper.svg",
		"organisations/dbnomics.jpg",
		"organisations/dbnomics.webp",
		"organisations/deck.svg",
		"organisations/dextra.png",
		"organisations/entriwise.png",
		"organisations/entur.svg",
		"organisations/farmbox.svg",
		"organisations/from-now-on.png",
		"organisations/fusioncharts.svg",
		"organisations/godaddy.svg",
		"organisations/grainger.svg",
		"organisations/healthtree.png",
		"organisations/iota.svg",
		"organisations/itslearning.svg",
		"organisations/jacoux.png",
		"organisations/jingmnt.png",
		"organisations/mentorcv.png",
		"organisations/metrovias.svg",
		"organisations/mustlab.png",
		"organisations/nesta.svg",
		"organisations/nonkosi.svg",
		"organisations/nyt.svg",
		"organisations/nzz.svg",
		"organisations/oberonspace.svg",
		"organisations/ofof.png",
		"organisations/open-state-foundation.svg",
		"organisations/panascais.svg",
		"organisations/pankod.svg",
		"organisations/paperform.svg",
		"organisations/razorpay.svg",
		"organisations/socialist-party.svg",
		"organisations/softmus.png",
		"organisations/sqltribe.svg",
		"organisations/stone.svg",
		"organisations/strixcloud.svg",
		"organisations/sucuri.png",
		"organisations/thunderdome.svg",
		"organisations/tokopedia.svg",
		"organisations/tsh.svg",
		"organisations/webdesq.svg",
		"organisations/zevvle.svg",
		"prism.css",
		"svelte-app.json",
		"svelte-logo-horizontal.svg",
		"svelte-logo-mask.svg",
		"svelte-logo-outline.svg",
		"svelte-logo-vertical.svg",
		"svelte-logo.svg",
		"svelte-logotype.svg",
		"tutorial/dark-theme.css",
		"tutorial/icons/email.svg",
		"tutorial/icons/folder-open.svg",
		"tutorial/icons/folder.svg",
		"tutorial/icons/gif.svg",
		"tutorial/icons/map-marker.svg",
		"tutorial/icons/md.svg",
		"tutorial/icons/xlsx.svg",
		"tutorial/image.gif",
		"tutorial/kitten.png",
		"workers/bundler.js",
		"workers/compiler.js"
	];

	const shell = [
		"client/client.a7ba2792.js",
		"client/index.4e52d202.js",
		"client/index.ad9ca859.js",
		"client/app.623f0ee4.js",
		"client/index.abf9c6bd.js",
		"client/index.eb8baedd.js",
		"client/Repl.f1ddc62a.js",
		"client/examples.cd1fcc82.js",
		"client/InputOutputToggle.cf9a1ce1.js",
		"client/ReplWidget.9e27fb73.js",
		"client/config.582076a5.js",
		"client/index.faa917b5.js",
		"client/_layout.48078c70.js",
		"client/index.a179c623.js",
		"client/index.62206069.js",
		"client/index.82abdbd2.js",
		"client/index.c311bf42.js",
		"client/[slug].82163464.js",
		"client/index.7c138582.js",
		"client/index.e6fda4a1.js",
		"client/embed.e83d46bf.js",
		"client/index.79f9b8bb.js",
		"client/sapper-dev-client.ce2664ff.js",
		"client/codemirror.a0f2fe1c.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by Rollup,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files.filter(file => {
		const basename = file.split('/').pop();
		if (basename[0] === '.') return false; // .DS_Store and friends
		if (basename.endsWith('.mp3')) return false; // TODO others?
		return true;
	}));
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and Rollup-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch (err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU4MTY2OTIwODY1NjtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzLzdndWlzLWNpcmNsZXMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy83Z3Vpcy1jb3VudGVyLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvN2d1aXMtY3J1ZC5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzLzdndWlzLWZsaWdodC1ib29rZXIuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy83Z3Vpcy10ZW1wZXJhdHVyZS5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzLzdndWlzLXRpbWVyLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvYWN0aW9ucy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2FkZGluZy1wYXJhbWV0ZXJzLXRvLWFjdGlvbnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9hZGRpbmctcGFyYW1ldGVycy10by10cmFuc2l0aW9ucy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2FuaW1hdGUuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9hcmVhLWNoYXJ0LmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvYXV0by1zdWJzY3JpcHRpb25zLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvYXdhaXQtYmxvY2tzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvYmFyLWNoYXJ0LmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvYmluZC10aGlzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvY2hlY2tib3gtaW5wdXRzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvY2xhc3Mtc2hvcnRoYW5kLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvY2xhc3Nlcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2Nsb2NrLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvY29tcG9uZW50LWJpbmRpbmdzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvY29tcG9uZW50LWV2ZW50cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2NvbnRleHQtYXBpLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvY3VzdG9tLWNzcy10cmFuc2l0aW9ucy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2N1c3RvbS1qcy10cmFuc2l0aW9ucy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2N1c3RvbS1zdG9yZXMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9kZWJ1Zy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2RlY2xhcmluZy1wcm9wcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2RlZmF1bHQtdmFsdWVzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZGVmZXJyZWQtdHJhbnNpdGlvbnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9kZXJpdmVkLXN0b3Jlcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2RpbWVuc2lvbnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9kb20tZXZlbnQtZm9yd2FyZGluZy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2RvbS1ldmVudHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9keW5hbWljLWF0dHJpYnV0ZXMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9lYWNoLWJsb2NrLWJpbmRpbmdzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZWFjaC1ibG9ja3MuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9lYXNpbmcuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9lbHNlLWJsb2Nrcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2Vsc2UtaWYtYmxvY2tzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZXZlbnQtZm9yd2FyZGluZy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2V2ZW50LW1vZGlmaWVycy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2dyb3VwLWlucHV0cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2hhY2tlci1uZXdzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvaGVsbG8td29ybGQuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9odG1sLXRhZ3MuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9pZi1ibG9ja3MuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9pbW11dGFibGUtZGF0YS5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2luLWFuZC1vdXQuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9pbmxpbmUtaGFuZGxlcnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9rZXllZC1lYWNoLWJsb2Nrcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL21lZGlhLWVsZW1lbnRzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvbW9kYWwuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9tb2R1bGUtZXhwb3J0cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL211bHRpcGxlLXNlbGVjdC1iaW5kaW5ncy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL25hbWVkLXNsb3RzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvbmVzdGVkLWNvbXBvbmVudHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9udW1lcmljLWlucHV0cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL29uZGVzdHJveS5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL29ubW91bnQuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9yZWFjdGl2ZS1hc3NpZ25tZW50cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3JlYWN0aXZlLWRlY2xhcmF0aW9ucy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3JlYWN0aXZlLXN0YXRlbWVudHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9yZWFkYWJsZS1zdG9yZXMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9zY2F0dGVycGxvdC5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3NlbGVjdC1iaW5kaW5ncy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3NoYXJpbmctY29kZS5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3Nsb3QtZmFsbGJhY2tzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvc2xvdC1wcm9wcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3Nsb3RzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvc3ByZWFkLXByb3BzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvc3ByaW5nLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvc3R5bGluZy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3N2ZWx0ZS1ib2R5LmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvc3ZlbHRlLWNvbXBvbmVudC5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3N2ZWx0ZS1oZWFkLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvc3ZlbHRlLXNlbGYuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9zdmVsdGUtd2luZG93LWJpbmRpbmdzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvc3ZlbHRlLXdpbmRvdy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3N2Zy10cmFuc2l0aW9ucy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3RleHQtaW5wdXRzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvdGV4dGFyZWEtaW5wdXRzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvdGljay5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3RyYW5zaXRpb24tZXZlbnRzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvdHJhbnNpdGlvbi5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3R3ZWVuZWQuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy91cGRhdGUuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy93cml0YWJsZS1zdG9yZXMuanBnXCIsXG5cdFwiZmF2aWNvbi5pY29cIixcblx0XCJmYXZpY29uLnBuZ1wiLFxuXHRcImZvbnRzL2ZpcmEtbW9uby9maXJhLW1vbm8tbGF0aW4tNDAwLndvZmYyXCIsXG5cdFwiZm9udHMvb3ZlcnBhc3Mvb3ZlcnBhc3MtbGF0aW4tMTAwLndvZmYyXCIsXG5cdFwiZm9udHMvb3ZlcnBhc3Mvb3ZlcnBhc3MtbGF0aW4tMzAwLndvZmYyXCIsXG5cdFwiZm9udHMvb3ZlcnBhc3Mvb3ZlcnBhc3MtbGF0aW4tNDAwLndvZmYyXCIsXG5cdFwiZm9udHMvb3ZlcnBhc3Mvb3ZlcnBhc3MtbGF0aW4tNjAwLndvZmYyXCIsXG5cdFwiZm9udHMvb3ZlcnBhc3Mvb3ZlcnBhc3MtbGF0aW4tNzAwLndvZmYyXCIsXG5cdFwiZm9udHMvcm9ib3RvL3JvYm90by1sYXRpbi00MDAud29mZjJcIixcblx0XCJmb250cy9yb2JvdG8vcm9ib3RvLWxhdGluLTQwMGl0YWxpYy53b2ZmMlwiLFxuXHRcImZvbnRzL3JvYm90by9yb2JvdG8tbGF0aW4tNTAwLndvZmYyXCIsXG5cdFwiZm9udHMvcm9ib3RvL3JvYm90by1sYXRpbi01MDBpdGFsaWMud29mZjJcIixcblx0XCJnbG9iYWwuY3NzXCIsXG5cdFwiaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIsXG5cdFwiaWNvbnMvY2hlY2suc3ZnXCIsXG5cdFwiaWNvbnMvY2hldnJvbi5zdmdcIixcblx0XCJpY29ucy9jb2xsYXBzZS5zdmdcIixcblx0XCJpY29ucy9kb3dubG9hZC5zdmdcIixcblx0XCJpY29ucy9kcm9wZG93bi5zdmdcIixcblx0XCJpY29ucy9lZGl0LnN2Z1wiLFxuXHRcImljb25zL2V4cGFuZC5zdmdcIixcblx0XCJpY29ucy9mbGlwLnN2Z1wiLFxuXHRcImljb25zL2Zvcmsuc3ZnXCIsXG5cdFwiaWNvbnMvbGluay5zdmdcIixcblx0XCJpY29ucy9sb2FkaW5nLnN2Z1wiLFxuXHRcImljb25zL3NhdmUuc3ZnXCIsXG5cdFwiaW1hZ2VzL3N2ZWx0ZS1hbmRyb2lkLWNocm9tZS0xOTIucG5nXCIsXG5cdFwiaW1hZ2VzL3N2ZWx0ZS1hbmRyb2lkLWNocm9tZS01MTIucG5nXCIsXG5cdFwiaW1hZ2VzL3N2ZWx0ZS1hcHBsZS10b3VjaC1pY29uLnBuZ1wiLFxuXHRcImltYWdlcy9zdmVsdGUtbXN0aWxlLTE1MC5wbmdcIixcblx0XCJpbWFnZXMvdHdpdHRlci1jYXJkLnBuZ1wiLFxuXHRcIm1hbmlmZXN0Lmpzb25cIixcblx0XCJtZWRpYS9yZXRoaW5raW5nLWJlc3QtcHJhY3RpY2VzLmpwZ1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvMXBhc3N3b3JkLnBuZ1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvYWJsYWIuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9hYnNvbHV0ZXdlYi5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2Jla2NoeS5wbmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2JleW9uay5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2J1eWRvdHN0YXIuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9jYXNoZnJlZS5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2NoZXNzLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvY29taWdvLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvZGF0YXdyYXBwZXIuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9kYm5vbWljcy5qcGdcIixcblx0XCJvcmdhbmlzYXRpb25zL2Ribm9taWNzLndlYnBcIixcblx0XCJvcmdhbmlzYXRpb25zL2RlY2suc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9kZXh0cmEucG5nXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9lbnRyaXdpc2UucG5nXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9lbnR1ci5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2Zhcm1ib3guc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9mcm9tLW5vdy1vbi5wbmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2Z1c2lvbmNoYXJ0cy5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2dvZGFkZHkuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9ncmFpbmdlci5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2hlYWx0aHRyZWUucG5nXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9pb3RhLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvaXRzbGVhcm5pbmcuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9qYWNvdXgucG5nXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9qaW5nbW50LnBuZ1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvbWVudG9yY3YucG5nXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9tZXRyb3ZpYXMuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9tdXN0bGFiLnBuZ1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvbmVzdGEuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9ub25rb3NpLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvbnl0LnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvbnp6LnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvb2Jlcm9uc3BhY2Uuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9vZm9mLnBuZ1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvb3Blbi1zdGF0ZS1mb3VuZGF0aW9uLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvcGFuYXNjYWlzLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvcGFua29kLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvcGFwZXJmb3JtLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvcmF6b3JwYXkuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9zb2NpYWxpc3QtcGFydHkuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9zb2Z0bXVzLnBuZ1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvc3FsdHJpYmUuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9zdG9uZS5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3N0cml4Y2xvdWQuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9zdWN1cmkucG5nXCIsXG5cdFwib3JnYW5pc2F0aW9ucy90aHVuZGVyZG9tZS5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3Rva29wZWRpYS5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3RzaC5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3dlYmRlc3Euc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy96ZXZ2bGUuc3ZnXCIsXG5cdFwicHJpc20uY3NzXCIsXG5cdFwic3ZlbHRlLWFwcC5qc29uXCIsXG5cdFwic3ZlbHRlLWxvZ28taG9yaXpvbnRhbC5zdmdcIixcblx0XCJzdmVsdGUtbG9nby1tYXNrLnN2Z1wiLFxuXHRcInN2ZWx0ZS1sb2dvLW91dGxpbmUuc3ZnXCIsXG5cdFwic3ZlbHRlLWxvZ28tdmVydGljYWwuc3ZnXCIsXG5cdFwic3ZlbHRlLWxvZ28uc3ZnXCIsXG5cdFwic3ZlbHRlLWxvZ290eXBlLnN2Z1wiLFxuXHRcInR1dG9yaWFsL2RhcmstdGhlbWUuY3NzXCIsXG5cdFwidHV0b3JpYWwvaWNvbnMvZW1haWwuc3ZnXCIsXG5cdFwidHV0b3JpYWwvaWNvbnMvZm9sZGVyLW9wZW4uc3ZnXCIsXG5cdFwidHV0b3JpYWwvaWNvbnMvZm9sZGVyLnN2Z1wiLFxuXHRcInR1dG9yaWFsL2ljb25zL2dpZi5zdmdcIixcblx0XCJ0dXRvcmlhbC9pY29ucy9tYXAtbWFya2VyLnN2Z1wiLFxuXHRcInR1dG9yaWFsL2ljb25zL21kLnN2Z1wiLFxuXHRcInR1dG9yaWFsL2ljb25zL3hsc3guc3ZnXCIsXG5cdFwidHV0b3JpYWwvaW1hZ2UuZ2lmXCIsXG5cdFwidHV0b3JpYWwva2l0dGVuLnBuZ1wiLFxuXHRcIndvcmtlcnMvYnVuZGxlci5qc1wiLFxuXHRcIndvcmtlcnMvY29tcGlsZXIuanNcIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcImNsaWVudC9jbGllbnQuYTdiYTI3OTIuanNcIixcblx0XCJjbGllbnQvaW5kZXguNGU1MmQyMDIuanNcIixcblx0XCJjbGllbnQvaW5kZXguYWQ5Y2E4NTkuanNcIixcblx0XCJjbGllbnQvYXBwLjYyM2YwZWU0LmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmFiZjljNmJkLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmViOGJhZWRkLmpzXCIsXG5cdFwiY2xpZW50L1JlcGwuZjFkZGM2MmEuanNcIixcblx0XCJjbGllbnQvZXhhbXBsZXMuY2QxZmNjODIuanNcIixcblx0XCJjbGllbnQvSW5wdXRPdXRwdXRUb2dnbGUuY2Y5YTFjZTEuanNcIixcblx0XCJjbGllbnQvUmVwbFdpZGdldC45ZTI3ZmI3My5qc1wiLFxuXHRcImNsaWVudC9jb25maWcuNTgyMDc2YTUuanNcIixcblx0XCJjbGllbnQvaW5kZXguZmFhOTE3YjUuanNcIixcblx0XCJjbGllbnQvX2xheW91dC40ODA3OGM3MC5qc1wiLFxuXHRcImNsaWVudC9pbmRleC5hMTc5YzYyMy5qc1wiLFxuXHRcImNsaWVudC9pbmRleC42MjIwNjA2OS5qc1wiLFxuXHRcImNsaWVudC9pbmRleC44MmFiZGJkMi5qc1wiLFxuXHRcImNsaWVudC9pbmRleC5jMzExYmY0Mi5qc1wiLFxuXHRcImNsaWVudC9bc2x1Z10uODIxNjM0NjQuanNcIixcblx0XCJjbGllbnQvaW5kZXguN2MxMzg1ODIuanNcIixcblx0XCJjbGllbnQvaW5kZXguZTZmZGE0YTEuanNcIixcblx0XCJjbGllbnQvZW1iZWQuZTgzZDQ2YmYuanNcIixcblx0XCJjbGllbnQvaW5kZXguNzlmOWI4YmIuanNcIixcblx0XCJjbGllbnQvc2FwcGVyLWRldi1jbGllbnQuY2UyNjY0ZmYuanNcIixcblx0XCJjbGllbnQvY29kZW1pcnJvci5hMGYyZmUxYy5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2V4YW1wbGVzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC90dXRvcmlhbFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvdHV0b3JpYWxcXC8oW15cXC9dKz8pXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9hcHBzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9ibG9nXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9ibG9nXFwvKFteXFwvXSs/KVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZG9jc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcmVwbFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcmVwbFxcL2VtYmVkXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9yZXBsXFwvKFteXFwvXSs/KVxcLz8kLyB9XG5dOyIsImltcG9ydCB7IHRpbWVzdGFtcCwgZmlsZXMsIHNoZWxsIH0gZnJvbSAnQHNhcHBlci9zZXJ2aWNlLXdvcmtlcic7XHJcblxyXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xyXG5cclxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSBSb2xsdXAsXHJcbi8vIGBmaWxlc2AgaXMgYW4gYXJyYXkgb2YgZXZlcnl0aGluZyBpbiB0aGUgYHN0YXRpY2AgZGlyZWN0b3J5XHJcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzLmZpbHRlcihmaWxlID0+IHtcclxuXHRjb25zdCBiYXNlbmFtZSA9IGZpbGUuc3BsaXQoJy8nKS5wb3AoKTtcclxuXHRpZiAoYmFzZW5hbWVbMF0gPT09ICcuJykgcmV0dXJuIGZhbHNlOyAvLyAuRFNfU3RvcmUgYW5kIGZyaWVuZHNcclxuXHRpZiAoYmFzZW5hbWUuZW5kc1dpdGgoJy5tcDMnKSkgcmV0dXJuIGZhbHNlOyAvLyBUT0RPIG90aGVycz9cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSkpO1xyXG5jb25zdCBjYWNoZWQgPSBuZXcgU2V0KHRvX2NhY2hlKTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGV2ZW50ID0+IHtcclxuXHRldmVudC53YWl0VW50aWwoXHJcblx0XHRjYWNoZXNcclxuXHRcdFx0Lm9wZW4oQVNTRVRTKVxyXG5cdFx0XHQudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwodG9fY2FjaGUpKVxyXG5cdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0c2VsZi5za2lwV2FpdGluZygpO1xyXG5cdFx0XHR9KVxyXG5cdCk7XHJcbn0pO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcclxuXHRldmVudC53YWl0VW50aWwoXHJcblx0XHRjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XHJcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXHJcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuXHRcdFx0XHRpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2VsZi5jbGllbnRzLmNsYWltKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn0pO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGV2ZW50ID0+IHtcclxuXHRpZiAoZXZlbnQucmVxdWVzdC5tZXRob2QgIT09ICdHRVQnIHx8IGV2ZW50LnJlcXVlc3QuaGVhZGVycy5oYXMoJ3JhbmdlJykpIHJldHVybjtcclxuXHJcblx0Y29uc3QgdXJsID0gbmV3IFVSTChldmVudC5yZXF1ZXN0LnVybCk7XHJcblxyXG5cdC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXHJcblx0aWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSByZXR1cm47XHJcblxyXG5cdC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXHJcblx0aWYgKHVybC5ob3N0bmFtZSA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJiB1cmwucG9ydCAhPT0gc2VsZi5sb2NhdGlvbi5wb3J0KSByZXR1cm47XHJcblxyXG5cdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIFJvbGx1cC1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGVcclxuXHRpZiAodXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBjYWNoZWQuaGFzKHVybC5wYXRobmFtZSkpIHtcclxuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KSk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYGluZGV4Lmh0bWxgIGZpbGUsXHJcblx0Ly8gd2hpY2ggU2FwcGVyIGhhcyBnZW5lcmF0ZWQgZm9yIHlvdS4gSXQncyBub3QgcmlnaHQgZm9yIGV2ZXJ5XHJcblx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXHJcblx0LypcclxuXHRpZiAodXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XHJcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goJy9pbmRleC5odG1sJykpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHQqL1xyXG5cclxuXHRpZiAoZXZlbnQucmVxdWVzdC5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJykgcmV0dXJuO1xyXG5cclxuXHQvLyBmb3IgZXZlcnl0aGluZyBlbHNlLCB0cnkgdGhlIG5ldHdvcmsgZmlyc3QsIGZhbGxpbmcgYmFjayB0b1xyXG5cdC8vIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuIChJZiB0aGUgcGFnZXMgbmV2ZXIgY2hhbmdlLCB5b3VcclxuXHQvLyBtaWdodCBwcmVmZXIgYSBjYWNoZS1maXJzdCBhcHByb2FjaCB0byBhIG5ldHdvcmstZmlyc3Qgb25lLilcclxuXHRldmVudC5yZXNwb25kV2l0aChcclxuXHRcdGNhY2hlc1xyXG5cdFx0XHQub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApXHJcblx0XHRcdC50aGVuKGFzeW5jIGNhY2hlID0+IHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcclxuXHRcdFx0XHRcdGNhY2hlLnB1dChldmVudC5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2goZXZlbnQucmVxdWVzdCk7XHJcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcclxuXHJcblx0XHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0NBQUE7QUFDQSxDQUFPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQzs7QUFFdkMsQ0FBTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLHVDQUF1QztDQUN4QyxDQUFDLHVDQUF1QztDQUN4QyxDQUFDLG9DQUFvQztDQUNyQyxDQUFDLDZDQUE2QztDQUM5QyxDQUFDLDJDQUEyQztDQUM1QyxDQUFDLHFDQUFxQztDQUN0QyxDQUFDLGlDQUFpQztDQUNsQyxDQUFDLHNEQUFzRDtDQUN2RCxDQUFDLDBEQUEwRDtDQUMzRCxDQUFDLGlDQUFpQztDQUNsQyxDQUFDLG9DQUFvQztDQUNyQyxDQUFDLDRDQUE0QztDQUM3QyxDQUFDLHNDQUFzQztDQUN2QyxDQUFDLG1DQUFtQztDQUNwQyxDQUFDLG1DQUFtQztDQUNwQyxDQUFDLHlDQUF5QztDQUMxQyxDQUFDLHlDQUF5QztDQUMxQyxDQUFDLGlDQUFpQztDQUNsQyxDQUFDLCtCQUErQjtDQUNoQyxDQUFDLDRDQUE0QztDQUM3QyxDQUFDLDBDQUEwQztDQUMzQyxDQUFDLHFDQUFxQztDQUN0QyxDQUFDLGdEQUFnRDtD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QkFBMEI7Q0FDM0IsQ0FBQywwQkFBMEI7Q0FDM0IsQ0FBQyw4QkFBOEI7Q0FDL0IsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQywwQkFBMEI7Q0FDM0IsQ0FBQywrQkFBK0I7Q0FDaEMsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyw2QkFBNkI7Q0FDOUIsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQywwQkFBMEI7Q0FDM0IsQ0FBQyw2QkFBNkI7Q0FDOUIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQywrQkFBK0I7Q0FDaEMsQ0FBQyxnQ0FBZ0M7Q0FDakMsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyw4QkFBOEI7Q0FDL0IsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQywrQkFBK0I7Q0FDaEMsQ0FBQywwQkFBMEI7Q0FDM0IsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyw2QkFBNkI7Q0FDOUIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQywrQkFBK0I7Q0FDaEMsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx5Q0FBeUM7Q0FDMUMsQ0FBQyw2QkFBNkI7Q0FDOUIsQ0FBQywwQkFBMEI7Q0FDM0IsQ0FBQyw2QkFBNkI7Q0FDOUIsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyxtQ0FBbUM7Q0FDcEMsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQyw0QkFBNEI7Q0FDN0IsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyw4QkFBOEI7Q0FDL0IsQ0FBQywwQkFBMEI7Q0FDM0IsQ0FBQywrQkFBK0I7Q0FDaEMsQ0FBQyw2QkFBNkI7Q0FDOUIsQ0FBQyx1QkFBdUI7Q0FDeEIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQywwQkFBMEI7Q0FDM0IsQ0FBQyxXQUFXO0NBQ1osQ0FBQyxpQkFBaUI7Q0FDbEIsQ0FBQyw0QkFB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
