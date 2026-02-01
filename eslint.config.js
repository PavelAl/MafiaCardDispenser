import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      'package-lock.json',
      'vite.config.ts',
      '**/*.styles.module.scss'
    ]
  },

  // Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Main configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      storybook: storybookPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // React recommended rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      // Custom rules
      'prettier/prettier': 'error',
      'react/jsx-newline': [
        'error',
        {
          prevent: false
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'import/no-duplicates': 'error',
      'import/extensions': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'sibling',
              position: 'before'
            }
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'newline-before-return': 'error',
      'no-console': 'error'
    }
  },

  // Storybook files configuration
  {
    files: ['**/*.stories.tsx'],
    plugins: {
      storybook: storybookPlugin
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
      'import/no-extraneous-dependencies': 'off'
    }
  }
);
