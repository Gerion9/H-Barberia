import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// Importar Lightbox y sus estilos
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from 'react-router-dom';
import '../App.css'; // O donde esté .book-button

import './GalleryPage.css'; // Estilos para la galería

// Definir tipos para las categorías
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  driveUrl: string;
  images: GalleryImage[];
}

// Configuración de categorías basadas en las carpetas de Google Drive
const galleryCategories: GalleryCategory[] = [
  {
    id: 'cortes',
    name: 'Cortes y Tintes',
    description: 'Nuestros mejores trabajos en cortes de cabello, tintes y estilos únicos',
    driveUrl: 'https://drive.google.com/open?id=189N_9Jfqp4j8zzAi9SMGExmQBSMWDEjj&usp=drive_copy',
    images: [
      { id: 'corte1', src: 'https://drive.google.com/uc?export=view&id=1corte1', alt: 'Corte moderno', category: 'cortes' },
      { id: 'corte2', src: 'https://drive.google.com/uc?export=view&id=1corte2', alt: 'Tinte profesional', category: 'cortes' },
      // Estas imágenes se actualizarán dinámicamente desde Drive
    ]
  },
  {
    id: 'productos',
    name: 'Productos',
    description: 'Los mejores productos para el cuidado del cabello y barba',
    driveUrl: 'https://drive.google.com/open?id=13Cqi5i3tMzK9VpZaFGmlog3uHhiKyzP-&usp=drive_copy',
    images: [
      { id: 'prod1', src: 'https://drive.google.com/uc?export=view&id=1prod1', alt: 'Productos de calidad', category: 'productos' },
      // Estas imágenes se actualizarán dinámicamente desde Drive
    ]
  },
  {
    id: 'equipo',
    name: 'Nuestro Equipo',
    description: 'Conoce a los profesionales que hacen posible la magia en H Barbería',
    driveUrl: 'https://drive.google.com/open?id=1Iazu-vx0zmyPzCGJN-BdMbeGq6qqvXHL&usp=drive_copy',
    images: [
      { id: 'equipo1', src: 'https://drive.google.com/uc?export=view&id=1equipo1', alt: 'Equipo profesional', category: 'equipo' },
      // Estas imágenes se actualizarán dinámicamente desde Drive
    ]
  },
  {
    id: 'cursos',
    name: 'Cursos y Capacitación',
    description: 'Formación continua y cursos especializados en barbería',
    driveUrl: 'https://drive.google.com/open?id=1ke7bztJ74ZT2M-OO9WDf59p0cYXOAcwe&usp=drive_copy',
    images: [
      { id: 'curso1', src: 'https://drive.google.com/uc?export=view&id=1curso1', alt: 'Curso de barbería', category: 'cursos' },
      // Estas imágenes se actualizarán dinámicamente desde Drive
    ]
  },
  {
    id: 'clases',
    name: 'Clases Especiales',
    description: 'Momentos especiales de nuestras clases y talleres',
    driveUrl: 'https://drive.google.com/open?id=15lCN_vvMo8Mt1Q2L7mR9QfhPD8rCWg_m&usp=drive_copy',
    images: [
      { id: 'clase1', src: 'https://drive.google.com/uc?export=view&id=1clase1', alt: 'Clase especial', category: 'clases' },
      // Estas imágenes se actualizarán dinámicamente desde Drive
    ]
  },
  {
    id: 'galeria-local',
    name: 'Galería Local',
    description: 'Trabajos destacados y ambiente de nuestra barbería',
    driveUrl: '',
    images: [
      { id: 'local1', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.55_57568977.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local2', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.55_10262006.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local3', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.55_acef6357.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local4', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.55_fb497db6.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local5', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.54_8db8fd04.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local6', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.54_d5ca4f3d.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local7', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.54_321e96ca.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local8', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.54_8a4c88fe.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local9', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.54_090e6e61.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local10', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.53_5a7d6dc5.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local11', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.53_4a472385.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local12', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.53_ab38c341.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local13', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.53_1c21a4f4.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local14', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.52_ace96677.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local15', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.52_dfe0a1e8.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local16', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.52_eb6ced8c.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local17', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.52_a3794d8c.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local18', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.50_f0406f77.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local19', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.50_a24ed74a.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local20', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.50_7ba7c2ae.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local21', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.49_cb1a9b9b.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local22', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.49_85ba9d0c.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local23', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.48_8940a417.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local24', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.49_604970fd.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local25', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.48_35247dec.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local26', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.49_8cb381a6.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
      { id: 'local27', src: '/gallery/WhatsApp Image 2025-04-25 at 12.17.48_c35606b8.jpg', alt: 'Trabajo de barbería', category: 'galeria-local' },
    ]
  }
];

const GalleryPage: React.FC = () => {
  // Estados para controlar la galería
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('galeria-local');
  const [currentImages, setCurrentImages] = useState<GalleryImage[]>([]);
  const [slides, setSlides] = useState<any[]>([]);

  // Efecto para actualizar las imágenes cuando cambia la categoría
  useEffect(() => {
    const category = galleryCategories.find(cat => cat.id === activeCategory);
    if (category) {
      setCurrentImages(category.images);
      setSlides(category.images.map(image => ({
        src: image.src,
        alt: image.alt
      })));
    }
  }, [activeCategory]);

  // Función para abrir el lightbox en un índice específico
  const openLightbox = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  // Función para cambiar de categoría
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Obtener la categoría activa
  const activeCategoryData = galleryCategories.find(cat => cat.id === activeCategory);

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
            Explora nuestros trabajos, productos, equipo y momentos especiales de H Barbería.
          </p>

          <div className="cta-section gallery-cta-header">
             <h2>¿Inspirado por estos estilos?</h2>
             <p>Nuestros barberos pueden crear el look perfecto para ti. ¡No esperes más!</p>
             <Link to="/reservar" className="book-button">Agenda tu Transformación</Link>
          </div>

          {/* Pestañas de categorías */}
          <div className="gallery-categories">
            <div className="category-tabs">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Información de la categoría activa */}
          {activeCategoryData && (
            <div className="category-info">
              <h2>{activeCategoryData.name}</h2>
              <p>{activeCategoryData.description}</p>
              {activeCategoryData.driveUrl && (
                <div className="drive-link">
                  <p>
                    <strong>📁 Carpeta en Drive:</strong>{' '}
                    <a 
                      href={activeCategoryData.driveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="drive-button"
                    >
                      Ver carpeta completa
                    </a>
                  </p>
                  <small>Las imágenes se actualizan automáticamente desde Google Drive</small>
                </div>
              )}
            </div>
          )}

          {/* Grid de imágenes */}
          <div className="gallery-grid">
            {currentImages.map((image, idx) => (
              <div 
                key={image.id} 
                className="gallery-item" 
                onClick={() => openLightbox(idx)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy"
                  onError={(e) => {
                    // Fallback para imágenes que no cargan
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="image-overlay">
                  <span className="view-icon">👁️</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje si no hay imágenes */}
          {currentImages.length === 0 && (
            <div className="no-images">
              <p>Esta categoría se actualizará pronto con nuevas imágenes.</p>
              <p>¡Mantente atento a nuestras redes sociales!</p>
            </div>
          )}

        </div>

        {/* Lightbox para mostrar imágenes en pantalla completa */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </div>
    </>
  );
};

export default GalleryPage;