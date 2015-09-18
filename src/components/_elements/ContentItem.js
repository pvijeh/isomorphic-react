/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './contentItem.css';
import withStyles from '../../decorators/withStyles';

// import components 

import ContentWork from './ContentWork/ContentWork';
import ContentPov from './ContentPov/ContentPov';
import ContentPressMention from './ContentPressMention/ContentPressMention';
import ContentPressRelease from './ContentPressRelease/ContentPressRelease';
import ContentAward from './ContentAward/ContentAward';
import ContentEvent from './ContentEvent/ContentEvent';
import ContentFact from './ContentFact/ContentFact';
import ContentCulture from './ContentCulture/ContentCulture';

//ContentItem Component 
class ContentItem extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
        var contentStore;

        switch (this.props.item.contentType) {
          case 'work':
            contentStore = <ContentWork item={this.props.item}/>
            break;
            case 'pov':
            contentStore = <ContentPov item={this.props.item}/>
            break;
            case 'pressMention':
            contentStore = <ContentPressMention item={this.props.item}/>
            break;
            case 'pressRelease':
            contentStore = <ContentPressRelease item={this.props.item}/>
            break;
            case 'award':
            contentStore = <ContentAward item={this.props.item}/>
            break;
            case 'event':
            contentStore = <ContentEvent item={this.props.item}/>
            break;
            case 'companyFact':
            contentStore = <ContentFact item={this.props.item}/>
            break;
            case 'cultureFact':
            contentStore = <ContentCulture item={this.props.item}/>
            break;
        }


        return (
            <div>
            {contentStore}
            </div>
        );
  }
}

export default ContentItem;


  
