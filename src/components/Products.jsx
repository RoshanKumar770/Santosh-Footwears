import { useState } from 'react'
import './Products.css'

// ✅ FIX: /products/*.jpg served from public/ folder — correct for Vercel.
// Added emoji fallback per card so broken images never show blank boxes.
const products = [
  { id: 1,  name: 'Running Sports Shoes',  category: 'Sports',  price: 1299, tag: 'Best Seller',    image: '/products/running-shoes.jpg',  fallback: '👟' },
  { id: 2,  name: 'Canvas Casual Shoes',   category: 'Casual',  price: 799,  tag: 'New Arrival',    image: '/products/casual-shoes.jpg',   fallback: '👟' },
  { id: 3,  name: 'Leather Formal Shoes',  category: 'Formal',  price: 1899, tag: 'Premium',        image: '/products/leather-formal.jpg', fallback: '👞' },
  { id: 4,  name: 'Black School Shoes',    category: 'School',  price: 699,  tag: 'Kids Favourite', image: '/products/school-shoes.jpg',   fallback: '👞' },
  { id: 5,  name: 'Ladies Heel Sandals',   category: 'Women',   price: 999,  tag: 'Trending',       image: '/products/heel-sandals.jpg',   fallback: '👠' },
  { id: 6,  name: "Men's Leather Sandals", category: 'Sandals', price: 549,  tag: '',               image: '/products/men-sandals.jpg',    fallback: '🩴' },
  { id: 7,  name: 'Kids Velcro Shoes',     category: 'Kids',    price: 599,  tag: 'Comfortable',    image: '/products/kids-shoes.jpg',     fallback: '👟' },
  { id: 8,  name: 'Rubber Slippers',       category: 'Sandals', price: 249,  tag: 'Daily Wear',     image: '/products/slippers.jpg',       fallback: '🩴' },
  { id: 9,  name: 'Gym Training Shoes',    category: 'Sports',  price: 1499, tag: '',               image: '/products/gym-shoes.jpg',      fallback: '👟' },
  { id: 10, name: 'Ladies Flat Sandals',   category: 'Women',   price: 649,  tag: 'New Arrival',    image: '/products/flat-sandals.jpg',   fallback: '👡' },
  { id: 11, name: 'Formal Oxford Shoes',   category: 'Formal',  price: 2199, tag: 'Premium',        image: '/products/oxford-shoes.jpg',   fallback: '👞' },
  { id: 12, name: 'Cricket Sports Shoes',  category: 'Sports',  price: 1099, tag: '',               image: '/products/cricket-shoes.jpg',  fallback: '👟' },
]

const filters = ['All', 'Sports', 'Casual', 'Formal', 'School', 'Women', 'Sandals', 'Kids']

export default function Products() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <section id="products" className="products">
      <div className="container">

        <div className="products__head">
          <span className="about__label">Our Range</span>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-sub">
            Handpicked quality footwear at unbeatable prices
          </p>
        </div>

        <div className="products__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`filter-btn ${active === filter ? 'filter-btn--active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="products__grid">
          {filtered.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card__img">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    // Replace broken image with emoji fallback
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('product-card__img--fallback')
                    e.target.parentElement.setAttribute('data-emoji', product.fallback)
                  }}
                />
                {product.tag && (
                  <span className="product-card__tag">{product.tag}</span>
                )}
              </div>

              <div className="product-card__body">
                <span className="product-card__cat">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="product-card__footer">
                  <span className="product-card__price">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <a href="#contact" className="product-card__btn">
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
