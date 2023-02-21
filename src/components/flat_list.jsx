import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map((flat, index) =>
      <Flat
        flat={flat}
        index={index}
        key={index}
        selected={flat.name === this.props.selected.name}
        handleClick={this.handleClick}
      />
    );
  }

  handleClick = (index) => {
    this.props.selectedFlat(index)
  }

  render() {
    return (
      <div className="flat-list">
        { this.renderList() }
      </div>
    )
  }

}

export default FlatList;
