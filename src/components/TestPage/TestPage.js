/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import AppDispatcher from '../../core/Dispatcher';
import AppActions from '../../actions/appActions';
import AppStore from '../../stores/appStore';
import styles from './testPage.css';
import withStyles from '../../decorators/withStyles';
import WebAPIUtils from '../../core/WebAPIUtils';

let getAppState = function() {
  return {
    allTodos: AppStore.getAll()
  };   
};



// inner test component 

class InnerComponent extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="InnerComponent">
          <p>this is an inner component</p>
      </div>
    );
  }
}

InnerComponent.defaultProps = { allTodos:  {} }


// Test Component 

@withStyles(styles)

class TestComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state =  {allTodos: props.allTodos}
  }

setAllTodos () {
  this.setState({allTodos : getAppState() }); 
}

componentDidMount() {
  WebAPIUtils.getContent(this.setAllTodos());
  setInterval(this.setAllTodos.bind(this), 300); 
}

  render() {
    return (
      <div className="testComponent">
          <p>{this.props.blahblah}</p>
          <InnerComponent/>
      </div>
    );
  }
}

TestComponent.defaultProps = { allTodos:  {} }















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


  
