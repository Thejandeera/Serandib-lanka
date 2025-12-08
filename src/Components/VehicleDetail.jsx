import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, CheckCircle, ArrowLeft, Fuel, Users, Gauge } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { vehiclesData } from '../pages/Vehicles'; // Importing data

const VehicleDetail = () => {
    const { id } = useParams();
    const vehicle = vehiclesData.find(v => v.id === parseInt(id)) || vehiclesData[0];

    return (
        <div className="font-sans bg-gray-50">
            <Navbar />

            <div className="pt-32 pb-16 container mx-auto px-4">
                <Link to="/vehicles" className="inline-flex items-center text-sm text-gray-500 mb-6 hover:text-black"><ArrowLeft size={16} className="mr-1" /> Back to Fleet</Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-[#2a2a2a] rounded-[40px] p-12 flex items-center justify-center relative overflow-hidden h-[500px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#444] to-[#1a1a1a]"></div>
                        <img src={vehicle.image} alt={vehicle.title} className="w-full h-auto object-contain relative z-10 drop-shadow-2xl" />
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">{vehicle.badge}</span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-black mt-4 mb-2">{vehicle.title}</h1>
                            <div className="text-3xl font-bold text-gray-900">{vehicle.price} <span className="text-lg text-gray-500 font-normal">/ per km</span></div>
                        </div>

                        <p className="text-gray-600 text-lg">{vehicle.desc} Designed for ultimate comfort and safety on Sri Lankan roads. Whether you are traveling with family or a large group, this vehicle ensures a smooth journey.</p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <Users className="mx-auto text-blue-600 mb-2" />
                                <span className="block font-bold text-gray-800">5 Seats</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <Fuel className="mx-auto text-blue-600 mb-2" />
                                <span className="block font-bold text-gray-800">Hybrid</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <Gauge className="mx-auto text-blue-600 mb-2" />
                                <span className="block font-bold text-gray-800">Auto</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {['Air Conditioned', 'Bluetooth Audio', 'English Speaking Driver', 'Free Wifi', 'Luggage Space'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-blue-500" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full bg-blue-600 text-white py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                            Book This Vehicle
                        </button>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VehicleDetail;