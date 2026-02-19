import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './ServicesPage.css';
import { Link } from 'react-router-dom';

interface Service {
  name: string;
  price?: number;
  priceNotes?: string;
  description?: string;
  includes?: string;
  duration?: string;
}

interface Specialist {
  key: string;
  name: string;
  shortName: string; // Para el tab en mobile
  title: string;
  bookParam: string;
  services: Service[];
  featured: boolean;
}

// ─── Datos de servicios ────────────────────────────────────────────────────────

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

// ─── Configuración de especialistas ───────────────────────────────────────────

const specialists: Specialist[] = [
  {
    key: 'alberto',
    name: 'Alberto Cobián',
    shortName: 'Alberto',
    title: 'Maestro Barbero & Fundador',
    bookParam: 'alberto',
    services: albertoServices,
    featured: false,
  },
  {
    key: 'alejandra',
    name: 'Alejandra Cárdenas',
    shortName: 'Alejandra',
    title: 'Especialista en Trenzas',
    bookParam: 'alejandra',
    services: alejandraServices,
    featured: true,
  },
  {
    key: 'exon',
    name: 'Exon',
    shortName: 'Exon',
    title: 'Barbero Profesional',
    bookParam: 'exon',
    services: exonServices,
    featured: false,
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────

const ServicesPage: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>('alberto');

  const active = specialists.find(s => s.key === activeKey)!;

  return (
    <>
      <Helmet>
        <title>Servicios - H Barbería Colima</title>
        <meta
          name="description"
          content="Descubre nuestros servicios de barbería en Colima: cortes de cabello, afeitados clásicos, arreglo de barba y más. Calidad y estilo garantizados."
        />
      </Helmet>

      <div className="page-content-container">
        <div className="services-page">
          <h1>Nuestros Servicios</h1>
          <p className="services-intro">
            Descubre la gama completa de servicios que ofrecemos para cuidar tu estilo.
          </p>

          {/* ── Tabs de selección de especialista ── */}
          <div className="specialist-tabs" role="tablist" aria-label="Seleccionar especialista">
            {specialists.map(s => (
              <button
                key={s.key}
                role="tab"
                aria-selected={activeKey === s.key}
                aria-controls={`panel-${s.key}`}
                id={`tab-${s.key}`}
                className={[
                  'specialist-tab',
                  activeKey === s.key ? 'specialist-tab--active' : '',
                  s.featured ? 'specialist-tab--featured' : '',
                ].join(' ')}
                onClick={() => setActiveKey(s.key)}
              >
                {s.featured && <span className="tab-star" aria-hidden="true">✨ </span>}
                {s.shortName}
              </button>
            ))}
          </div>

          {/* ── Panel del especialista activo ── */}
          <div
            className={`specialist-panel ${active.featured ? 'specialist-panel--featured' : ''}`}
            role="tabpanel"
            id={`panel-${active.key}`}
            aria-labelledby={`tab-${active.key}`}
          >
            {/* Cabecera del especialista */}
            <div className="specialist-panel-header">
              <h2>{active.name}</h2>
              <p className="specialist-title">{active.title}</p>
              {active.featured && (
                <span className="panel-badge">✨ Especialidad Única</span>
              )}
            </div>

            {/* Lista de servicios */}
            <div className="specialist-services">
              {active.services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${active.featured ? 'featured-service' : ''}`}
                >
                  {/* Fila superior: nombre + precio */}
                  <div className="service-card__top">
                    <h3 className="service-card__name">{service.name}</h3>
                    {service.price && (
                      <span className="service-price">Desde ${service.price}</span>
                    )}
                  </div>

                  {service.description && (
                    <p className="service-description">{service.description}</p>
                  )}
                  {service.duration && (
                    <p className="service-duration">⏱ {service.duration}</p>
                  )}
                  {service.includes && (
                    <p className="service-includes">Incluye: {service.includes}</p>
                  )}
                  {service.priceNotes && (
                    <p className="service-notes">{service.priceNotes}</p>
                  )}

                  <Link
                    to={`/reservar?barber=${active.bookParam}`}
                    className={`service-book-button ${active.featured ? 'featured-button' : ''}`}
                  >
                    Reservar con {active.shortName}
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;
