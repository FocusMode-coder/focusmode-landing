export interface ServiceOption {
  title: string;
  description: string;
  price: string;
  stripeLink: string;
  featured?: boolean;
}

export interface ServiceData {
  slug: string;
  icon: string;
  outcomes: string[];
  options: ServiceOption[];
}

export const serviceData: Record<string, ServiceData> = {
  'web-development': {
    slug: 'web-development',
    icon: '💻',
    outcomes: [
      'Professional website live within 2 weeks',
      'Mobile-first, SEO-optimized design',
      'Integrated analytics and contact forms',
    ],
    options: [
      {
        title: 'New Website',
        description: 'Brand new professional website built from scratch — custom design, fast loading, and conversion optimized.',
        price: 'From $997',
        stripeLink: 'https://buy.stripe.com/test_placeholder_new_website',
        featured: true,
      },
      {
        title: 'Fix Your Website',
        description: 'Diagnose and fix issues with your existing site — speed, design, SEO, and functionality improvements.',
        price: 'From $297',
        stripeLink: 'https://buy.stripe.com/test_placeholder_fix_website',
      },
      {
        title: 'Hosting & Deployment',
        description: 'Professional hosting setup and deployment on Vercel, Render, or AWS with CI/CD pipelines.',
        price: 'From $97/mo',
        stripeLink: 'https://buy.stripe.com/test_placeholder_hosting',
      },
    ],
  },
  'automation': {
    slug: 'automation',
    icon: '⚡',
    outcomes: [
      'Save 10+ hours per week with automated workflows',
      'Seamless integration with your existing tools',
      'Custom AI-powered automation pipelines',
    ],
    options: [
      {
        title: 'Workflow Automation',
        description: 'End-to-end n8n workflow setup — connect your apps, automate repetitive tasks, and boost productivity.',
        price: 'From $597',
        stripeLink: 'https://buy.stripe.com/test_placeholder_workflow',
        featured: true,
      },
      {
        title: 'AI Integration',
        description: 'Integrate AI models (GPT, Claude, etc.) into your business processes for intelligent automation.',
        price: 'From $797',
        stripeLink: 'https://buy.stripe.com/test_placeholder_ai_integration',
      },
      {
        title: 'Automation Audit',
        description: 'Review your current processes and identify top automation opportunities with a detailed action plan.',
        price: 'From $197',
        stripeLink: 'https://buy.stripe.com/test_placeholder_audit',
      },
    ],
  },
  'bots-ai-agents': {
    slug: 'bots-ai-agents',
    icon: '🤖',
    outcomes: [
      'AI agents working 24/7 to handle customer queries',
      'Custom-trained on your business data',
      'Multi-platform deployment (web, WhatsApp, Slack)',
    ],
    options: [
      {
        title: 'Customer Support Bot',
        description: 'AI-powered chatbot trained on your products/services — handles FAQs, leads, and support tickets.',
        price: 'From $897',
        stripeLink: 'https://buy.stripe.com/test_placeholder_support_bot',
        featured: true,
      },
      {
        title: 'Sales AI Agent',
        description: 'Autonomous sales agent that qualifies leads, follows up, and books meetings — all on autopilot.',
        price: 'From $1,297',
        stripeLink: 'https://buy.stripe.com/test_placeholder_sales_agent',
      },
      {
        title: 'Custom AI Agent',
        description: 'Fully custom AI agent built to your specific use case — any task, any platform, any workflow.',
        price: 'Custom Pricing',
        stripeLink: 'https://buy.stripe.com/test_placeholder_custom_agent',
      },
    ],
  },
  'low-voltage': {
    slug: 'low-voltage',
    icon: '🔌',
    outcomes: [
      'Professional installation by certified technicians',
      'Smart home and business automation integration',
      'Full documentation and warranty included',
    ],
    options: [
      {
        title: 'Structured Cabling',
        description: 'Professional Cat6/Cat6A network cabling installation for home or office — clean, certified, reliable.',
        price: 'From $497',
        stripeLink: 'https://buy.stripe.com/test_placeholder_cabling',
        featured: true,
      },
      {
        title: 'Smart Systems',
        description: 'Smart lighting, security cameras, access control, and home automation system installation.',
        price: 'From $697',
        stripeLink: 'https://buy.stripe.com/test_placeholder_smart',
      },
      {
        title: 'AV Systems',
        description: 'Professional audio/video system design and installation for home theaters or conference rooms.',
        price: 'From $397',
        stripeLink: 'https://buy.stripe.com/test_placeholder_av',
      },
    ],
  },
  'real-estate': {
    slug: 'real-estate',
    icon: '🏠',
    outcomes: [
      'Automated lead generation and follow-up systems',
      'Custom property listing websites',
      'CRM integration and deal tracking automation',
    ],
    options: [
      {
        title: 'Agent Website',
        description: 'Professional real estate agent website with property listings, lead capture, and CRM integration.',
        price: 'From $1,297',
        stripeLink: 'https://buy.stripe.com/test_placeholder_agent_site',
        featured: true,
      },
      {
        title: 'Lead Automation',
        description: 'Automated lead nurturing system — capture, qualify, and follow up with leads on autopilot.',
        price: 'From $697',
        stripeLink: 'https://buy.stripe.com/test_placeholder_lead_auto',
      },
      {
        title: 'Marketing System',
        description: 'Complete digital marketing setup — social media automation, email campaigns, and ad management.',
        price: 'From $497',
        stripeLink: 'https://buy.stripe.com/test_placeholder_marketing',
      },
    ],
  },
  'youtube-focusmode': {
    slug: 'youtube-focusmode',
    icon: '🎥',
    outcomes: [
      'Professional YouTube channel setup and branding',
      'Content strategy and growth roadmap',
      'Automated publishing and analytics tracking',
    ],
    options: [
      {
        title: 'Channel Launch',
        description: 'Full YouTube channel setup — branding, SEO optimization, content calendar, and launch strategy.',
        price: 'From $597',
        stripeLink: 'https://buy.stripe.com/test_placeholder_channel',
        featured: true,
      },
      {
        title: 'Content Strategy',
        description: 'Custom content strategy, keyword research, and 90-day publishing roadmap for channel growth.',
        price: 'From $297',
        stripeLink: 'https://buy.stripe.com/test_placeholder_strategy',
      },
      {
        title: 'Automation Setup',
        description: 'Automated video publishing, thumbnail generation, and cross-platform content distribution.',
        price: 'From $397',
        stripeLink: 'https://buy.stripe.com/test_placeholder_yt_auto',
      },
    ],
  },
};

export const servicesList = [
  { slug: 'web-development', key: 'web_dev' },
  { slug: 'automation', key: 'automation' },
  { slug: 'bots-ai-agents', key: 'bots' },
  { slug: 'low-voltage', key: 'low_voltage' },
  { slug: 'real-estate', key: 'real_estate' },
  { slug: 'youtube-focusmode', key: 'youtube' },
];
