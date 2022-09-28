import BlurImage from '@components/blur-image';
import { useRouter } from 'next/router';

function RepresentativeModel() {
  const router = useRouter();

  return (
    <div className="representative-model">
      <ul className="representative-model__list">
        <li className="representative-model__list-item">
          <BlurImage
            src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/mainBanner/a0cc4e16-1a6b-43e1-85ba-8d5de9f55cdc_%EC%98%88%EC%8B%9C%203.jpg"
            alt="main banner image"
            remote
          />
          <div className="representative-model__list-item__shortcut main">
            <h2>All Models</h2>
            <button onClick={() => router.push('/link/price')}>바로가기</button>
          </div>
        </li>
        <li className="representative-model__list-item">
          <BlurImage
            src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/mainBanner/84414289-30c7-4ea1-896d-12b650e1e52d_%EB%A9%94%EC%9D%B8%20%EC%82%AC%EC%A7%84%2002.jpg"
            alt="main banner image"
            remote
          />
          <div className="representative-model__list-item__shortcut">
            <h2>GTS 125 SUPER</h2>
            {/* TODO: 상세 페이지 링크 적용 */}
            <button onClick={() => router.push('/')}>바로가기</button>
          </div>
        </li>
        <li className="representative-model__list-item">
          <BlurImage
            src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/mainBanner/c40bb679-a293-46f8-9e35-c3ed1523cb90_%EB%A9%94%EC%9D%B8%20%EC%82%AC%EC%A7%84%2003.jpg"
            alt="main banner image"
            remote
          />
          <div className="representative-model__list-item__shortcut">
            <h2>PRIMAVERA</h2>
            {/* TODO: 상세 페이지 링크 적용 */}
            <button onClick={() => router.push('/')}>바로가기</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RepresentativeModel;
