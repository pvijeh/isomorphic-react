/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './newsPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class NewsPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'News';
    this.context.onSetTitle(title);
    return (
      <div className="page">
        <div className="pageContainer">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default NewsPage;
