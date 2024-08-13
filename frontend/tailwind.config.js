/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mine-shaft': {
          '50': '#f6f5f5',
          '100': '#e8e6e5',
          '200': '#d3d1ce',
          '300': '#b4b0ac',
          '400': '#8d8883',
          '500': '#736e67',
          '600': '#625e58',
          '700': '#524f4c',
          '800': '#484642',
          '900': '#3f3e3a',
          '950': '#252422',
        },
        'flamingo': {
          '50': '#fef5ee',
          '100': '#fce8d8',
          '200': '#f9cdaf',
          '300': '#f4aa7d',
          '400': '#ef7d48',
          '500': '#eb5e28',
          '600': '#dc421a',
          '700': '#b73117',
          '800': '#91281b',
          '900': '#752419',
          '950': '#3f0f0b',
        },
      },
    },
  },
  plugins: [],
};
