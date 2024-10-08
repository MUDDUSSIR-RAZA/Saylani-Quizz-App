/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },

      'xl': { 'max': '1279px' },

      'lg': { 'max': '1023px' },

      'lg950px': { 'max': '950px' },

      'md': { 'max': '800px' },

      'sm': { 'max': '639px' },

      'smm': { 'max': '550px' },

      'minLg': { 'min': '1023px' },

      'minMd': { 'min': '800px' },
    },
    // screens: {
    //   '2xl': {'min': '1535px'},
    //   // => @media (min-width: 1535px) { ... }

    //   'xl': {'min': '1279px'},
    //   // => @media (min-width: 1279px) { ... }

    //   'lg': {'min': '1023px'},
    //   // => @media (min-width: 1023px) { ... }

    //   'md': {'min': '800px'},
    //   // => @media (min-width: 767px) { ... }

    //   'sm': {'min': '639px'},
    //   // => @media (min-width: 639px) { ... }
    // },
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
        button : "#0d6db7",
        bgColor : "#ffffff00"
      },

      fontFamily: {
        'body': [
          'Roboto',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
