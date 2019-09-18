import {createSelector} from 'reselect';



const selectShop = state=>state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shopItems=>shopItems.shop
)

export const selectCollectionForPreview = createSelector(
    [selectShopItems],
    collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectCollection = urlParameter=>createSelector(
    [selectShopItems],
    collections=>collections[urlParameter]
);
