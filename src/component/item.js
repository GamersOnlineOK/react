
import { Card, Col, Button } from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";
import useAddStock from "./js/main";
import {useMainConsume} from "../provider/MainProvider"

 

function Item(props) {
    const stock = props.stock;
    const{clicks}=useAddStock(stock);
   
    
    
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

        
        <Col className="mt-1 d-flex align-item-strech w-100" xs={12} md={6}  xl={3} >
            <Card className="m-1 w-100 text-center  " >
                <Card.Img variant="top" className="card-img  p-1" src={props.img} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="card.title">
                        
                        <p>{props.title}</p>
                    </div>
                    <div>
                        <div>
                            <h4 className="text-success border-bottom border-top border-success text-center">$ {props.price}</h4>
                            
                        </div>

                        
                        <Link to={`/productos/detail/${props.id}`}>
                            <Button id={props.id} className="mt-1 btn-left  w-100" variant="primary">Ver</Button>
                        </Link>
                        

                    </div>
                </Card.Body>
            </Card>
        </Col>
        
    )

}

export default Item;