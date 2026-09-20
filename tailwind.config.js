/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#050507',
          deep: '#030305',
          card: '#080811',
          surface: '#0A0A12',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-bright': 'rgba(255, 255, 255, 0.18)',
        },
        brand: {
          orange: '#FF6B00',
          'orange-glow': '#FF8800',
          'orange-deep': '#D95B00',
        },
        cyan: {
          glow: '#00E5FF',
          electric: '#00D4FF',
        },
        violet: {
          glow: '#7B2FF7',
          accent: '#9B5CFF',
          deep: '#5B16C6',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'orb-rotate': 'orbRotate 25s linear infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'beam': 'beam 12s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        orbRotate: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.03)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        beam: {
          '0%, 100%': { opacity: '0.2', transform: 'translateY(-10%) rotate(-5deg)' },
          '50%': { opacity: '0.5', transform: 'translateY(10%) rotate(5deg)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #FF6B00 0%, #00D4FF 50%, #7B2FF7 100%)',
        'gradient-orange-cyan': 'linear-gradient(135deg, #FF6B00 0%, #00E5FF 100%)',
        'gradient-cyan-violet': 'linear-gradient(135deg, #00D4FF 0%, #7B2FF7 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glass': '0 20px 80px rgba(0, 0, 0, 0.5)',
        'orange-glow': '0 0 30px rgba(255, 107, 0, 0.3)',
        'cyan-glow': '0 0 30px rgba(0, 212, 255, 0.25)',
        'violet-glow': '0 0 30px rgba(123, 47, 247, 0.25)',
      }
    },
  },
  plugins: [],
}
