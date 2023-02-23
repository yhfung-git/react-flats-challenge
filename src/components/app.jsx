import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from '../containers/flat_list';
import Map from '../containers/map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
    };
  }

  selectedFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    return (
      <div>
        <FlatList
          selectedFlat={this.selectedFlat}
          selected={this.state.selectedFlat}
        />
        <div className='map-container'>
          <Map selectedFlat={this.state.selectedFlat}/>
        </div>
      </div>
    )
  }

}

export default App;
