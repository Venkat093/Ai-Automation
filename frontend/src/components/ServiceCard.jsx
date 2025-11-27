import React from 'react';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { colors, borderRadius } from '../constants/theme';

const ServiceCard = ({ service, compact = false }) => {
  const IconComponent = Icons[service.icon];

  return (
    <Link
      to={`/services/${service.id}`}
      className="service-card block group"
      style={{
        background: colors.bgSecondary,
        border: `1px solid ${colors.borderSubtle}`,
        borderRadius: borderRadius.lg,
        padding: compact ? '24px' : '32px',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Accent Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: colors.accentPrimary }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        style={{
          background: colors.accentBg,
          color: colors.accentPrimary,
        }}
      >
        {IconComponent && <IconComponent size={28} />}
      </div>

      {/* Content */}
      <h3
        className="text-xl font-semibold mb-3"
        style={{ color: colors.textPrimary }}
      >
        {service.title}
      </h3>
      <p
        className="mb-4"
        style={{ color: colors.textSecondary, lineHeight: 1.6 }}
      >
        {service.shortDescription}
      </p>

      {/* ROI Badge */}
      <div
        className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium mb-4"
        style={{
          background: `${colors.accentGreen}15`,
          color: colors.accentGreen,
        }}
      >
        {service.roi}
      </div>

      {/* Learn More Link */}
      <div
        className="flex items-center space-x-2 font-medium group-hover:translate-x-2 transition-transform duration-300"
        style={{ color: colors.accentPrimary }}
      >
        <span>Learn more</span>
        <ArrowRight size={18} />
      </div>
    </Link>
  );
};

export default ServiceCard;