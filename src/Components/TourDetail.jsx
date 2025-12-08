import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { toursData } from '../pages/Tours'; // Importing data (or define it here if keeping files separate)

const TourDetail = () => {
    const { id } = useParams();
    const tour = toursData.find(t => t.id === parseInt(id)) || toursData[0]; // Fallback to first if not found

    return (
        <div className="font-sans">
            <Navbar />

            {/* Hero Banner */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <div className="container mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <Link to="/tours" className="inline-flex items-center text-sm text-lime-300 mb-4 hover:underline"><ArrowLeft size={16} className="mr-1" /> Back to Tours</Link>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{tour.title}</h1>
                            <div className="flex flex-wrap gap-6 items-center">
                                <span className="flex items-center gap-2"><MapPin size={20} className="text-lime-400" /> {tour.location}</span>
                                <span className="flex items-center gap-2"><Clock size={20} className="text-lime-400" /> {tour.days}</span>
                                <span className="flex items-center gap-2 text-yellow-400"><Star fill="currentColor" size={20} /> {tour.rating}.0 (120 Reviews)</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">{tour.desc} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black mb-4">Highlights</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {['Professional Guide', 'Luxury Transport', 'Breakfast Included', 'Entrance Tickets', 'Photo Ops', 'Water Bottles'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={18} className="text-lime-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar Booking */}
                    <div className="relative">
                        <div className="sticky top-24 bg-white border border-gray-100 rounded-3xl p-8 shadow-xl">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <span className="text-gray-500 text-sm">Starting from</span>
                                    <div className="text-3xl font-extrabold text-black">{tour.price}</div>
                                </div>
                                <div className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-xs font-bold">Best Price</div>
                            </div>

                            <form className="space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-lime-500" />
                                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-lime-500" />
                                <input type="date" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-lime-500" />
                                <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-lime-600 transition-colors">
                                    Book This Tour
                                </button>
                            </form>
                            <p className="text-center text-gray-400 text-xs mt-4">No credit card required for inquiry</p>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default TourDetail;