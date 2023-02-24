import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    if (this.props.selectedFlat) {
      const style = { height: '100vh' }
      const mapImage= { backgroundImage: `url('${this.props.selectedFlat.imageUrl}')` }
      const center = {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng
      }

      const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

      const MyMapComponent = withScriptjs(withGoogleMap(() =>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={center}
        >
          <InfoBox defaultPosition={new google.maps.LatLng(center.lat, center.lng)}>
            <div className="map-box" style={mapImage}>
              <div className='map-box-title'>
                {this.props.selectedFlat.name}{<br></br>}
                {this.props.selectedFlat.price} {this.props.selectedFlat.priceCurrency}
              </div>
            </div>
          </InfoBox>
          <Marker position={center}></Marker>
        </GoogleMap>
      ))

      return (
        <div className='map-container'>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={style} />}
            containerElement={<div style={style} />}
            mapElement={<div style={style} />}
          />
        </div>
      )
    } else {
      const MyMapComponent = withScriptjs(withGoogleMap(() =>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{lat: 43.294336, lng: 5.568813}}
        >
        </GoogleMap>
      ))
      return (
        <div className='map-container'>
          <MyMapComponent
            isMarkerShown={false}
            googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{height: '100vh'}} />}
            containerElement={<div style={{height: '100vh'}} />}
            mapElement={<div style={{height: '100vh'}} />}
          />
        </div>
      )
    }
  }
}

// Connect to the Redux State in index.jsx
function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  };
}

export default connect(mapReduxStateToProps)(Map);
