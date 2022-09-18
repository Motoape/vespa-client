import { MouseEvent } from 'react';

function Price() {
  const downloadFile = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.dataset.file as string);
  };

  return (
    <section className="price">
      <h2 className="price__title">피아지오 베스파 가격표</h2>
      <div className="price__container">
        <h2 className="price__container__table-title">VESPA</h2>
        <div className="price__container__table-wrapper">
          <table className="price__container__table">
            <thead>
              <tr>
                <th>모델</th>
                <th>버전</th>
                <th>권장소비자가격</th>
                <th>롱 스크린 프로모션가격</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tb-b-r" rowSpan={4}>
                  PRIMAVERA 125
                </td>
                <td>PRIMAVERA 125</td>
                <td>₩4,870,000</td>
                <td>₩5,150,000</td>
              </tr>
              <tr>
                <td>PRIMAVERA S 125</td>
                <td>₩4,970,000</td>
                <td>₩5,250,000</td>
              </tr>
              <tr>
                <td>PRIMAVERA 125 (RED)**</td>
                <td>₩5,350,000</td>
                <td>₩5,630,000</td>
              </tr>

              <tr>
                <td>PRIMAVERA 125 75TH**</td>
                <td>₩6,450,000</td>
                <td>₩6,690,000</td>
              </tr>
              <tr>
                <td className="tb-b-r" rowSpan={4}>
                  SPRINT 125
                </td>
                <td>SPRINT 125</td>
                <td>₩4,970,000</td>
                <td>₩5,250,000</td>
              </tr>
              <tr>
                <td>SPRINT S 125</td>
                <td>₩5,070,000</td>
                <td>₩5,350,000</td>
              </tr>
              <tr>
                <td>SPRINT KOREA EDITION 125**</td>
                <td>₩5,370,000</td>
                <td>₩5,590,000</td>
              </tr>
              <tr>
                <td>SPRINT S TFT 125**</td>
                <td>₩5,670,000</td>
                <td>₩5,890,000</td>
              </tr>
              <tr>
                <td className="tb-b-r" rowSpan={4}>
                  GTS
                </td>
                <td>GTS 125</td>
                <td>₩6,270,000</td>
                <td>₩6,550,000</td>
              </tr>
              <tr>
                <td>GTS 300 SUPER SPORT</td>
                <td>₩8,125,000</td>
                <td>₩8,405,000</td>
              </tr>
              <tr>
                <td>GTS 300 SUPER TECH</td>
                <td>₩9,020,000</td>
                <td>₩9,300,000</td>
              </tr>
              <tr>
                <td>GTS 300 75TH**</td>
                <td>₩10,435,000</td>
                <td>₩10,645,000</td>
              </tr>
              <tr>
                <td className="tb-b-r" rowSpan={1}>
                  GTV
                </td>
                <td>GTV 300 SEI GIORNI**</td>
                <td>₩8,400,000</td>
                <td>₩8,680,000</td>
              </tr>
            </tbody>
          </table>
          <div className="price__container__table-files">
            <button data-file="vespa_125cc.jpeg" onClick={downloadFile}>
              <i className="fa fa-download fa-lg" />
              베스파 125cc 가격표
            </button>
            <button data-file="vespa_300cc.jpeg" onClick={downloadFile}>
              <i className="fa fa-download fa-lg" />
              베스파 300cc 가격표
            </button>
          </div>
        </div>
        <h2 className="price__container__table-title mt-15 laptop:mt-10">
          PIAGGIO
        </h2>
        <div className="price__container__table-wrapper">
          <table className="price__container__table">
            <thead>
              <tr>
                <th>모델</th>
                <th>버전</th>
                <th>권장소비자가격</th>
                <th>롱 스크린 프로모션가격</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tb-b-r" rowSpan={2}>
                  PIAGGIO
                </td>
                <td>MEDLEY 125 S</td>
                <td>₩4,490,000</td>
                <td>-</td>
              </tr>
              <tr>
                <td>PIAGGIO BEVERLY 400</td>
                <td>₩10,370,000</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <div className="price__container__table-files">
            <button data-file="piaggio_lineup.jpeg" onClick={downloadFile}>
              <i className="fa fa-download fa-lg" />
              피아지오 가격표
            </button>
          </div>
        </div>
      </div>

      <div className="price__information">
        <p>
          * 모델별 권장소비자 가격은 2022년 기준이며, 사전 예고 없이 변경될 수
          있습니다.(VAT 포함)
        </p>
        <p>
          * 각종 옵션 선택 및 등록비용 등을 포함한 정확한 구입가격은 피아지오
          베스파 신촌점에 문의하시기 바랍니다.
        </p>
        <p>
          * 정확한 사양 및 제원, 모델별 옵션 적용 사항은 피아지오 베스파
          신촌점에 문의하시기 바랍니다.
        </p>
      </div>
    </section>
  );
}

export default Price;
