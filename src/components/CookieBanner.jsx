import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Pokaż baner z opóźnieniem
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="cookie-content">
            <p>
              Nasza strona korzysta z plików cookies w celu analizy ruchu i zapewnienia poprawnego działania serwisu. 
              Dalsze korzystanie z witryny oznacza wyrażenie zgody na ich użycie zgodnie z naszą polityką prywatności.
            </p>
            <div className="cookie-buttons">
              <button onClick={handleAccept} className="btn-primary cookie-btn">
                Rozumiem i akceptuję
              </button>
              <button onClick={() => setIsVisible(false)} className="cookie-close" aria-label="Zamknij">
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
