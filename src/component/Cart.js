import React, {useEffect, useState } from 'react';
import { useMainConsume } from '../provider/MainProvider';
import { Card, Col, Button, Spinner } from 'react-bootstrap';
import CartItem from './CartItem';

function Cart(props) {
    const {carts}=useMainConsume();
     
    const[data,setData]=useState();
    
    return (
        <div>
        {carts !== null  ? (
            carts.map((data, index) => {
                    
                return <CartItem key={data.id} id={data.id} cantidad={data.cantidad}  />
                
            })
        ) : (
            <h3 className="text-center mt-5">

                <Spinner animation="grow" variant="success" />Cargando</h3>
        )}
        
        </div>
    );
}

export default Cart;