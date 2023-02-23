import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends Component {
  render() {
    const center = {
      lat: this.props.selectedFlat.lat,
      lng: this.props.selectedFlat.lng
    }

    const style = { height: `100vh` }

    const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

    const MyMapComponent = withScriptjs(withGoogleMap(() =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={center}
      >
        <InfoBox defaultPosition={new google.maps.LatLng(center.lat, center.lng)}>
          <div style={{ backgroundImage: `url('${this.props.selectedFlat.imageUrl}')`, width: '210px', height: '210px', backgroundPosition: 'center', backgroundSize:'cover', borderRadius: '5px' }}>
            <div style={{ padding: '5px',fontSize: '13px', color: 'white', fontWeight: 'bolder', backgroundColor: 'tomato', textAlign: 'center', borderRadius: '5px 5px 0 0' }}>
              {this.props.selectedFlat.name}{<br></br>}
              {this.props.selectedFlat.price} {this.props.selectedFlat.priceCurrency}
            </div>
          </div>
        </InfoBox>
        <Marker position={center}></Marker>
      </GoogleMap>
    ))

    return (
      <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={style} />}
      containerElement={<div style={style} />}
      mapElement={<div style={style} />}
    />
    )
  }
}

export default Map;
