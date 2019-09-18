import cartActions from './cart.types';

export const toggleCartHidden=()=>({
   type:cartActions.TOGGLE_HIDDEN_CART
})

export const addItem=item=>({
   type:cartActions.ADD_ITEM,
   payload:item
}) 

export const removeItem=item=>({
   type:cartActions.REMOVE_ITEM,
   payload:item
})

export const increaseQuantity=item=>({
   type:cartActions.INCREASE_QUANTITY,
   payload:item
})
export const decreaseQuantity=item=>({
   type:cartActions.DECREASE_QUANTITY,
   payload:item
}) 

