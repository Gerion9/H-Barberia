import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// Importar Lightbox y sus estilos
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from 'react-router-dom';
import '../App.css'; // O donde esté .book-button

import './GalleryPage.css'; // Estilos para la galería

// Lista actualizada con las imágenes de public/gallery
const galleryImages = [
  { id: 1, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.55_57568977.jpg", alt: "Trabajo de barbería" },
  { id: 2, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.55_10262006.jpg", alt: "Trabajo de barbería" },
  { id: 3, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.55_acef6357.jpg", alt: "Trabajo de barbería" },
  { id: 4, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.55_fb497db6.jpg", alt: "Trabajo de barbería" },
  { id: 5, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.54_8db8fd04.jpg", alt: "Trabajo de barbería" },
  { id: 6, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.54_d5ca4f3d.jpg", alt: "Trabajo de barbería" },
  { id: 7, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.54_321e96ca.jpg", alt: "Trabajo de barbería" },
  { id: 8, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.54_8a4c88fe.jpg", alt: "Trabajo de barbería" },
  { id: 9, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.54_090e6e61.jpg", alt: "Trabajo de barbería" },
  { id: 10, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.53_5a7d6dc5.jpg", alt: "Trabajo de barbería" },
  { id: 11, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.53_4a472385.jpg", alt: "Trabajo de barbería" },
  { id: 12, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.53_ab38c341.jpg", alt: "Trabajo de barbería" },
  { id: 13, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.53_1c21a4f4.jpg", alt: "Trabajo de barbería" },
  { id: 14, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.52_ace96677.jpg", alt: "Trabajo de barbería" },
  { id: 15, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.52_dfe0a1e8.jpg", alt: "Trabajo de barbería" },
  { id: 16, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.52_eb6ced8c.jpg", alt: "Trabajo de barbería" },
  { id: 17, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.52_a3794d8c.jpg", alt: "Trabajo de barbería" },
  { id: 18, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.50_f0406f77.jpg", alt: "Trabajo de barbería" },
  { id: 19, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.50_a24ed74a.jpg", alt: "Trabajo de barbería" },
  { id: 20, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.50_7ba7c2ae.jpg", alt: "Trabajo de barbería" },
  { id: 21, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.49_cb1a9b9b.jpg", alt: "Trabajo de barbería" },
  { id: 22, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.49_85ba9d0c.jpg", alt: "Trabajo de barbería" },
  { id: 23, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.48_8940a417.jpg", alt: "Trabajo de barbería" },
  { id: 24, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.49_604970fd.jpg", alt: "Trabajo de barbería" },
  { id: 25, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.48_35247dec.jpg", alt: "Trabajo de barbería" },
  { id: 26, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.49_8cb381a6.jpg", alt: "Trabajo de barbería" },
  { id: 27, src: "/gallery/WhatsApp Image 2025-04-25 at 12.17.48_c35606b8.jpg", alt: "Trabajo de barbería" },
];

// Adaptamos el array de imágenes al formato que necesita YARL para las "slides"
const slides = galleryImages.map(image => ({
    src: image.src,
    alt: image.alt,
    // Podemos añadir más propiedades si usamos plugins (ej. width, height)
}));

const GalleryPage: React.FC = () => {
  // Estado para controlar si el lightbox está abierto y qué imagen mostrar
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Función para abrir el lightbox en un índice específico
  const openLightbox = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Galería - H Barbería Colima</title>
        <meta name="description" content="Explora nuestra galería de fotos. Ve ejemplos de nuestros cortes de cabello, afeitados, arreglos de barba y el ambiente de H Barbería en Colima." />
      </Helmet>

      <div className="page-content-container"> { /* Contenedor para centrar */ }
        <div className="gallery-page">
          <h1>Galería de Estilos</h1>
          <p className="gallery-intro">
            Explora una muestra de nuestros trabajos, la calidad en los detalles y el ambiente único de H Barbería.
          </p>

          <div className="cta-section gallery-cta-header">
             <h2>¿Inspirado por estos estilos?</h2>
             <p>Nuestros barberos pueden crear el look perfecto para ti. ¡No esperes más!</p>
             <Link to="/reservar" className="book-button">Agenda tu Transformación</Link>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, idx) => (
              <div 
                key={image.id} 
                className="gallery-item" 
                onClick={() => openLightbox(idx)} // Abrir lightbox al hacer clic
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>

        </div>

        {/* Renderizamos el componente Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          // Opcional: Añadir plugins (ej. Thumbnails, Zoom)
          // plugins={[Thumbnails, Zoom]}
        />
      </div>
    </>
  );
};

export default GalleryPage; 