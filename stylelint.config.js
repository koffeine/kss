import standard from 'stylelint-config-standard';

/** @type {import('stylelint').Config} */
export default {
	ignoreFiles: 'dist/**/*',
	rules: {
		...standard.rules,
		'at-rule-empty-line-before': null,
		'color-hex-length': 'long',
		'custom-property-empty-line-before': null,
		'declaration-empty-line-before': null,
		'function-url-quotes': 'never',
		'selector-attribute-quotes': 'never',

		'color-named': 'never'
	}
};
