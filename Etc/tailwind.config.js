/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        // Base
        'bg-base': '#F8FAFC',
        'fg-base': '#0F172A',
        'fg-muted': '#475569',

        // Brand (sky) - primary actions, links, focus
        brand: {
          DEFAULT: '#0EA5E9',
          strong: '#0284C7',
        },

        // Accent (amber) - customer CTAs, open bidding
        accent: {
          DEFAULT: '#F59E0B',
          strong: '#D97706',
          bg: '#FEF3C7',
          border: '#FDE68A',
          fg: '#92400E',
        },

        // Success (emerald) - provider CTAs, confirmed
        success: {
          DEFAULT: '#10B981',
          strong: '#059669',
          bg: '#ECFDF5',
          border: '#A7F3D0',
          fg: '#065F46',
        },

        // Danger
        danger: {
          DEFAULT: '#EF4444',
          strong: '#DC2626',
        },

        // Border
        border: '#E2E8F0',
        'border-strong': '#CBD5E1',

        // Surface
        surface: '#FFFFFF',
      },

      fontFamily: {
        sans: ['Prompt', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'h1': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['clamp(1.125rem, 2vw, 1.25rem)', { lineHeight: '1.35', fontWeight: '600' }],
        'body': ['clamp(0.9375rem, 1.5vw, 1rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['clamp(0.8125rem, 1.25vw, 0.875rem)', { lineHeight: '1.55', fontWeight: '400' }],
        'caption': ['clamp(0.75rem, 1vw, 0.8125rem)', { lineHeight: '1.5', fontWeight: '500' }],
        'button': ['clamp(0.875rem, 1.25vw, 0.9375rem)', { lineHeight: '1', fontWeight: '600' }],
      },

      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
      },

      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
      },

      boxShadow: {
        'low': '0 1px 2px rgb(15 23 42 / 0.06), 0 1px 3px rgb(15 23 42 / 0.1)',
        'high': '0 10px 25px -5px rgb(15 23 42 / 0.15), 0 8px 10px -6px rgb(15 23 42 / 0.1)',
      },

      maxWidth: {
        'container': '72rem', // 1152px
      },

      animation: {
        'fade-in': 'fadeIn 200ms ease-out forwards',
        'modal-in': 'modalIn 150ms ease-out forwards',
        'slide-up': 'slideUp 200ms ease-out forwards',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        modalIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
      },

      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
    },
  },
  plugins: [],
}