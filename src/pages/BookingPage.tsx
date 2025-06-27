import React, { useState, useEffect, useCallback, useRef } from 'react';
import './BookingPage.css'; // Estilos para la página de reserva
// Importar los datos y la interfaz del equipo desde el archivo centralizado
import { teamMembers, BarberProfile } from '../data/teamMembers'; // Ruta actualizada
// Asumiendo React Router para leer parámetros de URL
import { useSearchParams } from 'react-router-dom'; 
import { Helmet } from 'react-helmet-async'; // Importar Helmet

const BookingPage: React.FC = () => {
  // Estados para el booking
  const [selectedBookingUrl, setSelectedBookingUrl] = useState<string | null>(null);
  const [selectedBarberName, setSelectedBarberName] = useState<string | null>(null);
  const [selectedBarberId, setSelectedBarberId] = useState<string | null>(null);
  const [calendarError, setCalendarError] = useState<string | null>(null);
  
  // Hook para leer parámetros de búsqueda de la URL
  const [searchParams] = useSearchParams(); 
  // Ref para el contenedor del calendario
  const calendarContainerRef = useRef<HTMLDivElement>(null);

  // URL por defecto si un barbero no tiene URL específica (opcional)
  const defaultBookingUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0-L3fyDgyOHIQBJcPzY5KpgUlB_OO8hTUUlOIxJDvlE8IXklDRJan6uL0_GCWaNCVMtx3K4SWD?gv=true";

  // Función para detectar errores del iframe
  const handleIframeError = useCallback((barberName: string) => {
    setCalendarError(`Temporalmente no podemos cargar el calendario de ${barberName}. Por favor, intenta contactarnos directamente o selecciona otro barbero.`);
  }, []);

  // Usar useCallback para memoizar la función y evitar re-renders innecesarios en useEffect
  const handleBarberSelect = useCallback((barberId: string | null) => {
    // Limpiar errores previos
    setCalendarError(null);
    
    if (barberId) {
      const selectedBarber = teamMembers.find(b => b.id === barberId);
      if (selectedBarber) {
        setSelectedBookingUrl(selectedBarber.bookingUrl || defaultBookingUrl);
        setSelectedBarberName(selectedBarber.name);
        setSelectedBarberId(selectedBarber.id); 
      } else {
        // Si el ID no es válido, deseleccionar todo
        setSelectedBookingUrl(null);
        setSelectedBarberName(null);
        setSelectedBarberId(null);
      }
    } else {
      // Si no se pasa ID (o es null), deseleccionar
      setSelectedBookingUrl(null);
      setSelectedBarberName(null);
      setSelectedBarberId(null);
    }
  }, [defaultBookingUrl]);

  // useEffect para comprobar el parámetro de URL al cargar
  useEffect(() => {
    const barberIdFromUrl = searchParams.get('barber');
    if (barberIdFromUrl) {
      // Si hay un ID en la URL, intentar seleccionarlo
      handleBarberSelect(barberIdFromUrl);
    }
    // Ejecutar solo una vez al montar o si searchParams cambia
  }, [searchParams, handleBarberSelect]);

  // useEffect para hacer scroll cuando se selecciona un barbero y el calendario es visible
  useEffect(() => {
    // Solo hacer scroll si hay una URL seleccionada (calendario visible) 
    // y la ref está asignada
    if (selectedBookingUrl && calendarContainerRef.current) {
      // Usar un pequeño retraso puede ayudar si el renderizado tarda
      const timer = setTimeout(() => {
        calendarContainerRef.current?.scrollIntoView({
          behavior: 'smooth', // Scroll suave
          block: 'start'     // Alinear la parte superior del elemento con la parte superior del viewport
        });
      }, 100); // 100ms de retraso
      return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta
    }
  }, [selectedBookingUrl]);

  // useEffect para detectar errores del iframe de Google Calendar
  useEffect(() => {
    // Configurar detector de errores de consola específicos para Alberto
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const errorMessage = args.join(' ');
      if (errorMessage.includes('RpcError') && errorMessage.includes('invalid argument') && selectedBarberId === 'alberto') {
        handleIframeError(selectedBarberName || 'este barbero');
      }
      originalConsoleError.apply(console, args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, [selectedBarberId, selectedBarberName, handleIframeError]);

  return (
    <>
      <Helmet>
        {/* Título dinámico basado en si se ha seleccionado barbero */}
        <title>
          {selectedBarberName ? `Reservar con ${selectedBarberName}` : 'Reservar Cita'} - H Barbería Colima
        </title>
        <meta name="description" content="Reserva tu cita en H Barbería Colima fácilmente. Selecciona tu barbero preferido y elige el horario disponible en nuestro calendario online." />
      </Helmet>

      <div className="page-content-container"> { /* Contenedor para centrar */ }
        <div className="booking-page">
          <h1>Reservar Cita</h1>
          <p className="booking-intro">
            Selecciona tu barbero preferido para ver su disponibilidad y reservar.
          </p>

          {/* Contenedor de Botones de Selección de Barbero */}
          <div className="barber-selector-container">
            <p className="selector-label">Elige tu Barbero:</p> { /* Texto en lugar de label */ }
            <div className="barber-buttons">
              {teamMembers.map((barber: BarberProfile) => (
                <button
                  key={barber.id}
                  // Aplicar clase 'selected' si el ID coincide
                  className={`barber-select-button ${selectedBarberId === barber.id ? 'selected' : ''}`}
                  onClick={() => handleBarberSelect(barber.id)} // Llamar al manejador con el ID
                >
                  {barber.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mostrar error si existe */}
          {calendarError && (
            <div className="calendar-error-container">
              <div className="calendar-error">
                <h3>⚠️ Problema con el calendario</h3>
                <p>{calendarError}</p>
                <div className="error-actions">
                  <p>Mientras tanto, puedes:</p>
                  <ul>
                    <li>📞 <strong>Llamar directamente:</strong> <a href="tel:+523122316946">312-231-6946</a></li>
                    <li>📱 <strong>WhatsApp:</strong> <a href="https://wa.me/523122316946" target="_blank" rel="noopener noreferrer">Enviar mensaje</a></li>
                    <li>👤 <strong>Seleccionar otro barbero</strong> disponible arriba</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Área del Calendario (se muestra solo si se selecciona un barbero) */}
          {selectedBookingUrl && !calendarError ? (
            <div ref={calendarContainerRef} className="google-calendar-embed-container">
              <h2>Disponibilidad de {selectedBarberName}</h2>
              <div className="google-calendar-embed">
                <iframe
                  key={selectedBookingUrl} // Añadir key para forzar recarga si cambia la URL
                  src={selectedBookingUrl}
                  style={{ border: 0 }}
                  width="100%"
                  height="600" // Puedes ajustar esta altura
                  frameBorder="0"
                  title={`Reservar Cita con ${selectedBarberName || 'H Barberia'}`} // Título actualizado
                  onError={() => handleIframeError(selectedBarberName || 'este barbero')}
                ></iframe>
              </div>
            </div>
          ) : selectedBarberId && !calendarError ? (
            <div className="select-prompt-container">
               <p className="select-prompt">Cargando calendario...</p>
            </div>
          ) : !selectedBarberId && !calendarError ? (
            <div className="select-prompt-container"> {/* Contenedor añadido */}
               <p className="select-prompt">Por favor, selecciona un barbero para ver su calendario.</p>
            </div>
          ) : null}

        </div>
      </div>
    </>
  );
};

export default BookingPage; 