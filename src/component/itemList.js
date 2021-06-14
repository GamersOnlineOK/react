import logo from "./logo192.png"
import { Card, Col, Button,Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import $ from 'jquery';
import Item from './item'


function ItemList(props) {
    const cart = [""];
    const stock = props.stock;
    const [data, setData] = useState(null);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetch("https://api.mercadolibre.com/sites/MLA/search?nickname=EWINNERS")
                .then((res) => res.json())
                .then((res) => {
                    setData(res.results);
                    console.log(res.results);
                });
        }, 1500);
        return () => {
            clearTimeout(timeOut);
          };
        }, [props.onSelect]);
        if (stock > 0) {
            return (
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {data !== null ? (
                        data.map((data, index) => {
                            return <Item key={index} id={index} title={data.title} price={data.price} stock={data.available_quantity} img={data.thumbnail} />
                        })
                    ) : (
                        <h3>
                            
                        <Spinner animation="grow" variant="success" />Cargando</h3>
                    )}

                </div>

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


export default ItemList;