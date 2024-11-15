/** @type {import('tailwindcss').Config} */
module.exports = {
  // 关闭 tailwindcss 提供的浏览器样式预设
  corePlugins: {
    preflight: false,
  },
  content: ['./code/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
