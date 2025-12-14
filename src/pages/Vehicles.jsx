import React, { useState, useMemo, useEffect } from 'react';
import { Car, Bus, Sparkles, ChevronRight, Users, Fuel, Gauge, Filter, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { vehiclesData } from '../data/vehiclesData';

const Vehicles = () => {
    const navigate = useNavigate();
    // -- State --
    const [visibleCount, setVisibleCount] = useState(6);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        fuel: [],
        seats: [0, 60]
    });

    // -- Helpers --
    const getUniqueFuelTypes = () => {
        const types = new Set(vehiclesData.map(v => v.fuel));
        return Array.from(types);
    };

    const parseSeatCapacity = (seatStr) => {
        // "7-8" -> 8, "30+" -> 30, "4-5" -> 5
        const num = seatStr.replace(/\D/g, '-').split('-').filter(Boolean).pop();
        return parseInt(num) || 0;
    };

    // -- Handlers --
    const handleFuelChange = (fuelType) => {
        setFilters(prev => {
            const newFuel = prev.fuel.includes(fuelType)
                ? prev.fuel.filter(f => f !== fuelType)
                : [...prev.fuel, fuelType];
            return { ...prev, fuel: newFuel };
        });
        setVisibleCount(6); // Reset pagination on filter change
    };

    const handleSeatChange = (value) => {
        setFilters(prev => ({ ...prev, seats: value }));
        setVisibleCount(6);
    };

    const handleViewMore = (vehicleId) => {
        navigate(`/vehicle/${vehicleId}`);
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    // -- Filtering Logic --
    const filteredVehicles = useMemo(() => {
        return vehiclesData.filter(vehicle => {
            // Fuel Filter
            if (filters.fuel.length > 0 && !filters.fuel.includes(vehicle.fuel)) {
                return false;
            }
            // Seat Filter
            const maxSeats = parseSeatCapacity(vehicle.seats);
            if (maxSeats < filters.seats[0] || maxSeats > filters.seats[1]) {
                return false;
            }
            return true;
        });
    }, [filters]);

    const displayedVehicles = filteredVehicles.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-white relative overflow-clip pt-16 sm:pt-20 md:pt-24">
            {/* Textured Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-vehicles" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-vehicles)" />
                </svg>
            </div>

            {/* Animated Blobs */}
            <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0 pointer-events-none"></div>

            <Navbar />

            {/* Hero Section with Image */}
            <section className="relative h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600"
                        alt="Our Fleet"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
                    <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/20">
                        <Sparkles size={14} className="text-blue-300 sm:w-4 sm:h-4" />
                        <span className="font-bold tracking-widest uppercase text-xs">Premium Fleet</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg px-4">
                        Travel in <span className="text-blue-300">Comfort</span> & Style
                    </h1>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-6">
                        <button
                            onClick={() => setIsMobileFilterOpen(true)}
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700 transition"
                        >
                            <Filter size={18} /> Filters
                        </button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Sidebar Filters - Sticky on Desktop */}
                        <div className={`
                            fixed inset-0 z-50 bg-white 
                            lg:sticky lg:top-36 lg:z-auto lg:w-1/4
                            transform transition-transform duration-300 ease-in-out
                            ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                            lg:block
                        `}>
                            {/* Inner content wrapper */}
                            <div className="h-full lg:h-auto overflow-y-auto lg:overflow-visible p-6 lg:p-0 bg-white lg:bg-transparent">
                                {/* Mobile Close Button */}
                                <div className="flex justify-between items-center lg:hidden mb-6">
                                    <h2 className="text-2xl font-bold">Filters</h2>
                                    <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-gray-100 rounded-full">
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="space-y-8 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border-2 border-gray-200">
                                    {/* Fuel Filter */}
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <Fuel size={18} className="text-blue-600" /> Fuel Type
                                        </h3>
                                        <div className="space-y-2">
                                            {getUniqueFuelTypes().map(type => (
                                                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                                    <div className="relative flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={filters.fuel.includes(type)}
                                                            onChange={() => handleFuelChange(type)}
                                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:border-blue-500 checked:bg-blue-500 hover:border-blue-400 transition-all"
                                                        />
                                                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{type}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <hr className="border-gray-200" />

                                    {/* Passenger Slider */}
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                                            <Users size={18} className="text-blue-600" /> Passengers
                                        </h3>
                                        <div className="px-2">
                                            <Slider
                                                range
                                                min={0}
                                                max={60}
                                                value={filters.seats}
                                                onChange={handleSeatChange}
                                                trackStyle={[{ backgroundColor: '#2563eb' }]}
                                                handleStyle={[
                                                    { borderColor: '#2563eb', backgroundColor: 'white', opacity: 1 },
                                                    { borderColor: '#2563eb', backgroundColor: 'white', opacity: 1 }
                                                ]}
                                                railStyle={{ backgroundColor: '#e5e7eb' }}
                                            />
                                            <div className="flex justify-between mt-4 text-sm font-medium text-gray-600">
                                                <span>{filters.seats[0]} seats</span>
                                                <span>{filters.seats[1]}+ seats</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Filter Summary / Reset mobile only if needed */}
                                    <div className="lg:hidden mt-8">
                                        <button
                                            onClick={() => setIsMobileFilterOpen(false)}
                                            className="w-full bg-black text-white py-3 rounded-xl font-bold"
                                        >
                                            Show {filteredVehicles.length} Vehicles
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vehicles Grid */}
                        <div className="w-full lg:w-3/4">
                            <div className="text-gray-500 mb-6 text-sm">
                                Showing {displayedVehicles.length} of {filteredVehicles.length} vehicles
                            </div>

                            {displayedVehicles.length === 0 ? (
                                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-300">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                        <Car size={32} className="text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">No vehicles found</h3>
                                    <p className="text-gray-500 mt-2">Try adjusting your filters to see more results.</p>
                                    <button
                                        onClick={() => setFilters({ fuel: [], seats: [0, 60] })}
                                        className="mt-6 text-blue-600 font-bold hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {displayedVehicles.map((vehicle, index) => {
                                        const Icon = vehicle.type === 'Bus' ? Bus : Car;
                                        return (
                                            <div
                                                key={vehicle.id}
                                                className="group relative h-full"
                                            >
                                                <div className="relative h-full flex flex-col rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/40 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                                    {/* Image Section */}
                                                    <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-100 to-cyan-100 flex-shrink-0">
                                                        <img
                                                            src={vehicle.image}
                                                            alt={vehicle.title}
                                                            className="w-full h-full object-cover rounded-t-2xl sm:rounded-t-3xl transform group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                                                    </div>

                                                    {/* Content Section */}
                                                    <div className="p-5 flex flex-col flex-grow">
                                                        <div className="flex items-center gap-2 text-blue-600 text-xs uppercase font-bold tracking-wider mb-2">
                                                            <Icon size={14} />
                                                            <span>{vehicle.type}</span>
                                                        </div>
                                                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                                                            {vehicle.title}
                                                        </h3>
                                                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 mb-4 flex-grow">
                                                            {vehicle.desc}
                                                        </p>

                                                        {/* Mini Specs */}
                                                        <div className="flex items-center justify-between py-3 border-t border-gray-100 mb-4">
                                                            <div className="flex items-center gap-1.5 text-gray-600">
                                                                <Users size={16} className="text-blue-500" />
                                                                <span className="text-xs font-semibold">{vehicle.seats}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1.5 text-gray-600">
                                                                <Fuel size={16} className="text-blue-500" />
                                                                <span className="text-xs font-semibold">{vehicle.fuel}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1.5 text-gray-600">
                                                                <Gauge size={16} className="text-blue-500" />
                                                                <span className="text-xs font-semibold">Auto</span>
                                                            </div>
                                                        </div>

                                                        <button
                                                            onClick={() => handleViewMore(vehicle.id)}
                                                            className="w-full bg-black hover:bg-blue-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                                                        >
                                                            View Details <ChevronRight size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Load More Button */}
                            {filteredVehicles.length > visibleCount && (
                                <div className="mt-12 text-center">
                                    <button
                                        onClick={handleLoadMore}
                                        className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-bold hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
                                    >
                                        Load More Vehicles
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vehicles;