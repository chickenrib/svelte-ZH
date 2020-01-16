import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, e as element, E as text, l as space, c as claim_element, a as children, F as claim_text, p as claim_space, b as detach_dev, f as attr_dev, Q as toggle_class, h as add_location, T as listen_dev, j as insert_dev, k as append_dev, H as set_data_dev, n as noop, R as destroy_each } from './index.b2dd6920.js';

/* src\components\ScreenToggle.svelte generated by Svelte v3.12.0 */

const file = "src\\components\\ScreenToggle.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.label = list[i];
	child_ctx.index = i;
	return child_ctx;
}

// (38:1) {#each labels as label, index}
function create_each_block(ctx) {
	var button, t0_value = ctx.label + "", t0, t1, dispose;

	function click_handler() {
		return ctx.click_handler(ctx);
	}

	const block = {
		c: function create() {
			button = element("button");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},

		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true }, false);
			var button_nodes = children(button);

			t0 = claim_text(button_nodes, t0_value);
			t1 = claim_space(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(button, "class", "svelte-wzy9oi");
			toggle_class(button, "selected", ctx.offset === ctx.index);
			add_location(button, file, 38, 2, 638);
			dispose = listen_dev(button, "click", click_handler);
		},

		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t0);
			append_dev(button, t1);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.labels) && t0_value !== (t0_value = ctx.label + "")) {
				set_data_dev(t0, t0_value);
			}

			if (changed.offset) {
				toggle_class(button, "selected", ctx.offset === ctx.index);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(button);
			}

			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block.name, type: "each", source: "(38:1) {#each labels as label, index}", ctx });
	return block;
}

function create_fragment(ctx) {
	var div;

	let each_value = ctx.labels;

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(div, "class", "toggle svelte-wzy9oi");
			add_location(div, file, 36, 0, 583);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.offset || changed.labels) {
				each_value = ctx.labels;

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div);
			}

			destroy_each(each_blocks, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { labels, offset = 0 } = $$props;

	const writable_props = ['labels', 'offset'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<ScreenToggle> was created with unknown prop '${key}'`);
	});

	const click_handler = ({ index }) => $$invalidate('offset', offset = index);

	$$self.$set = $$props => {
		if ('labels' in $$props) $$invalidate('labels', labels = $$props.labels);
		if ('offset' in $$props) $$invalidate('offset', offset = $$props.offset);
	};

	$$self.$capture_state = () => {
		return { labels, offset };
	};

	$$self.$inject_state = $$props => {
		if ('labels' in $$props) $$invalidate('labels', labels = $$props.labels);
		if ('offset' in $$props) $$invalidate('offset', offset = $$props.offset);
	};

	return { labels, offset, click_handler };
}

class ScreenToggle extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["labels", "offset"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "ScreenToggle", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.labels === undefined && !('labels' in props)) {
			console.warn("<ScreenToggle> was created without expected prop 'labels'");
		}
	}

	get labels() {
		throw new Error("<ScreenToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set labels(value) {
		throw new Error("<ScreenToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get offset() {
		throw new Error("<ScreenToggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set offset(value) {
		throw new Error("<ScreenToggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

// REPL props

const svelteUrl = `https://unpkg.com/svelte@3`;
const rollupUrl = `https://unpkg.com/rollup@1/dist/rollup.browser.js`;
const mapbox_setup = `window.MAPBOX_ACCESS_TOKEN = undefined;`;

export { ScreenToggle as S, mapbox_setup as m, rollupUrl as r, svelteUrl as s };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLjRhMDA1ZjIxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TY3JlZW5Ub2dnbGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IGxhYmVscztcblx0ZXhwb3J0IGxldCBvZmZzZXQgPSAwO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LnRvZ2dsZSB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGJvdHRvbTogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDQuNnJlbTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNlY29uZCk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdH1cblxuXHRidXR0b24ge1xuXHRcdG1hcmdpbjogMCAuMTVlbTtcblx0XHR3aWR0aDogNGVtO1xuXHRcdGhlaWdodDogMWVtO1xuXHRcdHBhZGRpbmc6IC4yZW0gLjRlbSAuM2VtO1xuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yKTtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcblx0XHRjb2xvcjogIzg4ODtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrLWxpZ2h0KTtcblx0fVxuXG5cdC5zZWxlY3RlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWUpO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0fVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cInRvZ2dsZVwiPlxuXHR7I2VhY2ggbGFiZWxzIGFzIGxhYmVsLCBpbmRleH1cblx0XHQ8YnV0dG9uXG5cdFx0XHRjbGFzczpzZWxlY3RlZD17b2Zmc2V0ID09PSBpbmRleH1cblx0XHRcdG9uOmNsaWNrPXsoKSA9PiBvZmZzZXQgPSBpbmRleH1cblx0XHQ+XG5cdFx0XHR7bGFiZWx9XG5cdFx0PC9idXR0b24+XG5cdHsvZWFjaH1cbjwvZGl2PlxuIiwiLy8gUkVQTCBwcm9wc1xuXG5leHBvcnQgY29uc3Qgc3ZlbHRlVXJsID0gYGh0dHBzOi8vdW5wa2cuY29tL3N2ZWx0ZUAzYDtcbmV4cG9ydCBjb25zdCByb2xsdXBVcmwgPSBgaHR0cHM6Ly91bnBrZy5jb20vcm9sbHVwQDEvZGlzdC9yb2xsdXAuYnJvd3Nlci5qc2A7XG5leHBvcnQgY29uc3QgbWFwYm94X3NldHVwID0gYHdpbmRvdy5NQVBCT1hfQUNDRVNTX1RPS0VOID0gcHJvY2Vzcy5lbnYuTUFQQk9YX0FDQ0VTU19UT0tFTjtgO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs0QkEwQ0ksS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBSFUsTUFBTSxTQUFLLEtBQUs7O3lDQUN0Qjs7Ozs7Ozs7Ozs7d0RBRVQsS0FBSzs7Ozs7eUNBSFUsTUFBTSxTQUFLLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBRjNCLE1BQU07Ozs7Z0NBQVg7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7O3FCQUFLLE1BQU07OzsrQkFBWDs7Ozs7Ozs7Ozs7OzJCQUFBOzs7Z0JBQUEsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcENLLE1BQUksTUFBTSxFQUNOLE1BQU0sR0FBRyxhQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnZCOztBQUVBLEFBQVksTUFBQyxTQUFTLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3RELEFBQVksTUFBQyxTQUFTLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQzdFLEFBQVksTUFBQyxZQUFZLEdBQUcsQ0FBQyx1Q0FBNkQsQ0FBQzs7OzsifQ==
