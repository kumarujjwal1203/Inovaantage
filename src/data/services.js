import { Globe, MapPin, Database, Cpu, Code2, Smartphone, Cloud, Layout, Lightbulb } from 'lucide-react';

export const services = [
  {
    id: "managed-services",
    title: "Managed Services",
    shortDescription: "Always-on cloud, DevOps, and service desk operations — with 24×7 monitoring and support built for zero-downtime environments.",
    fullDescription: "Comprehensive managed cloud services, 24x7 NOC monitoring, automated DevOps pipelines, and proactive infrastructure maintenance for utility and telecom networks.",
    icon: Globe,
    badge: "01",
    capabilities: [
      "24×7 NOC Infrastructure Monitoring",
      "Automated Multi-Cloud DevOps Pipelines",
      "Proactive Incident Prevention & SLA Guarantee",
      "Disaster Recovery & Zero-Downtime Failover",
      "FinOps & Cost Optimization Strategy"
    ],
    technologies: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "Prometheus", "Grafana", "PagerDuty"],
    benefits: [
      { title: "99.999% SLA Uptime", desc: "Always-on monitoring prevents outages before they impact operations." },
      { title: "24/7 Expert Ops", desc: "Dedicated senior DevOps engineers monitoring your infrastructure continuously." },
      { title: "Rapid Incident Response", desc: "< 5 minute mean time to acknowledge critical grid alerts." }
    ]
  },
  {
    id: "geospatial-services",
    title: "Geospatial Services (GIS)",
    shortDescription: "Utility network migration, spatial data management, and advanced geospatial analytics that turn location data into operational intelligence.",
    fullDescription: "End-to-end GIS consulting, Esri Utility Network migrations, spatial ETL automation, and custom WebGIS applications for electric, gas, water, and telecom operators.",
    icon: MapPin,
    badge: "02",
    capabilities: [
      "Esri Utility Network Migration (rUNr®)",
      "Spatial Data Quality & Topological Validation",
      "WebGIS & Field Mobile App Development",
      "LiDAR & High-Resolution Asset Mapping",
      "Cross-Enterprise GIS Integration"
    ],
    technologies: ["Esri ArcGIS", "Utility Network", "FME", "PostGIS", "Python", "GeoServer", "Leaflet", "QGIS"],
    benefits: [
      { title: "99.99% Data Accuracy", desc: "Automated topological validation across large-scale utility datasets." },
      { title: "80% Migration Time Saved", desc: "Automated rUNr® migration engine replaces manual GIS conversions." },
      { title: "Real-time Field Sync", desc: "Seamless offline-first field mobile data collection." }
    ]
  },
  {
    id: "gis-data-management",
    title: "GIS Data Management",
    shortDescription: "Enterprise-scale data lakes, enrichment pipelines, and governance frameworks — powered by AI-driven analytics for faster, smarter decisions.",
    fullDescription: "Building robust spatial data pipelines, enterprise data lakes, and governance frameworks that convert massive unstructured spatial records into actionable intelligence.",
    icon: Database,
    badge: "03",
    capabilities: [
      "Spatial Data Lakes & Data Warehouse Setup",
      "AI-Powered Spatial Feature Extraction",
      "Automated Data Enrichment & Cleaning Pipelines",
      "Enterprise GIS Governance & Metadata Cataloging",
      "High-Throughput Spatial Query Optimization"
    ],
    technologies: ["PostgreSQL/PostGIS", "Snowflake", "Databricks", "Apache Spark", "Python", "ClickHouse", "dbt"],
    benefits: [
      { title: "Sub-Second Spatial Queries", desc: "Optimized indexing accelerates complex spatial analytics across billions of points." },
      { title: "Unified Data Governance", desc: "Single source of truth for electric, water, and telecom network records." },
      { title: "AI Feature Extraction", desc: "Automated asset detection from satellite and drone imagery." }
    ]
  },
  {
    id: "telecom-data-management",
    title: "Telecom Data Management",
    shortDescription: "Seamless enterprise data migration, ETL pipelines, and multi-system integration built to handle telecom-scale complexity.",
    fullDescription: "Architecting high-throughput telecom data pipelines, FTTH asset management databases, network inventory synchronization, and multi-system BSS/OSS integrations.",
    icon: Cpu,
    badge: "04",
    capabilities: [
      "FTTH & 5G Fiber Network Inventory Data Migration",
      "High-Volume Telecom ETL & Stream Processing",
      "BSS/OSS System Integration & Synchronization",
      "Physical & Logical Network Data Modeling",
      "Automated Circuit & Conduit Path Validation"
    ],
    technologies: ["Apache Kafka", "Node.js", "Python", "GraphQL", "Oracle Spatial", "PostgreSQL", "Docker", "AWS"],
    benefits: [
      { title: "Telecom Scale Capacity", desc: "Engineered to ingest and reconcile millions of fiber network strands in real-time." },
      { title: "Zero Data Loss", desc: "Strict payload verification prevents inventory discrepancies during system cutovers." },
      { title: "Fast Network Rollouts", desc: "Accelerate fiber expansion timelines by automating inventory documentation." }
    ]
  }
];
