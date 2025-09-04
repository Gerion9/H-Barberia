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
    bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0My-O9cKoNbGgAARyGiumj-_vBR6OmfaZzks-3k1qdppEiZMguSyHKCIdb2NzpVU9PUxW5kWg1?gv=true"
  },

  {
    id: "alejandra",
    name: "Alejandra Cárdenas",
    title: "Especialista en Trenzas",
    imageUrl: "/Alejandra.jpg",
    description: "Experta en el arte del trenzado, Alejandra crea diseños únicos y elegantes que realzan la belleza natural de cada cliente.",
    bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1cf-Xbl_Z8Hev8CVTSN82C2sm50h1gWB_0HUFIugVz1wh3w4hpztHcrObsw0HJNtPe0dxVtdSk?gv=true"
  },
  {
    id: "adrian",
    name: "Adrian Denis",
    title: "Barbero Profesional",
    imageUrl: "/Adrian.jpg",
    description: "Barbero talentoso con habilidades excepcionales en cortes modernos y clásicos, Adrian aporta estilo y precisión a cada servicio.",
    bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2ROAVzYMwMw7h--x8JNXbtyZKK-_RmF0xz530SBnmnh8GneBbKUgAHpeGdp-NrV2_d-ycP65M5?gv=true"
  }
];