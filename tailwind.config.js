module.exports = {
  content: [
    './public/**/*.html',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    /**
     * min-width: 1200px;
     * 1000px
     * - header 메뉴가 아이콘으로 변경
     * 900px
     * - 메인: 모델 배너영역, 이미지 캐러셀 폰트사이즈 변경, quick menu 글씨영역 제거, footer 영역이 grid 1:1에서 1 column으로 변경
     * - 하단 퀵메뉴(공통): 폰트 사이즈 변경
     * - 악세서리&파츠: 4x3으로 보이던 영역이 2x6으로 변경
     * - 프로모션: 헤더메뉴와 프로모션 이미지 사이에 공백이 사라짐, 리스트 목록이 3xn에서 2xn으로 변경
     * - 프로모션 상세: 900px 이하에서 이미지 풀 사이즈로 채워짐
     * - 시승신청: 폰트 사이즈 변경
     * 768px
     * - 메인: 모델 배너영역, carousel에 보이는 이미지 및 2x2 메뉴 영역이 하나로 변함 (모두 1개씩 보이도록)
     * - 서비스: 서비스 소개부분 2x2 영역 1x4로 변경
     */
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      /**
       * 1. 헤더 메뉴 글씨 색
       *  - 대메뉴: #111111
       *  - 중메뉴: #333333
       *  - 소메뉴: #666666
       * 2. hover underline 색: #1c69d3 (파란색)
       * 3. 서비스 메뉴 active 색: #E74054 (옅은 빨강)
       * 4. tx-red 색: #DD072B(짙은 빨강)
       * 5. 하단 퀵메뉴 글씨색, 메인화면 중간 퀵메뉴 배경색: #262626
       * 6. 하단 퀵메뉴 배경색: #F2F2F2 (회색)
       * 7. footer
       * - 글씨 색: #666666
       * - 배경색: #111111
       * 8. 악세서리&파츠 페이지
       * - 파란색: #2961af
       * - 메뉴 글씨 회색(active): #111111
       * - 메뉴 글씨 회색(inactive): #9c9b9b
       * - 상품 설명 회색: #5d5a5a
       * - 페이징 active 글씨색: #6d6d6d
       * - 페이징 active 배경색: #e8e8e8
       * - 페이징 inactive 글씨색: #c7c7c7
       * - 페이징 inactive 배경색: #000000
       */
      colors: {
        // blue: '#1fb6ff',
        // purple: '#7e5bef',
        // pink: '#ff49db',
        // orange: '#ff7849',
        // green: '#13ce66',
        // yellow: '#ffc82c',
        // 'gray-dark': '#273444',
        // gray: '#8492a6',
        // 'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
};
