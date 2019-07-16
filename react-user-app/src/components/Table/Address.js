import React, { Component } from 'react';
import zipcodes from 'zipcodes';
import PropTypes from 'prop-types';

class Address extends Component {
  state = {
    state: false
  }

  componentDidMount = async () => {
    try {
      const zip = this.props.address.zipcode.substr(0,5);
      const zipLookup = await zipcodes.lookup(zip);
      if (zipLookup) {
        const state = zipLookup.state;
        this.setState({ state });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render () {
    const { street, suite, city, zipcode } = this.props.address;
    return (
      <React.Fragment>
        <p>{street}</p>
        <p>{suite}</p>
        <p>{city}{this.state.state ? `, ${this.state.state}` : null} {zipcode}</p>
      </React.Fragment>
    );
  }
}

Address.propTypes = {
  address: PropTypes.object
}

export default Address;
