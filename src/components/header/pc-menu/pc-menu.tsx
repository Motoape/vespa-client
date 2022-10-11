import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import BlurImage from '../../blur-image';
import classnames from 'classnames';

function PcMenu() {
  const router = useRouter();
  const { pathname } = router;
  console.log('pathname: ', pathname);

  const onMenuItemClick = (event: MouseEvent<HTMLLIElement>) => {
    router.push(event.currentTarget.dataset.url as string);
  };

  const accessoriesMenuUlClassnames = classnames('pc-menu__nav__2nd', {
    '!shadow-inner !opacity-100 !visible': pathname.includes('accessories'),
  });

  const accessoriesMenuLiClassnames = classnames({
    '!shadow-hover !text-dark-gray': pathname.includes('accessories'),
  });

  return (
    <nav className="pc-menu__nav__1st">
      <ul className="pc-menu__nav__1st-list">
        <li>
          <h1>MODEL</h1>
          <ul className="pc-menu__nav__2nd">
            <li>
              <h2>VESPA</h2>
              <ul className="pc-menu__nav__3rd">
                <li>
                  <h3>PRIMAVERA</h3>
                  <ul className="pc-menu__nav__4th">
                    <li>
                      <BlurImage
                        src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                        alt="primavera"
                        remote
                      />
                      <p className="mt-2.5">PRIMAVERA</p>
                    </li>
                    <li>
                      <BlurImage
                        src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                        alt="primavera"
                        remote
                      />
                      <p className="mt-2.5">S Version</p>
                    </li>
                    <li>
                      <BlurImage
                        src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                        alt="primavera"
                        remote
                      />
                      <p className="mt-2.5">PRODUCT(RED)</p>
                    </li>
                    <li>
                      <BlurImage
                        src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                        alt="primavera"
                        remote
                      />
                      <p className="mt-2.5">PIC-NIC</p>
                    </li>
                    <li>
                      <BlurImage
                        src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                        alt="primavera"
                        remote
                      />
                      <p className="mt-2.5">75TH Anniverary</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>SPRINT</h3>
                </li>
                <li>
                  <h3>GTS</h3>
                </li>
                <li>
                  <h3>GTV</h3>
                </li>
              </ul>
            </li>
            <li>
              <h2>PIAGGIO</h2>
            </li>
          </ul>
        </li>
        <li>
          <h1>ACCESSORIES&PARTS</h1>
          <ul className={accessoriesMenuUlClassnames} role="accessories-nav">
            <li
              className={accessoriesMenuLiClassnames}
              data-url="/accessories"
              onClick={onMenuItemClick}
            >
              <h2>정품 악세사리</h2>
            </li>
          </ul>
        </li>
        <li data-url="/promotion" onClick={onMenuItemClick}>
          <h1>PROMOTION</h1>
        </li>
        <li data-url="/service" onClick={onMenuItemClick}>
          <h1>SERVICE</h1>
        </li>
        <li data-url="/link/driver" onClick={onMenuItemClick}>
          <h1>시승신청</h1>
        </li>
      </ul>
    </nav>
  );
}

export default PcMenu;
