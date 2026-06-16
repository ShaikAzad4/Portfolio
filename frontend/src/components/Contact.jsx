import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch(
        'https://portfolio-server-4c2f.onrender.com/send-mail/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            mail: formData.email,
            desc: formData.message,
            subject: `Portfolio Contact From ${formData.name}`,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Message sent successfully!',
        });

        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Email send failed:', error);

      setSubmitStatus({
        type: 'error',
        message:
          'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'shaikazad9191@gmail.com',
      link: 'mailto:shaikazad9191@gmail.com'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Hyderabad, India',
      link: null
    },
    {
      icon: '💼',
      label: 'Available for',
      value: 'Full-time & Freelance',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">
              Let's Work Together! 🚀
            </h3>

            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>

                  <div className="contact-text">
                    <strong>{item.label}:</strong>

                    {item.link ? (
                      <a href={item.link} className="contact-link">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>

              <div className="social-icons">
                <a
                  href="https://github.com/ShaikAzad4?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">🐙</span>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/shaik-azad-36772230a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">💼</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I'd love to hear from you!</p>
            </div>

            {submitStatus.message && (
              <div className={`form-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${
                isSubmitting ? 'submitting' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Message ✨'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;