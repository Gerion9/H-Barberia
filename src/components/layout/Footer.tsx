import React from 'react';
import './Footer.css'; // Crearemos este archivo también

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Barbería H Alberto Cobián. Todos los derechos reservados.</p>
        {/* Aquí podrías añadir más enlaces o información si es necesario */}
        <div className="footer-links">
          {/* <a href="/politica-privacidad">Política de Privacidad</a>
          <a href="/terminos-condiciones">Términos y Condiciones</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 