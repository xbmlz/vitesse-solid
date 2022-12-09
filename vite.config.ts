import Solid from 'solid-start/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    Solid(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'solid-js',
        {
          '@solid-primitives/i18n': ['useI18n'],
        },
      ],
      dts: './src/auto-imports.d.ts',
    }),
    // https://github.com/unocss/unocss/tree/main/packages/vite
    Unocss({}),
  ],
  build: {
    target: 'esnext',
  },
  test: {
    deps: {
      registerNodeLoader: true,
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect'],
    transformMode: { web: [/\.[jt]sx?$/] },
  },
})
