import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cars, carCategories } from '../data/cars';
import { locations } from '../data/routes';
import { FaStar, FaUsers, FaCheck, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowRight, FaTimes } from 'react-icons/fa';
import SectionHeader from '../components/UI/SectionHeader';
import GlassCard from '../components/UI/GlassCard';
import GlowButton from '../components/UI/GlowButton';

export default function CarBooking() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCar, setSelectedCar] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    pickup: '', drop: '', date: '', time: '', name: '', phone: '',
  });

  const filteredCars = selectedCategory === 'All' ? cars : cars.filter(c => c.category === selectedCategory);

  const handleBook = (e) => {
    e.preventDefault();
    if (!selectedCar) return;
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const seatGrid = Array.from({ length: selectedCar?.seats || 0 }, (_, i) => ({
    id: i + 1,
    status: Math.random() > 0.4 ? 'available' : 'booked',
  }));

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-[3px] uppercase mb-4 block">Book Your Ride</span>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
            Premium <span className="gradient-text-gold">Car Booking</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">Choose from our fleet of luxury vehicles for your perfect journey across Andhra Pradesh.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Car Selection */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {carCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-gold-dark to-gold text-obsidian'
                      : 'glass text-white/60 hover:text-white hover:border-gold/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Car Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCars.map((car, i) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => car.available && setSelectedCar(car)}
                  className={`glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedCar?.id === car.id ? 'border-gold/40 glow-gold' : 'hover:border-white/20'
                  } ${!car.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                    {selectedCar?.id === car.id && (
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                        <FaCheck className="text-obsidian text-sm" />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-gold/20 backdrop-blur-sm text-gold text-xs font-semibold">{car.category}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-outfit font-bold text-white mb-1">{car.name}</h3>
                    <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                      <span className="flex items-center gap-1"><FaUsers className="text-gold" /> {car.seats}</span>
                      <span className="flex items-center gap-1"><FaStar className="text-gold" /> {car.rating}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {car.features.slice(0, 3).map(f => (
                        <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40">{f}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gold font-outfit font-bold text-lg">₹{car.pricePerKm}</span>
                        <span className="text-white/30 text-xs">/km</span>
                      </div>
                      <span className="text-white/30 text-xs">₹{car.pricePerDay.toLocaleString()}/day</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Seat Availability */}
            {selectedCar && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
                <GlassCard hover={false}>
                  <h3 className="font-outfit font-semibold text-white mb-4">Seat Availability - {selectedCar.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {seatGrid.map((seat) => (
                      <div key={seat.id} className={`seat ${seat.status === 'available' ? 'seat-available' : 'seat-booked'}`}>
                        {seat.id}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500/20 border border-green-500/40" /> Available</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-500/20 border border-red-500/40" /> Booked</span>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </div>

          {/* Right: Booking Form */}
          <div>
            <div className="glass rounded-2xl p-6 sticky top-24">
              <h3 className="font-outfit font-bold text-xl text-white mb-6">Book Your Ride</h3>
              <form onSubmit={handleBook} className="space-y-4">
                <div>
                  <label className="text-white/40 text-xs mb-1.5 block">Pickup Location</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gold text-sm" />
                    <select value={form.pickup} onChange={e => setForm({...form, pickup: e.target.value})} className="input-premium pl-10 appearance-none" required>
                      <option value="">Select pickup</option>
                      {locations.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-white/40 text-xs mb-1.5 block">Drop Location</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gold text-sm" />
                    <select value={form.drop} onChange={e => setForm({...form, drop: e.target.value})} className="input-premium pl-10 appearance-none" required>
                      <option value="">Select drop</option>
                      {locations.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-white/40 text-xs mb-1.5 block">Date</label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gold text-sm" />
                      <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="input-premium pl-10" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/40 text-xs mb-1.5 block">Time</label>
                    <div className="relative">
                      <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold text-sm" />
                      <input type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})} className="input-premium pl-10" required />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-white/40 text-xs mb-1.5 block">Full Name</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-premium" required />
                </div>
                <div>
                  <label className="text-white/40 text-xs mb-1.5 block">Phone</label>
                  <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="input-premium" required />
                </div>

                {selectedCar && (
                  <div className="glass-gold rounded-xl p-4 mt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/50 text-sm">Selected Car</span>
                      <span className="text-gold font-semibold text-sm">{selectedCar.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-sm">Rate</span>
                      <span className="text-gold font-bold">₹{selectedCar.pricePerKm}/km</span>
                    </div>
                  </div>
                )}

                <GlowButton type="submit" className="w-full mt-2">
                  <span className="flex items-center justify-center gap-2">Confirm Booking <FaArrowRight /></span>
                </GlowButton>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ type: 'spring', stiffness: 200 }} className="glass-gold rounded-2xl p-8 max-w-md w-full text-center relative">
              <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-white/30 hover:text-white"><FaTimes /></button>
              <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
                <FaCheck className="text-green-400 text-3xl" />
              </div>
              <h3 className="font-outfit font-bold text-2xl text-white mb-2">Booking Confirmed!</h3>
              <p className="text-white/50 text-sm mb-4">Your {selectedCar?.name} has been booked. We'll send you a confirmation on WhatsApp.</p>
              <GlowButton onClick={() => setShowSuccess(false)}>Done</GlowButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
