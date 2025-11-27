import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { colors, borderRadius } from '../constants/theme';
import Button from '../components/Button';

const BookCall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    challenge: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted (MOCK):', formData);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        challenge: '',
      });
    }, 3000);
  };

  return (
    <div
      style={{
        background: colors.deepNavy,
        minHeight: '100vh',
        paddingTop: '80px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <h1
              className="text-5xl font-bold mb-6"
              style={{ color: colors.textPrimary }}
            >
              Book Your Free <span style={{ color: colors.accentPrimary }}>Strategy Call</span>
            </h1>
            <p
              className="text-xl mb-8"
              style={{ color: colors.textSecondary, lineHeight: 1.6 }}
            >
              Let's discuss your business challenges and identify automation opportunities that will deliver immediate ROI.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Calendar,
                  title: '30-Minute Strategy Session',
                  description: 'Focused discussion on your specific automation needs',
                },
                {
                  icon: CheckCircle,
                  title: 'Custom Automation Plan',
                  description: 'Walk away with actionable recommendations',
                },
                {
                  icon: Clock,
                  title: 'No Obligations',
                  description: 'Free consultation with zero pressure to buy',
                },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: colors.accentBg,
                        color: colors.accentPrimary,
                      }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3
                        className="font-semibold mb-1"
                        style={{ color: colors.textPrimary }}
                      >
                        {benefit.title}
                      </h3>
                      <p style={{ color: colors.textMuted }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mock Note */}
            <div
              className="p-4 rounded-lg"
              style={{
                background: colors.accentBg,
                border: `1px solid ${colors.accentPrimary}30`,
              }}
            >
              <p className="text-sm" style={{ color: colors.accentPrimary }}>
                🔒 <strong>Mock Form:</strong> This is a demo. In production, this would integrate with Calendly or your preferred booking system.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: colors.bgSecondary,
              border: `1px solid ${colors.borderSubtle}`,
            }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all"
                    style={{
                      background: colors.bgTertiary,
                      color: colors.textPrimary,
                      border: `1px solid ${colors.borderSubtle}`,
                    }}
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all"
                    style={{
                      background: colors.bgTertiary,
                      color: colors.textPrimary,
                      border: `1px solid ${colors.borderSubtle}`,
                    }}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all"
                    style={{
                      background: colors.bgTertiary,
                      color: colors.textPrimary,
                      border: `1px solid ${colors.borderSubtle}`,
                    }}
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all"
                    style={{
                      background: colors.bgTertiary,
                      color: colors.textPrimary,
                      border: `1px solid ${colors.borderSubtle}`,
                    }}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all"
                    style={{
                      background: colors.bgTertiary,
                      color: colors.textPrimary,
                      border: `1px solid ${colors.borderSubtle}`,
                    }}
                  >
                    <option value="">Select your industry</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="consulting">Consulting</option>
                    <option value="agency">Agency</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    What's your biggest challenge?
                  </label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{
                      background: colors.bgTertiary,
                      color: colors.textPrimary,
                      border: `1px solid ${colors.borderSubtle}`,
                    }}
                    placeholder="Tell us about your current challenges..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: colors.accentBg,
                    color: colors.accentPrimary,
                  }}
                >
                  <CheckCircle size={40} />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  Request Received!
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  We'll be in touch within 24 hours to schedule your call.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;