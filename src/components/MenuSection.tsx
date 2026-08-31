import { useT, useLanguage } from '../context/LanguageContext'
import { MENU, ING } from '../i18n'
import { Icon } from './Icons'
import barTap from '../assets/bar-tap.jpg'
import barPour from '../assets/bar-pour.jpg'

export default function MenuSection() {
  const t = useT()
  const { lang } = useLanguage()

  return (
    <section id="menu">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.menu_eyebrow}</span>
          <h2>{t.menu_title}</h2>
        </div>

        <nav className="menu-nav">
          {MENU.map(cat => (
            <a key={cat.key} href={`#cat-${cat.key}`}>{t[`cat_${cat.key}`]}</a>
          ))}
          <a href="#cat-bar">{t.cat_bar}</a>
        </nav>

        <div>
          {MENU.map(cat => (
            <div className="cat-block" id={`cat-${cat.key}`} key={cat.key}>
              <div className="cat-head">
                <h3>{t[`cat_${cat.key}`]}</h3>
                <span className="count">{cat.items.length}</span>
              </div>
              <div className="dish-grid">
                {cat.items.map(item => {
                  const ingText = item.ing.map(k => ING[k][lang]).join(', ') + (item.alc ? ` · ${t.alc_note}` : '')
                  return (
                    <div className="dish" key={item.name}>
                      <div className="dish-top">
                        <span className="dish-name">{item.name}</span>
                        <span className="dish-price">{item.p} lei</span>
                      </div>
                      {item.w ? <span className="dish-weight">{item.w} g</span> : null}
                      <p className="dish-ing">{ingText}</p>
                      {(item.award || item.vegan || item.frozen || item.spicy) && (
                        <div className="dish-tags">
                          {item.award && <span className="tag tag-award"><Icon name="ic-star" />{t.tag_award}</span>}
                          {item.vegan && <span className="tag tag-vegan"><Icon name="ic-leaf" />{t.tag_vegan}</span>}
                          {item.frozen && <span className="tag tag-frozen"><Icon name="ic-snow" />{t.tag_frozen}</span>}
                          {!!item.spicy && (
                            <span className="tag tag-spicy">
                              {Array.from({ length: item.spicy }).map((_, i) => <Icon key={i} name="ic-chili" />)}
                              {t.tag_spicy}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bar-card" id="cat-bar">
          <div className="bg" style={{ backgroundImage: `url(${barTap})` }}></div>
          <div className="scrim"></div>
          <div className="bar-thumb"><img src={barPour} alt="" loading="lazy" /></div>
          <div className="content">
            <h3>{t.bar_title}</h3>
            <p>{t.bar_p}</p>
          </div>
        </div>

        <p className="allergy-note"><Icon name="ic-info" /><span>{t.allergy_note}</span></p>
      </div>
    </section>
  )
}
