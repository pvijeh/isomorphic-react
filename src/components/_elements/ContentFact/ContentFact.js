/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentFact.css';
import withStyles from '../../../decorators/withStyles';

//ContentItem Component 
class ContentFact extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div className="ContentItem">
            <p> This is a company fact </p>
          <p>{this.props.item.contentType}</p>
      </div>
    );
  }
}

export default ContentFact;


  
