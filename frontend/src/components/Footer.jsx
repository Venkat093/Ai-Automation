import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { colors, borderRadius } from '../constants/theme';

const Footer = () => {
  const footerLinks = {
    services: [
      { label: 'AI Chatbots', path: '/services/ai-chatbots' },
      { label: 'Lead Qualification', path: '/services/lead-qualification' },
      { label: 'Business Automation', path: '/services/business-automation' },
      { label: 'AI Content Systems', path: '/services/ai-content' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'Resources', path: '/resources' },
      { label: 'Contact', path: '/book-call' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <footer
      className="mt-32 border-t"
      style={{
        background: colors.bgSecondary,
        borderColor: colors.borderSubtle,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4" style={{ color: colors.accentPrimary }}>
              AI<span style={{ color: colors.textPrimary }}>Automate</span>
            </div>
            <p className="mb-6" style={{ color: colors.textMuted, lineHeight: 1.6 }}>
              We build AI chatbots, lead systems, and automated workflows that save time, increase revenue, and operate 24/7.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: borderRadius.sm,
                  background: colors.bgTertiary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.textMuted,
                  transition: 'all 0.2s ease',
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: borderRadius.sm,
                  background: colors.bgTertiary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.textMuted,
                  transition: 'all 0.2s ease',
                }}
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:hello@aiautomate.com"
                className="social-link"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: borderRadius.sm,
                  background: colors.bgTertiary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.textMuted,
                  transition: 'all 0.2s ease',
                }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: colors.textPrimary }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition-colors duration-200"
                    style={{ color: colors.textMuted }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: colors.textPrimary }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition-colors duration-200"
                    style={{ color: colors.textMuted }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: colors.textPrimary }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition-colors duration-200"
                    style={{ color: colors.textMuted }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: colors.borderSubtle }}>
          <p className="text-center text-sm" style={{ color: colors.textMuted }}>
            © {new Date().getFullYear()} AI Automate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;