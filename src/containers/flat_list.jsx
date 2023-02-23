import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setFlats } from '../actions';
import Flat from '../components/flat';


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

  // Trigger the action
  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list">
        { this.renderList() }
      </div>
    )
  }
}

// To connect the action
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

// To connect the Redux State
function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
