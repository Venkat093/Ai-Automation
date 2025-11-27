import React from 'react';
import { services } from '../constants/services';
import { colors } from '../constants/theme';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div style={{ background: colors.offWhite, minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: colors.slateText }}
          >
            Our <span style={{ color: colors.primaryBlue }}>Services</span>
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.textMuted, lineHeight: 1.6 }}
          >
            Comprehensive AI automation solutions designed to save time, increase revenue, and scale your business operations.
          </p>
        </div>

        {/* Foundation Services */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: colors.slateText }}
          >
            Foundation Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Revenue Automations */}
        <div>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: colors.slateText }}
          >
            Revenue Automation Systems
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;