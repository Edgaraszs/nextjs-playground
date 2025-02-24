import { memo, useState, useCallback, useEffect  } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface Country {
  capitalInfo?: {
    latlng: Array<number>
  }
};

interface Props {
  country?: Country;
};

const containerStyle = {
  width: '100%',
  height: '600px'
};

// default
const center = {
  lat: 52.52,
  lng: 13.4,
};

function Map({ country }: Props) {
  const googleMapApiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapApiKey
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(center);

    setMap(map);
  }, []);

  useEffect(() => {
    if (map && country?.capitalInfo?.latlng) {
      map.setCenter({
        lat: country.capitalInfo.latlng[0],
        lng: country.capitalInfo.latlng[1],
      });
    }
  }, [map, country]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  ) : <></>;
}

export default memo(Map);