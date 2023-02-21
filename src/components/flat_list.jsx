import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map(({name, imageUrl, price, priceCurrency}, index) =>
      <Flat name={name} image={imageUrl} price={price} currency={priceCurrency} key={index}/>
    );
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
