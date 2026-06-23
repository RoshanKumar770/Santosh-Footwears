import { useState } from 'react'
import './Contact.css'

const FORMSPREE_URL = 'https://formspree.io/f/mojbzalv'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')
    setErrMsg('')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')

        setForm({
          name: '',
          phone: '',
          email: '',
          message: '',
        })

        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      } else {
        setErrMsg(
          data?.errors?.[0]?.message ||
            'Something went wrong. Please try again.'
        )
        setStatus('error')
      }
    } catch {
      setErrMsg(
        'Network error. Please check your connection and try again.'
      )
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        {/* Left Side */}
        <div className="contact__info">
          <span className="about__label">Get In Touch</span>

          <h2 className="section-title">Visit Our Store</h2>

          <p className="contact__sub">
            We're open throughout the week and always ready to help you
            find the perfect footwear for every occasion.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-icon">01</span>
              <div>
                <strong>Address</strong>
                <p>
                  Santosh Footwears
                  <br />
                  Dindli Market, Adityapur
                  <br />
                  Jharkhand - 832108
                </p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon">02</span>
              <div>
                <strong>Phone</strong>
                <p>
                  <a href="tel:+917903750291">
                    +91 79037 50291
                  </a>
                </p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon">03</span>
              <div>
                <strong>WhatsApp</strong>
                <p>
                  <a
                    href="https://wa.me/917903750291"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat With Us
                  </a>
                </p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon">04</span>
              <div>
                <strong>Email</strong>
                <p>
                  <a href="mailto:rauwmac@gmail.com">
                    rauwmac@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon">05</span>
              <div>
                <strong>Store Hours</strong>
                <p>
                  Monday - Saturday: 9:00 AM - 9:00 PM
                  <br />
                  Sunday: 10:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact__right">
          <form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3>Send Us a Message</h3>

            <p className="contact__form-note">
              Fill out the form and we'll get back to you shortly.
            </p>

            {status === 'success' && (
              <div className="contact__banner contact__banner--success">
                Message sent successfully! We'll contact you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="contact__banner contact__banner--error">
                {errMsg}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                rows="5"
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              className={`contact__submit ${
                status === 'sending'
                  ? 'contact__submit--sending'
                  : ''
              }`}
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? 'Sending...'
                : 'Send Message'}
            </button>
          </form>

          <div className="contact__map">
            <iframe
              title="Santosh Footwears Location"
              src="https://maps.google.com/maps?q=Dindli%20Market%20Adityapur%20Jharkhand&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}