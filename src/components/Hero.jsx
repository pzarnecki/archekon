import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="hero-subtitle"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pracownia Archeologiczno-Konserwatorska
          </motion.span>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Odkrywamy przeszłość,<br />budujemy przyszłość
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Profesjonalne nadzory archeologiczne i badania ratownicze. 
            Zadbamy o archeologię na Twojej inwestycji szybko i sprawnie.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#services" className="btn-primary">
              Nasza Oferta <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-outline hero-btn-outline">
              Skontaktuj się
            </a>
          </motion.div>
          
          <motion.div 
            className="hero-features-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="hero-feature">
              <span className="hero-feature-title">Dolnośląskie i Opolskie</span>
              <span className="hero-feature-desc">Lokalny zasięg pełnych usług</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-title">Nadzory i Badania</span>
              <span className="hero-feature-desc">Kompleksowa dokumentacja</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-title">Szybka Realizacja</span>
              <span className="hero-feature-desc">Bez opóźnień inwestycji</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
