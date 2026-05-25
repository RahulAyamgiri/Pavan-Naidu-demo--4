import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../UI/AnimatedCounter';
import { FaUsers, FaRoute, FaCar, FaMapMarkedAlt } from 'react-icons/fa';

const stats = [
  { icon: FaUsers, end: 5000, suffix: '+', label: 'Happy Customers' },
  { icon: FaRoute, end: 10000, suffix: '+', label: 'Trips Completed' },
  { icon: FaCar, end: 200, suffix: '+', label: 'Luxury Vehicles' },
  { icon: FaMapMarkedAlt, end: 50, suffix: '+', label: 'Travel Routes' },
];

export default function StatsCounter() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-navy/50 to-obsidian" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-8 text-center hover:border-gold/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                <stat.icon className="text-gold text-xl" />
              </div>
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
