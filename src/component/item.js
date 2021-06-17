import logo from "./logo192.png"
import { Card, Col, Button } from 'react-bootstrap';
import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";


function Item(props) {
    const cart = [""];

    const stock = props.stock;
    function restar(event) {
        if (clicks > 1) {
            setClicks(clicks - 1);
        }
    };

    function aumentar(event) {
        if (clicks < stock) {
            setClicks(clicks + 1);
        }

    };
    function sendCart() {
        $("#messege").empty();
        $("#messege").append(`<h6 class="p-3">${clicks} x ${props.title} agregado al Carrito</h6>`).fadeIn(500).delay(800).fadeOut(800);
        const pushCart = props.title;
        cart.push(pushCart);
        console.log(cart);

    }
    const [clicks, setClicks] = React.useState(1);

    return (
        <Col className="mt-1 d-flex align-item-strech " xs={12} md={3} >
                <Card className="m-1" >
                    <Card.Img variant="top" className="card-img p-1" src={props.img} />
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <div className="card.title">
                            <Card.Title >{props.title}</Card.Title>
                        </div>
                        <div>
                        <Card.Text>
                           <h4 className="text-success border-bottom border-primary text-center">$ {props.price}</h4> 
                            <div className="text-success">Stock disponible {props.stock}</div>
                        </Card.Text>

                        <div className="row d-flex justify-content-center align-item-center">
                            <button className="col-2 m-1 btn btn-danger rounded" onClick={restar}>-</button>
                            <span className="col-6 m-1 border border-secondary rounded text-center align-item-center">{clicks}</span>
                            <button className="col-2 m-1 btn btn-success rounded" onClick={aumentar} >+</button>
                        </div>
                        <Link to={`/productos/${props.id}`}>
                            <Button id={props.id} className="mt-3 w-100" variant="primary" onClick={sendCart}>{props.btnText}</Button>
                        </Link>
                        
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            )
   
}

export default Item;