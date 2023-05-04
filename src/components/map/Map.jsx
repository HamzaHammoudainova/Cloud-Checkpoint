import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from '../LocationPin'
import dotenv from 'dotenv';
dotenv.config();

const Map = ({location, zoomLevel }) => {

   const apiKey = process.env.REACT_APP_APIKEY;
  (
    <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key:apiKey}}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  )


}

export default Map