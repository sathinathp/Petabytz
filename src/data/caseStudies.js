export const caseStudiesData = [
  {
    id: "music-streaming-kubernetes",
    title: "Migration of High-Traffic Music Streaming Service to Kubernetes",
    category: "Cloud & Kubernetes",
    client: "Global Entertainment Platform",
    image: "/images/casestudy/kubernetes.png",
    challenge: "Handling millions of concurrent audio streams during peak hours with unpredictable latency and high VM infrastructure spend.",
    solution: "Designed automated multi-region Amazon EKS clusters with Istio service mesh, Horizontal Pod Autoscaling (HPA), and Redis caching layers.",
    results: [
      "40% reduction in monthly cloud infrastructure compute costs",
      "Sub-20ms audio buffer latency globally",
      "Zero downtime during high-profile album launches and live stream events"
    ],
    tags: ["Kubernetes", "AWS EKS", "Istio", "Microservices"]
  },
  {
    id: "ecommerce-devops",
    title: "Implementing Automated DevOps & CI/CD for Tier-1 E-Commerce",
    category: "DevOps Automation",
    client: "Leading Retail Enterprise",
    image: "/images/casestudy/devops.png",
    challenge: "Manual release cycles took 3 weeks, leading to delayed promotional rollouts and frequent production deployment rollbacks.",
    solution: "Implemented end-to-end GitOps pipelines with GitHub Actions, Terraform IaC, and automated Docker staging environments.",
    results: [
      "Deployment frequency increased from once a month to multiple times daily",
      "92% reduction in defect escape rate to production",
      "Automated rollbacks within 30 seconds of any anomaly"
    ],
    tags: ["DevOps", "CI/CD", "Terraform", "GitHub Actions"]
  },
  {
    id: "email-migration-m365",
    title: "Seamless Migration of 1,000+ Enterprise Mailboxes to Microsoft 365",
    category: "Digital Workplace",
    client: "Multinational Financial Services Firm",
    image: "/images/casestudy/seamless.png",
    challenge: "Fragmented legacy on-premise Exchange servers with escalating storage maintenance costs and strict compliance mandates.",
    solution: "Staged cutover migration to Microsoft 365 E5 with automated DLP policies, Intune MDM, and single sign-on via Entra ID.",
    results: [
      "100% data integrity with zero lost emails or calendar items",
      "Complete user cutover over a single weekend with zero employee downtime",
      "Full compliance with SEC and FINRA financial archiving standards"
    ],
    tags: ["Microsoft 365", "Exchange Online", "Intune", "Security"]
  },
  {
    id: "itsm-l1-l2-elevation",
    title: "Transforming ITSM L1 & L2 Support Operations for Global Workforce",
    category: "ITSM Managed Services",
    client: "Global Logistics & Supply Chain Provider",
    image: "/images/casestudy/l1support.png",
    challenge: "Surging ticket volumes and average resolution times exceeding 48 hours for 5,000+ distributed employees.",
    solution: "Deployed 24/7 follow-the-sun IT Service Desk with automated Slack bot triage and standardized ITIL problem resolution workflows.",
    results: [
      "Average ticket resolution time dropped from 48h to under 4 hours",
      "88% first-contact resolution on L1 inquiries",
      "Employee satisfaction (CSAT) increased from 68% to 96%"
    ],
    tags: ["ITSM", "L1 Support", "L2 Support", "ITIL"]
  },
  {
    id: "salesforce-crm-transformation",
    title: "Data-Powered Sales Transformation with Intelligent Salesforce CRM",
    category: "Salesforce Solutions",
    client: "B2B SaaS Technology Leader",
    image: "/images/casestudy/salesforce.png",
    challenge: "Disjointed lead pipelines, manual quoting delays, and lack of visibility into global sales rep quotas.",
    solution: "Implemented customized Salesforce Sales Cloud with CPQ rules, automated lead scoring, and bi-directional ERP data sync.",
    results: [
      "35% increase in lead-to-opportunity conversion velocity",
      "Quote generation time reduced from 2 days to 5 minutes",
      "Executive real-time revenue forecast accuracy improved by 40%"
    ],
    tags: ["Salesforce", "Sales Cloud", "CPQ", "Tableau CRM"]
  },
  {
    id: "streamlining-it-infrastructure",
    title: "Data Center Consolidation and Hybrid Cloud Architecture",
    category: "Cloud Migration",
    client: "Healthcare Systems Provider",
    image: "/images/casestudy/itinfrastructure.png",
    challenge: "Aging on-premise hardware prone to component failures and escalating data center co-location lease costs.",
    solution: "Consolidated 150+ physical servers into Microsoft Azure with Azure Site Recovery (ASR) and HIPAA-compliant encryption.",
    results: [
      "55% reduction in total data center operating expenditure",
      "99.999% uptime achieved across all patient care portals",
      "Automated failover RTO reduced to less than 15 minutes"
    ],
    tags: ["Azure", "Data Center", "Hybrid Cloud", "Disaster Recovery"]
  }
];
