/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
			'2xl': { 'max': '1535px' },
			'xl': { 'max': '1279px' },
			'lg': { 'max': '1023px' },
			'md': { 'max': '767px' },
			'sm': { 'max': '639px' },
			'xs': { 'max': '475px' }
		}
  },
  plugins: [],
}
