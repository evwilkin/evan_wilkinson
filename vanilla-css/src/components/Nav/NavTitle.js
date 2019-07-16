import React, { Component } from 'react';

export default class NavTitle extends Component {
  state = {
    title: 'OpenShift'
  }

  render () {
    return <h1 className="navTitle">{ this.state.title }</h1>
  }
}
