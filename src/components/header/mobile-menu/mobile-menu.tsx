import Link from 'next/link';

function MobileMenu() {
  return (
    <nav className="mobile-menu__nav__1st">
      <ul className="mobile-menu__nav__1st-list">
        <li>
          MODEL
          <ul className="mobile-menu__nav__2nd">
            <li>VESPA</li>
            <li>PIAGGIO</li>
          </ul>
        </li>
        <li>
          ACCESSORIES&PARTS
          <ul className="mobile-menu__nav__2nd">
            <li>정품 악세사리</li>
          </ul>
        </li>
        <li>
          <Link href="/promotion">PROMOTION</Link>
        </li>
        <li>
          <Link href="/service">SERVICE</Link>
        </li>
        <li>
          <Link href="/link/driver">시승신청</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
