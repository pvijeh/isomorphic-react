/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import AppDispatcher from '../../core/Dispatcher';
import AppActions from '../../actions/appActions';
import AppStore from '../../stores/appStore';
import styles from './testPage.css';
import withStyles from '../../decorators/withStyles';
import WebAPIUtils from '../../core/WebAPIUtils';

// import components 
import ContentItem from '../_elements/ContentItem';

let getAppState = function() {
  return {
    allTodos: AppStore.getAll()
  };   
};

// ContentContainer Component 

class ContentContainer extends React.Component {

  render() {

    var contentItems = []; 
    if (typeof this.props.allTodos.allTodos != 'undefined' ){
        var thing = this.props.allTodos.allTodos; 
      thing.forEach(function(item){
          contentItems.push(<ContentItem key={item.id} item={item}/>); 
      }); 
  }

    return (
      <div className="InnerComponent">
          <p>this is an inner component</p>
          <div>{contentItems}</div>
      </div>
    );
  }
}

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
  setInterval(this.setAllTodos.bind(this), 600); 
}

  render() {
    return (
      <div className="testComponent">
          <p>{this.props.blahblah}</p>
          <ContentContainer allTodos={this.state.allTodos}/>
      </div>
    );
  }
}

TestComponent.defaultProps = { allTodos:  [] }















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


  
