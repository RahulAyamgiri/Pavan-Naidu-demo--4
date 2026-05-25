import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { packages } from '../../data/packages';
import { FaStar, FaClock, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import SectionHeader from '../UI/SectionHeader';
import GlowButton from '../UI/GlowButton';

export default function TravelPackagesPreview() {
  const topPackages = packages.filter(p => p.popular).slice(0, 4);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-blue/3 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          subtitle="Top Destinations"
          title="Travel Packages"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl overflow-hidden group hover:border-gold/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-400 text-xs font-semibold">
                  {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% OFF
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-outfit font-bold text-white mb-2 leading-snug">{pkg.name}</h3>

                <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-gold" /> {pkg.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-gold" /> {pkg.duration}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-xs ${i < Math.floor(pkg.rating) ? 'text-gold' : 'text-white/10'}`} />
                  ))}
                  <span className="text-white/30 text-xs ml-1">({pkg.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/30 text-sm line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                    <br />
                    <span className="text-gold font-outfit font-bold text-xl">₹{pkg.price.toLocaleString()}</span>
                  </div>
                  <Link to="/packages">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors cursor-pointer group/btn">
                      <FaArrowRight className="text-gold text-sm group-hover/btn:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/packages">
            <GlowButton variant="outline">
              View All Packages <FaArrowRight className="inline ml-2" />
            </GlowButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
