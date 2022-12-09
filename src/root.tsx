// @refresh reload
import { Suspense } from 'solid-js'
import { Body, Head, Html, Link, Meta, Scripts, Title } from 'solid-start'
import { ErrorBoundary } from 'solid-start/error-boundary'
import DefaultLayout from './layouts/default'
import { I18nProvider } from './locales'
import '@unocss/reset/tailwind.css'
import './root.css'
import 'uno.css'

export default function Root() {
  onMount(() => {
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const setting = localStorage.getItem('color-scheme') || 'auto'
    if (setting === 'dark' || (prefersDark && setting !== 'light'))
      document.documentElement.classList.toggle('dark', true)
  })

  return (
    <Html lang="en">
      <Head>
        <Title>Vitesse</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="apple-touch-icon" href="/pwa-192x192.png" />
        <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9" />
        <Meta name="msapplication-TileColor" content="#00aba9" />
      </Head>
      <Body class="font-sans">
        <Suspense>
          <ErrorBoundary>
            <I18nProvider>
              <DefaultLayout />
            </I18nProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
