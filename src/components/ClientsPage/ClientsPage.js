/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './clientsPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ClientsPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Clients';
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

export default ClientsPage;
