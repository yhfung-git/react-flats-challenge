import React, { Component } from 'react';

class Flat extends Component {
  selectFlat = () => {
    this.props.handleClick(this.props.index);
  }

  render() {

    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`
    }

    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={style}>
        <div className='card-category'>
          {this.props.flat.price} {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.selectFlat}></a>
      </div>
    )
  }

}

export default Flat;
