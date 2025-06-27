import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../../data/teamMembers';
import './BarberShowcase.css';

const BarberShowcase: React.FC = () => {
  const [currentBarberIndex, setCurrentBarberIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');

  const currentBarber = teamMembers[currentBarberIndex];

  // Función para ir al siguiente barbero
  const nextBarber = useCallback(() => {
    if (isSliding) return;
    
    setSlideDirection('left');
    setIsSliding(true);
    
    setTimeout(() => {
      setCurrentBarberIndex((prevIndex) => 
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 300);
    
    setTimeout(() => {
      setIsSliding(false);
    }, 600);
  }, [isSliding]);

  // Función para ir a un barbero específico
  const goToBarber = useCallback((index: number) => {
    if (index === currentBarberIndex || isSliding) return;
    
    setSlideDirection(index > currentBarberIndex ? 'left' : 'right');
    setIsSliding(true);
    
    setTimeout(() => {
      setCurrentBarberIndex(index);
    }, 300);
    
    setTimeout(() => {
      setIsSliding(false);
    }, 600);
  }, [currentBarberIndex, isSliding]);

  // Función para ir al barbero anterior
  const prevBarber = useCallback(() => {
    if (isSliding) return;
    
    setSlideDirection('right');
    setIsSliding(true);
    
    setTimeout(() => {
      setCurrentBarberIndex((prevIndex) => 
        prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
      );
    }, 300);
    
    setTimeout(() => {
      setIsSliding(false);
    }, 600);
  }, [isSliding]);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextBarber();
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [nextBarber, isAutoPlaying]);

  // Pausar auto-play cuando el usuario interactúa
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Reanudar después de 10 segundos
  };

  return (
    <section className="barber-showcase">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">Reserva con Nuestros Expertos</h2>
          <p className="showcase-subtitle">
            Cada barbero trae su estilo único y años de experiencia
          </p>
        </div>

        <div className="showcase-content">
          <div className={`barber-card ${isSliding ? `sliding-${slideDirection}` : ''}`}>
            <div className="barber-image-container">
              <img 
                src={currentBarber.imageUrl} 
                alt={currentBarber.name}
                className="barber-image"
              />
              <div className="image-overlay"></div>
            </div>
            
            <div className="barber-info">
              <h3 className="barber-name">{currentBarber.name}</h3>
              <p className="barber-title">{currentBarber.title}</p>
              <p className="barber-description">{currentBarber.description}</p>
              
              <div className="barber-actions">
                <Link 
                  to={`/reservar?barber=${currentBarber.id}`}
                  className="reserve-button primary"
                >
                  Reservar Cita
                </Link>
                <Link 
                  to="/equipo"
                  className="reserve-button secondary"
                >
                  Ver Más
                </Link>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div className="showcase-navigation">
            <div className="barber-indicators">
              {teamMembers.map((barber, index) => (
                <button
                  key={barber.id}
                  className={`indicator ${index === currentBarberIndex ? 'active' : ''}`}
                  onClick={() => {
                    goToBarber(index);
                    handleUserInteraction();
                  }}
                  aria-label={`Ver ${barber.name}`}
                >
                  <span className="indicator-name">{barber.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            
            <div className="navigation-controls">
              <button 
                className="nav-button prev"
                onClick={() => {
                  prevBarber();
                  handleUserInteraction();
                }}
                aria-label="Barbero anterior"
              >
                ‹
              </button>
              <button 
                className="nav-button next"
                onClick={() => {
                  nextBarber();
                  handleUserInteraction();
                }}
                aria-label="Siguiente barbero"
              >
                ›
              </button>
            </div>
          </div>

          {/* Progress bar para auto-play */}
          {isAutoPlaying && (
            <div className="auto-play-progress">
              <div className="progress-bar"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BarberShowcase; 