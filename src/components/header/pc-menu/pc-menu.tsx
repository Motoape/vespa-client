import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import BlurImage from '../../blur-image';

function PcMenu() {
  const router = useRouter();

  const onMenuItemClick = (event: MouseEvent<HTMLLIElement>) => {
    router.push(event.currentTarget.dataset.url as string);
  };

  return (
    <nav className="pc-menu__nav__1st">
      <ul className="pc-menu__nav__1st-list">
        <li>
          MODEL
          <ul className="pc-menu__nav__2nd">
            <li>
              VESPA
              <ul className="pc-menu__nav__3rd">
                <li>
                  PRIMAVERA
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
                <li>SPRINT</li>
                <li>GTS</li>
                <li>GTV</li>
              </ul>
            </li>
            <li>PIAGGIO</li>
          </ul>
        </li>
        <li>
          ACCESSORIES&PARTS
          <ul className="pc-menu__nav__2nd">
            <li>정품 악세사리</li>
          </ul>
        </li>
        <li data-url="/promotion" onClick={onMenuItemClick}>
          <span>PROMOTION</span>
        </li>
        <li data-url="/service" onClick={onMenuItemClick}>
          <span>SERVICE</span>
        </li>
        <li data-url="/link/driver" onClick={onMenuItemClick}>
          <span>시승신청</span>
        </li>
      </ul>
    </nav>
  );
}

export default PcMenu;
