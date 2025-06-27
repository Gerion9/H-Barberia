import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import CoursesPage from './pages/CoursesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import './App.css'; // Mantendremos algunos estilos globales aquí si es necesario

function App() {
  return (
    <div className="app-container"> {/* Un contenedor general */} 
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/equipo" element={<TeamPage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/reservar" element={<BookingPage />} />
        {/* Podrías añadir una ruta para página no encontrada (404) aquí */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
