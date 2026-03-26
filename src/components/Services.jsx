import { Briefcase, Camera, BookOpen, Shovel } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Briefcase />,
      title: "Obsługa Administracyjna",
      desc: "Zajmiemy się wszelkimi formalnościami i urzędowymi pismami związanymi z konserwatorską stroną Twojej inwestycji. Pełna obsługa od uzyskania zgód do raportu końcowego.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Shovel />,
      title: "Badania i Nadzory Terenowe",
      desc: "Profesjonalnie i rzetelnie realizujemy badania wykopaliskowe, architektoniczno-archeologiczne oraz prowadzimy stałe nadzory archeologiczne na budowach.",
      image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Camera />,
      title: "Dokumentacja Terenowa",
      desc: "Sporządzamy szczegółową dokumentację rysunkową, opisową oraz fotograficzną w trakcie prowadzonych prac budowlano-ziemnych.",
      image: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BookOpen />,
      title: "Opracowania Kameralne",
      desc: "Dbamy o konserwację zabytków pozyskanych w terenie, a wyniki naszych prac kompilujemy w formie rzetelnych sprawozdań i analiz badawczych.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Nasza Oferta</span>
          <h2 className="section-title">Kompleksowe Usługi Archeologiczne</h2>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((svc, index) => (
            <motion.div className="service-card" key={index} variants={cardVariants}>
              <div className="service-image-container">
                <img src={svc.image} alt={svc.title} className="service-image" />
                <div className="service-icon">{svc.icon}</div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
              </div>
              <div className="service-card-decor"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
