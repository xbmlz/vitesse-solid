import { A } from '@solidjs/router'
import type { Component } from 'solid-js'
import { HStack, useColorMode } from '@hope-ui/core'
import { availableLocales } from '~/locales'

const Footer: Component = () => {
  const [t, { locale }] = useI18n()
  const [index, setIndex] = createSignal(0)
  const { toggleColorMode } = useColorMode()
  const toggleLocales = () => {
    setIndex((index() + 1) % availableLocales.length)
    locale(availableLocales[index()])
  }

  return (
    <HStack justify="center" spacingX={4} class="mt-4 text-xl">
      <A href="/" title={t('btn_home')}>
        <div class="i-carbon-campsite" />
      </A>

      <a onClick={toggleColorMode}>
        <div class="i-carbon-sun dark:i-carbon-moon" />
      </a>

      <a title={t('btn_toggle_langs')} onClick={toggleLocales}>
        <div i-carbon-language />
      </a>

      <A href="/about">
        <div i-carbon-dicom-overlay />
      </A>

      <A
        rel="noreferrer"
        href="https://github.com/xbmlz/vitesse-solid"
        target="_blank"
        title="GitHub"
      >
        <div i-carbon-logo-github />
      </A>
    </HStack>
  )
}

export default Footer
