import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID, KAKAOMAP_APPKEY } from '@constants/environments';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index,follow" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="author" content="베스파 신촌점" />
          <meta property="og:title" content="베스파 신촌점" />
          <meta property="og:site_name" content="베스파 신촌점" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/thumbnail/thumbnail.jpg"
          />
          <meta
            property="og:description"
            content="베스파 신촌점. 피아지오 베스파 공식딜러 신촌점에서 다양한 정보를 받아보세요!"
          />
          <meta
            name="keywords"
            content="베스파 신촌, 신촌 베스파, 베스파 신촌점, 베스파 모토아페, VESPA 신촌, 베스파 모토아페"
          />
          <meta property="og:url" content="https://vespa-motoape.com/" />
          <meta
            name="description"
            content="베스파 신촌. 피아지오 베스파 공식딜러 신촌점에서 다양한 정보를 받아보세요!"
          />
          <link rel="canonical" href="https://vespa-motoape.com/" />
          <meta name="twitter:title" content="베스파 신촌점" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="베스파 신촌점. 피아지오 베스파 공식딜러 신촌점에서 다양한 정보를 받아보세요!"
          />
          <meta name="twitter:domain" content="https://vespa-motoape.com/" />
          <link
            href="http://fonts.cdnfonts.com/css/helvetica-neue-9"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <script
            defer
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', '${GA_TRACKING_ID}', {
								page_path: window.location.pathname,
							});`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
