import React from 'react';
import { Helmet } from 'react-helmet-async';
import './CoursesPage.css'; // Estilos para la página de cursos
// Importar info relevante si es necesario
import { contactInfo, address } from '../data/businessInfo';
import { teamMembers } from '../data/teamMembers';
import { coursesData } from '../data/courses';

// Importar Link para el botón de contacto
// import { Link } from 'react-router-dom'; // No utilizado actualmente

// Importar un icono de WhatsApp (o definir uno)
// Si no tienes react-icons, puedes definir un SVG simple aquí
const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
  </svg>
);

const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-calendar-check detail-icon" viewBox="0 0 16 16">
    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
  </svg>
);

const IconUser = () => ( 
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-person-badge detail-icon" viewBox="0 0 16 16">
    <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
  </svg>
);

const IconPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="detail-icon" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
);

const IconPrice = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-tags detail-icon" viewBox="0 0 16 16">
    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
  </svg>
);

const IconGift = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-gift detail-icon" viewBox="0 0 16 16">
   <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0V4h-10v-.5zm10 0V4H3v-.5a1.5 1.5 0 0 0-3 0V4H0v10h16V4h-3v-.5a1.5 1.5 0 0 0-3 0zM1 5h14v9H1V5z"/>
 </svg>
);

const IconGroup = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-people detail-icon" viewBox="0 0 16 16">
    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.274.274H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 10.5C1.413 10.5 0 11.939 0 13.5 0 14.755 1.08 16 3.02 16h.902a5.973 5.973 0 0 0-.75-1.447.835.835 0 0 1-.178-.122A2.392 2.392 0 0 1 3 13.5c0-.88.31-1.758.845-2.396C4.453 10.5 5.511 10 8 10c.262 0 .51.028.748.074-.487.3-.926.655-1.298 1.034-.164.166-.322.34-.464.524zM5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM4 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  </svg>
);

const CoursesPage: React.FC = () => {
  const instructor = teamMembers.find(m => m.id === 'alberto');
  const albertoWhatsappNumber = contactInfo.barberia.phone.replace(/\D/g, '');
  // Texto WhatsApp actualizado
  const whatsappLink = `https://wa.me/${albertoWhatsappNumber}?text=${encodeURIComponent("Hola Alberto, estoy interesado/a en el curso de barbería. ¿Me podrías dar más información sobre fechas, precios y proceso de inscripción?")}`;

  // Usaremos el primer (y único) curso de la data por ahora
  const course = coursesData[0]; 

  return (
    <>
      <Helmet>
        <title>Cursos de Barbería Profesional - H Barbería Colima</title> {/* Título actualizado */} 
        <meta name="description" content={`Inscríbete a nuestro curso de iniciación profesional en barbería impartido por ${instructor?.name || 'Alberto Cobián'} en Colima. Aprende desde cero. ¡Informes vía WhatsApp!`} /> {/* Descripción actualizada */} 
      </Helmet>

      <div className="page-content-container"> { /* Contenedor para centrar */ }
        <div className="courses-page">
          {/* Mover el título principal aquí si solo hay un curso principal */} 
          <h1>{course.title}</h1>
          <p className="courses-intro">{course.summary}</p>
          
          {/* --- Detalles Principales Mejorados --- */}
          <div className="course-main-details enhanced"> {/* Añadida clase 'enhanced' */}
             <div className="detail-item">
                <IconCalendar />
                <div>
                  <strong>Duración:</strong> {course.duration} <br/>
                  <small>{course.scheduleNotes}</small>
                </div>
             </div>
             <div className="detail-item">
                 <IconUser />
                 <div><strong>Instructor:</strong> {instructor?.name || 'Alberto Cobián'}</div>
             </div>
             <div className="detail-item">
                 <IconPrice />
                 <div>
                   <strong>Inversión:</strong> {course.price} <br/>
                   {course.paymentNotes && <small>{course.paymentNotes}</small>}
                 </div>
             </div>
             <div className="detail-item">
                 <IconPin />
                 <div><strong>Ubicación:</strong> {address.fullAddress}</div>
             </div>
             {course.spots && (
                 <div className="detail-item">
                     <IconGroup />
                     <div><strong>{course.spots}</strong></div>
                 </div>
             )}
             {course.gift && (
                 <div className="detail-item">
                     <IconGift />
                     <div><em>{course.gift}</em></div>
                 </div>
             )}
              <div className="detail-item course-level-detail"> {/* Contenedor para la etiqueta de nivel */}
                 <span className={`course-level course-level-${course.level.toLowerCase()}`}>{course.level}</span>
             </div>
          </div>
          {/* --- Fin Detalles Mejorados --- */}

          {/* Temario/Características */}
          <h2>¿Qué Aprenderás?</h2>
          <ul className="course-features-list">
            {course.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Sección de Contacto/Inscripción */}
          <div className="course-contact-section">
            <h2>Inicia tu Carrera en la Barbería</h2>
            <p>¿Listo para dar el siguiente paso? Contáctanos por WhatsApp para resolver tus dudas y asegurar tu lugar.</p>
            <a 
              href={whatsappLink} 
              className="book-button whatsapp-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <IconWhatsApp /> Solicitar Información por WhatsApp
            </a>
            <p className="whatsapp-contact-person">Hablarás con {instructor?.name || 'Alberto Cobián'}.</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default CoursesPage; 