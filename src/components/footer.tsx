import { Link } from '@solidjs/router'
import type { Component } from 'solid-js'
import { availableLocales } from '~/locales'
import useDark from '~/hooks/dark'

const Footer: Component = () => {
  const [t, { locale }] = useI18n()
  const [index, setIndex] = createSignal(0)
  const { toggleDark } = useDark()
  const toggleLocales = () => {
    setIndex((index() + 1) % availableLocales.length)
    locale(availableLocales[index()])
  }
  return (
    <nav text-xl mt-6>
      <Link href="/" class="icon-btn mx-2" title={t('btn_home')}>
        <div class="i-carbon-campsite" />
      </Link>

      <button class="icon-btn mx-2 !outline-none" onClick={toggleDark}>
        <div class="i-carbon-sun dark:i-carbon-moon" />
      </button>

      <a class="icon-btn mx-2" title={t('btn_toggle_langs')} onClick={toggleLocales}>
        <div i-carbon-language />
      </a>

      <Link class="icon-btn mx-2" href="/about">
        <div i-carbon-dicom-overlay />
      </Link>
    </nav>
  )
}

export default Footer
