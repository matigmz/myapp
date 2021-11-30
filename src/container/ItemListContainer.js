import React, {useEffect, useState} from 'react';
import ItemList from '../components/ItemList/ItemList';


const ItemListContainer = () => {

 const [products, setProducts] = useState([]);

 useEffect( () => {
    fetch('http://localhost:3000/notebooks')
    .then(response => response.json())
    .then(productsResponse => setProducts(productsResponse))
  }, [])

  return(
     <ItemList products = {products}/>
  )
}

export default ItemListContainer