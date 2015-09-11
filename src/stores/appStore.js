
import AppDispatcher from '../core/Dispatcher'; 
import EventEmitter from 'events'; 
import assign from 'object-assign'; 

// need to replace this with es6 syntax
var AppStore = assign({}, EventEmitter.prototype, {

    getAll : function() {
        return 'tommy Gear'; 
    }

}); 


// Register callback to handle all updates
AppDispatcher.register(function(action) {

    // console.log(action.actionType);

});




export default AppStore; 
