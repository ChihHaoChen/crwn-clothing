import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// Treat it like a big JSON file
export default combineReducers({
  user: userReducer,
  cart: cartReducer
})
