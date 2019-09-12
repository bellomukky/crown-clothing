
import React from 'react';

import {ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from './../../redux/cart-reducer/cart-action';


import './cart-icon.style.scss';
import { selectCountCartItems } from './../../redux/cart-reducer/cart.selector';
import { createStructuredSelector } from 'reselect';

 const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapDispatchToProps=dispatch=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
   itemCount: selectCountCartItems
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)