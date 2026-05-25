import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { cars } from '../../data/cars';
import { FaStar, FaUsers, FaGasPump } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeader from '../UI/SectionHeader';
import GlowButton from '../UI/GlowButton';

export default function LuxuryCarShowcase() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          subtitle="Our Fleet"
          title="Luxury Vehicles"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-3d glass rounded-2xl overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-xs font-semibold">
                    {car.category}
                  </div>
                  {!car.available && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white/80 font-semibold text-sm bg-red-500/20 px-4 py-2 rounded-full border border-red-500/30">
                        Currently Booked
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-outfit font-bold text-lg text-white mb-2">{car.name}</h3>
                  
                  <div className="flex items-center gap-4 text-white/40 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <FaUsers className="text-gold" /> {car.seats} Seats
                    </span>
                    <span className="flex items-center gap-1">
                      <FaStar className="text-gold" /> {car.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gold font-outfit font-bold text-xl">₹{car.pricePerKm}</span>
                      <span className="text-white/30 text-sm">/km</span>
                    </div>
                    <Link to="/car-booking">
                      <GlowButton size="sm">Book</GlowButton>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
