/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentFact.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)

//ContentItem Component 
class PostTemplateOne extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div>
            <p> This is a company fact </p>
      </div>
    );
  }
}

export default PostTemplateOne;


  
