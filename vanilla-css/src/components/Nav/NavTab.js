import React from 'react';
import PropTypes from 'prop-types';

const NavTab = props => {
  const { isSelected, text } = props.tab;
  const { selectTab, idx } = props;
  const className = (isSelected) ? 'navtab selected' : 'navtab';
  return <li className={className} onClick={() => selectTab(idx)}>{ text }</li>;
}

NavTab.propTypes = {
  tab: PropTypes.shape({
    text: PropTypes.string,
    isSelected: PropTypes.bool
  }),
  idx: PropTypes.number,
  selectTab: PropTypes.func
}

export default NavTab;
