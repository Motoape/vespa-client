import promotionImage from '@assets/images/home/promotion.jpg';
import accessoriesImage from '@assets/images/home/accessories.jpg';
import financialImage from '@assets/images/home/financial.jpg';
import snsImage from '@assets/images/home/sns.jpg';
import BlurImage from '@components/blur-image';
import { useRouter } from 'next/router';

const gridItems = [
  {
    imgComponent: <BlurImage src={promotionImage} alt="promotion" />,
    comment: '피아지오 베스파 프로모션을 만나보세요.',
    link: '/promotion?type=2',
  },
  {
    imgComponent: <BlurImage src={accessoriesImage} alt="accessories" />,
    comment:
      '피아지오 베스파 악세사리 및 부품으로 더 멋진 나만의 스쿠터를 만들어보세요.',
    link: '/accessories',
  },
  {
    imgComponent: <BlurImage src={financialImage} alt="financial" />,
    comment: '내생의 첫 피아지오&베스파를 부담없이 구매해 보세요.',
    link: '/promotion?type=1',
  },
  {
    imgComponent: <BlurImage src={snsImage} alt="sns" />,
    comment: '피아지오 베스파 신촌점의 다양한 소식을 받아보실 수 있습니다.',
    link: '/link/sns',
  },
];

function MenuGrid() {
  const router = useRouter();
  return (
    <div className="menu-grid">
      <ul className="menu-grid__list">
        {gridItems.map((gridItem) => (
          <li key={gridItem.link} className="menu-grid__list-item">
            {gridItem.imgComponent}
            <hr className="menu-grid__list-item__divider" />
            <p className="menu-grid__list-item__comment">{gridItem.comment}</p>
            <br />
            <button
              className="menu-grid__list-item__shortcut"
              onClick={() => router.push(gridItem.link)}
            >
              <i className="fas fa-chevron-right" />
              바로가기
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuGrid;
