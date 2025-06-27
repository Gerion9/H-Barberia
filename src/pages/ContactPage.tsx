import React from 'react';
import './ContactPage.css'; // Estilos para la página de contacto
import { contactInfo, businessHours, address } from '../data/businessInfo'; // Importar datos
import { Helmet } from 'react-helmet-async'; // Importar Helmet
import { Link } from 'react-router-dom';

// Iconos (podríamos usar una librería como react-icons)
const IconMapPin = () => <svg /* ... icono svg ... */ fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>;
const IconPhone = () => <svg /* ... icono svg ... */ fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>;
const IconClock = () => <svg /* ... icono svg ... */ fill="currentColor" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>;
const IconEnvelope = () => <svg /* ... icono svg ... */ fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>;
const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-whatsapp whatsapp-icon" viewBox="0 0 16 16" aria-label="WhatsApp">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
  </svg>
);

const ContactPage: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>Contacto - H Barbería Colima</title>
        <meta name="description" content={`Contacta con H Barbería en Colima. Teléfono: ${contactInfo.barberia.phone}, Email: ${contactInfo.email}. Ubicación: ${address.fullAddress}. Envíanos un mensaje o visítanos.`} />
      </Helmet>

      <div className="page-content-container"> { /* Contenedor principal */ }
        <div className="contact-page">
          <h1>Contacto</h1>
          <p className="contact-intro">¿Tienes preguntas o quieres reservar tu cita? ¡Estamos aquí para ayudarte!</p>


          <div className="contact-grid-simplified">
            {/* Columna Izquierda: Información y Mapa */}
            <div className="contact-info-map">
              <h2>Información de Contacto</h2>
              <div className="info-item">
                <span className="info-icon"><IconMapPin /></span>
                <a href={address.googleMapsUrl} target="_blank" rel="noopener noreferrer" title="Ver en Google Maps">
                  {address.fullAddress}
                </a>
              </div>
              <div className="info-item">
                <span className="info-icon"><IconPhone /></span>
                <div className="phone-numbers">
                  <div>
                    Barbería: 
                    <IconWhatsApp />
                    <a href={`https://wa.me/${contactInfo.barberia.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                      {contactInfo.barberia.phone}
                    </a> 
                    ({contactInfo.barberia.name.split('(')[1].replace(')', '')})
                  </div>
                  <div>
                    Christian: 
                    <IconWhatsApp />
                    <a href={`https://wa.me/${contactInfo.christian.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                      {contactInfo.christian.phone}
                    </a> 
                  </div>
                  <div>
                    Miguel: 
                    <IconWhatsApp />
                    <a href={`https://wa.me/${contactInfo.miguel.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                      {contactInfo.miguel.phone}
                    </a> 
                  </div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon"><IconEnvelope /></span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div className="info-item">
                <span className="info-icon"><IconClock /></span>
                <span>
                  <strong>Horario Regular:</strong> {businessHours.regular.days}, {businessHours.regular.hours} <br />
                  <strong>Cursos:</strong> {businessHours.courses.days}, {businessHours.courses.hours}
                </span>
              </div>

              <h2>Visítanos</h2>
              <div className="map-container">
                <iframe
                  src={`https://maps.google.com/maps?q=${address.fullAddress}&t=&z=18&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de H Barberia"
                ></iframe>
                <a href={address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="map-link">
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
          <div className="cta-section contact-cta-header">
             <h2>¿Listo para visitarnos?</h2> 
             <p>Reserva tu cita online de forma rápida y sencilla.</p>
             <Link to="/reservar" className="book-button">Reservar Cita Online</Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage; 