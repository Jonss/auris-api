import adapter from '@sveltejs/adapter-cloudflare';
import { sveltePreprocess } from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter()
	}
};

export default config;


// curl -i https://backend-production.joaosantana-ti.workers.dev/hello -H "Origin: https://frontend.joaosantana-ti.workers.dev/example"
