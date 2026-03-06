/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
        tech: ['Share Tech Mono', 'monospace'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          dark: 'var(--bg-dark)',
          card: 'var(--surface-card)',
          electric: 'var(--primary-electric)',
          cyan: 'var(--primary-cyan)',
        },
        luxota: {
          bg: '#0B0E14',
          card: '#161B27',
          border: 'rgba(79, 209, 197, 0.12)',
          accent: '#4FD1C5',
          accentGlow: 'rgba(79, 209, 197, 0.15)',
          dim: '#9BA3B5',
          surface: '#10141C',
        },
      },
      letterSpacing: {
        tighter: '-0.04em',
        tightest: '-0.07em',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 50% -20%, rgba(45, 121, 255, 0.15), transparent 70%)',
        aurora:
          'conic-gradient(from 180deg at 50% 50%, #0A0A0C 0deg, #111827 120deg, #0A0A0C 360deg)',
      },
      backdropBlur: {
        xs: '4px',
        premium: '12px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        reveal: 'reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        blob: 'blob 10s infinite',
        'text-shimmer': 'text-shimmer 3s ease-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(30px) scale(0.98)', filter: 'blur(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
