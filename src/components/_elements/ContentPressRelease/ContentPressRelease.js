/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentPressRelease.css';
import withStyles from '../../../decorators/withStyles';

//ContentItem Component 
class ContentPressRelease extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div className="ContentItem">
        <p>Press Release Content </p>
          <p>{this.props.item.contentType}</p>
      </div>
    );
  }
}

export default ContentPressRelease;


  
