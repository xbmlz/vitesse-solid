import type { Component } from 'solid-js'
import { Routes } from '@solidjs/router'
import { FileRoutes } from 'solid-start'
import Footer from '~/components/Footer'

const DefaultLayout: Component = () => {
  // createEffect(() => {
  //   const link = document.createElement('link')
  //   link.rel = 'icon'
  //   link.type = 'image/svg+xml'
  //   link.href = colorMode() === 'dark' ? '/favicon-dark.svg' : '/favicon.svg'
  //   document.head.append(link)
  // }, [colorMode])

  return (
    <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Routes>
        <FileRoutes />
      </Routes>
      <Footer />
    </main>
  )
}

export default DefaultLayout
