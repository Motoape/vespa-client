import Image from 'next/image';
import bannerImg from '@assets/images/banner-service.jpg';
import { MouseEvent, useRef, useState } from 'react';
import Information from '@/src/components/service/information';
import Assuarnce from '@/src/components/service/assurance';
import Cost from '@/src/components/service/cost';
import classNames from 'classnames';

function ServicePage() {
  const navRef = useRef<HTMLElement>(null);
  const [navButtons, setNavButtons] = useState([
    { id: 'info', text: '서비스 소개', isActive: true },
    { id: 'assurance', text: '보증제도', isActive: false },
    { id: 'cost', text: '권장 표준 공임 제도', isActive: false },
  ]);

  const executeScroll = (event: MouseEvent<HTMLButtonElement>) => {
    const targetId = event.currentTarget.dataset.id as string;
    const el = document.getElementById(targetId);
    if (el) {
      const newNavButtons = navButtons.map((btn) => ({
        ...btn,
        isActive: btn.id === targetId,
      }));
      setNavButtons(newNavButtons);

      window.scrollTo(0, el.offsetTop - 50);
    }
  };

  return (
    <section className="service">
      <Image src={bannerImg} alt="banner" />
      <nav ref={navRef} className="service__navigation">
        <div className="grid grid-cols-[90px_80px_130px] justify-center">
          {navButtons.map(({ id, text, isActive }) => (
            <button
              key={id}
              data-id={id}
              className={classNames(
                isActive ? 'active' : 'inactive',
                id !== 'info' ? 'border-left' : '',
              )}
              onClick={executeScroll}
            >
              {text}
            </button>
          ))}
        </div>
      </nav>
      <div className="service__container">
        <div id="info" className="service__container__box bg-[#F4F4F4]">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="service__container__box-title">
              Piaggio Vespa Service
            </h2>
            <h4 className="service__container__box-subtitle">
              피아지오 베스파 서비스 소개
            </h4>
            <Information />
          </div>
        </div>
        <div id="assurance" className="service__container__box bg-[#EAEAEA]">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="service__container__box-title">보증제도</h2>
            <h4 className="service__container__box-subtitle">
              {`"`}피아지오 베스파에서는 피아지오를 통한 판매 차량에 대하여
              아래와 같은 <span className="text-red">보증 제도</span>를 운영하고
              있습니다. 보증제도란 모터사이클을 구성하는 각 부품의 재료 또는
              제조상 불량이 발생한 경우, 보증서에 표기된 기간과 조건에 따라 이에
              대한 무상수리를 실시하는 제도입니다.{`"`}
            </h4>
            <Assuarnce />
          </div>
        </div>
        <div id="cost" className="service__container__box bg-[#F7F7F7]">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="service__container__box-title">표준 공임 제도</h2>
            <h4 className="service__container__box-subtitle">
              피아지오 베스파는 작업별 표준공임과 시간을 준수합니다.
            </h4>
            <Cost />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;