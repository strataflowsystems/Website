export const site = {
  company: 'Strataflow Systems',
  motto: 'Intelligent Solutions • Spatially Aware.',
  primaryCta: { label: 'Book a Discovery Call', href: '/contact' },
  secondaryCtas: [
    { label: 'Download Capability Deck', href: '/capability-deck.pdf' },
    { label: 'View Case Studies', href: '/case-studies' },
  ],
  announcement: {
    enabled: true,
    text: 'Now booking Q2 delivery windows for Microsoft 365 operations modernization.',
    href: '/contact',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'StrataBot Testing', href: '/stratabot-testing' },
  ],
  hero: {
    heading: 'Spatially aware automation for operations teams that must prove every action.',
    subheading:
      'Strataflow designs and deploys Microsoft 365-native workflows with evidence trails built in—so delivery, compliance, and audit readiness improve together.',
    proof: 'Trusted by operations-heavy teams in infrastructure, logistics, and regulated services.',
  },
  problem: [
    'Critical operational work is scattered across email, chats, spreadsheets, and disconnected trackers.',
    'Teams execute well but cannot consistently prove what happened, when, where, and by whom.',
    'Audit and governance requests become reactive fire drills instead of routine reporting.',
  ],
  pillars: [
    {
      title: 'Workflow Clarity',
      description: 'Map and simplify operational workflows into clear, role-based flows inside Microsoft 365.',
    },
    {
      title: 'Evidence by Default',
      description: 'Capture timestamps, approvals, files, and spatial context automatically with each process event.',
    },
    {
      title: 'Governance Built In',
      description: 'Embed controls, retention logic, and review checkpoints without slowing teams down.',
    },
  ],
  howItWorks: [
    { title: 'Discover', description: 'Rapid operational diagnostic and risk mapping.' },
    { title: 'Blueprint', description: 'Design target workflows, controls, and evidence ledger.' },
    { title: 'Deploy', description: 'Build with low-code automation, secure data model, and training.' },
    { title: 'Optimize', description: 'Monitor outcomes, tune process logic, and mature governance.' },
  ],
  industries: [
    { title: 'Infrastructure & Field Services', description: 'Work order governance, inspections, and traceability.' },
    { title: 'Logistics & Distribution', description: 'Exception handling, handoffs, and operational visibility.' },
    { title: 'Regulated Operations', description: 'Evidence-ready process execution for compliance-heavy teams.' },
  ],
  capabilities: [
    'Microsoft 365-first architecture',
    'Process automation with Power Platform',
    'Evidence-led activity and decision trails',
    'Spatial context mapping for field operations',
    'Governance and retention design',
    'Operational reporting and KPI instrumentation',
  ],
  services: [
    {
      name: 'Audit & Blueprint',
      outcomes: ['Current-state process map', 'Risk and evidence-gap register', 'Prioritized modernization roadmap'],
      deliverables: ['Executive diagnostic brief', 'Workflow architecture blueprint', '90-day action plan'],
      timeline: 'Typical timeline: 2–4 weeks',
      bestFor: 'Best for teams needing clarity before investing in automation.',
    },
    {
      name: 'Build & Automate',
      outcomes: ['Standardized operational workflows', 'Reduced manual coordination', 'Audit-ready data capture'],
      deliverables: ['Production-ready workflows', 'Role-based dashboards', 'Control and exception handling logic'],
      timeline: 'Typical timeline: 6–12 weeks',
      bestFor: 'Best for teams moving from process friction to scalable delivery.',
    },
    {
      name: 'Operate & Improve',
      outcomes: ['Sustained adoption and process reliability', 'Quarterly control reviews', 'Incremental automation gains'],
      deliverables: ['Managed optimization backlog', 'Governance cadence and reporting', 'Continuous training support'],
      timeline: 'Typical timeline: ongoing monthly cadence',
      bestFor: 'Best for organizations that need a partner to sustain operational excellence.',
    },
  ],
  engagementModel: [
    'Fixed-scope engagements for diagnostics and build phases.',
    'Retainer options for ongoing governance, optimization, and support.',
    'Blended model available for multi-site rollouts and phased transformations.',
  ],
  caseStudies: [
    {
      title: 'Regional Utility Operations Team',
      clientType: 'Infrastructure operator (anonymized)',
      challenge: 'Work approvals were delayed by fragmented handoffs and inconsistent records.',
      approach: 'Introduced M365 workflow orchestration with structured evidence capture and exception routing.',
      outcomes: ['20–30% faster cycle time', 'Up to 40% fewer missing approvals', 'Audit prep reduced from days to hours'],
      stack: 'SharePoint, Power Apps, Power Automate, Teams',
    },
    {
      title: 'Multi-Site Distribution Network',
      clientType: 'Logistics and distribution group (anonymized)',
      challenge: 'Site-level process variance created reporting blind spots.',
      approach: 'Standardized operational playbooks with location-aware forms and control checkpoints.',
      outcomes: ['15–25% reduction in exception handling time', 'Consistent cross-site evidence logs', 'Leadership reporting cadence stabilized'],
      stack: 'Power Platform, Microsoft Lists, Teams, Power BI',
    },
    {
      title: 'Regulated Services Program Office',
      clientType: 'Regulated services organization (anonymized)',
      challenge: 'High documentation burden and slow response to compliance inquiries.',
      approach: 'Implemented evidence ledger model with automated document retention and approval history.',
      outcomes: ['Up to 35% less manual documentation effort', 'Traceability across key controls', 'Improved internal audit confidence'],
      stack: 'SharePoint Premium, Purview, Power Automate, Dataverse',
    },
  ],
  faqs: [
    {
      q: 'Do you replace our existing systems?',
      a: 'No. We prioritize Microsoft 365-native patterns and integrate where necessary, preserving systems that already work.',
    },
    {
      q: 'What does “spatially aware” mean in practice?',
      a: 'Workflows capture operational context such as site, zone, route, or asset location, improving both execution and accountability.',
    },
    {
      q: 'How quickly can we start?',
      a: 'Discovery engagements can typically start within 2–3 weeks depending on internal stakeholder availability.',
    },
    {
      q: 'Can you support internal teams after deployment?',
      a: 'Yes. Our Operate & Improve model combines governance reviews, backlog prioritization, and enablement support.',
    },
  ],
};

export const seo = {
  baseUrl: 'https://www.strataflowsystems.com',
  pages: {
    home: {
      title: 'Strataflow Systems | Spatially Aware Workflow Automation',
      description: 'Strataflow Systems helps operations-heavy teams build Microsoft 365-native workflows with evidence and governance built in.',
      path: '/',
    },
    services: {
      title: 'Services | Strataflow Systems',
      description: 'Audit & Blueprint, Build & Automate, and Operate & Improve services for evidence-ready operations.',
      path: '/services',
    },
    caseStudies: {
      title: 'Case Studies | Strataflow Systems',
      description: 'Anonymized operational case studies showing conservative outcomes from M365 modernization.',
      path: '/case-studies',
    },
    about: {
      title: 'About | Strataflow Systems',
      description: 'Learn how Strataflow Systems brings an evidence-led, M365-native operating model to operational teams.',
      path: '/about',
    },
    contact: {
      title: 'Contact | Strataflow Systems',
      description: 'Book a discovery call and discuss your workflow automation and audit-readiness goals.',
      path: '/contact',
    },
    strataBotTesting: {
      title: 'StrataBot Testing | Strataflow Systems',
      description: 'Submit StrataBot testing responses using the embedded Microsoft Form.',
      path: '/stratabot-testing',
    },
    privacy: {
      title: 'Privacy Policy | Strataflow Systems',
      description: 'Privacy policy for Strataflow Systems website and communications.',
      path: '/privacy',
    },
    terms: {
      title: 'Terms of Use | Strataflow Systems',
      description: 'Terms of use for Strataflow Systems website.',
      path: '/terms',
    },
  },
};
