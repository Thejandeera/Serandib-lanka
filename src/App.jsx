import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './pages/Hero';
import TourSlider from './Components/TourSlider';
import VehicleCollection from './Components/VehicleCollection';
import Footer from './Components/Footer';
import WhoAreWe from './Components/WhoAreWe';
import Tours from './pages/Tours';
import Vehicles from './pages/Vehicles';
import TourDetail from './Components/TourDetail';
import VehicleDetail from './Components/VehicleDetail';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './Components/ScrollToTop';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <WhoAreWe />
    <TourSlider />
    <VehicleCollection />
    <Footer />
  </>
);

const App = () => {
  return (
    <div className="font-sans">
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />


        <Route path="/tours" element={<Tours />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
      </Routes>
    </div>
  );
};

export default App;