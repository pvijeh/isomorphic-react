/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentCulture.css';
import withStyles from '../../../decorators/withStyles';

//ContentItem Component 
class ContentCulture extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div className="ContentItem">
            <p>This is a culture fact </p>
          <p>{this.props.item.contentType}</p>
      </div>
    );
  }
}



export default ContentCulture;


  
