import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair_display: ['Playfair Display', 'sans-serif'],
      },
      colors: {
        'offwhite': '#F1EFEF',
        'black': '#000000',
        'white': '#FFFFFF',
      },
      
    },
  },
  plugins: [],
}
export default config
