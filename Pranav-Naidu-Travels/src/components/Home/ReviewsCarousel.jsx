import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { reviews } from '../../data/reviews';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import SectionHeader from '../UI/SectionHeader';
import { motion } from 'framer-motion';

export default function ReviewsCarousel() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Customers Say"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 h-full flex flex-col hover:border-gold/20 transition-all duration-300"
              >
                <FaQuoteLeft className="text-gold/20 text-2xl mb-4" />

                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">
                  "{review.comment}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-xs ${i < review.rating ? 'text-gold' : 'text-white/10'}`} />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-obsidian font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                    <p className="text-white/30 text-xs">{review.location} • {review.trip}</p>
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
