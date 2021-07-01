
import { Card, Col, Button } from 'react-bootstrap';
import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import useAddStock from "./js/main";
import {useMainConsume} from "../provider/MainProvider"

 

function Item(props) {
    const {sendCart}=useMainConsume();
    const stock = props.stock;
    const{clicks, restar, aumentar}=useAddStock(stock);
   
    const carts = [];
    
    const total=props.price*clicks;
    const obj={
        "id":props.id,
        "img":props.img,
        "price":props.price,
        "title":props.title,
        "cantidad":clicks,
        "total":total
    }
    
    return (


        <Col className="mt-1 d-flex align-item-strech " xs={12} md={6}  xl={3} >
            <Card className="m-1" >
                <Card.Img variant="top" className="card-img p-1" src={props.img} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="card.title">
                        <Card.Title >{props.title}</Card.Title>
                    </div>
                    <div>
                        <div>
                            <h4 className="text-success border-bottom border-primary text-center">$ {props.price}</h4>
                            <div className="text-success">Stock disponible {props.stock}</div>
                        </div>

                        <div className="row d-flex justify-content-center align-item-center">
                            <button className="col-2 m-1 btn btn-danger rounded" onClick={restar}>-</button>
                            <span className="col-6 m-1 border border-secondary rounded text-center align-item-center">{clicks}</span>
                            <button className="col-2 m-1 btn btn-success rounded" onClick={aumentar} >+</button>
                        </div>
                        <Link to={`/productos/detail/${props.id}`}>
                            <Button id={props.id} className="mt-3 w-100" variant="primary">Ver</Button>
                        </Link>
                        <Link to={`/carrito`}>
                            <Button id={props.id} className="mt-3 w-100" variant="success" onClick={()=>{sendCart(obj)}}>{props.btnText}</Button>
                        </Link>

                    </div>
                </Card.Body>
            </Card>
        </Col>
    )

}

export default Item;