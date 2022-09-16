import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

function Header() {
  const router = useRouter();

  const handleLogoClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <header className="header">
      <button className="header__logo" onClick={handleLogoClick} />
    </header>
  );
}

export default Header;
