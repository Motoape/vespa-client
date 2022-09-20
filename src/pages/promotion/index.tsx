import BlurImage from '@components/blur-image';
import { useRouter } from 'next/router';
import useSearch from '@/src/hooks/useSearch';
import Navigation from '@components/promotion/navigation';
import Card from '@components/promotion/card';

function PromotionPage() {
  const promotionList = [
    {
      type: 1,
      imageUrl:
        'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/promotion/1632a33b-cfef-49f2-b261-e4225d10a983_KakaoTalk_20220325_144012527.jpg',
      title: '신용카드 최대 36개월 무이자 할부 안내',
      from: '2022-03-01',
      to: '2022-12-31',
      prmtSeq: '9',
    },
  ];
  const router = useRouter();
  const { type } = router.query;

  const { value, onChange, onEnter, onSearch } = useSearch((keyword) => {
    console.log('keyword: ', keyword);
  });

  return (
    <section className="promotion">
      <div className="py-5 pc:py-0" />
      <BlurImage
        src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/promotion/2aa1dd3d-d157-49b0-8c51-08ad6f34a9e6_12312.jpg"
        alt="banner"
        remote
      />
      <Navigation navigationType={type as string} />
      <article className="promotion__container laptop:mt-12.5">
        <div className="promotion__container__header">
          <h2 className="text-32 text-[#525252] font-normal pl-2.5 laptop:invisible">
            진행중인 프로모션
          </h2>
          <div className="flex">
            <div className="promotion__container__header__select-wrapper">
              <select name="category">
                <option value="title">제목</option>
              </select>
              <i className="fa fa-chevron-down fa-2xs absolute right-1 pr-2" />
            </div>
            <div className="promotion__container__header__input-wrapper">
              <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyUp={onEnter}
              />
              <button
                type="button"
                className="fas fa-search"
                onClick={onSearch}
              />
            </div>
          </div>
        </div>
        <Card promotionList={promotionList} />
      </article>
    </section>
  );
}

export default PromotionPage;
