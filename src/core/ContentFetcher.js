
import _content from './content.json';


let TIMEOUT = 100; 

const Fetcher = {
    getContent: function (cb, timeout) {
        timeout = timeout || TIMEOUT; 
        setTimeout(function () {
            cb(_content); 
        }, timeout); 
    }
}

export default Fetcher; 