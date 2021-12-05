import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount'

const Item = ({products}) => {
    return (
        <div>
            <h2 className ="itemMarca">{products.marca}</h2>
            <img src = {products.imagen} className="itemImg"/>
            <h4 className = "itemPrecio">Precio: ${products.precio}</h4>
            <p>{ItemCount}</p>
        </div>
    )
}

export default Item

