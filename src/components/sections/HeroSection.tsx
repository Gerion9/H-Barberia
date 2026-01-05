import React from 'react';
import { Link } from 'react-router-dom'; // Para el botón CTA
import './HeroSection.css'; // Estilos específicos

const HeroSection: React.FC = () => {
  // Reutilizamos la ruta al logo
  const logoUrl = '/New_Logo-removebg-preview.png'; 

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Logo grande añadido aquí */}
        <img src={logoUrl} alt="Logo H Barbería - Cortes con Estilo" className="hero-logo-img" />

        <h1 className="hero-title">Arte y Estilo en Cada Corte</h1>
        <p className="hero-subtitle">
          Experimenta la precisión y el cuidado de la barbería tradicional con un toque moderno.
        </p>
        {/* Podríamos hacer que este botón lleve a la página de servicios o directamente al modal/página de reserva */}
        <Link to="/servicios" className="hero-cta-button">
          Ver Servicios
        </Link>
        {/* O si prefieres el botón de reserva directo: */}
        {/* <button className="hero-cta-button">Reservar Cita</button> */}
      </div>
      {/* Opcionalmente, podríamos añadir una imagen de fondo vía CSS o un <img> aquí */}
    </section>
  );
};

export default HeroSection; 