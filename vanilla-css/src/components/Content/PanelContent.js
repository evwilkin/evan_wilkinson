import React, { Component } from 'react';

class PanelContent extends Component {
  state = {
    title: 'Panel content',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt esse cillum dolore eu deserunt mollit anim id est laborum.'
  }

  render () {
    return (
      <React.Fragment>
        <h1 className="panelHeader">{ this.state.title }</h1>
        <p className="panelBody">{ this.state.body }</p>
      </React.Fragment>
    )
  }
}

export default PanelContent;
