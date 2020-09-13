import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  // Since we directly toggle the state in cart.reducer.js, so no need to pass the payload.
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

