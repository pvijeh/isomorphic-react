
import AppActions from '../actions/appActions';
import Fetcher from './ContentFetcher'

const WebAPIUtils = {
    getContent: function (cb) {
        Fetcher.getContent(function (content) {
            AppActions.receiveContent(content); 
        });

        if (typeof cb === 'function'){
            cb(); 
        }
    } 
}

export default WebAPIUtils; 
