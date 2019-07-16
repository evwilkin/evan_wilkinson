import React from 'react';
import ReactDOM from 'react-dom';
import ShowUser from '../../components/User/ShowUser';
import UserItem from '../../components/User/UserItem';
import { shallow } from 'enzyme';

const users = [
  {id: 1},
  {id: 2}
];
const match = {
  params: { id: 2}
}

describe('<ShowUser />', () => {
  it('renders two `<UserItem />`s', () => {
    const component = shallow(<ShowUser users={users} match={match} />);
    expect(component.find(UserItem)).toHaveLength(1);
  });
});
