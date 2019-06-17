import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';
import { connect } from './components/restaurants';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    this.props.addRestaurant(this.state);
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    restaurants: state.restaurants
=======
    items: state.items
>>>>>>> bc7a9b118eed3301b4625abcc9f4f5d0292fe218
  };
};


//connect this component by wrapping RestaurantInput below
<<<<<<< HEAD
export default connect(mapStateToProps, { addRestaurant })(RestaurantInput);
=======
export default connect(mapStateToProps, { addItem })(App);
>>>>>>> bc7a9b118eed3301b4625abcc9f4f5d0292fe218
