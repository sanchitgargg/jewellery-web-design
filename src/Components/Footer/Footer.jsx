import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaFacebookF, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import logo1 from '../../assets/logo1.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="newsletter-text">
          <h5>NEWSLETTER</h5>
          <h2>Get Monthly Updates</h2>
        </div>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email address and get updates directly to your email" />
          <button>→</button>
        </div>
      </div>

      <hr id='line'/> <br/> <br/>

      <div className="footer-content">
        <div className="footer-left">
          <img src={logo1} alt="" />
          <p>
            Devji since 1950; the name that stands for gold, has earned
            a formidable repute in the GCC for providing the best in
            jewelry to its loyal clientele. Built on a solid reputation
            that spans more than half a century.
          </p>
          <div className="social-icons">
            <FaInstagram />
            <FaTiktok />
            <FaFacebookF />
            <FaYoutube />
            <FaXTwitter />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>Earrings</li>
              <li>Necklace</li>
              <li>Bracelet</li>
              <li>Ring</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Testimonials</li>
              <li>Best Seller</li>
              <li>New Arrivals</li>
              <li>Terms & Conditions</li>
              <li>Latest Update</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Account</h4>
            <ul>
              <li>Orders</li>
              <li>Wishlist</li>
              <li>Payment Info</li>
              <li>Addresses</li>
              <li>Personal Info</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>Size Charts</li>
              <li>Payment Guide</li>
              <li>Help Centre</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
