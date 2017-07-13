import React from 'react';
import Navigation from '../components/navigation/';

import "../styles/main.scss";

export default class Template extends React.Component {

  render() {
    return (
      <div>
        <div className="main flex-center">
          {this.props.children()}
        </div>
        <div className="footer flex-center">
          <Navigation />
        </div>
        <div className="flex-center">
          <p>&copy; 2017 - Patrick Simpson</p>
        </div>
      </div>
    );
  }
}
