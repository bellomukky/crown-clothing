import React from 'react';
import './checkout-item.style.scss';
import {connect} from 'react-redux';
import {removeItem,decreaseQuantity,increaseQuantity} from './../../redux/cart-reducer/cart-action';



const CheckoutItem = ({item,removeItem,increaseQuantity,decreaseQuantity})=>{
    const {imageUrl,name,quantity,price} = item
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <span class="arrow" onClick={()=>decreaseQuantity(item)}>&#10094;</span>
        <span class="value">{quantity}</span>  <span class="arrow" onClick={()=>increaseQuantity(item)}>&#10095;</span></span>
        <span className='price'>${price}</span>
        <span className='remove-button' onClick={()=>removeItem(item)}>&#10005;</span>
    </div>
)}

const mapDispatchToProps = dispatch=>({
    removeItem : item=>dispatch(removeItem(item)),
    decreaseQuantity:item=>dispatch(decreaseQuantity(item)),
    increaseQuantity:item=>dispatch(increaseQuantity(item))

})

export default  connect(null,mapDispatchToProps)(CheckoutItem);