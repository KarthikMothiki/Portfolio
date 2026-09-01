/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        titaniumBg: '#F8F9FA',
        obsidianText: '#111827',
        slateMuted: '#4B5563',
        darkZinc: '#1F2937',
        techBlue: '#3B82F6',
        faintGrid: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
