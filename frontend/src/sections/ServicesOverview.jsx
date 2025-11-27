import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../constants/services';
import { colors } from '../constants/theme';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const ServicesOverview = () => {
  return (
    <section
      className="py-24"
      style={{ background: colors.bgPrimary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: colors.slateText }}
          >
            What We <span style={{ color: colors.primaryBlue }}>Automate</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.textMuted, lineHeight: 1.6 }}
          >
            From AI chatbots to complete revenue automation systems, we build solutions that work 24/7 to grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} compact />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="primary" size="lg">
              View All Services
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;