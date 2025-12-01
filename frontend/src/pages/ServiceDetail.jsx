import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../constants/services';
import { colors, borderRadius } from '../constants/theme';
import { ArrowLeft, Check } from 'lucide-react';
import Button from '../components/Button';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div style={{ background: colors.bgPrimary, minHeight: '100vh', paddingTop: '80px' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 style={{ color: colors.slateText }} className="text-3xl font-bold mb-4">Service not found</h2>
          <p style={{ color: colors.textSecondary }} className="mb-6">We couldn't find the service you're looking for.</p>
          <Link to="/services">
            <Button variant="primary">Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: colors.bgPrimary, minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link to="/services" className="inline-flex items-center space-x-2">
            <ArrowLeft size={18} style={{ color: colors.accentPrimary }} />
            <span style={{ color: colors.accentPrimary, fontWeight: 600 }}>Back to Services</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div
              style={{
                background: colors.bgSecondary,
                border: `1px solid ${colors.borderSubtle}`,
                borderRadius: borderRadius.lg,
                overflow: 'hidden',
              }}
            >
              <div style={{ height: 360, width: '100%', overflow: 'hidden' }}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8">
                <h1 className="text-4xl font-bold mb-4" style={{ color: colors.slateText }}>{service.title}</h1>
                <p className="mb-6" style={{ color: colors.textSecondary, lineHeight: 1.7 }}>{service.shortDescription}</p>

                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.slateText }}>Features</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check size={18} color={colors.accentGreen} />
                      <span style={{ color: colors.textSecondary }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.slateText }}>Deliverables</h3>
                <ul className="list-disc pl-5 mb-6" style={{ color: colors.textSecondary }}>
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="mb-1">{d}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.slateText }}>Use Cases</h3>
                <div className="flex flex-wrap gap-3">
                  {service.useCases.map((u, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-md text-sm"
                      style={{ background: `${colors.accentBg}`, color: colors.accentPrimary }}
                    >
                      {u}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div
              style={{
                background: colors.bgSecondary,
                border: `1px solid ${colors.borderSubtle}`,
                borderRadius: borderRadius.lg,
                padding: 20,
              }}
            >
              <div className="mb-4">
                <div className="text-sm font-semibold" style={{ color: colors.textSecondary }}>Estimated ROI</div>
                <div className="text-lg font-bold" style={{ color: colors.accentGreen }}>{service.roi}</div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-semibold mb-2" style={{ color: colors.textSecondary }}>Tools & Integrations</div>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((t, i) => (
                    <div key={i} className="px-2 py-1 text-sm rounded-md" style={{ background: colors.offWhite, color: colors.textPrimary, border: `1px solid ${colors.borderSubtle}` }}>{t}</div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link to="/book-call">
                  <Button variant="primary" size="md" className="w-full">Book a Call</Button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
