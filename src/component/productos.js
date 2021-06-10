import logo from "./logo192.png"
import { Card, Col, Button } from 'react-bootstrap';
import React from 'react';
import $ from 'jquery';


function Producto(props) {
    const cart=[""];
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
        const pushCart=props.title;
        cart.push(pushCart);
        console.log(cart);

    }
    const [clicks, setClicks] = React.useState(1);
    if (stock > 0) {
        return (

            <Col className="mt-1" xs={12} md={3}>
                <Card >
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>

                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                            <div className="text-success">Stock disponible {props.stock}</div>
                        </Card.Text>

                        <div className="row d-flex justify-content-center align-item-center">
                            <button className="col-2 m-1 btn btn-danger rounded" onClick={restar}>-</button>
                            <span className="col-6 m-1 border border-secondary rounded text-center align-item-center">{clicks}</span>
                            <button className="col-2 m-1 btn btn-success rounded" onClick={aumentar} >+</button>
                        </div>
                        
                        <Button id={props.id} className="mt-3 w-100" variant="primary" onClick={sendCart}>Comprar</Button>
                    </Card.Body>
                </Card>
            </Col>

        );
    } else {
        return (

            <Col className="mt-1" xs={12} md={3}>
                <Card >
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                            <div className="text-danger" >Stock disponible {props.stock}</div>
                        </Card.Text>


                        <div className="row d-flex justify-content-center align-item-center">
                            <button className="col-2 m-1 btn btn-secondary rounded" >-</button>
                            <span className="col-6 m-1 border border-secondary rounded text-center align-item-center">0</span>
                            <button className="col-2 m-1 btn btn-secondary rounded" >+</button>
                        </div>

                        <Button className="mt-3 w-100" variant="secondary">Sin Stock</Button>
                    </Card.Body>
                </Card>
            </Col>

        );
    }



}

export default Producto;