import React from 'react';
import UserItemContainer from '../../components/User/UserItemContainer';
import { shallow } from 'enzyme';

describe('<UserItemContainer />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <UserItemContainer>
        <div className="unique" />
      </UserItemContainer>
    ));
    expect(wrapper.contains(<div className="unique" />)).toBe(true);
  });
});
