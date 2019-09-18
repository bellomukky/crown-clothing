import React from 'react';
import CollectPreview from './../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import {  selectCollectionForPreview } from '../../redux/shop-reducer/shop-selector';
import { connect } from 'react-redux';


import './collection-overview.style.scss';

const CollectionOverview = ({collections})=>(
    <div className='collections-overview'>
       {
            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectPreview key={id} {...otherCollectionProps} />
            ))
       }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);