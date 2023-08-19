import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#252525',
      },
      fontFamily: {
        'work-sans': 'Work Sans',
      },
    },
  },
  plugins: [],
};
export default config;
