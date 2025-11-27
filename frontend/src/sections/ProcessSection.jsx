import React from 'react';
import { process } from '../constants/homepage';
import { colors, borderRadius } from '../constants/theme';
import { CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section
      className="py-24"
      style={{ background: colors.bgSecondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: colors.textPrimary }}
          >
            How It <span style={{ color: colors.accentPrimary }}>Works</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.textSecondary, lineHeight: 1.6 }}
          >
            Our proven 4-step process takes you from strategy to live automation in weeks, not months.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2"
            style={{
              background: colors.borderPrimary,
              zIndex: 0,
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Step Card */}
                <div
                  className="p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-8px]"
                  style={{
                    background: colors.bgSecondary,
                    border: `2px solid ${colors.borderSubtle}`,
                  }}
                >
                  {/* Step Number */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto"
                    style={{
                      background: colors.accentPrimary,
                      color: colors.bgPrimary,
                    }}
                  >
                    {step.step}
                  </div>

                  {/* Duration Badge */}
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      background: colors.accentBg,
                      color: colors.accentPrimary,
                    }}
                  >
                    {step.duration}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: colors.textPrimary }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm"
                    style={{ color: colors.textSecondary, lineHeight: 1.6 }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;