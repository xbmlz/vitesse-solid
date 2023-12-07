<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/154486817-f86b8f20-5463-4122-b6e9-930622e757f2.png' alt='Vitesse - Opinionated Vite Starter Template' width='600'/>
</p>

<p align='center'>
Mocking up web app with <b>Vitesse for SolidJS</b><sup><em>(speed)</em></sup><br>
</p>

<br>

<p align='center'>
<a href="https://vitesse-solid.netlify.app/">Live Demo</a>
</p>

<br>

<p align='center'>
<b>English</b> | <a href="https://github.com/xbmlz/vitesse-solid/blob/main/README.zh-CN.md">简体中文</a>
<!-- Contributors: Thanks for getting interested, however we DON'T accept new transitions to the README, thanks. -->
</p>

<br>


## Features

- ⚡️ [SolidJS](https://github.com/solidjs/solid), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗃️ [File based routing](./src/routes)

- 📦 [Components auto importing](./src/components)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- ⚒️ [Solid Primitives](https://github.com/solidjs-community/solid-primitives) - A library of high-quality primitives that extend SolidJS reactivity.

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./src/locales)

- 🗒 [Markdown Support](./src/pages/about.md)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🖨  CSR, SSR, streaming SSR, or SSG via

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with [Cypress](https://cypress.io/) on [GitHub Actions](https://github.com/features/actions)

- ☁️ Deploy on Netlify, zero-config

- ⚗️ [Tauri Desktop App](https://tauri.app/) - build desktop apps with SolidJS

<br>


## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [SolidJS](https://start.solidjs.com/) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`solid-primitives`](https://github.com/solidjs-community/solid-primitives) - A library of high-quality primitives that extend SolidJS reactivity.

### Coding Style

- [ESLint](https://eslint.org/) with [@xbmlz/eslint-config](https://github.com/xbmlz/eslint-config), single quotes, no semi, auto fix on save

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [Cypress](https://cypress.io/) - E2E testing
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Variations

As this template is strongly opinionated, the following provides a curated list for community-maintained variations with different preferences and feature sets. Check them out as well. PR to add yours is also welcome!

## Try it now!

> Vitesse-solid requires Node >=16

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/xbmlz/vitesse-solid/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit xbmlz/vitesse-solid my-vitesse-solid-app
cd my-vitesse-solid-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the hostname in `vite.config.ts`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

### Docker Production Build

First, build the vitesse-solid image by opening the terminal in the project's root directory.

```bash
docker buildx build . -t vitesse-solid:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 vitesse-solid:latest
```

### Tauri Desktop App

To develop the Tauri Desktop App, run

```bash
pnpm tauri:dev
```

To build the Tauri Desktop App, run

> You can refer to [Tauri's documentation](https://tauri.studio/en/docs/getting-started/intro) for more information.

```bash
pnpm tauri:build
```

## Why

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintain your own forks. [(see community maintained variation forks)](#variations)
