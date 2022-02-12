'use strict';

/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: '@koffeine',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'script'
	},
	env: {
		es2022: true,
		node: true
	},
	overrides: [
		{
			files: '*.mjs',
			parserOptions: {
				sourceType: 'module'
			}
		}
	]
};
