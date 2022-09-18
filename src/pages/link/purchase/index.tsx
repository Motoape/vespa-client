import Image from 'next/image';
import choiceMotorcycleIcon from '@assets/icons/purchase/choice-motorcycle.png';
import contractIcon from '@assets/icons/purchase/contract.png';
import consultIcon from '@assets/icons/purchase/consult.png';
import { openNewTab } from '@/src/utils/open-new-tab';
import { KAKAOTALK } from '@/src/constants/links';

function Purchase() {
  return (
    <section className="purchase">
      <div className="purchase__title-wrapper">
        <h2 className="font-black text-[2.625rem] pt-9 laptop:text-2xl laptop:pt-5">
          구매상담신청
        </h2>
        <h4 className="text-center text-dark-gray font-medium mt-5 laptop:mt-4 laptop:text-sm">
          {`'베스파 신촌점'`} 채널을 통해 원하시는 모델 문의를 주시면
          <br />
          피아지오 베스파 차량 구매에 관한 모든것을 신속하고 정확하게
          알려드립니다.
        </h4>
      </div>
      <div className="purchase__stepper">
        <ul className="purchase__stepper__list">
          <li className="purchase__stepper__list-item">
            <Image src={choiceMotorcycleIcon} alt="choice-motorcycle" />
            <p className="pt-1">01.차량선택</p>
          </li>
          <li className="purchase__stepper__list-item justify-center -mt-7.5">
            <i className="fas fa-chevron-right" />
          </li>
          <li className="purchase__stepper__list-item">
            <Image src={contractIcon} alt="contract" />
            <p className="pt-1">02.{`'베스파 신촌점'`}</p>
            <p>채널 추가 후 문의</p>
          </li>
          <li className="purchase__stepper__list-item justify-center -mt-7.5">
            <i className="fas fa-chevron-right" />
          </li>
          <li className="purchase__stepper__list-item">
            <Image src={consultIcon} alt="consult" />
            <p className="pt-1">03.차량구매 상담진행</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-15">
        <button
          className="w-[250px] h-[45px] bg-blue text-white text-sm font-medium laptop:text-xs"
          onClick={() => openNewTab(KAKAOTALK)}
        >
          베스파 신촌점 채널 바로가기
        </button>
      </div>
    </section>
  );
}

export default Purchase;
