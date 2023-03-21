import { sveltekit } from '@sveltejs/kit/vite';
import pkg from './package.json' assert { type: 'json' };
import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
export default ({ mode }: any) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	return defineConfig({
		plugins: [sveltekit()],
		ssr: {
			external: Object.keys(pkg.dependencies || {})
		},
		resolve: {
      alias: {
        $ttf: resolve('./static/ttf')
      }
    },
    server: {
      fs: {
        allow: ['..'],
      },
    }
	});
};
