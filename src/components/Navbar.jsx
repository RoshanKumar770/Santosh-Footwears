import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  'Home',
  'About',
  'Products',
  'Gallery',
  'Reviews',
  'Contact',
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`navbar ${
        scrolled ? 'navbar--scrolled' : ''
      }`}
    >
      <div className="navbar__inner">

        <a href="#home" className="navbar__logo">
          <img
            src="/shoe-icon.svg"
            alt="Santosh Footwears"
            className="navbar__logo-img"
          />

          <div>
            <span className="navbar__logo-name">
              Santosh
            </span>

            <span className="navbar__logo-tag">
              Footwears
            </span>
          </div>
        </a>

        <nav
          className={`navbar__links ${
            open ? 'navbar__links--open' : ''
          }`}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="navbar__link"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar__cta"
            onClick={() => setOpen(false)}
          >
            Visit Us
          </a>
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}