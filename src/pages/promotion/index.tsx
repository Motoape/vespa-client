import BlurImage from '@/src/components/blur-image/blur-image';
import classNames from 'classnames';
import { useState } from 'react';

function PromotionPage() {
  const [navButtons, setNavButtons] = useState([
    { id: 'info', text: '차량 프로모션', isActive: true },
    { id: 'assurance', text: '기타 프로모션', isActive: false },
  ]);

  return (
    <section className="promotion">
      <div className="py-5 pc:py-0" />
      <BlurImage
        src="https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/promotion/2aa1dd3d-d157-49b0-8c51-08ad6f34a9e6_12312.jpg"
        alt="banner"
        remote
      />
      <nav className="promotion__navigation">
        <div className="promotion__navigation-wrapper">
          {navButtons.map(({ id, text, isActive }) => (
            <button
              key={id}
              data-type={id}
              className={classNames(
                isActive ? 'active' : 'inactive',
                id !== 'info' ? 'border-left' : '',
              )}
            >
              {text}
            </button>
          ))}
        </div>
      </nav>
      <article className="promotion__container">
        <div className="promotion__container__header">
          <h2 className="text-32 text-[#525252] font-normal pl-2.5 laptop:invisible">
            진행중인 프로모션
          </h2>
          <div className="flex">
            <div className="promotion__container__header__select-wrapper">
              <select name="category">
                <option value="title">제목</option>
              </select>
              <i className="fa fa-chevron-down fa-2xs absolute right-1 pr-2" />
            </div>
            <div className="promotion__container__header__input-wrapper">
              <input type="text" />
              <button type="button" className="fas fa-search" />
            </div>
          </div>
        </div>
        <div className="promotion__container__list"></div>
      </article>
    </section>
  );
}

export default PromotionPage;
