import React from 'react';
import {connect} from  'react-redux';



import './collection.style.scss';
import { selectCollection } from '../../redux/shop-reducer/shop-selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({match,collection})=>{
const {title,items} = collection;
console.log(items);
return(
    <div className="collection-page">
        <h2 className="title">{title}</h2>
    <div className="items">
        {
                collection!=null?(
                items.map(item=>{
                    return (<CollectionItem key={item.id} item={item} />)
                })
            ):
            (<div>Invalid Category</div>)
        }
    </div>
   
  </div>
)}
const mapStateToProps = (state,ownProps)=>({
 collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);