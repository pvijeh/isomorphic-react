
// import _content from './content.json';
import $ from 'jquery';
import path from 'path';


let TIMEOUT = 100; 

const Fetcher = {
    getContent: function (cb, timeout) {

        timeout = timeout || TIMEOUT; 
        setTimeout(function () {
            $.get( "http://sullproto.dev/wp-json/wp/v2/posts", function( data ) {
                cb(data); 
                console.log(data);
            });
        }, timeout); 
    }
}

export default Fetcher; 