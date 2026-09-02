import antfu from '@antfu/eslint-config'
import { importX } from 'eslint-plugin-import-x'
import sonarjs from 'eslint-plugin-sonarjs'

export default antfu({
  type: 'app',
  typescript: true,
  vue: true,
  unocss: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
  plugins: {
    'import-x': importX,
  },
  settings: {
    'import/core-modules': ['vue-router/auto-routes'],
  },
  rules: {
    'ts/ban-ts-comment': 'off',
    // 禁用 perfectionist/sort-imports 规则
    'perfectionist/sort-imports': 'off',
    // 配置 import-x/order 规则
    'import-x/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '~/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '~icons/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
  },
}, sonarjs.configs.recommended, {
  rules: {
    'sonarjs/todo-tag': 'warn',
  },
}, {
  files: ['src/**/*.{ts,vue}'],
  ignores: ['src/utils/storage.ts', 'src/store/index.ts'],
  rules: {
    'no-restricted-globals': [
      'error',
      {
        name: 'localStorage',
        message: '禁止直接调用全局 localStorage，请使用 @/utils/storage 中的 localStg。',
      },
      {
        name: 'sessionStorage',
        message: '禁止直接调用全局 sessionStorage，请使用 @/utils/storage 中的 sessionStg。',
      },
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'window',
        property: 'localStorage',
        message: '禁止直接调用 window.localStorage，请使用 @/utils/storage 中的 localStg。',
      },
      {
        object: 'window',
        property: 'sessionStorage',
        message: '禁止直接调用 window.sessionStorage，请使用 @/utils/storage 中的 sessionStg。',
      },
    ],
  },
})
