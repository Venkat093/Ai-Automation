export const navigationItems = [
  { label: 'Home', path: '/', type: 'link' },
  {
    label: 'Services',
    path: '/services',
    type: 'mega-menu',
    subItems: [
      {
        category: 'Foundation Services',
        items: [
          { label: 'AI Chatbots', path: '/services/ai-chatbots', icon: 'MessageSquare' },
          { label: 'Lead Qualification Workflows', path: '/services/lead-qualification', icon: 'Filter' },
          { label: 'Business Process Automations', path: '/services/business-automation', icon: 'Workflow' },
          { label: 'AI Content Systems', path: '/services/ai-content', icon: 'FileText' },
        ]
      },
      {
        category: 'Revenue Automations',
        items: [
          { label: 'Appointment Setter System', path: '/services/appointment-setter', icon: 'Calendar' },
          { label: 'CRM & Pipeline Automation', path: '/services/crm-automation', icon: 'Database' },
          { label: 'AI Sales Assistant', path: '/services/ai-sales-assistant', icon: 'Users' },
        ]
      }
    ]
  },
  { label: 'Case Studies', path: '/case-studies', type: 'link' },
  { label: 'Resources', path: '/resources', type: 'link' },
  { label: 'About', path: '/about', type: 'link' },
];

export const ctaButton = {
  label: 'Book a Call',
  path: '/book-call',
};