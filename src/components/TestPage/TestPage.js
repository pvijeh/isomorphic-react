/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import AppDispatcher from '../../core/Dispatcher';
import AppActions from '../../actions/appActions';
import AppStore from '../../stores/appStore';
import styles from './testPage.css';
import withStyles from '../../decorators/withStyles';



var getAppState = function() {
  return {
    allTodos: AppStore.getAll(),
  }; 
};


@withStyles(styles)

class TestComponent {

  handleChange() {
    AppActions.doThing();
  }

  render() {
    return (
      <div className="testComponent">
          <button onClick={this.handleChange}>
          test button blah</button>
      </div>
    );
  }
}

@withStyles(styles)
class TestPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Test Page';
    this.context.onSetTitle(title);
    return (
      <div className="page">
        <div className="pageContainer">
          <h1>{title}</h1>
          <p>...</p>
          <TestComponent />
        </div>
      </div>
    );
  }

}

export default TestPage;


  
