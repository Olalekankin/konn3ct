/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#227451',
        mod: '#3E8466',
        pFade2: '#47896D',
        pFade5: '#2274518C',
        pLite: '#ACC691C',
        pVone: '#5D957E',
        pVtwo: '#68A48B',
        bblack: '#1B1B1B',
        secondary: '#e5e5e5',
        reed: '#CC525F',
        darkGray: '#2D3440',
        darkerGray: '#424242',
        darkText: '#373131',
        liteText: '#ACACAC',
        opBlack: '#00000033',
        blurGrey: '#B2BBCD',
        bluGrey: '#E0ECFFCC',
        pleGrey: '#D9D9D9',
        fiveWhite: '#F5F9FFF2',
        purp: '#6554c0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
