import React from 'react';

function CartItem(props) {
    return (

        <tr>
            <th scope="row">{props.id}</th>
            <td>Descripcion</td>
            <td>{props.cantidad}</td>
            <td><button className="btn btn-danger" id={props.id}>x</button></td>
        </tr>


    );
}

export default CartItem;