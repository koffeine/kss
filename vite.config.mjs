import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	base: mode === 'production' ? '/kss/' : '/',
	server: { open: true }
}));
