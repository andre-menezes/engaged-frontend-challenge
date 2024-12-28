import { defineConfig } from 'eslint-define-config';

export default defineConfig({
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				printWidth: 120,
				jsxBracketSameLine: true,
				vueIndentScriptAndStyle: true,
			},
		],
		'vue/singleline-html-element-content-newline': [
			'error',
			{
				ignoreWhenNoAttributes: false,
			},
		],
		'vue/multiline-html-element-content-newline': [
			'error',
			{
				allowEmptyLines: false,
			},
		],
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 3,
				multiline: {
					max: 1,
				},
			},
		],
		indent: ['error', 2],
		'max-len': ['error', { code: 120 }],
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'vue/require-default-prop': 'off',
			},
		},
	],
	ignorePatterns: ['node_modules/', 'dist/', 'build/', '**/*.test.js'],
});
