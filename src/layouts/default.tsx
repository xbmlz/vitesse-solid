import type { Component } from 'solid-js'
import { Routes } from '@solidjs/router'
import { FileRoutes } from 'solid-start'
import Footer from '~/components/footer'

const DefaultLayout: Component = () => {
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
