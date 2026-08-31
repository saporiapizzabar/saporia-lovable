import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { LANGS, Lang, T } from '../i18n'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LangCtx>({ lang: 'ro', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ro')

  useEffect(() => {
    let initial: Lang = 'ro'
    try {
      const saved = localStorage.getItem('saporia_lang') as Lang | null
      if (saved && LANGS.includes(saved)) {
        initial = saved
      } else {
        const nav = (navigator.language || 'ro').slice(0, 2).toLowerCase() as Lang
        if (LANGS.includes(nav)) initial = nav
      }
    } catch (e) { /* ignore */ }
    setLangState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    try { localStorage.setItem('saporia_lang', lang) } catch (e) { /* ignore */ }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangState }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useT() {
  const { lang } = useLanguage()
  return T[lang]
}
