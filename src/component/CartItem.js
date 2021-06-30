import React from 'react';

function CartItem(props) {
    return (
        <div>
            <h2>{props.id}</h2>
            <h3>{props.cantidad}</h3>

        </div>
    );
}

export default CartItem;