import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children,inverted,isGoogleBtn,...otherProps})=>(
    <button {...otherProps} className={`${inverted?'inverted':''} ${isGoogleBtn?'google-sign-in':''} custom-button`}>
        {children}
    </button>
)
export default CustomButton