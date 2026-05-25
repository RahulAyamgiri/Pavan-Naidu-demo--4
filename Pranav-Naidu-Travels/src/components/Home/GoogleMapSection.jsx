import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../UI/SectionHeader';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function GoogleMapSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader subtitle="Find Us" title="Our Location" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden glass"
        >
          <iframe
            title="Pranav Naidu Travels Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122474.35!2d80.557!3d16.506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada!5e0!3m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 glass-gold rounded-xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <FaMapMarkerAlt className="text-gold mt-1" />
              <div>
                <h4 className="font-outfit font-semibold text-white text-sm">Pranav Naidu Travels</h4>
                <p className="text-white/50 text-xs mt-1">MG Road, Vijayawada, AP - 520001</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-gold text-sm" />
              <a href="tel:+919876543210" className="text-white/60 text-sm hover:text-gold transition-colors">+91 98765 43210</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
