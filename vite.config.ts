import Solid from 'solid-start/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'
import Unocss from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
        remarkPlugins: [remarkGfm],
      }),
      enforce: 'pre',
    },

    // https://github.com/solidjs/solid-start
    Solid({
      extensions: ['.mdx', '.md'],
    }),

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
    Unocss(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  // https://github.com/vitest-dev/vitest
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
