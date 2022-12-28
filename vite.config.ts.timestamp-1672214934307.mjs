// vite.config.ts
import Solid from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/solid-start@0.2.7_5dbkyhvd6f6wkinxbouilzufue/node_modules/solid-start/vite/plugin.js";
import Markdown from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/vite-plugin-solid-markdown@0.0.4_solid-js@1.6.3+vite@3.2.5/node_modules/vite-plugin-solid-markdown/dist/index.mjs";
import remarkGfm from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js";
import rehypePrettyCode from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/rehype-pretty-code@0.5.1_shiki@0.11.1/node_modules/rehype-pretty-code/dist/rehype-pretty-code.js";
import AutoImport from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/unplugin-auto-import@0.12.0/node_modules/unplugin-auto-import/dist/vite.js";
import { defineConfig } from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/vitest@0.25.6_jsdom@20.0.3/node_modules/vitest/dist/config.js";
import Unocss from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/unocss@0.47.5_vite@3.2.5/node_modules/unocss/dist/vite.mjs";
import { VitePWA } from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/vite-plugin-pwa@0.13.3_vite@3.2.5/node_modules/vite-plugin-pwa/dist/index.mjs";
import nodeAdapter from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/solid-start-node@0.2.7_5rcqlkztk6lvdy7aksayuiud3e/node_modules/solid-start-node/index.js";
import staticAdapter from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/solid-start-static@0.2.7_5rcqlkztk6lvdy7aksayuiud3e/node_modules/solid-start-static/index.js";
import netlifyAdapter from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/solid-start-netlify@0.2.7_solid-start@0.2.7/node_modules/solid-start-netlify/index.js";
import vercelAdapter from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/solid-start-vercel@0.2.7_kikojxbxtrt7u574kzstp2dkla/node_modules/solid-start-vercel/index.js";
import awsAdapter from "file:///E:/code/web/vitesse-solid/node_modules/.pnpm/solid-start-aws@0.2.7_kikojxbxtrt7u574kzstp2dkla/node_modules/solid-start-aws/index.mjs";
var adapterMap = {
  node: nodeAdapter(),
  static: staticAdapter(),
  netlify: netlifyAdapter(),
  vercel: vercelAdapter(),
  aws: awsAdapter()
};
var vite_config_default = defineConfig({
  plugins: [
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "vitesse-dark"
          }
        ]
      ],
      remarkPlugins: [remarkGfm]
    }),
    Solid({
      extensions: [".mdx", ".md"],
      adapter: adapterMap[process.env.ADAPTER || "node"]
    }),
    AutoImport({
      imports: [
        "solid-js",
        {
          "@solid-primitives/i18n": ["useI18n"]
        }
      ],
      dts: "./src/auto-imports.d.ts"
    }),
    Unocss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
  ssr: {
    noExternal: ["@hope-ui/core", "@hope-ui/styles"]
  },
  build: {
    target: "esnext"
  },
  test: {
    deps: {
      registerNodeLoader: true
    },
    environment: "jsdom",
    globals: true,
    setupFiles: ["node_modules/@testing-library/jest-dom/extend-expect"],
    transformMode: { web: [/\.[jt]sx?$/] }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXHdlYlxcXFx2aXRlc3NlLXNvbGlkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXHdlYlxcXFx2aXRlc3NlLXNvbGlkXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL3dlYi92aXRlc3NlLXNvbGlkL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IFNvbGlkIGZyb20gJ3NvbGlkLXN0YXJ0L3ZpdGUnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndml0ZS1wbHVnaW4tc29saWQtbWFya2Rvd24nXG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gJ3JlbWFyay1nZm0nXG5pbXBvcnQgcmVoeXBlUHJldHR5Q29kZSBmcm9tICdyZWh5cGUtcHJldHR5LWNvZGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZydcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuLy8gQHRzLWV4cGVjdC1lcnJvciAtIG1pc3NpbmcgdHlwZXNcbmltcG9ydCBub2RlQWRhcHRlciBmcm9tICdzb2xpZC1zdGFydC1ub2RlJ1xuLy8gQHRzLWV4cGVjdC1lcnJvciAtIG1pc3NpbmcgdHlwZXNcbmltcG9ydCBzdGF0aWNBZGFwdGVyIGZyb20gJ3NvbGlkLXN0YXJ0LXN0YXRpYydcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBtaXNzaW5nIHR5cGVzXG5pbXBvcnQgbmV0bGlmeUFkYXB0ZXIgZnJvbSAnc29saWQtc3RhcnQtbmV0bGlmeSdcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBtaXNzaW5nIHR5cGVzXG5pbXBvcnQgdmVyY2VsQWRhcHRlciBmcm9tICdzb2xpZC1zdGFydC12ZXJjZWwnXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gbWlzc2luZyB0eXBlc1xuaW1wb3J0IGF3c0FkYXB0ZXIgZnJvbSAnc29saWQtc3RhcnQtYXdzJ1xuXG5jb25zdCBhZGFwdGVyTWFwID0ge1xuICBub2RlOiBub2RlQWRhcHRlcigpLFxuICBzdGF0aWM6IHN0YXRpY0FkYXB0ZXIoKSxcbiAgbmV0bGlmeTogbmV0bGlmeUFkYXB0ZXIoKSxcbiAgdmVyY2VsOiB2ZXJjZWxBZGFwdGVyKCksXG4gIGF3czogYXdzQWRhcHRlcigpLFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3hibWx6Zy92aXRlLXBsdWdpbi1zb2xpZC1tYXJrZG93blxuICAgIE1hcmtkb3duKHtcbiAgICAgIHdyYXBwZXJDbGFzc2VzOiAncHJvc2UgcHJvc2Utc20gbS1hdXRvIHRleHQtbGVmdCcsXG4gICAgICByZWh5cGVQbHVnaW5zOiBbXG4gICAgICAgIFtcbiAgICAgICAgICByZWh5cGVQcmV0dHlDb2RlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoZW1lOiAndml0ZXNzZS1kYXJrJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtHZm1dLFxuICAgIH0pLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb2xpZGpzL3NvbGlkLXN0YXJ0XG4gICAgU29saWQoe1xuICAgICAgZXh0ZW5zaW9uczogWycubWR4JywgJy5tZCddLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIG1pc3NpbmcgdHlwZXNcbiAgICAgIGFkYXB0ZXI6IGFkYXB0ZXJNYXBbcHJvY2Vzcy5lbnYuQURBUFRFUiB8fCAnbm9kZSddLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgICdzb2xpZC1qcycsXG4gICAgICAgIHtcbiAgICAgICAgICAnQHNvbGlkLXByaW1pdGl2ZXMvaTE4bic6IFsndXNlSTE4biddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGR0czogJy4vc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bm9jc3MvdW5vY3NzL3RyZWUvbWFpbi9wYWNrYWdlcy92aXRlXG4gICAgVW5vY3NzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnVml0ZXNzZScsXG4gICAgICAgIHNob3J0X25hbWU6ICdWaXRlc3NlJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgc3NyOiB7XG4gICAgbm9FeHRlcm5hbDogWydAaG9wZS11aS9jb3JlJywgJ0Bob3BlLXVpL3N0eWxlcyddLFxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gIH0sXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlc3QtZGV2L3ZpdGVzdFxuICB0ZXN0OiB7XG4gICAgZGVwczoge1xuICAgICAgcmVnaXN0ZXJOb2RlTG9hZGVyOiB0cnVlLFxuICAgIH0sXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBzZXR1cEZpbGVzOiBbJ25vZGVfbW9kdWxlcy9AdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tL2V4dGVuZC1leHBlY3QnXSxcbiAgICB0cmFuc2Zvcm1Nb2RlOiB7IHdlYjogWy9cXC5banRdc3g/JC9dIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUSxPQUFPLFdBQVc7QUFDdlIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sZUFBZTtBQUN0QixPQUFPLHNCQUFzQjtBQUM3QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFlBQVk7QUFDbkIsU0FBUyxlQUFlO0FBRXhCLE9BQU8saUJBQWlCO0FBRXhCLE9BQU8sbUJBQW1CO0FBRTFCLE9BQU8sb0JBQW9CO0FBRTNCLE9BQU8sbUJBQW1CO0FBRTFCLE9BQU8sZ0JBQWdCO0FBRXZCLElBQU0sYUFBYTtBQUFBLEVBQ2pCLE1BQU0sWUFBWTtBQUFBLEVBQ2xCLFFBQVEsY0FBYztBQUFBLEVBQ3RCLFNBQVMsZUFBZTtBQUFBLEVBQ3hCLFFBQVEsY0FBYztBQUFBLEVBQ3RCLEtBQUssV0FBVztBQUNsQjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUVQLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxRQUNiO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxZQUNFLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWUsQ0FBQyxTQUFTO0FBQUEsSUFDM0IsQ0FBQztBQUFBLElBRUQsTUFBTTtBQUFBLE1BQ0osWUFBWSxDQUFDLFFBQVEsS0FBSztBQUFBLE1BRTFCLFNBQVMsV0FBVyxRQUFRLElBQUksV0FBVztBQUFBLElBQzdDLENBQUM7QUFBQSxJQUdELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFVBQ0UsMEJBQTBCLENBQUMsU0FBUztBQUFBLFFBQ3RDO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBR0QsT0FBTztBQUFBLElBR1AsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGVBQWUsdUJBQXVCO0FBQUEsTUFDdEQsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsWUFBWSxDQUFDLGlCQUFpQixpQkFBaUI7QUFBQSxFQUNqRDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxNQUNKLG9CQUFvQjtBQUFBLElBQ3RCO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxZQUFZLENBQUMsc0RBQXNEO0FBQUEsSUFDbkUsZUFBZSxFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFBQSxFQUN2QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
