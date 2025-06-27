import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

// Icono Hamburguesa (SVG simple)
const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Icono Cerrar (SVG simple)
const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Header: React.FC = () => {
  const logoUrl = '/logo.png';
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Efecto para cerrar el menú móvil cuando cambia la ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="app-header">
      <div className="logo-container">
        <Link to="/">
          <img src={logoUrl} alt="Logo Barbería H Alberto Cobián" className="logo-img" />
        </Link>
      </div>

      {/* Navegación Desktop (se ocultará en móvil) */}
      <nav className="main-nav desktop-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/equipo">Equipo</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      <div className="cta-container">
        {/* Botón Reservar Desktop (se ocultará en móvil si es necesario o se mueve al menú) */}
        <Link to="/reservar" className="cta-button desktop-cta">Reservar Cita</Link>

        {/* --- Botón Reservar Móvil (Siempre visible en móvil) --- */}
        <Link to="/reservar" className="cta-button mobile-header-book-button">Reservar</Link> {/* Texto más corto */}
        
        {/* Botón Hamburguesa (se mostrará en móvil) */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Navegación Móvil (condicional) */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
           <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/equipo">Equipo</Link></li>
              <li><Link to="/cursos">Cursos</Link></li>
              <li><Link to="/galeria">Galería</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
           </ul>
        </nav>
      )}
    </header>
  );
};

export default Header; 