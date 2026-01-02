/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'forest': {
          DEFAULT: '#1a4d2e',
          light: '#2d5a3d',
          dark: '#15412a'
        },
        'gold': {
          DEFAULT: '#d4a853',
          light: '#e0bc7a',
          dark: '#c49a48'
        },
        'sunset': {
          DEFAULT: '#e07b39',
          light: '#e8935a',
          dark: '#c96a2d'
        },
        // Neutral Colors
        'cream': '#faf8f5',
        'warm-white': '#fffef9',
        'bark': {
          DEFAULT: '#2d1810',
          light: '#4a2c1c'
        },
        'stone': '#6b7280'
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        'warm': '10px'
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(45, 24, 16, 0.08)',
        'warm-lg': '0 8px 30px rgba(45, 24, 16, 0.12)',
        'gold': '0 4px 15px rgba(212, 168, 83, 0.4)',
        'forest': '0 4px 15px rgba(26, 77, 46, 0.25)'
      }
    }
  },
  plugins: []
};
