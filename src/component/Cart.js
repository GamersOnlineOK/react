import React, { useEffect, useState } from 'react';
import { useMainConsume } from '../provider/MainProvider';
import { Card, Col, Button, Spinner } from 'react-bootstrap';
import CartItem from './CartItem';

function Cart(props) {
    const { carts } = useMainConsume();

    const [data, setData] = useState();

    return (
        <div className="container mt-5">
            <div>
                <button className="btn btn-success m-2">seguir comprando</button>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {carts !== null ? (
                carts.map((data, index) => {

                    return <CartItem key={data.id} id={data.id} cantidad={data.cantidad} />

                })
            ) : (
                <h3 className="text-center mt-5">

                    <Spinner animation="grow" variant="success" />Cargando</h3>
            )}
                </tbody>
            </table>
            

        </div>
    );
}

export default Cart;