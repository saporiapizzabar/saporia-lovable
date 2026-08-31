import { useT } from '../context/LanguageContext'

export default function BadgesStrip() {
  const t = useT()
  return (
    <section className="badges-strip">
      <div className="container badges-row">
        <div className="badge"><span className="num">★</span><span className="lbl">{t.badge_rating}</span></div>
        <div className="badge"><span className="num">72h</span><span className="lbl">{t.badge_dough}</span></div>
        <div className="badge"><span className="num">❄</span><span className="lbl">{t.badge_ac}</span></div>
        <div className="badge"><span className="num">☕</span><span className="lbl">{t.badge_coffee}</span></div>
      </div>
    </section>
  )
}
