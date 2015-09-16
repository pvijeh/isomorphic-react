
import AppDispatcher from '../core/Dispatcher'; 

// this should be changed to ES6
var AppActions = {
    receiveContent : function (content){
         AppDispatcher.handleServerAction({
          actionType: content,
          content: content
        });
    }
};

export default AppActions;