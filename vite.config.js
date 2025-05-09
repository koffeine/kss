/** @type {import('vite').UserConfigExport} */
export default ({ mode }) => ({
	base: mode === 'production' ? '/kss/' : '/',
	server: { open: true }
});
