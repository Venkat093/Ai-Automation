import React from 'react';
import HeroSection from '../sections/HeroSection';
import ServicesOverview from '../sections/ServicesOverview';
import WhyUsSection from '../sections/WhyUsSection';
import ProcessSection from '../sections/ProcessSection';
import CaseStudiesPreview from '../sections/CaseStudiesPreview';
import FAQSection from '../sections/FAQSection';
import FinalCTA from '../sections/FinalCTA';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <WhyUsSection />
      <ProcessSection />
      <CaseStudiesPreview />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default Home;