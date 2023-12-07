import type { Component } from 'solid-js'
import { A } from 'solid-start'
import { DarkSwitcher } from './DarkSwitcher'
import { availableLocales } from '~/locales'

const Footer: Component = () => {
  const [t, { locale }] = useI18n()
  const [index, setIndex] = createSignal(0)
  const toggleLocales = () => {
    setIndex((index() + 1) % availableLocales.length)
    locale(availableLocales[index()])
  }

  return (
    <nav class="flex gap-4 mt-6 text-xl justify-center">
      <A class="icon-btn" href="/" title={t('btn_home')}>
        <div class="i-carbon-campsite" />
      </A>

      <DarkSwitcher />

      <a class="icon-btn" title={t('btn_toggle_langs')} onClick={toggleLocales}>
        <div i-carbon-language />
      </a>

      <A class="icon-btn" title={t('btn_about')} href="/about">
        <div i-carbon-dicom-overlay />
      </A>

      <A class="icon-btn" title="Tauri App" href="/tauri">
        <div i-carbon-application-web />
      </A>

      <a
        rel="noreferrer"
        href="https://github.com/xbmlz/vitesse-solid"
        target="_blank"
        title="GitHub"
        class="icon-btn"
      >
        <div i-carbon-logo-github />
      </a>
    </nav>
  )
}

export default Footer
