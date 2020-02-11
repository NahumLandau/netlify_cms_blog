import React from "react";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

const GoogleMap = props => {
  return (
    <Map
      google={props.google}
      zoom={17}
      style={{width: "100%", height: "100%"}}
      initialCenter={{lat: 32.0647158, lng: 34.7632327}}
      styles={[{featureType: "poi", stylers: [{visibility: "off"}]}]}
      gestureHandling={"greedy"}
      scrollwheel={false}
    >
      <Marker position={{lat: 32.0647158, lng: 34.7632327}} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB8x9Vbhwx20dZtaslw_f7b6ZvBG063d5Y"
})(GoogleMap);
