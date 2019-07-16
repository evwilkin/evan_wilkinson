import React, { Component } from 'react';
import NavTab from './NavTab';

export default class NavTabs extends Component {
  state = {
    tabs: [
      {
        text: 'Item',
        isSelected: true
      },
      {
        text: 'Item',
        isSelected: false
      },{
        text: 'Item',
        isSelected: false
      }
    ]
  }

  selectTab = idx => {
    this.setState(state => {
      const tabs = state.tabs.map((tab, index) => {
        return (index === idx)
          ? {...tab, isSelected: true}
          : {...tab, isSelected: false};
      });
      return { tabs };
    });
  }

  render () {
    return (
      <ul className="navtabs">
        { this.state.tabs.map((tab, idx) => (
          <NavTab key={idx} tab={tab} idx={idx} selectTab={this.selectTab} />
        ))}
      </ul>
    );
  }
}
