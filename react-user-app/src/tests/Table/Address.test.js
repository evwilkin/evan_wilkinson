import React from 'react';
import Address from '../../components/Table/Address';
import { shallow } from 'enzyme';

const address = {
  street: 'street',
  suite: 'suite',
  city: 'city',
  zipcode: 'zipcode'
};

describe('<Address />', () => {
  it('renders one `<a>`', async () => {
    const wrapper = shallow(<Address address={address} />);
    expect(wrapper.find('p')).toHaveLength(3);
  });
});
