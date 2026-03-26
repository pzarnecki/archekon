import { Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="social">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo footer-logo">
              Archekon<span className="dot">.</span>
            </a>
            <p className="footer-desc">
              Pracownia Archeologiczno-Konserwatorska.<br />
              Solidny partner przy każdej inwestycji budowlanej.
            </p>
          </div>
          
          <div className="footer-socials">
            <h4 className="footer-title">W sieci</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Archekon - Pracownia Archeologiczno-Konserwatorska Paweł Rozwód. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
