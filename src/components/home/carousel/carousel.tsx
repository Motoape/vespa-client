import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlurImage from '@components/blur-image';
import { MouseEvent, useState } from 'react';
import classnames from 'classnames';

const settings: Settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  prevArrow: (
    <button>
      <i className="fas fa-chevron-left carousel-chevron" />
    </button>
  ),
  nextArrow: (
    <button>
      <i className="fas fa-chevron-right carousel-chevron" />
    </button>
  ),
};

function Carousel() {
  const [items, setItems] = useState([
    {
      title: '완벽한 여행 동반자',
      modelName: 'GTS 300 SUPER SPORT',
      url: 'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/120f634c-6703-48e2-87bd-5ca15e7b27c4_GTS-300-SS.jpg',
      desc1: '베스파 75주년 특별 한정판',
      desc2: '4.3인치 TFT 디스플레이 대시보드',
      desc3: '엔진을 통한 최고의 품질 및 신뢰성',
      isActive: false,
    },
    {
      title: '끝없는 여행을 위한 새로운 경험.',
      modelName: 'GTS 300 SUPER TECH',
      url: 'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/dfdd9a23-49b4-4f64-a9d9-333aae0d9d00_GTS-300-ST.jpg',
      desc1: '베스파 75주년 특별 한정판',
      desc2: '4.3인치 TFT 디스플레이 대시보드',
      desc3: '엔진을 통한 최고의 품질 및 신뢰성',
      isActive: false,
    },
    {
      title: '75주년의 여행',
      modelName: 'GTS 300 75TH Anniversary',
      url: 'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/4eb538dd-f91a-41a7-a3e6-b9baa510f4a9_GTS-300-75.jpg',
      desc1: '베스파 75주년 특별 한정판',
      desc2: '4.3인치 TFT 디스플레이 대시보드',
      desc3: '엔진을 통한 최고의 품질 및 신뢰성',
      isActive: false,
    },
    {
      title: '전설의 현대적 진화',
      modelName: 'SEI GIORNI',
      url: 'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/4c400ba9-6d3b-4fe5-a947-d3de6b016dfd_GTV-300.jpg',
      desc1: '베스파 75주년 특별 한정판',
      desc2: '4.3인치 TFT 디스플레이 대시보드',
      desc3: '엔진을 통한 최고의 품질 및 신뢰성',
      isActive: false,
    },
    {
      title: '누구도 따라올수 없는 아름다운 디자인',
      modelName: 'PRIMAVERA',
      url: 'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/501be877-46f8-4cae-890f-21ee4a8032dd_%ED%94%84%EB%A6%AC%EB%A7%88%EB%B2%A0%EB%9D%BC.jpg',
      desc1: '베스파 75주년 특별 한정판',
      desc2: '4.3인치 TFT 디스플레이 대시보드',
      desc3: '엔진을 통한 최고의 품질 및 신뢰성',
      isActive: false,
    },
    {
      title: '75주년의 여정',
      modelName: '75TH Anniverary',
      url: 'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/e35b15d8-dbfb-43b0-b08e-968199b79274_%ED%94%84%EB%A6%AC%EB%A7%88%EB%B2%A0%EB%9D%BC-75.jpg',
      desc1: '베스파 75주년 특별 한정판',
      desc2: '4.3인치 TFT 디스플레이 대시보드',
      desc3: '엔진을 통한 최고의 품질 및 신뢰성',
      isActive: false,
    },
  ]);

  const SliderComponent = Slider as any;

  const handleMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
    const modelName = event.currentTarget.dataset.model as string;
    const newItems = items.map((item) => ({
      ...item,
      isActive: item.modelName === modelName,
    }));
    setItems(newItems);
  };

  const handleMouseLeave = () => {
    const newItems = items.map((item) => ({
      ...item,
      isActive: false,
    }));
    setItems(newItems);
  };

  return (
    <section className="carousel">
      <SliderComponent {...settings}>
        {items.map((item) => (
          <div key={item.modelName} className="carousel__box">
            <div className="carousel__item">
              <label className="carousel__item-title">
                <span>{item.title}</span>
                <span>{item.modelName}</span>
              </label>
              <div
                className={classnames(
                  'carousel__item-image__box',
                  item.isActive && 'up',
                )}
              >
                <BlurImage src={item.url} alt={item.modelName} remote />
              </div>
              <div
                className={classnames(
                  'carousel__item-description',
                  item.isActive && 'show',
                )}
              >
                <p>
                  <i className="fas fa-check" />
                  {item.desc1}
                </p>
                <p>
                  <i className="fas fa-check" />
                  {item.desc2}
                </p>
                <p>
                  <i className="fas fa-check" />
                  {item.desc3}
                </p>
              </div>
            </div>
            <button
              data-model={item.modelName}
              className={classnames(
                'carousel__detail-btn',
                item.isActive && 'active',
              )}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              자세한 정보
            </button>
          </div>
        ))}
      </SliderComponent>
    </section>
  );
}

export default Carousel;
