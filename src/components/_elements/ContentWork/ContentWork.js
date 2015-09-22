/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentWork.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)

// ContentWork Component 
class ContentWork extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
            <div className="imageContainer">
                <img src={this.props.item.contentImage} height={this.props.item.imgH} width={this.props.item.imgW}/>
            </div>
    );
  }
}

export default ContentWork;


  
