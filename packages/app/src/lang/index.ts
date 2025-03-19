import { createI18n } from 'vue-i18n'
import { ptBR, enUS, koKR, VueI18nLocales } from 'better-write-languages'

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  locales: VueI18nLocales,
  messages: {
    en: enUS.default,
    ko: koKR.default,
    br: ptBR.default,
  },
})
