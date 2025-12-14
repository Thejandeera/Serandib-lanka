import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import {
    Phone,
    Mail,
    MapPin,
    Send,
    MessageCircle,
    Clock,
    Sparkles,
    ArrowRight
} from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// --- Custom Map Marker Setup ---
// Using a standard marker icon fix for React Leaflet if custom image fails
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const Contact = () => {
    // Single Location Data
    const location = {
        position: [6.927611, 79.920194],
        title: "Serandib Lanka Main Office",
        address: " Colombo , Sri lanka",
        phone: "+94 70 467 8737",
        email: "serandiblankatours.info@gmail.com",
        whatsapp: "94704678737"
    };

    const [formStatus, setFormStatus] = useState('idle');
    const form = useRef(); // Reference to the form element

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL IDS FROM EMAILJS DASHBOARD
        const SERVICE_ID = 'service_jm0qbe4';
        const TEMPLATE_ID = 'template_77am54j';
        const PUBLIC_KEY = 'wlEIlfE10FLHj38HW';

        const formData = new FormData(form.current);
        const templateParams = {
            user_name: formData.get('user_name') || 'not-filled',
            user_email: formData.get('user_email') || 'not-filled',
            contact_number: formData.get('contact_number') || 'not-filled',
            subject: formData.get('subject') || 'not-filled',
            message: formData.get('message') || 'not-filled',
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setFormStatus('success');
                toast.success("Message sent successfully!");
                setFormStatus('idle');
                e.target.reset(); // Clear form after success
            }, (error) => {
                console.log(error.text);
                setFormStatus('error');
                toast.error("Failed to send message. Please try again.");
                setFormStatus('idle');
            });
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden pt-16 sm:pt-20 md:pt-24">
            <Toaster position="top-center" reverseOrder={false} />

            {/* ---- Background Elements ---- */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-contact)" />
                </svg>
            </div>

            <div className="absolute top-20 left-[-10%] w-96 h-96 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-40 right-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>

            <Navbar />

            {/* ---- Hero / Header Section ---- */}
            <section className="relative h-[40vh] min-h-[400px]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1600"
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                            <Sparkles size={14} className="text-lime-300" />
                            <span className="font-bold tracking-widest uppercase text-xs">Get in Touch</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                            We'd Love to <span className="text-lime-300">Hear From You</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                            Have a question about our tours? Want to book a vehicle? Our team is ready to help you plan your perfect Sri Lankan adventure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ---- Main Contact Content ---- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Left Column: Contact Info & WhatsApp */}
                        <motion.div
                            className="space-y-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Info Card */}
                            <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                                <h3 className="text-2xl font-bold text-black mb-6 relative z-10">Contact Details</h3>

                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center text-lime-600 flex-shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Our Office</h4>
                                            <p className="text-gray-600 leading-relaxed">{location.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Phone Support</h4>
                                            <p className="text-gray-600">{location.phone}</p>
                                            <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am - 11pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Email Us</h4>
                                            <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-emerald-600 transition-colors">
                                                {location.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Quick Actions (WhatsApp) */}
                            <motion.div variants={itemVariants} className="space-y-4">
                                <a
                                    href={`https://wa.me/${location.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <div className="bg-[#25D366] text-white p-6 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                                <MessageCircle size={28} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Chat on WhatsApp</h4>
                                                <p className="text-white/90 text-sm">Instant response</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </a>

                                <a
                                    href={`mailto:${location.email}`}
                                    className="block w-full"
                                >
                                    <div className="bg-white text-gray-800 border border-gray-200 p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Send an Email</h4>
                                                <p className="text-gray-500 text-sm">We reply within 24h</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="text-gray-400 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </a>
                            </motion.div>
                        </motion.div>


                        {/* Right Column: Form */}
                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lime-500 to-emerald-600"></div>

                                <div className="mb-8">
                                    <h2 className="text-3xl font-extrabold text-black mb-2">Send us a Message</h2>
                                    <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
                                </div>

                                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                placeholder="John Doe"
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-200 transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="user_email"
                                                placeholder="john@example.com"
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-200 transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="contact_number"
                                                placeholder="+94 77 ..."
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-200 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                                            <select
                                                name="subject"
                                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-200 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Tour Package Booking">Tour Package Booking</option>
                                                <option value="Vehicle Rental">Vehicle Rental</option>
                                                <option value="Feedback">Feedback</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            placeholder="How can we help you?"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-200 transition-all resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className="w-full md:w-auto px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-lime-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    >
                                        {formStatus === 'sending' ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                Send Message <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ---- Map Section ---- */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-extrabold text-black">Find Us Here</h2>
                        <p className="text-gray-600 mt-2">Visit our main office in Colombo</p>
                    </motion.div>

                    <motion.div
                        className="h-[400px] md:h-[500px] w-full rounded-[30px] overflow-hidden shadow-2xl border border-gray-200 z-0 relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <MapContainer
                            center={location.position}
                            zoom={15}
                            scrollWheelZoom={false}
                            className="h-full w-full z-0"
                        >
                            <TileLayer
                                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                className="map-tiles"
                            />
                            <Marker position={location.position} icon={customIcon}>
                                <Popup className="modern-popup">
                                    <div className="p-2">
                                        <h3 className="font-bold text-lime-700">{location.title}</h3>
                                        <p className="text-xs text-gray-600 mt-1">{location.address}</p>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${location.position[0]},${location.position[1]}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-blue-600 hover:underline mt-2 inline-block font-bold"
                                        >
                                            Get Directions
                                        </a>
                                    </div>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </motion.div>
                </div>
            </section>

            {/* Global Styles for Leaflet customization */}
            <style jsx="true" global="true">{`
                .map-tiles {
                    filter: grayscale(10%) contrast(105%);
                }
                .modern-popup .leaflet-popup-content-wrapper {
                    border-radius: 12px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    padding: 0;
                }
                .modern-popup .leaflet-popup-content {
                    margin: 8px;
                }
            `}</style>

            <Footer />
        </div>
    );
};

export default Contact;