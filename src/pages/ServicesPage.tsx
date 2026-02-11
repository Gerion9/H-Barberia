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

// Servicios organizados por especialista
const albertoServices: Service[] = [
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

const alejandraServices: Service[] = [
  {
    name: "Diseño de Trenzas",
    price: 300,
    duration: "180 minutos aprox",
    description: "Creaciones únicas y elegantes que realzan tu belleza natural",
    priceNotes: "Precio base. Puede variar según complejidad del diseño y largo del cabello."
  }
];

const exonServices: Service[] = [
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

          <div className="services-by-specialist">
            {/* Columna Alberto */}
            <div className="specialist-column">
              <div className="specialist-header">
                <h2>Alberto Cobián</h2>
                <p className="specialist-title">Maestro Barbero & Fundador</p>
              </div>
              <div className="specialist-services">
                {albertoServices.map((service, index) => (
                  <div key={index} className="service-card">
                    <h3>{service.name}</h3>
                    {service.description && <p className="service-description">{service.description}</p>}
                    {service.duration && <p className="service-duration">Duración: {service.duration}</p>}
                    {service.price && <p className="service-price">Desde ${service.price}</p>}
                    {service.priceNotes && <p className="service-notes">{service.priceNotes}</p>}
                    {service.includes && <p className="service-includes">Incluye: {service.includes}</p>}
                    <Link to="/reservar?barber=alberto" className="service-book-button">
                      Reserva con Alberto
                    </Link>
                  </div>
                ))}
              </div>
            </div>



            {/* Columna Alejandra */}
            <div className="specialist-column alejandra-column">
              <div className="specialist-header">
                <h2>Alejandra Cárdenas</h2>
                <p className="specialist-title">Especialista en Trenzas</p>
              </div>
              <div className="specialist-services">
                {alejandraServices.map((service, index) => (
                  <div key={index} className="service-card featured-service">
                    <h3>{service.name}</h3>
                    {service.description && <p className="service-description">{service.description}</p>}
                    {service.duration && <p className="service-duration">Duración: {service.duration}</p>}
                    {service.price && <p className="service-price">Desde ${service.price}</p>}
                    {service.priceNotes && <p className="service-notes">{service.priceNotes}</p>}
                    {service.includes && <p className="service-includes">Incluye: {service.includes}</p>}
                    <Link to="/reservar?barber=alejandra" className="service-book-button featured-button">
                      Reserva con Alejandra
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Exon */}
            <div className="specialist-column">
              <div className="specialist-header">
                <h2>Exon</h2>
                <p className="specialist-title">Barbero Profesional</p>
              </div>
              <div className="specialist-services">
                {exonServices.map((service, index) => (
                  <div key={index} className="service-card">
                    <h3>{service.name}</h3>
                    {service.description && <p className="service-description">{service.description}</p>}
                    {service.duration && <p className="service-duration">Duración: {service.duration}</p>}
                    {service.price && <p className="service-price">Desde ${service.price}</p>}
                    {service.priceNotes && <p className="service-notes">{service.priceNotes}</p>}
                    {service.includes && <p className="service-includes">Incluye: {service.includes}</p>}
                    <Link to="/reservar?barber=exon" className="service-book-button">
                      Reserva con Exon
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;