/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    /**
     * 절대경로 추가
     * @see https://flamingotiger.github.io/frontend/react/nextjs-absolute-path/
     */
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@datas': path.resolve(__dirname, 'src/datas'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    return config;
  },
  /**
   * 외부 url image 사용
   * @see https://nextjs.org/docs/messages/next-image-unconfigured-host
   */
  images: {
    domains: ['vespa-bucket.s3.ap-northeast-2.amazonaws.com'],
  },
};
