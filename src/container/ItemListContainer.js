import React from 'react'
import ItemCount from '../components/ItemCount';

function ItemListContainer() {
    return(
    <div><h4 className="listContainer">
        Proximamente catalogo</h4>
        <ItemCount initialValue={1} stock={20}/>
    </div> );
};

export default ItemListContainer;
