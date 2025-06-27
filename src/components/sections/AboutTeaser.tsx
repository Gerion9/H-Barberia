import React from 'react';
import { Link } from 'react-router-dom';
import './AboutTeaser.css';

// No necesitamos importar la imagen si está en /public
// Solo usamos la ruta directamente

const AboutTeaser: React.FC = () => {
  const profileImageUrl = "/Cobian.png"; // Ruta a la imagen en /public

  return (
    <section className="about-teaser-section">
      {/* Contenedor interno */}
      <div className="section-content-wrapper">
        {/* Contenido específico de esta sección (flex layout) */}
        <div className="about-teaser-content">
          <div className="about-teaser-text">
            <h2 className="section-title-alt">Conoce al Maestro Barbero</h2>
            <p>
              Con años de experiencia y una pasión por el detalle,
              Alberto Cobián transforma cada corte en una obra de arte.
              Descubre la dedicación y el estilo que nos definen.
            </p>
            <Link to="/equipo" className="cta-button-outline">Saber Más</Link>
          </div>
          <div className="about-teaser-image">
            {/* Usamos la imagen real */}
            <img src={profileImageUrl} alt="Alberto Cobián, Maestro Barbero" />
            {/* Eliminamos el placeholder */}
            {/* <div className="image-placeholder"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser; 