import type { Component } from 'solid-js'
import { Anchor, HStack, useColorMode } from '@hope-ui/core'
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
      <Anchor href="/" title={t('btn_home')}>
        <div class="i-carbon-campsite" />
      </Anchor>

      <Anchor title={t('btn_toggle_dark')} onClick={toggleColorMode}>
        <div class="i-carbon-sun dark:i-carbon-moon" />
      </Anchor>

      <Anchor title={t('btn_toggle_langs')} onClick={toggleLocales}>
        <div i-carbon-language />
      </Anchor>

      <Anchor title={t('btn_about')} href="/about">
        <div i-carbon-dicom-overlay />
      </Anchor>

      <Anchor title="Tauri App" href="/tauri">
        <div i-carbon-application-web />
      </Anchor>

      <Anchor
        rel="noreferrer"
        href="https://github.com/xbmlz/vitesse-solid"
        target="_blank"
        title="GitHub"
      >
        <div i-carbon-logo-github />
      </Anchor>
    </HStack>
  )
}

export default Footer
