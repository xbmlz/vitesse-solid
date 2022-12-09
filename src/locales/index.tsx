import { I18nContext, createI18nContext } from '@solid-primitives/i18n'
import type { FlowComponent } from 'solid-js'
import en from './en'
import zhCN from './zh-CN'

const ctx = createI18nContext({ en, zhCN }, 'en')

const availableLocales = ['en', 'zhCN']

const I18nProvider: FlowComponent<{
  dict?: Record<string, Record<string, any>>
  locale?: string
}> = (props) => {
  return <I18nContext.Provider value={ctx}>{props.children}</I18nContext.Provider>
}

export { en, zhCN, I18nProvider, availableLocales }
