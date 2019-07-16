import React from 'react';
import ReactDOM from 'react-dom';
import UserItemHeader from '../../../components/User/UserItemHeader/UserItemHeader';
import ExpandArrow from '../../../components/User/UserItemHeader/ExpandArrow';
import { shallow } from 'enzyme';

const objKey = 'a';
const obj = {
  a: 'abc'
};
const isNestedObject = true;
const toggle = () => null;
const component = shallow(<UserItemHeader
  objKey={objKey}
  obj={obj}
  isNestedObject={isNestedObject}
  toggle={toggle}
/>);

describe('<UserItemHeader />', () =>{
  it('should render one <ExpandArrow />', () => {
    expect(component.find(ExpandArrow)).toHaveLength(1);
  });

  it('should not show .list-group-item-text if no nested objects', () => {
    expect(component.find('.list-group-item-text')).toHaveLength(0);
  });
});
