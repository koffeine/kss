import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	base: mode === 'gh-pages' ? '/kss/' : '/',
	server: { open: true }
}));
