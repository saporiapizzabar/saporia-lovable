import { useT } from '../context/LanguageContext'
import { Icon } from './Icons'
import logoHorizontal from '../assets/logo-horizontal.png'

export default function Footer() {
  const t = useT()
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <img className="footer-logo-img" src={logoHorizontal} alt="Saporia Pizza Bar" />
          <div className="footer-tag">{t.footer_tagline}</div>
        </div>
        <div className="footer-social">
          <span className="k">{t.footer_follow}</span>
          <div className="social-links">
            <a href="https://instagram.com/saporia.ro" target="_blank" rel="noopener" aria-label="Instagram"><Icon name="ic-ig" /></a>
            <a href="https://www.facebook.com/profile.php?id=100088869900723" target="_blank" rel="noopener" aria-label="Facebook"><Icon name="ic-fb" /></a>
            <a href="https://www.tiktok.com/@saporia.pizzabar" target="_blank" rel="noopener" aria-label="TikTok"><Icon name="ic-tk" /></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{t.footer_rights}</span>
        <span>09:00–23:00 · +40 733 929 894</span>
      </div>
    </footer>
  )
}
