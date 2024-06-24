// src/components/MapComponent.js

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token

const MapComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // Initial map center [lng, lat]
      zoom: 9, // Initial map zoom level
    });

    // Add mousemove event listener
    map.on('mousemove', (e) => {
      try {
        if (!e || !e.point) {
          console.error('Event or point is undefined');
          return;
        }

        const coordinate = map.unproject(e.point);

        if (!coordinate || !coordinate.lng || !coordinate.lat) {
          console.error('Invalid coordinate:', coordinate);
          return;
        }

        console.log('Mouse move at:', coordinate);
      } catch (error) {
        console.error('Error during mousemove event:', error);
      }
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
