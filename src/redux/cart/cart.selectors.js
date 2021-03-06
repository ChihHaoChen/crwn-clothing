import { createSelector, createStructuredSelector } from 'reselect';
import CartItem from '../../components/cart-item/cart-item.component';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart], 
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems], // always choose smaller sets of data, rather than from state.cart
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems], // always choose smaller sets of data, rather than from state.cart
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => 
      accumulatedQuantity + cartItem.quantity * cartItem.price, 0
  )
)