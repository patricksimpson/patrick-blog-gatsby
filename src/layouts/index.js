import React from 'react';
import Navigation from '../components/navigation/';

export default class Template extends React.Component {

  render() {
    return (
      <div>
      {this.props.children()}
      <Navigation />
      </div>
    );
  }
}
