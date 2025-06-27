import React from 'react';
import { Link } from 'react-router-dom';
import './BookingTeaser.css';

const BookingTeaser: React.FC = () => {
  return (
    <section className="booking-teaser-section">
      <div className="section-content-wrapper">
        <h2>¿Listo para tu Próximo Corte?</h2>
        <p>Reserva tu cita online de forma rápida y sencilla. Elige tu servicio, barbero y horario ideal en pocos clics.</p>
        <Link to="/reservar" className="cta-button">Reservar Ahora</Link>
      </div>
    </section>
  );
};

export default BookingTeaser; 