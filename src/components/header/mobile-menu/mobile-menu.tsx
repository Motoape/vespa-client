import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import BlurImage from '../../blur-image';

function MobileMenu() {
  const router = useRouter();

  const onMenuItemClick = (event: MouseEvent<HTMLLIElement>) => {
    router.push(event.currentTarget.dataset.url as string);
  };

  return (
    <nav className="mobile-menu__nav__1st">
      <ul className="mobile-menu__nav__1st-list">
        <li>
          <button>
            Model
            <i className="fas fa-chevron-down active" />
          </button>
          <ul className="mobile-menu__nav__2nd">
            <li>
              <button>- VESPA</button>
              <ul className="mobile-menu__nav__3rd">
                <li>
                  <button>
                    PRIMAVERA
                    <i className="fas fa-chevron-down active" />
                  </button>
                  <div className="mobile-menu__nav__4th">
                    <ul>
                      <li>
                        <BlurImage
                          src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                          alt="primavera"
                          remote
                        />
                        <p>PRIMAVERA</p>
                      </li>
                      <li>
                        <BlurImage
                          src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                          alt="primavera"
                          remote
                        />
                        <p>S Version</p>
                      </li>
                      <li>
                        <BlurImage
                          src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                          alt="primavera"
                          remote
                        />
                        <p>PRODUCT(RED)</p>
                      </li>
                      <li>
                        <BlurImage
                          src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                          alt="primavera"
                          remote
                        />
                        <p>PIC-NIC</p>
                      </li>
                      <li>
                        <BlurImage
                          src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/3a83e8e9-5635-40ea-ad95-9b7879fb484d_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg"
                          alt="primavera"
                          remote
                        />
                        <p>75TH Anniverary</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button>
                    SPRINT
                    <i className="fas fa-chevron-down active" />
                  </button>
                </li>
                <li>
                  <button>
                    GTS
                    <i className="fas fa-chevron-down active" />
                  </button>
                </li>
                <li>
                  <button>
                    GTV
                    <i className="fas fa-chevron-down active" />
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button>- PIAGGIO</button>
            </li>
          </ul>
        </li>
        <li>
          <button>Accessories&Parts</button>
          <ul className="mobile-menu__nav__2nd">
            <li>
              <button>- 정품 악세사리</button>
            </li>
          </ul>
        </li>
        <li data-url="/promotion" onClick={onMenuItemClick}>
          <button>Promotion</button>
        </li>
        <li data-url="/service" onClick={onMenuItemClick}>
          <button>Service</button>
        </li>
        <li data-url="/link/driver" onClick={onMenuItemClick}>
          <button>시승신청</button>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
