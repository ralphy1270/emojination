    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          scale: {
          25: '.25',
          60: '.6',
          80: '.8',
          120: '1.2',
          150: '1.5',
        },
        },
      },
      plugins: [],
    };