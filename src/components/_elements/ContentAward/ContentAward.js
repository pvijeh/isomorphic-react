/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentAward.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)

//ContentItem Component 
class ContentAward extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div className="ContentItem">
          <p>award content </p>
          <p>{this.props.item.contentType}</p>
      </div>
    );
  }
}

export default ContentAward;


  
