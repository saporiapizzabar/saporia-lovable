import { useT } from '../context/LanguageContext'
import { Icon } from './Icons'

const REVIEWS = [
  { quote: '"Nu am mai mâncat pizza atât de bună de foarte mult timp."', name: 'Patt P.' },
  { quote: '"O afacere mică de familie, atmosferă caldă și pizza supeeeer bună!"', name: 'Oana B.' },
  { quote: '"Pizza arăta și mirosea atât de bine încât am uitat complet de telefon."', name: 'Matei G.' },
]

export default function Reviews() {
  const t = useT()
  return (
    <section id="reviews" className="section-paper">
      <div className="container">
        <div className="reviews-head">
          <span className="eyebrow">{t.reviews_eyebrow}</span>
          <h2>{t.reviews_title}</h2>
          <p className="reviews-sub">{t.reviews_sub}</p>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map(r => (
            <div className="review-card" key={r.name}>
              <div className="review-stars">
                {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="ic-star" />)}
              </div>
              <p className="review-quote">{r.quote}</p>
              <div className="review-foot"><span>{r.name}</span><span>{t.review_tag_label}</span></div>
            </div>
          ))}
        </div>
        <a
          className="reviews-cta"
          href="https://www.google.com/maps/search/?api=1&query=Saporia%20Pizza%20Bar%20Lipscani%2019%20Bucuresti"
          target="_blank"
          rel="noopener"
        >
          {t.reviews_cta}
        </a>
      </div>
    </section>
  )
}
