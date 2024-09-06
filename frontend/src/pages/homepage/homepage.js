import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="content-area">
      <section className="hero-section">
        <h1>Welcome to Spritual Platform</h1>
        <p>Your journey to Godhead starts here.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features-section">
        <h2>Regulative Principles</h2>
        <div className="features">
          <div className="feature-card">
            <img src="/path-to-your-image1.png" alt="Feature 1" />
            <h3>No Ellicit sex</h3>
            <p>Explore the amazing capabilities of our platform.</p>
          </div>
          <div className="feature-card">
            <img src="/path-to-your-image2.png" alt="Feature 2" />
            <h3>No Gambling</h3>
            <p>Seamless integration with your favorite tools.</p>
          </div>
          <div className="feature-card">
            <img src="/path-to-your-image3.png" alt="Feature 3" />
            <h3>No Meat Eating</h3>
            <p>Designed with user experience in mind.</p>
          </div>
          <div className="feature-card">
            <img src="/path-to-your-image3.png" alt="Feature 3" />
            <h3>No Intoxitations</h3>
            <p>Designed with user experience in mind.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>What Srila Prabhu Pada says</h2>
        <div className="testimonials">
          <blockquote>
            "This platform has transformed the way we work. Highly recommended!"
            <cite>- Happy Customer</cite>
          </blockquote>
          <blockquote>
            "The features and support are top-notch. We love it!"
            <cite>- Satisfied User</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
