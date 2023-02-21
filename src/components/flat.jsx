import React, { Component } from 'react';

class Flat extends Component {
  render() {

    const style = {
      backgroundImage: `url('${this.props.image}')`
    }

    return (
      <div className="card" style={style}>
        <div className='card-category'>
          {this.props.price} {this.props.currency}
        </div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    )
  }

}

export default Flat;
