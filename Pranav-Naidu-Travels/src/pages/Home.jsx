import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import StatsCounter from '../components/Home/StatsCounter';
import LuxuryCarShowcase from '../components/Home/LuxuryCarShowcase';
import TravelPackagesPreview from '../components/Home/TravelPackagesPreview';
import ReviewsCarousel from '../components/Home/ReviewsCarousel';
import FAQSection from '../components/Home/FAQSection';
import GoogleMapSection from '../components/Home/GoogleMapSection';
import CTABanner from '../components/Home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <LuxuryCarShowcase />
      <TravelPackagesPreview />
      <ReviewsCarousel />
      <CTABanner />
      <FAQSection />
      <GoogleMapSection />
    </>
  );
}
