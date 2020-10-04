import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// seesion-storage can also be imported from redux-persist

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // only to persist 'cart'
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

// Treat it like a big JSON file
export default persistReducer(persistConfig, rootReducer);