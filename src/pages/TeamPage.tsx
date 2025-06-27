import React from 'react';
import './TeamPage.css'; // Estilos para la página de equipo
// Importar datos e interfaz desde el archivo centralizado
import { teamMembers, BarberProfile } from '../data/teamMembers';
// Asumiendo React Router para el enlace
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Importar Helmet

// Eliminar la interfaz y los datos locales
/*
interface BarberProfile { ... }
const teamMembers: BarberProfile[] = [ ... ];
*/

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nuestro Equipo - H Barbería Colima</title>
        <meta name="description" content="Conoce a los talentosos barberos de H Barbería en Colima: Alberto Cobián, Miguel Angel Rojas y Christian Torres. Profesionales dedicados a tu estilo." />
      </Helmet>

      <div className="page-content-container"> { /* Contenedor para centrar */ }
        <div className="team-page">
          <h1>Nuestro Equipo</h1>
          <p className="team-intro">Conoce a los profesionales dedicados a perfeccionar tu estilo.</p>
          
          <div className="team-grid">
            {/* Usar los datos importados */}
            {teamMembers.map((member: BarberProfile) => (
              <div key={member.id} className="barber-card"> { /* Usar member.id como key */ }
                <div className="barber-image-container">
                  <img src={member.imageUrl} alt={`Foto de ${member.name}`} className="barber-image" />
                </div>
                <div className="barber-info">
                  <h2>{member.name}</h2>
                  <h3>{member.title}</h3>
                  <p>{member.description}</p>
                  {/* Botón/Enlace para reservar */}
                  <Link 
                    to={`/reservar?barber=${member.id}`} // Ruta a la página de reserva con parámetro
                    className="book-button team-book-button" // Clase para estilizar
                  >
                    Reservar con {member.name.split(' ')[0]} {/* Usar solo el primer nombre */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Podríamos añadir una sección sobre el ambiente del local aquí también */}
        </div>
      </div>
    </>
  );
};

export default TeamPage; 