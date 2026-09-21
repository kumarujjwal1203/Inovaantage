import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, ExternalLink, Globe2, Compass, Layers } from 'lucide-react';

const globalOffices = [
  {
    id: 'india-hyderabad',
    country: 'India - Hyderabad',
    region: 'ASIA PACIFIC',
    flag: '🇮🇳',
    address: 'Lakshmi Prasad Ashrayam, Plot no 194, 4th Floor, Road no 38, Ayyappa Society, Madhapur, Hyderabad 500081, Telangana',
    query: 'Lakshmi Prasad Ashrayam, Plot no 194, Road no 38, Ayyappa Society, Madhapur, Hyderabad, Telangana 500081',
    lat: 17.44975,
    lng: 78.38827,
    coordText: '17.4498° N, 78.3883° E'
  },
  {
    id: 'usa',
    country: 'USA - Denver',
    region: 'NORTH AMERICA',
    flag: '🇺🇸',
    address: '1312 17th Street Unit #229, Denver, CO 80202, United States',
    phone: '+17202639280',
    query: '1312 17th Street Unit #229, Denver, CO 80202, United States',
    lat: 39.7516,
    lng: -104.9961,
    coordText: '39.7516° N, 104.9961° W'
  },
  {
    id: 'india-delhi',
    country: 'India - Delhi',
    region: 'ASIA PACIFIC',
    flag: '🇮🇳',
    address: '206, 2nd floor Allied House Building no.1, LSC Near Pushpa Bhawan, Saket New Delhi 110062',
    query: 'Allied House Building, Saket, New Delhi 110062',
    lat: 28.5244,
    lng: 77.2188,
    coordText: '28.5244° N, 77.2188° E'
  },
  {
    id: 'india-bhubaneswar',
    country: 'India - Bhubaneswar',
    region: 'ASIA PACIFIC',
    flag: '🇮🇳',
    address: 'DCB-314, 3rd Floor, DLF Cybercity, Patia, Bhubaneswar, Odisha 751024',
    query: 'DLF Cybercity, Patia, Bhubaneswar, Odisha 751024',
    lat: 20.3540,
    lng: 85.8173,
    coordText: '20.3540° N, 85.8173° E'
  },
  {
    id: 'singapore',
    country: 'Singapore',
    region: 'ASIA PACIFIC',
    flag: '🇸🇬',
    address: '12 Marina Boulevard, #17-01 Tower 3, Marina Bay Financial Centre, Singapore 018982',
    phone: '+6565497044, +6565497001',
    query: 'Marina Bay Financial Centre Tower 3, Singapore 018982',
    lat: 1.2789,
    lng: 103.8542,
    coordText: '1.2789° N, 103.8542° E'
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    region: 'ASIA PACIFIC',
    flag: '🇲🇾',
    address: 'Level 28, The Gardens South Tower, Mid Valley City, Lingkaran Syed Putra, 59200 Kuala Lumpur, Malaysia',
    query: 'The Gardens South Tower, Mid Valley City, Kuala Lumpur 59200',
    lat: 3.1186,
    lng: 101.6766,
    coordText: '3.1186° N, 101.6766° E'
  },
  {
    id: 'philippines',
    country: 'Philippines',
    region: 'ASIA PACIFIC',
    flag: '🇵🇭',
    address: 'Unit 301, 164 L. Gruet Street, Brgy Maytunas San Juan City, Philippines 1500',
    query: '164 L. Gruet Street, San Juan City, Philippines 1500',
    lat: 14.5995,
    lng: 121.0370,
    coordText: '14.5995° N, 121.0370° E'
  },
  {
    id: 'australia',
    country: 'Australia',
    region: 'ASIA PACIFIC',
    flag: '🇦🇺',
    address: '8 Beulah Road, Norwood SA 5067, Adelaide, Australia',
    query: '8 Beulah Road, Norwood SA 5067, Adelaide, Australia',
    lat: -34.9195,
    lng: 138.6295,
    coordText: '34.9195° S, 138.6295° E'
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    region: 'GLOBAL',
    flag: '🇬🇧',
    address: 'First Floor, Swan Buildings, 20, Swan Street, Manchester, M4 5JW, United Kingdom',
    query: 'Swan Buildings, 20 Swan Street, Manchester M4 5JW',
    lat: 53.4862,
    lng: -2.2372,
    coordText: '53.4862° N, 2.2372° W'
  }
];

export function GlobalReachSection() {
  const [selectedOfficeId, setSelectedOfficeId] = useState('india-hyderabad');
  const [mapMode, setMapMode] = useState('k'); // 'k' = satellite, 'm' = standard map

  const selectedOffice = globalOffices.find((o) => o.id === selectedOfficeId) || globalOffices[0];

  return (
    <section id="locations" className="relative bg-[#050507] py-28 border-b border-white/10 select-none overflow-hidden">
      {/* Background ambient radial light */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#00F0FF]/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#FF6B00]/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-[#FF6B00] mb-4">
            <Globe2 className="w-3.5 h-3.5 text-[#FF6B00]" />
            GLOBAL PRESENCE
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Operating <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-400 bg-clip-text text-transparent">Worldwide</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light mt-3 max-w-2xl">
            With offices across 10 countries, we deliver 24/7 support wherever you are.
          </p>
        </div>

        {/* Main Grid: Scrollable Office List (5 Cols) + Interactive Map & Satellite View (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: SCROLLABLE OFFICE LOCATIONS LIST */}
          <div className="lg:col-span-5 glass-panel p-4 sm:p-5 rounded-3xl border border-white/15 max-h-[380px] sm:max-h-[620px] overflow-y-auto space-y-3 custom-scrollbar bg-gradient-to-b from-white/[0.04] to-black/80">
            {globalOffices.map((office) => {
              const isSelected = selectedOfficeId === office.id;
              return (
                <motion.div
                  key={office.id}
                  onClick={() => setSelectedOfficeId(office.id)}
                  whileHover={{ x: 4 }}
                  className={`group p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#FF6B00]/15 via-white/[0.05] to-transparent border-[#FF6B00]/80 shadow-lg shadow-[#FF6B00]/20'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {office.region}
                    </span>
                    {isSelected && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FF6B00]" />
                        SELECTED
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-white flex items-center gap-2">
                    <span>{office.flag}</span>
                    <span>{office.country}</span>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal mt-2">
                    {office.address}
                  </p>

                  {office.phone && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF6B00] font-semibold mt-2.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{office.phone}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: INTERACTIVE MAP & SATELLITE PREVIEW CARD */}
          <div className="lg:col-span-7 glass-panel p-4 sm:p-5 rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.05] via-black/60 to-black/90 shadow-2xl flex flex-col justify-between min-h-[380px] sm:min-h-[620px] relative overflow-hidden">
            
            {/* Header Address & Coordinate Badge Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-2xl bg-black/70 border border-white/10 mb-4 gap-3">
              <div className="flex items-center gap-2.5 truncate max-w-full">
                <span className="text-lg">{selectedOffice.flag}</span>
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-heading text-white">
                      {selectedOffice.country}
                    </span>
                    <span className="text-[10px] font-mono text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded border border-[#FF6B00]/30">
                      {selectedOffice.coordText}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 truncate block mt-0.5">
                    {selectedOffice.address}
                  </span>
                </div>
              </div>

              {/* Map / Satellite View Toggle */}
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 shrink-0">
                <button
                  onClick={() => setMapMode('k')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-colors ${
                    mapMode === 'k'
                      ? 'bg-[#FF6B00] text-black shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Satellite
                </button>
                <button
                  onClick={() => setMapMode('m')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-colors ${
                    mapMode === 'm'
                      ? 'bg-[#FF6B00] text-black shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Map
                </button>
              </div>
            </div>

            {/* Google Maps Frame with Building Address Search Query */}
            <div className="relative flex-grow rounded-2xl overflow-hidden border border-white/10 bg-black min-h-[300px] sm:min-h-[460px]">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={selectedOffice.id + '-' + mapMode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  title={selectedOffice.country}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full border-0 filter brightness-95 contrast-105"
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedOffice.query)}&hl=en&z=18&t=${mapMode}&ie=UTF8&iwloc=B&output=embed`}
                />
              </AnimatePresence>
            </div>

            {/* Bottom Google Maps Link */}
            <div className="pt-4 flex justify-center items-center">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedOffice.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF6B00] hover:text-[#ff8533] transition-colors group"
              >
                <span>Open Location in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
