import React from 'react'
import './Item.css'

const Item = ({products}) => {
    return (
        <div>
            <h2 className ="itemMarca">{products.marca}</h2>
            <img src = {products.imagen} className="itemImg"/>
        </div>
    )
}

export default Item

