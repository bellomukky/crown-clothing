export const AddItemToCart= (cartItems,itemToAdd)=>{

    const existingItem = cartItems.find(
        cartItem=>cartItem.id === itemToAdd.id
    );
    
    if(existingItem)
    {
       return cartItems.map(cartItem=>
            cartItem.id===itemToAdd.id?
            {...cartItem,quantity:cartItem.quantity+1}
            :cartItem
        )
    }

    return [...cartItems,{...itemToAdd,quantity:1}]
}

export const RemoveItemFromCart = (cartItems,itemToRemove)=>{
    return cartItems.filter(cartItem=>cartItem.id!==itemToRemove.id);
}

export const DecreaseQuantity = (cartItems,itemToDecrease)=>{
    const existingItem = cartItems.find(cartItem=>cartItem.id===itemToDecrease.id);
    if(existingItem.quantity === 1)
    {
        return cartItems.filter(cartItem=>cartItem.id !== existingItem.id);
    }
    return cartItems.map(cartItem=>
        cartItem.id===existingItem.id?
        {...cartItem,quantity:cartItem.quantity-1}:
        cartItem
    )
}

export const IncreaseQuantity = (cartItems,itemToIncrease)=>{
     return cartItems.map(cartItem=>
        cartItem.id===itemToIncrease.id?
        {...cartItem,quantity:cartItem.quantity+1}:
        cartItem
    )
}