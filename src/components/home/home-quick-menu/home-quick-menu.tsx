import locationIcon from '@assets/icons/home/location.png';
import priceIcon from '@assets/icons/home/price.png';
import promotionIcon from '@assets/icons/home/promotion.png';
import BlurImage from '@components/blur-image';
import { useRouter } from 'next/router';

function HomeQuickMenu() {
  const router = useRouter();

  return (
    <div className="home-quick-menu">
      <ul className="home-quick-menu__list">
        <li className="home-quick-menu__list-item text-32 text-right">
          QUICK MENU
        </li>
        <li className="home-quick-menu__list-item">
          <div className="home-quick-menu__list-item__image">
            <BlurImage src={locationIcon} alt="location" />
          </div>
          <button onClick={() => router.push('/link/map')}>딜러위치</button>
        </li>
        <li className="home-quick-menu__list-item">
          <div className="home-quick-menu__list-item__image">
            <BlurImage src={priceIcon} alt="price" />
          </div>
          <button onClick={() => router.push('/link/price')}>가격표</button>
        </li>
        <li className="home-quick-menu__list-item">
          <div className="home-quick-menu__list-item__image">
            <BlurImage src={promotionIcon} alt="promotion" />
          </div>
          <button onClick={() => router.push('/promotion')}>프로모션</button>
        </li>
      </ul>
    </div>
  );
}

export default HomeQuickMenu;
