import React from 'react';
import './Table.css';
import TableHead from './TableHead';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

 const Table = props => (
  <table>
    <TableHead />
    <TableBody users={props.users} />
  </table>
);

Table.propTypes = {
  users: PropTypes.array
}

export default Table;
