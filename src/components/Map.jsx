import React, { useEffect } from 'react';

const MapComponent = () => {
  const containerStyle = {
    width: '100%',
    height: '380px'
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d1635898d7deb9a1f555db000f1314f2&autoload=false`;

    script.onload = () => {
      const { kakao } = window;

      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.9780),
          level: 5
        };
        const map = new kakao.maps.Map(mapContainer, options);

        // 마커 생성
        const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);
        const marker = new kakao.maps.Marker({
          position: markerPosition
        });

        // 마커 지도에 추가
        marker.setMap(map);
      });
    };

    document.head.appendChild(script);
  }, []);

  return <div id="map" style={containerStyle}></div>
};

export default MapComponent;