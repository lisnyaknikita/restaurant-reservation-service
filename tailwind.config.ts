import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#252525',
        primary: 'rgb(28 25 23)',
      },
      fontFamily: {
        'work-sans': 'Work Sans',
      },
      borderRadius: {
        primary: '0.6rem',
        button: '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
