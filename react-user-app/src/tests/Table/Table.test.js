import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../components/Table/Table';
import TableHead from '../../components/Table/TableHead';
import TableBody from '../../components/Table/TableBody';
import { shallow } from 'enzyme';

describe('<Table />', () =>{
  it('should render <TableHead/>', () => {
    const component = shallow(<Table/>);
    expect(component.find(TableHead)).toHaveLength(1);
  });

  it('should render <TableBody/>', () => {
    const component = shallow(<Table/>);
    expect(component.find(TableBody)).toHaveLength(1);
  })
});
