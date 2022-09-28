import { openNewTab } from '@utils/open-new-tab';
import instagramIcon from '@assets/icons/sns/instagram.jpg';
import kakaoIcon from '@assets/icons/sns/kakao.jpg';
import naverIcon from '@assets/icons/sns/naver.jpg';
import youtubeIcon from '@assets/icons/sns/youtube.jpg';
import BlurImage from '@components/blur-image';

const snsItems = [
  {
    imgComponent: <BlurImage src={instagramIcon} alt="instagram" />,
    comment: 'instagram',
    link: 'https://www.instagram.com/vespa_sinchon/',
  },
  {
    imgComponent: <BlurImage src={kakaoIcon} alt="kakao" />,
    comment: '카카오톡 채널',
    link: 'https://pf.kakao.com/_nxlHxnT',
  },
  {
    imgComponent: <BlurImage src={naverIcon} alt="naver" />,
    comment: '네이버 블로그',
    link: 'https://blog.naver.com/nana8867',
  },
  {
    imgComponent: <BlurImage src={youtubeIcon} alt="youtube" />,
    comment: 'Youtube',
    link: 'https://www.youtube.com/channel/UCTd4PyrzpUjEKUEg_h5m-2w',
  },
];

function Sns() {
  return (
    <section className="sns">
      <h1 className="sns__title">
        피아지오 베스파 신촌점의 다양한 소식을 받아보실 수 있습니다.
      </h1>
      <ul className="sns__list">
        {snsItems.map((snsItem) => (
          <li
            key={snsItem.link}
            className="sns__list-item"
            onClick={() => openNewTab(snsItem.link)}
          >
            {snsItem.imgComponent}
            <p className="sns__list-item__comment">{snsItem.comment}</p>
            <p className="sns__list-item__shortcut">{'> 바로가기'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Sns;
