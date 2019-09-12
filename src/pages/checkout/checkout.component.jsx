import React from 'react';
import './checkout.style.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartTotal,selectCartItems} from './../../redux/cart-reducer/cart.selector';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems,cartTotal})=>(
    <div className='checkout-page'>
       <div className='checkout-header'>
           <div className='header-block'>
                <span>Product</span>
           </div>
           <div className='header-block'>
                <span>Description</span>
           </div>
           <div className='header-block'>
                <span>Quantity</span>
           </div>
           <div className='header-block'>
                <span>Price</span>
           </div>
           <div className='header-block'>
                <span>Remove</span>
           </div>
       </div>
       {
           cartItems.map(cartItem=>(
               <CheckoutItem key={cartItem.id} item={cartItem} />
           ))
       }
       <div className='total'><span>${cartTotal}</span></div>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartTotal:selectCartTotal,
    cartItems:selectCartItems
})
export default connect(mapStateToProps)(CheckoutPage);