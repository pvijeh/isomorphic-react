
import AppDispatcher from '../core/Dispatcher'; 
import EventEmitter from 'events'; 
import assign from 'object-assign'; 

let _content = [];

// need to replace this with es6 syntax
var AppStore = assign({}, EventEmitter.prototype, {

    getAll : function() {
        return _content; 
    }

    // emitChange: function () {
    //     this.emit('change');
    // }

}); 

AppStore.dispatchToken = AppDispatcher.register(function (payload) {
    _content = payload.action; 
    // AppStore.emitChange();
    // console.log(payload);
});






export default AppStore; 
