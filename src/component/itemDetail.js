import React from 'react';
import { useMainConsume } from '../provider/MainProvider';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAddStock from "./js/main";

function ItemDetail(props) {

    const { sendCart } = useMainConsume();
    const stock = props.stock;
    const { clicks, restar, aumentar } = useAddStock(stock);

    const carts = [];

    const total = props.price * clicks;
    const obj = {
        "id": props.id,
        "img": props.img,
        "price": props.price,
        "title": props.title,
        "cantidad": clicks,
        "total": total
    }
    return (
        <div className="col-10">
            <div className="row bg-white m-3 p-3 rounded shadow">
                <div className="col-12 col-md-5 d-flex flex-column align-content-center">
                    <img className="img-fluid p-5" src={props.img} />
                    <div className="d-flex justify-content-around">


                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <h5>{props.title}</h5>
                    <p className="p-3 border-bottom border-top text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="">
                        <div className="d-flex justify-content-around">
                            <div>
                                 <h5 className="text-success text-center"><span className="text-dark">Precio $ </span>{props.price}</h5>
                            </div>
                           
                            <div>
                                <button className="m-1 btn btn-danger rounded" onClick={restar}>-</button>
                                <span className=" m-1 px-3">Cantidad: {clicks}</span>
                                <button className=" m-1 btn btn-success rounded" onClick={aumentar} >+</button>
                            </div>
                        </div>
                        <div>
                           <Link to={`/`}>
                            <button className="btn btn-primary"> Volver</button>
                        </Link>
                        
                        <Link to={`/carrito`}>
                            <Button id={props.id} className="mt-3 w-100" variant="success" onClick={() => { sendCart(obj) }}>{props.btnText}</Button>
                        </Link> 
                        </div>
                        


                    </div>

                </div>
            </div>

        </div>
    );
}

export default ItemDetail
