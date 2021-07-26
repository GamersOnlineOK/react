import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMainConsume } from '../provider/MainProvider';

function CartItem(props) {
    const { deleteItemCart } = useMainConsume();
    return (

        <tr className=" p-2">
            <th scope="row">{props.id}</th>
            <td><img className="img-thumbnail" width="75px" src={props.img} alt="imagen de Producto" /></td>
            <td>{props.title}</td>
            <td>{props.cantidad}</td>
            <td>${props.price}</td>
            <td>${props.total}</td>
            <td><NavLink to="/carrito" onClick={() => { deleteItemCart(props.id) }} className="btn btn-danger" id={props.id}>x</NavLink></td>
        </tr>


    );
}

export default CartItem;