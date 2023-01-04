<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/154486817-f86b8f20-5463-4122-b6e9-930622e757f2.png' alt='Vitesse for SoliJS - Opinionated Vite Starter Template' width='600'/>
</p>

<p align='center'>
快速地<sup><em>Vitesse</em></sup> 创建 SolidJS Web 应用
<br>
</p>

<br>

<p align='center'>
<a href="https://vitesse-solid.netlify.app/">在线 Demo</a>
</p>

<br>

<p align='center'>
<a href="https://github.com/xbmlz/vitesse-solid/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

<br>

## 特性

- ⚡️ [SolidJS](https://github.com/solidjs/solid), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 📑 [布局系统](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 🎨 [HopeUI](https://next--hope-ui.netlify.app/docs/introduction/getting-started) - 一个基于 SolidJS 的 UI 组件库

- ⚒️ [Solid Primitives](https://github.com/solidjs-community/solid-primitives) - 扩展SolidJS反应性的高质量原语库.

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n 国际化开箱即用](./src/locales)

- 🗒 [Markdown 支持](./src/pages/about.md)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🖨  CSR, SSR, streaming SSR, or SSG via

- 🦔 使用 [critters](https://github.com/GoogleChromeLabs/critters) 的生成关键 CSS

- 🦾 TypeScript, 当然

- ⚙️ 结合 [GitHub Actions](https://github.com/features/actions)，使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试, [Cypress](https://cypress.io/) 进行 E2E 测试

- ☁️ 零配置部署 Netlify

- ⚗️ [Tauri Desktop App](https://tauri.app/) - 用于创建跨平台桌面应用程序

<br>

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- [HopeUI](https://next--hope-ui.netlify.app/docs/introduction/getting-started) - 一个基于 SolidJS 的 UI 组件库

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [SolidJS](https://start.solidjs.com/) - 一个用于构建用户界面，简单高效、性能卓越的JavaScript库.
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 自动加载组件
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`solid-primitives`](https://github.com/solidjs-community/solid-primitives) - 扩展SolidJS反应性的高质量原语库.

### 编码风格

- [ESLint](https://eslint.org/) 配置为 [@xbmlz/eslint-config](https://github.com/xbmlz/eslint-config), 单引号, 无分号, 保存时自动修复

### 开发工具
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - 基于 Vite 的单元测试框架
- [Cypress](https://cypress.io/) - E2E 测试
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [Netlify](https://www.netlify.com/) - 零配置的部署
- [VS Code 扩展](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - 多合一的 I18n 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 衍生项目

由于这个模板的业务场景非常的局限，下面提供了一个精心策划的列表，列出了社区维护的具有不同偏好和功能集的衍生项目。也可以看看他们。当然也欢迎你 PR 提供自己的项目！

## 现在可以试试!

> Vitesse-solid 需要 Node 版本 >=14.18

### GitHub 模板

[使用这个模板创建仓库](https://github.com/xbmlz/vitesse-solid/generate).

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit xbmlz/vitesse-solid my-vitesse-solid-app
cd my-vitesse-solid-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

## 清单

使用此模板时，请尝试按照清单正确更新您自己的信息

- [ ] 在 `LICENSE` 中改变作者名
- [ ] 在 `App.vue` 中改变标题
- [ ] 在 `vite.config.ts` 更改主机名
- [ ] 在 `public` 目录下改变favicon
- [ ] 移除 `.github` 文件夹中包含资助的信息
- [ ] 整理 README 并删除路由

紧接着, 享受吧 :)

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:3333 中看到

```bash
pnpm dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build
```

然后你会看到用于发布的 `dist` 文件夹被生成。

### 部署到 Netlify

前往 [Netlify](https://app.netlify.com/start) 并选择你的仓库, 一路 `OK` 下去，稍等一下后，你的应用将被创建.

### Tauri Desktop App

开发 Tauri 桌面应用，运行

```bash
pnpm tauri:dev
```


打包 Tauri 桌面应用，运行

> 你可以参考 [Tauri 文档](https://tauri.studio/en/docs/getting-started/intro) 来了解更多关于 Tauri 的信息

```bash
pnpm tauri:build
```



