/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentPov.css';
import withStyles from '../../../decorators/withStyles';

//ContentItem Component 
class ContentPov extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div className="ContentItem">
          <p>Pov content</p>
          <p>{this.props.item.contentType}</p>
      </div>
    );
  }
}



export default ContentPov;


  
