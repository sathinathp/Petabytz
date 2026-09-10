/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#022f46',
          dark: '#001a28',
          deep: '#01121d',
          orange: '#fb8b00',
          orangeHover: '#e07a00',
          lightBlue: '#00a3e0',
          muted: '#64748b',
          lightBg: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(251, 139, 0, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(0, 163, 224, 0.3)',
        'card-hover': '0 20px 25px -5px rgba(2, 47, 70, 0.1), 0 10px 10px -5px rgba(2, 47, 70, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
