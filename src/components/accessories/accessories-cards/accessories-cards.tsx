import numberWithCommas from '@/src/utils/number-with-commas';
import { openNewTab } from '@/src/utils/open-new-tab';
import BlurImage from '../../blur-image';

interface CardProps {
  accessoriesList: any[];
}

function AccessoriesCards({ accessoriesList }: CardProps) {
  return (
    <article className="accessories__container__list">
      {accessoriesList.map((accessories, index) => (
        <div key={index} className="accessories__container__list-card">
          <BlurImage src={accessories.imageUrl} alt="accessories" remote />
          <h4>{accessories.goodsName}</h4>
          <h5>{`부품번호 ${accessories.partsNumber}`}</h5>
          <p>{`₩ ${numberWithCommas(accessories.goodsPrice)}`}</p>
          <button
            onClick={() =>
              openNewTab(
                'https://smartstore.naver.com/vespa_motoape/products/5618682016',
              )
            }
          >
            스토어팜 바로가기
          </button>
        </div>
      ))}
    </article>
  );
}

export default AccessoriesCards;
