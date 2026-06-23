import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import Products from './components/Products'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <Products />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
