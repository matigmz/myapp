import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    console.log(products)
    return (
        <div>
            {products.map ( product => {
                return <Item products = {product}/>
            })}
        </div>
    )
}

export default ItemList
