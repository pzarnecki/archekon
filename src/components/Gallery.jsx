import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1549463378-43dafacd94a0?q=80&w=800&auto=format&fit=crop",
      alt: "Wykopaliska terenowe - detale"
    },
    {
      url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=800&auto=format&fit=crop",
      alt: "Starożytne ruiny podczas inwentaryzacji"
    },
    {
      url: "https://images.unsplash.com/photo-1589810264340-0ce27e21af43?q=80&w=800&auto=format&fit=crop",
      alt: "Prace dokumentacyjne w terenie"
    },
    {
      url: "https://images.unsplash.com/photo-1541299978647-7ee95c52c2ad?q=80&w=800&auto=format&fit=crop",
      alt: "Badania ratownicze przy inwestycji"
    }
  ];

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Realizacje</span>
          <h2 className="section-title">Dokumentacja i Wykopaliska</h2>
        </motion.div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div 
              className="gallery-item" 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <img src={img.url} alt={img.alt} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-caption">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
