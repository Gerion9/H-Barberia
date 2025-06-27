// Interfaz para la información de cada barbero
export interface BarberProfile {
  id: string; // Añadir un ID único
  name: string;
  title: string;
  imageUrl: string; // Ruta a la imagen (considerar si debe estar en /public o /src/assets)
  description: string; // Una breve descripción o especialidad
  // URL de reserva específica para cada barbero
  bookingUrl?: string; 
}

// Datos de los barberos
export const teamMembers: BarberProfile[] = [
  {
    id: "alberto",
    name: "Alberto Cobián",
    title: "Maestro Barbero & Fundador",
    imageUrl: "/Cobian.png", // Asumiendo /public
    description: "Con amplia experiencia y una visión artística, Alberto lidera H Barbería y guía a futuros talentos impartiendo nuestros cursos de barbería.",
    bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0My-O9cKoNbGgAARyGiumj-_vBR6OmfaZzks-3k1qdppEiZMguSyHKCIDb2NzpVU9PUxW5kWg1?gv=true"
  },
  {
    id: "miguel",
    name: "Miguel Angel Rojas",
    title: "Barbero Profesional",
    imageUrl: "/Miguel-Angel.png", // Asumiendo /public
    description: "Especializado en tendencias modernas y técnicas clásicas, Miguel Ángel aporta creatividad y habilidad a cada cliente.",
    bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2LGWBMpVHd_HfnfcHi7Hq_JcVpO3RQxHwehHDx2wpvGFX8XD-Pi3GveLUFw6mYLaLnQ5vlKV66?gv=true"
  },
  {
    id: "christian",
    name: "Christian Arenas",
    title: "Barbero Profesional",
    imageUrl: "/Christian.jpg", // Asumiendo /public
    description: "Experto en cortes modernos y fade impecable, Christian se dedica a entender tu estilo para crear looks personalizados y a la vanguardia.",
    bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3rFvp0vwdHOLfaqq23fxBysd7j9uFNsijsMOvfW1ZS6QBV-Njt4fzM0cfHKTJwIitds8uAuSHR?gv=true"
  }
]; 