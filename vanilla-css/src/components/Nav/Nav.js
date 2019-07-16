import React from 'react';
import './Nav.css';
import NavTitle from './NavTitle';
import NavTabs from './NavTabs';

const Nav = props => (
  <nav>
    <NavTitle />
    <NavTabs />
  </nav>
);

export default Nav;
