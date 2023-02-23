import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`
    }

    let classes = "card";
    if (this.props.flat === this.props.selectedFlat) {
      classes += " active";
    }

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className='card-category'>
          {this.props.flat.price} {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
      </div>
    )
  }
}

// Connect to the action
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

// Connect to the Redux State in index.jsx
function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
