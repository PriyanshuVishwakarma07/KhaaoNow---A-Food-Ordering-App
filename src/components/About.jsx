import React from "react";
import { FaUtensils, FaMotorcycle, FaStar } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-banner">
        <h1 className="hero-title">Redefining Food Discovery</h1>
        <p className="hero-subtitle">
          Connecting hungry customers to their favorite restaurants since 2015
        </p>
      </div>

      <div className="section-intro">
        <h2 className="section-title">Your Gateway to Culinary Delights</h2>
        <p className="section-description">
          We're not just a food delivery platform - we're a food ecosystem. From
          neighborhood favorites to premium dining, we bring the city's best
          restaurants to your doorstep.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <FaUtensils className="feature-icon red" />
          <h3 className="feature-title">10,000+ Restaurants</h3>
          <p className="feature-description">
            Discover everything from street food to fine dining across 100+
            cuisines
          </p>
        </div>
        <div className="feature-card">
          <FaMotorcycle className="feature-icon orange" />
          <h3 className="feature-title">Lightning Fast Delivery</h3>
          <p className="feature-description">
            Average delivery time of 30 minutes with our optimized logistics
            network
          </p>
        </div>
        <div className="feature-card">
          <FaStar className="feature-icon yellow" />
          <h3 className="feature-title">Verified Reviews</h3>
          <p className="feature-description">
            5 million+ authentic customer reviews to guide your choices
          </p>
        </div>
      </div>

      <div className="how-it-works">
        <h2 className="section-title center">How Our Platform Works</h2>
        <div className="steps-grid">
          {["Discover Restaurants", "Place Your Order", "Enjoy Your Food"].map(
            (step, index) => (
              <div className="step-card" key={index}>
                <div className={`step-circle step-${index + 1}`}>
                  {index + 1}
                </div>
                <h3 className="step-title">{step}</h3>
                <p className="step-description">
                  {[
                    "Browse curated lists, search by cuisine, or explore trending spots near you",
                    "Customize your meal, apply discounts, and checkout securely",
                    "Track your order in real-time until it arrives at your doorstep",
                  ][index]}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <div className="partners-section">
        <div className="partners-info">
          <h2 className="section-title">For Restaurant Partners</h2>
          <p className="section-description">
            We empower restaurants of all sizes to grow their business through:
          </p>
          <ul className="partner-benefits">
            <li>✓ Increased visibility to millions of potential customers</li>
            <li>✓ Our reliable delivery fleet and logistics support</li>
            <li>✓ Data-driven insights to optimize your operations</li>
            <li>✓ Marketing tools to attract and retain customers</li>
          </ul>
        </div>
        <div className="partners-image">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Restaurant kitchen"
          />
        </div>
      </div>

      <div className="impact-section">
        <h2 className="section-title">More Than Just Food Delivery</h2>
        <p className="section-description">
          We're committed to creating positive change in the communities we
          serve
        </p>
        <div className="impact-stats">
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Local Suppliers Supported</div>
          </div>
          <div className="stat">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Delivery Partners Empowered</div>
          </div>
          <div className="stat">
            <div className="stat-number">1M+</div>
            <div className="stat-label">
              Meals Donated Through Our Foundation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
