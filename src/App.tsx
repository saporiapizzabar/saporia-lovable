import { LanguageProvider } from './context/LanguageContext'
import { IconDefs } from './components/Icons'
import Nav from './components/Nav'
import Hero from './components/Hero'
import BadgesStrip from './components/BadgesStrip'
import Reviews from './components/Reviews'
import About from './components/About'
import MenuSection from './components/MenuSection'
import Reserve from './components/Reserve'
import Order from './components/Order'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <IconDefs />
      <Nav />
      <main id="top">
        <Hero />
        <BadgesStrip />
        <Reviews />
        <About />
        <MenuSection />
        <Reserve />
        <Order />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
