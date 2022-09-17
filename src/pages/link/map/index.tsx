import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { LATITUDE, LONGITUDE } from '@constants/map';
import locationIcon from '@/public/icons/location-map/location.png';
import subwayIcon from '@/public/icons/location-map/subway.png';
import busIcon from '@/public/icons/location-map/bus.png';
import parkingLotIcon from '@/public/icons/location-map/parking-lot.png';

function LocationMap() {
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
    <section className="location-map">
      <div className="location-map__wrapper">
        <h2 className="text-center font-bold text-dark-gray text-[1.3125rem] py-12 tablet:font-medium tablet:py-5">
          피아지오 베스파 신촌점 오시는 길
        </h2>
        <div
          ref={mapRef}
          className="w-full h-[500px] border-[1px] border-solid border-[#D9D9D9]"
        />
        <div className="px-5 pt-5 mt-10 border-t-[1px] border-solid border-[#D9D9D9] tablet:px-0 tablet:mt-[1.875rem] ">
          <h2 className="px-3 border-l-4 border-solid border-[#CBCBCB] font-black tablet:text-sm">
            찾아오시는 길
          </h2>
          <div className="grid gap-7 mt-9 tablet:gap-5">
            <p className="flex items-center">
              <i className="location-map__icon">
                <Image
                  src={locationIcon}
                  width={28}
                  height={28}
                  alt="location"
                />
              </i>
              <strong className="mr-2 tablet:text-sm">
                서울특별시 마포구 월드컵북로 40, 1층
              </strong>
              <span className="text-[#454545] font-medium tablet:text-sm">
                (02-336-2946)
              </span>
            </p>
            <p className="flex items-center">
              <i className="location-map__icon">
                <Image src={subwayIcon} width={28} height={28} alt="subway" />
              </i>
              <strong className="location-map__transportation">지하철</strong>
              <span className="tablet:text-sm">
                홍대입구역(1번출구)도보 7분
                <br />
                망원역(1번출구)도보 10분
                <br />
                합정역(1번출구)도보 15분
              </span>
            </p>
            <p className="flex items-center">
              <i className="location-map__icon">
                <Image src={busIcon} width={28} height={28} alt="bus" />
              </i>
              <strong className="location-map__transportation">버스</strong>
              <span className="tablet:text-sm">
                청원빌딩 정류장:[마포06]
                <br />
                서울도시가스마포사옥 정류장:[7016]
              </span>
            </p>
            <p className="flex items-center">
              <i className="location-map__icon">
                <Image
                  src={parkingLotIcon}
                  width={28}
                  height={28}
                  alt="parking lot"
                />
              </i>
              <strong className="location-map__transportation">주차장</strong>
              <span className="tablet:text-sm">매장 지하1층 기계식 주차장</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
