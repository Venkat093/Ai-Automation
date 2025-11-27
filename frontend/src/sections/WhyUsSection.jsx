import React from 'react';
import * as Icons from 'lucide-react';
import { whyUs } from '../constants/homepage';
import { colors, borderRadius } from '../constants/theme';

const WhyUsSection = () => {
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
            style={{ color: colors.textPrimary }}
          >
            Why Choose <span style={{ color: colors.accentPrimary }}>Us</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.textSecondary, lineHeight: 1.6 }}
          >
            We're not just automation experts—we're your growth partners focused on delivering real business results.
          </p>
        </div>

        {/* Why Us Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.map((item, index) => {
            const IconComponent = Icons[item.icon];
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  background: colors.bgSecondary,
                  border: `1px solid ${colors.borderSubtle}`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: colors.accentBg,
                    color: colors.accentPrimary,
                  }}
                >
                  {IconComponent && <IconComponent size={32} />}
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  {item.title}
                </h3>
                <p
                  style={{ color: colors.textSecondary, lineHeight: 1.6 }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;