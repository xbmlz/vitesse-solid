import { A } from '@solidjs/router'
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
      <A href="/" class="icon-btn mx-2" title={t('btn_home')}>
        <div class="i-carbon-campsite" />
      </A>

      <button class="icon-btn mx-2 !outline-none" onClick={toggleDark}>
        <div class="i-carbon-sun dark:i-carbon-moon" />
      </button>

      <a class="icon-btn mx-2" title={t('btn_toggle_langs')} onClick={toggleLocales}>
        <div i-carbon-language />
      </a>

      <A class="icon-btn mx-2" href="/about">
        <div i-carbon-dicom-overlay />
      </A>

      <A
        class="icon-btn mx-2"
        rel="noreferrer"
        href="https://github.com/xbmlz/vitesse-solid"
        target="_blank"
        title="GitHub"
      >
        <div i-carbon-logo-github />
      </A>
    </nav>
  )
}

export default Footer
