import React from 'react';

import './collection-preview.styles.scss';
import  CollectionItem from './../collection-item/collection-item.component';

const CollectionPreview = ({title,items})=>(
    
  
        <div className="collection-preview">
            <div className="title">{title.toUpperCase()}</div>
            <div className="preview">
               {
                   items.filter((item,idx)=> idx < 4)
                   .map(({id,...otherItemsProps})=>(

                        <CollectionItem key={id} {...otherItemsProps} />
                     
                   ))
               }
            </div>
        </div>
    )


export default CollectionPreview