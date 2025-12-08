import React from 'react';
import { motion } from 'framer-motion';
import { Car, Bus, Star, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Shared Data
export const vehiclesData = [
    { id: 1, image: "/images/vehicles/acvan.png", title: "AC Van", type: "Van", rating: 5, price: "US$10", badge: "Premium", desc: "Spacious AC van perfect for family trips." },
    { id: 2, image: "/images/vehicles/minivan.png", title: "Mini Van", type: "Van", rating: 5, price: "US$10", badge: "Standard", desc: "Comfortable mini van for small groups." },
    { id: 3, image: "/images/vehicles/car.png", title: "Sedan Car", type: "Car", rating: 5, price: "US$10", badge: "Luxury", desc: "Premium sedan for a smooth couple's ride." },
    { id: 4, image: "/images/vehicles/bus.png", title: "AC Bus", type: "Bus", rating: 4.5, price: "US$10", badge: "Large Group", desc: "Fully AC bus for large tour groups." },
    { id: 5, image: "/images/vehicles/suv.png", title: "Luxury SUV", type: "Car", rating: 5, price: "US$15", badge: "Off-Road", desc: "High-end SUV for rugged terrain and comfort." },
];

const Vehicles = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <section className="relative w-full py-32 bg-white min-h-screen">

                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-vehicles-page" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-vehicles-page)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                            <Sparkles size={16} className="text-blue-600" />
                            <span className="text-blue-700 font-bold tracking-widest uppercase text-xs">Our Fleet</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
                            Choose Your <span className="text-blue-600">Ride</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Travel in comfort and style with our diverse fleet of well-maintained vehicles.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vehiclesData.map((vehicle, index) => {
                            const Icon = vehicle.type === 'Bus' ? Bus : Car;
                            return (
                                <motion.div
                                    key={vehicle.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link to={`/vehicle/${vehicle.id}`} className="block group h-full">
                                        <div className="bg-[#2a2a2a] rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">

                                            <div className="h-64 p-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#333] to-[#2a2a2a]">
                                                <img
                                                    src={vehicle.image}
                                                    alt={vehicle.title}
                                                    className="w-auto h-auto max-w-[90%] max-h-[80%] object-contain transform group-hover:scale-110 transition-transform duration-500 z-10"
                                                />
                                                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500"></div>
                                            </div>

                                            <div className="p-6 flex flex-col flex-grow text-white">
                                                <div className="flex items-center gap-2 text-blue-400 mb-3 text-xs uppercase font-bold tracking-wider">
                                                    <Icon size={14} /> {vehicle.badge}
                                                </div>
                                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                                    {vehicle.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                                    {vehicle.desc}
                                                </p>

                                                <div className="flex items-center justify-between pt-4 border-t border-gray-700 mt-auto">
                                                    <div className="text-right">
                                                        <span className="text-gray-400 text-xs">From</span>
                                                        <span className="font-bold text-white text-lg ml-1">{vehicle.price}</span>
                                                    </div>
                                                    <span className="flex items-center text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                                                        Book Now <ChevronRight size={16} className="ml-1" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Vehicles;