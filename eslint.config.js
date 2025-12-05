import koffeine from '@koffeine/eslint-config';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...koffeine,
	{
		ignores: [ 'dist' ],
	},
	{
		files: [ '*' ],
		languageOptions: {
			globals: globals.node
		}
	}
];
