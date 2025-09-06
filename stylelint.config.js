import standard from 'stylelint-config-standard';

/** @type {import('stylelint').Config} */
export default {
	rules: {
		...standard.rules,
		'alpha-value-notation': 'number',
		'at-rule-empty-line-before': null,
		'color-hex-length': 'long',
		'custom-property-empty-line-before': null,
		'declaration-empty-line-before': null,
		'function-url-quotes': 'never',
		'selector-attribute-quotes': 'never',

		'color-named': 'never'
	}
};
