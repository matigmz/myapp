import React, {useEffect, useState} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const items = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}]

const getItem = (id) => {
    return new Promise (res => {
        setTimeout (() => {
            res(items.find(item => item.id === id))
        }, 2000)
        
    })
}

const ItemDetailContainer = () => {
   
    useEffect( () => {
       fetch('http://localhost:3000/notebooks')
       .then(response => response.json())
       .then(response => console.log(response))
       .catch(err => console.log(err))
     }, [])
   
     return(
        <ItemDetail item = {items[0]}/>
    
     )
   }
   
   export default ItemDetailContainer
