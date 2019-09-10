import React from 'react';
import './cart-dropdown.style.scss';
import {connect} from 'react-redux';
import CartItem from './../cart-item/cart-item.component';
import CustomButton from './../custom-button/custom-button.component';

const CartDropdown = ({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=><CartItem id={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}})=>({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);