import React from 'react'
import Hero from './pages/Hero'
import Navbar from './Components/Navbar'
import TourSlider from './Components/TourSlider'
import VehicleCollection from './Components/VehicleCollection'
import Footer from './Components/Footer'
import WhoAreWe from './Components/WhoAreWe'

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <WhoAreWe />
      <TourSlider />
      <VehicleCollection />
      <Footer />
    </div>
  )
}

export default App