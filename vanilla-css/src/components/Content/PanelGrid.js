import React, { Component } from 'react';
import PanelGridRow from './PanelGridRow';

class PanelGrid extends Component {
  state = {
    grid: {
      'Case ID': 'Case0002b',
      'Case Name': 'Development case instance',
      Status: 'Active',
      State: 'Started on March 16th, 2017'
    }
  }

  render () {
    return (
      <div className="panelgrid">
        { Object.keys(this.state.grid).map((gridKey, idx) => (
          <PanelGridRow gridKey={gridKey} key={idx} gridValue={this.state.grid[gridKey]} />
        )) }
      </div>
    )
  }
}

export default PanelGrid;
