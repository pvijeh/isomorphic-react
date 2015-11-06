/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './PostTemplateOne.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)

//ContentItem Component 
class PostTemplateOne extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div>
            <h1>This is a post template</h1>
            <p> This is a company fact </p>
      </div>
    );
  }
}

export default PostTemplateOne;


  
