import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [ '.md' ]
		})
	], 
	extensions: [ '.svelte', '.md' ],
	kit: {
		adapter: adapter()
	}
};

export default config;
