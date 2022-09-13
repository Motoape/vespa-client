import { useEffect, useRef } from 'react';
import { LATITUDE, LONGITUDE } from '../constants/map';

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
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '450px',
      }}
    />
  );
}

export default Home;
