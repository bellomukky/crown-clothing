import React from 'react';
import './cart-dropdown.style.scss';
import {connect} from 'react-redux';
import CartItem from './../cart-item/cart-item.component';
import CustomButton from './../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart-reducer/cart.selector';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from './../../redux/cart-reducer/cart-action';

const CartDropdown = ({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?
                cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} 
                />):
                <span className='empty-message'>Your cart is currently empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            dispatch(toggleCartHidden())
            history.push('/checkout')
            
        }}
    >Go to Checkout</CustomButton>
    </div>
)

const mapStateToProps = (state)=>({
    cartItems:selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));