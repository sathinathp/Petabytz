export const servicesData = {
  // Cloud Transformation
  "cloud-transformation": {
    slug: "cloud-transformation",
    category: "Cloud Transformation",
    title: "Cloud Transformation Services",
    subtitle: "Accelerate your digital evolution with enterprise-grade multi-cloud strategies, seamless migration, and modern infrastructure.",
    heroImage: "/images/new/digital-transformation.png",
    overview: "PetaBytz Technologies empowers enterprises to navigate the complexities of cloud adoption. From legacy workload refactoring to modern serverless microservices architectures on AWS, Azure, and Google Cloud, we ensure zero disruption and maximum return on investment.",
    features: [
      { title: "Strategic Roadmap", desc: "Holistic cloud readiness assessment and customized multi-phase modernization blueprint." },
      { title: "Automated Migration", desc: "Proven framework minimizing downtime with robust rollback mechanisms." },
      { title: "FinOps & Cost Optimization", desc: "Continuous right-sizing, reserved capacity management, and budget telemetry." },
      { title: "Cloud Security & Governance", desc: "Zero-trust architecture, automated compliance guardrails, and IAM policies." }
    ],
    benefits: [
      "Up to 45% reduction in total infrastructure operating expenses",
      "99.99% high availability and automated disaster recovery",
      "Accelerated time-to-market for new customer-facing digital services",
      "Continuous compliance with SOC2, ISO 27001, and GDPR standards"
    ],
    relatedServices: ["cloud-migration-services", "cloud-optimization", "data-center-modernization", "application-mainframe-modernization"]
  },

  "cloud-migration-services": {
    slug: "cloud-migration-services",
    category: "Cloud Transformation",
    title: "Cloud Migration Services & Strategy",
    subtitle: "Migrate complex enterprise workloads, databases, and core business applications with zero downtime.",
    heroImage: "/images/services/cloud-migration.png",
    overview: "Our 6R migration methodology (Rehost, Replatform, Repurchase, Refactor, Retain, Retire) guarantees safe, compliant, and cost-effective migration to public, private, or hybrid cloud environments.",
    features: [
      { title: "Discovery & Dependency Mapping", desc: "Automated asset scanning and inter-application communication analysis." },
      { title: "Database Migration", desc: "Live replication and conversion for Oracle, SQL Server, MySQL, and PostgreSQL." },
      { title: "Zero-Downtime Cutover", desc: "Synchronized dual-run testing and seamless DNS switches." },
      { title: "Post-Migration Validation", desc: "Performance benchmarking, security testing, and operational handover." }
    ],
    benefits: [
      "Near-zero disruption to daily business operations",
      "Seamless integration with modern CI/CD pipelines",
      "Automated backups and geo-redundancy"
    ],
    relatedServices: ["cloud-optimization", "data-center-modernization", "aws-managed-services"]
  },

  "cloud-optimization": {
    slug: "cloud-optimization",
    category: "Cloud Transformation",
    title: "Cloud Optimization Services",
    subtitle: "Maximize cloud performance and eliminate wasted spend with real-time FinOps intelligence.",
    heroImage: "/images/services/cloud-optimization.png",
    overview: "PetaBytz's Cloud Optimization services audit, streamline, and continuously tune your cloud consumption. We align compute, storage, and networking with real-world business demands.",
    features: [
      { title: "FinOps Cost Governance", desc: "Granular cost attribution, anomaly detection, and automated budget alerts." },
      { title: "Resource Right-Sizing", desc: "Eliminating zombie instances, idle volumes, and over-provisioned clusters." },
      { title: "Performance Benchmarking", desc: "Latency reduction, load balancer optimization, and caching strategies." },
      { title: "License Management", desc: "BYOL optimization and license compliance verification." }
    ],
    benefits: [
      "Immediate 30-50% savings on monthly cloud invoices",
      "Enhanced application responsiveness and reduced latency",
      "Clear visibility and accountability across business units"
    ],
    relatedServices: ["cloud-transformation", "aws-managed-services", "azure-managed-services"]
  },

  "data-center-modernization": {
    slug: "data-center-modernization",
    category: "Cloud Transformation",
    title: "Data Center Modernization",
    subtitle: "Transform legacy hardware into software-defined, hyper-converged, and cloud-ready infrastructure.",
    heroImage: "/images/services/data-center.png",
    overview: "Modernize your on-premise infrastructure with software-defined networking, automated virtualization, and hybrid-cloud integration for optimal agility and security.",
    features: [
      { title: "Hyper-Converged Infrastructure (HCI)", desc: "Consolidate compute, storage, and networking into unified nodes." },
      { title: "Software-Defined Networking (SDN)", desc: "Dynamic bandwidth provisioning and micro-segmentation security." },
      { title: "Hybrid Cloud Integration", desc: "Seamless bridge between private data centers and AWS/Azure public clouds." }
    ],
    benefits: [
      "60% reduction in physical server footprint and power consumption",
      "Rapid self-service provisioning of VMs and containers",
      "Enhanced disaster resiliency and backup automation"
    ],
    relatedServices: ["cloud-transformation", "business-continuity-and-disaster-recovery"]
  },

  "application-mainframe-modernization": {
    slug: "application-mainframe-modernization",
    category: "Cloud Transformation",
    title: "Application & Mainframe Modernization",
    subtitle: "Transform monolithic applications and legacy mainframes into modular, cloud-native microservices.",
    heroImage: "/images/services/app-modernization.png",
    overview: "Unlock the agility of modern cloud architectures without losing years of business logic. PetaBytz migrates COBOL, RPG, and legacy monolithic codebases into scalable containers and microservices.",
    features: [
      { title: "Legacy Code Refactoring", desc: "Automated translation and modern API wrapping for mainframe applications." },
      { title: "Microservices Architecture", desc: "Decompose monoliths into decoupled, resilient REST/gRPC services." },
      { title: "Database Modernization", desc: "Migrate hierarchical DBs (IMS, DB2) to modern distributed SQL and NoSQL." }
    ],
    benefits: [
      "Drastic reduction in expensive MIPS mainframe licensing costs",
      "Faster development cycles and agile feature releases",
      "Seamless API integration with mobile, web, and AI services"
    ],
    relatedServices: ["cloud-migration-services", "kubernetes-services", "devops"]
  },

  "business-continuity-and-disaster-recovery": {
    slug: "business-continuity-and-disaster-recovery",
    category: "Cloud Transformation",
    title: "Business Continuity & Disaster Recovery (BCDR)",
    subtitle: "Protect business revenue and data integrity with near-zero RTO and RPO automated disaster recovery.",
    heroImage: "/images/services/bcdr.png",
    overview: "Disasters happen unexpectedly. PetaBytz designs resilient disaster recovery blueprints with automated failover, geo-redundant live data replication, and continuous disaster simulation.",
    features: [
      { title: "Disaster Recovery as a Service (DRaaS)", desc: "Fully managed cloud failover targets for critical enterprise databases and systems." },
      { title: "Continuous Replication", desc: "Real-time block-level and database stream replication to secondary regions." },
      { title: "Automated Drill Testing", desc: "Simulate outages with zero production downtime to guarantee SLA compliance." }
    ],
    benefits: [
      "Sub-minute Recovery Time Objective (RTO) and Recovery Point Objective (RPO)",
      "Protection against ransomware, hardware failures, and regional disasters",
      "Regulatory compliance with financial, healthcare, and enterprise standards"
    ],
    relatedServices: ["cloud-transformation", "azure-managed-services", "aws-managed-services"]
  },

  // Digital Transformation
  "digital-transformation": {
    slug: "digital-transformation",
    category: "Digital Transformation",
    title: "Digital Transformation Services",
    subtitle: "Rethink business models, automate workflows, and empower teams with next-generation digital platforms.",
    heroImage: "/images/new/digital-transformation.png",
    overview: "We partner with global enterprises to drive digital innovation. From modern collaboration suites to enterprise data analytics and automated DevOps, we build the technological foundation for continuous growth.",
    features: [
      { title: "Workplace Modernization", desc: "Unify hybrid teams with Microsoft 365, Teams, and secure remote tools." },
      { title: "Intelligent Process Automation", desc: "Streamline manual tasks with low-code and automated bots." },
      { title: "Enterprise Data Fabric", desc: "Centralize business metrics into predictive dashboards and analytics." }
    ],
    benefits: [
      "Enhanced employee productivity and frictionless collaboration",
      "Rapid prototyping and deployment of digital customer touchpoints",
      "Data-driven decision making across every department"
    ],
    relatedServices: ["microsoft-365", "data-analytics", "devops", "kubernetes-services"]
  },

  "microsoft-365": {
    slug: "microsoft-365",
    category: "Digital Transformation",
    title: "Microsoft 365 Consulting & Migration",
    subtitle: "Maximize productivity, enhance collaboration, and secure your workforce with tailored Microsoft 365 solutions.",
    heroImage: "/images/microsoft365.png",
    overview: "As a trusted Microsoft Solutions Partner, PetaBytz provides end-to-end M365 planning, tenant migration, SharePoint architecture, Microsoft Teams telephony, and Microsoft Purview security governance.",
    features: [
      { title: "Tenant-to-Tenant & Exchange Migration", desc: "Zero-data-loss mailbox, SharePoint, and OneDrive migrations." },
      { title: "Security & Endpoint Management", desc: "Microsoft Intune, Defender XDR, and Conditional Access policies." },
      { title: "Copilot for Microsoft 365", desc: "Readiness assessments, governance frameworks, and employee adoption." },
      { title: "Power Platform Automation", desc: "Automate approvals, workflows, and portals with Power Apps & Power Automate." }
    ],
    benefits: [
      "Unified communication and seamless hybrid work enablement",
      "Zero-trust security protecting email, devices, and intellectual property",
      "24/7 dedicated support and tenant health monitoring"
    ],
    relatedServices: ["digital-transformation", "low-code-no-code", "l1-support-services"]
  },

  "sap-service": {
    slug: "sap-service",
    category: "Digital Transformation",
    title: "SAP Solutions & S/4 HANA Upgrades",
    subtitle: "Modernize ERP systems, migrate SAP workloads to Azure, and optimize business processes.",
    heroImage: "/images/services/sap.png",
    overview: "PetaBytz delivers comprehensive SAP implementation, modernization, and managed services. We help enterprises transition from legacy SAP ECC to SAP S/4HANA on cloud with minimal business disruption.",
    features: [
      { title: "SAP on Azure / AWS Migration", desc: "High-performance certified infrastructure for critical SAP databases." },
      { title: "S/4HANA Upgrades", desc: "Database conversion, custom code remediation, and business process re-engineering." },
      { title: "SAP Managed Support", desc: "24/7 SAP Basis administration, patch management, and performance monitoring." }
    ],
    benefits: [
      "Real-time analytics and transaction processing in-memory",
      "Reduced total cost of ownership through elastic cloud scaling",
      "Seamless connectivity with third-party CRM and supply chain systems"
    ],
    relatedServices: ["digital-transformation", "azure-managed-services", "data-analytics"]
  },

  "data-analytics": {
    slug: "data-analytics",
    category: "Digital Transformation",
    title: "Data Analytics & Engineering Services",
    subtitle: "Turn enterprise data into real-time business intelligence, interactive dashboards, and predictive models.",
    heroImage: "/images/services/data-analytics.png",
    overview: "Harness the true power of your data assets. PetaBytz builds scalable modern data warehouses (Snowflake, Databricks, BigQuery, Synapse) and delivers executive dashboards with PowerBI and Tableau.",
    features: [
      { title: "Modern Data Warehousing", desc: "Serverless data lakes and real-time streaming architectures." },
      { title: "ETL / ELT Pipelines", desc: "Automated data ingestion from hundreds of disparate SaaS and DB sources." },
      { title: "Executive Dashboards", desc: "Interactive KPIs, real-time alerts, and self-service analytics portals." }
    ],
    benefits: [
      "Single source of truth across sales, finance, and operations",
      "Sub-second query performance on terabytes of structured and unstructured data",
      "Predictive customer churn, demand forecasting, and inventory optimization"
    ],
    relatedServices: ["ai-solutions", "gen-ai-services", "microsoft-365"]
  },

  "devops": {
    slug: "devops",
    category: "Digital Transformation",
    title: "DevOps & CI/CD Automation Services",
    subtitle: "Accelerate software delivery velocity, enhance reliability, and automate infrastructure with GitOps.",
    heroImage: "/images/services/devops.png",
    overview: "PetaBytz DevOps consulting automates the bridge between software development and IT operations. We implement robust CI/CD pipelines, Infrastructure as Code (Terraform, Ansible), and automated security scanning (DevSecOps).",
    features: [
      { title: "Automated CI/CD Pipelines", desc: "GitHub Actions, GitLab CI, and Azure DevOps for rapid, reliable releases." },
      { title: "Infrastructure as Code (IaC)", desc: "Repeatable, version-controlled cloud provisioning with Terraform and Pulumi." },
      { title: "DevSecOps Integration", desc: "Automated vulnerability scanning in code (SAST) and runtime dependencies (DAST)." }
    ],
    benefits: [
      "Up to 10x faster deployment frequency with lower failure rates",
      "Elimination of manual configuration drift and human errors",
      "Comprehensive telemetry, automated rollbacks, and log aggregation"
    ],
    relatedServices: ["kubernetes-services", "cloud-transformation", "aws-managed-services"]
  },

  "kubernetes-services": {
    slug: "kubernetes-services",
    category: "Digital Transformation",
    title: "Kubernetes & Container Services",
    subtitle: "Enterprise container orchestration, microservices governance, and automated scaling on EKS, AKS, & GKE.",
    heroImage: "/images/services/kubernetes.png",
    overview: "Master container orchestration at enterprise scale. PetaBytz designs production-grade Kubernetes clusters with service mesh (Istio), automated pod autoscaling, zero-trust network policies, and persistent storage.",
    features: [
      { title: "Managed Kubernetes Setup", desc: "Production-ready Amazon EKS, Azure AKS, and Google Cloud GKE clusters." },
      { title: "Service Mesh & Observability", desc: "Istio, Prometheus, Grafana, and Jaeger for end-to-end trace visibility." },
      { title: "GitOps & ArgoCD", desc: "Declarative cluster state management and automated synchronization." }
    ],
    benefits: [
      "Instantaneous horizontal pod autoscaling handling traffic spikes",
      "Portability across multi-cloud and on-premise hybrid environments",
      "Self-healing container health checks and zero-downtime rolling updates"
    ],
    relatedServices: ["devops", "cloud-transformation", "application-managed-services"]
  },

  "low-code-no-code": {
    slug: "low-code-no-code",
    category: "Digital Transformation",
    title: "Low Code / No Code Application Development",
    subtitle: "Build enterprise applications, portals, and workflow automations up to 5x faster.",
    heroImage: "/images/services/low-code.png",
    overview: "Empower business teams and accelerate software delivery. We leverage platforms like Microsoft Power Apps, OutSystems, and Mendix to rapidly build secure, cross-platform enterprise applications.",
    features: [
      { title: "Rapid Application Prototyping", desc: "Turn business logic into functional web and mobile apps in days." },
      { title: "Custom Connector Integration", desc: "Bridge low-code applications with enterprise ERP, CRM, and SQL databases." },
      { title: "Enterprise Governance", desc: "Role-based access control, auditing, and lifecycle management." }
    ],
    benefits: [
      "70% reduction in development costs and time-to-launch",
      "Empowered business units solving departmental needs rapidly",
      "Fully responsive designs for mobile, tablet, and desktop"
    ],
    relatedServices: ["microsoft-365", "digital-transformation"]
  },

  // Managed Services
  "managed-services": {
    slug: "managed-services",
    category: "Managed Services",
    title: "IT Managed Services & Cloud Operations",
    subtitle: "24/7 proactive monitoring, guaranteed SLAs, and certified IT support for enterprise infrastructure.",
    heroImage: "/images/services/managed-services.png",
    overview: "Focus on your core business while PetaBytz manages your entire IT ecosystem. Our global Network Operations Center (NOC) and Security Operations Center (SOC) ensure 99.99% uptime, rapid incident resolution, and continuous optimization.",
    features: [
      { title: "24/7/365 Proactive Monitoring", desc: "Automated anomaly detection preventing outages before they impact users." },
      { title: "Guaranteed SLA Response", desc: "Tiered SLA commitments with 15-minute response times for critical incidents." },
      { title: "Patch & Vulnerability Management", desc: "Automated OS, firmware, and software security patching." },
      { title: "Dedicated Account Management", desc: "Monthly health reviews, capacity forecasting, and strategic roadmap planning." }
    ],
    benefits: [
      "Drastic reduction in unplanned downtime and system outages",
      "Predictable operational expenditures with transparent monthly pricing",
      "Access to certified cloud architects, security analysts, and database admins"
    ],
    relatedServices: ["aws-managed-services", "azure-managed-services", "soc-and-noc", "itsm-managed-services"]
  },

  "aws-managed-services": {
    slug: "aws-managed-services",
    category: "Managed Services",
    title: "AWS Managed Services (AMS)",
    subtitle: "Certified AWS Premier Cloud Partner managing your architecture, security, and cost efficiency 24/7.",
    heroImage: "/images/services/aws.png",
    overview: "Maximize the potential of your Amazon Web Services investment. From EC2 and EKS to RDS, Lambda, and CloudFront, PetaBytz delivers certified 24/7 AWS management.",
    features: [
      { title: "AWS Well-Architected Reviews", desc: "Audit architecture across Security, Reliability, Performance, and Cost." },
      { title: "Automated Backup & Disaster Recovery", desc: "Cross-region AWS Backup, snapshot management, and failover." },
      { title: "AWS Security & GuardDuty", desc: "Real-time threat detection, IAM least-privilege, and AWS WAF rule management." }
    ],
    benefits: [
      "Direct escalation to AWS certified architects",
      "Up to 40% savings on AWS bills via reserved instances and Savings Plans",
      "Continuous compliance with AWS security standards"
    ],
    relatedServices: ["cloud-transformation", "cloud-optimization", "azure-managed-services"]
  },

  "azure-managed-services": {
    slug: "azure-managed-services",
    category: "Managed Services",
    title: "Microsoft Azure Managed Services",
    subtitle: "Enterprise Azure infrastructure administration, hybrid-cloud monitoring, and cost governance.",
    heroImage: "/images/services/azure.png",
    overview: "PetaBytz is an official Microsoft Gold Partner providing complete Azure lifecycle management. We handle Azure Virtual Desktop, Azure SQL, AKS, and Entra ID security around the clock.",
    features: [
      { title: "Azure Infrastructure Management", desc: "Virtual machines, storage accounts, VNET routing, and load balancers." },
      { title: "Azure Sentinel & Defender", desc: "Cloud-native SIEM and XDR threat management." },
      { title: "Azure Cost Management", desc: "FinOps governance, Azure Hybrid Benefit activation, and reservation planning." }
    ],
    benefits: [
      "Seamless integration with existing Microsoft active directory and licenses",
      "Zero-downtime maintenance and automated patching cycles",
      "Dedicated Azure expert team available 24/7"
    ],
    relatedServices: ["microsoft-365", "sap-service", "aws-managed-services"]
  },

  "application-managed-services": {
    slug: "application-managed-services",
    category: "Managed Services",
    title: "Application Managed Services (AMS)",
    subtitle: "Maintain, optimize, and continuously enhance your mission-critical enterprise applications.",
    heroImage: "/images/services/ams.png",
    overview: "Ensure your custom web, mobile, and legacy applications deliver high performance and bug-free user experiences. Our AMS team provides L2/L3 code fixes, feature enhancements, and database tuning.",
    features: [
      { title: "Bug Fixing & Code Maintenance", desc: "Rapid defect triage, regression testing, and code hotfixes." },
      { title: "Performance & Database Tuning", desc: "Query optimization, indexing, and memory leak resolution." },
      { title: "Continuous CI/CD Delivery", desc: "Seamless minor and major release deployments." }
    ],
    benefits: [
      "Freed internal developers to focus on core innovation",
      "Higher end-user satisfaction and reduced defect escape rate",
      "Comprehensive documentation and knowledge base maintenance"
    ],
    relatedServices: ["itsm-managed-services", "devops"]
  },

  "soc-and-noc": {
    slug: "soc-and-noc",
    category: "Managed Services",
    title: "NOC & SOC Operations Services",
    subtitle: "24/7 unified Network Operations and Security Operations monitoring to safeguard enterprise infrastructure.",
    heroImage: "/images/services/soc-noc.png",
    overview: "Combine uninterrupted network uptime with ironclad cybersecurity. PetaBytz operates 24/7/365 NOC and SOC command centers utilizing AI-powered SIEM/SOAR platforms.",
    features: [
      { title: "Network Operations Center (NOC)", desc: "Traffic analysis, bandwidth monitoring, latency alerts, and switch/router care." },
      { title: "Security Operations Center (SOC)", desc: "Real-time threat hunting, malware triage, and DDoS mitigation." },
      { title: "Incident Response & Forensics", desc: "Sub-15 minute threat containment and root-cause compliance reporting." }
    ],
    benefits: [
      "Total visibility across multi-cloud, on-premise, and edge devices",
      "Proactive threat mitigation before data breaches occur",
      "ISO 27001, SOC 2, and HIPAA compliance readiness"
    ],
    relatedServices: ["vapt", "managed-services"]
  },

  // ITSM Managed Services
  "itsm-managed-services": {
    slug: "itsm-managed-services",
    category: "ITSM Managed Services",
    title: "ITSM Managed Services",
    subtitle: "ITIL-aligned servicedesk, multi-tier user support, and intelligent incident management.",
    heroImage: "/images/services/itsm.png",
    overview: "Transform your internal IT support into a responsive, customer-first service engine. PetaBytz delivers omnichannel IT Service Desk (Email, Phone, Chat, Self-Service Portal) with rapid first-contact resolution.",
    features: [
      { title: "Omnichannel Service Desk", desc: "24/7 support via Slack, Teams, email, phone, and ticketing portals." },
      { title: "ITIL Process Alignment", desc: "Standardized Incident, Problem, Change, and Release management workflows." },
      { title: "SLA Compliance Tracking", desc: "Live dashboards measuring First Call Resolution (FCR) and Mean Time to Resolve (MTTR)." }
    ],
    benefits: [
      "Over 85% First Contact Resolution rate on common technical queries",
      "Elevated employee satisfaction (CSAT > 95%)",
      "Scalable support capacity during business growth or seasonal surges"
    ],
    relatedServices: ["l1-support-services", "l2-tier-2-support-managed-services", "deskside-support"]
  },

  "l1-support-services": {
    slug: "l1-support-services",
    category: "ITSM Managed Services",
    title: "L1 Support Managed Services",
    subtitle: "First line of defense for 24/7 user inquiries, password resets, access management, and incident logging.",
    heroImage: "/images/services/l1.png",
    overview: "Empower your employees with instant help. PetaBytz L1 Managed Support provides rapid triage, automated password resets, software installation assistance, and accurate escalation to specialized engineering teams.",
    features: [
      { title: "24/7/365 User Assistance", desc: "Always-on helpdesk ready to assist remote and office personnel worldwide." },
      { title: "Identity & Access Triage", desc: "Active Directory user provisioning, MFA troubleshooting, and role assignments." },
      { title: "Knowledge Base Integration", desc: "Self-service tutorials and automated chatbot workflows for instant answers." }
    ],
    benefits: [
      "Immediate reduction in employee downtime caused by IT issues",
      "Standardized ticket categorization for deeper trend analytics",
      "Cost-effective tier-1 support freeing senior engineers for strategic work"
    ],
    relatedServices: ["itsm-managed-services", "l2-tier-2-support-managed-services", "microsoft-365"]
  },

  "l2-tier-2-support-managed-services": {
    slug: "l2-tier-2-support-managed-services",
    category: "ITSM Managed Services",
    title: "L2 / Tier 2 Support Managed Services",
    subtitle: "Deep technical troubleshooting, OS diagnostics, database errors, and advanced application debugging.",
    heroImage: "/images/services/l2.png",
    overview: "When complex issues exceed initial helpdesk scripts, PetaBytz L2 Support specialists step in with in-depth system knowledge, diagnostic tooling, and specialized platform expertise.",
    features: [
      { title: "Advanced OS & Server Triage", desc: "Windows, Linux, macOS system crashes, kernel panics, and patch debugging." },
      { title: "Network & VPN Diagnostics", desc: "Firewall rules, DNS resolution, and secure client-to-site connectivity." },
      { title: "Root Cause Analysis (RCA)", desc: "Deep investigative reporting to eliminate recurring problem tickets." }
    ],
    benefits: [
      "Rapid resolution of escalated tickets within strict SLA bounds",
      "Proactive identification of recurring bugs and system flaws",
      "Seamless bridge between basic helpdesk and third-party vendors"
    ],
    relatedServices: ["l1-support-services", "asset-and-problem-management", "managed-services"]
  },

  "deskside-support": {
    slug: "deskside-support",
    category: "ITSM Managed Services",
    title: "Deskside Support Services",
    subtitle: "Hands-on, on-site hardware maintenance, device staging, and VIP executive technical assistance.",
    heroImage: "/images/services/deskside.png",
    overview: "Ensure your physical offices and remote personnel have properly provisioned, reliable hardware. We handle laptop provisioning, peripheral setup, conference room AV systems, and physical asset repairs.",
    features: [
      { title: "Device Staging & Imaging", desc: "Standardized OS deployments via Intune / Autopilot and asset tagging." },
      { title: "Executive / VIP White Glove", desc: "Dedicated priority support for leadership meetings and conferences." },
      { title: "Hardware Break-Fix", desc: "Component replacement, warranty claims, and certified equipment disposal." }
    ],
    benefits: [
      "Zero-touch new hire laptop onboarding shipped directly to employees",
      "Reliable meeting room AV and hybrid conference room uptime",
      "Full compliance with hardware lifecycle management"
    ],
    relatedServices: ["asset-and-problem-management", "l1-support-services"]
  },

  "asset-and-problem-management": {
    slug: "asset-and-problem-management",
    category: "ITSM Managed Services",
    title: "Asset & Problem Management",
    subtitle: "Complete IT asset lifecycle tracking, license compliance, and systematic defect elimination.",
    heroImage: "/images/services/asset.png",
    overview: "Prevent IT chaos with unified hardware/software asset management (ITAM) and structured ITIL Problem Management. We uncover underlying systemic flaws and ensure optimal asset utilization.",
    features: [
      { title: "IT Asset Management (ITAM)", desc: "Track procurement, warranty, software licenses, and depreciation." },
      { title: "Known Error Database (KEDB)", desc: "Document workarounds and permanent fixes for enterprise applications." },
      { title: "Proactive Trend Analysis", desc: "Identify problem clusters to prevent major outages before they strike." }
    ],
    benefits: [
      "Eliminate unneeded software license renewals and save budget",
      "Prevent compliance penalties during vendor software audits",
      "Drastically reduce repetitive incident volume year-over-year"
    ],
    relatedServices: ["itsm-managed-services", "l2-tier-2-support-managed-services"]
  },

  // AI Solutions
  "ai-solutions": {
    slug: "ai-solutions",
    category: "AI Solutions",
    title: "Enterprise AI & Cognitive Solutions",
    subtitle: "Transform raw enterprise data into intelligent automated decisions, custom LLMs, and neural networks.",
    heroImage: "/images/services/ai-solutions.png",
    overview: "PetaBytz delivers full-lifecycle Artificial Intelligence solutions. From exploratory data analysis and algorithm selection to production MLOps and LLM fine-tuning, we turn AI ambitions into measurable enterprise value.",
    features: [
      { title: "Generative AI & LLM Systems", desc: "Custom ChatGPT-like assistants trained on private company knowledge bases." },
      { title: "Predictive Machine Learning", desc: "Forecast demand, anticipate customer churn, and optimize supply chains." },
      { title: "Vision & Speech Intelligence", desc: "Automated document OCR, defect detection, and conversational voice bots." }
    ],
    benefits: [
      "Automate over 70% of repetitive knowledge work and customer queries",
      "Unlock deep insights buried inside PDFs, emails, and contracts",
      "Enterprise security ensuring private data never leaks to public AI models"
    ],
    relatedServices: ["gen-ai-services", "machine-learning", "natural-language-processing", "deep-learning"]
  },

  "gen-ai-services": {
    slug: "gen-ai-services",
    category: "AI Solutions",
    title: "Generative AI & LLM Engineering",
    subtitle: "Build secure, enterprise-grade AI agents, semantic search engines, and RAG architectures.",
    heroImage: "/images/services/gen-ai.png",
    overview: "Leverage Retrieval-Augmented Generation (RAG), OpenAI, Anthropic, and open-source models (Llama 3, Mistral) with guaranteed privacy and zero data leakage.",
    features: [
      { title: "Enterprise RAG Architectures", desc: "Connect vector databases (Pinecone, pgvector) with proprietary documentation." },
      { title: "AI Autonomous Agents", desc: "Multi-agent workflows that read emails, query APIs, and generate reports autonomously." },
      { title: "Prompt Engineering & Guardrails", desc: "Prevent hallucinations, enforce safety policies, and optimize token efficiency." }
    ],
    benefits: [
      "Instant answers to complex technical and legal inquiries",
      "Massive reduction in document review times",
      "Tailored tone and business rules aligned with your brand"
    ],
    relatedServices: ["ai-solutions", "natural-language-processing", "data-analytics"]
  },

  "machine-learning": {
    slug: "machine-learning",
    category: "AI Solutions",
    title: "Machine Learning (ML) & MLOps",
    subtitle: "Develop, train, and deploy high-performance predictive models with automated MLOps pipelines.",
    heroImage: "/images/services/machine-learning.png",
    overview: "Turn historical data into actionable foresight. PetaBytz builds regression, classification, clustering, and recommendation models deployed on AWS SageMaker, Azure ML, and Vertex AI.",
    features: [
      { title: "Predictive Analytics Models", desc: "Revenue forecasting, customer lifetime value, and credit risk scoring." },
      { title: "Automated MLOps Pipelines", desc: "Continuous model retraining, feature stores, and drift monitoring." },
      { title: "Real-Time Inference APIs", desc: "Sub-millisecond low-latency model endpoints for high-throughput apps." }
    ],
    benefits: [
      "Data-backed strategic decisions with quantified confidence scores",
      "Elimination of manual guesswork in pricing and inventory management",
      "Continuous model adaptation to changing market conditions"
    ],
    relatedServices: ["ai-solutions", "deep-learning", "data-analytics"]
  },

  "natural-language-processing": {
    slug: "natural-language-processing",
    category: "AI Solutions",
    title: "Natural Language Processing (NLP)",
    subtitle: "Extract intelligence from unstructured text, automate document processing, and power multilingual interactions.",
    heroImage: "/images/nlp_text_generation.png",
    overview: "Transform unstructured textual data into actionable intelligence. We build custom NLP pipelines for sentiment analysis, named entity recognition (NER), semantic document search, and multilingual translation.",
    features: [
      { title: "Intelligent Document Processing (IDP)", desc: "Extract key-value pairs from invoices, contracts, and medical records." },
      { title: "Sentiment & Customer Voice", desc: "Analyze customer feedback across social media, call transcripts, and reviews." },
      { title: "Semantic Knowledge Search", desc: "Vector-powered search that understands intent rather than just keywords." }
    ],
    benefits: [
      "95%+ accuracy on automated document data extraction",
      "Real-time alerts on negative customer sentiment",
      "Frictionless multilingual communication across global teams"
    ],
    relatedServices: ["gen-ai-services", "ai-solutions"]
  },

  "deep-learning": {
    slug: "deep-learning",
    category: "AI Solutions",
    title: "Deep Learning & Neural Networks",
    subtitle: "Advanced computer vision, convolutional neural networks (CNNs), and audio/video processing at scale.",
    heroImage: "/images/services/deep-learning.png",
    overview: "Solve high-complexity cognitive challenges. We design custom deep neural networks using PyTorch and TensorFlow for automated defect detection, facial biometric authentication, and audio processing.",
    features: [
      { title: "Computer Vision & Object Detection", desc: "Quality inspection in manufacturing, OCR, and spatial tracking." },
      { title: "Audio & Speech Recognition", desc: "Automated audio transcription, speaker diarization, and noise cancellation." },
      { title: "GPU Cluster Optimization", desc: "Distributed model training on NVIDIA CUDA clusters with mixed precision." }
    ],
    benefits: [
      "Sub-human error rates in visual quality inspection",
      "Automated compliance verification on video and imagery feeds",
      "Cost-optimized training and deployment on cloud GPU hardware"
    ],
    relatedServices: ["ai-solutions", "machine-learning"]
  },

  // Salesforce Services
  "salesforce-services": {
    slug: "salesforce-services",
    category: "Salesforce Services",
    title: "Salesforce Consulting & Implementation",
    subtitle: "Maximize ROI on your CRM investment with certified Salesforce advisory, implementation, and 24/7 support.",
    heroImage: "/images/services/salesforce.png",
    overview: "PetaBytz is an end-to-end Salesforce partner. Whether deploying Sales Cloud, Service Cloud, Marketing Cloud, or integrating Tableau Analytics, our certified architects build scalable, user-friendly solutions.",
    features: [
      { title: "Sales & Service Cloud", desc: "Automate lead capture, opportunity pipelines, and customer support ticketing." },
      { title: "Custom Apex & Lightning Web Components", desc: "Bespoke business logic and custom interactive UI components." },
      { title: "Third-Party ERP Integrations", desc: "Real-time bi-directional sync with SAP, Oracle, NetSuite, and custom APIs." },
      { title: "Salesforce 24/7 Support", desc: "Round-the-clock bug fixing, user provisioning, and release management." }
    ],
    benefits: [
      "Up to 35% increase in sales rep productivity and pipeline visibility",
      "360-degree customer view for marketing, sales, and service teams",
      "Streamlined automated approval workflows and quote generation"
    ],
    relatedServices: ["salesforce-advisory-services", "salesforce-implementation", "salesforce-integrations", "salesforce-managed-services"]
  },

  "salesforce-advisory-services": {
    slug: "salesforce-advisory-services",
    category: "Salesforce Services",
    title: "Salesforce Advisory & Strategy",
    subtitle: "Strategic CRM roadmap, license optimization, and business architecture alignment.",
    heroImage: "/images/services/salesforce-advisory.png",
    overview: "Get maximum business value from your Salesforce investment. Our certified consultants audit existing CRM instances, identify bottlenecks, and build an actionable multi-year roadmap.",
    features: [
      { title: "Instance Health Check", desc: "Audit data quality, Apex code limits, and security vulnerabilities." },
      { title: "License & Edition Optimization", desc: "Right-size user licenses to eliminate unnecessary subscription costs." },
      { title: "Process Harmonization", desc: "Align cross-departmental sales and service stages for smooth operations." }
    ],
    benefits: [
      "Clear multi-year CRM investment roadmap with quantified ROI",
      "Higher end-user adoption rates through intuitive UI design",
      "Clean, deduplicated customer master data"
    ],
    relatedServices: ["salesforce-services", "salesforce-implementation"]
  },

  "salesforce-implementation": {
    slug: "salesforce-implementation",
    category: "Salesforce Services",
    title: "Salesforce Implementation Services",
    subtitle: "Turnkey configuration, custom development, and seamless rollout of Salesforce clouds.",
    heroImage: "/images/services/salesforce-impl.png",
    overview: "From greenfield rollouts to enterprise migrations from legacy CRMs, PetaBytz ensures on-time, within-budget implementation of Sales Cloud, Service Cloud, Experience Cloud, and CPQ.",
    features: [
      { title: "Agile Implementation Methodology", desc: "Iterative sprints with stakeholder demos and continuous user feedback." },
      { title: "CPQ & Billing Configuration", desc: "Automate complex pricing models, quoting rules, and contract generation." },
      { title: "User Training & Change Management", desc: "Custom video walkthroughs, documentation, and live training sessions." }
    ],
    benefits: [
      "Fast time-to-value with phased rollout schedules",
      "Automated lead routing reducing response times by over 50%",
      "Seamless mobile CRM access for traveling sales professionals"
    ],
    relatedServices: ["salesforce-integrations", "salesforce-managed-services"]
  },

  "salesforce-integrations": {
    slug: "salesforce-integrations",
    category: "Salesforce Services",
    title: "Salesforce Integrations & MuleSoft",
    subtitle: "Connect Salesforce seamlessly with ERP, marketing tools, databases, and custom backends.",
    heroImage: "/images/services/salesforce-int.png",
    overview: "Break down data silos. PetaBytz integrates Salesforce with enterprise systems (SAP, Oracle, QuickBooks, HubSpot, Stripe) using MuleSoft, REST/SOAP APIs, and webhook event buses.",
    features: [
      { title: "MuleSoft & Middleware Integration", desc: "Enterprise-grade API-led connectivity and data orchestration." },
      { title: "Bi-Directional Real-Time Sync", desc: "Synchronize inventory, invoices, and customer balances instantly." },
      { title: "Error Handling & Retry Queues", desc: "Zero data loss during network outages with resilient queuing." }
    ],
    benefits: [
      "Elimination of double data entry across different software",
      "Real-time order status and shipment tracking inside Salesforce",
      "High-throughput data streaming with low API consumption"
    ],
    relatedServices: ["salesforce-services", "salesforce-analytics-services"]
  },

  "salesforce-managed-services": {
    slug: "salesforce-managed-services",
    category: "Salesforce Services",
    title: "Salesforce Managed Services",
    subtitle: "Continuous CRM administration, ongoing enhancements, and proactive platform governance.",
    heroImage: "/images/services/salesforce-managed.png",
    overview: "Maintain an agile CRM without the overhead of hiring full-time Salesforce admins and developers. PetaBytz Managed Services provides flexible monthly blocks of certified expert support.",
    features: [
      { title: "User & Security Administration", desc: "Roles, profiles, permission sets, sharing rules, and onboarding." },
      { title: "Seasonal Release Testing", desc: "Pre-testing tri-annual Salesforce releases in sandboxes before production." },
      { title: "Flow & Automation Tuning", desc: "Migrate legacy Process Builders and Workflow Rules to modern Flow automations." }
    ],
    benefits: [
      "Guaranteed access to multi-disciplinary Salesforce specialists",
      "Zero backlog of user change requests and report requests",
      "Proactive platform audits preventing technical debt"
    ],
    relatedServices: ["salesforce-24-7-support", "salesforce-services"]
  },

  "salesforce-24-7-support": {
    slug: "salesforce-24-7-support",
    category: "Salesforce Services",
    title: "Salesforce 24/7 Support Services",
    subtitle: "Round-the-clock incident response, bug fixes, and critical uptime guarantee for global sales teams.",
    heroImage: "/images/services/salesforce-support.png",
    overview: "Never let a technical bug stall your sales pipeline. Our global support team provides 24/7 monitoring, instant bug fixes, and critical issue escalation across all time zones.",
    features: [
      { title: "Round-the-Clock Helpdesk", desc: "Immediate assistance for global sales and customer service reps." },
      { title: "Priority Critical Ticket SLA", desc: "Sub-30 minute triage for business-critical outages." },
      { title: "Sandbox & Deployment Support", desc: "Seamless code deployments, Git branching, and release rollbacks." }
    ],
    benefits: [
      "Uninterrupted business operations for multinational sales teams",
      "High first-contact resolution for common user inquiries",
      "Transparent monthly ticket reports and SLA compliance metrics"
    ],
    relatedServices: ["salesforce-managed-services", "salesforce-services"]
  },

  "salesforce-analytics-services": {
    slug: "salesforce-analytics-services",
    category: "Salesforce Services",
    title: "Salesforce CRM Analytics & Tableau",
    subtitle: "Uncover actionable customer intelligence, pipeline trends, and predictive AI insights.",
    heroImage: "/images/services/salesforce-analytics.png",
    overview: "Empower leadership with crystal-clear visibility. PetaBytz builds intelligent dashboards using CRM Analytics (formerly Einstein Analytics) and Tableau for predictive revenue forecasting.",
    features: [
      { title: "Einstein Discovery & AI Predictions", desc: "Machine learning models predicting lead conversion and deal win rates." },
      { title: "Executive Sales Dashboards", desc: "Live KPI tracking for quota attainment, average deal size, and sales velocity." },
      { title: "Cross-Cloud Data Modeling", desc: "Blend Salesforce data with external ERP and marketing data for 360 insights." }
    ],
    benefits: [
      "Spot revenue leakage and lagging pipeline stages in real time",
      "Empower reps with AI-recommended next best actions",
      "Beautiful, interactive board-level reporting presentations"
    ],
    relatedServices: ["data-analytics", "salesforce-services"]
  },

  // Business Consulting
  "business-consulting": {
    slug: "business-consulting",
    category: "Business Consulting",
    title: "Business Consulting & Workforce Solutions",
    subtitle: "Strategic tech consulting, agile workforce scaling, and enterprise cyber resilience.",
    heroImage: "/images/new/category/offshore development.png",
    overview: "PetaBytz advises executives on technology investments, digital organizational change, remote talent scaling, and cybersecurity risk management.",
    features: [
      { title: "IT Strategy & Advisory", desc: "Align IT infrastructure investments with long-term revenue objectives." },
      { title: "Remote Workforce Scaling (RWaaS)", desc: "Deploy vetted engineering teams on demand with zero long-term liabilities." },
      { title: "Cybersecurity Audits (VAPT)", desc: "Thorough vulnerability testing and compliance roadmaps." }
    ],
    benefits: [
      "Accelerated time-to-market for complex enterprise technology programs",
      "Substantial cost savings compared to traditional full-time hiring",
      "Total regulatory and security compliance"
    ],
    relatedServices: ["rwaas", "vapt", "managed-services"]
  },

  "rwaas": {
    slug: "rwaas",
    category: "Business Consulting",
    title: "RWaaS - Remote Workforce as a Service",
    subtitle: "Scale high-performing dedicated technical teams globally with zero employer liabilities.",
    heroImage: "/images/services/rwaas.png",
    overview: "Scale your engineering capacity without the friction of traditional hiring. PetaBytz provides pre-vetted cloud architects, full-stack developers, DevOps engineers, and QA specialists who integrate seamlessly into your agile sprints.",
    features: [
      { title: "Pre-Vetted Top 5% Talent", desc: "Rigorous technical assessments, communication screening, and background checks." },
      { title: "Zero Employment Liabilities", desc: "PetaBytz manages payroll, benefits, hardware, workspace, and compliance." },
      { title: "Flexible Scaling", desc: "Ramp up or scale down team size within 2-4 weeks based on project demands." }
    ],
    benefits: [
      "Up to 60% savings on total engineering compensation overhead",
      "Seamless time zone alignment and fluent English communication",
      "Enterprise security with monitored encrypted developer laptops"
    ],
    relatedServices: ["business-consulting", "managed-services"]
  },

  "vapt": {
    slug: "vapt",
    category: "Business Consulting",
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    subtitle: "Identify cybersecurity flaws, simulate real-world attacks, and fortify enterprise defenses.",
    heroImage: "/images/services/vapt.png",
    overview: "Protect your reputation, intellectual property, and customer data. PetaBytz certified ethical hackers (CEH, OSCP) perform comprehensive black-box and white-box penetration testing on web apps, mobile apps, network perimeters, and cloud environments.",
    features: [
      { title: "Web & Mobile Application Pen Testing", desc: "OWASP Top 10 vulnerability identification (SQLi, XSS, SSRF, Auth bypass)." },
      { title: "Network & Cloud Infrastructure Audits", desc: "Firewall rule audits, exposed ports, and cloud misconfiguration tests." },
      { title: "Executive Remediation Reports", desc: "Prioritized CVSS scoring with exact step-by-step developer remediation code." }
    ],
    benefits: [
      "Full compliance with ISO 27001, SOC 2, HIPAA, and PCI-DSS requirements",
      "Proactive protection against ransomware and data breaches",
      "Official certificate of penetration testing upon successful remediation"
    ],
    relatedServices: ["soc-and-noc", "business-consulting"]
  }
};
