/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './cards/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:[
      {
        "base": {
          "primary": "#eedd8a",
          "primary-focus": "#eedd8a",
          "primary-content": "#eedd8a",

          "secondary": "#eedd8a",
          "secondary-focus": "#eedd8a",
          "secondary-content": "#eedd8a",

          "accent": "#eedd8a",
          "accent-focus": "#eedd8a",
          "accent-content": "#eedd8a",

          "neutral": "#f4e28f",
          "neutral-focus": "#f4e28f",
          "neutral-content": "#d7d7d7",

          "base-100": "#292829",
          "base-200": "#080808",
          "base-300": "#080808",
          "base-content": "#d7d7d7",

          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        }
      },
    ],
  }
}
