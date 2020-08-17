import { combineReducers } from 'redux';
import userReducer from '/user/user.reducer';

// Treat it like a big JSON file
export default combineReducers({
  user: userReducer
})
