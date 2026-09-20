import React, { Component } from 'react';

export class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Canvas WebGL error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback visual component when WebGL is unavailable or encounters an error
      return (
        <div className="w-full h-full min-h-[300px] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#080811] via-[#0D0B18] to-[#050507]">
          {/* Animated Radial Pulse Backdrop */}
          <div className="absolute inset-0 bg-radial-glow opacity-60 animate-pulse-glow" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative z-10 text-center p-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-[#7B61FF]/10 border border-[#7B61FF]/30 flex items-center justify-center text-[#7B61FF]">
              <span className="text-2xl animate-spin">✨</span>
            </div>
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              High-Performance Graphics Visualizer
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
