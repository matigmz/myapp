import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
            <h2 className ="itemMarca">{item.marca}</h2>
            <img src = {item.imagen} className="itemImg"/>
            <h4 className = "itemPrecio">Precio: ${item.precio}</h4>
            <p>{item.detalles}</p>
        </div>
    )
}

export default ItemDetail
