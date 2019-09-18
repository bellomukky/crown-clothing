import cartActions from './cart.types';
import {AddItemToCart,RemoveItemFromCart,IncreaseQuantity,DecreaseQuantity} from './cart.utils';

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
        case cartActions.REMOVE_ITEM:
            return{
                ...state,
                cartItems:RemoveItemFromCart(state.cartItems,action.payload)
            } 
            case cartActions.INCREASE_QUANTITY:
                return{
                ...state,
                cartItems:IncreaseQuantity(state.cartItems,action.payload)
            }
            case cartActions.DECREASE_QUANTITY:
            return{
                ...state,
                cartItems:DecreaseQuantity(state.cartItems,action.payload)
            }   
        default:
            return state;
    }
}

export default cartReducer;