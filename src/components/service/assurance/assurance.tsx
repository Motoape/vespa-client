function Assuarnce() {
  return (
    <div className="service__container__box__content table-wrapper assurance">
      <h3>
        <i className="fas fa-square-full fa-2xs" />
        보증기간
      </h3>
      <div className="overflow-auto">
        <table className="assurance__table">
          <thead>
            <tr>
              <th>구분</th>
              <th colSpan={2}>제품보증기간</th>
              <th>보증대상부품</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>신차보증</td>
              <td>삼륜차</td>
              <td rowSpan={2} className="text-left">
                신차 출고일로부터 2년 이내
                <br />
                (주행거리 무제한)
              </td>
              <td rowSpan={3} className="text-left">
                모터사이클을 구성하는 모든 부품.
                <br />
                단, 다음은 제외함.
                <br />
                -소모부품 및 유지류(보증책자 참조)
                <br />
                -정기점검을 받지않은 차량
              </td>
            </tr>
            <tr>
              <td>이륜차</td>
            </tr>
            <tr>
              <td>정비보증</td>
              <td colSpan={2} className="text-left">
                <div>
                  <h4>
                    <span>신차 출고 후/주행거리</span>: 정비완료 후
                  </h4>
                  <h5>
                    <span>1년미만 또는 20,000km이내</span>: 인도일로부터 3개월
                  </h5>
                  <h5>
                    <span>3년미만 또는 60,000km이내</span>: 인도일로부터 2개월
                  </h5>
                  <h5>
                    <span>3년이상 또는 60,000km이상</span>: 인도일로부터 1개월
                  </h5>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <label className="inline-block text-sm text-[#444] mt-[15px] mobile:text-xs">
        ※ 공식 딜러로부터 정기점검을 받지 않은 차량은 남은 보증 기간에 상관없이
        보증권한이 소멸 될 수 있습니다.
      </label>
      <hr className="border-t-[1px] border-solid border-[#c6c6c6] my-10" />
      <h3>
        <i className="fas fa-square-full fa-2xs" />
        보증계승
      </h3>
      <h4 className="service__container__box-subtitle">
        보증기간이 남아있는 모터사이클(이탈로모토(유) 판매차량)을 구입하실
        때에는 구입 후 즉시 당사로 모터사이클과 정비노트(보증서 포함)를 가지고
        오셔서 필요한 점검(유료)과 필요사항의 기입, 날인을 받아 주십시오. 확인
        후 남은 기간에 대해 보증해 드립니다.
      </h4>
    </div>
  );
}

export default Assuarnce;
