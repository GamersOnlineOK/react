import React, { useEffect, useState } from 'react';
import { useMainConsume } from '../provider/MainProvider';
import { Card, Col, Button, Spinner } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import CartItem from './CartItem';

function Cart(props) {
    const { carts } = useMainConsume();
    const{totalGlobal}=useMainConsume();

    const [data, setData] = useState();

    return (
        <div className="container mt-5">
            <div>
                <NavLink className="btn btn-success m-2" to="/">Seguir Comprando</NavLink>
               
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Un.</th>
                        <th scope="col">SubTotal</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {carts? (
                carts.map((data, index) => {
                   
                    return <CartItem key={data.id} price={data.price} id={data.id} img={data.img} total={data.total} title={data.title} cantidad={data.cantidad} />

                })
            ) : (
                <h3 className="text-center mt-5">

                    <Spinner animation="grow" variant="success" />Cargando</h3>
            )}
                </tbody>
            </table>
            <div className="border-top text-right me-5">TOTAL: {totalGlobal}</div>

        </div>
    );
}

export default Cart;