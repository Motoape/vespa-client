import { useRouter } from 'next/router';
import BlurImage from '../../blur-image';

interface CardProps {
  promotionList: any[];
}

function Card({ promotionList }: CardProps) {
  const router = useRouter();
  return (
    <div className="promotion__container__list">
      {promotionList.map((promotion, index) => (
        <div
          key={index}
          className="promotion__container__list-card"
          onClick={() =>
            router.push(`/promotion/${promotion.type}/${promotion.prmtSeq}`)
          }
        >
          <BlurImage src={promotion.imageUrl} alt="promotion" remote />
          <h4>{promotion.title}</h4>
          <p>{`${promotion.from} ~ ${promotion.to}`}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
