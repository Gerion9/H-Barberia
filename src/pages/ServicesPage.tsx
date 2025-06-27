import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ServicesPage.css'; // Crearemos este archivo para estilos
import { Link } from 'react-router-dom';
import '../App.css'; // O donde esté .book-button

interface Service {
  name: string;
  price?: number;
  priceNotes?: string;
  description?: string;
  includes?: string;
  duration?: string;
}

// Datos actualizados con duraciones
const servicesData: Service[] = [
  { name: "Corte", price: 200, duration: "45 minutos aprox" },
  { name: "Arreglo de Barba", price: 200, duration: "45 minutos aprox" },
  { name: "Corte + Barba", price: 400, duration: "90 minutos aprox" },
  { name: "Exfoliación", price: 150, duration: "30 minutos aprox" },
  {
    name: "Rizos",
    price: 800,
    includes: "corte",
    duration: "3-4 horas aprox",
    priceNotes: "Precio base para pelo corto. Pelo medio/largo varía."
  },
  {
    name: "Mechas",
    price: 800,
    includes: "corte",
    duration: "Desde 4 horas",
    priceNotes: "Precio base para pelo corto. Depende del largo y cabello del cliente."
  },
  {
    name: "Decoloración Completa",
    price: 1000,
    includes: "corte",
    duration: "Desde 4 horas",
    priceNotes: "Precio base para pelo corto. Depende del largo y cabello del cliente."
  },
  {
    name: "Aplicación de Tinte",
    price: 700,
    includes: "corte (cabello corto)",
    priceNotes: "Cabello corto $700 (incluye corte), Cabello medio $700 (solo tinte). Pelo largo depende."
  },
  {
    name: "Tratamiento Capilar",
    priceNotes: "El precio y duración dependen del largo del cabello y del tratamiento específico."
  }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Servicios - H Barbería Colima</title>
        <meta name="description" content="Descubre nuestros servicios de barbería en Colima: cortes de cabello, afeitados clásicos, arreglo de barba y más. Calidad y estilo garantizados." />
      </Helmet>

      <div className="page-content-container">
        <div className="services-page">
          <h1>Nuestros Servicios</h1>
          <p className="services-intro">Descubre la gama completa de servicios que ofrecemos para cuidar tu estilo.</p>

          <div className="services-cta-header">
             <h2>¿Te interesa alguno de estos servicios?</h2>
             <Link to="/reservar" className="book-button">Reserva tu Cita Ahora</Link>
          </div>

          <div className="services-list">
            {servicesData.map((service, index) => (
              <div key={index} className="service-card">
                <h2>{service.name}</h2>
                {service.duration && <p className="service-duration">Duración: {service.duration}</p>}
                {service.price && <p className="service-price">Desde ${service.price}</p>}
                {service.priceNotes && <p className="service-notes">{service.priceNotes}</p>}
                {service.includes && <p className="service-includes">Incluye: {service.includes}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesPage; 