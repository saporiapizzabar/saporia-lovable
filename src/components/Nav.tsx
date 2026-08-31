import { useEffect, useRef, useState } from 'react'
import { LANGS, LANG_NAMES } from '../i18n'
import { useLanguage, useT } from '../context/LanguageContext'
import { Icon } from './Icons'
import logoHorizontal from '../assets/logo-horizontal.png'

export default function Nav() {
  const t = useT()
  const { lang, setLang } = useLanguage()
  const [langOpen, setLangOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const links = [
    { href: '#about', label: t.nav_about },
    { href: '#menu', label: t.nav_menu },
    { href: '#reserve', label: t.nav_reserve },
    { href: '#order', label: t.nav_order },
  ]

  return (
    <div className="nav-wrap">
      <nav className="nav">
        <a href="#top"><img className="nav-logo" src={logoHorizontal} alt="Saporia Pizza Bar" /></a>
        <ul className="nav-links">
          {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <div className="nav-right">
          <div className="lang-box" ref={boxRef}>
            <button
              className="lang-btn"
              aria-haspopup="true"
              aria-expanded={langOpen}
              onClick={(e) => { e.stopPropagation(); setLangOpen(o => !o) }}
            >
              <span>{lang.toUpperCase()}</span>
              <Icon name="ic-chevron" />
            </button>
            <div className={`lang-menu${langOpen ? ' open' : ''}`} role="menu">
              {LANGS.map(code => (
                <button
                  key={code}
                  type="button"
                  role="menuitem"
                  aria-current={code === lang}
                  onClick={() => { setLang(code); setLangOpen(false) }}
                >
                  <span>{LANG_NAMES[code]}</span>
                  <span>{code.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-panel${mobileOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
        ))}
      </div>
    </div>
  )
}
