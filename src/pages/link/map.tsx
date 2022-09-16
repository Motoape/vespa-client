import { useEffect, useRef } from 'react';
import { LATITUDE, LONGITUDE } from '@constants/map';

function Home() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    kakao.maps.load(() => {
      const container = mapRef.current;
      if (container) {
        const options = {
          center: new kakao.maps.LatLng(LATITUDE, LONGITUDE),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        const markerPosition = options.center;
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      }
    });
  }, []);

  return (
    <section className="mt-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center font-bold text-dark-gray text-[1.3125rem]">
          피아지오 베스파 신촌점 오시는 길
        </h2>
        <div
          ref={mapRef}
          className="w-full h-[500px] mt-12 border-[1px] border-solid border-[#D9D9D9]"
        />
        <div className="px-5 pt-5 mt-10 border-t-[1px] border-solid border-[#D9D9D9]">
          <h2 className="px-3 border-l-4 border-solid border-[#CBCBCB] font-black">
            찾아오시는 길
          </h2>
          <div>
            <p>
              <i className="fas far-locate"></i>
              <strong>서울특별시 마포구 월드컵북로 40, 1층</strong>
              <span>(02-336-2946)</span>
            </p>
            <p>
              <i className="fas far-subway"></i>
              <strong>지하철</strong>
              <span>
                홍대입구역(1번출구)도보 7분
                <br />
                망원역(1번출구)도보 10분
                <br />
                합정역(1번출구)도보 15분
              </span>
            </p>
            <p>
              <i className="fas far-bus"></i>
              <strong>버스</strong>
              <span>
                청원빌딩 정류장:[마포06]
                <br />
                서울도시가스마포사옥 정류장:[7016]
              </span>
            </p>
            <p>
              <i className="fas far-park"></i>
              <strong>주차장</strong>
              <span>매장 지하1층 기계식 주차장</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
