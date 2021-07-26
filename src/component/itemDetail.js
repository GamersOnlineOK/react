import React, { useState } from 'react';
import { useMainConsume } from '../provider/MainProvider';
import { Link } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import useAddStock from "./js/main";

function ItemDetail(props) {
    const data = props.attr;
    const stock = props.stock;
    const { sendCart } = useMainConsume();
    const { clicks, restar, aumentar } = useAddStock(stock);
    const [cantidad, setCantidad] = useState(0);

    
    const total = props.price * clicks;
    const obj = {
        "id": props.id,
        "img": props.img,
        "price": props.price,
        "title": props.title,
        "cantidad": clicks,
        "total": total
    }
    function getCant(e) {
        setCantidad(e);
        
    }
    return (
        <div className="col-12 col-md-8">
            <div className="row bg-white m-3 p-3 rounded shadow">
                <div className="col-12 col-md-5 d-flex flex-column align-content-center">
                    <img className="img-fluid p-5" src={props.img} /><h5 className="text-success text-center"><span className="text-dark">Precio $ </span>{props.price}</h5>
                    <div className="d-flex justify-content-around">


                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <h5>{props.title}</h5>


                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h6> cantidad Disponible: {props.stock}</h6>

                                <div className="d-flex justify-content-around">
                                    <button className="m-1 btn-left " onClick={restar}>-</button>
                                    <span className=" m-1 px-3">Cantidad: {clicks}</span>
                                    <button className=" m-1  btn-right " onClick={aumentar} >+</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="mt-3">

                        <Link >
                            <button onClick={() => { getCant(clicks) }} className="btn w-100 btn-outline-info"> Agregar Al Carrito</button>
                        </Link>
                        {cantidad == 0 ? (
                            <Link to={`/`}>
                                <button className="btn mt-2 btn-outline-primary w-100"> Volver a la tienda</button>
                            </Link>
                        ) : (
                            <Link to={`/carrito`}>
                                <button id={props.id} className="btn mt-2  btn-success w-100" onClick={() => { sendCart(obj) }}>Realizar Pago</button>
                            </Link>

                        )

                        }



                    </div>
                    

                </div>





            </div>
            <div className="row">
                <div className="col">
                    <h4>Detalle de Producto</h4>
                    <p className="p-3 border-bottom border-top text-secondary">
                        <ul>{data !== null ? (
                            data.map((data, index) => {
                                return <li ><span className="text-secondary">{data.name}</span>: <span className="text-success">{data.value_name}</span> </li>

                            })
                        ) : (
                            <h3 className="text-center mt-5">

                                <Spinner animation="grow" variant="success" />Cargando</h3>
                        )}</ul>


                    </p>
                </div>
            </div>

        </div>

    );
}

export default ItemDetail
