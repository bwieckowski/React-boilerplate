import { combineReducers } from 'redux';

export default combineReducers({
 // place your Reducers
  blank:  (state, action) => { return state == null ? [] : state; }
})