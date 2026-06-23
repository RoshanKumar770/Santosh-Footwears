import './Categories.css'

// ✅ FIX: Use absolute /public/categories/ paths instead of src/assets imports.
// This ensures images work on Vercel, Docker, and all deployment environments.
const cats = [
  {
    image: '/categories/sports-shoes.jpg',
    name: 'Sports Shoes',
    count: '80+ Styles',
  },
  {
    image: '/categories/formal-shoes.jpg',
    name: 'Formal Shoes',
    count: '50+ Styles',
  },
  {
    image: '/categories/casual-shoes.jpg',
    name: 'Casual Shoes',
    count: '70+ Styles',
  },
  {
    image: '/categories/women-footwear.jpg',
    name: "Women's Footwear",
    count: '90+ Styles',
  },
  {
    image: '/categories/kids-footwear.jpg',
    name: 'Kids Footwear',
    count: '60+ Styles',
  },
  {
    image: '/categories/sandals.jpg',
    name: 'Sandals & Slippers',
    count: '100+ Styles',
  },
]

export default function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__head">
          <span className="about__label">Collections</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-sub">
            Find the perfect footwear for every occasion
          </p>
        </div>

        <div className="categories__grid">
          {cats.map((category, index) => (
            <a href="#products" key={index} className="cat-card">
              <img
                src={category.image}
                alt={category.name}
                className="cat-card__img"
                onError={(e) => {
                  e.target.style.objectFit = 'contain'
                  e.target.style.padding = '2rem'
                  e.target.style.background = '#f5e8d0'
                }}
              />
              <div className="cat-card__content">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
