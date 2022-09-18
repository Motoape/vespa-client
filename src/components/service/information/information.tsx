function Information() {
  return (
    <div className="service__container__box__content information">
      <div className="py-[45px] px-12.5 laptop:py-7.5 laptop:px-5 border-b-2 border-solid border-[#e2e2e2]">
        <h3>
          <i className="fas fa-square-full fa-2xs" />
          피아지오 베스파 안심 서비스
        </h3>
        <h4 className="text-sm mobile:text-xs">
          우리의 목표는 피아지오 베스파를 선택하고, 사용중인 고객님께서 피아지오
          베스파 서비스 네트워크를 통해 모터사이클을 안심하고, 안전하게,
          지속적으로 이용할 수 있도록 최선의 지원을 제공하는 것입니다. 피아지오
          베스파를 구입하시는 고객 여러분께 다음과 같은&nbsp;
          <span className="text-red">안심 서비스</span>를 제공합니다.
        </h4>
      </div>
      <div className="information__table">
        <div className="information__table__box maintenance">
          <h3>Reliable Maintenance Inspection</h3>
          <div className="grid grid-cols-[4fr_1fr]">
            <div className="information__table__box-content">
              <hr className="information__table__box-divider" />
              <h4>
                안심할 수 있는 <span className="text-red">정기점검</span>
              </h4>
              <p>
                PIAGGIO는 고객님의 차량을 최적의 상태로 관리할 수 있는 정기점검
                서비스를 제공합니다.(무상, 유상 정기점검)
              </p>
            </div>
          </div>
        </div>
        <div className="information__table__box quality">
          <h3>Reliable quality</h3>
          <div className="grid grid-cols-[4fr_1fr]">
            <div className="information__table__box-content">
              <hr className="information__table__box-divider" />
              <h4>
                안심할 수 있는 <span className="text-red">신차품질</span>
              </h4>
              <p>PIAGGIO의 신차는 모두 PIAGGIO 월드 스탠다드 제품입니다.</p>
            </div>
          </div>
        </div>
        <div className="information__table__box genuine-parts">
          <h3>Reliable Genuine Parts</h3>
          <div className="grid grid-cols-[4fr_1fr]">
            <div className="information__table__box-content">
              <hr className="information__table__box-divider" />
              <h4>
                안심할 수 있는 <span className="text-red">순정부품</span>
              </h4>
              <p>PIAGGIO는 차량정비시 순정부품만을 사용합니다.</p>
            </div>
          </div>
        </div>
        <div className="information__table__box warranty">
          <h3>Reliable Warranty Policy</h3>
          <div className="grid grid-cols-[4fr_1fr]">
            <div className="information__table__box-content">
              <hr className="information__table__box-divider" />
              <h4>
                안심할 수 있는 <span className="text-red">신차보증</span>
              </h4>
              <p>
                구입한 차량에 이상이 발생했을 경우 PIAGGIO가 발행하는 보증서의
                조건에 근거하여 무상 보증수리를 해드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
