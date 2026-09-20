export const projects = [
  {
    id: "finova-banking",
    title: "Finova Digital Banking Platform",
    client: "Finova International",
    category: "Web",
    categoryLabel: "Fintech & Banking",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A high-performance digital banking core handling multi-currency settlements and micro-transactions.",
    fullDescription: "Finova needed to modernize its legacy core banking platform to handle over 1.2 million daily transactions with zero downtime. We engineered a micro-frontends architecture backed by a distributed event-driven microservices core.",
    challenge: "Legacy monolithic architecture suffered from frequent database locks during peak hours, causing slow wire transfers and regulatory compliance risks.",
    solution: "Built a resilient event-driven architecture using Kafka, React, and Node.js with automated ledger validation, sub-50ms transaction latency, and SOC2 compliance.",
    results: [
      { metric: "99.999%", label: "System Uptime" },
      { metric: "<45ms", label: "Average Response Time" },
      { metric: "1.2M+", label: "Daily Transactions" },
      { metric: "-40%", label: "Infrastructure Cost" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Apache Kafka", "PostgreSQL", "AWS", "Docker"],
    link: "https://finova-demo.example.com"
  },
  {
    id: "ai-customer-support",
    title: "Aether AI Knowledge Engine",
    client: "Nexus Global SaaS",
    category: "AI",
    categoryLabel: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Enterprise Retrieval-Augmented Generation (RAG) platform delivering instant context-aware support.",
    fullDescription: "Nexus wanted to reduce tier-1 support tickets by 60%. We designed a custom RAG platform connecting internal technical docs, Slack history, and Jira tickets into a secure vector database with fine-tuned LLM routing.",
    challenge: "Inconsistent documentation spread across 5 disparate platforms led to slow customer response times and high operational overhead.",
    solution: "Deployed a multi-tenant vector pipeline using Pinecone, OpenAI, and LangChain with strict role-based access control and automated doc sync.",
    results: [
      { metric: "68%", label: "Deflection Rate" },
      { metric: "1.8s", label: "Query Resolution" },
      { metric: "94%", label: "Satisfaction Rate" },
      { metric: "24/7", label: "Autonomous Ops" }
    ],
    technologies: ["Python", "PyTorch", "OpenAI", "Pinecone", "LangChain", "React", "FastAPI"],
    link: "https://aether-ai.example.com"
  },
  {
    id: "cloudcore-analytics",
    title: "CloudCore Analytics Suite",
    client: "CloudCore Systems",
    category: "Web",
    categoryLabel: "Enterprise Web & Cloud",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Real-time stream processing and telemetry dashboard for multi-cloud infrastructure monitoring.",
    fullDescription: "A comprehensive SaaS telemetry dashboard that visualizes millions of logs, metrics, and security traces across hybrid cloud environments in real-time.",
    challenge: "High latency in querying massive time-series telemetry data prevented DevOps teams from detecting anomalies before outages occurred.",
    solution: "Designed a WebSockets streaming dashboard powered by React and ClickHouse, enabling live querying of 100M+ events per minute with zero browser lag.",
    results: [
      { metric: "100M+", label: "Events Processed/Min" },
      { metric: "60fps", label: "Canvas UI Rendering" },
      { metric: "-75%", label: "Mean Time to Detect" },
      { metric: "4.9/5", label: "User Rating" }
    ],
    technologies: ["React", "ClickHouse", "WebSockets", "Go", "Tailwind CSS", "Kubernetes"],
    link: "https://cloudcore-analytics.example.com"
  },
  {
    id: "carepulse-mobile",
    title: "CarePulse Telehealth App",
    client: "CarePulse Health",
    category: "Mobile",
    categoryLabel: "Healthcare Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "HIPAA-compliant cross-platform mobile application providing seamless remote doctor consultations.",
    fullDescription: "A flagship mobile healthcare experience enabling video consultations, electronic health record (EHR) access, automated prescription fulfillment, and biometric health tracking.",
    challenge: "Complex regulatory compliance (HIPAA/GDPR) and poor network connectivity in rural regions led to frequent video call drops.",
    solution: "Engineered an adaptive WebRTC video core with end-to-end payload encryption, offline prescription caching, and intuitive biometric login.",
    results: [
      { metric: "450k+", label: "Active Mobile Users" },
      { metric: "99.8%", label: "HD Video Connection Rate" },
      { metric: "HIPAA", label: "Fully Certified" },
      { metric: "4.8★", label: "App Store Rating" }
    ],
    technologies: ["React Native", "WebRTC", "Node.js", "PostgreSQL", "AWS KMS", "GraphQL"],
    link: "https://carepulse.example.com"
  },
  {
    id: "solaris-cloud",
    title: "Solaris Infrastructure Engine",
    client: "Solaris Energy",
    category: "Cloud",
    categoryLabel: "Cloud Engineering",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Automated multi-region cloud deployment pipeline for clean energy monitoring nodes.",
    fullDescription: "Solaris operates thousands of IoT solar nodes worldwide. We built a zero-touch cloud provisioning system that deploys, monitors, and auto-heals edge compute nodes.",
    challenge: "Manual provisioning caused deployment delays of up to 3 weeks per new solar facility.",
    solution: "Created automated Terraform & Ansible manifests tied into GitOps pipelines with automated failover across AWS and Azure regions.",
    results: [
      { metric: "<15m", label: "Facility Setup Time" },
      { metric: "10,000+", label: "IoT Edge Nodes" },
      { metric: "Zero", label: "Downtime Deployments" },
      { metric: "$1.2M", label: "Annual Cost Savings" }
    ],
    technologies: ["Terraform", "AWS", "Azure", "Docker", "Ansible", "Python", "Prometheus"],
    link: "https://solaris-cloud.example.com"
  },
  {
    id: "vertex-design-system",
    title: "Vertex Enterprise UI Kit",
    client: "Vertex Corp",
    category: "AI",
    categoryLabel: "UI/UX & System Architecture",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Dark glassmorphic component library and design system powering 14 sub-brands.",
    fullDescription: "Unified 14 disparate product software interfaces into a cohesive dark futuristic design system featuring accessibility, theme tokens, and React components.",
    challenge: "Brand inconsistency and duplicated frontend efforts slowed down new feature launches across engineering squads.",
    solution: "Delivered a comprehensive Figma token library, Storybook documentation, and NPM package with full WCAG AA accessibility compliance.",
    results: [
      { metric: "14", label: "Products Unified" },
      { metric: "3x", label: "Faster Frontend Velocity" },
      { metric: "100%", label: "WCAG AA Compliance" },
      { metric: "250+", label: "Reusable Components" }
    ],
    technologies: ["Figma", "React", "Tailwind CSS", "Storybook", "TypeScript", "Framer Motion"],
    link: "https://vertex-ui.example.com"
  }
];
