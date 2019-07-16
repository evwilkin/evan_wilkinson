import React from 'react';
import TableData from './TableData';
import Email from './Email';
import Address from './Address';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const TableRow = props => {
  const { id, name, username, email, address } = props.user;
  return (
    <tr>
      <TableData>
        <Link to={`/${id}`}>
          {name}
        </Link>
      </TableData>
      <TableData>
        {username}
      </TableData>
      <TableData>
        <Email email={email} />
      </TableData>
      <TableData>
        <Address address={address} />
      </TableData>
    </tr>
  );
}

TableRow.propTypes = {
  user: PropTypes.object
}

export default TableRow;
