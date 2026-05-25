import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Car Booking', path: '/car-booking' },
  { name: 'Travel Packages', path: '/packages' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Dashboard', path: '/dashboard' },
];

const services = [
  'Airport Transfers',
  'Outstation Trips',
  'Corporate Travel',
  'Wedding Car Rental',
  'Pilgrimage Packages',
  'City Tours',
];

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-navy/80 border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <FaCar className="text-obsidian text-lg" />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-lg gradient-text-gold">Pranav Naidu</h3>
                <p className="text-[10px] text-white/50 tracking-[2px] uppercase">Travels</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium luxury travel services across Andhra Pradesh. Experience the finest in comfort, safety, and style with our fleet of luxury vehicles.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/50 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold mt-1 flex-shrink-0" />
                <span className="text-white/50 text-sm">MG Road, Vijayawada, Andhra Pradesh - 520001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/50 text-sm hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold flex-shrink-0" />
                <a href="mailto:info@pranavnaidu.com" className="text-white/50 text-sm hover:text-gold transition-colors">
                  info@pranavnaidu.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 Pranav Naidu Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-sm hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-sm hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
