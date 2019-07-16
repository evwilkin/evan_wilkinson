import React from 'react';
import PropTypes from 'prop-types';

const Email = ({ email }) => <a href={ `mailto:${email}` }>{email}</a>;

Email.propTypes = {
  email: PropTypes.string
}

export default Email;
