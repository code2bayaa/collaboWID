import React from 'react';
// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {useEffect, useRef} from 'react';

const MapComponent = () => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.maps, // Replace with your API key
  // });

  // if (loadError) return <div>Error loading maps</div>;
  // if (!isLoaded) return <div>Loading Maps...</div>;
  const mapRef = useRef(null);
  useEffect(() => {
    function widthMobile() {
      if (window.innerWidth < 768) {
        return '700px';
      } else if (window.innerWidth < 1024) {    
        return '800px';
      } else if (window.innerWidth < 1440) {
        return '425px';
      } else {
        return '1000px';
      } 
    }
    mapRef.current.innerHTML = `<iframe width="${widthMobile()}" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=39.696902632713325%2C-3.9982793555678406%2C39.70035195350648%2C-3.996449187785264&amp;layer=mapnik&amp;marker=-3.997364272187203%2C39.698627293109894" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=-3.997364&amp;mlon=39.698627#map=19/-3.997364/39.698627">View Larger Map</a></small>`
  },[])
    
  return (
    // <GoogleMap
    //   mapContainerStyle={mapContainerStyle}
    //   zoom={18}
    //   center={center}
    //   mapId="late_developer_1"
    // >
    //   <Marker position={center} title="Collaboration of Women in Development" />
    // </GoogleMap>
    <div ref={mapRef} style={{ width: '100%', height: '500px' }}>
    </div>
  );
};

export default MapComponent;
