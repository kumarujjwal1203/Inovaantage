import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Server, 
  TrendingUp, 
  AlertTriangle, 
  FileText, 
  Compass, 
  Zap,
  Globe2,
  RefreshCw,
  Play,
  Check,
  Eye,
  Radio
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';

// Oil & Gas Vertical Core Sectors Data
const sectorsData = [
  {
    id: 'upstream',
    title: 'Upstream (Exploration & Production)',
    icon: Compass,
    badge: 'E&P SOLUTIONS',
    description: 'Transform raw subsurface seismic data and wellhead location points into unified spatial databases for optimized field operations and reservoir management.',
    highlights: [
      'Subsurface Seismic & Wellhead GIS Mapping',
      'Lease & Land Boundary Spatial Management',
      'Offshore & Onshore Asset Inventory Tracking',
      'Spatial Data Lakes for Reservoir Analytics'
    ]
  },
  {
    id: 'midstream',
    title: 'Midstream (Pipeline & Storage)',
    icon: Flame,
    badge: 'PIPELINE & LOGISTICS',
    description: 'Comprehensive transmission pipeline digitisation, Esri Gas Utility Network migration, Right-of-Way (ROW) surveillance, and PIMS integration.',
    highlights: [
      'Transmission Pipeline Alignment Sheet Automation',
      'Esri Utility Network (UPDM/PODS) Migration',
      'Right-of-Way Encroachment & Drone LiDAR Surveillance',
      'Real-Time Leak Detection & SCADA Telemetry'
    ]
  },
  {
    id: 'downstream',
    title: 'Downstream (Refining & Distribution)',
    icon: Gauge,
    badge: 'REFINING & CGD',
    description: 'City Gas Distribution (CGD) network modelling, refinery facility mapping, cathodic protection monitoring, and retail distribution intelligence.',
    highlights: [
      'City Gas Distribution (CGD) Network Mapping',
      'Refinery Asset Integrity & Facility GIS',
      'Cathodic Protection & Corrosion Sensor Tracking',
      'Retail Gas Station Spatial Analytics & Dispatch'
    ]
  }
];

// Interactive Pipeline Nodes Data for Live Pipeline Flow Simulator
const pipelineNodes = [
  { id: 'node1', name: 'Wellhead Alpha-9', type: 'Upstream Well', pressure: '124.5 BAR', temp: '42°C', status: 'Optimal Flow', coords: '28.6139° N, 77.2090° E' },
  { id: 'node2', name: 'Compressor Station CS-4', type: 'Midstream Hub', pressure: '98.2 BAR', temp: '38°C', status: 'Active Boost', coords: '28.6500° N, 77.3000° E' },
  { id: 'node3', name: 'Mainline Valve MLV-12', type: 'Transmission Line', pressure: '85.0 BAR', temp: '31°C', status: 'SCADA Telemetry OK', coords: '28.7000° N, 77.4200° E' },
  { id: 'node4', name: 'City Gate Station CGS-1', type: 'Pressure Regulation', pressure: '16.5 BAR', temp: '24°C', status: 'Regulated Gate', coords: '28.7500° N, 77.5500° E' },
  { id: 'node5', name: 'Metropolitan CGD Grid', type: 'Downstream Retail', pressure: '4.2 BAR', temp: '22°C', status: '200,000 Consumers', coords: '28.8000° N, 77.6500° E' }
];

// Specialized Oil & Gas Technical Capabilities
const capabilitiesData = [
  {
    id: 'pims',
    title: 'Pipeline Integrity Management (PIMS)',
    icon: ShieldCheck,
    shortDesc: 'Integrate Inline Inspection (ILI / Pigging) data, cathodic protection measurements, and soil resistivity surveys into a centralized spatial compliance engine.',
    detailPoints: [
      'Automated ILI Pigging run alignment & anomaly matching',
      'Corrosion rate calculation & remaining life estimation',
      'PHMSA / DOT regulatory audit report generation',
      'Risk-based inspection (RBI) spatial prioritization'
    ],
    stat: '85%',
    statLabel: 'Faster Audit Prep'
  },
  {
    id: 'gis-migration',
    title: 'Esri Gas Utility Network Migration',
    icon: MapPin,
    shortDesc: 'Migrate legacy CAD, MicroStation, and geometric networks to Esri Utility Network with full topological rules and sub-second connectivity tracing.',
    detailPoints: [
      'Automated schema transformation via rUNr® engine',
      'Valve isolation & pressure zone trace modeling',
      'Sub-meter GPS mobile field sync for maintenance teams',
      'High-resolution 3D pipeline conduit visualization'
    ],
    stat: '99.9%',
    statLabel: 'Topology Accuracy'
  },
  {
    id: 'scada-iot',
    title: 'SCADA & Real-Time Telemetry Grid',
    icon: Activity,
    shortDesc: 'Connect pressure sensors, flowmeters, and thermal cameras to geospatial dashboards for instant automated alert dispatch during pressure drops or leaks.',
    detailPoints: [
      'High-throughput MQTT & Kafka telemetry ingestion',
      'Geofenced spatial alerts for pressure anomalies',
      'Automated emergency shutoff valve mapping',
      'Predictive pump maintenance ML models'
    ],
    stat: '< 5s',
    statLabel: 'Alert Detection'
  },
  {
    id: 'row-fuerza',
    title: 'Right-of-Way & Drone Analytics',
    icon: Layers,
    shortDesc: 'Protect pipeline corridors from unauthorized construction, tree encroachment, and environmental degradation using aerial LiDAR and mobile workforce dispatch.',
    detailPoints: [
      'Automated AI satellite & drone encroachment detection',
      'Offline-first mobile GIS field app for line walkers (Fuerza)',
      'Landowner easement & environmental compliance tracking',
      'Instant incident reporting with geotagged photo logs'
    ],
    stat: '60%',
    statLabel: 'Risk Reduction'
  }
];

// Key Industry Standards & Tech Stack
const techStack = [
  { name: 'Esri ArcGIS Enterprise', category: 'Geospatial Core' },
  { name: 'PODS / UPDM', category: 'Data Model Standards' },
  { name: 'FME Spatial Data Engine', category: 'ETL & Migration' },
  { name: 'PostgreSQL / PostGIS', category: 'Spatial Database' },
  { name: 'Apache Kafka & MQTT', category: 'SCADA Telemetry' },
  { name: 'Python & AI Vision', category: 'Anomaly Detection' },
  { name: 'AWS & Azure Energy Cloud', category: 'Infrastructure' },
  { name: 'Fuerza Field Force Engine', category: 'Mobile Operations' }
];

// Proven Case Studies for Oil & Gas
const caseStudies = [
  {
    title: '5,000+ KM National Pipeline Network GIS Migration',
    client: 'Leading Midstream Energy Operator',
    metrics: '75% Faster Migration',
    description: 'Digitized over 5,000 kilometers of high-pressure natural gas transmission pipelines into Esri Utility Network, consolidating 25+ legacy CAD databases into a single spatial truth.',
    tags: ['Pipeline GIS', 'Utility Network', 'Esri']
  },
  {
    title: 'City Gas Distribution (CGD) Real-Time Field Operations',
    client: 'Metropolitan Gas Utility',
    metrics: '99.9% Inventory Precision',
    description: 'Deployed Fuerza mobile GIS field management platform for 200+ field technicians, reducing work order dispatch latency and ensuring sub-meter asset tracking for urban gas lines.',
    tags: ['CGD Network', 'Fuerza Field GIS', 'Mobile']
  },
  {
    title: 'Integrated ILI Pigging & Cathodic Protection PIMS',
    client: 'Cross-Border Oil Pipeline Corp',
    metrics: '100% Audit Compliance',
    description: 'Built an automated pipeline integrity data pipeline that ingests Inline Inspection pigging runs and cathodic protection voltage readings for predictive corrosion prevention.',
    tags: ['PIMS', 'Corrosion Analytics', 'ILI Data']
  }
];

export function OilAndGas() {
  const [activeSector, setActiveSector] = useState('midstream');
  const [selectedNode, setSelectedNode] = useState(pipelineNodes[1]);
  const [isScanning, setIsScanning] = useState(true);
  const [pressureVal, setPressureVal] = useState(68.4);
  const selectedSector = sectorsData.find(s => s.id === activeSector) || sectorsData[1];

  // Dynamic live pressure variation animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPressureVal(prev => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-24 pb-16 min-h-screen bg-[#FAFAFD] text-slate-900 overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION WITH ANIMATED SCANNING LASER & HUD */}
      {/* ------------------------------------------------------------- */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Animated Background Energy Floating Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#FF6B00]/15 blur-[160px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-amber-500/15 blur-[170px] pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Hero Content with Entrance Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-orange-50 border border-[#FF6B00]/30 text-[#FF6B00]"
            >
              <Flame className="w-4 h-4 text-[#FF6B00] animate-pulse" />
              <span>OIL & GAS INDUSTRY VERTICAL</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.1]">
              Digital Transformation & <br />
              <motion.span 
                className="text-gradient-orange inline-block"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Geospatial Intelligence
              </motion.span> for Oil & Gas
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              From high-pressure transmission pipelines and City Gas Distribution (CGD) to offshore wellhead management — Inovaantage delivers enterprise GIS, SCADA telemetry integration, and Pipeline Integrity Management Systems (PIMS) engineered for zero-downtime energy networks.
            </p>

            {/* Quick Metrics Bar with Hover Motion */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <motion.div 
                whileHover={{ y: -4 }} 
                className="p-3 rounded-2xl bg-white/60 border border-slate-200 shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">10,000+</div>
                <div className="text-[11px] font-medium text-slate-500 font-mono uppercase">KM Pipeline Mapped</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -4 }} 
                className="p-3 rounded-2xl bg-orange-50/70 border border-[#FF6B00]/30 shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#FF6B00]">99.9%</div>
                <div className="text-[11px] font-medium text-slate-500 font-mono uppercase">Topology Accuracy</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -4 }} 
                className="p-3 rounded-2xl bg-white/60 border border-slate-200 shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">24×7</div>
                <div className="text-[11px] font-medium text-slate-500 font-mono uppercase">SCADA Telemetry Sync</div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button to="/contact" variant="primary" size="lg" showIcon className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white shadow-lg shadow-[#FF6B00]/25 hover:scale-105 transition-transform">
                Schedule Technical Demo
              </Button>
              <a 
                href="#simulator" 
                className="px-6 py-3 rounded-full text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all shadow-xs flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current text-[#FF6B00]" />
                Live Pipeline Simulator
              </a>
            </div>
          </motion.div>

          {/* Right Interactive HUD Card with Animated Laser Sweep */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden group">
              
              {/* SWEEPING LASER SCANNING BEAM ANIMATION */}
              <motion.div
                animate={{ y: ['-100%', '350%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-[#00F0FF]/25 to-transparent pointer-events-none border-b border-[#00F0FF]/50"
              />

              {/* Glowing Background Radial */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-[#FF6B00]/20 to-transparent blur-3xl pointer-events-none" />

              {/* Header inside HUD */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shadow-md shadow-[#FF6B00]/20">
                    <Flame className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base">Pipeline Intelligence HUD</h3>
                    <p className="text-[11px] font-mono text-[#00F0FF]">REAL-TIME SCADA TELEMETRY</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">LIVE</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>

              {/* Dynamic Status metrics inside HUD */}
              <div className="py-6 space-y-3.5 font-mono text-xs relative z-10">
                
                {/* Dynamic Line Pressure Metric */}
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#FF6B00]" />
                    Line Pressure Stability:
                  </span>
                  <motion.span 
                    key={pressureVal}
                    initial={{ scale: 1.1, color: '#00F0FF' }}
                    animate={{ scale: 1, color: '#10B981' }}
                    transition={{ duration: 0.4 }}
                    className="font-bold text-emerald-400 text-sm"
                  >
                    {pressureVal} BAR
                  </motion.span>
                </div>

                {/* Esri Utility Network Status */}
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00F0FF]" />
                    Esri Utility Network:
                  </span>
                  <span className="font-bold text-white bg-slate-800 px-2.5 py-1 rounded-md text-[11px] border border-slate-700">
                    UPDM 2.0 ONLINE
                  </span>
                </div>

                {/* Cathodic Protection Meter */}
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    PIMS Cathodic Voltage:
                  </span>
                  <span className="font-bold text-amber-400">-0.95V CSE</span>
                </div>
              </div>

              {/* Animated Progress Gauge */}
              <div className="mb-6 pt-2 relative z-10">
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span>TELEMETRY BUFFER CAPACITY</span>
                  <span className="text-[#00F0FF]">98.4% OPTIMAL</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#00F0FF] via-[#FF6B00] to-emerald-400 rounded-full"
                    animate={{ width: ['70%', '98.4%', '95%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>

              {/* Footer CTA inside HUD */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between relative z-10">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">PHMSA / DOT COMPLIANCE</div>
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    100% VERIFIED PASS
                  </div>
                </div>
                <button 
                  onClick={() => setIsScanning(!isScanning)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-mono text-xs font-bold transition-all cursor-pointer shadow-md"
                >
                  {isScanning ? 'PAUSE SCAN ⚡' : 'RESUME SCAN ⚡'}
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* NEW INTERACTIVE PIPELINE FLOW SIMULATOR & NETWORK SCHEMATIC */}
      {/* ------------------------------------------------------------- */}
      <section id="simulator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 mb-3">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                INTERACTIVE PIPELINE SCHEMATIC
              </div>
              <h3 className="text-3xl font-extrabold font-heading text-white">
                End-to-End Pipeline Telemetry & Node Tracing
              </h3>
              <p className="text-sm text-slate-400 mt-1 max-w-xl font-normal">
                Click any node on the interactive energy grid below to view real-time SCADA pressure levels, GIS coordinates, and operational safety metrics.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">FLOW STATUS:</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                GAS FLOW ACTIVE
              </span>
            </div>
          </div>

          {/* SVG Pipeline Path Flow Graphic */}
          <div className="relative py-8 px-4 bg-slate-900/60 rounded-2xl border border-slate-800/80 mb-8 overflow-x-auto">
            <div className="min-w-[700px] flex items-center justify-between relative px-8 py-6">
              
              {/* Connecting Pipeline Tubing Line with Animated Particles */}
              <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF6B00] via-[#00F0FF] to-emerald-400 rounded-full opacity-80"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Render Pipeline Node Buttons */}
              {pipelineNodes.map((node, index) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <motion.button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 w-16 h-16 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-[#FF6B00] text-white border-white shadow-[0_0_30px_#FF6B00] scale-110'
                        : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-[#00F0FF]'
                    }`}
                  >
                    <Flame className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-[#FF6B00]'}`} />
                    <span className="text-[10px] font-mono font-bold mt-1">NODE 0{index + 1}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Selected Node Telemetry HUD Detail Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-6 items-center"
            >
              <div>
                <div className="text-xs font-mono text-[#FF6B00] font-bold uppercase">{selectedNode.type}</div>
                <div className="text-xl font-bold font-heading text-white">{selectedNode.name}</div>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">PRESSURE READOUT</div>
                <div className="text-lg font-bold font-heading text-emerald-400">{selectedNode.pressure}</div>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">GIS LOCATION COORDS</div>
                <div className="text-xs font-mono text-[#00F0FF] mt-1">{selectedNode.coords}</div>
              </div>

              <div className="text-right">
                <Button to="/contact" size="sm" className="bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs px-4 py-2">
                  Inspect Node Specs
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

        </motion.div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTOR FOCUS: UPSTREAM, MIDSTREAM, DOWNSTREAM WITH MOTION TABS */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="SECTOR COVERAGE"
          title="End-to-End Solutions Across the"
          gradientTitle="Energy Value Chain"
          description="Inovaantage brings deep domain software engineering and geospatial expertise to every segment of Oil & Gas."
        />

        {/* Sector Tabs with Motion Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-12">
          {sectorsData.map(sector => (
            <button
              key={sector.id}
              onClick={() => setActiveSector(sector.id)}
              className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-heading font-bold transition-all cursor-pointer border ${
                activeSector === sector.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#FF6B00]'
              }`}
            >
              <sector.icon className={`w-4 h-4 ${activeSector === sector.id ? 'text-[#FF6B00]' : 'text-slate-500'}`} />
              <span>{sector.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Sector Showcase Card with Entrance Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSector.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold text-[#FF6B00] bg-orange-50 border border-[#FF6B00]/30 px-3.5 py-1 rounded-full uppercase">
                {selectedSector.badge}
              </span>
              
              <h3 className="text-3xl font-extrabold font-heading text-slate-900">
                {selectedSector.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {selectedSector.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                {selectedSector.highlights.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-2.5 text-sm text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-8 text-white space-y-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <selectedSector.icon className="w-8 h-8 text-[#FF6B00] animate-bounce" />
                <div>
                  <h4 className="font-heading font-bold text-lg">{selectedSector.badge} CORE</h4>
                  <p className="text-xs font-mono text-slate-400">ENTERPRISE DEPLOYMENT READY</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Our architects design fault-tolerant data pipelines and GIS frameworks compliant with PODS (Pipeline Open Data Standard) and UPDM (Utility & Pipeline Data Model).
              </p>

              <Button to="/contact" variant="primary" size="sm" showIcon className="w-full justify-center bg-[#FF6B00] hover:bg-[#e05e00] text-white">
                Consult With Sector Lead
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CORE CAPABILITIES & SOLUTIONS WITH HOVER MOTION CARDS */}
      {/* ------------------------------------------------------------- */}
      <section id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="OIL & GAS SOLUTIONS"
          title="Engineered for Safety, Precision &"
          gradientTitle="Operational Performance"
          description="Purpose-built geospatial and software engineering solutions designed to meet stringent global energy standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {capabilitiesData.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between hover:border-[#FF6B00]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-extrabold font-heading text-slate-900">{item.stat}</div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">{item.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {item.detailPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-[#FF6B00] hover:text-[#e05e00] transition-all"
                >
                  <span>Request Solution Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CASE STUDIES WITH STAGGER MOTION */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          badge="PROVEN IMPACT"
          title="Oil & Gas Case Studies &"
          gradientTitle="Success Stories"
          description="See how top energy operators leverage Inovaantage technology to modernize pipeline management."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {caseStudies.map((cs, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">{cs.client}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {cs.metrics}
                  </span>
                </div>

                <h4 className="text-xl font-bold font-heading text-slate-900 mb-3 leading-snug">
                  {cs.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {cs.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/portfolio" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B00] hover:underline">
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* TECH STACK & STANDARDS WITH HOVER GLOW BADGES */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-10 rounded-3xl bg-slate-950 text-white shadow-2xl border border-slate-800"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-widest block mb-2">
              TECHNOLOGY & COMPLIANCE STACK
            </span>
            <h3 className="text-3xl font-extrabold font-heading">
              Built on Enterprise Industry Standards
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Full compatibility with global pipeline standards including PODS, UPDM, PHMSA 192/195, and ASME B31.8S.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05, borderColor: '#FF6B00' }}
                className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center transition-colors"
              >
                <div className="text-sm font-bold font-heading text-white">{item.name}</div>
                <div className="text-[11px] font-mono text-[#00F0FF] mt-1">{item.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CALL TO ACTION WITH RADIAL GLOW & MOTION */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-3xl bg-white border border-slate-200 shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#FF6B00]/15 to-transparent blur-3xl pointer-events-none" 
          />
          
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mb-4 relative z-10">
            Ready to Modernize Your Oil & Gas Infrastructure?
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-base mb-8 font-normal relative z-10">
            Consult with our principal pipeline GIS architects and software engineers to review your network migration or integrity management roadmap.
          </p>
          <div className="flex justify-center gap-4 relative z-10">
            <Button to="/contact" variant="primary" size="lg" showIcon className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white shadow-lg shadow-[#FF6B00]/30 hover:scale-105 transition-transform">
              Book Oil & Gas Consultation
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
