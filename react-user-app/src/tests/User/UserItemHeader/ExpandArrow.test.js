import React from 'react';
import ReactDOM from 'react-dom';
import ExpandArrow from '../../../components/User/UserItemHeader/ExpandArrow';
import { shallow, render } from 'enzyme';

const wrapper = shallow(<ExpandArrow isExpanded={false}/>);

describe('<ExpandArrow />', () => {
  it('returns an arrow icon', () => {
    expect(wrapper.find('.list-view-pf-expand')).toHaveLength(1);
  });

  it('does not contain a down arrow whe props.isExpanded is false', () => {
    expect(wrapper.find('.fa-angle-down')).toHaveLength(0);
  });

  it('does contain a down arrow whe props.isExpanded is true', () => {
    const wrapper = shallow(<ExpandArrow isExpanded={true}/>);
    expect(wrapper.find('.fa-angle-down')).toHaveLength(1);
  })
});
