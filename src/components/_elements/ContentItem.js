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

@withStyles(styles)

//ContentItem Component 
class ContentItem extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render() {
        let contentStore = '';
        let contentBaseStyle = 'content  f1_container';
        let contentStyleMod = '';

        switch (this.props.item.contentType) {
          case 'work':
            contentStore = <ContentWork item={this.props.item}/>
            contentStyleMod = 'content--work';
            break;
            case 'pov':
            contentStore = <ContentPov item={this.props.item}/>
            contentStyleMod = 'content--pointOfView';
            break;
            case 'pressMention':
            contentStore = <ContentPressMention item={this.props.item}/>
            contentStyleMod = 'content--pressMention';
            break;
            case 'pressRelease':
            contentStore = <ContentPressRelease item={this.props.item}/>
            contentStyleMod = 'content--pressRelease';
            break;
            case 'award':
            contentStore = <ContentAward item={this.props.item}/>
            contentStyleMod = 'content--award';
            break;
            case 'event':
            contentStore = <ContentEvent item={this.props.item}/>
            contentStyleMod = 'content--event';
            break;
            case 'companyFact':
            contentStore = <ContentFact item={this.props.item}/>
            contentStyleMod = 'content--companyFact';
            break;
            case 'cultureFact':
            contentStore = <ContentCulture item={this.props.item}/>
            contentStyleMod = 'content--cultureFact';
            break;
        }

        return (
            <div className={contentBaseStyle +' '+ contentStyleMod}>
                {contentStore}
            </div>
        );
  }
}

export default ContentItem;


  
