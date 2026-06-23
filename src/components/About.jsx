import './About.css'

const highlights = [
  {
    number: '20+',
    title: 'Years Experience',
    desc: 'Serving customers with quality footwear since 2005',
  },
  {
    number: '500+',
    title: 'Products',
    desc: 'Wide range of footwear for every occasion',
  },
  {
    number: '10K+',
    title: 'Happy Customers',
    desc: 'Trusted by families across the region',
  },
  {
    number: '100%',
    title: 'Quality Focus',
    desc: 'Comfort, durability, and style guaranteed',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="about__label">Our Story</span>

          <h2 className="section-title">
            Santosh Footwears
          </h2>

          <p className="about__desc">
            Santosh Footwears has proudly served customers since 2005,
            offering quality footwear at affordable prices. From sports
            shoes and formal wear to sandals and kids' footwear, we provide
            options for every member of the family.
          </p>

          <p className="about__desc">
            Our mission is simple: deliver comfortable, durable, and stylish
            footwear while maintaining the trust and satisfaction of every
            customer who walks through our doors.
          </p>

          <a href="#products" className="about__link">
            Browse Our Collection →
          </a>
        </div>

        <div className="about__highlights">
          {highlights.map((item, index) => (
            <div key={index} className="about__card">
              <div className="about__number">
                {item.number}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}