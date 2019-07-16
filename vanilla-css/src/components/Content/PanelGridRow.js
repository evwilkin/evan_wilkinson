import React from 'react';
import PropTypes from 'prop-types';

const PanelGridRow = props => {
  const { gridKey, gridValue } = props;
  const className = (gridKey === 'Status' && gridValue === 'Active')
    ? 'gridvalue active'
    : 'gridvalue';

  return (
    <div className="gridrow">
      <div className="gridkey">
        <span>{gridKey}</span>
      </div>
      <div className={className}>
        <span>{gridValue}</span>
      </div>
    </div>
  );
}

PanelGridRow.propTypes = {
  gridKey: PropTypes.string,
  gridValue: PropTypes.string
}

export default PanelGridRow;
