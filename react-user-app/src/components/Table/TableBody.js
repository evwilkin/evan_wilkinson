import React from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';

const TableBody = props => (
  <tbody>
    {props.users.map(user => {
      return <TableRow user={user} key={user.id} />
    })}
  </tbody>
);

TableBody.propTypes = {
  users: PropTypes.array
}

export default TableBody;
