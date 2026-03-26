import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: 'O nas', href: '#about' },
    { label: 'Oferta', href: '#services' },
    { label: 'Realizacje', href: '#gallery' },
    { label: 'W sieci', href: '#social' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          Archekon<span className="dot">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="mobile-nav-link" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
