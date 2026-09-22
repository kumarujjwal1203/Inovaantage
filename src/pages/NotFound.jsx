import React from 'react';
import { Compass, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';

export function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-4 py-24 text-center bg-[#FAFAFD]">
      <div className="max-w-lg w-full p-12 space-y-6 bg-white rounded-3xl border border-slate-200 shadow-2xl">
        <div className="w-20 h-20 rounded-full bg-orange-50 border-2 border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] mx-auto shadow-md animate-pulse">
          <Compass className="w-10 h-10" />
        </div>

        <div className="text-6xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF8800]">
          404
        </div>

        <h1 className="text-2xl font-bold font-heading text-slate-900">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed font-normal">
          The page or system resource you are looking for has been relocated, moved, or does not exist in our grid.
        </p>

        <div className="pt-4">
          <Button to="/" variant="primary" size="md" showIcon showIconPosition="left" icon={ArrowLeft} className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
