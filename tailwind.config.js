module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        mint: '#D1FAE5',      // A light green, like in "Total Earning"
        peach: '#FFEDD5',     // A light orange, like in "Total Spending"
        lavender: '#E0E7FF', // A light purple/blue, like in "Gold this month"
        brand: {
          primary: '#000000',
          secondary: '#171717',
          accent: '#525252',
        },
        base: {
          white: '#FFFFFF',
          black: '#1F2937', // A softer black for text
          gray: {
            50: '#F9FAFB',  // A slightly cooler light gray for backgrounds
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7281',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          }
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'outline': '4px 4px 0 0 #1F2937',
      }
    },
  },
  plugins: [],
}; 