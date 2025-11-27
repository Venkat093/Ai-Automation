import React from 'react';
import HeroSection from '../sections/HeroSection';
import ServicesOverview from '../sections/ServicesOverview';
import WhyUsSection from '../sections/WhyUsSection';
import ProcessSection from '../sections/ProcessSection';
import CaseStudiesPreview from '../sections/CaseStudiesPreview';
import FinalCTA from '../sections/FinalCTA';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <WhyUsSection />
      <ProcessSection />
      <CaseStudiesPreview />
      <FinalCTA />
    </div>
  );
};

export default Home;