import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
            <h2 className ="itemMarca">{products.marca}</h2>
            <img src = {products.imagen} className="itemImg"/>
            <h4 className = "itemPrecio">Precio: ${products.precio}</h4>
            <p>{products.detalles}</p>
        </div>
    )
}

export default ItemDetail
