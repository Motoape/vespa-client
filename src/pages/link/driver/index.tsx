import externalLinkIcon from '@assets/icons/driver/external-link.png';
import choiceMotorcycleIcon from '@assets/icons/purchase/choice-motorcycle.png';
import checkSquareIcon from '@assets/icons/driver/check-square.png';
import { openNewTab } from '@/src/utils/open-new-tab';
import { NAVER_BOOKING } from '@constants/links';
import BlurImage from '@components/blur-image/blur-image';

function Driver() {
  return (
    <section className="driver">
      <div className="driver__title-wrapper">
        <h2 className="font-black text-[2.625rem] pt-9 laptop:text-2xl laptop:pt-5">
          시승신청
        </h2>
        <h4 className="text-center text-dark-gray font-medium mt-5 laptop:mt-4 laptop:text-sm">
          아래 {`'베스파 신촌점 시승 신청'`} 링크를 통해 시승 신청 예약을 하실
          수 있습니다.
        </h4>
      </div>
      <div className="driver__stepper">
        <ul className="driver__stepper__list">
          <li className="driver__stepper__list-item">
            <BlurImage src={externalLinkIcon} alt="external-link" />
            <p className="pt-1">01.{`'베스파 신촌점 시승 신청'`}</p>
            <p>예약 페이지 이동</p>
          </li>
          <li className="driver__stepper__list-item justify-center -mt-7.5">
            <i className="fas fa-chevron-right" />
          </li>
          <li className="driver__stepper__list-item">
            <BlurImage src={choiceMotorcycleIcon} alt="choice-motorcycle" />
            <p className="pt-1">02.차량 및 시승날짜 선택</p>
          </li>
          <li className="driver__stepper__list-item justify-center -mt-7.5">
            <i className="fas fa-chevron-right" />
          </li>
          <li className="driver__stepper__list-item">
            <BlurImage src={checkSquareIcon} alt="check-square" />
            <p className="pt-1">03.시승 신청 날짜에 방문</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-15">
        <button
          className="w-[250px] h-[45px] bg-blue text-white text-sm font-medium laptop:text-xs"
          onClick={() => openNewTab(NAVER_BOOKING)}
        >
          베스파 신촌점 시승 신청
        </button>
      </div>
      <div className="driver__subscribe__info">
        <p className="driver__subscribe__info-text">
          <i className="fas fa-square mr-3" />
          추가 시승 신청은 현장에서 가능합니다.
        </p>
        <p className="driver__subscribe__info-text">
          <i className="fas fa-square mr-3" />
          시승은 우천 시 취소됩니다.
        </p>
        <p className="driver__subscribe__info-text">
          <i className="fas fa-square mr-3" />
          시승 신청 시 실물 운전면허증(125cc 초과의 모델일 경우 2종 소형)을
          반드시 소지하여 방문해 주셔야 합니다.
        </p>
        <p className="driver__subscribe__info-text">
          <i className="fas fa-square mr-3" />
          시운전은 만 21세 이상인 경우에만 가능한 점 알려드립니다.
        </p>
        <p className="driver__subscribe__info-text">
          <i className="fas fa-square mr-3" />
          시승인 또는 임차인은 교통법규를 준수하여 안전운전 할 것입니다.
        </p>
        <p className="driver__subscribe__info-text">
          <i className="fas fa-square mr-3" />
          대여 기간에 발생하는 교통법규 위반 벌금은 시승인 또는 임차인에게
          청구됩니다.
        </p>
        <p className="driver__subscribe__info-text">
          <i className="fas fa-square mr-3" />
          시승인 또는 임차인은 차량 파손 시 차량 인수가 불가능합니다.
        </p>
        <p className="driver__subscribe__info-text">
          <i className="fas fa-square mr-3" />
          시승 신청 시간 40분 초과 시 자동으로 예약이 취소됩니다.
        </p>
        <p className="driver__subscribe__info-text">
          <i className="fas fa-square mr-3" />
          시승 시간은 15분으로 제한됩니다.
        </p>
        <p className="mt-7" />
        <p className="driver__subscribe__info-text">
          **시승인 또는 임차인 이외의 자의 운행은 금지 되며 시승의 목적 외의
          용도로는 사용하지 않습니다.
          <br />
          시승인 또는 임차인 이외의 자의 운행에 발생하는 모든 사고에 대해서는
          시승인 또는 임차인의 책임입니다.
        </p>
      </div>
    </section>
  );
}

export default Driver;
