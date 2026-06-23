import './Reviews.css'

const reviews = [
  {
    name: 'Harpreet Singh',
    role: 'Sports Enthusiast',
    text: 'Got my running shoes from Santosh Footwears. Excellent quality and the price was very reasonable. Will definitely buy again!',
    stars: 5,
  },
  {
    name: 'Sunita Sharma',
    role: 'Regular Customer',
    text: 'Best local footwear shop around. They have a great collection for women. Very helpful staff too.',
    stars: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Father of Three',
    text: 'Bought school shoes for all three of my kids. Very durable and affordable. Santosh Footwears is our go-to store!',
    stars: 5,
  },
  {
    name: 'Priya Mehra',
    role: 'College Student',
    text: 'Loved the casual shoes collection. Got a stylish pair at a great price. Amazing value for money!',
    stars: 5,
  },
  {
    name: 'Gurjit Kaur',
    role: 'Homemaker',
    text: 'Very good quality sandals at affordable prices. The staff helped me pick the right size. Highly recommend!',
    stars: 5,
  },
  {
    name: 'Amit Verma',
    role: 'Working Professional',
    text: 'Purchased formal shoes for my office. They look premium but cost much less compared to malls. Great store!',
    stars: 4,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">

        <div className="reviews__head">
          <span className="about__label">
            Testimonials
          </span>

          <h2 className="section-title">
            What Our Customers Say
          </h2>

          <p className="section-sub">
            Trusted by thousands of happy customers
          </p>
        </div>

        <div className="reviews__stats">
          <div>
            <span>4.9</span>
            <p>Average Rating</p>
          </div>

          <div>
            <span>10K+</span>
            <p>Happy Customers</p>
          </div>

          <div>
            <span>98%</span>
            <p>Satisfaction Rate</p>
          </div>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card"
            >
              <div className="review-card__stars">
                {'★'.repeat(review.stars)}
              </div>

              <p className="review-card__text">
                "{review.text}"
              </p>

              <div className="review-card__author">
                <div className="review-card__avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <strong>
                    {review.name}
                  </strong>

                  <span>
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}