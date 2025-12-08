import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Shared Data
export const toursData = [
    { id: 1, image: "/images/tours/sigiriya.png", location: "Sigiriya, Sri Lanka", title: "Sigiriya Rock Fortress", rating: 5, price: "$299", days: "2 Days", desc: "Climb the ancient rock fortress and explore the water gardens." },
    { id: 2, image: "/images/tours/gampola.png", location: "Gampola, Sri Lanka", title: "Ambuluwawa Tower", rating: 5, price: "$189", days: "1 Day", desc: "Experience biodiversity and breathtaking views from the tower." },
    { id: 3, image: "/images/tours/ella.png", location: "Ella, Sri Lanka", title: "Upcountry Adventure", rating: 5, price: "$349", days: "3 Days", desc: "Ride the train, visit Nine Arches Bridge, and hike Little Adam's Peak." },
    { id: 4, image: "/images/tours/katharagama.png", location: "Katharagama, Sri Lanka", title: "Yala Safari Experience", rating: 5, price: "$399", days: "2 Days", desc: "Spot leopards and elephants in the wild." },
    { id: 5, image: "/images/tours/galle.png", location: "Galle, Sri Lanka", title: "Coastal Heritage", rating: 5, price: "$259", days: "2 Days", desc: "Walk the ramparts of the Dutch Fort and relax on the beach." },
    { id: 6, image: "/images/tours/nuwara.png", location: "Nuwara Eliya, Sri Lanka", title: "Tea Trail Expedition", rating: 5, price: "$329", days: "3 Days", desc: "Visit tea factories and enjoy the cool climate." },
];

const Tours = () => {
    return (
        <div className="font-sans">
            <Navbar />
            <section className="relative w-full py-32 bg-white min-h-screen">

                {/* Background Patterns */}
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-tours-page" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-tours-page)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4 bg-lime-50 px-4 py-2 rounded-full border border-lime-100">
                            <Sparkles size={16} className="text-lime-600" />
                            <span className="text-lime-700 font-bold tracking-widest uppercase text-xs">Explore All</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
                            Our Exclusive <span className="text-lime-600">Tours</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Choose from our wide range of meticulously planned holiday packages.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {toursData.map((tour, index) => (
                            <motion.div
                                key={tour.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={`/tour/${tour.id}`} className="block group h-full">
                                    <div className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={tour.image}
                                                alt={tour.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                                                <span className="font-bold text-black">{tour.price}</span>
                                            </div>
                                            <div className="absolute bottom-4 left-4 bg-lime-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                                {tour.days}
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 text-gray-500 mb-3 text-sm">
                                                <MapPin size={16} className="text-lime-600" />
                                                {tour.location}
                                            </div>
                                            <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-lime-600 transition-colors">
                                                {tour.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                                                {tour.desc}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                                <div className="flex text-yellow-400">
                                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                                </div>
                                                <span className="flex items-center text-sm font-bold text-black group-hover:translate-x-1 transition-transform">
                                                    Details <ChevronRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Tours;