// Interfaz para la información de cada curso
export interface CourseInfo {
  id: string; // Identificador único
  title: string;
  summary: string; // Resumen corto
  duration: string; // Ej. "4 Semanas", "Intensivo 1 Fin de Semana"
  level: string; // Ej. "Iniciación", "Avanzado", "Especialización"
  price?: string; // Ej. "$5000 MXN" o "Consultar"
  paymentNotes?: string; // Para notas como apartado, pago de contado
  scheduleNotes?: string; // Para notas de horario (L-V, Sábado, etc.)
  features?: string[]; // Array para el temario/características
  spots?: string; // Lugares disponibles
  gift?: string; // Mención del kit de regalo
  // Podríamos añadir más campos: temario (array de strings), imagen, etc.
}

// Datos de los cursos (consolidados)
export const coursesData: CourseInfo[] = [
  {
    id: "barberia-inicio",
    title: "Curso de Barbería: Iniciación Profesional",
    summary: "Aprende desde cero y domina las técnicas fundamentales de la barbería moderna y clásica. Nuestra formación práctica te prepara para iniciar tu carrera.",
    duration: "Intensivo (4 Semanas) o Fines de Semana (Consultar)",
    level: "Iniciación",
    price: "$4,500 (Pago de Contado)", // Precio principal
    paymentNotes: "Costo total $5,000 con facilidades. Aparta tu lugar con $500.",
    scheduleNotes: "Intensivo: Lunes a Viernes, 10 AM - 1 PM. Fines de Semana: Sábados (Consultar horario y duración).",
    features: [
      "Conocimiento teórico fundamental",
      "Limpieza, desinfección y mantenimiento de herramientas",
      "Uso correcto y manejo de instrumentos (máquina, tijera, navaja)",
      "Preparación del cliente y estación de servicio",
      "Técnicas de corte: Clásicos y Escolares",
      "Técnicas de corte: Desvanecidos (Fades) y Modernos",
      "Arreglo y diseño de barba (Ritual de Barba)",
      "Delineados perfectos",
      "Dirección y técnicas de peinado",
      "Guía paso a paso y prácticas constantes"
    ],
    spots: "Grupo reducido (¡Lugares limitados!)",
    gift: "Kit de regalo para las primeras inscripciones (Pregunta por disponibilidad)"
  },
  // Podrías añadir aquí los cursos de "Perfeccionamiento" o "Especialización" 
  // si decides ofrecerlos basados en la data anterior.
  /* 
  {
    id: "corte-avanzado",
    title: "Perfeccionamiento en Corte y Estilo", ... 
  },
  {
    id: "diseno-barba",
    title: "Especialización en Diseño de Barba", ...
  }
  */
]; 