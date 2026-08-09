// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**'],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
];
