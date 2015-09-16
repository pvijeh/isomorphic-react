
import AppActions from '../actions/appActions';
import Fetcher from './ContentFetcher'

const WebAPIUtils = {
    getContent: function () {
        Fetcher.getContent(function (content) {
            AppActions.receiveContent(content); 
        });
    } 
}

export default WebAPIUtils; 
