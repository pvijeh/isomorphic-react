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



//ContentItem Component 

class ContentItem extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <div className="ContentItem">
          <p>this is a content item</p>
          <p>{this.props.item}</p>
      </div>
    );
  }
}

// ContentContainer Component 

class ContentContainer extends React.Component {

  render() {

    var contentItems = []; 

    if (typeof this.props.allTodos.allTodos != 'undefined' ){

        // console.log(typeof this.props.allTodos);

      //   var thing = [
      //     {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "image": "../common/assets/ipad-mini.png"},
      //     {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": "../common/assets/t-shirt.png"},
      //     {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "image": "../common/assets/sucker.png"}
      // ]; 

        var thing = this.props.allTodos.allTodos; 

      thing.forEach(function(item){
          contentItems.push(<p key={item.id}>{item.title}</p>); 
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


  
