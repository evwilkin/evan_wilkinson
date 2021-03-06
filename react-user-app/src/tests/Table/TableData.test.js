import React from 'react';
import TableData from '../../components/Table/TableData';
import { shallow } from 'enzyme';

describe('<TableData />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <TableData>
        <div className="unique" />
      </TableData>
    ));
    expect(wrapper.contains(<div className="unique" />)).toBe(true);
  });
});
