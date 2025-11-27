import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../constants/faq';
import { colors, borderRadius } from '../constants/theme';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-24"
      style={{ background: "rgb(204, 210, 215)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: colors.slateText }}
          >
            Frequently Asked <span style={{ color: colors.primaryBlue }}>Questions</span>
          </h2>
          <p
            className="text-xl"
            style={{ color: colors.textMuted, lineHeight: 1.6 }}
          >
            Everything you need to know about our AI automation services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: colors.bgSecondary,
                border: `1px solid ${openIndex === index ? colors.accentPrimary : colors.borderSubtle}`,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between transition-all duration-200"
                style={{
                  background: openIndex === index ? colors.bgTertiary : 'transparent',
                }}
              >
                <span
                  className="text-lg font-semibold pr-8"
                  style={{
                    color: openIndex === index ? colors.accentPrimary : colors.textPrimary,
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  style={{
                    color: openIndex === index ? colors.accentPrimary : colors.textMuted,
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <div
                  className="px-6 pb-6"
                  style={{
                    color: colors.textSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p
            className="text-lg mb-4"
            style={{ color: colors.textMuted }}
          >
            Still have questions?
          </p>
          <a
            href="/book-call"
            className="inline-block px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: colors.primaryBlue,
              color: colors.textPrimary,
            }}
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;