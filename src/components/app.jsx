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

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectedFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={this.center()}
    >
      {props.isMarkerShown && <Marker position={this.center()} />}
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
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
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
