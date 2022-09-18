import useIntersectionObserver from '@/src/hooks/useIntersectionObserver';
import { useRouter } from 'next/router';
import { MouseEvent, useRef, useState } from 'react';
import classNames from 'classnames';
import consultingIcon from '@assets/icons/quick-menu/consulting.png';
import billingIcon from '@assets/icons/quick-menu/billing.png';
import locationIcon from '@assets/icons/quick-menu/location.png';
import motorcycleIcon from '@assets/icons/quick-menu/motorcycle.png';
import BlurImage from '../blur-image/blur-image';

function QuickMenu() {
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const [isFixedMenu, setIsFixedMenu] = useState(true);

  useIntersectionObserver({
    target: navRef,
    threshold: 0.1,
    enabled: true,
    onIntersect: () => {
      setIsFixedMenu(false);
    },
    offIntersect: () => {
      setIsFixedMenu(true);
    },
  });

  const onMenuItemClick = (event: MouseEvent<HTMLLIElement>) => {
    router.push(event.currentTarget.dataset.url as string);
  };

  const fixedMenuClassNames = classNames(
    'quick-menu__fixed-wrapper',
    isFixedMenu
      ? 'quick-menu__fixed-list__show'
      : 'quick-menu__fixed-list__hidden',
  );

  return (
    <nav ref={navRef} className="quick-menu">
      {/* 하단 퀵메뉴영역이 아닐 때 보여지는 fixed 퀵메뉴 */}
      <div className={fixedMenuClassNames}>
        <ul className="quick-menu__fixed-list">
          <li
            className="quick-menu__fixed-list-item"
            data-url="/link/purchase"
            onClick={onMenuItemClick}
          >
            <BlurImage
              src={consultingIcon}
              alt="consulting"
              width={20}
              height={20}
            />
            <label className="quick-menu__fixed-list-item__label">
              구매상담
            </label>
          </li>
          <li
            className="quick-menu__fixed-list-item"
            data-url="/link/price"
            onClick={onMenuItemClick}
          >
            <BlurImage src={billingIcon} alt="billing" width={20} height={20} />
            <label className="quick-menu__fixed-list-item__label">가격표</label>
          </li>
          <li
            className="quick-menu__fixed-list-item"
            data-url="/link/map"
            onClick={onMenuItemClick}
          >
            <BlurImage
              src={locationIcon}
              alt="location"
              width={30}
              height={30}
            />
            <label className="quick-menu__fixed-list-item__label">
              딜러위치
            </label>
          </li>
          <li
            className="quick-menu__fixed-list-item"
            data-url="/link/driver"
            onClick={onMenuItemClick}
          >
            <BlurImage
              src={motorcycleIcon}
              alt="driver"
              width={30}
              height={30}
            />
            <label className="quick-menu__fixed-list-item__label">
              시승신청
            </label>
          </li>
        </ul>
      </div>
      {/* 하단에 내려왔을 때 보여지는 퀵메뉴 */}
      <ul className="quick-menu__list">
        <li
          className="quick-menu__list-item"
          data-url="/link/purchase"
          onClick={onMenuItemClick}
        >
          <i className="quick-menu__list-item__icon" aria-label="consulting" />
          <label className="quick-menu__list-item__label">구매상담</label>
        </li>
        <li
          className="quick-menu__list-item"
          data-url="/link/price"
          onClick={onMenuItemClick}
        >
          <i className="quick-menu__list-item__icon" aria-label="billing" />
          <label className="quick-menu__list-item__label">가격표</label>
        </li>
        <li
          className="quick-menu__list-item"
          data-url="/link/map"
          onClick={onMenuItemClick}
        >
          <i className="quick-menu__list-item__icon" aria-label="location" />
          <label className="quick-menu__list-item__label">딜러위치</label>
        </li>
        <li
          className="quick-menu__list-item"
          data-url="/link/driver"
          onClick={onMenuItemClick}
        >
          <i className="quick-menu__list-item__icon" aria-label="motorcycle" />
          <label className="quick-menu__list-item__label">시승신청</label>
        </li>
      </ul>
    </nav>
  );
}

export default QuickMenu;
