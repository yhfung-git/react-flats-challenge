import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './flat_list';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    };
  }

  selectedFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    const center = {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }

    const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

    const MyMapComponent = withScriptjs(withGoogleMap(() =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={center}
      >
        <InfoBox defaultPosition={new google.maps.LatLng(center.lat, center.lng)}>
          <div style={{ backgroundImage: `url('${this.state.selectedFlat.imageUrl}')`, width: '210px', height: '210px', backgroundPosition: 'center', backgroundSize:'cover', borderRadius: '5px' }}>
            <div style={{ padding: '5px',fontSize: '13px', color: 'white', fontWeight: 'bolder', backgroundColor: 'tomato', textAlign: 'center', borderRadius: '5px 5px 0 0' }}>
              {this.state.selectedFlat.name}{<br></br>}
              {this.state.selectedFlat.price} {this.state.selectedFlat.priceCurrency}
            </div>
          </div>
        </InfoBox>
        <Marker position={center}></Marker>
      </GoogleMap>
    ))

    const style = { height: `100vh` }

    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.selectedFlat}
          selected={this.state.selectedFlat}
        />
        <div className='map-container'>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={style} />}
          containerElement={<div style={style} />}
          mapElement={<div style={style} />}
        />
        </div>
      </div>
    )
  }

}

export default App;
