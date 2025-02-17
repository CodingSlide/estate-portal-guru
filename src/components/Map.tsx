
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import React from 'react';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your Google Maps API key
  });

  if (!isLoaded) return <div className="h-[500px] flex items-center justify-center">Loading map...</div>;

  return (
    <GoogleMap
      zoom={13}
      center={{ lat: 18.5507, lng: 73.9235 }} // Kharadi, Pune coordinates
      mapContainerClassName="w-full h-[500px] rounded-lg shadow-lg"
      options={{
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c5a57240" }],
          },
        ],
      }}
    >
      <MarkerF
        position={{ lat: 18.5507, lng: 73.9235 }}
        icon={{
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scaledSize: new window.google.maps.Size(40, 40),
        }}
      />
    </GoogleMap>
  );
};

export default Map;
