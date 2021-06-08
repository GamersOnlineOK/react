import { Container, Row } from 'react-bootstrap';
import $ from "jquery";
import logo from "./logo192.png"
import { Card, Col, Button } from 'react-bootstrap';


function Producto(props) {


    return (

        <Col className="m-2" xs={12} md={3}>
            <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                        </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default Producto;