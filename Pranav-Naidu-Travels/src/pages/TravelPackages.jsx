import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { packages } from '../data/packages';
import { FaStar, FaClock, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa';
import SectionHeader from '../components/UI/SectionHeader';
import GlowButton from '../components/UI/GlowButton';

export default function TravelPackages() {
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? packages : packages.filter(p => p.popular);

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-[3px] uppercase mb-4 block">Explore</span>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
            Travel <span className="gradient-text-gold">Packages</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">Discover curated travel experiences across Andhra Pradesh with all-inclusive premium packages.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12">
          {['all', 'popular'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2.5 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${filter === f ? 'bg-gradient-to-r from-gold-dark to-gold text-obsidian' : 'glass text-white/60 hover:text-white'}`}>
              {f === 'all' ? 'All Packages' : 'Popular'}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden group hover:border-gold/20 transition-all duration-500 card-3d"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-400 text-xs font-semibold">
                  {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% OFF
                </div>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-xs font-semibold">Popular</div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-outfit font-bold text-lg text-white mb-2">{pkg.name}</h3>
                <div className="flex items-center gap-4 text-white/40 text-xs mb-3">
                  <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-gold" /> {pkg.from} → {pkg.to}</span>
                  <span className="flex items-center gap-1"><FaClock className="text-gold" /> {pkg.duration}</span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} className={`text-xs ${j < Math.floor(pkg.rating) ? 'text-gold' : 'text-white/10'}`} />
                  ))}
                  <span className="text-white/30 text-xs ml-1">({pkg.reviews})</span>
                </div>
                <ul className="space-y-1.5 mb-5">
                  {pkg.highlights.slice(0, 3).map(h => (
                    <li key={h} className="flex items-center gap-2 text-white/40 text-xs">
                      <FaCheck className="text-gold text-[10px]" /> {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-white/30 text-sm line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                    <span className="text-gold font-outfit font-bold text-2xl ml-2">₹{pkg.price.toLocaleString()}</span>
                  </div>
                  <GlowButton size="sm" onClick={() => setSelectedPkg(pkg)}>View</GlowButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPkg && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setSelectedPkg(null)}>
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="glass rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-outfit font-bold text-2xl text-white">{selectedPkg.name}</h2>
              <button onClick={() => setSelectedPkg(null)} className="text-white/30 hover:text-white p-1"><FaTimes /></button>
            </div>
            <img src={selectedPkg.image} alt={selectedPkg.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            <div className="flex gap-4 text-white/50 text-sm mb-4">
              <span>{selectedPkg.from} → {selectedPkg.to}</span>
              <span>{selectedPkg.distance}</span>
              <span>{selectedPkg.duration}</span>
            </div>
            <h4 className="text-gold font-semibold mb-2">Highlights</h4>
            <ul className="space-y-2 mb-6">
              {selectedPkg.highlights.map(h => (
                <li key={h} className="flex items-center gap-2 text-white/60 text-sm"><FaCheck className="text-gold text-xs" /> {h}</li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-white/30 line-through">₹{selectedPkg.originalPrice.toLocaleString()}</span>
                <span className="text-gold font-outfit font-bold text-3xl ml-2">₹{selectedPkg.price.toLocaleString()}</span>
              </div>
              <GlowButton>Book Now</GlowButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
