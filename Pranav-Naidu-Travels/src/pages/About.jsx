import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHeart, FaGlobeAsia, FaCar, FaUsers, FaRoute, FaStar, FaTrophy } from 'react-icons/fa';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import SectionHeader from '../components/UI/SectionHeader';

const values = [
  { icon: FaShieldAlt, title: 'Safety First', desc: 'All vehicles GPS-tracked with verified drivers and full insurance coverage.' },
  { icon: FaHeart, title: 'Customer Love', desc: 'We treat every passenger as family. 24/7 support and personalized service.' },
  { icon: FaGlobeAsia, title: 'Wide Network', desc: '50+ routes across AP and neighboring states with reliable daily services.' },
  { icon: FaTrophy, title: 'Premium Quality', desc: 'Only the finest luxury vehicles maintained to the highest standards.' },
];

const timeline = [
  { year: '2015', event: 'Founded in Vijayawada with 3 cars' },
  { year: '2017', event: 'Expanded to 50+ vehicles, launched AP routes' },
  { year: '2019', event: 'Introduced luxury fleet — BMW, Audi' },
  { year: '2021', event: 'Launched travel packages & digital booking' },
  { year: '2023', event: 'Crossed 5000+ happy customers' },
  { year: '2025', event: 'Premium tech platform & 200+ vehicles' },
];

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <span className="text-gold text-sm font-semibold tracking-[3px] uppercase mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6">
            About <span className="gradient-text-gold">Pranav Naidu Travels</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            Born in Vijayawada, built with passion — Pranav Naidu Travels is Andhra Pradesh's premier luxury travel partner. 
            From humble beginnings with just 3 cars, we've grown into a fleet of 200+ premium vehicles serving thousands of happy travelers every month.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { end: 5000, suffix: '+', label: 'Happy Customers' },
            { end: 200, suffix: '+', label: 'Vehicles' },
            { end: 50, suffix: '+', label: 'Routes' },
            { end: 10, suffix: '+', label: 'Years Experience' },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6 text-center">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <SectionHeader subtitle="Why Choose Us" title="Our Values" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6 text-center hover:border-gold/20 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <v.icon className="text-gold text-xl" />
              </div>
              <h3 className="font-outfit font-bold text-white mb-2">{v.title}</h3>
              <p className="text-white/40 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <SectionHeader subtitle="Our Journey" title="Company Timeline" />
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, i) => (
            <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-outfit font-bold text-sm flex-shrink-0">
                  {item.year}
                </div>
                {i < timeline.length - 1 && <div className="w-px h-full bg-gold/10 mt-2" />}
              </div>
              <div className="glass rounded-xl p-4 flex-1 mb-2">
                <p className="text-white/60 text-sm">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
