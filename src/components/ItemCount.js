import React, {useState} from 'react';
import AppCss from '../App.css';

const ItemCount = ({initialValue, stock, onAdd}) => {
    const [contador, setContador] = useState (initialValue);

    const resta = () => {
        setContador(contador - 1);
    };
    const suma = () => {
        setContador(contador + 1);
    };
    
    if ( contador <= stock) { setcontador(contador - 1) };

    return (
        <div>
            <button className="btn btn-dark" onClick={resta}>-</button>
            <span>{contador}</span>
            <button className="btn btn-dark" onClick={suma}>+</button>
            <br />
            <button className="btn btn-light" onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
    if (contador< stock) {setContador(contador + 1)};
};

export default ItemCount;
