// @refresh reload
import { Suspense } from 'solid-js'
import { Body, Head, Html, Link, Meta, Scripts, ServerContext, Title } from 'solid-start'
import { ErrorBoundary } from 'solid-start/error-boundary'
import {
  ColorModeScript,
  HopeProvider,
  cookieStorageManagerSSR,
  injectCriticalStyle,
} from '@hope-ui/core'
import { isServer } from 'solid-js/web'
import DefaultLayout from './layouts/default'
import { I18nProvider } from './locales'
import './styles/root.css'
import 'uno.css'

export default function Root() {
  const event = useContext(ServerContext)
  const storageManager = cookieStorageManagerSSR(
    isServer ? event?.request.headers.get('cookie') ?? '' : document.cookie
  )
  injectCriticalStyle()
  return (
    <Html lang="en">
      <Head>
        <Title>Vitesse</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="apple-touch-icon" href="/pwa-192x192.png" />
        <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9" />
        <Meta name="msapplication-TileColor" content="#00aba9" />
        <Meta name="description" content="Opinionated Vite Starter Template" />
      </Head>
      <Body class="font-sans">
        <ColorModeScript storageType={storageManager.type} />
        <HopeProvider storageManager={storageManager}>
          <Suspense>
            <ErrorBoundary>
              <I18nProvider>
                <DefaultLayout />
              </I18nProvider>
            </ErrorBoundary>
          </Suspense>
        </HopeProvider>
        <Scripts />
      </Body>
    </Html>
  )
}
