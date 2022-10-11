import AccessoriesCards from '@components/accessories/accessories-cards';
import AccessoriesOptions from '@components/accessories/accessories-options';

function Accessories() {
  const accessoriesList = [
    {
      imageUrl:
        'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/parts/93adb52d-7484-46db-83c6-60ec569410e4_PRISPR%20%EB%B0%9C%ED%8C%90%20%EA%B3%A0%EB%AC%B4%EB%A7%A4%ED%8A%B8%20%EB%B8%94%EB%9E%99%20.jpg',
      goodsName: 'PRI/SPR 발판 고무매트 블랙',
      partsNumber: '1B00107900VN',
      goodsPrice: '25000',
    },
    {
      imageUrl:
        'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/parts/93adb52d-7484-46db-83c6-60ec569410e4_PRISPR%20%EB%B0%9C%ED%8C%90%20%EA%B3%A0%EB%AC%B4%EB%A7%A4%ED%8A%B8%20%EB%B8%94%EB%9E%99%20.jpg',
      goodsName: 'PRI/SPR 발판 고무매트 블랙',
      partsNumber: '1B00107900VN',
      goodsPrice: '25000',
    },
    {
      imageUrl:
        'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/parts/93adb52d-7484-46db-83c6-60ec569410e4_PRISPR%20%EB%B0%9C%ED%8C%90%20%EA%B3%A0%EB%AC%B4%EB%A7%A4%ED%8A%B8%20%EB%B8%94%EB%9E%99%20.jpg',
      goodsName: 'PRI/SPR 발판 고무매트 블랙',
      partsNumber: '1B00107900VN',
      goodsPrice: '25000',
    },
    {
      imageUrl:
        'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/parts/93adb52d-7484-46db-83c6-60ec569410e4_PRISPR%20%EB%B0%9C%ED%8C%90%20%EA%B3%A0%EB%AC%B4%EB%A7%A4%ED%8A%B8%20%EB%B8%94%EB%9E%99%20.jpg',
      goodsName: 'PRI/SPR 발판 고무매트 블랙',
      partsNumber: '1B00107900VN',
      goodsPrice: '25000',
    },
    {
      imageUrl:
        'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/parts/93adb52d-7484-46db-83c6-60ec569410e4_PRISPR%20%EB%B0%9C%ED%8C%90%20%EA%B3%A0%EB%AC%B4%EB%A7%A4%ED%8A%B8%20%EB%B8%94%EB%9E%99%20.jpg',
      goodsName: 'PRI/SPR 발판 고무매트 블랙',
      partsNumber: '1B00107900VN',
      goodsPrice: '25000',
    },
  ];

  return (
    <main className="accessories">
      <AccessoriesOptions />
      <div className="accessories__comment">
        구매를 원하시는 경우 <b>스토어팜</b>에서 부품번호를 검색해주세요.
      </div>
      <nav className="accessories__sort-navigation">
        <button className="active">최신등록순</button>
        <button data-sort="asc">낮은가격순</button>
        <button data-sort="desc">높은가격순</button>
      </nav>
      <AccessoriesCards accessoriesList={accessoriesList} />
    </main>
  );
}

export default Accessories;
