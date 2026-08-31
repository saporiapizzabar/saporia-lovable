import { useT } from '../context/LanguageContext'
import heroBg from '../assets/hero-bg.jpg'
import logoVertical from '../assets/logo-vertical.png'

export default function Hero() {
  const t = useT()
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        <span className="hero-pill">{t.hero_eyebrow}</span>
        <img className="hero-logo" src={logoVertical} alt="Saporia" />
        <p className="hero-tagline">
          <span className="lead">{t.hero_line1}</span>
          <span className="ital">{t.hero_line2}</span>
        </p>
        <p className="hero-sub">{t.hero_sub}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#reserve">{t.cta_reserve}</a>
          <a className="btn btn-outline-light" href="#order">{t.cta_order}</a>
        </div>
      </div>
    </section>
  )
}
