import { useT } from '../context/LanguageContext'
import { Icon } from './Icons'
import aboutDecal from '../assets/about-decal.jpg'
import aboutInterior from '../assets/about-interior.jpg'

export default function About() {
  const t = useT()
  return (
    <section id="about" className="section-paper">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">{t.about_eyebrow}</span>
          <h2 style={{ marginTop: 10 }}>{t.about_title}</h2>
          <div className="about-body" style={{ marginTop: 22 }}>
            <p className="about-lead serif-ital">{t.about_p1}</p>
            <p>{t.about_p2}</p>
          </div>
        </div>
        <div>
          <div className="about-photos">
            <img src={aboutDecal} alt="Saporia — family business, Lipscani 19" loading="lazy" />
            <img src={aboutInterior} alt="Saporia — bar interior" loading="lazy" />
          </div>
          <div className="facts">
            <div className="fact"><Icon name="ic-seats" /><span>{t.fact_tables}</span></div>
            <div className="fact"><Icon name="ic-clock" /><span>{t.fact_hours}</span></div>
            <div className="fact"><Icon name="ic-pin" /><span>{t.fact_address}</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
