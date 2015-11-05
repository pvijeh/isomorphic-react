/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentWork.css';
import withStyles from '../../../decorators/withStyles';
import Link from '../../Link';

@withStyles(styles)

// ContentWork Component 
class ContentWork extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {

    // this.props.item.

    return (
      <a href={'/work/'+this.props.item.slug} onClick={Link.handleClick}>
        <div className="content--work">
              <div className="imageContainer">
                  <h3>{this.props.item.title.rendered}</h3>
                  <img src={this.props.item.contentImage} height={this.props.item.imgH} width={this.props.item.imgW}/>
              </div>
          </div>
        </a>
    );
  }
}

export default ContentWork;


  
