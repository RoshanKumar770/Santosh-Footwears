import './Footer.css'

const links = {
  'Quick Links': [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ],

  Categories: [
    { name: 'Sports Shoes', href: '#products' },
    { name: 'Formal Shoes', href: '#products' },
    { name: 'Casual Shoes', href: '#products' },
    { name: "Women's Footwear", href: '#products' },
    { name: 'Kids Shoes', href: '#products' },
    { name: 'Sandals & Slippers', href: '#products' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <div className="footer__logo">
  <div className="footer__logo-mark">
    <img
      src="/shoe-icon.svg"
      alt="Santosh Footwears Logo"
      className="footer__logo-img"
    />
  </div>

  <div>
    <strong>Santosh Footwears</strong>
    <small>Quality Shoes For Everyone</small>
  </div>
</div>

          <p>
            Santosh Footwears has been serving customers with quality,
            affordable and stylish footwear since 2005. We offer footwear
            for men, women and children with comfort and durability in mind.
          </p>

          <div className="footer__socials">
            <a
              href="https://wa.me/917903750291"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a href="tel:+917903750291">
              Call
            </a>

            <a href="mailto:rauwmac@gmail.com">
              Email
            </a>
          </div>
        </div>

        {Object.entries(links).map(([heading, items]) => (
          <div key={heading} className="footer__col">
            <h4>{heading}</h4>

            <ul>
              {items.map((item) => (
                <li key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col">
          <h4>Contact</h4>

          <ul className="footer__contact-list">
            <li>
              Dindli Market, Adityapur,
              <br />
              Jharkhand - 832108
            </li>

            <li>
              <a href="tel:+917903750291">
                +91 79037 50291
              </a>
            </li>

            <li>
              <a href="mailto:rauwmac@gmail.com">
                rauwmac@gmail.com
              </a>
            </li>

            <li>
              Mon - Sat: 10:00 AM - 10:00 PM
            </li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Santosh Footwears. All Rights Reserved.
          </p>

          <p>
            Serving Customers Since 2005
          </p>
        </div>
      </div>
    </footer>
  )
}