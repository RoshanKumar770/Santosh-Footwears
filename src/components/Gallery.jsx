import './Gallery.css'

// ✅ FIX: Use absolute /public/ paths — work on Vercel, Docker, everywhere.
// ../assets/ relative imports break in Vite production builds.
const items = [
  {
    image: '/gallery/store-front.jpg',
    label: 'Our Store Front',
    desc: 'Visit us in person',
  },
  {
    image: '/gallery/shoe-display.jpg',
    label: 'Shoe Collection',
    desc: 'Wide variety of footwear',
  },
  {
    image: '/gallery/customers.jpg',
    label: 'Happy Customers',
    desc: 'Serving families with trust',
  },
  {
    image: '/gallery/brands.jpg',
    label: 'Quality Brands',
    desc: 'Top footwear brands available',
  },
  {
    image: '/gallery/women-section.jpg',
    label: "Women's Collection",
    desc: 'Latest styles and trends',
  },
  {
    image: '/gallery/new-arrivals.jpg',
    label: 'New Arrivals',
    desc: 'Fresh stock every month',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__head">
          <span className="about__label">Gallery</span>
          <h2 className="section-title">A Glimpse Inside</h2>
          <p className="section-sub">
            Explore our store, collection and customer experience
          </p>
        </div>

        <div className="gallery__grid">
          {items.map((item, index) => (
            <div
              key={index}
              className={`gallery-item gallery-item--${index}`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="gallery-item__img"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('gallery-item--fallback')
                }}
              />
              <div className="gallery-item__overlay">
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
