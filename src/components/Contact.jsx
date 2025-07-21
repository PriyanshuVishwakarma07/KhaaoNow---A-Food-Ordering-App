import React from "react";
import {
  FaHeadset,
  FaMapMarkerAlt,
  FaClock,
  FaMobileAlt,
  FaStore,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! Our team will respond within 24 hours.");
  };

  const socialLinks = [
    { name: "Twitter", icon: "🐦", color: "twitter" },
    { name: "Facebook", icon: "👍", color: "facebook" },
    { name: "Instagram", icon: "📷", color: "instagram" },
    { name: "LinkedIn", icon: "💼", color: "linkedin" },
  ];

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1 className="contact-hero-title">We're Here to Help</h1>
        <p className="contact-hero-subtitle">
          Contact our 24/7 support team for any questions or issues
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-form">
          <h2 className="form-title">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" required>
                <option value="">Select an option</option>
                <option value="order">Order Issue</option>
                <option value="delivery">Delivery Problem</option>
                <option value="payment">Payment Concern</option>
                <option value="restaurant">Restaurant Partnership</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Message</button>
          </form>
        </div>

        <div className="contact-support">
          <div className="support-box">
            <h2 className="support-title">Quick Support</h2>
            <div className="support-item">
              <div className="icon red"><FaHeadset /></div>
              <div>
                <h3>24/7 Customer Care</h3>
                <p>+91 12345 67890</p>
                <p>support@foodbazaar.com</p>
              </div>
            </div>
            <div className="support-item">
              <div className="icon orange"><FaStore /></div>
              <div>
                <h3>Restaurant Partners</h3>
                <p>+91 98765 43210</p>
                <p>partners@foodbazaar.com</p>
              </div>
            </div>
            <div className="support-item">
              <div className="icon yellow"><FaMobileAlt /></div>
              <div>
                <h3>App Support</h3>
                <p>+91 87654 32109</p>
                <p>appsupport@foodbazaar.com</p>
              </div>
            </div>
          </div>

          <div className="support-box">
            <h2 className="support-title">Our Headquarters</h2>
            <div className="support-item">
              <div className="icon blue"><FaMapMarkerAlt /></div>
              <div>
                <p>
                  FoodBazaar Technologies Pvt. Ltd. <br />
                  22nd Floor, Tower B<br />
                  ABC 122002, India
                </p>
              </div>
            </div>
            <div className="support-item">
              <div className="icon green"><FaClock /></div>
              <div>
                <p>
                  Monday to Friday: 9:00 AM - 7:00 PM<br />
                  Saturday: 10:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us on Map</h2>
        <div className="map-frame">
          <iframe
            title="FoodExpress Headquarters"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.223468354734!2d77.09089731507986!3d28.502482982469827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193f5f5a7f07%3A0x7f1b0b5b5b5b5b5b!2sCyber%20City%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="social-section">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href="#"
              className={`social-icon ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
