import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    console.log(products)
    return (
        <div>
            {products.map ( products => {
                return <Item products = {products}/>
            })}
        </div>
    )
}

export default ItemList
