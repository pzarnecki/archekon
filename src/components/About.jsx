import { Compass, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-image-decoration"></div>
            <img 
              src="https://images.unsplash.com/photo-1549463378-43dafacd94a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Wykopaliska archeologiczne" 
              className="about-image"
            />
          </motion.div>
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="section-header" style={{ textAlign: 'left' }}>
              <span className="section-label">O nas</span>
              <h2 className="section-title">Twoja inwestycja bez opóźnień</h2>
            </div>
            
            <p className="about-text">
              Jesteśmy profesjonalną pracownią archeologiczno-konserwatorską z siedzibą w Bierutowie.
              Naszym celem jest szybkie i rzetelne przeprowadzenie koniecznych badań ratowniczych i nadzorów archeologicznych.
            </p>
            <p className="about-text">
              Rozumiemy, jak ważny jest czas i budżet inwestora, dlatego działamy sprawnie, minimalizując wpływ prac na harmonogram Twojej budowy.
            </p>

            <div className="features">
              <div className="feature">
                <div className="feature-icon"><Compass size={24} /></div>
                <div>
                  <h4 className="feature-title">Doświadczenie</h4>
                  <p className="feature-desc">Realizacje na halach, osiedlach i przy domach jednorodzinnych.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon"><Clock size={24} /></div>
                <div>
                  <h4 className="feature-title">Szybkość działania</h4>
                  <p className="feature-desc">Bezzwłoczne przystąpienie do prac terenowych i dokumentacyjnych.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon"><MapPin size={24} /></div>
                <div>
                  <h4 className="feature-title">Lokalny zasięg</h4>
                  <p className="feature-desc">Teren województwa dolnośląskiego i opolskiego.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
