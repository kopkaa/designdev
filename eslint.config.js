import globals from 'globals'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export default [
  {
    files: ['**/*.ts'],
    ignores: ['vite.config.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.app.json'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    rules: {
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules
    }
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: require('vue-eslint-parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: require('@typescript-eslint/parser')
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      vue: require('eslint-plugin-vue'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    rules: {
      ...require('eslint-plugin-vue').configs['vue3-recommended'].rules,
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,

      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      'vue/multi-word-component-names': 'error',
      'vue/no-unused-vars': 'warn'
    }
  }
]
