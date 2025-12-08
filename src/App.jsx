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

// Wrapper for the Home Page content
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
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Listing Routes */}
        <Route path="/tours" element={<Tours />} />
        <Route path="/vehicles" element={<Vehicles />} />


        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
      </Routes>
    </div>
  );
};

export default App;