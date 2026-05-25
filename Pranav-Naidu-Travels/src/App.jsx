import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import LoadingScreen from './components/Layout/LoadingScreen';
import WhatsAppButton from './components/Layout/WhatsAppButton';
import Home from './pages/Home';
import CarBooking from './pages/CarBooking';
import TravelPackages from './pages/TravelPackages';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <ScrollToTop />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-booking" element={<CarBooking />} />
          <Route path="/packages" element={<TravelPackages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
