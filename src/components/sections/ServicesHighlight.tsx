import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesHighlight.css'; // Estilos específicos

// Podríamos importar la interfaz Service si la moviéramos a un archivo de tipos
interface HighlightService {
  name: string;
  description: string; // Descripción corta para el highlight
  link: string; // Enlace a la página de servicios
  // Opcional: icono o imagen pequeña
}

// Seleccionamos y adaptamos algunos servicios clave
const highlightedServices: HighlightService[] = [
  {
    name: "Cortes con Estilo",
    description: "Desde clásicos atemporales hasta las últimas tendencias, adaptados a ti.",
    link: "/servicios"
  },
  {
    name: "Arreglo de Barba Premium",
    description: "Define, perfila y cuida tu barba con nuestros expertos y productos de calidad.",
    link: "/servicios"
  },
  {
    name: "Tratamientos Exclusivos",
    description: "Color, rizos, mechas y más para transformar tu look con técnicas profesionales.",
    link: "/servicios"
  }
];

const ServicesHighlight: React.FC = () => {
  return (
    <section className="services-highlight-section">
      <div className="section-content-wrapper">
        <h2 className="section-title">Nuestros Servicios Estrella</h2>
        <div className="highlight-container">
          {highlightedServices.map((service, index) => (
            <div key={index} className="highlight-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="highlight-link">Ver más</Link>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/servicios" className="cta-button-outline">Ver Todos los Servicios</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight; 