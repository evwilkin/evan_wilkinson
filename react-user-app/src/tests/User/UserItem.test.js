import React from 'react';
import ReactDOM from 'react-dom';
import ToggleWrapper from '../../components/User/ToggleWrapper';
import UserItem from '../../components/User/UserItem';
import UserItemHeader from '../../components/User/UserItemHeader/UserItemHeader';
import { shallow } from 'enzyme';

const objKey = 'a';
const obj = {
  a: 'abc'
};
const nestedObject = { a: { b: 'c'}};

describe('<UserItem />', () => {
  describe('Not a nested <UserItem/>', () => {
    const component = shallow(<UserItem objKey={objKey} user={obj} />);

    it('renders one `<UserItemHeader />`', () => {
      expect(component.find(UserItemHeader)).toHaveLength(1);
    });

    it('renders no `<ToggleWrapper />`', () => {
      expect(component.find(ToggleWrapper)).toHaveLength(0);
    });
  });

  describe('Nested item in <UserItem />', () => {
    const component = shallow(<UserItem objKey={objKey} user={nestedObject} />);

    it('renders no `<UserItemHeader />`', () => {
      expect(component.find(UserItemHeader)).toHaveLength(0);
    });

    it('renders no `<ToggleWrapper />`', () => {
      expect(component.find(ToggleWrapper)).toHaveLength(1);
    });
  })

});
