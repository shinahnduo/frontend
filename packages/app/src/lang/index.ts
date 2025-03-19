import { createI18n } from 'vue-i18n'
// import { ptBR, enUS, koKR, VueI18nLocales } from 'better-write-languages'
import messages from '@intlify/unplugin-vue-i18n/messages';
import enUS from "@/lang/en-US";

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en: enUS,
  },
})
