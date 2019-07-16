import React from 'react';
import ReactDOM from 'react-dom';
import TableRow from '../../components/Table/TableRow';
import TableData from '../../components/Table/TableData';
import Email from '../../components/Table/Email';
import Address from '../../components/Table/Address';
import { shallow } from 'enzyme';

const user = {
  id: 1,
  name: 'name',
  username: 'username',
  email: 'email',
  address: {
    home: '123'
  }
};

describe('<TableRow />', () => {
  it('renders four `<TableData />`s', () => {
    const component = shallow(<TableRow user={user} />);
    expect(component.find(TableData)).toHaveLength(4);
  });

  it('renders one `<Email />`', () => {
    const component = shallow(<TableRow user={user} />);
    expect(component.find(Email)).toHaveLength(1);
  });

  it('renders one `<Address />`', () => {
    const component = shallow(<TableRow user={user} />);
    expect(component.find(Address)).toHaveLength(1);
  });
});
