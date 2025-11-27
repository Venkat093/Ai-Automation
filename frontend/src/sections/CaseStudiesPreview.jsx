import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { caseStudies } from '../constants/caseStudies';
import { colors, borderRadius } from '../constants/theme';
import Button from '../components/Button';

const CaseStudiesPreview = () => {
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
            Real Results from <span style={{ color: colors.accentPrimary }}>Real Businesses</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.textSecondary, lineHeight: 1.6 }}
          >
            See how we've helped businesses across industries automate operations and drive measurable growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px]"
              style={{
                background: colors.bgSecondary,
                border: `1px solid ${colors.borderSubtle}`,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ filter: 'brightness(0.7)' }}
                />
                {/* Industry Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: colors.accentPrimary,
                    color: colors.bgPrimary,
                  }}
                >
                  {study.industry}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  {study.title}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: colors.textSecondary, lineHeight: 1.6 }}
                >
                  {study.challenge}
                </p>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.slice(0, 2).map((result, index) => (
                    <div key={index}>
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: colors.accentGreen }}
                      >
                        {result.metric}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: colors.textMuted }}
                      >
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center space-x-2 font-medium group-hover:translate-x-2 transition-transform duration-300"
                  style={{ color: colors.accentPrimary }}
                >
                  <span>Read full case study</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link to="/case-studies">
            <Button variant="primary" size="lg">
              View All Case Studies
              <TrendingUp size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;