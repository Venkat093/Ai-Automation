import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { caseStudies } from '../constants/caseStudies';
import { colors, borderRadius } from '../constants/theme';

const CaseStudies = () => {
  return (
    <div
      style={{
        background: colors.deepNavy,
        minHeight: '100vh',
        paddingTop: '80px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: colors.textPrimary }}
          >
            Success <span style={{ color: colors.accentPrimary }}>Stories</span>
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.textSecondary, lineHeight: 1.6 }}
          >
            Real businesses. Real results. See how AI automation has transformed operations and driven measurable growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                background: colors.bgSecondary,
                border: `1px solid ${colors.borderSubtle}`,
              }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.7)' }}
                  />
                  {/* Industry Badge */}
                  <div
                    className="absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: colors.accentPrimary,
                      color: colors.bgPrimary,
                    }}
                  >
                    {study.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <h2
                    className="text-3xl font-bold mb-4"
                    style={{ color: colors.textPrimary }}
                  >
                    {study.title}
                  </h2>
                  <p
                    className="text-lg mb-3"
                    style={{ color: colors.textMuted }}
                  >
                    <strong style={{ color: colors.textSecondary }}>Client:</strong> {study.client}
                  </p>

                  <div className="mb-6">
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: colors.accentPrimary }}
                    >
                      Challenge
                    </h3>
                    <p
                      style={{ color: colors.textSecondary, lineHeight: 1.6 }}
                    >
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ color: colors.accentPrimary }}
                    >
                      Solution
                    </h3>
                    <p
                      style={{ color: colors.textSecondary, lineHeight: 1.6 }}
                    >
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, index) => (
                      <div key={index}>
                        <div
                          className="text-3xl font-bold mb-1"
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

                  {/* Testimonial */}
                  {study.testimonial && (
                    <div
                      className="p-6 rounded-xl mb-6"
                      style={{
                        background: colors.bgTertiary,
                        borderLeft: `4px solid ${colors.accentPrimary}`,
                      }}
                    >
                      <p
                        className="italic mb-3"
                        style={{ color: colors.textSecondary, lineHeight: 1.6 }}
                      >
                        "{study.testimonial.quote}"
                      </p>
                      <div style={{ color: colors.textMuted, fontSize: '14px' }}>
                        <strong style={{ color: colors.textPrimary }}>
                          {study.testimonial.author}
                        </strong>
                        , {study.testimonial.role}
                      </div>
                    </div>
                  )}

                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: colors.accentBg,
                          color: colors.accentPrimary,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p
            className="text-xl mb-6"
            style={{ color: colors.textSecondary }}
          >
            Ready to achieve similar results?
          </p>
          <Link
            to="/book-call"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: colors.accentPrimary,
              color: colors.bgPrimary,
            }}
          >
            <span>Book Your Strategy Call</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;