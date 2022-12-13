import Solid from 'solid-start/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'
import Unocss from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
// @ts-expect-error - missing types
import nodeAdapter from 'solid-start-node'
// @ts-expect-error - missing types
import staticAdapter from 'solid-start-static'
// @ts-expect-error - missing types
import netlifyAdapter from 'solid-start-netlify'
// @ts-expect-error - missing types
import vercelAdapter from 'solid-start-vercel'
// @ts-expect-error - missing types
import awsAdapter from 'solid-start-aws'
import mdx from './mdx'

const adapterMap = {
  node: nodeAdapter(),
  static: staticAdapter(),
  netlify: netlifyAdapter(),
  vercel: vercelAdapter(),
  aws: awsAdapter(),
}

export default defineConfig({
  plugins: [
    await mdx({
      rehypePlugins: [rehypePrettyCode],
      remarkPlugins: [remarkGfm],
    }),
    // https://github.com/solidjs/solid-start
    Solid({
      extensions: ['.mdx', '.md'],
      // @ts-expect-error - missing types
      adapter: adapterMap[process.env.ADAPTER || 'node'],
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
  ssr: {
    noExternal: ['@hope-ui/core', '@hope-ui/styles'],
  },
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
