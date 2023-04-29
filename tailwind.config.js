/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    // TODO: themes の設定を含め、全体カラーリングを決める
    // ref: https://github.com/tksmasaki/playlist-aide/issues/3
    themes: ['dark'],
  },
};
