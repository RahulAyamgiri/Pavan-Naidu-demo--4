import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import GlowButton from '../UI/GlowButton';

export default function CTABanner() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold-dark/20 via-gold/10 to-gold-dark/20" />
          <div className="absolute inset-0 glass" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Ready for Your Next <span className="gradient-text-gold">Adventure?</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Book your premium ride today and experience the finest travel service in Andhra Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/car-booking">
                <GlowButton size="lg">
                  <span className="flex items-center gap-2">Book Now <FaArrowRight /></span>
                </GlowButton>
              </Link>
              <a href="tel:+919876543210">
                <GlowButton variant="outline" size="lg">
                  <span className="flex items-center gap-2"><FaPhoneAlt /> Call Us</span>
                </GlowButton>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
