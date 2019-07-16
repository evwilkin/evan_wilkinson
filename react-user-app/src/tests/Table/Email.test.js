import React from 'react';
import Email from '../../components/Table/Email';
import { shallow } from 'enzyme';

const email = 'email';

describe('<Email />', () => {
  it('renders one `<a>`', () => {
    const wrapper = shallow(<Email email={email} />);
    expect(wrapper.find('a')).toHaveLength(1);
  });
});
