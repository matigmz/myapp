import React from 'react'
import { Container } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    console.log(products)
    return (
        <Container className="my-5">
        <div>
            {products.map ( products => {
                return <Item products = {products}/>
            })}
        </div>
        </Container>
    )
}

export default ItemList
