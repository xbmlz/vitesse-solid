// @refresh reload
import { Suspense } from 'solid-js'
import { Body, Head, Html, Link, Meta, Scripts, Title } from 'solid-start'
import { ErrorBoundary } from 'solid-start/error-boundary'
import { usePrefersDark } from '@solid-primitives/media'
import DefaultLayout from './layouts/default'
import { I18nProvider } from './locales'
import '@unocss/reset/tailwind.css'
import './root.css'
import 'uno.css'

export default function Root() {
  const prefersDark = usePrefersDark()
  const icon = prefersDark() ? '/favicon-dark.svg' : '/favicon.svg'
  // TODO isDark
  const themeColor = prefersDark() ? '#00aba9' : '#ffffff'

  return (
    <Html lang="en">
      <Head>
        <Title>Vitesse</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="apple-touch-icon" href="/pwa-192x192.png" />
        <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9" />
        <Link rel="icon" href={icon} type="image/svg+xml" />
        <Meta name="msapplication-TileColor" content="#00aba9" />
        <Meta name="description" content="Opinionated Vite Starter Template" />
        <Meta name="theme-color" content={themeColor} />
        <script type="text/javascript">
          {`
          (function () {
            const prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : undefined
            const setting = localStorage.getItem('prefers-color-scheme') || 'auto'
            if (setting === 'dark' || (prefersDark ? setting === 'auto' : false)) {
              document.documentElement.classList.toggle('dark', true)
            }
          })()
          `}
        </script>
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
