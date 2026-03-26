import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Kontakt</span>
          <h2 className="section-title">Napisz lub Zadzwoń</h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-subtitle">Zapytaj o wycenę</h3>
            <p className="contact-desc">
              W razie pytań zapraszam do kontaktu. Jesteśmy gotowi podjąć współpracę
              przy Twojej inwestycji na terenie województwa dolnośląskiego i opolskiego.
            </p>
            
            <div className="info-item">
              <div className="info-icon"><Phone /></div>
              <div>
                <span className="info-label">Telefon</span>
                <p className="info-text">535 189 289</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Mail /></div>
              <div>
                <span className="info-label">E-mail</span>
                <p className="info-text">biuro@archekon.pl</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><MapPin /></div>
              <div>
                <span className="info-label">Siedziba pracowni</span>
                <p className="info-text">
                  Paweł Rozwód<br />
                  ul. Żeromskiego 4B<br />
                  56-420 Bierutów
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form" 
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="name">Imię i Nazwisko</label>
              <input type="text" id="name" placeholder="Jan Kowalski" />
            </div>
            <div className="form-group">
              <label htmlFor="company">Firma / Organizacja (opcjonalnie)</label>
              <input type="text" id="company" placeholder="Nazwa firmy" />
            </div>
            <div className="form-group">
              <label htmlFor="location">Miejscowość realizowanej inwestycji</label>
              <input type="text" id="location" placeholder="Miejscowość" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Temat</label>
              <input type="text" id="subject" placeholder="Nadzór nad budową..." />
            </div>
            <div className="form-group">
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message" rows="5" placeholder="Twoja wiadomość..."></textarea>
            </div>
            <button type="submit" className="btn-primary form-submit">
              Wyślij wiadomość <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
