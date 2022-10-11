const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './public/**/*.html',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 기본으로 작성되는 CSS는 1001px보다 큰 화면에서 작동
      screens: {
        // 가로 해상도가 1000px 보다 작은 화면에 적용
        wide: { max: '1440px' },
        // 가로 해상도가 1000px 보다 작은 화면에 적용
        pc: { max: '1000px' },
        // 가로 해상도가 900px 보다 작은 화면에 적용
        laptop: { max: '900px' },
        // 가로 해상도가 768px 보다 작은 화면에 적용
        tablet: { max: '768px' },
        // 가로 해상도가 600px 보다 작은 화면에 적용
        mobile: { max: '600px' },
      },
      colors: {
        dark: '#111',
        'dark-gray': '#333',
        gray: '#666',
        'icon-gray': '#858585',
        'light-gray': '#f2f2f2',
        'semi-dark-gray': '#262626',
        blue: '#2962AF',
        active: '#E74054',
        red: '#DD072B',
      },
      maxWidth: {
        base: '1200px',
      },
      spacing: {
        '1.25': '0.3125rem', // 5px
        '2.5': '0.625rem', // 10px
        '4.5': '1.125rem', // 18px
        '7.5': '1.875rem', // 30px
        '8.75': '2.1875rem', // 35px
        '10.5': '2.625rem', // 42px
        '11.5': '2.875rem', // 46px
        '12.5': '3.125rem', // 50px
        '15': '3.75rem', // 60px
        '17.5': '4.375rem', // 70px
        '22': '5.5rem', // 88px
        '22.5': '5.625rem', // 90px
        '25': '6.25rem', // 100px
        '2/5': '40%',
      },
      fontFamily: {
        gmarketSansMedium: 'GmarketSansMedium',
      },
      fontSize: {
        '10': '0.625rem', // 10px
        '21': '1.3125rem', // 21px
        '32': '2rem', // 32px
        '42': '2.625rem', // 42px
        '45': '2.8125rem', // 45px
      },
      boxShadow: {
        base: '0px 5px 5px rgb(0 0 0 / 20%)',
        hover: 'inset 0 -4px 0 #1c69d3',
        inner: 'inset 0px 7px 3px -3px rgb(0 0 0 / 20%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.text-shorten': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
      });
    }),
  ],
  daisyui: {
    themes: false,
  },
};
