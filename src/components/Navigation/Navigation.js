/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
          <a className="Navigation-link" href="/work" onClick={Link.handleClick}>Work</a>
          <span className="Navigation-spacer"> | </span>
          <a className="Navigation-link" href="/ideas" onClick={Link.handleClick}>Ideas</a>
          <span className="Navigation-spacer"> | </span>
          <a className="Navigation-link" href="/clients" onClick={Link.handleClick}>Clients</a>
          <span className="Navigation-spacer"> | </span>
          <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
          <span className="Navigation-spacer"> | </span>
          <a className="Navigation-link" href="/careers" onClick={Link.handleClick}>Careers</a>
          <span className="Navigation-spacer"> | </span>
          <a className="Navigation-link" href="/news" onClick={Link.handleClick}>News</a>
          <span className="Navigation-spacer"> | </span>
          <a className="Navigation-link" href="/media" onClick={Link.handleClick}>Media</a>
          <span className="Navigation-spacer"> | </span>
          <a className="Navigation-link" href="/contact" onClick={Link.handleClick}>Contact</a>
      </div>
    );
  }

}

export default Navigation;
