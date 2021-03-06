import React from 'react';
import TableBody from '../../components/Table/TableBody';
import TableRow from '../../components/Table/TableRow';
import { shallow } from 'enzyme';

describe('<TableHead />', () => {
  it('renders two `<TableRow />`s', () => {
    const users = [
      {id: 1},
      {id: 2}
    ]
    const component = shallow(<TableBody users={users} />);
    expect(component.find(TableRow)).toHaveLength(2);
  });
});
