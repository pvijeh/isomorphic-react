/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import AppDispatcher from '../../core/Dispatcher';
import AppActions from '../../actions/appActions';
import AppStore from '../../stores/appStore';
import styles from './testPage.css';
import withStyles from '../../decorators/withStyles';
import WebAPIUtils from '../../core/WebAPIUtils';

WebAPIUtils.getContent();

var getAppState = function() {
  return {
    allTodos: AppStore.getAll()
  }; 
};

// console.log(getAppState());

/// Need to findout how to load initial state using es6 react components 

@withStyles(styles)

class TestComponent {

  constructor () {
    this.state =  getAppState() 
  }


  handleChange() {
    // AppActions.receiveContent('action1');
    console.log(getAppState());
  }

  render() {
    return (
      <div className="testComponent">
          <button onClick={this.handleChange}>
          button test </button>
          <p>{this.props.blahblah}</p>
      </div>
    );
  }
}

@withStyles(styles)

class TestPage extends React.Component {
  constructor () {
    super()
    this.state = { n: 5 }
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  static defaultProps = {
    blahblah: 'blah'
  }

  render() {
    let title = 'Test Page';

    this.context.onSetTitle(title);
    return (
      <div className="page">
        <div className="pageContainer">
          <h1>{title}</h1>
            {this.state.n}
          <TestComponent blahblah={this.props.blahblah} />
        </div>
      </div>
    );
  }

}

export default TestPage;


  
