import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { finalCTA } from '../constants/homepage';
import { colors, borderRadius } from '../constants/theme';
import Button from '../components/Button';

const FinalCTA = () => {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: colors.deepNavy,
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("${finalCTA.backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.deepNavy}dd 0%, ${colors.bgPrimary}dd 100%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2
          className="text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: colors.textPrimary, lineHeight: 1.2 }}
        >
          {finalCTA.headline}
        </h2>

        {/* Subheadline */}
        <p
          className="text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: colors.textSecondary, lineHeight: 1.6 }}
        >
          {finalCTA.subheadline}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/book-call">
            <Button variant="primary" size="lg">
              <Calendar size={20} />
              {finalCTA.buttonText}
            </Button>
          </Link>
          <div
            className="text-sm"
            style={{ color: colors.textMuted }}
          >
            Free 30-minute strategy call • No obligations
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: colors.accentBg,
                color: colors.accentPrimary,
              }}
            >
              ✓
            </div>
            <span style={{ color: colors.textSecondary }}>500+ Automations Built</span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: colors.accentBg,
                color: colors.accentPrimary,
              }}
            >
              ✓
            </div>
            <span style={{ color: colors.textSecondary }}>90% Client Satisfaction</span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: colors.accentBg,
                color: colors.accentPrimary,
              }}
            >
              ✓
            </div>
            <span style={{ color: colors.textSecondary }}>Average 3x ROI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;