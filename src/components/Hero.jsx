import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__circle hero__circle--1"></div>
        <div className="hero__circle hero__circle--2"></div>
        <div className="hero__circle hero__circle--3"></div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            Est. 2005 · Trusted Local Footwear Store
          </span>

          <h1 className="hero__title">
            Quality Shoes
            <br />
            <em>for Everyone</em>
          </h1>

          <p className="hero__desc">
            Sports · Casual · Formal · School Shoes · Sandals · Slippers
            <br />
            Affordable prices for men, women &amp; children.
          </p>

          <div className="hero__actions">
            <a href="#products" className="hero__btn hero__btn--primary">
              Shop Now
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Find Us
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span>500+</span>
              <p>Products</p>
            </div>
            <div className="hero__stat">
              <span>20+</span>
              <p>Brands</p>
            </div>
            <div className="hero__stat">
              <span>10K+</span>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        {/* ✅ FIX: /hero/hero-shoes.png is correct (public folder).
            Added onError fallback so the layout never breaks if image missing. */}
        <div className="hero__visual">
          <img
            src="/hero/hero-shoes.png"
            alt="Santosh Footwears Collection"
            className="hero__main-image"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-arrow">↓</div>
      </a>
    </section>
  )
}
