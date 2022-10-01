import { useRouter } from 'next/router';
import { MouseEvent, useEffect } from 'react';
import { useMedia, useToggle } from 'react-use';
import MobileMenu from './mobile-menu';
import PcMenu from './pc-menu';

function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useToggle(false);
  const isWide = useMedia('(min-width: 1000px)', false);

  const handleLogoClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/');
  };

  useEffect(() => {
    if (isWide) {
      setIsMenuOpen(false);
    }
  }, [isWide]);

  return (
    <>
      <header className="header">
        <button className="header__logo" onClick={handleLogoClick} />
        {isWide ? (
          <PcMenu />
        ) : (
          <button className="header__menu-btn" onClick={setIsMenuOpen}>
            {isMenuOpen ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-bars" />
            )}
          </button>
        )}
      </header>
      {isMenuOpen && <MobileMenu />}
    </>
  );
}

export default Header;
