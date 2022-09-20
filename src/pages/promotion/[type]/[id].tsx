import Navigation from '@components/promotion/navigation';
import BlurImage from '@components/blur-image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function PromotionDetailPage() {
  const router = useRouter();
  const { type, id } = router.query;

  const onAfterChangeEvent = (navigationType: string) => {
    router.push(`/promotion?type=${navigationType}`);
  };

  // TODO: if not exist promotion contents => 404 not found
  // useMount(() => {
  //   if (!id) {
  //     router.replace('/404');
  //   }
  // });

  return (
    <section className="promotion">
      <div className="py-5 pc:py-0" />
      <BlurImage
        src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/promotion/2aa1dd3d-d157-49b0-8c51-08ad6f34a9e6_12312.jpg"
        alt="banner"
        remote
      />
      <Navigation
        navigationType={type as string}
        onAfterChangeEvent={onAfterChangeEvent}
      />
      <article className="promotion__container px-40 laptop:!mt-7.5">
        <p className="max-w-[1000px] mx-auto text-center text-[1.4rem] border-b-[1px] border-solid border-[#b4b4b4] mb-5 pb-5">
          <span onClick={() => router.push('/promotion?ttt=123')}>
            신용카드 최대 36개월 무이자 할부 안내
          </span>
        </p>
        <div className="max-w-[1000px] mx-auto">
          <BlurImage
            src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/promotion/9b894e7c-51c7-4303-8072-11e4896ca78f_%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%2036%20%EB%B3%80%EA%B2%BD.jpg"
            alt="promotion"
            remote
          />
        </div>
      </article>
      <div className="promotion__detail-btns-wrapper">
        <Link href="/promotion?type=1">다른 프로모션 보기</Link>
        <Link href="/link/purchase" className="bg-[#012D5E]">
          상담하러 가기
        </Link>
      </div>
    </section>
  );
}

export default PromotionDetailPage;
