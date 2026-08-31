import { useT } from '../context/LanguageContext'
import { Icon } from './Icons'

export default function Reserve() {
  const t = useT()
  return (
    <section id="reserve" className="reserve">
      <div className="container reserve-grid">
        <div>
          <span className="eyebrow">{t.reserve_eyebrow}</span>
          <h2>{t.reserve_title}</h2>
          <p className="lead">{t.reserve_p}</p>
          <a
            className="btn btn-primary"
            href="https://ialoc.ro/restaurante-bucuresti/saporia-pizza-bar-rezervari-4389"
            target="_blank"
            rel="noopener"
          >
            <span>{t.btn_book}</span>
          </a>
        </div>
        <div className="info-card">
          <div className="info-row"><Icon name="ic-clock" /><div><span className="k">{t.info_hours}</span><span className="v">09:00 – 23:00</span></div></div>
          <div className="info-row"><Icon name="ic-phone" /><div><span className="k">{t.info_phone}</span><span className="v"><a href="tel:+40733929894">0733 929 894</a></span></div></div>
          <div className="info-row"><Icon name="ic-pin" /><div><span className="k">{t.info_address}</span><span className="v">Str. Lipscani 19, București</span></div></div>
        </div>
      </div>
    </section>
  )
}
