'use strict';

var index = require('./index-0642fb9d.js');

/* src\routes\repl\index.svelte generated by Svelte v3.12.0 */

function preload({ query }) {
	const { gist, example, version } = query;

	// redirect to v2 REPL if appropriate
	if (/^[^>]?[12]/.test(version)) {
		const q = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
		return this.redirect(302, `https://v2.svelte.dev/repl?${q}`);
	}

	const id = gist || example || 'hello-world';
	const q = version ? `?version=${version}` : ``;

	this.redirect(301, `repl/${id}${q}`);
}

const Index = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return ``;
});

exports.default = Index;
exports.preload = preload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtM2I3NWM1M2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcmVwbC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBxdWVyeSB9KSB7XHJcblx0XHRjb25zdCB7IGdpc3QsIGV4YW1wbGUsIHZlcnNpb24gfSA9IHF1ZXJ5O1xyXG5cclxuXHRcdC8vIHJlZGlyZWN0IHRvIHYyIFJFUEwgaWYgYXBwcm9wcmlhdGVcclxuXHRcdGlmICgvXltePl0/WzEyXS8udGVzdCh2ZXJzaW9uKSkge1xyXG5cdFx0XHRjb25zdCBxID0gT2JqZWN0LmtleXMocXVlcnkpLm1hcChrZXkgPT4gYCR7a2V5fT0ke3F1ZXJ5W2tleV19YCkuam9pbignJicpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZWRpcmVjdCgzMDIsIGBodHRwczovL3YyLnN2ZWx0ZS5kZXYvcmVwbD8ke3F9YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaWQgPSBnaXN0IHx8IGV4YW1wbGUgfHwgJ2hlbGxvLXdvcmxkJztcclxuXHRcdGNvbnN0IHEgPSB2ZXJzaW9uID8gYD92ZXJzaW9uPSR7dmVyc2lvbn1gIDogYGA7XHJcblxyXG5cdFx0dGhpcy5yZWRpcmVjdCgzMDEsIGByZXBsLyR7aWR9JHtxfWApO1xyXG5cdH1cclxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNRLFNBQVMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7Q0FDbEMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDOzs7Q0FHekMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0VBQy9CLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzFFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDN0Q7O0NBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLE9BQU8sSUFBSSxhQUFhLENBQUM7Q0FDNUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0NBRS9DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNyQzs7Ozs7Ozs7OyJ9
