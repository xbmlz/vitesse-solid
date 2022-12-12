import type { Component } from 'solid-js'
import { Routes } from '@solidjs/router'
import { FileRoutes } from 'solid-start'
import Footer from '~/components/Footer'

const DefaultLayout: Component = () => {
  return (
    <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Routes>
        <FileRoutes />
      </Routes>
      <Footer />
      <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
        [Default Layout]
      </div>
    </main>
  )
}

export default DefaultLayout
