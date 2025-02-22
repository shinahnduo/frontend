import { useNavigatorLanguage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useUtils } from '../utils'

export const useLanguageInitializer = () => {
  const utils = useUtils()
  const nav = useNavigatorLanguage()

  const init = () => {
    const { locale } = useI18n()

    let iso = 'en-US'

    switch (nav.language.value) {
      case 'pt-BR':
      case 'ko-KR':
      case 'en-US':
        iso = nav.language.value
        break
      default:
        iso = 'en-US'
        break
    }

    const lang = localStorage.getItem('lang') || utils.language().isoToCode(iso)

    if (!lang) return

    locale.value = lang
    ;(document.querySelector('html') as HTMLElement).lang = utils
      .language()
      .codeToIso(lang)
  }

  return { init }
}
