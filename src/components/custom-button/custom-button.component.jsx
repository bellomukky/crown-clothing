import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children,isGoogleBtn,...otherProps})=>(
    <button {...otherProps} className={`${isGoogleBtn?'google-sign-in':''} custom-button`}>
        {children}
    </button>
)
export default CustomButton