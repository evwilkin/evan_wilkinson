import React from 'react';
import ReactDOM from 'react-dom';
import TableHead from '../../components/Table/TableHead';
import { render } from 'enzyme';

describe('<TableHead />', () => {
  it('renders four `<th>`s', () => {
    const wrapper = render(<TableHead />);
    expect(wrapper.find('th')).toHaveLength(4);
  });
});
