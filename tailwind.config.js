/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Geist Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Consolas', 'monospace'],
      },
      colors: {
        ink: '#09090B',
        panel: '#131316',
        crimson: {
          DEFAULT: '#FACC15',
          dark: '#EAB308',
        },
        neon: {
          DEFAULT: '#22D3EE',
          soft: '#00E5CC',
        },
      },
      boxShadow: {
        'red-glow': '0 0 30px rgba(250,204,21,0.4)',
        'cyan-glow': '0 0 30px rgba(34,211,238,0.35)',
        'card': '0 20px 60px -15px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
}
