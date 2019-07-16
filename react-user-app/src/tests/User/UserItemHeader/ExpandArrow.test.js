import React from 'react';
import ReactDOM from 'react-dom';
import ExpandArrow from '../../../components/User/UserItemHeader/ExpandArrow';
import { shallow, render } from 'enzyme';

describe('<ExpandArrow />', () => {
  it('returns an arrow icon', () => {
    const wrapper = shallow(<ExpandArrow />);
    expect(wrapper.find('.list-view-pf-expand')).toHaveLength(1);
  });
});
