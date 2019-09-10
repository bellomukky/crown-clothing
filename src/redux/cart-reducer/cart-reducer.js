import cartActions from './cart.types';
import {AddItemToCart} from './cart.utils';

const INITIAL_STATE ={
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case cartActions.TOGGLE_HIDDEN_CART:
            return {
                ...state,
                hidden:!state.hidden
            }
        case cartActions.ADD_ITEM:
            return {
                ...state,
                cartItems:AddItemToCart(state.cartItems,action.payload)
            }    
        default:
            return state;
    }
}

export default cartReducer;