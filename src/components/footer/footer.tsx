import Image from 'next/image';
import insta from '@/public/icons/footer/insta.png';
import kakao from '@/public/icons/footer/kakao.png';
import naver from '@/public/icons/footer/naver.png';
import youtube from '@/public/icons/footer/youtube.png';
import { openNewTab } from '@/src/utils/open-new-tab';
import {
  BUISENESS_CONFIRM,
  INSTAGRAM,
  KAKAOTALK,
  NAVER_BLOG,
  YOUTUBE_CHANNEL,
} from '@/src/constants/links';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <i className="footer__logo" />
          <p className="text-gray text-xs mt-10">
            <span className="text-white">회사명&nbsp;</span>
            <span>(주)모토아페 |&nbsp;</span>
            <span className="text-white">대표&nbsp;</span>
            <span>최호준</span>
            <br />
            <span className="text-white">주소&nbsp;</span>
            <span>
              서울특별시 마포구 월드컵북로 40(SPACE 1)1층 베스파 신촌점(우
              03991)
            </span>
            <br />
            <span className="text-white">통신판매업번호&nbsp;</span>
            <span>2020-서울마포-1255</span>
            <br />
            <span className="text-white">사업자번호&nbsp;</span>
            <span>456-81-01711&nbsp;</span>
            <span
              className="underline cursor-pointer"
              onClick={() => openNewTab(BUISENESS_CONFIRM)}
            >
              사업자정보확인
            </span>
          </p>
          <p className="text-gray text-xs mt-5">
            Copyright ⓒMOTOAPE All Rights Reserved.
          </p>
        </div>
        <div className="footer__right">
          <div>
            <h1 className="footer__category__title">SOCIAL</h1>
            <ul className="flex">
              <li
                className="footer__icon__link"
                onClick={() => openNewTab(KAKAOTALK)}
              >
                <Image src={kakao} alt="kakao" width={30} height={30} />
              </li>
              <li
                className="footer__icon__link"
                onClick={() => openNewTab(NAVER_BLOG)}
              >
                <Image src={naver} alt="naver" width={30} height={30} />
              </li>
              <li
                className="footer__icon__link"
                onClick={() => openNewTab(INSTAGRAM)}
              >
                <Image src={insta} alt="insta" width={30} height={30} />
              </li>
              <li
                className="footer__icon__link"
                onClick={() => openNewTab(YOUTUBE_CHANNEL)}
              >
                <Image src={youtube} alt="youtube" width={30} height={30} />
              </li>
            </ul>
          </div>
          <div>
            <h1 className="footer__category__title">CS CENTER</h1>
            <h2 className="text-white font-bold text-[28px] mb-4 tablet:pt-5">
              02-336-2946
            </h2>
            <h3 className="text-gray text-sm">월~토 10:30 - 19:00</h3>
            <h3 className="text-gray text-sm">일 13:30 - 18:00</h3>
            <h3 className="text-gray text-sm">점심시간 12:00 - 13:30</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
