import React from 'react';

// 1. Topographic Map Contour Lines Watermark (GIS Elevation Layer)
export function TopoContourWatermark({ className = 'opacity-15', position = 'top-right' }) {
  const positionClasses = {
    'top-right': 'top-0 right-0 w-[550px] h-[550px]',
    'top-left': 'top-0 left-0 w-[550px] h-[550px]',
    'bottom-right': 'bottom-0 right-0 w-[550px] h-[550px]',
    'bottom-left': 'bottom-0 left-0 w-[550px] h-[550px]',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]',
    'full': 'inset-0 w-full h-full'
  };

  return (
    <div className={`absolute pointer-events-none z-0 overflow-hidden ${positionClasses[position] || positionClasses['top-right']} ${className}`}>
      <svg
        className="w-full h-full text-[#FF6B00]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Concentric organic GIS Topo Map Contour lines */}
        <path d="M50 300 C120 180, 280 160, 360 220 C440 280, 520 200, 580 320" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.4" />
        <path d="M20 340 C100 220, 260 190, 370 260 C460 330, 510 240, 590 360" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <path d="M80 260 C150 140, 310 130, 400 180 C490 230, 540 170, 600 280" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <path d="M120 220 C180 110, 340 100, 430 150 C520 200, 560 140, 610 240" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        
        {/* Elevation Peak Iso-Curves */}
        <ellipse cx="340" cy="210" rx="90" ry="45" stroke="currentColor" strokeWidth="1.5" opacity="0.7" transform="rotate(-15 340 210)" />
        <ellipse cx="340" cy="210" rx="60" ry="30" stroke="currentColor" strokeWidth="1.8" opacity="0.85" transform="rotate(-15 340 210)" />
        <ellipse cx="340" cy="210" rx="30" ry="15" stroke="currentColor" strokeWidth="2" opacity="1" transform="rotate(-15 340 210)" />
        <circle cx="340" cy="210" r="3" fill="currentColor" opacity="1" />

        {/* GIS Lat/Lon Coordinate Readouts Watermark */}
        <text x="350" y="200" fill="currentColor" fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.8">
          ELEV 420m · 37.7749° N, 122.4194° W
        </text>
        <text x="440" y="270" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.6">
          CONTOUR STEP 10m · EPSG:3857
        </text>
      </svg>
    </div>
  );
}

// 2. Utility Network & Power Grid Topology Watermark (Substations, Conduits, Fiber Splices)
export function UtilityNetworkWatermark({ className = 'opacity-15', position = 'bottom-left' }) {
  const positionClasses = {
    'top-right': 'top-0 right-0 w-[550px] h-[550px]',
    'top-left': 'top-0 left-0 w-[550px] h-[550px]',
    'bottom-right': 'bottom-0 right-0 w-[550px] h-[550px]',
    'bottom-left': 'bottom-0 left-0 w-[550px] h-[550px]',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]',
    'full': 'inset-0 w-full h-full'
  };

  return (
    <div className={`absolute pointer-events-none z-0 overflow-hidden ${positionClasses[position] || positionClasses['bottom-left']} ${className}`}>
      <svg
        className="w-full h-full text-[#FF6B00]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Transmission Grid Vector Bus Lines */}
        <path d="M50 500 L200 350 L380 420 L550 220" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
        <path d="M200 350 L200 150 L420 150 L550 220" stroke="currentColor" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.6" />
        <path d="M380 420 L380 550" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <path d="M50 300 L200 350" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />

        {/* Substation Transformer & Node Symbols */}
        {/* Node 1: Primary Substation */}
        <circle cx="200" cy="350" r="18" stroke="currentColor" strokeWidth="2" fill="white" opacity="0.9" />
        <circle cx="200" cy="350" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
        <circle cx="200" cy="350" r="3" fill="currentColor" opacity="1" />
        <text x="225" y="345" fill="currentColor" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.85">
          SUBSTATION A-102 [138kV]
        </text>

        {/* Node 2: Secondary Feeder */}
        <circle cx="380" cy="420" r="14" stroke="currentColor" strokeWidth="2" fill="white" opacity="0.85" />
        <polygon points="380,410 388,426 372,426" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
        <text x="400" y="425" fill="currentColor" fontSize="9" fontFamily="monospace" opacity="0.75">
          FEEDER NODE 4B · 34.5kV
        </text>

        {/* Node 3: 5G Optical Fiber Splice Box */}
        <rect x="408" y="138" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="white" opacity="0.9" />
        <line x1="420" y1="138" x2="420" y2="162" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <text x="440" y="153" fill="currentColor" fontSize="9" fontFamily="monospace" opacity="0.8">
          FIBER SPLICE MUX-12
        </text>

        {/* Node 4: Grid Edge Point */}
        <circle cx="550" cy="220" r="10" stroke="currentColor" strokeWidth="2" fill="white" opacity="0.9" />
        <circle cx="550" cy="220" r="4" fill="currentColor" opacity="1" />
        <text x="470" y="210" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.7">
          SCADA GATEWAY #8
        </text>

        {/* Circuit Branching Rings & Flow Dots */}
        <circle cx="200" cy="350" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <circle cx="200" cy="350" r="65" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      </svg>
    </div>
  );
}

// 3. GIS Satellite Telemetry Orbit & Compass Reticle Watermark
export function SpatialReticleWatermark({ className = 'opacity-15', position = 'top-left' }) {
  const positionClasses = {
    'top-right': 'top-0 right-0 w-[450px] h-[450px]',
    'top-left': 'top-0 left-0 w-[450px] h-[450px]',
    'bottom-right': 'bottom-0 right-0 w-[450px] h-[450px]',
    'bottom-left': 'bottom-0 left-0 w-[450px] h-[450px]',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]'
  };

  return (
    <div className={`absolute pointer-events-none z-0 overflow-hidden ${positionClasses[position] || positionClasses['top-left']} ${className}`}>
      <svg
        className="w-full h-full text-[#FF6B00]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Spatial Compass Ring */}
        <circle cx="250" cy="250" r="180" stroke="currentColor" strokeWidth="1.2" strokeDasharray="12 6" opacity="0.5" />
        <circle cx="250" cy="250" r="140" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="250" cy="250" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        <circle cx="250" cy="250" r="5" fill="currentColor" opacity="0.9" />

        {/* Crosshair Axes */}
        <line x1="250" y1="40" x2="250" y2="460" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        <line x1="40" y1="250" x2="460" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

        {/* Compass Cardinal Degrees */}
        <text x="245" y="60" fill="currentColor" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.8">N 0.00°</text>
        <text x="245" y="450" fill="currentColor" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.8">S 180.00°</text>
        <text x="440" y="254" fill="currentColor" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.8">E 90.00°</text>
        <text x="45" y="254" fill="currentColor" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.8">W 270.00°</text>

        {/* Corner Reticle Brackets */}
        <path d="M100 120 L100 100 L120 100" stroke="currentColor" strokeWidth="2" opacity="0.7" />
        <path d="M400 120 L400 100 L380 100" stroke="currentColor" strokeWidth="2" opacity="0.7" />
        <path d="M100 380 L100 400 L120 400" stroke="currentColor" strokeWidth="2" opacity="0.7" />
        <path d="M400 380 L400 400 L380 400" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      </svg>
    </div>
  );
}
