import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';

export function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 py-24 text-center">
      <GlassCard glow className="max-w-lg w-full p-12 space-y-6">
        <div className="w-20 h-20 rounded-full bg-cyan-electric/10 border-2 border-cyan-electric/30 flex items-center justify-center text-cyan-electric mx-auto shadow-xl shadow-cyan-electric/20 animate-pulse">
          <Compass className="w-10 h-10" />
        </div>

        <div className="text-6xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric via-violet-glow to-cyan-glow">
          404
        </div>

        <h1 className="text-2xl font-bold font-heading text-white">
          Looks Like You've Entered Uncharted Space.
        </h1>

        <p className="text-slate-400 text-sm leading-relaxed">
          The page or system resource you are looking for has been relocated, moved, or does not exist in our grid.
        </p>

        <div className="pt-4">
          <Button to="/" variant="primary" size="md" showIcon showIconPosition="left" icon={ArrowLeft}>
            Return Home
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}
