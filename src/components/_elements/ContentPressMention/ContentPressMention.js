/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentPressMention.css';
import withStyles from '../../../decorators/withStyles';

//ContentPressMention Component 
class ContentPressMention extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div className="ContentItem">
          <p>This is a Press Mention</p>
          <p>{this.props.item.contentType}</p>
      </div>
    );
  }
}



export default ContentPressMention;


  
