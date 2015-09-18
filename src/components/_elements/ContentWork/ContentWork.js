/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentWork.css';
import withStyles from '../../../decorators/withStyles';

// ContentWork Component 
class ContentWork extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
            <div className="content  f1_container content--work">
                <div className="imageContainer">
                    <img src={this.props.item.contentImage} width={this.props.item.imgW} height={this.props.item.imgH}/>
                </div>
            </div>
    );
  }
}

export default ContentWork;


  
