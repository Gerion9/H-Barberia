import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import BarberShowcase from '../components/sections/BarberShowcase';
import ServicesHighlight from '../components/sections/ServicesHighlight';
import AboutTeaser from '../components/sections/AboutTeaser';
import BookingTeaser from '../components/sections/BookingTeaser';
// Importar Link
// import { Link } from 'react-router-dom'; // No se usa actualmente
// Importar estilos si es necesario (asumiendo que .book-button está global o en App.css)
import '../App.css'; // O donde esté .book-button
// Importaremos más secciones aquí a medida que las creemos

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>H Barbería - Inicio | Cortes y Estilo en Colima</title>
        <meta name="description" content="Bienvenido a H Barbería en Colima. Expertos en cortes de cabello, afeitados clásicos y estilo masculino. Reserva tu cita hoy." />
        {/* Puedes añadir más meta tags aquí si es necesario (ej. Open Graph) */}
      </Helmet>
      
      <div className="home-page">
        {/* HeroSection se renderiza directamente, ocupará ancho completo */}
        <HeroSection />
        
        {/* Sección dinámica de barberos - se renderiza fuera del contenedor para ancho completo */}
        <BarberShowcase />
        
        {/* El resto del contenido de la HomePage va dentro del contenedor */}
        <div className="page-content-container">
          <ServicesHighlight />
          <AboutTeaser />
          <BookingTeaser />
          

          
          {/* Aquí irían otras secciones como AboutTeaser, CoursesTeaser, etc. */}
          {/* 
          <h2>Más contenido...</h2>
          <p>Intro, etc.</p>
          */}
        </div>
      </div>
    </>
  );
};

export default HomePage; 