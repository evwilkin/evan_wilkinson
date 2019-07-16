import React from 'react';
import ReactDOM from 'react-dom';
import ToggleWrapper from '../../components/User/ToggleWrapper';
import UserItemHeader from '../../components/User/UserItemHeader/UserItemHeader';
import UserItemContainer from '../../components/User/UserItemContainer';
import { shallow } from 'enzyme';

const objKey = 'a';
const obj = {
  a: 'abc'
};
const nestedObject = { a: { b: 'c'}};
const buildNestedTable = () => null;
const component = shallow(<ToggleWrapper
  objKey={objKey}
  obj={obj}
  nestedObject={nestedObject}
  buildNestedTable={buildNestedTable}
/>);

describe('<ToggleWrapper />', () => {
  it('renders one `<UserItemHeader />`', () => {
    expect(component.find(UserItemHeader)).toHaveLength(1);
  });

  it('renders one `<UserItemContainer />`', () => {
    expect(component.find(UserItemContainer)).toHaveLength(1);
  });

  it('changes isExpanded state value with toggleVisibility()', () => {
    const instance = component.instance();
    expect(component.state('isExpanded')).toBe(false);
    instance.toggleVisibility();
    expect(component.state('isExpanded')).toBe(true);
    instance.toggleVisibility();
    expect(component.state('isExpanded')).toBe(false);
  });
});
