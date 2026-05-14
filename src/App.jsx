import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import BackgroundGL from './components/BackgroundGL';
import CookieBanner from './components/CookieBanner';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Helmet>
        <title>Archekon - Pracownia Archeologiczno-Konserwatorska | Nadzory</title>
        <meta name="description" content="Archekon - profesjonalne nadzory archeologiczne i badania ratownicze. Paweł Rozwód. Obszar: dolnośląskie i opolskie." />
      </Helmet>
      <BackgroundGL />
      <Header scrolled={scrolled} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
