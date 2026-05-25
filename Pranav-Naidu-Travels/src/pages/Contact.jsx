import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCheck } from 'react-icons/fa';
import GlowButton from '../components/UI/GlowButton';

const contactInfo = [
  { icon: FaPhoneAlt, title: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: FaWhatsapp, title: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' },
  { icon: FaEnvelope, title: 'Email', value: 'info@pranavnaidu.com', href: 'mailto:info@pranavnaidu.com' },
  { icon: FaMapMarkerAlt, title: 'Address', value: 'MG Road, Vijayawada, AP - 520001', href: '#' },
  { icon: FaClock, title: 'Hours', value: '24/7 Available', href: '#' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-[3px] uppercase mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
            Contact <span className="gradient-text-gold">Us</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">We're here to help! Reach out to us for bookings, queries, or partnership opportunities.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 glass rounded-xl p-5 hover:border-gold/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <item.icon className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-wider">{item.title}</h4>
                    <p className="text-white font-medium text-sm mt-0.5">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="rounded-2xl overflow-hidden glass">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122474.35!2d80.557!3d16.506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada!5e0!3m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="glass rounded-2xl p-8">
              <h3 className="font-outfit font-bold text-xl text-white mb-6">Send us a Message</h3>
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-green-400 text-2xl" />
                  </div>
                  <h4 className="font-outfit font-bold text-white text-lg mb-2">Message Sent!</h4>
                  <p className="text-white/50 text-sm">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/40 text-xs mb-1.5 block">Name</label>
                      <input type="text" placeholder="Your name" className="input-premium" required />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs mb-1.5 block">Phone</label>
                      <input type="tel" placeholder="+91 98765 43210" className="input-premium" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/40 text-xs mb-1.5 block">Email</label>
                    <input type="email" placeholder="you@example.com" className="input-premium" required />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs mb-1.5 block">Subject</label>
                    <input type="text" placeholder="How can we help?" className="input-premium" required />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs mb-1.5 block">Message</label>
                    <textarea rows={4} placeholder="Your message..." className="input-premium resize-none" required />
                  </div>
                  <GlowButton type="submit" className="w-full">Send Message</GlowButton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
