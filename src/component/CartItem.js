import React from 'react';
import {NavLink } from 'react-router-dom';
import { useMainConsume } from '../provider/MainProvider';

function CartItem(props) {
    const {deleteItemCart}=useMainConsume();
    return (

        <tr className="itemDetail p-2">
            <th scope="row">{props.id}</th>
            <td><img src={props.img}/></td>
            <td>{props.title}</td>
            <td>{props.cantidad}</td>
            <td><NavLink to="/carrito" onClick={()=>{deleteItemCart(props.id)}} className="btn btn-danger" id={props.id}>x</NavLink></td>
        </tr>


    );
}

export default CartItem;