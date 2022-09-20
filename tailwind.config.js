module.exports = {
  content: [
    './public/**/*.html',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    /**
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
    extend: {
      // 기본으로 작성되는 CSS는 1001px보다 큰 화면에서 작동
      screens: {
        // 가로 해상도가 1000px 보다 작은 화면에 적용
        pc: { max: '1000px' },
        // 가로 해상도가 900px 보다 작은 화면에 적용
        laptop: { max: '900px' },
        // 가로 해상도가 768px 보다 작은 화면에 적용
        tablet: { max: '768px' },
        // 가로 해상도가 600px 보다 작은 화면에 적용
        mobile: { max: '600px' },
      },
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
       * - 파란색: #2962AF
       * - 메뉴 글씨 회색(active): #111111
       * - 메뉴 글씨 회색(inactive): #9c9b9b
       * - 상품 설명 회색: #5d5a5a
       * - 페이징 active 글씨색: #6d6d6d
       * - 페이징 active 배경색: #e8e8e8
       * - 페이징 inactive 글씨색: #c7c7c7
       * - 페이징 inactive 배경색: #000000
       */
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
        '12.5': '3.125rem', // 50px
        '15': '3.75rem', // 60px
        '17.5': '4.375rem', // 70px
        '22.5': '5.625rem', // 90px
      },
      fontSize: {
        '10': '0.625rem', // 10px
        '21': '1.3125rem', // 21px
        '32': '2rem', // 32px
      },
      boxShadow: {
        base: '0px 5px 5px rgb(0 0 0 / 20%)',
        hover: 'inset 0 -4px 0 #1c69d3',
        inner: 'inset 0px 7px 3px -3px rgb(0 0 0 / 20%)',
      },
    },
  },
  plugins: [],
};
