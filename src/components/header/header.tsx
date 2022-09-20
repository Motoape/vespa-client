import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { useMedia } from 'react-use';
import PcMenu from './pc-menu';

function Header() {
  const router = useRouter();
  const isWide = useMedia('(min-width: 1000px)', false);

  const handleLogoClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <header className="header">
      <button className="header__logo" onClick={handleLogoClick} />
      {isWide ? (
        <PcMenu />
      ) : (
        <button className="header__menu-btn">
          <i className="fas fa-bars" />
        </button>
      )}
    </header>
  );
}

export default Header;
