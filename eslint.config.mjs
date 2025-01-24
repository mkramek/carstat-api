import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/**
 * @type {import('eslint').Linter.Config[]}
 * @satisfies {import('@typescript-eslint/utils/dist/ts-eslint').FlatConfig.Config[]}
 */
export default [
  {
    files: ['**/*.d.ts'],
    ignores: ['dist/**', '**/node_modules/**', '.yarn/**', 'coverage/**'],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
];
