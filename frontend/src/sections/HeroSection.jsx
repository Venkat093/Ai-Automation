import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Clock, Shield } from 'lucide-react';
import { hero } from '../constants/homepage';
import { colors, borderRadius } from '../constants/theme';
import Button from '../components/Button';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: colors.deepNavy,
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzY0MjE0MzU0fDA&ixlib=rb-4.1.0&q=85")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.deepNavy} 0%, ${colors.bgPrimary} 100%)`,
          opacity: 0.9,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: colors.accentBg,
                color: colors.accentPrimary,
                border: `1px solid ${colors.accentPrimary}30`,
              }}
            >
              <Zap size={16} className="mr-2" />
              {hero.badge}
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight"
              style={{
                color: colors.textPrimary,
                letterSpacing: '-0.02em',
              }}
            >
              {hero.headline.split('Automated').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && (
                    <span style={{ color: colors.accentPrimary }}>Automated</span>
                  )}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-call">
                <Button variant="primary" size="lg">
                  {hero.ctaPrimary}
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary" size="lg">
                  {hero.ctaSecondary}
                </Button>
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {hero.trustMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: colors.accentPrimary }}
                  >
                    {metric.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: `1px solid ${colors.borderSubtle}`,
                boxShadow: `0 25px 50px ${colors.accentPrimary}15`,
              }}
            >
              <img
                src={hero.heroImage}
                alt="AI Automation Dashboard"
                className="w-full h-auto"
                style={{
                  filter: 'brightness(0.9) contrast(1.1)',
                }}
              />
              {/* Glow Effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${colors.accentPrimary}20 0%, transparent 70%)`,
                }}
              />
            </div>

            {/* Floating Stats Card */}
            <div
              className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-2xl"
              style={{
                background: colors.bgSecondary,
                border: `1px solid ${colors.borderSubtle}`,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: colors.accentBg,
                    color: colors.accentPrimary,
                  }}
                >
                  <Shield size={24} />
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: colors.textMuted }}
                  >
                    Trusted by
                  </div>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: colors.accentPrimary }}
                  >
                    500+ Businesses
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
          style={{ borderColor: colors.borderSubtle }}
        >
          <div
            className="w-1.5 h-3 rounded-full animate-bounce"
            style={{ background: colors.accentPrimary }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;