import { useT } from '../context/LanguageContext'

const PLATFORMS = [
  { name: 'Bolt Food', href: 'https://food.bolt.eu/ro-ro/325-bucharest/p/116529-saporia-pizza-bar/' },
  { name: 'Glovo', href: 'https://glovoapp.com/en/ro/bucharest/stores/sebwich-buc' },
  { name: 'Wolt', href: 'https://wolt.com/ro/rou/bucharest/restaurant/sebwich-67db0556fb310378dfe97700' },
]

export default function Order() {
  const t = useT()
  return (
    <section id="order" className="section-paper">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.order_eyebrow}</span>
          <h2>{t.order_title}</h2>
          <p style={{ marginTop: 14, color: 'var(--ink-soft)' }}>{t.order_p}</p>
        </div>
        <div className="order-grid">
          {PLATFORMS.map(p => (
            <a className="order-card" href={p.href} target="_blank" rel="noopener" key={p.name}>
              <div className="plat">{p.name}</div>
              <div className="go">{t.order_go}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
